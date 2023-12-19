import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Menu from '../Components/menu'
import Rodape from '../Components/rodape'

function produtos() {
    const [valor, setValor] = useState([])
    const navigat = useNavigate()    

        useEffect(() => {
            axios.get("http://localhost:3000/produtos")
            .then(res => setValor(res.data))
            .catch(err => console.log(err))
        },[])

  return (
    <>
    <Menu />
    <div className='container'>
      <div className="row product-list">
       <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }} >
    {
      valor.map((d, i) => (
            <Card key={i} style={{ width: '235px' }}>
            <Card.Img variant="top" src={d.foto} style={{ width: "230px", height: "230px" }}/>
            <Card.Body>
            <Card.Title style={{ fontSize: "25px" }}>Produtos</Card.Title>
            <Card.Text>
              Items:
            </Card.Text>
            <Card.Text>
            {d.produto}
            </Card.Text>
            R$ {d.valor},00
            </Card.Body>
            
            <Link to={`/carrinho/${d.id}`} className='btn btn-primary'>Comprar</Link>
          </Card>
      ))

    
    }
    </div> </div></div><br /><br />
    <Rodape />
    </>
    
    
  );
}

export default produtos;