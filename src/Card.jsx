//creacion de componente funcional
import "./Card.css"

const myStyle = {
    virtual: {
        color:"orange",
        fontSize: 18,
        fontFamily: "Arial"
    } ,
    real: {
        color:"maroon",
        fontSize: 20,
        fontFamily: "Georgia"
    }
 };

function CardApp(prop){
    /*
    Reglas de JSX (Javascript XML)
    -Los componentes deben estar dentro de
     una etiqueta o componentre contenedor.
      NO se pueden poner componentes hermanos.
    */
   const myCard=(
    <div className="card-container">
        <a href={prop.href}>
            <img src={prop.src}/>
            <h1>{prop.title}</h1>
        </a>
        <p style={prop.type === "virtual"? myStyle.virtual : myStyle.real}>{prop.description}</p>
    </div>
   );
    return myCard;
}

/* exportacion por default, es una forma de exportar unicamente
una unica entidad desde un modulo */
export default CardApp;
