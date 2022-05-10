import {} from "react";
import "../styles/Header.css";

export default function Header() {
	return (
		<div className="header">
			<div className="left-box"></div>
			<div className="center">
				<div className="link"></div>
				<div className="link"></div>
				<div className="link"></div>
			</div>
			<div className="right-box">
				<div className="square"></div>
				<div className="square"></div>
				<div className="circle"></div>
			</div>
		</div>
	);
}
