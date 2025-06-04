import express from 'express';


const rout=express.Router();


rout.get("/", (req,res)=>{
 res.render("index.ejs",{title:'Home'});
});

rout.get("/about", (req,res)=>{
 res.render("about.ejs",{title:'About Us'});
});

rout.get("/contact", (req,res)=>{
 res.render('contact.ejs',{title:'Contact Us'});
});

rout.get("/service", (req,res)=>{
 res.render("service.ejs",{title:'Services'});
});

export default rout;