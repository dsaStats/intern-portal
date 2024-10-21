require('dotenv/config');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.set('view engine','ejs');
app.use(express.static('./assests'))

//routes
app.get('/',(req,res)=>{
    res.render('signup')
});
app.use("/",require("./Routes/indexRoute.js"));
app.use("/",require("./Routes/authRoute.js"));

app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT}`);
});