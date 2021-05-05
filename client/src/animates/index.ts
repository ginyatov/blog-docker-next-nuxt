export const durations = {
  easing: [0.6, -0.05, 0.01, 0.99],
};

const slideRightToLeft = {
  opacity: 0,
  initial: {
    x: 400,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: durations.easing,
    },
  },
  exit: {
    opacity: 0,
    x: 400,
  },
};

const animates = {
  slideRightToLeft,
};

export default animates;
