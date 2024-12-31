import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useTemplateStore from '../stores/templateStore';

const SelfPage = () => {
    const store = useTemplateStore();
    const { templateId } = useParams();
    const [template, setTemplate] = useState(null);

    useEffect(() => {
        const fetch = async () => {
            try {
                await store.fetchTemplate(templateId); 
                setTemplate(store.template);
            } catch (error) {
                console.error('Error fetching template:', error);
            }
        };

        fetch();
    }, [store, templateId]);

    const downloadTemplate = (template) => {
        const blob = new Blob([template.content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${template.name}.gitignore`; 
        link.click();
        URL.revokeObjectURL(url); 
    };

    const shareTemplate = (template) => {
        const shareData = {
            title: `Check out this .gitignore template: ${template.name}`,
            text: `I found this awesome .gitignore template on Inspira: ${template.name}\n\n${template.content.substring(0, 100)}...`,
            url: `${window.location.origin}/template/${template._id}`, 
        };

        if (navigator.share) {
            navigator.share(shareData).catch((error) => {
                console.error('Error sharing:', error);
            });
        } else {
            alert('Sharing is not supported in your browser. Use the share links below.');
        }     
    };

    return (
        <div className="min-h-screen py-12">
            {template && (
                <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-pink-500 to-pink-700 p-8">
                        <h1 className="text-4xl font-extrabold text-white text-center">
                            {template.name}
                        </h1>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/2 p-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                Template Details
                            </h2>
                            <p className="text-gray-600 mb-4 bg-gray-100 p-4 rounded-lg">
                                {template.content}
                            </p>
                            <div className="mt-4">
                                <button
                                    onClick={() => downloadTemplate(template)}
                                    className="w-full lg:w-auto mb-4 lg:mb-0 py-3 px-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-pink-600 text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600"
                                >
                                    Download
                                </button>
                                <button
                                    onClick={() => shareTemplate(template)}
                                    className="w-full lg:w-auto mt-4 lg:mt-0 lg:ml-4 py-3 px-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                                    
                                >
                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                 <circle cx="18" cy="5" r="3" />
                                 <circle cx="6" cy="12" r="3" />
                                 <circle cx="18" cy="19" r="3" />
                                 <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                 <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                                 </svg>
                                    Share
                                </button>
                            </div>
                        </div>
                        <div className="lg:w-1/2 bg-gray-100 flex items-center justify-center">
                            <div className="p-6">
                                <div className="bg-black p-6 rounded-lg shadow-md">
                                    <h3 className="text-lg font-bold text-gray-200">Template Preview</h3>
                                    <pre className="mt-2 text-white">{template.content}</pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SelfPage;
