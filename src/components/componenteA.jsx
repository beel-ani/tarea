import React, { useState } from "react";

const ComponenteA = ({Contacto, componenteB })=>{
    export default class Contacto={
        nombre: "dereck";
        apellido: "candafo";
        email:"candadere@hotmail.com";
        conectado:true;
    };
}
export default ComponenteA;
export const componenteB= ({Contacto, componentA})=>{
const changeState = (id)=>{
    console.log('TODO: Cambiar estado de una tarea ')
    return(
        <>       

         <Contacto/>
        <componenteA/>
         </>
    )}
    ComponenteA.prototypes = {
        ComponenteA: Prototypes.instanceOf(componentA)

    }
}

 
export const class AddCategory= ({ componentB })=>{
   
    const [ inline, setInline] = useState(initialState);
    
    setInline( initialState=(e)=>e.inline);
    const contacto=(e)=>{
    preventDefault(e)=>(e.inline);
    return(
        <>
        <button value={value} onClick={(e)=>e.onChange}>{onChange}</button>
        </>
    )
    }
};

};
