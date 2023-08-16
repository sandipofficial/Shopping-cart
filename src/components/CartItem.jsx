import {AiFillDelete} from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/cartSlice';
import { toast } from 'react-hot-toast';

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch()

  const RemoveFromCart = () => {
    dispatch(remove(item.id))
    toast.error("Item removed")
  }

  return(
    <div className='flex flex-col w-[100%] mb-1 border rounded-md shadow-sm'>
      <div className='flex gap-20 p-4  '>
        <div className='ml-0 '>
          <img src={item.image}  width={160} />
        </div>

        <div className='flex flex-col w-[60%]  gap-5'>
          <p className='text-xl w-full font-bold'>{item.title}</p>
          <p className='font-semibold'>{item.description.split(" ").slice(0,15).join(" ") + "..."}</p>

          <div className='flex justify-between'>
            <p className='font-bold text-green-600 text-xl'>${item.price}</p>
            <div onClick={RemoveFromCart}
            className='bg-red-200 hover:bg-red-400 text-red-600 hover:text-white w-10 h-10 rounded-full flex justify-center items-center'>
              <AiFillDelete className='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CartItem;
