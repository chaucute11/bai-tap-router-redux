/* eslint-disable no-case-declarations */
export const cartReducer = (state = [], action) => {
  let newState = [...state]
  switch(action.type){
    case "ADD_TO_CART":
      console.log(state, action);
      return[
        ...state,
        {
          id: action.id,
          info: action.info,
          quantity: 1
        }
      ]
    case "UPDATE_CART":
      const itemUpdate = newState.find(item => item.id === action.id)
        itemUpdate.quantity = itemUpdate.quantity + action.quantity
        return newState;
    case "DELETE_CART":
      return newState.filter(item => item.id !== action.id)
    case "DELETE_ALL":
      return newState = []
    default:
      return state;
  }
}