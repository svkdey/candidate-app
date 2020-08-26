import React, { useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import "./App.css";
import SeachBar from './component/layout/SearchBar';
import DashBaord from './component/DashBoard/DashBaord'
import AddBtn from './component/layout/AddBtn';
import AddCandidateApplicationModal from './component/Modal/AddCandidateApplicationModal'

import { Provider } from 'react-redux';
import store from '../src/store';
const App = () => {
  useEffect(() => {
    M.AutoInit();
  })
  return (
    <Provider store={store}>
      <Fragment>

        <SeachBar />
        <div className="container">
          <AddBtn />
          <AddCandidateApplicationModal />
          <DashBaord />
        </div>
      </Fragment>
    </Provider>

  );
}

export default App;
