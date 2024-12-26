import Values from "values.js";
import "./App.css";
import { useState } from "react";
import FormColor from "./components/FormColor";
import DisplayColors from "./components/DisplayColors";

function App() {
  const [list, setList] = useState(""); //en el use state definimos la clase nueva y el metodo que utilizaremos para obtener los colores

  console.log(list);

  return (
    <>
      <div className="App">
        <FormColor list={list} setList={setList} />
        {list == "" ? (
          <div className="contanedorMensajeAviso">
            <h2 className="mensajeAviso">Ingrese el color que desea</h2>
          </div>
        ) : (
          <DisplayColors list={list} />
        )}
      </div>
    </>
  );
}

export default App;
