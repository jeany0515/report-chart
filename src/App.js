import React from 'react';
import {IntlProvider, FormattedMessage} from 'react-intl';
import academy from './images/academy.png'
import customer from './images/customer_logo.svg'
import afs from './images/afs_logo2.png'
import './App.css';
import Charts from './component/Charts';
import languages from './intl/langs/index';

const language = "en";

function App() {
  return (
      <IntlProvider locale={language}  messages={languages[language]}>
          <div className="App">
              <header className="App-header">
                  <img src={afs} alt="logo" width='160px' style={{ paddingTop: '10px' }} />
                  <h1 style={{ color: 'white', textAlign: 'center' }}>
                      <FormattedMessage id="title"/>
                  </h1>
                  <h6 style={{ color: 'white', textAlign: 'center' }}>
                      <FormattedMessage id="date_range"/>
                  </h6>
                  <div style={{ textAlign: "right" }}>
                      <img src={customer} alt="logo" height='40px' style={{ marginRight: '20px' }} />
                      <img src={academy} alt="logo" height='56px' />
                  </div>
              </header>
              <Charts />
              <div style={{ background: "white" }}>
                  <p >©ThoughtWorks 2020 Commercial in Confidence</p>
              </div>
          </div>
      </IntlProvider>
  );
}

export default App;
