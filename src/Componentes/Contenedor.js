import React from "react";
import DetalleBus from "./DetalleBus";
import PrecioPasaje from "./PrecioPasaje";

/**
 * 
 */
const Contenedor = () => (
 <div className="contenedor">
    <div> AGENCIA DE TRANSPORTE</div>
    <div className="contenido">   
    <DetalleBus></DetalleBus>
        <PrecioPasaje></PrecioPasaje>
        
        </div>
     <div> 
         CREADO POR LUIS CACERES MEDRANO
        
         </div>   
    </div>


);
  
export default Contenedor;