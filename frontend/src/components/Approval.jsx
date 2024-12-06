import { useState, useEffect } from "react";
import contriStore from "../stores/contribute";

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
  }, [store]);

  const handleApproveContribution = async (id) => {
    setApproving(id); // Set the current approving ID
    setError("");
    setSuccess("");

    try {
      await store.approveContribution(id);
      setSuccess("Contribution approved successfully.");
    } catch (error) {
      console.error("Error approving contribution:", error);
      setError("Failed to approve contribution.");
    } finally {
      setApproving(null); // Reset the approving ID
    }
  };

return (
    <div className="admin-contributions p-4">
        <h2 className="text-2xl font-bold mb-4">Open Source Contributions</h2>
        
        {store.contributions && store.contributions.map((contribution) => (
            <div key={contribution._id} className="contribution bg-white shadow-md rounded-lg p-4 mb-4">
                <h3 className="text-xl font-semibold">{contribution.name}</h3>
                <p className="text-gray-600"><strong>Email:</strong> {contribution.email}</p>
                <p className="text-gray-600"><strong>Template Name:</strong> {contribution.templateName}</p>
                <p className="text-gray-600"><strong>Content:</strong></p>
                <pre className="bg-gray-100 p-2 rounded">{contribution.content}</pre>
                <button
                    onClick={() => handleApproveContribution(contribution._id)}
                    disabled={approving === contribution._id} // Disable if approving
                    className={`mt-2 px-4 py-2 rounded ${approving === contribution._id ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-700"} text-white`}
                >
                    {approving === contribution._id ? "Approving..." : "Approve"}
                </button>
            </div>
        ))}
        {success && <p className="success-message text-green-500">{success}</p>}
        {error && <p className="error-message text-red-500">{error}</p>}
    </div>
);
}

export default AdminContributions;
