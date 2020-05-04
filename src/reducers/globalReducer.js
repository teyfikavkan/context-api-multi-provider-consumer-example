import {useState} from "react";

function globalReducer() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [count, setCount] = useState(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedPersonId, setSelectedPersonId] = useState("");

    const increase = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrease = () => {
        setCount(prevCount => prevCount - 1);
    };

    const setSelectedId = (id) =>{
        setSelectedPersonId(id);
    }
    return { count, increase, decrease, selectedPersonId, setSelectedId};
}

export default globalReducer;
