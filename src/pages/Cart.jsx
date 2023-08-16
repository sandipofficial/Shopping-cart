import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from '../components/CartItem'
import { useEffect, useState } from "react";

const Cart = () => {
  const {cart} = useSelector((state)=> state)
  const [TotalAmmount, setTotalAmmount] = useState(0)
  console.log(cart)

  useEffect( () => {
    setTotalAmmount( cart.reduce( (acc, curr) => acc + curr.price, 0))
  },[cart])

  return (
    <div className="w-full h-screen mt-10  flex justify-center">
      {
        cart.length > 0 ?
        (
          <div className="w-[70%] flex  ">
            <div className="flex flex-col ">
              {
                cart.map((item, index) => (
                  <CartItem key={item.id} item={item} itemIndex={index} />
                ))
              }
            </div>


            <div className="flex flex-col ml-0 bg-red-00 p-10 w-[100%] h-full justify-between ">
              <div className="flex flex-col gap-5 ">
                <p className="text-xl font-semibold text-green-700">YOUR CART</p>
                <h1 className="text-5xl text-green-800 font-semibold -mt-3">SUMMARY</h1>
                <p className="font-semibold text-xl">Total items: {cart.length}</p>
              </div>

              <div className="flex flex-col gap-5">
                <p className="font-semibold text-xl">Total Ammount: {TotalAmmount}</p>
                <NavLink className="bg-green-700 flex justify-center items-center rounded-lg w-full text-white h-10">Check Out</NavLink>
              </div>
            </div>
          </div>
        )
        :
        (
          <div className="flex flex-col justify-center items-center gap-y-5">
            <p className="text-xl font-semibold">your cart is empty</p>
            <NavLink to={'/'}>
              <button className="bg-green-600 p-3 rounded-md text-white font-semibold">shop now</button>
            </NavLink>
          </div>
        )
      }
    </div>
  )
};

export default Cart;
