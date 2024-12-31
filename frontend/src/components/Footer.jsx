import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <footer className="bg-gradient-to-t from-pink-200 to-white text-gray-800 rounded-lg shadow-xl p-6 md:p-12 mt-12">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <motion.span 
                className="self-center text-3xl font-semibold text-pink-700"
                whileHover={{ scale: 1.1, color: "#f58fb7" }} 
                whileTap={{ scale: 0.95 }}
              >
                Inspira
              </motion.span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Link 
                  to="/gallery" 
                  className="py-0.5 md:py-3 px-4 md:px-1 border-b-2 border-transparent text-gray-500 hover:text-pink-700 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Templates
                </Link>
              </motion.li>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Link 
                  to="/contributions" 
                  className="py-0.5 md:py-3 px-4 md:px-1 border-b-2 border-transparent text-gray-500 hover:text-pink-700 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Contribute your own template
                </Link>
              </motion.li>
            </ul>
          </div>
          <hr className="border-gray-300 my-6" />
          <div className="sm:flex sm:items-center sm:justify-between text-sm text-gray-600">
            <span className="block text-center">
              © 2024 <a href="https://github.com/hollermay" className="hover:underline text-pink-600">Inspira</a>. All Rights Reserved.
            </span>
            <span className="block text-center">
              Made with ❤️ by <a href="https://github.com/hollermay" className="hover:underline text-pink-600">Udayan Sharma</a>
            </span>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
