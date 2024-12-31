import { useEffect, useState } from 'react';
import useTemplateStore from '../stores/templateStore';
import { useNavigate } from 'react-router-dom';

function TemplateGallery() {
    const store = useTemplateStore();
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('A-Z');

    useEffect(() => {
        const fetchTemplates = async () => {
            try {
                await store.fetchTemplates();
            } catch (error) {
                console.error('Error fetching templates:', error);
            }
        };

        fetchTemplates();
    }, []);

    const filteredTemplates = store.templates
        ?.filter((template) => template.name.toLowerCase().includes(searchQuery.toLowerCase()))
        ?.sort((a, b) => {
            if (sortOrder === 'A-Z') {
                return a.name.localeCompare(b.name);
            } else if (sortOrder === 'Z-A') {
                return b.name.localeCompare(a.name);
            }
            return 0;
        });

    const navigate = useNavigate();
    
    const openPage = (templateId) => {
       navigate(`/templates/${templateId}`);
    };

    return (
        <div className="min-h-screen p-10">
            <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">
                Explore Our Gitignore Templates
            </h1>

            <div className="flex justify-center mb-6">
                <input
                    type="text"
                    placeholder="Search templates..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full max-w-md p-3 border rounded-lg shadow-sm border-gray-300 focus:outline-none focus:ring focus:ring-pink-500"
                />
                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="p-2 border rounded-lg shadow-sm border-gray-300 ml-4 focus:outline-none focus:ring focus:ring-pink-500"
                >
                    <option value="A-Z">Sort A-Z</option>
                    <option value="Z-A">Sort Z-A</option>
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredTemplates?.map((template) => (
                    <div
                        key={template._id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:-translate-y-2 hover:shadow-xl"
                    >
                        <div className="h-40 bg-gradient-to-r from-pink-500 via-red-400 to-pink-300 flex items-center justify-center">
                            <h3 className="text-lg font-bold text-white">{template.name}</h3>
                        </div>
                        <div className="p-5">
                            <p className="text-gray-700 text-sm mb-4">
                                {template.content.substring(0, 100)}...
                            </p>
                            <div className="flex justify-between items-center">
                                <button
                                    onClick={() => openPage(template._id)}
                                    className="bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-500">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredTemplates?.length === 0 && (
                <div className="text-center text-gray-500 mt-10">
                    No templates found. Try searching for something else.
                </div>
            )}
        </div>
    );
}

export default TemplateGallery;
