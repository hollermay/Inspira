import { useState, useEffect } from "react";
import contriStore from "../stores/contributeStore";

function AdminContributions() {

  const store = contriStore();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [approving, setApproving] = useState(null); // Track which contribution is being approved

  useEffect(() => {
    const fetchContributions = async () => {
      setLoading(true);
      setError("");
      try {
        await store.fetchContributions();
      } catch (error) {
        console.error("Error fetching contributions:", error);
        setError("Failed to load contributions.");
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

return (
    <div className="admin-contributions p-4">
        <h2 className="text-2xl font-bold mb-4">Open Source Contributions</h2>
        
        {store.contributions && store.contributions.map((contribution) => (
            <div key={contribution._id} className="contribution bg-white shadow-md rounded-lg p-4 mb-4">
                <h3 className="text-xl font-semibold">{contribution.name}</h3>
                <p className="text-gray-600"><strong>Email:</strong> {contribution.email}</p>
                <p className="text-gray-600"><strong>Template Name:</strong> {contribution.templateName}</p>
                <p className="text-gray-600"><strong>Content:</strong></p>
                <pre className="bg-black p-2 text-white rounded">{contribution.content}</pre>
                <button
                    onClick={() => store.approveContribution(contribution._id)} className={`mt-2 px-4 py-2 rounded ${approving === contribution._id ? "bg-gray-400" : "bg-pink-500 hover:bg-pink-700"} text-white`}
                >
                    {approving === contribution._id ? "Approving..." : "Approve"}
                </button>
                <button onClick={() => store.deleteContribution(contribution._id)} className="mt-2 px-4 py-2 rounded bg-red-500 hover:bg-red-700 text-white">Delete</button>
            </div>
        ))}
        {success && <p className="success-message text-green-500">{success}</p>}
        {error && <p className="error-message text-red-500">{error}</p>}
    </div>
);
}

export default AdminContributions;
