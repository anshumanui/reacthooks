import React, { useState } from 'react';


function UseContextPage() {

    return (
		<li>
            <div className="uk-grid-medium uk-child-width-1-2@s uk-margin-medium-top" data-uk-grid>
                <div>
                    <pre className="info">
                    {`const value = useContext(MyContext);`}
                    </pre>
                </div>
            </div>

            <ul className="uk-list uk-list-decimal uk-margin-small-top uk-margin-medium-bottom">
                <li>During the initial render, the returned state <code>(state)</code> is the same as the value passed as the first argument <code>(initialState)</code>.</li>
                <li>The <code>setState</code> function is used to update the state. It accepts a new state value and enqueues a re-render of the component.</li>
            </ul>
        </li>
    );
}

export default UseContextPage;