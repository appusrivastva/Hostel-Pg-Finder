import { useState } from 'react'
import axios from 'axios'
import photo from '../../images/feedback.webp'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Footer from '../Footer'
import UserHeader from './UserHeader'


const Feedback = ()=>{


    const mystyle={
        img:{
            height:"90%",
            width:"90%"
        }
    }
    const [feedback,setFeedback]=useState({name:"",email:"",remark:"",rating:""})
    const [errors, setErrors] = useState({})

    const URL="https://hostel-pg-finder.onrender.com/user/addFeedback"

    function handleChange(e){
        setFeedback((currVal)=>{
            return {...currVal,[e.target.name]:e.target.value}
        })

        // Clear the error message when user starts typing
        setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: "" }));
    }

    const validateForm = () => {
        const newErrors = {};

        if (!feedback.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!feedback.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(feedback.email)) {
            newErrors.email = "Email is invalid";
        }

        if (!feedback.remark.trim()) {
            newErrors.remark = "Remark is required";
        }

        if (!feedback.rating) {
            newErrors.rating = "Rating is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    const handelForm = async (e) => {
        e.preventDefault();

        const isValid = validateForm();

        if (isValid) {
            try {
                const res = await axios.post(URL, feedback);
                console.log(res.data);
                Swal.fire(res.data);
                setFeedback({ name: "", email: "", remark: "", rating: "" });
            } catch (err) {
                console.log("error" + err.message);
            }
        }
    };

    return(
        <>
        <UserHeader/>
        <div className='row'  style={{height:"600px",backgroundColor:"dimGrey"}}  >
            <div className="col-6 mt-5">
                <img src={photo}  alt="" style={mystyle.img} />
            </div>
            
            <div className="container mt-5 col-6">
                <h2>Feedback Form</h2>
              
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" value={feedback.name} name='name' onChange={handleChange} className="form-control" id="name" placeholder="Enter your name" required/>
                    {errors.name && <div className="error">{errors.name}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name='email' value={feedback.email} onChange={handleChange} className="form-control" id="email" placeholder="Enter your email" required/>
                    {errors.email && <div className="error">{errors.email}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="remark">Remark:</label>
                    <textarea className="form-control" name='remark' value={feedback.remark} onChange={handleChange} id="remark" rows="3" placeholder="Enter your remark"></textarea>
                    {errors.remark && <div className="error">{errors.remark}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="rating">Rating:</label>
                    <select className="form-control" name='rating' value={feedback.rating} onChange={handleChange} id="rating">
                        <option value="">Select rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    {errors.rating && <div className="error">{errors.rating}</div>}
                </div>
                <button type="submit" onClick={handelForm} className="btn btn-primary mt-4">Submit</button>
                
            </div>


          
        </div>
<Footer/>

        </>
    )
}
export default Feedback
