import { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';

const Patient = ({name, description, avatar}) => {

    const [showFullDescription, setFullDescription] = useState(false);

    const showFullDescriptionHandler = () => {
        setFullDescription(!showFullDescription);
      };
    
    const desc = showFullDescription
        ? description
        : description.slice(0, 100);
    

    let hero = "";
    
    if(avatar){
        hero = avatar;
    }

    return (
        <div className="patient-card">
            <div className="identity-wrapper">
                <img src={hero} alt={name} />
                <h3 className="name">{name}</h3>
            </div>
                <p>{desc}</p>
                <div className="btnWrapper">
                <button className="textbtn" onClick={showFullDescriptionHandler}>
                    Read {showFullDescription ? "Less" : "More"}
                </button>
                <button className="customBtn"><EditIcon sx={{ fontSize: 20}}/></button>
                </div>
        </div>
    )
}


export default Patient;