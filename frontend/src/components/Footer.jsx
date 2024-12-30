import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gradient-to-t from-pink-200 to-white rounded-lg shadow p-6">
        <div className="w-full max-w-screen p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              
              <span className="self-center text-2xl font-extralight whitespace-nowrap">Inspira</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
              <li>
                  <Link to="/gallery" className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none">
                    Templates
                  </Link>
              </li>
              <li>
                  <Link to='/contributions' className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none">
                    Contribute your own template
                  </Link>
              </li>
            </ul>
          </div>
          <hr className="border-gray-500 sm:mx-auto" />
          <span className="block text-sm text-gray-600 sm:text-center">© 2024 <a href="https://github.com/hollermay" className="hover:underline">Inspira</a>. All Rights Reserved.</span>
          <span className="block text-sm text-gray-600 sm:text-center">Made with ❤️ by <a href="https://github.com/hollermay" className="hover:underline">Udayan Sharma</a></span>
        </div>
      </footer>
    </div>
  )
}
