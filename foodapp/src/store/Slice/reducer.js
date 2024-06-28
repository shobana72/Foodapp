// // reducer.js

// // Define initial state
// const initialState = {
//     items: []
//   };
  
//   // Define action types
//   const ADD_ITEM = 'ADD_ITEM';
  
//   // Define reducer function
//   const reducer = (state = initialState, action) => {
//     switch (action.type) {
//       case ADD_ITEM:
//         return {
//           ...state,
//           items: [...state.items, action.payload] // Add new item to items array
//         };
//       default:
//         return state;
//     }
//   };
  
//   // Action creator function
//   const addItem = (item) => ({
//     type: ADD_ITEM,
//     payload: item
//   });
  
//   export { reducer, addItem };
  