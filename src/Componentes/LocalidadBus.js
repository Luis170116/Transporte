import React from "react";

/**
 * 
 * @param {*} param0 
 */
const LocalidadBus=({nombreBus,precio,destino,des})=> {
   


    return (
        <div className="DetalleBus">

            <h1> BUS: {nombreBus}</h1>
            <h2> PRECIO: {precio}</h2>
            <h3> DESTINO: {destino}</h3>
            <h4> DESCREPCION: {des}</h4>
            <br/>
            
            
        </div>
    )
}
    
    
export default  LocalidadBus;