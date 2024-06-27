import contact_Model from "../models/contact_model.js"

import hosteldetail_Model from '../models/HostelDeatils_model.js'
import pgdetail_Model from '../models/PgDetails_model.js'


export const home=(req,res)=>{
    res.send("<h2>this is response for home page</h2>")
}
export const admin=(req,res)=>{
    res.send("<h1>this is admin page</h1>")
}

export const addContact=async (req,res)=>{
    const contactData=req.body;
    console.log(contactData);
    const {name,email,phone,query}=contactData

    try{
     const ContactDoc=new contact_Model({name:name,email:email,phone:phone,query:query})
     await ContactDoc.save()

     res.send('Thank you');
     


    }
    catch(err){
        console.log(err.message)
    }
}


export const searchHostel = async (req, res) => {
    const city = req.query.city;

    try {
        // Create a case-insensitive regular expression for the city
        const caseInsensitiveCity = new RegExp(`^${city}$`, 'i');

        // Use the regular expression in the find method to search irrespective of case
        const Data1 = await hosteldetail_Model.find({ city: caseInsensitiveCity });
        const Data2 = await pgdetail_Model.find({ city: caseInsensitiveCity });

        // Check if any data was found in either query
        if (Data1.length > 0 || Data2.length > 0) {
            res.send({ hosteldetail: Data1, pgdetail: Data2 });
        } else {
            res.send("no owner yet");
        }

    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
}
