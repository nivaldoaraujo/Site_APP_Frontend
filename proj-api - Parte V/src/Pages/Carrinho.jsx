import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import Mane from '../Components/menu'
import '././carrinho.css'
import 'bootstrap/dist/css/bootstrap.min.css';




function carrinho(){

    const {id} = useParams()
    const [data, setData] = useState([])
    const navigat = useNavigate()
    const [res, setTotal] = useState(0)

    
    useEffect(() => {
        axios.get("http://localhost:3000/produtos/"+id)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    },[])

   
        const calcularTotal = () => {
            return (data.valor * res).toLocaleString("pt-BR", 
            { style: "cxurrency", currency: "BRL" })
    }




    return(
        <>
        <div className="form-cantainer">
        <h2>Carrinho de compras</h2>
            <div>
                <div>
                    
                </div>
                <div>
                <img src={data.foto} style={{ width: "300px", height: "300px" }}/>
                
                </div>
                <div>
                <h3>Produto</h3>
                {data.produto}
                </div>
                <div>
                <h3>Preço do produto</h3>
                R$ {data.valor},00
                </div>
                <select onChange={(e) => setTotal(e.target.value) }>
                    <option value="" disable>Quantidade de produtos</option>
                    <option value={1} disable>1</option>
                    <option value={2} disable>2</option>
                    <option value={3} disable>3</option>
                    <option value={4} disable>4</option>
                    <option value={5} disable>5</option>
                    <option value={6} disable>6</option>
                    <option value={7} disable>7</option>
                    <option value={8} disable>8</option>
                    <option value={9} disable>9</option>
                    <option value={10} disable>10</option>
                </select>
                <br />
              
                <div>R$ {data.valor * res},00</div>
                
            </div>
            <br />
            <div><h1>teste</h1></div>
        </div>


        
        </>
    )
}

export default carrinho