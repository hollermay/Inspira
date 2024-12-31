import { motion } from "framer-motion";

export default function Hero() {
    return (
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
            <motion.div 
                className="relative z-10"
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <motion.div 
                    className="max-w-2xl text-center mx-auto"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.p 
                        className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-pink-600 to-pink-500 text-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Inspira: Workflows Simplified
                    </motion.p>

                    <motion.div
                        className="mt-5 max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
                            Welcome to <span className='font-extralight'>Inspira: </span>
                            The Ultimate Collection to find your perfect Template
                        </h1>
                    </motion.div>

                    <motion.div 
                        className="mt-5 max-w-3xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 1 }}
                    >
                        <p className="text-lg text-gray-600">
                            Find the perfect templates for your project. Save time and ensure your repository is clean and efficient.
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}
