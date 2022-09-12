
const express = require('express')
const http = require('http');
const cors = require("cors")
const { arrayLast } = require("./consumer")


const port = 4000
const app = new express()

app.use(express.urlencoded({ extended : true}))
app.use(express.json())
app.use(cors())


app.get("/" , cors(),async (req , res) =>{
    console.log("working")
})


app.post("/post_name", async (req , res) => {

    let {name} = req.body
    console.log(name)
})

app.get("/home" , cors() , async (req , res) => {

        res.send(arrayLast )

    }
)


app.listen(port , () =>{
    console.log(`listening at http://localhost:${port}`)
})




