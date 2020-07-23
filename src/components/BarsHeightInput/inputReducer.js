import types from '../../actionTypes';

export const inputReducer = (state = { barsHeight: [1,8,6,2,5,4,8,3,7] }, action) => {
  switch (action.type) {
    case types.setBarsHeight:
      return { ...state, barsHeight: action.barsHeight };
    default:
      return state;
  }
};

export default inputReducer;

export const selectBarHeights = state => state.inputReducer.isActive;
