import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'


function container (){
    const [valor, setValor] = useState([])
    const navigat = useNavigate()    

        useEffect(() => {
            axios.get("http://localhost:3000/usuarios")
            .then(res => setValor(res.data))
            .catch(err => console.log(err))
        })

    return(
        <>
            <div className="container "><br />
            <div className='text-end' ><Link to="/criar" className='btn btn-primary'>Adicionar</Link></div>
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
                        <Link to={`/update/${d.id}`} className='btn btn-sm btn-success'>Atulaizar</Link>
                        <button onClick={e => hardSubmit(d.id)} className='btn btn-sm ms-1 btn-danger' >Excluir</button>
                        {/* <Link to="/" className='btn btn-sm ms-1 btn-danger'>Excluir</Link> */}
                        </td>
                    </tr>
                    ))
                    }

            </tbody>
            </table>
        </div>
        </>
       
    )
         //função excluir
         function hardSubmit(id){
            const conf = window.confirm("Deseja realmente excluir esse registro?")
            if(conf)
            {
                axios.delete("http://localhost:3000/usuarios/"+id)
                .then(res => {
                    alert("Dados excluidos com sucesso!!!")
                    navigat("/")
                }).catch(err = console.log(err))
            }
         }

}
export default container