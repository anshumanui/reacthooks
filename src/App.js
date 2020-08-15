import React from 'react';
//  import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import '../node_modules/uikit/dist/css/uikit.min.css';
import '../node_modules/uikit/dist/js/uikit.min.js';

//  Import SCSS for this component
import './assets/scss/app.scss';

import UseEffectPage from './components/UseEffectPage';

//  UIkit.use(Icons);


function App() {
    return (
        <main>
            <div className="uk-container uk-container-expand uk-padding-remove">
                <section className="uk-background-secondary uk-padding uk-light">
                    <h2 className="uk-padding-remove uk-margin-remove">React Hooks</h2>
                </section>

                <section className="uk-padding">
                    <ul className="uk-flex-center cc-tab" data-uk-tab="connect: #component-tab-center; animation: uk-animation-fade">
                        <li className="uk-active">
                            <a href="#">useState</a>
                        </li>
                        <li>
                            <a href="#">useEffect</a>
                        </li>
                        <li>
                            <a href="#">useContext</a>
                        </li>
                        <li>
                            <a href="#">useMemo</a>
                        </li>
                        <li>
                            <a href="#">useCallback</a>
                        </li>
                        <li>
                            <a href="#">useReducer</a>
                        </li>
                        <li>
                            <a href="#">useRef</a>
                        </li>
                    </ul>

                    <ul id="component-tab-center" className="uk-switcher">
                        <UseEffectPage />
                        <li>
                            lalalala
                        </li>
                    </ul>
                </section>
            </div>
        </main>
    );
}

export default App;
