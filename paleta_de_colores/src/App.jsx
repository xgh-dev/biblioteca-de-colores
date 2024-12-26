import Values from "values.js";
import "./App.css";
import { useState } from "react";
import FormColor from "./components/FormColor";
import DisplayColors from "./components/DisplayColors";
import { Contexto } from "./components/Contexto";

function App() {
  const [list, setList] = useState(""); //en el use state definimos la clase nueva y el metodo que utilizaremos para obtener los colores

  //hook para cambiar los colores del texto
  const [textColor, setTextColor] = useState("");
  //console.log(list);

  return (
    <>
      <Contexto.Provider value={{list, setList, textColor, setTextColor}}>
        <div className="App">
          <FormColor />
          {list == "" ? (
            <div className="contanedorMensajeAviso">
              <h2 className="mensajeAviso">Ingrese el color que desea</h2>
            </div>
          ) : (
            <DisplayColors />
          )}
        </div>
      </Contexto.Provider>
    </>
  );
}

export default App;
