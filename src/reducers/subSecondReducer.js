import {useState} from "react";

function globalReducer() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [bioOfPerson, setBioOfPerson] = useState(new Map());


    const setBio = (id, bioData) => {
        setBioOfPerson(bioOfPerson.set(id, bioData));
    };

    const getBioById = (id) => {
        return bioOfPerson.get(id);
    };

    return {setBio, getBioById};
}

export default globalReducer;
