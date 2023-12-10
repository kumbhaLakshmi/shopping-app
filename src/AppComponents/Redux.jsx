import { createStore } from 'redux';

const initialState = {
  count: 0,
  totalproducts:0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TOTAL_PRODUCTS':
      // console.log("Updating totalProducts*******************************:", action.payload);
      return {
        ...state,
        totalProducts: action.payload,
      };
      case 'UpdateCount':
        // console.log("Updating totalProducts*******************************:", action.payload);
        return {
          ...state,
          count: action.payload,
        };
    case 'INCREMENT':
      return { ...state, count: state.count < state.totalProducts ? state.count + 1 : state.count };
    case 'DECREMENT':
      console.log("Decrementing count:", state.count);
      return { ...state, count: state.count > 0 ? state.count - 1 : state.count };
    case 'EqualTOZero':
      console.log("Setting count to 0");
      return { ...state, count: 0 };
    default:
      return state;
  }
};


export const store = createStore(reducer);