import { motion } from "framer-motion";

export default function Features() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto flex flex-row"
    >
      <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-1">
          <motion.h2
            className="font-bold text-2xl md:text-3xl text-gray-800"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Simplify your .gitignore management
          </motion.h2>
          <motion.p
            className="mt-2 md:mt-4 text-gray-500"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Our platform helps you create and manage .gitignore files effortlessly, ensuring your projects stay clean and organized.
          </motion.p>
        </div>

        <div className="lg:col-span-2">
          <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
            {[
              {
                title: "Easy to Use",
                description:
                  "Our intuitive interface makes it simple to find your perfect Inspira and also lets you contribute to our space.",
                icon: (
                  <svg
                    className="shrink-0 mt-1 size-6 text-pink-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="10" x="3" y="11" rx="2" />
                    <circle cx="12" cy="5" r="2" />
                    <path d="M12 7v4" />
                    <line x1="8" x2="8" y1="16" y2="16" />
                    <line x1="16" x2="16" y1="16" y2="16" />
                  </svg>
                ),
              },
              {
                title: "Explore Templates",
                description:
                  "Choose from a wide range of templates contributed by developers like you!",
                icon: (
                  <svg
                    className="shrink-0 mt-1 size-6 text-pink-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 10v12" />
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                  </svg>
                ),
              },
              {
                title: "Community Driven",
                description:
                  "Contribute your custom .gitignore template and get featured on our page.",
                icon: (
                  <svg
                    className="shrink-0 mt-1 size-6 text-pink-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                ),
              },
              {
                title: "Regular Updates",
                description:
                  "Stay up-to-date with the latest .gitignore templates and best practices.",
                icon: (
                  <svg
                    className="shrink-0 mt-1 size-6 text-pink-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex gap-x-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
              >
                {feature.icon}
                <div className="grow">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
