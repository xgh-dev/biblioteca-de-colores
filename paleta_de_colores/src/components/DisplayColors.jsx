import SingleColor from "./SingleColor";
import { Contexto } from "./Contexto";
import { useContext } from "react";

const DisplayColors = () => {
  
  const {list} = useContext(Contexto)
  
  return (
    <div className="colors-box">
      {list.map((color,index) => (
        <SingleColor key={index} hexColor={color.hex} type={color.type}/>
    ))}
    </div>
  );
};

export default DisplayColors;
