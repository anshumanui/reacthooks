import React, { useState } from 'react';


function UseEffectPage() {
	const ToDoList = () => {
        /*
            Starts the code for to do list,
            on enter it shows the list
        */

        const [tasks, setTasks] = useState([]);
        const [taskName, setTaskName] = useState('');

        const addTask = (event) => {
            event.preventDefault();

            setTasks([
                ...tasks, {title: taskName}
            ]);

            setTaskName('');
        };

        return (
            <div>
                <form className="uk-form-stacked" onSubmit={ addTask }>
                    <label className="uk-form-label uk-text-uppercase">Add Tasks</label>
                    <div className="uk-form-controls">
                        <input
                            name="tasktitle"
                            type="text"
                            className="uk-input"
                            value={ taskName }
                            onChange={ (event) => setTaskName(event.target.value) }
                        />
                    </div>
                </form>

                <ul className="uk-list uk-list-divider">
                    {
                        tasks.map((item, index) => (
                            <li key={ 'li_' + index}>{ item.title }</li>
                        ))
                    }
                </ul>
            </div>
        );
    }


    const MessageBox = () => {
        /*
            Starts the code for message,
            but saves in an object,
            only displays the current entered 
            message and it will fail to update
        */

        const [message, setMessage] = useState({ title: '' });

        const enterMessage = (messageText) => {
            message.title = messageText;

            setMessage(message);
        }

        return (
            <div>
                <form className="uk-form-stacked">
                    <label className="uk-form-label uk-text-uppercase">Enter Message</label>
                    <div className="uk-form-controls">
                        <input
                            name="messagetitle"
                            type="text"
                            className="uk-input"
                            value={ message.title }
                            onChange={ (event) => enterMessage(event.target.value) }
                        />
                    </div>
                </form>

                <p>{ message.title }</p>
            </div>
        );
    }


    const LoginForm = () => {
		const [username, setUsername] = useState('');
		const [password, setPassword] = useState('');

		return (
			<form className="uk-form-stacked">
				<label className="uk-form-label uk-text-uppercase">Username</label>
				<div className="uk-form-controls">
				    <input
				    	type="text" 
				      	name="username"
				      	className="uk-input uk-form-width-large"
				      	value={ username }
				      	onChange={ (event) => setUsername(event.target.value) }
				    />
				</div>

				<label className="uk-form-label uk-text-uppercase uk-margin-small-top">Password</label>
				<div className="uk-form-controls">
				    <input
				    	type="password" 
				      	name="password"
				      	className="uk-input uk-form-width-large"
				      	value={ password }
				      	onChange={ (event) => setPassword(event.target.value) }
				    />
				</div>

			  	<p className="uk-margin-remove-bottom">Username: { username ? username : 'Nothing entered yet!' } | Password: { password ? password : 'Nothing entered yet!' }</p>
			</form>
		);

    }


    const LoginFormDynamic = () => {
		const [form, setForm] = useState({
		    username: '',
		    password: ''
	  	});

		const updateForm = (event) => {
			event.preventDefault();

			setForm({
		      	...form,
		      	[event.target.name]: event.target.value
		    });
		};

		return (
			<form className="uk-form-stacked">
				<label className="uk-form-label uk-text-uppercase">Username</label>
				<div className="uk-form-controls">
				    <input
				    	type="text" 
				      	name="usernameDynamic"
				      	className="uk-input uk-form-width-large"
				      	value={ form.username }
				      	onChange={ updateForm }
				    />
				</div>

				<label className="uk-form-label uk-text-uppercase uk-margin-small-top">Password</label>
				<div className="uk-form-controls">
				    <input
				    	type="password" 
				      	name="passwordDynamic"
				      	className="uk-input uk-form-width-large"
				      	value={ form.password }
				      	onChange={ updateForm }
				    />
				</div>

			  	<p className="uk-margin-remove-bottom">Username: { form.username ? form.username : 'Nothing entered yet!' } | Password: { form.password ? form.password : 'Nothing entered yet!' }</p>
			</form>
		);

    }


    return (
		<li>
            <div className="uk-grid-medium uk-child-width-1-2@s uk-margin-medium-top" data-uk-grid>
                <div>
                    <pre className="info">
                    {`const [state, setState] = useState(initialState);`}
                    </pre>
                </div>
            </div>

            <ul className="uk-list uk-list-decimal uk-margin-small-top uk-margin-medium-bottom">
                <li>During the initial render, the returned state <code>(state)</code> is the same as the value passed as the first argument <code>(initialState)</code>.</li>
                <li>The <code>setState</code> function is used to update the state. It accepts a new state value and enqueues a re-render of the component.</li>
            </ul>

            <div className="uk-grid-medium uk-margin-large-top uk-margin-large-bottom uk-child-width-expand@s" data-uk-grid>
                <div>
                    <h5 className="uk-margin-remove success uk-box-shadow-small uk-padding-small uk-light">Example - Increasing a counter</h5>
                    <pre className="uk-margin-remove-top uk-padding-small">
{`function Counter() {
    //  0 is the initial value or count
    const [count, setCount] = useState(0);   

    const increaseCounter = () => {
        //  setCount increments the value 
        //  of count on every click
        setCount(count + 1);       
    }

    return (
        <div>
            <span>Count: { count }</span>
            <button onClick={ increaseCounter }>
                Increase Counter
            </button>
        </div>
    );
}`}
                    </pre>
                </div>

                <div>
                    <h5 className="uk-margin-remove success uk-box-shadow-small uk-padding-small uk-light">Example - Same (Shortcut)</h5>
                    <pre className="uk-margin-remove-top uk-padding-small">
{`function Counter() {
    //  0 is the initial value or count
    const [count, setCount] = useState(0);

    //  The same piece of code can be 
    //  rewritten like this

    return (
        <div>
            <span>Count: { count }</span>
            <button 
                onClick={ () => setCount(count + 1) }>
                Increase Counter
            </button>
        </div>
    );
}`}
                    </pre>
                </div>

                <div className="uk-width-1-4@s">
                    <h5 className="uk-margin-remove info uk-box-shadow-small uk-padding-small uk-light">Key Points to Remember</h5>
                    <div className="uk-background-muted uk-padding-small">
                        <ul className="uk-list uk-list-decimal">
                            <li><code>useState</code> returns array because compared to an object, an array is more flexible and easy to use.</li>
                            <li>If you update a State Hook to the same value as the current state, React will bail out without rendering the children or firing effects.</li>
                            <li>React uses <code>Object.is</code> for comparing.</li>
                            <li>React may still need to render that specific component again before bailing out.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr />

            <div className="uk-grid-medium uk-margin-large-top uk-margin-medium-bottom uk-child-width-expand@s" data-uk-grid>
            	<div>
                    <h5 className="uk-margin-remove success uk-box-shadow-small uk-padding-small uk-light">Example - Increasing counter with setTimeout</h5>
                    <pre className="uk-margin-remove-top uk-padding-small">
{`function Counter() {
    const [count, setCount] = useState(0);   

    const increaseCounter = () => {
        //  Increment the value with a delay of 1s
        setTimeout(() => setCount(count + 1), 1000);       
    }

    return (
        <div>
            <span>Count: { count }</span>
            <button onClick={ increaseCounter }>
                Increase Counter
            </button>
        </div>
    );
}`}
                    </pre>
                </div>

                <div>
                    <h5 className="uk-margin-remove success uk-box-shadow-small uk-padding-small uk-light">Example - Increasing counter with setTimeout</h5>
                    <pre className="uk-margin-remove-top uk-padding-small">
{`function Counter() {
    const [count, setCount] = useState(0);   

    const increaseCounter = () => {
        //  Increment the value with a delay of 1s
        setTimeout(() => setCount(value => value + 1), 1000);       
    }

    return (
        <div>
            <span>Count: { count }</span>
            <button onClick={ increaseCounter }>
                Increase Counter
            </button>
        </div>
    );
}`}
                    </pre>
                </div>

                <div className="uk-width-1-4@s">
                    <h5 className="uk-margin-remove info uk-box-shadow-small uk-padding-small uk-light">Key Points to Remember</h5>
                    <div className="uk-background-muted uk-padding-small">
                        <ul className="uk-list uk-list-decimal">
                            <li>The (value in the e.g.) update function will always operate on the same state (count in the e.g.) within this one second.</li>
                            <li>The function offers you the state at the time of executing the function.</li>
                            <li>If your state update depends on your previous state, you must pass a function that receives the previous state and returns an updated state, as given below from the previous example: <br />
                				<code>setCount(previousState => <br /> previousState + currentState)</code>
                			</li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr />

            <div className="uk-grid-large uk-margin-medium-top uk-child-width-1-2@s" data-uk-grid>
                <div>
                    <h5 className="uk-margin-remove-top uk-margin-medium-bottom">Demo - Create Task List</h5>
                    <ToDoList />

                    <h5 className="uk-margin-remove-bottom uk-margin-medium-top success uk-box-shadow-small uk-padding-small uk-light">Example - Create Task List</h5>
                    <pre className="uk-margin-remove-top uk-padding-small">
{`const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState('');

    const addTask = (event) => {
        event.preventDefault();
        
        setTasks([
            ...tasks, {title: taskName}
        ]);

        setTaskName('');
    };

    return (
        <div>
            <form className="uk-form-stacked" onSubmit={ addTask }>
                <label className="uk-form-label">Add Tasks</label>
                <div className="uk-form-controls">
                    <input
                        name="tasktitle"
                        type="text"
                        value={ taskName }
                        onChange={ (event) => setTaskName(event.target.value) }
                    />
                </div>
            </form>

            <ul className="uk-list uk-list-divider">
                {
                    tasks.map((item, index) => (
                        <li key={ 'li_' + index}>{ item.title }</li>
                    ))
                }
            </ul>
        </div>
    );
}`}
                    </pre>
                </div>

                <div>
                    <h5 className="uk-margin-remove-top uk-margin-medium-bottom">Demo - Enter Message (Wrong Usage)</h5>
                    <MessageBox />

                    <h5 className="uk-margin-remove-bottom uk-margin-medium-top error uk-box-shadow-small uk-padding-small uk-light">Example - Enter Message (Wrong Usage)</h5>
                    <pre className="uk-margin-remove-top uk-padding-small">
{`const MessageBox = () => {
    const [message, setMessage] = useState({ title: '' });

    const enterMessage = (messageText) => {
        message.title = messageText;

        setMessage(message);
    }

    return (
        <div>
            <form className="uk-form-stacked">
                <label className="uk-form-label">Enter Message</label>
                <div className="uk-form-controls">
                    <input
                        name="messagetitle"
                        type="text"
                        value={ message.title }
                        onChange={ (event) => enterMessage(event.target.value) }
                    />
                </div>
            </form>

            <p>{ message.title }</p>
        </div>
    );
}`}
                    </pre>

                    <p>To make it work, we have to do the following changes</p>

                    <pre>
{`const enterMessage = (messageText) => {
    const message = { title: messageText };
    setMessage(message); // Now it works
}`}
                    </pre>

                    <p>When we update a state variable, unlike <code>this.setState</code> in a component class, the function returned by <code>useState</code> does not automatically merge update objects, it replaces them.</p>
                </div>

                <div>
                    <h5 className="uk-margin-remove-bottom error uk-margin-small-top success uk-box-shadow-small uk-padding-small uk-light">Example - Enter Message (With object properties)</h5>
                    <pre className="uk-margin-remove-top uk-padding-small">
{`const MessageBox = () => {
    const [message, setMessage] = useState({ title: '', entryNo: 15 });

    const enterMessage = (messageText) => {
        const message = { title: messageText };
        setMessage(message);    //  'entryNo' property is lost
    }
    .....
}`}
                    </pre>
                </div>

                <div>
                    <h5 className="uk-margin-remove-bottom uk-margin-small-top success uk-box-shadow-small uk-padding-small uk-light">Example - Enter Message (Retaining object properties using prevState)</h5>
                    <pre className="uk-margin-remove-top uk-padding-small success">
{`const enterMessage = (messageText) => {
	setMessage(prevState => {
		return { ...prevState, message: messageText }
	});
}`}
                    </pre>

                    <p><code>...prevState</code> part will get all of the properties of the object and the <code>message: messageText</code> part will overwrite the message property.</p>
                </div>

                <div className="uk-width-1-1@s">
                	There’s nothing wrong with calling useState multiple times, and in most cases, that’s how I store multiple values. Once you get over 4 or 5 useState calls it gets a bit unwieldy, but if you’re fine with it, React is too.
                </div>


                <div className="uk-width-1-1@s">
                	<div className="uk-grid-medium uk-grid-divider uk-child-width-1-2@s uk-padding uk-background-secondary" data-uk-grid>
                		<div>
                			<LoginForm />
                		</div>

                		<div>
                			<LoginFormDynamic />
                		</div>
                	</div>
                </div>

                <div className="uk-width-expand@s">             	
                	<h5 className="uk-margin-remove success uk-box-shadow-small uk-padding-small uk-light">Example - Login form (Repetitive state variables)</h5>
                    <div className="uk-background-muted uk-padding-small">
                		<pre>
{`function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const printValues = e => {
    e.preventDefault();
    console.log(form.username, form.password);
  };

  return (
    <form onSubmit={printValues}>
      <label>
        Username:
        <input
          value={username}
          onChange={event => setUsername(event.target.value)}
          type="text" name="username"
        />
      </label>
      <br />
      <label>
        Password:
        <input
          value={password}
          onChange={event => setPassword(event.target.value)}
          type="password" name="password"
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}`}
                		</pre>
                	</div>
                </div>

                <div className="uk-width-3-5@s">               	
                    <h5 className="uk-margin-remove-bottom success uk-box-shadow-small uk-padding-small uk-light">Example - Login form (Dynamic setting state)</h5>
                    <pre className="uk-margin-remove-top uk-padding-small success">
{`function LoginForm() {
  const [form, setState] = useState({
    username: '',
    password: ''
  });

  const printValues = e => {
    e.preventDefault();
    console.log(form.username, form.password);
  };

  const updateField = e => {
    setState({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={printValues}>
      <label>
        Username:
        <input value={form.username} name="username" onChange={updateField} />
      </label>
      <br />
      <label>
        Password:
        <input value={form.password} name="password" type="password" onChange={updateField}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}`}
                    </pre>
                </div>
            </div>
        </li>
    );
}

export default UseEffectPage;