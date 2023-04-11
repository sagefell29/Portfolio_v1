import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const words = [
  'Hello',
  'Salut',
  'Olá',
  'Здравствуйте',
  'こんにちは',
  'Ciao',
  '你好',
];

const Transition = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex(
          currentIndex === words.length - 1 ? 0 : currentIndex + 1
        );
        setIsVisible(true);
      }, 750);
    }, 1000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>{words[currentIndex]}</h1>
    </motion.div>
  );
};

export default Transition;
