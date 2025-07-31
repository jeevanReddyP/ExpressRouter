const express=require("express")
const app=express()
app.use(express.json())

const dummyuser={ "id": 1, "name": "John Doe", "email": "john@example.com" }
const dummyusers=[
  { "id": 1, "name": "John Doe", "email": "john@example.com" },
  { "id": 2, "name": "Jane Doe", "email": "jane@example.com" },
  { "id": 3, "name": "Bob Smith", "email": "bob@example.com" }
]

app.get("/users/get",(req,res)=>{
    res.json(dummyuser)
})
app.get("/users/list",(req,res)=>{
    res.json(dummyusers)
})
app.get("*",(req,res)=>{
    res.status(404).json({msg:"404 Not Found"})
})
app.listen("4000",()=>{
    console.log("Server is Started at Port 4000")
})