import { useEffect, useState } from 'react';
import useTemplateStore from '../stores/templateStore';
import { useNavigate } from 'react-router-dom';
function TemplateGallery() {
    const store = useTemplateStore();
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchTemplates = async () => {
            try {
                await store.fetchTemplates();
            } catch (error) {
                console.error('Error fetching templates:', error);
            }
        };

        fetchTemplates();
    }, []);

    

    const filteredTemplates = store.templates?.filter(template =>
        template.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const navigate = useNavigate();
    
    const openPage = (templateId) => {
       navigate(`/templates/${templateId}`);
    };


    return (
        <>
        <div className="flex flex-col items-center relative z-10">
            <input
                type="text"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='w-1/2 p-2 my-5 border border-pink-600 rounded-full border-x-8 border-spacing-10'
            />

            <div className="my-5 flex flex-wrap justify-center gap-8">
                {filteredTemplates?.map((template) => (
                    <div key={template._id} className="flex flex-col bg-white border shadow-sm rounded-xl w-72 h-80">
                        <div className="p-4 md:p-5 flex-grow">
                            <h3 className="text-lg font-bold text-gray-800">{template.name}</h3>
                            <p className="mt-1 text-gray-500">
                                {template.content.substring(0, 100)}...
                            </p>
                        </div>
                        <div className='flex flex-row justify-center items-center mt-auto p-4 gap-x-4'>
                            <button className=' py-2 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-small rounded-lg border border-pink-600 text-pink-600' onClick={() => openPage(template._id)}>
                                View
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg> 
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}

export default TemplateGallery;