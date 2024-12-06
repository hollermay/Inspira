import { useEffect } from 'react';
import useTemplateStore from '../stores/templateStore';
import AdminContributions from './Approval';
function TemplateManagementPage() {
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


    const handleCreateTemplate = async (event) => {
        event.preventDefault(); 
        try {
            await store.createTemplate(event);  
        } catch (error) {
            console.error('Error creating template:', error);
        }
    };


    const handleUpdateTemplate = async (event) => {
        event.preventDefault();
        try {
            await store.updateTemplate(event);  
        } catch (error) {
            console.error('Error updating template:', error);
        }
    };

    return (
        <>
       
        <div className='justify-center items-center'>
            <h1 className='text-3xl font-black'>Template Management</h1>

            <h2>Create Gitignore Template</h2>
            <form onSubmit={handleCreateTemplate}>
                <input
                    type="text"
                    name="name"
                    value={store.createForm.name}
                    onChange={store.updateCreateFormField}
                    placeholder="Template Name"
                />
                <textarea
                    name="content"
                    value={store.createForm.content}
                    onChange={store.updateCreateFormField}
                    placeholder="Gitignore Content"
                />
                <button type="submit">Create Template</button>
            </form>

            <h2>Existing Templates</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {store.templates?.map((template) => (
                    <div key={template._id} style={styles.card}>
                        <h3>{template.name}</h3>
                        <pre style={styles.pre}>{template.content}</pre>
                        <div style={styles.cardFooter}>
                            <button className='py-2 px-4 inline-flex justify-center items-center gap-x-5 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none'
                                onClick={() => store.toggleUpdate(template)} 
                            >
                                Update
                            </button>
                            <button className='py-2 px-4 inline-flex justify-center items-center gap-x-5 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none'
                                onClick={() => store.deleteTemplate(template._id)}  
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

          
            {store.updateForm._id && (
                <div>
                    <h2>Update Gitignore Template</h2>
                    <form onSubmit={handleUpdateTemplate} className=''>
                        <input
                            type="text"
                            name="name"
                            value={store.updateForm.name}
                            onChange={store.handleUpdateFieldChange}
                            placeholder="Template Name"
                        />
                        <textarea
                            name="content"
                            value={store.updateForm.content}
                            onChange={store.handleUpdateFieldChange}
                            placeholder="Gitignore Content"
                        />
                        <button type="submit">Update Template</button>
                    </form>
                </div>
            )}

            
        </div>


        <AdminContributions />
        </>
    );
}

const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        width: '250px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    cardFooter: {
        marginTop: '10px',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        textDecoration: 'none',
        marginRight: '10px', 
    },
    pre: {
        backgroundColor: '#f4f4f4', 
        padding: '10px',
        borderRadius: '4px',
        fontFamily: 'monospace',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word', 
        maxHeight: '150px', 
        overflowY: 'auto',
    }
};

export default TemplateManagementPage;
