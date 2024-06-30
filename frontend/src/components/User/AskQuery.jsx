import React, { useState } from 'react';
import '../../css/askQuery.css'; // Import CSS file for styling
import axios  from 'axios';
import UserHeader from './UserHeader'

import {useParams} from 'react-router-dom'



function AskQuery() {
  const {value}=useParams();
  const token_data = localStorage.getItem("token_key");
  console.log(`token data is ${token_data}`);
  const [query, setQuery] = useState({owner_id:value,user_id:token_data,
  question:"",answer:""});
  // const [searchResults, setSearchResults] = useState([]);
 
  let URL="https://hostel-pg-finder.onrender.com/user/querySearch";

  

  const handleQueryChange = (e) => {

    setQuery({...query,[e.target.name]:e.target.value})
    
  };

  const handleSearch = async(e) => {

  

    e.preventDefault()
    console.log(query)
 


    try{
      
      const res=await axios.post(URL,query)
      
       
    setQuery({owner_id:'',user_id:'',question:'',answer:''})
      console.log(res.data)
      }
    catch(err){
     console.log(err.message)
    }
  
  };

  return (
    <>
    <UserHeader/>
    <div className="query-search-management-container">
      <div className="background-image"></div>
      <div className="content">
        <h1 className="title">Query Search Management</h1>

        <div className="search-input-container">
          <input
            type="text"
            placeholder="Enter your search query"
            value={query.question}
            onChange={handleQueryChange}
            className="search-input" name='question'
          />
          <button onClick={handleSearch} className="search-button">Search</button>
        </div>
      {/* <div className="search-results"> */}
          {/* <h2 className="results-title">Search Results:</h2> */}
          {/* <ul className="results-list"> */}
            {/* {searchResults.map(result => ( */}
            {/* //   <li key={result.id} className="result-item"> */}
                {/* <strong>{result.title}</strong> */}
                {/* <p>{result.description}</p> */}
              {/* </li> */}
            {/* ))} */}
          {/* </ul> */}
        {/* </div> */}
      </div>
    </div>
    </>
  );
}

export default AskQuery;
