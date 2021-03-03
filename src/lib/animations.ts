export const easeOutExpo = [0.16, 1, 0.3, 1];

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export const fall = {
  hidden: {
    opacity: 0,
    y: "-100%",
  },
  show: {
    opacity: 1,
    y: "0%",
  },
};

export const staggerChildren = (amount: number) => ({
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: amount,
    },
  },
});

export const smoothBounce = {
  type: "spring",
  stiffness: 200,
  damping: 10,
};
