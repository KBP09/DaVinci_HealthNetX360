import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const lifestyleRecommendations = [
  {
    id: 1,
    title: "Exercise Regularly",
    description: "Regular physical activity can help you maintain a healthy weight, reduce your risk of chronic diseases, and improve your mood.",
    imgSrc: "/placeholder_lifetyle.png",
    bgColor: "bg-blue-100",
    tips: [
      "Aim for at least 150 minutes of moderate aerobic activity per week",
      "Include strength training exercises at least twice a week",
      "Find activities you enjoy to make exercise fun"
    ]
  },
  {
    id: 2,
    title: "Eat a Balanced Diet",
    description: "A balanced diet rich in fruits, vegetables, whole grains, and lean proteins can provide the nutrients your body needs to function optimally.",
    imgSrc: "/placeholder_lifetyle.png",
    bgColor: "bg-green-100",
    tips: [
      "Include a variety of colorful fruits and vegetables in your meals",
      "Choose whole grains over refined grains",
      "Limit processed foods and added sugars"
    ]
  },
  {
    id: 3,
    title: "Get Enough Sleep",
    description: "Quality sleep is essential for physical and mental health. Aim for 7-9 hours of sleep per night.",
    imgSrc: "/placeholder_lifetyle.png",
    bgColor: "bg-yellow-100",
    tips: [
      "Stick to a consistent sleep schedule",
      "Create a relaxing bedtime routine",
      "Avoid screens for at least an hour before bed"
    ]
  },
  {
    id: 4,
    title: "Manage Stress",
    description: "Practice stress-reduction techniques like meditation, deep breathing, or yoga to improve your mental and physical well-being.",
    imgSrc: "/placeholder_lifetyle.png",
    bgColor: "bg-purple-100",
    tips: [
      "Practice mindfulness meditation for 10 minutes daily",
      "Try deep breathing exercises when feeling stressed",
      "Engage in regular physical activity to reduce stress"
    ]
  },
  {
    id: 5,
    title: "Stay Hydrated",
    description: "Drink plenty of water throughout the day to keep your body functioning properly and maintain good health.",
    imgSrc: "/placeholder_lifetyle.png",
    bgColor: "bg-cyan-100",
    tips: [
      "Aim for 8 glasses (64 ounces) of water per day",
      "Carry a reusable water bottle with you",
      "Eat water-rich foods like fruits and vegetables"
    ]
  },
  {
    id: 6,
    title: "Limit Alcohol Intake",
    description: "If you drink alcohol, do so in moderation. Excessive alcohol consumption can lead to various health problems.",
    imgSrc: "/placeholder_lifetyle.png",
    bgColor: "bg-red-100",
    tips: [
      "Limit to 1 drink per day for women, 2 for men",
      "Choose alcohol-free days each week",
      "Alternate alcoholic drinks with water"
    ]
  },

  {
    id: 7,
    title: "Practice Good Hygiene",
    description: "Maintaining good personal hygiene can prevent the spread of illness and improve your overall health.",
    imgSrc: "/placeholder_lifetyle.png",
    bgColor: "bg-teal-100",
    tips: [
      "Wash your hands frequently with soap and water for at least 20 seconds.",
      "Brush and floss your teeth twice daily.",
      "Keep your living spaces clean and organized."
    ]
  },
  {
    id: 8,
    title: "Foster Strong Relationships",
    description: "Building and maintaining positive relationships can boost your emotional well-being and provide a support network.",
    imgSrc: "/placeholder_lifetyle.png",
    bgColor: "bg-pink-100",
    tips: [
      "Spend quality time with family and friends.",
      "Communicate openly and honestly with loved ones.",
      "Seek support when needed and offer it in return."
    ]
  },
  {
    id: 9,
    title: "Engage in Mental Stimulation",
    description: "Keeping your mind active can enhance cognitive function and reduce the risk of mental decline.",
    imgSrc: "/placeholder_lifetyle.png",
    bgColor: "bg-orange-100",
    tips: [
      "Read books, solve puzzles, or play strategy games.",
      "Learn a new skill or hobby.",
      "Challenge yourself with new experiences."
    ]
  },
  {
    id: 10,
    title: "Practice Safe Sun Exposure",
    description: "Protecting your skin from excessive sun exposure can prevent skin damage and reduce the risk of skin cancer.",
    imgSrc: "/placeholder_lifetyle.png",
    bgColor: "bg-yellow-200",
    tips: [
      "Use sunscreen with at least SPF 30.",
      "Wear protective clothing and hats.",
      "Seek shade during peak sun hours (10 a.m. to 4 p.m.)."
    ]
  },
  {
    id: 11,
    title: "Maintain a Healthy Weight",
    description: "Achieving and maintaining a healthy weight can reduce the risk of various health issues and improve overall quality of life.",
    imgSrc: "/placeholder_lifetyle.png",
    bgColor: "bg-blue-200",
    tips: [
      "Balance calorie intake with physical activity.",
      "Set realistic and achievable weight goals.",
      "Seek guidance from a healthcare provider or nutritionist."
    ]
  },
  {
    id: 12,
    title: "Regular Health Check-ups",
    description: "Routine medical check-ups and screenings can help detect potential health issues early and maintain overall health.",
    imgSrc: "/placeholder_lifetyle.png",
    bgColor: "bg-gray-100",
    tips: [
      "Schedule regular appointments with your healthcare provider.",
      "Stay up-to-date with vaccinations and screenings.",
      "Follow your doctor's advice and treatment plans."
    ]
  },
];

const LifestyleRecommendations = () => {
  const [selectedRecommendation, setSelectedRecommendation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (recommendation) => {
    setSelectedRecommendation(recommendation);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mt-20 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <header className="text-center mb-12">
          <motion.h1
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Healthy Lifestyle Recommendations
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Embrace these lifestyle choices for a healthier, happier you.
          </motion.p>
        </header>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {lifestyleRecommendations.map((item, index) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${item.bgColor} rounded-lg shadow-lg overflow-hidden cursor-pointer`}
              onClick={() => openModal(item)}
            >
              <img src={item.imgSrc} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">{item.title}</h2>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.footer
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to start your journey to better health?</h2>
          <motion.button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Get Personalized Recommendations
          </motion.button>
        </motion.footer>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className={`${selectedRecommendation.bgColor} p-8 rounded-lg shadow-xl max-w-md w-full`}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-3xl font-bold mb-4">{selectedRecommendation.title}</h2>
              <p className="text-gray-700 mb-4">{selectedRecommendation.description}</p>
              <h3 className="text-xl font-semibold mb-2">Tips:</h3>
              <ul className="list-disc pl-5 mb-4">
                {selectedRecommendation.tips.map((tip, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-2"
                  >
                    {tip}
                  </motion.li>
                ))}
              </ul>
              <motion.button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={closeModal}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LifestyleRecommendations;

