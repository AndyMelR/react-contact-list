import React, { createContext, useState, useContext } from "react";


const userContext = createContext( [] );

const Username = ({username}) => {
	return (
		<>
			<p> {username}</p>
		</>
	)
}

const List = () => {

	const users = useContext(userContext)

	return (
		<>
		  {users.map(user => (<Username username={user.username}/>))}
		</>
	)
}

function App () {
 const [state, setState] = useState([]);

 const getData = async () => {
	const httpResponse = await fetch('https://jsonplaceholder.typicode.com/users', {
		method: 'GET'
	})

	const users = await httpResponse.json();
	setState(users);

 };

 return (
	<>
	<userContext.Provider value = {state}>
	 <button onClick = {() => getData()}>Generate</button>
	 <List />
	 </userContext.Provider>
	</>
 );
}

export default App














