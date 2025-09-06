export function Card(props) {
	console.log(props.urlCardImg);
	console.log(props.cardName);

	return (
		<article className="card glass">
			<div className="card-name">{props.cardName}</div>
			<div className="card-img-container">
				<img src={props.urlCardImg} className="carta-img " />
			</div>
			
		</article>
	);
}
