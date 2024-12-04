import { useEffect } from 'react';
import useTemplateStore from '../stores/templateStore'; // Assuming you have this store

function TemplateManagementPage() {
    const store = useTemplateStore();

    // Fetch templates on page load
    useEffect(() => {
        const fetchTemplates = async () => {
            try {
                await store.fetchTemplates(); // Fetch templates for management
            } catch (error) {
                console.error('Error fetching templates:', error);
            }
        };

        fetchTemplates();
    }, [store]);

    // Handle create template form submission
    const handleCreateTemplate = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        try {
            await store.createTemplate(event);  // Call the createTemplate function from the store
        } catch (error) {
            console.error('Error creating template:', error);
        }
    };

    // Handle update template form submission
    const handleUpdateTemplate = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        try {
            await store.updateTemplate(event);  // Call the updateTemplate function from the store
        } catch (error) {
            console.error('Error updating template:', error);
        }
    };

    return (
        <div>
            <h1>Template Management</h1>

            {/* Create Template Form */}
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

            {/* Display Templates */}
            <h2>Existing Templates</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {store.templates?.map((template) => (
                    <div key={template._id} style={styles.card}>
                        <h3>{template.name}</h3>
                        <pre>{template.content.substring(0, 100)}...</pre>
                        <div style={styles.cardFooter}>
                            <button
                                onClick={() => store.toggleUpdate(template)}  // Pre-fill the update form
                                style={styles.button}
                            >
                                Update
                            </button>
                            <button
                                onClick={() => store.deleteTemplate(template._id)}  // Delete the template
                                style={styles.button}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Update Template Form */}
            {store.updateForm._id && (
                <div>
                    <h2>Update Gitignore Template</h2>
                    <form onSubmit={handleUpdateTemplate}>
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
    }
};

export default TemplateManagementPage;
