/*
export function someGetter (state) {
}
*/

export const getInputStrategi = state => {
  return state.strategiInputData;
};

export const getStrategiData = state => strategiIdx => {
  return state.strategiHistory[strategiIdx];
};
