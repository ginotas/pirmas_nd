import React from 'react';
import trains from './components/data';
import Traukiniai from './components/Traukiniai';

function App(props) {

    return (
        <div className="main">

            {
            trains.map((traukinys, i ) => 
            <Traukiniai key={i} img={traukinys.img} desc={traukinys.desc} >
            </Traukiniai>)
            }

        </div>

    )
}

export default App;
