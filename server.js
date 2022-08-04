const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { response } = require('express');

const app = express();
const port= 3000

const corsOption = {
    origin: "http://localhost:3000",
}
app.use(cors(corsOption));

//const upload = multer({dest:"./images/"});
const storage = multer.diskStorage({
    destination: "./images/",
    filename: function(request,file, callback){
        callback(null, file.originalname);
    }
})
const upload = multer({storage: storage});

app.post("/",upload.single("avatar"), (request)=>{
console.log(request.body, request.file); 

response.json('vielen dank!!')
});

app.listen( port, ()=> console.log('server läuft'));




