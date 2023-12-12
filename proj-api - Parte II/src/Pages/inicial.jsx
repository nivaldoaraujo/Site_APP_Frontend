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
        })

  return (
    <div>
    {
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          
        </Card.Text>
        
      </Card.Body>
    </Card>
    }
    </div>
    
  );
}

export default inicial;