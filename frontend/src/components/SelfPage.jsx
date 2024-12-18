
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
         <>
            {store.template && (
               <div className="flex flex-col items-center relative z-10 justify-center">
                  
                  <div className="flex flex-ro w-full h-auto mt-40">
                    <h1 className="text-center font-bold text-3xl bg-clip-text bg-gradient-to-l from-pink-600 to-pink-500 text-transparent">
                     {store.template.name}
                    </h1>
                     <div className="p-4 md:p-5">
                        <h3 className="text-lg font-bold text-gray-800">
                           {store.template.name}
                        </h3>
                        <p className="mt-1 text-gray-500">
                           {store.template.content.substring(0, 100)}...
                        </p>
                     </div>
                     <button onClick={() => downloadTemplate(template)} className="py-2 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-pink-600 text-white hover:bg-pink-700 focus:outline-none focus:bg-pink-700 disabled:opacity-50 disabled:pointer-events-none">
                        Download
                    </button>
                  </div>
               </div>
            )}
         </>
      );
    };

    export default SelfPage;
