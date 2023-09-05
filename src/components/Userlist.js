import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { useractions } from '../redux/actions'

const Userlist = () => {

  const userData = useSelector(state=>state.userlist)
  console.log("__________user data ____ : ",userData)
  const{users,loading,error} = userData
  console.log("users main ____ in action ____ ", users)

  const dispatch = useDispatch()


  useEffect(()=>{

    dispatch(useractions())

  },[dispatch])

  return (
    
    <div>
        <Navbar />
        <h1>List of Users</h1>
        
        {
          users.map(x=>{
            return(
              <>
                <h1>Name: {x.name}</h1>
                <h1>Email: {x.email}</h1>
              </>
            )
          })
        }

    </div>
  )
}

export default Userlist

// {
//   users.map(x=>{
//     return(
//       <>
//         <h1>{x.name}</h1>
//         <h1>{x.email}</h1>
//       </>
//     )
//   })
// }