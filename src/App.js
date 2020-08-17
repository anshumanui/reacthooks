import React from 'react';
//  import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import '../node_modules/uikit/dist/css/uikit.min.css';
import '../node_modules/uikit/dist/js/uikit.min.js';

//  Import SCSS for this component
import './assets/scss/app.scss';

import { removeHashTag } from './components/common';

import UseStatePage from './components/UseStatePage';
import UseEffectPage from './components/UseEffectPage';
import UseContextPage from './components/UseContextPage';
import UseMemoPage from './components/UseMemoPage';
import UseCallbackPage from './components/UseCallbackPage';
import UseReducerPage from './components/UseReducerPage';
import UseRefPage from './components/UseRefPage';

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
                            <a href="/" onClick={ removeHashTag }>useState</a>
                        </li>
                        <li>
                            <a href="/" onClick={ removeHashTag }>useEffect</a>
                        </li>
                        <li>
                            <a href="/" onClick={ removeHashTag }>useContext</a>
                        </li>
                        <li>
                            <a href="/" onClick={ removeHashTag }>useMemo</a>
                        </li>
                        <li>
                            <a href="/" onClick={ removeHashTag }>useCallback</a>
                        </li>
                        <li>
                            <a href="/" onClick={ removeHashTag }>useReducer</a>
                        </li>
                        <li>
                            <a href="/" onClick={ removeHashTag }>useRef</a>
                        </li>
                    </ul>

                    <ul id="component-tab-center" className="uk-switcher">
                        <UseStatePage />
                        <UseEffectPage />
                        <UseContextPage />
                        <UseMemoPage />
                        <UseCallbackPage />
                        <UseReducerPage />
                        <UseRefPage />
                    </ul>
                </section>
            </div>
        </main>
    );
}

export default App;
