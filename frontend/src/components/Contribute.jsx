import { useState } from "react";
import contriStore from "../stores/contributeStore";

function ContributionForm() {
  const store = contriStore();
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
      store.resetForms();
    } catch (error) {
      setError("Failed to submit contribution.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>

    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div aria-hidden="true" className="flex absolute -top-96 start-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-pink-400/50 to-pink-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]"></div>
                <div className="bg-gradient-to-tl from-pink-500 via-red-100 to-pink-50 blur-3xl w-[60rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem]"></div>
            </div>
      <div className="max-w-md w-full space-y-8 bg-white shadow-lg rounded-xl p-8 relative z-10">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Contribute to Gitignore
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Help improve our template collection
          </p>
        </div>
        <form 
          onSubmit={handleSubmit} 
          className="mt-8 space-y-6"
        >
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="user" className="sr-only">Name</label>
              <input
                type="text"
                name="user"
                value={store.createForm.user}
                onChange={store.updateCreateFormField}
                placeholder="Name"
                required
                className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                name="email"
                value={store.createForm.email}
                onChange={store.updateCreateFormField}
                placeholder="Email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="name" className="sr-only">Template Name</label>
              <input
                type="text"
                name="name"
                value={store.createForm.name}
                onChange={store.updateCreateFormField}
                placeholder="Template Name"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="content" className="sr-only">Gitignore Content</label>
              <textarea
                name="content"
                value={store.createForm.content}
                onChange={store.updateCreateFormField}
                placeholder="Gitignore Content"
                rows="5"
                required
                className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              onClick={handleSubmit}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit Contribution"}
            </button>
          </div>
        </form>

        {error && (
          <div className="mt-4 text-center">
            <p className="text-red-500 bg-red-100 py-2 px-4 rounded">
              {error}
            </p>
          </div>
        )}

        {success && (
          <div className="mt-4 text-center">
            <p className="text-green-500 bg-green-100 py-2 px-4 rounded">
              {success}
            </p>
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default ContributionForm;