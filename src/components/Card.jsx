export function Card(props) {
	return (
		<div className="card glass">
			<div className="card-name">{props.cardName}</div>
			<div className="card-img-container">
				<img src={props.urlCardImg} className="carta-img" />
			</div>
		</div>
	);
}
