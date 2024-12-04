import { useEffect } from 'react';
import useTemplateStore from '../stores/templateStore';

function LandingPage() {
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
        <div>
            <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
            <nav>
                <a className='flex justify-right'href='/admin'>Admin</a>
            </nav>
            </header>
            
            <h1 className='text-3xl '>Welcome to the Gitignore Template App</h1>
            <div className="flex flex-wrap  my-6 justify-left flex-row gap-8">
                {store.templates?.map((template) => (
                    <div key={template._id} className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 w-72">
                        <img className="w-full h-auto rounded-t-xl" 
                             src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80" 
                             alt="Card Image" 
                        />
                        <div className="p-4 md:p-5">
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white">{template.name}</h3>
                            <p className="mt-1 text-gray-500 dark:text-neutral-400">
                                {template.content.substring(0, 100)}...
                            </p>
                            <div className='flex flex-row justify-center items-center mt-3'>
                                <button 
                                    onClick={() => downloadTemplate(template)} 
                                    className="py-2 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                    Download
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LandingPage;
