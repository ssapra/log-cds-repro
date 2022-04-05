import React from 'react';
import './App.css';
import {CdsInput} from '@cds/react/input';

function App() {
    return (<>
            <CdsInput>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name"/>
            </CdsInput>
            <CdsInput>
                <label htmlFor="second-input">Another Input</label>
                <input type="text" name="name" id="second-input"/>
            </CdsInput>
        </>
    );
}

export default App;
