import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gentleRain from "../assets/MentalHealthPage/sounds/gentle-rain.mp3";
import oceanWaves from "../assets/MentalHealthPage/sounds/ocean-waves.mp3";
import forestAmbience from "../assets/MentalHealthPage/sounds/forest-ambience.mp3";
import meditationBells from "../assets/MentalHealthPage/sounds/meditation-bells.mp3";
import softPiano from "../assets/MentalHealthPage/sounds/soft-piano.mp3";

gsap.registerPlugin(ScrollTrigger);

const audioFiles = {
  "Gentle Rain": gentleRain,
  "Ocean Waves": oceanWaves,
  "Forest Ambience": forestAmbience,
  "Meditation Bells": meditationBells,
  "Soft Piano": softPiano,
};

const MentalHealthPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const currentSound = useRef("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentExercise, setCurrentExercise] = useState(null);
  const headerRef = useRef(null);
  const mainRef = useRef(null);
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const sectionInView = sectionRefs.map((ref) =>
    useInView(ref, { once: true, margin: "-100px" })
  );

  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(headerRef.current, {
        backgroundPositionY: "50%",
        ease: "none",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      const particles = document.querySelectorAll(".floating-particle");
      particles.forEach((particle) => {
        gsap.to(particle, {
          x: "random(-30, 30)",
          y: "random(-30, 30)",
          rotation: "random(-90, 90)",
          duration: "random(3, 6)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      sectionRefs.forEach((sectionRef, index) => {
        gsap.from(sectionRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  // const playSound = (soundType) => {
  //   if (audioRef.current) {
  //     audioRef.current.pause();
  //     audioRef.current.src = `/sounds/${soundType
  //       .toLowerCase()
  //       .replace(" ", "-")}.mp3`;
  //     audioRef.current.play();
  //     setIsPlaying(true);
  //     let body = document.querySelector('body');

  //   }
  // };

  const playSound = (soundType) => {
    if (audioRef.current) {
      if (currentSound.current === soundType) {
        if (audioRef.current.paused) {
          audioRef.current.play();
          setIsPlaying(true);
        } else {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current.src = audioFiles[soundType];
        audioRef.current.play();
        audioRef.current.loop = true;
        setIsPlaying(true);
        currentSound.current = soundType;
      }
    }
  };

  const topics = [
    {
      name: "Depression",
      image: "/placeholder.svg",
      link: "https://www.nimh.nih.gov/health/topics/depression",
    },
    {
      name: "Anxiety",
      image: "/placeholder.svg",
      link: "https://www.nimh.nih.gov/health/topics/anxiety-disorders",
    },
    {
      name: "Relationships",
      image: "/placeholder.svg",
      link: "https://www.apa.org/topics/relationships",
    },
    {
      name: "Sleep",
      image: "/placeholder.svg",
      link: "https://www.sleepfoundation.org/mental-health",
    },
    {
      name: "Parenting",
      image: "/placeholder.svg",
      link: "https://www.apa.org/topics/parenting",
    },
    {
      name: "Eating Disorders",
      image: "/placeholder.svg",
      link: "https://www.nimh.nih.gov/health/topics/eating-disorders",
    },
    {
      name: "Addiction",
      image: "/placeholder.svg",
      link: "https://www.psychiatry.org/patients-families/addiction",
    },
    {
      name: "Stress",
      image: "/placeholder.svg",
      link: "https://www.apa.org/topics/stress",
    },
    {
      name: "Family",
      image: "/placeholder.svg",
      link: "https://www.apa.org/topics/families",
    },
    {
      name: "Grief",
      image: "/placeholder.svg",
      link: "https://www.apa.org/topics/grief",
    },
    {
      name: "Trauma",
      image: "/placeholder.svg",
      link: "https://www.psychiatry.org/patients-families/ptsd",
    },
    {
      name: "LGBTQ+",
      image: "/placeholder.svg",
      link: "https://www.psychiatry.org/patients-families/lgbtq",
    },
    {
      name: "Self-Esteem",
      image: "/placeholder.svg",
      link: "https://www.apa.org/topics/self-esteem",
    },
    {
      name: "Bipolar Disorder",
      image: "/placeholder.svg",
      link: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
    },
    {
      name: "OCD",
      image: "/placeholder.svg",
      link: "https://www.nimh.nih.gov/health/topics/obsessive-compulsive-disorder-ocd",
    },
    {
      name: "Mindfulness",
      image: "/placeholder.svg",
      link: "https://www.apa.org/topics/mindfulness",
    },
    {
      name: "Work Stress",
      image: "/placeholder.svg",
      link: "https://www.apa.org/topics/healthy-workplaces",
    },
    {
      name: "Anger Management",
      image: "/placeholder.svg",
      link: "https://www.apa.org/topics/anger",
    },
  ];

  const filteredTopics = topics.filter((topic) =>
    topic.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  const mentalHealthExercises = [
    {
      title: "Therapy Listening Exercise",
      description:
        "Practice active listening skills essential for therapy sessions.",
      steps: [
        "Find a quiet space and a partner",
        "Take turns sharing a personal story for 3 minutes",
        "The listener should maintain eye contact and not interrupt",
        "After each turn, the listener summarizes what they heard",
        "Discuss the experience and how it felt to be truly listened to",
      ],
      image: "/placeholder.svg",
    },
    {
      title: "Mindfulness Meditation",
      description:
        "A simple meditation exercise to increase mindfulness and reduce stress.",
      steps: [
        "Find a comfortable seated position",
        "Close your eyes and focus on your breath",
        "Notice the sensation of breathing without trying to change it",
        "When your mind wanders, gently bring attention back to your breath",
        "Continue for 5-10 minutes, gradually increasing the duration",
      ],
      image: "/placeholder.svg",
    },
    {
      title: "Gratitude Journaling",
      description:
        "Cultivate a positive mindset by regularly practicing gratitude.",
      steps: [
        "Get a notebook or open a notes app",
        "Each day, write down three things you're grateful for",
        "Be specific and reflect on why you're grateful for each item",
        "Try to find new things to be grateful for each day",
        "Review your entries weekly to reinforce positive feelings",
      ],
      image: "/placeholder.svg",
    },
    {
      title: "Progressive Muscle Relaxation",
      description:
        "Reduce physical tension and promote relaxation through muscle control.",
      steps: [
        "Lie down or sit in a comfortable position",
        "Starting with your toes, tense the muscles for 5 seconds",
        "Release the tension and notice the feeling of relaxation",
        "Move up through each muscle group in your body",
        "End with tensing and relaxing your facial muscles",
      ],
      image: "/placeholder.svg",
    },
    {
      title: "5-4-3-2-1 Grounding Technique",
      description:
        "A mindfulness exercise to help you focus on the present moment and reduce anxiety.",
      steps: [
        "Name 5 things you can see",
        "Name 4 things you can touch",
        "Name 3 things you can hear",
        "Name 2 things you can smell",
        "Name 1 thing you can taste",
      ],
      image: "/placeholder.svg",
    },
    {
      title: "Progressive Muscle Relaxation",
      description:
        "A technique to reduce stress by tensing and relaxing different muscle groups.",
      steps: [
        "Start by tensing and relaxing your toes",
        "Move up to your calves",
        "Then to your thighs",
        "Continue with your stomach and chest",
        "Finish with your arms and hands",
      ],
      image: "/placeholder.svg",
    },
    {
      title: "Cognitive Restructuring",
      description: "Challenge and change negative thought patterns.",
      steps: [
        "Identify negative thoughts",
        "Evaluate the evidence for and against these thoughts",
        "Generate alternative, more balanced thoughts",
        "Practice replacing negative thoughts with balanced ones",
      ],
      image: "/placeholder.svg",
    },
    {
      title: "Guided Imagery",
      description: "Use your imagination to create a calm, peaceful setting.",
      steps: [
        "Close your eyes and take deep breaths",
        "Imagine a peaceful place (e.g., beach, forest)",
        "Engage all your senses in the visualization",
        "Spend 5-10 minutes in this mental space",
      ],
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className='pt-[70px] w-full h-full'>
      <motion.header
        ref={headerRef}
        className='relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-10 overflow-hidden'
        style={{ opacity: headerOpacity }}
      >
        <div className='container mx-auto px-4 text-center relative'>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className='text-5xl font-bold mb-4'
          >
            Mental health for all
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className='text-xl mb-8'
          >
            Find the support you need to live a healthier, happier life
          </motion.p>
          <form onSubmit={handleSearch} className='max-w-md mx-auto flex'>
            <input
              type='text'
              placeholder='How can we help?'
              className='w-full px-4 py-2 rounded-l-lg text-gray-800'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-r-lg transition-colors'
            >
              Search
            </button>
          </form>
        </div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className='floating-particle absolute rounded-full bg-white bg-opacity-20'
            style={{
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </motion.header>

      <main ref={mainRef} className='container mx-auto px-4 py-16 '>
        <section ref={sectionRefs[0]} className='mb-24'>
          <h2 className='text-3xl font-bold mb-8 text-gray-800'>
            Popular mental health topics
          </h2>
          <motion.div
            className='grid grid-cols-2 md:grid-cols-4 gap-5 px-10'
            initial='hidden'
            animate='visible'
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {filteredTopics.map((topic, index) => (
              <motion.a
                key={topic.name}
                href={topic.link}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg'
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={topic.image}
                  alt={topic.name}
                  className='w-full h-32 object-cover'
                />
                <div className='p-4'>
                  <h3 className='text-lg font-semibold text-gray-800'>
                    {topic.name}
                  </h3>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </section>

        <section ref={sectionRefs[3]} className='mb-24'>
          <h2 className='text-3xl font-bold mb-8 text-gray-800'>
            Mental Health Exercises
          </h2>
          <p className='text-xl mb-6 text-gray-700 px-10'>
            Explore these exercises to improve your mental well-being and
            develop valuable skills for therapy and self-care.
          </p>
          <div className='grid md:grid-cols-3 gap-8 px-10'>
            {mentalHealthExercises.map((exercise, index) => (
              <motion.div
                key={index}
                className='bg-white rounded-lg shadow-md p-6'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
              >
                <img
                  src={exercise.image}
                  alt={exercise.title}
                  className='w-full h-52 object-cover rounded-lg mb-4'
                />
                <h3 className='text-xl font-semibold mb-4 text-gray-800'>
                  {exercise.title}
                </h3>
                <p className='text-gray-600 mb-4'>{exercise.description}</p>
                <motion.button
                  className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentExercise(exercise)}
                >
                  View Steps
                </motion.button>
              </motion.div>
            ))}
          </div>
        </section>

        <AnimatePresence>
          {currentExercise && (
            <motion.div
              className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className='bg-white rounded-lg p-8 max-w-md w-full'
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
              >
                <h3 className='text-2xl font-bold mb-4'>
                  {currentExercise.title}
                </h3>
                <ol className='list-decimal pl-5 mb-6'>
                  {currentExercise.steps.map((step, index) => (
                    <li key={index} className='mb-2'>
                      {step}
                    </li>
                  ))}
                </ol>
                <button
                  className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors'
                  onClick={() => setCurrentExercise(null)}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <section ref={sectionRefs[1]} className='mb-24'>
          <h2 className='text-3xl font-bold mb-8 text-gray-800'>
            What is therapy?
          </h2>
          <div className='grid md:grid-cols-3 gap-8 px-10'>
            {[
              {
                title: "Therapy is a safe space to talk",
                description:
                  "A confidential environment where you can express your thoughts and feelings freely.",
              },
              {
                title: "Therapists are trained professionals",
                description:
                  "Experienced in various therapeutic approaches to help you navigate life's challenges.",
              },
              {
                title: "Therapy is for everyone",
                description:
                  "Whether you're dealing with specific issues or seeking personal growth, therapy can help.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className='bg-white rounded-lg shadow-md p-6'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className='text-xl font-semibold mb-4 text-gray-800'>
                  {item.title}
                </h3>
                <p className='text-gray-600'>{item.description}</p>
              </motion.div>
            ))}
          </div>
          <div className='text-center mt-8'>
            <motion.button
              className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn more about therapy
            </motion.button>
          </div>
        </section>

        <section className='mb-24'>
          <h2 className='text-3xl font-bold mb-8 text-gray-800'>
            Calming Sounds
          </h2>
          <p className='text-xl mb-6 text-gray-700 px-10'>
            Immerse yourself in soothing audio environments to promote
            relaxation and mindfulness.
          </p>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-6 px-10'>
            {[
              "Gentle Rain",
              "Ocean Waves",
              "Forest Ambience",
              "Meditation Bells",
              "Soft Piano",
            ].map((sound, index) => (
              <motion.button
                key={sound}
                onClick={() => playSound(sound)}
                className={`bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors ${isPlaying && currentSound.current === sound
                  ? "bg-indigo-800"
                  : ""
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {sound}
              </motion.button>
            ))}
          </div>
          <audio ref={audioRef} />
        </section>

        <section ref={sectionRefs[4]} className='mb-24'>
          <h2 className='text-3xl font-bold mb-8 text-gray-800'>
            Mental Health Tips
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-10'>
            {[
              {
                title: "Practice Mindfulness",
                description:
                  "Take a few minutes each day to practice mindfulness meditation. Focus on your breath and be present in the moment.",
              },
              {
                title: "Stay Active",
                description:
                  "Regular exercise can boost your mood and reduce stress. Aim for at least 30 minutes of moderate activity most days.",
              },
              {
                title: "Connect with Others",
                description:
                  "Maintain strong social connections. Reach out to friends and family regularly, even if it's just a quick call or message.",
              },
              {
                title: "Get Enough Sleep",
                description:
                  "Prioritize sleep. Aim for 7-9 hours each night and maintain a consistent sleep schedule.",
              },
              {
                title: "Limit Social Media",
                description:
                  "Be mindful of your social media use. Consider setting time limits or taking regular breaks from screens.",
              },
              {
                title: "Practice Gratitude",
                description:
                  "Take time each day to reflect on what you're grateful for. This can help shift your focus to the positive aspects of your life.",
              },
            ].map((tip, index) => (
              <motion.div
                key={index}
                className='bg-white rounded-lg shadow-md p-6'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className='text-xl font-semibold mb-4 text-gray-800'>
                  {tip.title}
                </h3>
                <p className='text-gray-600'>{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section ref={sectionRefs[5]} className='mb-24'>
          <h2 className='text-3xl font-bold mb-8 text-gray-800'>Resources</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-10'>
            {[
              {
                title: "Crisis Hotlines",
                description:
                  "24/7 support for those in crisis. Call 1-800-273-8255 for the National Suicide Prevention Lifeline.",
              },
              {
                title: "Online Support Groups",
                description:
                  "Join virtual communities for peer support and shared experiences.",
              },
              {
                title: "Self-Help Books",
                description:
                  "Explore our curated list of books on various mental health topics.",
              },
              {
                title: "Meditation Apps",
                description:
                  "Try apps like Headspace or Calm for guided meditations and relaxation exercises.",
              },
              {
                title: "Local Support Services",
                description:
                  "Find mental health services and support groups in your area.",
              },
              {
                title: "Educational Webinars",
                description:
                  "Attend free online seminars on various mental health topics.",
              },
            ].map((resource, index) => (
              <motion.div
                key={index}
                className='bg-white rounded-lg shadow-md p-6'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className='text-xl font-semibold mb-4 text-gray-800'>
                  {resource.title}
                </h3>
                <p className='text-gray-600'>{resource.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section ref={sectionRefs[3]} className=''>
          <h2 className='text-3xl font-bold mb-8 text-gray-800'>
            Hear from our members
          </h2>
          <div className='grid md:grid-cols-2 gap-8 px-10'>
            {[
              {
                name: "Carrie",
                image: "/placeholder.svg",
                text: "I've been in therapy with Dr. Roberts for over a year now, and it's been life-changing. She's incredibly empathetic and has helped me develop better coping strategies for my anxiety.",
              },
              {
                name: "Amber",
                image: "/placeholder.svg",
                text: "I was hesitant to try therapy at first, but I'm so glad I did. My therapist, Dr. Patel, has been amazing. She's helped me work through some difficult family issues and I'm feeling much better overall.",
              },
              {
                name: "Michael",
                image: "/placeholder.svg",
                text: "The online therapy sessions have been a game-changer for me. I can fit them into my busy schedule, and my therapist has given me practical tools to manage my work-related stress.",
              },
              {
                name: "Sarah",
                image: "/placeholder.svg",
                text: "Group therapy has been an incredible experience. Connecting with others who understand what I'm going through has made me feel less alone in my journey with depression.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className='bg-white rounded-lg shadow-md p-6'
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className='flex items-center mb-4'>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className='w-12 h-12 rounded-full mr-4'
                  />
                  <h3 className='text-xl font-semibold text-gray-800'>
                    {testimonial.name}
                  </h3>
                </div>
                <p className='text-gray-600'>{testimonial.text}</p>
                <div className='mt-4'>
                  <span className='text-yellow-400'>★★★★★</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default MentalHealthPage;
