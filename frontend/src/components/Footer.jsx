import {Link} from 'react-router-dom';


const Footer=()=>{
  return (
      <>
      <footer className="bg-body-tertiary text-center">
      
        <div className="container p-4 pb-0">
       
          <section className="mb-4">
      
            <Link
            data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{backgroundColor:"#3b5998" }}
              to="#!"
              role="button"
              ><i className="fab fa-facebook-f"></i
            ></Link>
      
      
            <Link
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{backgroundColor: "#55acee"}}
              to="#!"
              role="button"
              ><i className="fab fa-twitter"></i
            ></Link>
      
      
            <Link
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{backgroundColor: "#dd4b39"}}
              to="#!"
              role="button"
              ><i className="fab fa-google"></i
            ></Link>
      
            <Link
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{backgroundColor: "#ac2bac"}}
              to="#!"
              role="button"
              ><i className="fab fa-instagram"></i
            ></Link>
      
         
            <Link
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{backgroundColor: "#0082ca"}}
              to="#!"
              role="button"
              ><i className="fab fa-linkedin-in"></i
            ></Link>
         
            <Link
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{backgroundColor: "#333333"}}
              to="#!"
              role="button"
              ><i className="fab fa-github"></i
            ></Link>
          </section>
        
        </div>
      
      
      
      </footer></>
  )
      
  
};












export default Footer;