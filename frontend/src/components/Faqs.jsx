import React, { useState } from 'react';

export default function Faqs() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="grid md:grid-cols-5 gap-10">
                <div className="md:col-span-2">
                    <div className="max-w-xs">
                        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
                            Frequently<br />asked questions
                        </h2>
                        <p className="mt-1 hidden md:block text-gray-600">
                            Answers to the most frequently asked questions.
                        </p>
                    </div>
                </div>

                <div className="md:col-span-3">
                    <div className="hs-accordion-group divide-y divide-gray-200">
                        {faqData.map((faq, index) => (
                            <div
                                key={index}
                                className={`hs-accordion pt-6 pb-3 ${activeIndex === index ? 'active' : ''}`}
                                id={`hs-basic-with-title-and-arrow-stretched-heading-${index}`}
                            >
                                <button
                                    className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500"
                                    aria-expanded={activeIndex === index}
                                    aria-controls={`hs-basic-with-title-and-arrow-stretched-collapse-${index}`}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    {faq.question}
                                    <svg
                                        className={`hs-accordion-active:${activeIndex === index ? 'block' : 'hidden'} hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500`}
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
                                        <path d="m18 15-6-6-6 6" />
                                    </svg>
                                    <svg
                                        className={`hs-accordion-active:${activeIndex !== index ? 'block' : 'hidden'} block shrink-0 size-5 text-gray-600 group-hover:text-gray-500`}
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
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </button>
                                <div
                                    id={`hs-basic-with-title-and-arrow-stretched-collapse-${index}`}
                                    className={`hs-accordion-content ${activeIndex === index ? 'block' : 'hidden'} w-full overflow-hidden transition-[height] duration-300`}
                                    role="region"
                                    aria-labelledby={`hs-basic-with-title-and-arrow-stretched-heading-${index}`}
                                >
                                    <p className="text-gray-600">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

const faqData = [
    {
        question: "What is a .gitignore file?",
        answer: "A .gitignore file specifies intentionally untracked files to ignore. Files already tracked by Git are not affected."
    },
    {
        question: "How do I create a .gitignore file?",
        answer: "To create a .gitignore file, simply create a new file named .gitignore in your repository's root directory and list the files and directories you want to ignore."
    },
    {
        question: "Can I ignore files that are already committed?",
        answer: "Yes, you can ignore files that are already committed by adding them to the .gitignore file and then removing them from the repository with 'git rm --cached <file>'."
    }
];
