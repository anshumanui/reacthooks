(this.webpackJsonpcrashcourse=this.webpackJsonpcrashcourse||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(6),r=a.n(s),u=(a(14),a(15),a(16),a(17),function(e){e.preventDefault()}),m=a(3),i=a(7),o=a(8),c=a(1);var d=function(){var e=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(""),u=Object(c.a)(r,2),m=u[0],i=u[1];return l.a.createElement("div",{className:"uk-padding uk-background-secondary uk-light"},l.a.createElement("form",{className:"uk-form-stacked",onSubmit:function(e){e.preventDefault(),s([].concat(Object(o.a)(a),[{title:m}])),i("")}},l.a.createElement("label",{className:"uk-form-label uk-text-uppercase"},"Add Tasks"),l.a.createElement("div",{className:"uk-form-controls"},l.a.createElement("input",{name:"tasktitle",type:"text",className:"uk-input",value:m,onChange:function(e){return i(e.target.value)}}))),l.a.createElement("ul",{className:"uk-list uk-list-decimal uk-list-divider uk-margin-remove-bottom"},a.map((function(e,t){return l.a.createElement("li",{key:"li_"+t},e.title)}))))},t=function(){var e=Object(n.useState)({title:""}),t=Object(c.a)(e,2),a=t[0],s=t[1];return l.a.createElement("div",{className:"uk-padding uk-background-secondary uk-light"},l.a.createElement("form",{className:"uk-form-stacked",onSubmit:function(e){e.preventDefault()}},l.a.createElement("label",{className:"uk-form-label uk-text-uppercase"},"Enter Message"),l.a.createElement("div",{className:"uk-form-controls"},l.a.createElement("input",{name:"messagetitle",type:"text",className:"uk-input",value:a.title,onChange:function(e){return t=e.target.value,a.title=t,void s(a);var t}}))),l.a.createElement("p",{className:"uk-margin-remove-bottom"},a.title))},a=function(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(""),u=Object(c.a)(r,2),m=u[0],i=u[1];return l.a.createElement("form",{className:"uk-form-stacked uk-padding uk-background-secondary uk-light"},l.a.createElement("label",{className:"uk-form-label uk-text-uppercase"},"Username"),l.a.createElement("div",{className:"uk-form-controls"},l.a.createElement("input",{type:"text",name:"username",className:"uk-input uk-form-width-large",value:a,onChange:function(e){return s(e.target.value)}})),l.a.createElement("label",{className:"uk-form-label uk-text-uppercase uk-margin-small-top"},"Password"),l.a.createElement("div",{className:"uk-form-controls"},l.a.createElement("input",{type:"password",name:"password",className:"uk-input uk-form-width-large",value:m,onChange:function(e){return i(e.target.value)}})),l.a.createElement("p",{className:"uk-margin-remove-bottom"},"Username: ",a||"Nothing entered yet!"," | Password: ",m||"Nothing entered yet!"))},s=function(){var e=Object(n.useState)({username:"",password:""}),t=Object(c.a)(e,2),a=t[0],s=t[1],r=function(e){e.preventDefault(),s(Object(i.a)({},a,Object(m.a)({},e.target.name,e.target.value)))};return l.a.createElement("form",{className:"uk-form-stacked uk-padding uk-background-secondary uk-light"},l.a.createElement("label",{className:"uk-form-label uk-text-uppercase"},"Username"),l.a.createElement("div",{className:"uk-form-controls"},l.a.createElement("input",{type:"text",name:"usernameDynamic",className:"uk-input uk-form-width-large",value:a.username,onChange:r})),l.a.createElement("label",{className:"uk-form-label uk-text-uppercase uk-margin-small-top"},"Password"),l.a.createElement("div",{className:"uk-form-controls"},l.a.createElement("input",{type:"password",name:"passwordDynamic",className:"uk-input uk-form-width-large",value:a.password,onChange:r})),l.a.createElement("p",{className:"uk-margin-remove-bottom"},"Username: ",a.username?a.username:"Nothing entered yet!"," | Password: ",a.password?a.password:"Nothing entered yet!"))};return l.a.createElement("li",null,l.a.createElement("div",{className:"uk-grid-medium uk-child-width-1-2@s uk-margin-medium-top","data-uk-grid":!0},l.a.createElement("div",null,l.a.createElement("pre",{className:"info"},"const [state, setState] = useState(initialState);"))),l.a.createElement("ul",{className:"uk-list uk-list-decimal uk-margin-small-top uk-margin-medium-bottom"},l.a.createElement("li",null,"During the initial render, the returned state ",l.a.createElement("code",null,"(state)")," is the same as the value passed as the first argument ",l.a.createElement("code",null,"(initialState)"),"."),l.a.createElement("li",null,"The ",l.a.createElement("code",null,"setState")," function is used to update the state. It accepts a new state value and enqueues a re-render of the component.")),l.a.createElement("div",{className:"uk-grid-medium uk-margin-large-top uk-margin-large-bottom uk-child-width-expand@s","data-uk-grid":!0},l.a.createElement("div",null,l.a.createElement("h5",{className:"uk-margin-remove success uk-box-shadow-small uk-padding-small uk-light"},"Example - Increasing a counter"),l.a.createElement("pre",{className:"uk-margin-remove-top uk-padding-small"},"function Counter() {\n    //  0 is the initial value or count\n    const [count, setCount] = useState(0);   \n\n    const increaseCounter = () => {\n        //  setCount increments the value \n        //  of count on every click\n        setCount(count + 1);       \n    }\n\n    return (\n        <div>\n            <span>Count: { count }</span>\n            <button onClick={ increaseCounter }>\n                Increase Counter\n            </button>\n        </div>\n    );\n}")),l.a.createElement("div",null,l.a.createElement("h5",{className:"uk-margin-remove success uk-box-shadow-small uk-padding-small uk-light"},"Example - Same (Shortcut)"),l.a.createElement("pre",{className:"uk-margin-remove-top uk-padding-small"},"function Counter() {\n    //  0 is the initial value or count\n    const [count, setCount] = useState(0);\n\n    //  The same piece of code can be \n    //  rewritten like this\n\n    return (\n        <div>\n            <span>Count: { count }</span>\n            <button \n                onClick={ () => setCount(count + 1) }>\n                Increase Counter\n            </button>\n        </div>\n    );\n}")),l.a.createElement("div",{className:"uk-width-1-4@s"},l.a.createElement("h5",{className:"uk-margin-remove info uk-box-shadow-small uk-padding-small uk-light"},"Key Points to Remember"),l.a.createElement("div",{className:"uk-background-muted uk-padding-small"},l.a.createElement("ul",{className:"uk-list uk-list-decimal"},l.a.createElement("li",null,l.a.createElement("code",null,"useState")," returns array because compared to an object, an array is more flexible and easy to use."),l.a.createElement("li",null,"If you update a State Hook to the same value as the current state, React will bail out without rendering the children or firing effects."),l.a.createElement("li",null,"React uses ",l.a.createElement("code",null,"Object.is")," for comparing."),l.a.createElement("li",null,"React may still need to render that specific component again before bailing out."))))),l.a.createElement("hr",null),l.a.createElement("div",{className:"uk-grid-medium uk-margin-large-top uk-margin-medium-bottom uk-child-width-expand@s","data-uk-grid":!0},l.a.createElement("div",null,l.a.createElement("h5",{className:"uk-margin-remove success uk-box-shadow-small uk-padding-small uk-light"},"Example - Increasing counter with setTimeout"),l.a.createElement("pre",{className:"uk-margin-remove-top uk-padding-small"},"function Counter() {\n    const [count, setCount] = useState(0);   \n\n    const increaseCounter = () => {\n        //  Increment the value with a delay of 1s\n        setTimeout(() => setCount(count + 1), 1000);       \n    }\n\n    return (\n        <div>\n            <span>Count: { count }</span>\n            <button onClick={ increaseCounter }>\n                Increase Counter\n            </button>\n        </div>\n    );\n}")),l.a.createElement("div",null,l.a.createElement("h5",{className:"uk-margin-remove success uk-box-shadow-small uk-padding-small uk-light"},"Example - Increasing counter with setTimeout"),l.a.createElement("pre",{className:"uk-margin-remove-top uk-padding-small"},"function Counter() {\n    const [count, setCount] = useState(0);   \n\n    const increaseCounter = () => {\n        //  Increment the value with a delay of 1s\n        setTimeout(() => setCount(value => value + 1), 1000);       \n    }\n\n    return (\n        <div>\n            <span>Count: { count }</span>\n            <button onClick={ increaseCounter }>\n                Increase Counter\n            </button>\n        </div>\n    );\n}")),l.a.createElement("div",{className:"uk-width-1-4@s"},l.a.createElement("h5",{className:"uk-margin-remove info uk-box-shadow-small uk-padding-small uk-light"},"Key Points to Remember"),l.a.createElement("div",{className:"uk-background-muted uk-padding-small"},l.a.createElement("ul",{className:"uk-list uk-list-decimal"},l.a.createElement("li",null,"The (value in the e.g.) update function will always operate on the same state (count in the e.g.) within this one second."),l.a.createElement("li",null,"The function offers you the state at the time of executing the function."),l.a.createElement("li",null,"If your state update depends on your previous state, you must pass a function that receives the previous state and returns an updated state, as given below from the previous example: ",l.a.createElement("br",null),l.a.createElement("code",null,"setCount(previousState => ",l.a.createElement("br",null)," previousState + currentState)")))))),l.a.createElement("hr",null),l.a.createElement("div",{className:"uk-grid-large uk-margin-medium-top uk-child-width-1-2@s","data-uk-grid":!0},l.a.createElement("div",null,l.a.createElement("h5",{className:"uk-margin-remove-top uk-margin-medium-bottom cc-title"},"Demo - Create Task List"),l.a.createElement(e,null),l.a.createElement("h5",{className:"uk-margin-remove-bottom uk-margin-medium-top success uk-box-shadow-small uk-padding-small uk-light"},"Example - Create Task List"),l.a.createElement("pre",{className:"uk-margin-remove-top uk-padding-small"},'const ToDoList = () => {\n    const [tasks, setTasks] = useState([]);\n    const [taskName, setTaskName] = useState(\'\');\n\n    const addTask = (event) => {\n        event.preventDefault();\n\n        setTasks([\n            ...tasks, {title: taskName}\n        ]);\n\n        setTaskName(\'\');\n    };\n\n    return (\n        <div className="uk-padding uk-background-secondary uk-light">\n            <form className="uk-form-stacked" onSubmit={ addTask }>\n                <label className="uk-form-label uk-text-uppercase">Add Tasks</label>\n                <div className="uk-form-controls">\n                    <input\n                        name="tasktitle"\n                        type="text"\n                        className="uk-input"\n                        value={ taskName }\n                        onChange={ (event) => setTaskName(event.target.value) }\n                    />\n                </div>\n            </form>\n\n            <ul className="uk-list uk-list-decimal uk-list-divider uk-margin-remove-bottom">\n                {\n                    tasks.map((item, index) => (\n                        <li key={ \'li_\' + index}>{ item.title }</li>\n                    ))\n                }\n            </ul>\n        </div>\n    );\n}')),l.a.createElement("div",null,l.a.createElement("h5",{className:"uk-margin-remove-top uk-margin-medium-bottom cc-title"},"Demo - Enter Message (Wrong Usage)"),l.a.createElement(t,null),l.a.createElement("h5",{className:"uk-margin-remove-bottom uk-margin-medium-top error uk-box-shadow-small uk-padding-small uk-light"},"Example - Enter Message (Wrong Usage)"),l.a.createElement("pre",{className:"uk-margin-remove-top uk-padding-small"},'const MessageBox = () => {\n    const [message, setMessage] = useState({ title: \'\' });\n\n    const enterMessage = (messageText) => {\n        message.title = messageText;\n\n        setMessage(message);\n    }\n\n    const addTask = (event) => {\n        event.preventDefault();\n    }\n\n    return (\n        <div className="uk-padding uk-background-secondary uk-light">\n            <form className="uk-form-stacked" onSubmit={ addTask }>\n                <label className="uk-form-label uk-text-uppercase">Enter Message</label>\n                <div className="uk-form-controls">\n                    <input\n                        name="messagetitle"\n                        type="text"\n                        className="uk-input"\n                        value={ message.title }\n                        onChange={ (event) => enterMessage(event.target.value) }\n                    />\n                </div>\n            </form>\n\n            <p className="uk-margin-remove-bottom">{ message.title }</p>\n        </div>\n    );\n}'),l.a.createElement("p",null,"To make it work, we have to do the following changes"),l.a.createElement("pre",null,"const enterMessage = (messageText) => {\n    const message = { title: messageText };\n    setMessage(message); // Now it works\n}"),l.a.createElement("p",null,"When we update a state variable, unlike ",l.a.createElement("code",null,"this.setState")," in a component class, the function returned by ",l.a.createElement("code",null,"useState")," does not automatically merge update objects, it replaces them.")),l.a.createElement("div",null,l.a.createElement("h5",{className:"uk-margin-remove-bottom error uk-margin-small-top success uk-box-shadow-small uk-padding-small uk-light"},"Example - Enter Message (With object properties)"),l.a.createElement("pre",{className:"uk-margin-remove-top uk-padding-small"},"const MessageBox = () => {\n    const [message, setMessage] = useState({ title: '', entryNo: 15 });\n\n    const enterMessage = (messageText) => {\n        const message = { title: messageText };\n        setMessage(message);    //  'entryNo' property is lost\n    }\n    .....\n}")),l.a.createElement("div",null,l.a.createElement("h5",{className:"uk-margin-remove-bottom uk-margin-small-top success uk-box-shadow-small uk-padding-small uk-light"},"Example - Enter Message (Retaining object properties using prevState)"),l.a.createElement("pre",{className:"uk-margin-remove-top uk-padding-small success"},"const enterMessage = (messageText) => {\n\tsetMessage(prevState => {\n\t\treturn { ...prevState, message: messageText }\n\t});\n}"),l.a.createElement("p",null,l.a.createElement("code",null,"...prevState")," part will get all of the properties of the object and the ",l.a.createElement("code",null,"message: messageText")," part will overwrite the message property.")),l.a.createElement("div",{className:"uk-width-1-1@s"},"There\u2019s nothing wrong with calling useState multiple times, and in most cases, that\u2019s how I store multiple values. Once you get over 4 or 5 useState calls it gets a bit unwieldy, but if you\u2019re fine with it, React is too."),l.a.createElement("div",{className:"uk-width-expand@s"},l.a.createElement("h5",{className:"uk-margin-remove-top uk-margin-medium-bottom cc-title"},"Demo - Login Form (Repetitive state variables)"),l.a.createElement(a,null),l.a.createElement("h5",{className:"uk-margin-remove-bottom success uk-box-shadow-small uk-padding-small uk-light"},"Example - Login form (Repetitive state variables)"),l.a.createElement("div",{className:"uk-background-muted uk-padding-small"},l.a.createElement("pre",null,'function LoginForm() {\n  const [username, setUsername] = useState(\'\');\n  const [password, setPassword] = useState(\'\');\n  \n  const printValues = e => {\n    e.preventDefault();\n    console.log(form.username, form.password);\n  };\n\n  return (\n    <form onSubmit={printValues}>\n      <label>\n        Username:\n        <input\n          value={username}\n          onChange={event => setUsername(event.target.value)}\n          type="text" name="username"\n        />\n      </label>\n      <br />\n      <label>\n        Password:\n        <input\n          value={password}\n          onChange={event => setPassword(event.target.value)}\n          type="password" name="password"\n        />\n      </label>\n      <br />\n      <button>Submit</button>\n    </form>\n  );\n}'))),l.a.createElement("div",{className:"uk-width-3-5@s"},l.a.createElement("h5",{className:"uk-margin-remove-top uk-margin-medium-bottom cc-title"},"Demo - Login Form (Dynamic setting state)"),l.a.createElement(s,null),l.a.createElement("h5",{className:"uk-margin-remove-bottom success uk-box-shadow-small uk-padding-small uk-light"},"Example - Login form (Dynamic setting state)"),l.a.createElement("pre",{className:"uk-margin-remove-top uk-padding-small success"},'function LoginForm() {\n  const [form, setState] = useState({\n    username: \'\',\n    password: \'\'\n  });\n\n  const printValues = e => {\n    e.preventDefault();\n    console.log(form.username, form.password);\n  };\n\n  const updateField = e => {\n    setState({\n      ...form,\n      [e.target.name]: e.target.value\n    });\n  };\n\n  return (\n    <form onSubmit={printValues}>\n      <label>\n        Username:\n        <input value={form.username} name="username" onChange={updateField} />\n      </label>\n      <br />\n      <label>\n        Password:\n        <input value={form.password} name="password" type="password" onChange={updateField}\n        />\n      </label>\n      <br />\n      <button>Submit</button>\n    </form>\n  );\n}'))))};var k=function(){return l.a.createElement("li",null,l.a.createElement("div",{className:"uk-grid-medium uk-child-width-1-2@s uk-margin-medium-top","data-uk-grid":!0},l.a.createElement("div",null,l.a.createElement("pre",{className:"info"},"const [state, setState] = useState(initialState);"))),l.a.createElement("ul",{className:"uk-list uk-list-decimal uk-margin-small-top uk-margin-medium-bottom"},l.a.createElement("li",null,"During the initial render, the returned state ",l.a.createElement("code",null,"(state)")," is the same as the value passed as the first argument ",l.a.createElement("code",null,"(initialState)"),"."),l.a.createElement("li",null,"The ",l.a.createElement("code",null,"setState")," function is used to update the state. It accepts a new state value and enqueues a re-render of the component.")))};var p=function(){return l.a.createElement("li",null,l.a.createElement("div",{className:"uk-grid-medium uk-child-width-1-2@s uk-margin-medium-top","data-uk-grid":!0},l.a.createElement("div",null,l.a.createElement("pre",{className:"info"},"const value = useContext(MyContext);"))),l.a.createElement("ul",{className:"uk-list uk-list-decimal uk-margin-small-top uk-margin-medium-bottom"},l.a.createElement("li",null,"During the initial render, the returned state ",l.a.createElement("code",null,"(state)")," is the same as the value passed as the first argument ",l.a.createElement("code",null,"(initialState)"),"."),l.a.createElement("li",null,"The ",l.a.createElement("code",null,"setState")," function is used to update the state. It accepts a new state value and enqueues a re-render of the component.")))};var g=function(){var e=function(){var e=Object(n.useState)(0),t=Object(c.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(0),u=Object(c.a)(r,2),m=u[0],i=u[1],o=["hey","this","is","cool"],d=o[m],k=Object(n.useMemo)((function(){return function(e){for(var t=0;t<1e9;)return t++,e.length}(d)}),[d]);return l.a.createElement("div",{style:{padding:"15px"}},l.a.createElement("h2",null,"Compute number of letters (slow \ud83d\udc0c)"),l.a.createElement("p",null,'"',d,'" has ',k," letters"),l.a.createElement("button",{onClick:function(){i(m+1===o.length?0:m+1)}},"Next word"),l.a.createElement("h2",null,"Increment a counter (fast \u26a1\ufe0f)"),l.a.createElement("p",null,"Counter: ",a),l.a.createElement("button",{onClick:function(){return s(a+1)}},"Increment"))};return l.a.createElement("li",null,l.a.createElement("div",{className:"uk-grid-medium uk-child-width-1-2@s uk-margin-medium-top","data-uk-grid":!0},l.a.createElement("div",null,l.a.createElement("pre",{className:"info"},"const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);"))),l.a.createElement("ul",{className:"uk-list uk-list-decimal uk-margin-small-top uk-margin-medium-bottom"},l.a.createElement("li",null,"Returns a ",l.a.createElement("code",null,"memoized")," value."),l.a.createElement("li",null,"In computing, ",l.a.createElement("code",null,"memoization")," or ",l.a.createElement("code",null,"memoisation")," is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again. "),l.a.createElement("li",null,"Pass a \u201ccreate\u201d function and an array of dependencies. ",l.a.createElement("code",null,"useMemo")," will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render."),l.a.createElement("li",null,"Remember that the function passed to useMemo runs during rendering. Don\u2019t do anything there that you wouldn\u2019t normally do while rendering. For example, side effects belong in ",l.a.createElement("code",null,"useEffect"),", not ",l.a.createElement("code",null,"useMemo"),"."),l.a.createElement("li",null,"The second argument is an array of dependencies [a, b], when one of the dependencies changes, ",l.a.createElement("code",null,"useMemo()")," recomputes the value, if it doesn't - returns last memoized value."),l.a.createElement("li",null,"If you forget to pass an array of dependencies, the new value computes every time the component renders.")),l.a.createElement(e,null))};var h=function(){return l.a.createElement("li",null,l.a.createElement("div",{className:"uk-grid-medium uk-child-width-1-2@s uk-margin-medium-top","data-uk-grid":!0},l.a.createElement("div",null,l.a.createElement("pre",{className:"info"},"const [state, setState] = useState(initialState);"))),l.a.createElement("ul",{className:"uk-list uk-list-decimal uk-margin-small-top uk-margin-medium-bottom"},l.a.createElement("li",null,"During the initial render, the returned state ",l.a.createElement("code",null,"(state)")," is the same as the value passed as the first argument ",l.a.createElement("code",null,"(initialState)"),"."),l.a.createElement("li",null,"The ",l.a.createElement("code",null,"setState")," function is used to update the state. It accepts a new state value and enqueues a re-render of the component.")))};var E=function(){return l.a.createElement("li",null,l.a.createElement("div",{className:"uk-grid-medium uk-child-width-1-2@s uk-margin-medium-top","data-uk-grid":!0},l.a.createElement("div",null,l.a.createElement("pre",{className:"info"},"const [state, setState] = useState(initialState);"))),l.a.createElement("ul",{className:"uk-list uk-list-decimal uk-margin-small-top uk-margin-medium-bottom"},l.a.createElement("li",null,"During the initial render, the returned state ",l.a.createElement("code",null,"(state)")," is the same as the value passed as the first argument ",l.a.createElement("code",null,"(initialState)"),"."),l.a.createElement("li",null,"The ",l.a.createElement("code",null,"setState")," function is used to update the state. It accepts a new state value and enqueues a re-render of the component.")))};var v=function(){return l.a.createElement("li",null,l.a.createElement("div",{className:"uk-grid-medium uk-child-width-1-2@s uk-margin-medium-top","data-uk-grid":!0},l.a.createElement("div",null,l.a.createElement("pre",{className:"info"},"const [state, setState] = useState(initialState);"))),l.a.createElement("ul",{className:"uk-list uk-list-decimal uk-margin-small-top uk-margin-medium-bottom"},l.a.createElement("li",null,"During the initial render, the returned state ",l.a.createElement("code",null,"(state)")," is the same as the value passed as the first argument ",l.a.createElement("code",null,"(initialState)"),"."),l.a.createElement("li",null,"The ",l.a.createElement("code",null,"setState")," function is used to update the state. It accepts a new state value and enqueues a re-render of the component.")))};var f=function(){return l.a.createElement("main",null,l.a.createElement("div",{className:"uk-container uk-container-expand uk-padding-remove"},l.a.createElement("section",{className:"uk-background-secondary uk-padding uk-light"},l.a.createElement("h2",{className:"uk-padding-remove uk-margin-remove"},"React Hooks")),l.a.createElement("section",{className:"uk-padding"},l.a.createElement("ul",{className:"uk-flex-center cc-tab","data-uk-tab":"connect: #component-tab-center; animation: uk-animation-fade"},l.a.createElement("li",{className:"uk-active"},l.a.createElement("a",{href:"/",onClick:u},"useState")),l.a.createElement("li",null,l.a.createElement("a",{href:"/",onClick:u},"useEffect")),l.a.createElement("li",null,l.a.createElement("a",{href:"/",onClick:u},"useContext")),l.a.createElement("li",null,l.a.createElement("a",{href:"/",onClick:u},"useMemo")),l.a.createElement("li",null,l.a.createElement("a",{href:"/",onClick:u},"useCallback")),l.a.createElement("li",null,l.a.createElement("a",{href:"/",onClick:u},"useReducer")),l.a.createElement("li",null,l.a.createElement("a",{href:"/",onClick:u},"useRef"))),l.a.createElement("ul",{id:"component-tab-center",className:"uk-switcher"},l.a.createElement(d,null),l.a.createElement(k,null),l.a.createElement(p,null),l.a.createElement(g,null),l.a.createElement(h,null),l.a.createElement(E,null),l.a.createElement(v,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.7c8dc2da.chunk.js.map