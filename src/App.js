import React from 'react';
import GlobalContext from "./context/GlobalContext";
import SubContext from "./context/SubContext";
import globalReducer from "./reducers/globalReducer";
import subReducer from "./reducers/subReducer";
import subSecondReducer from "./reducers/subSecondReducer";
import SubSecondContext from "./context/SubSecondContext";

import  NewPersonWelcomingView from "./views/NewPersonWelcomingView"
import  AddPersonToList from "./components/AddPersonToList"
import  PersonListView from "./views/PersonListView"
import NumberOfPersonView from "./views/NumberOfPersonView";
import PersonBioView from "./views/PersonBioView";

function App() {
  const globalValue = globalReducer();
  const subValue = subReducer();
  const subSecondValue = subSecondReducer();
  return (
      <GlobalContext.Provider value={globalValue}>
        <SubContext.Provider value={subValue}>
          <NewPersonWelcomingView/>
          <AddPersonToList/>
          <NumberOfPersonView/>
          <PersonListView/>
        </SubContext.Provider>
        <SubSecondContext.Provider value={subSecondValue}>
          <PersonBioView/>
        </SubSecondContext.Provider>
      </GlobalContext.Provider>
  );
}

export default App;
