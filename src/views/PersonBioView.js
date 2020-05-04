import React, {useContext, useEffect, useState} from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import GlobalContext from "../context/GlobalContext";
import SubSecondContext from "../context/SubSecondContext";
import SubContext from "../context/SubContext";


const PersonBioView = () => {
    console.log("PersonBioView rendered");
    const {selectedPersonId, setSelectedId} = useContext(GlobalContext);
    const {setBio, getBioById} = useContext(SubSecondContext);

    // ulaşılamıyor
    // const {getNameById} = useContext(SubContext);

    const [bioText, setBioText] = useState("");

    useEffect(() => {
        let text = getBioById(selectedPersonId);
        setBioText(text === undefined ? "" : text);
    },[selectedPersonId]);

    const handleSaveBio = () => {
        setBio(selectedPersonId,bioText);
    };

    const handleClose = () => {
        setSelectedId("");
    };

    const handleTextChange= (e)=> {
        setBioText(e.target.value);
    }

    return (
        <div>
            <section id="section-counter" className="center-align white-text blue">
                <div>Person Biography Area</div>
            </section>
            {selectedPersonId !== "" ?
                <div>
                    <TextareaAutosize aria-label="empty textarea" placeholder="Write Your Bio Here!!!"
                    value={bioText}
                    onChange={handleTextChange}/>
                    <div style={{textAlign: "center"}}>
                        <button type="button" className="btnSubmit" onClick={handleSaveBio}>Save Bio</button>
                        <button type="button" className="btnSubmit" onClick={handleClose}>Close</button>
                    </div>
                </div>
                : null

            }

        </div>
    );
};

export default PersonBioView;
