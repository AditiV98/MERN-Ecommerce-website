import { ActionTypes } from "../constants/wishlistConstants";
const INIT_STATE = {
  wishList: [],
};

export const wishlistReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_WISHLIST:
      //if item is already present in cart
      const itemIndex = state.wishList.findIndex(
        (item) => item._id === payload._id
      );
      if (itemIndex >= 0) {
        //   state.cartItems[itemIndex].qnty += 1;
        alert("item already present in the wishlist");
        return {
          ...state,
          wishList: [...state.wishList],
        };
      } else {
        const temp = { ...payload };
        return {
          ...state,
          wishList: [...state.wishList, temp],
        };
      }

    case ActionTypes.REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishList: state.wishList.filter((item) => item._id !== payload._id),
      };
    // //decrease quantity
    // case ActionTypes.REMOVE_ONE:
    //   const itemIndex_dec = state.cartItems.findIndex(
    //     (item) => item._id === payload._id
    //   );

    //   if (state.cartItems[itemIndex_dec].qnty >= 1) {
    //     const dltItems = (state.cartItems[itemIndex_dec].qnty -= 1);

    //     return {
    //       ...state,
    //       cartItems: [...state.cartItems],
    //     };
    //   } else if (state.cartItems[itemIndex_dec].qnty === 1) {
    //     return {
    //       ...state,
    //       cartItems: state.cartItems.filter((item) => item._id !== payload._id),
    //     };
    //   }

    //   case ActionTypes.SAVE_SHIPPING_INFO:
    //     return {
    //       ...state,
    //       shippingInfo: payload,
    //     };

    default:
      return state;
  }
};
