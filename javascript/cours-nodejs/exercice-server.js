const http=require("http");
const express=require("express");

const app=express()
app.use(express.json());
//Route pour récuperer la liste des annonces
app.get('/annonces',(req,res)=> {
    const id=req.params.id
    const annonce =todos.find(a =>a.id ==id)
    if (annonce !=undefined){
        res.json({
            annonce:annonce,
            error:false

        })
    }
    else {
        res.json,({
            error:true,
            message: "annonce not found"
        })
    }
})

//Route pour ajouter une annonce



const server= http.createServer(app)
server.listen(3010)


