import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Formulario from './componentes/Formulario';
import React, {useEffect, Fragment, useState} from 'react';
import Cliente from './componentes/Cliente';

function App() {

  //Iniciamos nuestro local storage
  let clienteGuardados = JSON.parse(localStorage.getItem('clientes'));
  if(!clienteGuardados){
    clienteGuardados = []
  };


 //generar un hook vacio 
const [clientes, editarClientes] = useState(clienteGuardados);

//Hook useEffect: Sirve para ejecutar alguna funcionalidad
//en alguna variable,/hook/situación

useEffect( () => {
  if(clienteGuardados) {
    localStorage.setItem('clientes', JSON.stringify(clientes))
  } else {
    localStorage.setItem('clientes', JSON.stringify([]))
  }
}, [clientes, clienteGuardados]);


  //funcion que toma el socio nuevo
  const agregarCliente = (socio) => {
    editarClientes([
          ...clientes,
          socio
    ])
  };

  //borrar cliente

  const borrarCliente = (id) => {
    const nuevosClientes = clientes.filter(cliente => cliente.id !== id)
    editarClientes(nuevosClientes);
  };

  return (
    <Fragment>
      <Container>
        <Row>
          <Col><h2>Preinscripción al curso</h2></Col>
        </Row>
        <Row>
          <Col>
            <Formulario
              agregarCliente={agregarCliente}
            />
          </Col>
          <Col>
            {
              clientes.length > 0 ?
              <h3>listado de estudiantes</h3>
              :
              <h3>no hay estudiantes inscriptos</h3>
            }
            {
              clientes.map( cliente =>
                <Cliente
                  cliente={cliente}
                  key={cliente.id}
                  borrarCliente={borrarCliente}
                />
                )
            }
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
