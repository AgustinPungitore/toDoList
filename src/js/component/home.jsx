import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [tarea, setTarea] = useState ("")
	const [lista, setLista] = useState ([])


	function addTarea (e) {
		
		
		if (e.key === "Enter"){
			console.log(tarea)	
			setLista([...lista,tarea])
			setTarea("")
		}
	}

	return (
	<>
		<div className="container col-8 text-center">	
		<h1> My To-Do List </h1>
			<div className="input-group mb-3">
				<input type="text" className="form-control" placeholder="Agregar tarea" onChange={(e)=>setTarea(e.target.value)}
			 onKeyDown={addTarea} value={tarea} />
			</div>
		</div>
		<div className="container col-8 text-center">
			<ul>
			{lista.map ((item, index) => {return (<li  key={index}> {item} </li>)})}
			</ul>
		</div>
	</>
	
		);
};

export default Home;
