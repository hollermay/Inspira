import useAuthStore from "../stores/authStore";

function Login() {
    const { loginForm, updateLoginForm, login } = useAuthStore();

    return (
        <>
        <div aria-hidden="true" className="flex absolute -top-96 start-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-pink-400/50 to-pink-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]"></div>
                <div className="bg-gradient-to-tl from-pink-500 via-red-100 to-pink-50 blur-3xl w-[60rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem]"></div>
            </div>
        
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
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
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