import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'

const Register = () => {

  const[name,setName] = useState('')
  const[email,setEmail] = useState('')
  const[address,setAddress] = useState('')
  const[password,setPassword] = useState('')
  const[img,setImg] = useState('')

  // form object creation

  let formData = new FormData()

  


  const registerUser = async(e) =>{
    e.preventDefault()
    // console.log(name, email, address, password, img)

    formData.append("name",name)
    formData.append("email",email)
    formData.append("address",address)
    formData.append("password",password)
    formData.append("img",img)

   
    const config = {
      header: {
        "Content-Type": "multipart/form-data"
      }
    }

      let result = await axios.post("http://localhost:5000/api/v1/auth/register",formData,config)
      console.log("_________", result)


  }




  return (
    <>
    <Navbar />

    <form encType='multipart/form-data'>
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
          <div className="d-table-cell align-middle">
            <div className="text-center mt-4">
              <h1 className="h2">Register here</h1>
              <p className="lead">
                Only valid user can sign in after registration
              </p>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="m-sm-4">
                  <form>
                    <div className="form-group">
                      <label>Name</label>
                      <input
                      onChange={(e)=>setName(e.target.value)}
                      className="form-control form-control-lg" type="text" name="name"  placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                      onChange={(e)=>setEmail(e.target.value)}
                      className="form-control form-control-lg" type="email" name="email"  placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                      <label>Address</label>
                      <input
                      onChange={(e)=>setAddress(e.target.value)}
                      className="form-control form-control-lg" type="text" name="address"  placeholder="Enter your address" />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                      onChange={(e)=>setPassword(e.target.value)}
                      className="form-control form-control-lg" type="text" name="password"  placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                      <label>Photo</label>
                      <input
                      onChange={(e)=>setImg(e.target.files[0])}
                      accept='.png, .jpg, .jpeg'
                      className="form-control form-control-lg" type="file" name="img" />
                    </div>


                    <div className="text-center mt-3">
                      <button onClick={registerUser} href="index.html" className="btn btn-lg btn-primary">Sign up</button>
                      {/* <button type="submit" class="btn btn-lg btn-primary">Sign up</button> */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </form>

    </>
  )
}

export default Register