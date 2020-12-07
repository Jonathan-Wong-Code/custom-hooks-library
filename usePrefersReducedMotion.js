export const usePrefersReducedMotion = () => {
  if (typeof window === 'undefined') {
    // If we are in an isomorphic context,

    // we cannot make assumptions about a user's preference,

    // return false

    return false;
  }

  return window.matchMedia('(prefers-reduced-motion)').matches;
};
