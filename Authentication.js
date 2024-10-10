const express=require("express");
const cors=require("cors");
const db = require("./config");
const app = express();
app.use(express.json());
app.use(cors());

const User = db.collection("Users");


app.post("/Authentication/", async(req,res)=>{
    const snapshot= await User.get();
    const list = snapshot.docs.map((doc)=>({id:doc.id, ...doc.data()}))
    list.forEach(element => {
        if((element.User == req.body.User && element.Pass == req.body.Pass))
        {
            res.send("Valid")
            return false;
        }
        else
        {
            res.send("Not Valid")
            return true;
        }
    });
  });

  app.listen(4000,()=>console.log("Up & Running * 4000"))