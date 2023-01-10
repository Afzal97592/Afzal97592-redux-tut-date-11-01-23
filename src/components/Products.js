import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSelice';
import { STATUSES } from '../store/productSelice';

const Products = () => {
  const dispatch = useDispatch()
  const {data: products, status} = useSelector(state=>state.product)


  // const[products, setProducts] = useState([]);

  useEffect(()=>{


    dispatch(fetchProducts())


    // const fetchProduct = async() => {
    //   const res = await fetch('https://fakestoreapi.com/products')

    //   const data = await res.json();
    //   // console.log(data)
    //   setProducts(data)
    // }
    // fetchProduct();
  },[])

  const handleAdd = (product) => {
       dispatch(add(product))
  }


  if (status === STATUSES.LOADING){
    return <h2>Loading......</h2>
  }

  return (
    <div className='productsWrapper'>
      {
        products.map((product)=>(
          <div className='card' key={product.id}>
             <img src={product.image} alt='products' />
             <h4>{product.title}</h4>
             <h5>{product.price}</h5>
             <button className='btn'
              onClick={()=>handleAdd(product)}
             >Add to cart</button>
          </div>
        ))
      }
    </div>
  )
}

export default Products