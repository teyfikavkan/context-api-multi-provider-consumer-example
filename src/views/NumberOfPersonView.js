import React, {useContext} from 'react';
import GlobalContext from "../context/GlobalContext";

const NumberOfPersonView = () => {
    const {count} = useContext(GlobalContext);
    console.log("NumberOfPersonView rendered");
    return (
        <section id="section-counter" className="center-align white-text blue" style={{marginTop: "20px"}}>
            <div>Total Person Number</div>
            <div style={{color: "black"}}>{count}</div>
        </section>
    );
};

export default NumberOfPersonView;
