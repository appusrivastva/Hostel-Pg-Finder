import { NavLink, Link ,useNavigate} from "react-router-dom";
import logo from "../images/logo2.png";
import { useState } from "react";
import axios from 'axios'

const NavBar = ({d1,f1,d2,f2}) => {
  
  let url="http://localhost:4000/searchHostel"
  

  const [city,setCity]=useState("")
  const navigate=useNavigate()
  // const [state,setstate]=useState(false)

  // const [citydetails,setCitydtails]=useState([])
  const handleChange=(e)=>{
    setCity(e.target.value)

   
    console.log(city)

    
  }
  

  const fetchdata=async(e)=>{
  
    console.log(e)
    const params={
      city:e
    }
    const res=await axios.get(url,{params})
    console.log(res)
    return res;
  }

  const handleSubmit=(e)=>{
    
    e.preventDefault()
    fetchdata(city).then((res)=>{
      console.log(res)
      f1(res.data.hosteldetail)
      f2(res.data.pgdetail)
      navigate('/searchHostel')
      
      // setstate(true)
       })
       

  }
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "grey", color: "white" }}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand main_nav" to="#">
            <img src={logo} alt="" style={{ height: "50px" }} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  <i className="fas fa-home"></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  CONTACT
                </NavLink>
              </li>
          
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Login
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/admin_login">
                      Admin
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/user_login">
                      User Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/owner_login">
                      Owner Login
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Registration
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/Registration">
                      User Registration
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/owner">
                      Owner Registration
                    </NavLink>
                  </li>
                </ul>
              </li>

              {/* owner view by user */}

              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Accommodation details
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/hostelowner">
                      Hostel owner
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/pgowner">
                      PG Owner
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link disabled" aria-disabled="true">
                  Link
                </NavLink>
              </li>

              {/* trial */}
               {/* <li className="nav-item">
                <NavLink className="nav-link disabled" aria-disabled="true">
                  {d.length && d.map((e)=>{
                    return <h1>{e.address}</h1>
                  })}
                </NavLink>
              </li>  */}
            </ul>


            {/* try code */}
           {/* {
            !state?<form className="d-flex" role="search" onSubmit={handleSubmit} >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search" onChange={handleChange} value={city}
            />
            <button className="btn" type="submit" >
              Search
            </button>
          </form> :<Link to='/searchHostel'>Tap here</Link>
           }  */}






<form className="d-flex" role="search" onSubmit={handleSubmit} >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search" onChange={handleChange} value={city}
            />
            <button className="btn" type="submit" >
              Search
            </button>
          </form>
          </div>
          
        </div>
      </nav>
    </>
  );
};

export default NavBar;
