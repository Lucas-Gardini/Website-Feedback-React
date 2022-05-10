import { useState } from "react";
import "./App.css";
import ChatButton from "./components/ChatButton";

function App() {
	return (
		<div className="App">
			<div className="top-header">
				<p>Experimente enviar um feedback de um bug na aplicação 🐛</p>
			</div>

			<div className="grid">
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
			</div>

			<ChatButton />
		</div>
	);
}

export default App;
