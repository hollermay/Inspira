import useAuthStore from "../stores/authStore";

function SignUp() {
    const { signupForm, updateSignupForm, signup } = useAuthStore();

    return (
        <form onSubmit={signup} className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
            <div className="mb-4">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={signupForm.email}
                    onChange={updateSignupForm}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-6">
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={signupForm.password}
                    onChange={updateSignupForm}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
                Sign Up
            </button>
        </form>
    );
}

export default SignUp;
