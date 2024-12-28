
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

      return (
         <div className='relative z-10'>
            {store.template && (
               <div className="flex flex-col items-center justify-center min-h-screen py-12">
                  <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-4xl">
                     <div className="bg-gradient-to-r from-pink-600 to-pink-500 p-6">
                        <h1 className="text-center font-bold text-4xl text-white">
                           {store.template.name}
                        </h1>
                     </div>
                     <div className="p-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                           {store.template.name}
                        </h3>
                        <p className="text-gray-600 mb-6 rounded-lg p-4 bg-gray-100">
                           {store.template.content}
                        </p>
                        <div className='gap-10'>
                        <button
                           onClick={() => downloadTemplate(template)}
                           className="py-2 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-pink-600 text-white hover:bg-pink-700 focus:outline-none focus:bg-pink-700 disabled:opacity-50 disabled:pointer-events-none"
                        >
                           Download
                        </button>
                        <button className="py-2 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-pink-600 text-white hover:bg-pink-700 focus:outline-none focus:bg-pink-700 disabled:opacity-50 disabled:pointer-events-none">
                           Share
                        </button>
                        </div>
                     </div>
                  </div>
               </div>
            )}
         </div>
      );
    };

    export default SelfPage;
