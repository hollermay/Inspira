import { useEffect } from 'react';
import useTemplateStore from '../stores/templateStore';
import { Link } from 'react-router-dom';

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

    const downloadTemplate = (template) => {
        const blob = new Blob([template.content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${template.name}.gitignore`; 
        link.click();
        URL.revokeObjectURL(url); 
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
                <Link to='/gallery' className='text-center font-bold text-lg text-pink-600 items-center justify-items-center'>View All Templates</Link>
        </div>
)
}
