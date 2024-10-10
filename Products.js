const express=require("express");
const cors=require("cors");
const db = require("./config");
const app = express();
app.use(express.json());
app.use(cors());
const Products = db.collection("Products");

app.get("/Products/", async(req,res)=>{
  const snapshot= await Products.get();
  const list = snapshot.docs.map((doc)=>({id:doc.id, ...doc.data()}))
  res.send(list)
});

app.put("/Products/create", async(req,res)=>{
    const data = req.body
     await Products.add(data)
     res.send({msg:"Usuario Adicionado"})
});

app.post("/Products/update", async (req, res) => {
  const id = req.body.id;
  delete req.body.id;
  const data = req.body;
  await Products.doc(id).update(data);
  res.send({ msg: "Usuario Actualizado" });
});

app.delete("/Products/delete", async (req, res) => {
  const id = req.body.id;
  await Products.doc(id).delete();
  res.send({ msg: "Usuario Borrado" });
});

app.listen(4000,()=>console.log("Up & Running * 4000"))