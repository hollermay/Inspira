import React, { useState, useEffect } from "react";
import contributeStore from "../stores/contribute";

function AdminContributions() {

  const store = contributeStore();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  // const [loading, setLoading] = useState(false);
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
    <div className="admin-contributions">
      <h2>Admin Contributions</h2>
      
      {store.contributions && store.contributions.map((contribution) => (
        <div key={contribution._id} className="contribution">
          <h3>{contribution.name}</h3>
          <p><strong>Email:</strong> {contribution.email}</p>
          <p><strong>Template Name:</strong> {contribution.templateName}</p>
          <p><strong>Content:</strong></p>
          <pre>{contribution.content}</pre>
          <button
            onClick={() => handleApproveContribution(contribution._id)}
            disabled={approving === contribution._id} // Disable if approving
          >
            {approving === contribution._id ? "Approving..." : "Approve"}
          </button>
        </div>
      ))}
      {success && <p className="success-message">{success}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default AdminContributions;
