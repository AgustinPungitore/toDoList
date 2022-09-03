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

	
	const eliminarTarea = (index) => {
		console.log(index)
		const listaNueva = lista.filter((item, i) => {
			if (index !== i) {
				return item
			}
		} )
		setLista(listaNueva)

	}
	return (
	<>
		<div className="container col-8 text-center">	
		<h1> My To-Do List </h1>
			<div className="input-group mb-3">
				<input type="text" className="form-control" placeholder="Agregar tarea" onChange={(e)=>setTarea(e.target.value)}
			 onKeyDown={addTarea} value={tarea} /> 
			{/* value para setear un valor inicial */}
			</div>
		</div>
		<div className="container col-8 text-center">
			<ul>
			{lista.map ((item, index) => {return (<li  key={index}> {item} <button onClick={()=>eliminarTarea(index)}>🗑️</button></li>)})} 
			</ul>
		</div>
	</>
	
		);
};

export default Home;
