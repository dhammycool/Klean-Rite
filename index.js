import express from 'express';
import path, { dirname } from "path";
import { fileURLToPath } from 'url';
import ejs from 'ejs';
import expressLayouts from 'express-ejs-layouts';
import rout from './Routes/get.js';



const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts); 
app.set('layout', 'layout');
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", rout);
app.use("/get",rout);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});