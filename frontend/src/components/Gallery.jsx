import { useEffect, useState } from 'react';
import useTemplateStore from '../stores/templateStore';

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
    }, [store]);

    const downloadTemplate = (template) => {
        const blob = new Blob([template.content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${template.name}.gitignore`; 
        link.click();
        URL.revokeObjectURL(url); 
    };

    const filteredTemplates = store.templates?.filter(template =>
        template.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <div aria-hidden="true" className="flex absolute -top-96 start-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-pink-400/50 to-pink-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]"></div>
                <div className="bg-gradient-to-tl from-pink-500 via-red-100 to-pink-50 blur-3xl w-[60rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem]"></div>
            </div>


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
                                {template.content.substring(0, 40)}...
                            </p>
                        </div>
                        <div className='flex flex-row justify-center items-center mt-auto p-4'>
                            <button 
                                onClick={() => downloadTemplate(template)} 
                                className="py-2 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-pink-600 text-white hover:bg-pink-700 focus:outline-none focus:bg-pink-700 disabled:opacity-50 disabled:pointer-events-none">
                                Download
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}

export default TemplateGallery;