import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'

const Cart = () => {
  const dispatch = useDispatch()

  const products = useSelector(state=> state.cart)

  const handleRemove = (product) => {
        dispatch(remove(product))
  }

  return (
    <div>
      <h4>Cart</h4>
      <div className='cartWrapper'>
        {
         products.map(product=>(
          <div className='cartCard' key={product.id}>
            <img src={product.image} alt='img' />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button className='btn' onClick={()=>handleRemove(product.id)}>Remove</button>
          </div>
         ))
        }
      </div>
    </div>
  )
}

export default Cart