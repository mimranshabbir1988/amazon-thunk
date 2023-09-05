import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'


const SingleProduct = () => {

  let params = useParams()


  
  const[product, setProduct] = useState('')
  

  const getProductsData = async() =>{
  
    let {data} = await axios.get(`https://fakestoreapi.com/products/${params.id}`)      
    setProduct(data)
  
  }

 

useEffect(()=>{
  getProductsData()
},[])




  return (
    <>

    <Navbar />    

      <div className="container my-5">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">{product.title}</h3>
            {/* <h6 className="card-subtitle">{product.description}</h6> */}
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-6">
                <div className="white-box text-center"><img src={product.image} width={400} height={400} className="img-responsive" /></div>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-6">
                <h4 className="box-title mt-5">{product.title}</h4>
                <p>{product.description}</p>
                <h2 className="mt-5">
                  $ {product.price}<small className="text-success">(36%off)</small>
                </h2>
                <button className="btn btn-dark btn-rounded mr-1" data-toggle="tooltip" title data-original-title="Add to cart">
                  <i className="fa fa-shopping-cart" />
                </button>
                <button className="btn btn-primary btn-rounded">Buy Now</button>
                <h3 className="box-title mt-5">Key Highlights</h3>
                <ul className="list-unstyled">
                  <li><i className="fa fa-check text-success" />Sturdy structure</li>
                  <li><i className="fa fa-check text-success" />Designed to foster easy portability</li>
                  <li><i className="fa fa-check text-success" />Perfect furniture to flaunt your wonderful collectibles</li>
                </ul>
              </div>
             
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default SingleProduct