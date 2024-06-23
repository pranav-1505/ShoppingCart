import React from 'react'

const productlist = ({products, addToProduct}) => {

  return (
    <div className='listproducts_main'>
      <h2>products</h2>
      <div className='prolist'>
      {products.map((product)=>{
        return (
        <div key={product.id} className='pro_box'>
        <div className='pro_img'><img src={product.image}/></div>
         <div className='pro_title'>{product.title}</div>
         <div className='pro_text'>&#8377; {product.price}</div>
         <button className='buton_add' 
         onClick={()=>addToProduct(product)}
         >Add to Cart</button>
        </div>
        )
      })}
      </div>
    </div>
  )
}

export default productlist