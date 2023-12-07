import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from "react"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

function container (){
    const [valor, setValor] = useState([])
    

        useEffect(() => {
            axios.get("http://localhost:3000/usuarios")
            .then(res => setValor(res.data))
            .catch(err => console.log(err))
        })
    return(
        <>
            <div className="container "><br />
            
            <table className="table" >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Foto</th>
                    </tr>
                </thead>
           
            <tbody>
                    {
                    valor.map((d, i) => (
                    <tr key={i}>
                        <td>{d.id}</td>
                        <td>{d.nome}</td>
                        <td>{d.email}</td>
                        <td> <img className="fto" src={d.foto}  /> </td>
                        <td>
                            
                        </td>
                    </tr>
                    ))
                    }

            </tbody>
            </table>
        </div>
        </>
    )

}
export default container