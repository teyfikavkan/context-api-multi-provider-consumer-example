import React, {useContext} from 'react';
import SubContext from "../context/SubContext";

const NewPersonWelcomingView = () => {
    const {newPerson} = useContext(SubContext);
    console.log("NewPersonWelcomingView rendered");
    return (
        <section id="section-counter" className="center-align white-text blue">
            <div>Welcome</div>
            {newPerson.name !== "" ?
                <div style={{color:"black"}}>{newPerson.name}</div> : null
            }
        </section>
    );
};

export default NewPersonWelcomingView;
