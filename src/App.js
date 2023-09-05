import { useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
// import { useSelector, useDispatch } from 'react-redux';
// import { useractions } from './redux/actions';
// import Userlist from './components/Userlist';

const App = () => {

  // const userdata = useSelector(state=>state.userlist)

  //  const {users, loading, error} = userdata
  //  console.log("user data : ", userdata)

  // // console.log(userlist)

  // const dispatch = useDispatch()


  // useEffect(()=>{
  //   dispatch(useractions())
  // },[dispatch])

  return (
    <div className="App">
      
          <Home />   

    </div>
  );
}

export default App;




// {
//   loading ? 
//   (<h1>Loading</h1>) :
//    error ? 
//    (<p>{error}</p>) : 
//    (
//     <Userlist users={users} />
//    )
// }