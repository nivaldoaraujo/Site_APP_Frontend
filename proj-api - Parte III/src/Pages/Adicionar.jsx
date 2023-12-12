import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"




function adicionar(){

    const [inputData, setInputData] = useState({nome: '', email: '', foto: ''})
    const navigate = useNavigate()

    function HandSunmit(event){
        event.preventDefault()
        axios.post("http://localhost:3000/usuarios", inputData)
        .then(res =>{
            alert("Dados inseridos com sucesso!!")
            navigate('/')
        })
        .catch(err => console.log(err))

    }

    return(
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
           
        <div className="w-50 border bg-light p-5">
         <form onSubmit={HandSunmit}>
         <div >
                 <label htmlFor="name">Nome</label><br />
                 <input type="text" name="name" className="from-control" 
                 onChange={e=>setInputData({ ...inputData, nome: e.target.value })}
                  />
             </div>
             <br />
             <div>
                 <label htmlFor="email">E-Mail</label><br />
                 <input type="email" name="email" className="from-control"
                 onChange={e=>setInputData({ ...inputData, email: e.target.value })}
                  />
             </div>
             <br />
             <div>
                 <label htmlFor="imagem">Imagem</label><br />
                 <input type="text" name="imagem" className="from-control"
                 onChange={e=>setInputData({ ...inputData, foto: e.target.value })}
                  />
             </div>
             
             
             <br />
             <button className="btn btn-info" >Enviar</button>
         </form>
         </div> 
        
        
     </div>
    )
}

export default adicionar