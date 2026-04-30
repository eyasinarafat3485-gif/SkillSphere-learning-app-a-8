import React from 'react';

const LearningTips = () => {
    const tips = [
        {
            id: 1,
            title: "Study Techniques",
            desc: "Use the Pomodoro technique: 25 mins study, 5 mins break to stay fresh.",
            icon: "📚"
        },
        {
            id: 2,
            title: "Time Management",
            desc: "Set specific goals for each day and prioritize your hardest tasks first.",
            icon: "⏰"
        },
        {
            id: 3,
            title: "Active Recall",
            desc: "Test yourself frequently instead of just re-reading your notes.",
            icon: "💡"
        }
    ];
    return (
        <section className="my-10 w-[95%] md:w-[90%] mx-auto">
            <div className="max-w-7xl mx-auto px-5">
                <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-10 text-gray-800">Learning Tips</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {tips.map(tip => (
                        <div key={tip.id} className="bg-gray-100 p-8 rounded-2xl shadow-xl border-b-4 border-red-500 hover:shadow-2xl cursor-grab transition-all">
                            <div className="text-4xl mb-4">{tip.icon}</div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900">{tip.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{tip.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LearningTips;