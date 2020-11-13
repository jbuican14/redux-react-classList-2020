//action creator
export const selectMathClass = (className) => {
  return {
    type: 'MATHCLASS_SELECTED',
    payload: className,
  };
};
