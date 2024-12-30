import useAuthStore from "../stores/authStore";

function Login() {
    const { loginForm, updateLoginForm, login } = useAuthStore();

    return (
        <>
        
        <div className="flex items-center justify-center min-h-screen relative z-10">
            <form onSubmit={login} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                <div className="mb-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={loginForm.email}
                        onChange={updateLoginForm}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={loginForm.password}
                        onChange={updateLoginForm}
                        required
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <button type="submit" className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600">
                    Login
                </button>
            </form>
        </div>
        </>
    );
}

export default Login;