import express from 'express';
import path, { dirname } from "path";
import { fileURLToPath } from 'url';
import ejs from 'ejs';
import expressLayouts from 'express-ejs-layouts';



const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts); 
app.set('layout', 'layout');
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req,res)=>{
 res.render("index.ejs",{title:'Home'});
});

app.get("/about", (req,res)=>{
 res.render("about.ejs",{title:'About Us'});
});

app.get("/contact", (req,res)=>{
 res.render('contact.ejs',{title:'Contact Us'});
});

app.get("/service", (req,res)=>{
 res.render("service.ejs",{title:'Services'});
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});