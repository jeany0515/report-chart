import React from 'react';
import PropTypes from 'prop-types';
import {IntlProvider, FormattedMessage} from 'react-intl';
import thoughtworks from './images/thoughtworks_white.png';
import customer from './images/customer_logo.svg'
import afs from './images/afs-white.png'
import './App.css';
import Charts from './component/Charts';
import languages from './intl/langs/index';

const language = "en";

class App extends React.Component {
    getChildContext() {
        console.log('languages[language]', languages[language])
        return { messages: languages[language] };
    }

    render() {
        return (
            <IntlProvider locale={language}  messages={languages[language]}>
                <div className="App">
                    <header className="App-header">
                        <img src={afs} alt="logo" width='160px' />
                        <div style={{ color: 'white', textAlign: 'center', fontSize:'50px', marginTop: '-50px' }}>
                            <FormattedMessage id="title"/>
                        </div>
                        <div style={{ color: 'white', textAlign: 'center',  fontSize:'30px' }}>
                            <FormattedMessage id="date_range"/>
                        </div>
                        <div style={{ textAlign: "right" }}>
                            {/*<img src={customer} alt="logo" height='40px' style={{ marginRight: '20px' }} />*/}
                            <img src={thoughtworks} alt="logo" height='40px'  style={{ marginRight: '20px' }} />
                        </div>
                    </header>
                    <Charts />
                    <div style={{ background: "white" }}>
                        <p >©Thoughtworks 2021 Commercial in Confidence</p>
                    </div>
                </div>
            </IntlProvider>
        );
    }
}
App.childContextTypes = {
    messages: PropTypes.object.isRequired,
};

export default App;
