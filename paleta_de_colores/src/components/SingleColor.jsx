import { useContext,useEffect,useState } from "react"
import Clip from "/clipTransparent.png"
import { Contexto } from "./Contexto";


const SingleColor = ({ hexColor,type }) => {

    const [copy, setCopy] = useState(false);

    const {setTextColor} = useContext(Contexto)

    const handleCopy = (color) => () => {
        const colorNew = `#${color}`;
        navigator.clipboard.writeText(colorNew);
        setCopy(true);
        setTimeout(() => {0
            setCopy(false);
        }, 2000);
    }

    useEffect(() => {
        if (type === 'base'){
            setTextColor(`#${hexColor}`)
            //console.log(textColor)
        }   
    }, [hexColor])
    

    return ( 
        <div className="single-card" style={{ backgroundColor: `#${hexColor}` }}>
            <div className="content">
                <p>#{ hexColor }</p>
                <button onClick={ handleCopy(hexColor) }>
                    <img src={ Clip } alt="copy" />
                </button>
            </div>
            { copy ? <p className="copy-alert">Copied to clipboard</p> : null }
            
        </div>
    );
}
 
export default SingleColor;