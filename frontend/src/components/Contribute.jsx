import { useState } from "react";
import useContributionStore from "../stores/contribute";

function ContributionForm() {
  const store = useContributionStore();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await store.createContribution(e);
      setSuccess("Contribution submitted successfully!");
      store.resetForms(); // Reset the form fields after a successful submission
    } catch (error) {
      setError("Failed to submit contribution.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contribution-form">
      <h2>Contribute to Gitignore</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={store.createForm.name}
          onChange={store.updateCreateFormField} // Corrected handler
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={store.createForm.email}
          onChange={store.updateCreateFormField} // Corrected handler
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="templateName"
          value={store.createForm.templateName}
          onChange={store.updateCreateFormField} // Corrected handler
          placeholder="Template Name"
          required
        />
        <textarea
          name="content"
          value={store.createForm.content}
          onChange={store.updateCreateFormField} // Corrected handler
          placeholder="Gitignore Content"
          rows="5"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Contribution"}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
    </div>
  );
}

export default ContributionForm;
