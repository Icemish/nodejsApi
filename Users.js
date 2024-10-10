const express=require("express");
const cors=require("cors");
const db = require("./config");
const app = express();
app.use(express.json());
app.use(cors());
const User = db.collection("Users");

app.get("/Users/", async(req,res)=>{
  const snapshot= await User.get();
  const list = snapshot.docs.map((doc)=>({id:doc.id, ...doc.data()}))
  res.send(list)
});

app.put("/Users/create", async(req,res)=>{
    const data = req.body
    console.log("Data of Users ", data)
     await User.add(data)
     res.send({msg:"Usuario Adicionado"})
});

app.post("/Users/update", async (req, res) => {
  const id = req.body.id;
  delete req.body.id;
  const data = req.body;
  await User.doc(id).update(data);
  res.send({ msg: "Usuario Actualizado" });
});

app.delete("/Users/delete", async (req, res) => {
  const id = req.body.id;
  await User.doc(id).delete();
  res.send({ msg: "Usuario Borrado" });
});

app.listen(4000,()=>console.log("Up & Running * 4000"))