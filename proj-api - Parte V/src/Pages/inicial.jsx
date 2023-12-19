import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function inicial() {
    const [valor, setValor] = useState([])
    const navigat = useNavigate()    

        useEffect(() => {
            axios.get("http://localhost:3000/usuarios")
            .then(res => setValor(res.data))
            .catch(err => console.log(err))
        },[])

  return (
    <div className='container'>
      <div className="row product-list">
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }} >
    {
      valor.map((d, i) => (
            <Card key={i} style={{ width: '250px' }} className="">
            <Card.Img variant="top" src={d.foto} style={{ width: "247px", height: "230px" }}/>
            <Card.Body>
            <Card.Title style={{ fontSize: "25px" }}>Funcionários</Card.Title>
            <Card.Text>
              {d.nome}
            </Card.Text>
              {d.email}
            </Card.Body>
          </Card>
      ))

    
    }
    </div>

    </div>
    </div>
    
    
    
  );
}

export default inicial;