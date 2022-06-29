export const reducer = (state, action) => {
  // remove items

  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      items: state.items.filter((currentItem) => {
        return currentItem.id !== action.playload;
      }),
    };
  }
  // clear cart
  if (action.type === "CLEAR_CART") {
    return { ...state, items: [] };
  }

  // add by plus button
  if (action.type === "PLUS_BUTTON") {
    let updateCart = state.items.map((curItem) => {
      if (curItem.id === action.playload) {
        return { ...curItem, quantity: curItem.quantity + 1 };
      }
      return curItem;
    });
    return { ...state, items: updateCart };
  }

  //Minus Button work::

  if (action.type === "MINUS_BUTTON") {
    let updateCart = state.items
      .map((curItem) => {
        if (curItem.id === action.playload) {
          return { ...curItem, quantity: curItem.quantity - 1 };
        }

        return curItem;
      })
      .filter((curItem) => {
        return curItem.quantity !== 0;
      });

    return { ...state, items: updateCart };
  }

  if (action.type === "GET_TOTAL") {
    let { totalItems, totalAmount } = state.items.reduce(
      (accum, curV) => {
        let { quantity, price } = curV;
        accum.totalItems += quantity;
        let updateAmount = price * quantity;
        accum.totalAmount += updateAmount;

        return accum;
      },
      {
        totalItems: 0,
        totalAmount: 0,
      }
    );
    return { ...state, totalItems, totalAmount };
  }

  return state;
};
