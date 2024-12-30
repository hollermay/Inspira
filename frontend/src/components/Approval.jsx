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
        <div className="flex flex-wrap h-auto w-full items-center justify-center gap-6"> 
        {store.contributions && store.contributions.map((contribution) => (
            <div key={contribution._id} className="contribution bg-white shadow-md rounded-lg p-4 mb-4">
                <h3 className="text-xl font-semibold">{contribution.name}</h3>
                <pre className="bg-gray-600 p-2 text-gray-100">{contribution.content.substring(0, 100)}...</pre>
                <p className="text-gray-600"><strong>Email:</strong> {contribution.email}</p>
                <p className="text-gray-600"><strong>Template Name:</strong> {contribution.user}</p>
                <p className="text-gray-600"><strong>Content:</strong></p> 
                <button
                    onClick={() => store.approveContribution(contribution._id)} className='py-2 px-4 inline-flex justify-center items-center gap-x-5 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none'
                >
                    {approving === contribution._id ? "Approving..." : "Approve"}
                </button>
                <button onClick={() => store.deleteContribution(contribution._id)} className="mx-3 py-2 px-4 inline-flex justify-center items-center gap-x-5 text-sm font-medium rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Delete</button>
            </div>
        ))}
        </div>
        {success && <p className="success-message text-green-500">{success}</p>}
        {error && <p className="error-message text-red-500">{error}</p>}
    </div>
);
}

export default AdminContributions;
