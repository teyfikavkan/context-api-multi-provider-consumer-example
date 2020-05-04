import React, {useContext, useState} from 'react';
import SubContext from "../context/SubContext";
import GlobalContext from "../context/GlobalContext";

const AddPersonToList = () => {
    const {addNewPerson} = useContext(SubContext);
    const {increase} = useContext(GlobalContext);
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [age, setAge] = useState("");

    const handleId = (e) => {
        setId(e.target.value);
    };
    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleSurname = (e) => {
        setSurname(e.target.value);
    };
    const handleAge = (e) => {
        setAge(e.target.value);
    };

    const handleAdd = () => {
        let person = {
            id: id,
            name: name,
            surname: surname,
            age: age,
        };

        if(person.id !== "" && person.name !== "" && person.surname !== "" && person.age !== ""){
            let isAdded = addNewPerson(person);
            if(isAdded){
                increase();
            }
        }
    };

    return (
        <div>
            <section id="section-counter" className="center-align white-text blue" style={{marginTop: "20px"}}>
                <div>Add A Person</div>
                <section id="section-counter" className="center-align white-text grey" style={{marginTop: "20px"}}>
                    <div className="form-content">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" placeholder="Id" onChange={handleId} style={{border:"solid 2px",borderColor:"blue"}}
                                           value={id}/>
                                </div>
                                <div className="form-group">
                                    <input type="text"  placeholder="Age" onChange={handleAge} style={{border:"solid 2px",borderColor:"blue"}}
                                           value={age}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text"  placeholder="Name" onChange={handleName} style={{border:"solid 2px",borderColor:"blue"}}
                                           value={name}/>
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="Surname"
                                           style={{border:"solid 2px",borderColor:"blue"}}
                                           onChange={handleSurname}
                                           value={surname}/>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btnSubmit" onClick={handleAdd}>Add Person</button>
                    </div>
                </section>
            </section>

        </div>
    );
};

export default AddPersonToList;
