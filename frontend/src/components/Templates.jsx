import { useEffect } from 'react';
import useTemplateStore from '../stores/templateStore';
import { Link, useNavigate } from 'react-router-dom';

export default function Templates() {
    const store = useTemplateStore();

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

    const navigate = useNavigate();
    
    const openPage = (templateId) => {
       navigate(`/templates/${templateId}`);
    };

return (
        <div className='flex flex-col items-center justify-center'>
                <h1 className='text-center font-bold text-3xl bg-clip-text bg-gradient-to-l from-pink-600 to-pink-500 text-transparent'>Browse from a wide range of our templates!</h1>                 
                <div className=" my-5 flex flex-wrap my-6 justify-center flex-row gap-8">
                        {store.templates?.slice(0,4).map((template) => (
                                <div key={template._id} className="flex flex-col bg-white border shadow-sm rounded-xl w-72">
                                        <div className="p-4 md:p-5">
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
                <Link to='/gallery' className='text-center font-bold text-lg text-pink-600 items-center justify-items-center'>View All Templates</Link>
        </div>
)
}
