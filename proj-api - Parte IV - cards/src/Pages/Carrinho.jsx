import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import Mane from '../Components/menu'



function carrinho(){

    const {id} = useParams()
    const [data, setData] = useState([])
    const navigat = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:3000/produtos/"+id)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    },[])

    return(
        <>
        
        <div style={{ }} >
            <h3>Produto</h3>
            <img src={data.foto} style={{ width: "300px", height: "300px" }}/>
            <h3>Nome do produto</h3>
            {data.produto}
            <h6>Valor do produto:</h6>
            R$ {data.valor},00
        </div>
        </>
    )
}

export default carrinho