import React from 'react'
import { useState , useEffect } from "react";
import './App.css';
import axios from 'axios'


function App() {


      const [name , setName ] = useState("")
      const [home , setHome ] = useState("")


    useEffect( ()=> {
        axios.get("http://localhost:4000/home").then(function (response){
            setHome(response.data)
        })
        },[]
    )


    async function postName(e){
          e.preventDefault()

        try {
                await axios.post("http://localhost:4000/post_name", { name })
                console.log("axios start")
        }
        catch (error){
            console.log(error)
        }

    }

        return (
            <div className="App">
              <form onSubmit={ postName }>

                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                  <button type="submit"> send Name</button>
              </form>

                {home}
            </div>
  );
}

export default App;
