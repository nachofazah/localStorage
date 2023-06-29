import React, {Fragment, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { v4 as uuid} from 'uuid';


const Formulario = ({agregarCliente}) => {

//creo un socio vacio y lo inicializo
    const [socio, editarSocio] = useState({
        nombre:"",
        dni:""
    });
//extraer valores    
    const {nombre, dni} = socio;

//creo un hook para error

const [error, setErorr] = useState(false)

 //recogemos lo que el usuario escribe   
    const handleChange = (e) => {
        editarSocio({
            ...socio,
            [e.target.name] : e.target.value
        }) 
    };

 //lo que se ejecuta con el form   
    const submitForm = (e) =>{
        e.preventDefault();

        //console.log('Enviado')

        //validar el formulario
        if(nombre.trim() === '' || dni.trim() === ''){
            setErorr(true)
            return;
        }

        //mensaje de error
        setErorr(false);

        //diferenciar socios con id
        socio.id = uuid();
   
        //guardar socio
        agregarCliente(socio);

        //limpiar formulario
        editarSocio({
            nombre:'',
            dni:''
        })
    }


    return (  
        <Fragment>
            <Form onSubmit={submitForm}>
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Nombre Completo"
                    name='nombre'
                    onChange={handleChange}
                    value={nombre} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>DNI</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="DNI"
                        name='dni'
                        onChange={handleChange}
                        value={dni}  />
                </Form.Group>
                <Button 
                    variant="primary" 
                    type="submit">
                    Ingresar Socio
                </Button>
            </Form>

            {
                error
                ?<h4>Completá todos los campos</h4>
                : null
            }
        </Fragment>
    );
}
 
export default Formulario;