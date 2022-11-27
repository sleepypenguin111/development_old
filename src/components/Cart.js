import React from "react";

const Cart = (props) => {
  const { cartItems, onAdd, onRemove, total } = props;
  return (
    <div className="py-4">
      <h2 className="mt-10 text-blue-500 text-3xl font-bold flex flex-col">Cart</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is Empty</div>}
        {cartItems.map((item) => (
          <div key={item.breed}>
            <div className="text-xl">
              {item.breed} *{item.qty}
            </div>
            <button onClick={() => onRemove(item)} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-2 border border-blue-500 hover:border-transparent">
              -
            </button> {" "}
            <button onClick={() => onAdd(item)} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-2 border border-blue-500 hover:border-transparent">
              +
            </button>
          </div>
        ))}
        <div>Total Cost: ${total}</div>
      </div>
    </div>
  );
};

export default Cart;
