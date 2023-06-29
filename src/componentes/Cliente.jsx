import React, {Fragment} from 'react';
import { Button } from 'react-bootstrap';

const Cliente = ({cliente, borrarCliente}) => {

    return ( 
        <Fragment>
            <p>Nombre: {cliente.nombre}</p>
            <p>DNI: {cliente.dni}</p>
            <Button
                onClick={() => borrarCliente(cliente.id)}
            >Borrar
            </Button>    
        </Fragment>
     );
}
 
export default Cliente;
