import { useEffect, useRef, useState } from "react";
import {
	HiHeart,
	FcBiohazard,
	FcIdea,
	FcOnlineSupport,
	AiOutlineClose,
	AiOutlineArrowLeft,
	AiOutlineCamera,
	AiOutlineLoading3Quarters,
	FiTrash,
	AiFillCheckSquare,
} from "react-icons/all";
import "../styles/FeedbackBox.css";

interface IProps {
	closeFeedbackBox: () => void;
}

export default function FeedbackBox({ closeFeedbackBox }: IProps) {
	const options = [
		{ title: "Bug", icon: FcBiohazard },
		{ title: "Ideia", icon: FcIdea },
		{ title: "Outro", icon: FcOnlineSupport },
	];

	const [selected, setSelected] = useState({ title: null, text: "" } as any);
	const [loading, setLoading] = useState(false);
	const [sended, setSended] = useState(false);

	const inputFile = useRef(null as any);

	return (
		<div className="feedback-box">
			{selected.title && (
				<AiOutlineArrowLeft
					className="back"
					onMouseDown={() => {
						setSelected({ title: null, text: "" });
					}}
				/>
			)}
			<AiOutlineClose
				className="close"
				onMouseDown={() => {
					closeFeedbackBox();
				}}
			/>
			{!selected.title ? (
				<h1>Deixe seu feedback</h1>
			) : !sended ? (
				<h1>
					{<selected.icon />} {selected.title}
				</h1>
			) : (
				<h1 style={{ fontSize: 18, marginTop: "auto" }}>{<AiFillCheckSquare style={{ color: "#77b255" }} />} Agradecemos o feedback!</h1>
			)}
			{!selected.title ? (
				<div className="options">
					{!selected.title &&
						options.map((option, index) => (
							<div
								className="option"
								key={index}
								onMouseDown={() => {
									setSelected({ title: option.title, icon: option.icon, text: "" });
								}}
							>
								<option.icon />
								<p>{option.title}</p>
							</div>
						))}
				</div>
			) : (
				<div className="selected">
					{!sended && (
						<textarea
							onChange={(event) => {
								setSelected({ ...selected, text: event.target.value });
							}}
						></textarea>
					)}
					{!sended ? (
						<div style={{ display: "flex", width: "100%" }}>
							<button
								onMouseDown={() => {
									if (selected.image) {
										setLoading(false);
										setSelected({ ...selected, image: null });
									} else {
										inputFile.current.click();
										setLoading(true);
									}
								}}
								className="image-btn"
								style={{
									background: `url(${selected.image})`,
									backgroundSize: "cover",
									backgroundPosition: "center",
									backgroundRepeat: "no-repeat",
								}}
							>
								{loading ? <AiOutlineLoading3Quarters className="loading" /> : selected.image ? <FiTrash /> : <AiOutlineCamera />}
							</button>
							<button
								disabled={selected.text.length === 0}
								className={selected.text.length > 0 ? "send-btn" : "send-btn disabled"}
								onMouseDown={() => {
									setLoading(true);
									setTimeout(() => {
										setSended(true);
									}, 1000);
								}}
							>
								{loading ? <AiOutlineLoading3Quarters className="loading" /> : "Enviar Feedback"}
							</button>
						</div>
					) : (
						<button
							className="send-another-btn"
							onMouseDown={() => {
								setLoading(false);
								setSended(false);
								setSelected({ title: null, text: "" });
							}}
						>
							Quero enviar outro
						</button>
					)}
				</div>
			)}
			<h6 style={{ marginTop: "auto" }}>
				Feito com <HiHeart /> por Rocketseat
			</h6>

			<input
				onChange={() => {
					console.log("changes");
					const [file] = inputFile.current.files;
					if (file) {
						console.log(file);
						console.log(`url(${URL.createObjectURL(file)}) !important`);
						setSelected({ ...selected, image: URL.createObjectURL(file) });
						setLoading(false);
					}
				}}
				type="file"
				accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
				id="file"
				ref={inputFile}
				style={{ display: "none" }}
			/>
		</div>
	);
}
