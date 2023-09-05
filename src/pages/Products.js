import React, { useState, CSSProperties, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
// import { DotLoader } from 'react-loader-spinner'
import HashLoader from "react-spinners/HashLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Products = () => {

  const[products, setProducts] = useState([])
  const[loading, setLoading] = useState(false)

  const getProductsData = async() =>{
    setLoading(true)
    let {data} = await axios.get("https://fakestoreapi.com/products")      
    setProducts(data)
    setLoading(false)
  }

 

useEffect(()=>{
  getProductsData()
},[])

const ShowProduct = () =>{
  return(
    
    <section>
          <div className="container-fluid">
            <div className="row">
              {
                products.map(sp=>{
                    return(
                     
                          <div className="col-sm-6 col-lg-3 mb-2-6">
                              <div className="card-wrapper mb-4">
                                <div className="card-img">
                                      
                                        <img src={sp.image} alt="image" height={220} width={200} />
                                     
                                  </div>                            
                                <div className="card-body">
                                  <div>
                                    <a href="#"><i className="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600" /></a>
                                  </div>
                                </div>
                              </div>
                              <div className="text-center">
                                <Link to={`/products/${sp.id}`}>
                                    <h4 className="h5 mb-2"><a href="#" className="text-secondary">{sp.title.slice(0,10)}...</a></h4>
                                </Link>

                                <div className="product-rating mb-2">
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star mr-0" />
                                </div>
                                <h5 className="mb-0 text-primary">$: {sp.price}</h5>
                              </div>
                        </div>   
                     
                    )
                })
              }
              
            </div>
          </div>
    </section>
    
  )
}


const LoadingComponent = () =>{
  return(
    <>  
      <HashLoader

        // color={color}
        color='#36d7b7'        
        loading={loading}
        cssOverride={override}
        size={200}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  )
}


  return (
    <>

    <h1 className='text-center text-warning display-1 fw-bold my-5'>List of Products</h1>
    
      {
        loading ? <LoadingComponent /> : (<ShowProduct />)
      }

      <br /><br /><br /><br /><br /><br /><br /><br /><br />
    </>
    
  )
}

export default Products


// <div className="col-sm-6 col-lg-3 mb-2-6">
//         <div className="card-wrapper mb-4">
//           <div className="card-img"><img src="https://www.bootdey.com/image/240x240/20B2AA/000000" alt="..." /></div>
//           <div className="card-body">
//             <div>
//               <a href="#"><i className="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600" /></a>
//             </div>
//           </div>
//         </div>
//         <div className="text-center">
//           <h4 className="h5 mb-2"><a href="#" className="text-secondary">Products Bag</a></h4>
//           <div className="product-rating mb-2">
//             <i className="fas fa-star" />
//             <i className="fas fa-star" />
//             <i className="fas fa-star" />
//             <i className="fas fa-star" />
//             <i className="fas fa-star mr-0" />
//           </div>
//           <h5 className="mb-0 text-primary">$79.00</h5>
//         </div>
//       </div>
//       <div className="col-sm-6 col-lg-3 mb-2-6">
//         <div className="card-wrapper mb-4">
//           <div className="card-img"><img src="https://www.bootdey.com/image/240x240/FFB6C1/000000" alt="..." /></div>
//           <div className="card-body">
//             <div>
//               <a href="#"><i className="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600" /></a>
//             </div>
//           </div>
//         </div>
//         <div className="text-center">
//           <h4 className="h5 mb-2"><a href="#" className="text-secondary">Cleaning Equipment</a></h4>
//           <div className="product-rating mb-2">
//             <i className="fas fa-star" />
//             <i className="fas fa-star" />
//             <i className="fas fa-star" />
//             <i className="fas fa-star" />
//             <i className="fas fa-star mr-0" />
//           </div>
//           <h5 className="mb-0 text-primary">$19.22</h5>
//         </div>
//       </div>
//       <div className="col-sm-6 col-lg-3 mb-2-6">
//         <div className="card-wrapper mb-4">
//           <div className="card-img"><img src="https://www.bootdey.com/image/240x240/87CEFA/000000" alt="..." /></div>
//           <div className="card-body">
//             <div>
//               <a href="#"><i className="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600" /></a>
//             </div>
//           </div>
//         </div>
//         <div className="text-center">
//           <h4 className="h5 mb-2"><a href="#" className="text-secondary">Washing Liquids</a></h4>
//           <div className="product-rating mb-2">
//             <i className="fas fa-star" />
//             <i className="fas fa-star" />
//             <i className="fas fa-star" />
//             <i className="fas fa-star" />
//             <i className="fas fa-star mr-0" />
//           </div>
//           <h5 className="mb-0 text-primary">$28.25</h5>
//         </div>
//       </div>
//       <div className="col-sm-6 col-lg-3 mb-2-6 mb-lg-0">
//         <div className="card-wrapper mb-4">
//           <div className="card-img"><img src="https://www.bootdey.com/image/240x240/7B68EE/000000" alt="..." /></div>
//           <div className="card-body">
//             <div>
//               <a href="#"><i className="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600" /></a>
//             </div>
//           </div>
//         </div>
//         <div className="text-center">
//           <h4 className="h5 mb-2"><a href="#" className="text-secondary">Vacuum Cleaner</a></h4>
//           <div className="product-rating mb-2">
//             <i className="fas fa-star" />
//             <i className="fas fa-star" />
//             <i className="fas fa-star" />
//             <i className="fas fa-star" />
//             <i className="fas fa-star mr-0" />
//           </div>
//           <h5 className="mb-0 text-primary">$129.79</h5>
//         </div>
//       </div>
//       <div className="col-sm-6 col-lg-3 mb-2-6 mb-lg-0">
//         <div className="card-wrapper mb-4">
//           <div className="card-img"><img src="https://www.bootdey.com/image/240x240/BA55D3/000000" alt="..." /></div>
//           <div className="card-body">
//             <div>
//               <a href="#"><i className="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600" /></a>
//             </div>
//           </div>
//         </div>
//         <div className="text-center">
//           <h4 className="h5 mb-2"><a href="#" className="text-secondary">Rubber Gloves</a></h4>
//           <div className="product-rating mb-2">
//             <i className="fas fa-star" />
//             <i className="fas fa-star" />
//             <i className="fas fa-star" />
//             <i className="fas fa-star" />
//             <i className="fas fa-star mr-0" />
//           </div>
//           <h5 className="mb-0 text-primary">$44.42</h5>
//         </div>
//       </div>
//       <div className="col-sm-6 col-lg-3 mb-2-6 mb-sm-0">
//         <div className="card-wrapper mb-4">
//           <div className="card-img"><img src="https://www.bootdey.com/image/240x240/48D1CC/000000" alt="..." /></div>
//           <div className="card-body">
//             <div>
//               <a href="#"><i className="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600" /></a>
//             </div>
//           </div>
//         </div>
//         <div className="text-center">
//           <h4 className="h5 mb-2"><a href="#" className="text-secondary">Rubber Gloves</a></h4>
//           <div className="product-rating mb-2">
//             <i className="fas fa-star" />
//             <i className="fas fa-star" />
//             <i className="fas fa-star" />
//             <i className="fas fa-star" />
//             <i className="fas fa-star mr-0" />
//           </div>
//           <h5 className="mb-0 text-primary">$24.69</h5>
//         </div>
//       </div>
//       <div className="col-sm-6 col-lg-3">
//         <div className="card-wrapper mb-4">
//           <div className="card-img"><img src="https://www.bootdey.com/image/240x240/000080/000000" alt="..." /></div>
//           <div className="card-body">
//             <div>
//               <a href="#"><i className="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600" /></a>
//             </div>
//           </div>
//         </div>
//         <div className="text-center">
//           <h4 className="h5 mb-2"><a href="#" className="text-secondary">Cleaning Supplies</a></h4>
//           <div className="product-rating mb-2">
//             <i className="fas fa-star" />
//             <i className="fas fa-star" />
//             <i className="fas fa-star" />
//             <i className="fas fa-star" />
//             <i className="fas fa-star mr-0" />
//           </div>
//           <h5 className="mb-0 text-primary">$79.79</h5>
//         </div>
//       </div>