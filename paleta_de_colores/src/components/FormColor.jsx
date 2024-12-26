import { useState } from "react";
import Values from "values.js";

const FormColor = ({list,setList}) => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);

  //en la arrow function de sebe pasar e como argumento, esto represetan el evento
  const handleGenerator = (e) => {
    e.preventDefault();
    try {
        let colors = new Values(color).all(10);
        setList(colors)
        setError(false)
    } catch (error) {
        console.log(error)
        setError(true)
    }
  };

  return (
    <div className="form-color">
      <h1>Paleta de colores</h1>
      <form onSubmit={handleGenerator}>
        <input
          type="text"
          placeholder="Ingresar color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input type="submit" value="Generar" />
      </form>
      {error ? <p className="error">Color invalido</p>:null}
    </div>
  );
};

export default FormColor;
