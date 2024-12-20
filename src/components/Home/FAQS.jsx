import { FaChevronDown } from "react-icons/fa";

const FAQs = () => {
    const faqs = [
        {
            question: "What is your return policy?",
            answer: "We accept returns within 30 days of purchase. The product must be in its original condition.",
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we ship to most countries worldwide. Shipping charges may vary.",
        },
        {
            question: "How can I track my order?",
            answer: "Once your order is shipped, you will receive a tracking number via email.",
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
                    Frequently Asked Questions
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg border border-gray-200 p-6 relative group"
                        >
                            <div className="flex items-center justify-between cursor-pointer">
                                <h3 className="text-lg font-semibold text-gray-700">
                                    {faq.question}
                                </h3>
                                <FaChevronDown className="text-gray-400 group-hover:rotate-180 transition-transform duration-300" />
                            </div>
                            <p className="mt-4 text-gray-600 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 ease-in-out">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQs;
