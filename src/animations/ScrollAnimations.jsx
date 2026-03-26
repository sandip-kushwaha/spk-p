import { motion } from 'framer-motion';

/**
 * ScrollFadeInUp - Section that fades in and slides up on viewport entry
 */
export const ScrollFadeInUp = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: 'easeOut',
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

/**
 * StaggerContainer - Container for staggered animations of child items
 */
export const StaggerContainer = ({ children, staggerDelay = 0.15 }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

/**
 * StaggerItem - Individual item within a StaggerContainer
 */
export const StaggerItem = ({ children }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return <motion.div variants={itemVariants}>{children}</motion.div>;
};

/**
 * ScaleOnHover - Element that scales up slightly on hover
 */
export const ScaleOnHover = ({ children, scale = 1.15 }) => {
  return (
    <motion.div
      whileHover={{ scale: scale }}
      transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
    >
      {children}
    </motion.div>
  );
};

/**
 * FadeInDown - Element that fades in from top
 */
export const FadeInDown = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: 'easeOut',
      }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

/**
 * SlideInLeft - Element that slides in from left
 */
export const SlideInLeft = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: 'easeOut',
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

/**
 * SlideInRight - Element that slides in from right
 */
export const SlideInRight = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: 'easeOut',
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

/**
 * HoverSlideUp - Text that slides up on hover
 */
export const HoverSlideUp = ({ children }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
    >
      {children}
    </motion.div>
  );
};
