import {useState} from "react";

function subReducer() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [personList, setPersonList] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [newPerson, setNewPerson] = useState({
        id: "",
        name: "",
        surname: "",
        age: ""
    });

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const addNewPerson = (personData) => {
        if(personData.id !== "" && personData.name !== "" && personData.surname !== "" && personData.age !== ""){
            let isAlreadyAdded = false;
            personList.forEach(person=>{
                if(person.id === personData.id){
                    isAlreadyAdded = true;
                }
            });

            if(!isAlreadyAdded){
                let newPersonData = {
                    id: personData.id,
                    name: personData.name,
                    surname: personData.surname,
                    age: personData.age
                };

                setPersonList(personList=>[...personList,newPersonData]);
                setNewPerson(newPersonData);
                return true;
            }
        }
        return false;
    };

    const getNameById =(id)=>{
        return personList.find(obj => obj.id === id).name;
    };


    return {newPerson, personList, addNewPerson, getNameById};
}

export default subReducer;
