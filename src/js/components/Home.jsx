import React, { useState } from "react";
//include images into your bundle

//create your first component
const Home = () => {
	const [color, setColor] = useState("");

	return (
		<div className="text-center d-flex">
			<img
				className="fondoSemaforo rounded-5 position-absolute top-50 start-50 translate-middle"
				src="https://tablered.mx.arauco.com/wp-content/uploads/2020/04/Negro.jpg"
			/>
			<img
				className="posteSemaforo position-absolute start-50 translate-middle"
				src="https://tablered.mx.arauco.com/wp-content/uploads/2020/04/Negro.jpg"
			/>
			<button
				className="rounded-circle rojo position-absolute start-50 translate-middle p-3"
				onClick={() => {
					setColor("brilloRojo")
					;
				}}
				id={ color=="brilloRojo"?color:""}
			></button>

			<button className="rounded-circle amarillo position-absolute top-50 start-50 translate-middle p-3" onClick={() => {
					setColor("brilloAmarillo")
					; 
				}}
				id={ color=="brilloAmarillo"?color:""}></button>
			<button className="rounded-circle verde position-absolute start-50 translate-middle p-3"  onClick={() => {
					setColor("brilloVerde")
					; 
				}}
				id={ color=="brilloVerde"?color:""}></button>
		</div>
	);
};

export default Home;