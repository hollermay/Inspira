import { useEffect } from 'react';
import useTemplateStore from '../stores/templateStore';  // Assuming you have this store

function LandingPage() {
    const store = useTemplateStore();

    useEffect(() => {
        const fetchTemplates = async () => {
            try {
                await store.fetchTemplates();  // Fetch templates from the backend
            } catch (error) {
                console.error('Error fetching templates:', error);
            }
        };

        fetchTemplates();
    }, [store]);

    return (
        <div>
            <h1>Welcome to the Gitignore Template App</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {store.templates?.map((template) => (
                    <div key={template._id} style={styles.card}>
                        <h3>{template.name}</h3>
                        <pre>{template.content.substring(0, 100)}...</pre> {/* Preview of content */}
                        <div style={styles.cardFooter}>
                            <a href={`/templates/${template._id}`} style={styles.button}>
                                View Full Template
                            </a>
                        </div>
                    </div>
                ))}
            </div>
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

export default LandingPage;
