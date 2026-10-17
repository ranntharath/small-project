import React from 'react'
import { useParams } from 'react-router-dom'
import { reels } from '../data/reel'

export default function ReelDetail() {

    const {id} =  useParams()

    const product = reels.find(r => r.id == id)
    console.log(product)

  return (
    <div>
        ReelDetail {id}
        <img src={product.image} alt="" />
        <p>name : {product.name}</p>
        <p>price : {product.price}</p>
    </div>
  )
}
