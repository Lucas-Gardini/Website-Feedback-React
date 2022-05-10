import { useState } from "react";
import { BsFillChatDotsFill } from "react-icons/bs";
import FeedbackBox from "./FeedbackBox";
import "../styles/ChatButton.css";

export default function ChatButton() {
	const [mouseOver, setMouseOver] = useState(false);
	const [mouseClicked, setMouseClicked] = useState(false);
	const [absoluteIcon, setAbsoluteIcon] = useState(false);

	const close = () => {
		setMouseClicked(false);
		setMouseOver(false);
		setTimeout(() => {
			setAbsoluteIcon(false);
		}, 350);
	};

	return (
		<div
			className={mouseOver || mouseClicked ? "chat-button" : "chat-button max30"}
			onMouseEnter={() => {
				setMouseOver(true);
				setAbsoluteIcon(true);
			}}
			onMouseLeave={() => {
				setMouseOver(false);
				setTimeout(() => {
					setAbsoluteIcon(false);
				}, 350);
			}}
		>
			<div onMouseDown={() => setMouseClicked(true)}>
				<BsFillChatDotsFill className={absoluteIcon || mouseClicked ? "icon-normal" : "icon-absolute"} />
				<p className={mouseOver || mouseClicked ? "text-active" : "text-inactive"} style={{ marginLeft: "5px" }}>
					<strong>Feedback</strong>
				</p>
			</div>

			{mouseClicked && <FeedbackBox closeFeedbackBox={close} />}
		</div>
	);
}
