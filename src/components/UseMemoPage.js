import React, { useState, useMemo } from 'react';


function UseMemoPage() {
    const MemoizedCalculation = () => {
        // State for our counter
        const [count, setCount] = useState(0);
        // State to keep track of current word in array we want to show
        const [wordIndex, setWordIndex] = useState(0);

        // Words we can flip through and view letter count
        const words = ['hey', 'this', 'is', 'cool'];
        const word = words[wordIndex];

        // Returns number of letters in a word
        // We make it slow by including a large and completely unnecessary loop
        const computeLetterCount = word => {
            let i = 0;
            while (i < 1000000000) {
                i++;
                return word.length;
            }
        };

        // Memoize computeLetterCount so it uses cached return value if input array ...
        // ... values are the same as last time the function was run.
        const letterCount = useMemo(() => computeLetterCount(word), [word]);

        // This would result in lag when incrementing the counter because ...
        // ... we'd have to wait for expensive function when re-rendering.
        //const letterCount = computeLetterCount(word);

        return (
            <div style={{ padding: '15px' }}>
                <h2>Compute number of letters (slow 🐌)</h2>
                <p>"{word}" has {letterCount} letters</p>
                <button onClick={() => {
                    const next = wordIndex + 1 === words.length ? 0 : wordIndex + 1;
                    setWordIndex(next);
                }}>
                    Next word
                </button>

                <h2>Increment a counter (fast ⚡️)</h2>
                <p>Counter: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        );
    }

    return (
		<li>
            <div className="uk-grid-medium uk-child-width-1-2@s uk-margin-medium-top" data-uk-grid>
                <div>
                    <pre className="info">
                    {`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`}
                    </pre>
                </div>
            </div>

            <ul className="uk-list uk-list-decimal uk-margin-small-top uk-margin-medium-bottom">
                <li>Returns a <code>memoized</code> value.</li>
                <li>In computing, <code>memoization</code> or <code>memoisation</code> is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again. </li>
                <li>Pass a “create” function and an array of dependencies. <code>useMemo</code> will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.</li>
                <li>Remember that the function passed to useMemo runs during rendering. Don’t do anything there that you wouldn’t normally do while rendering. For example, side effects belong in <code>useEffect</code>, not <code>useMemo</code>.</li>
                <li>The second argument is an array of dependencies [a, b], when one of the dependencies changes, <code>useMemo()</code> recomputes the value, if it doesn't - returns last memoized value.</li>
                <li>If you forget to pass an array of dependencies, the new value computes every time the component renders.</li>
            </ul>

            <MemoizedCalculation />
        </li>
    );
}

export default UseMemoPage;