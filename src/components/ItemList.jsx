import { Card } from "./Card";
import { Link } from "react-router-dom";
export function ItemList(props) {
	return (
		<section className="cards-container glass fullwidth">
			{props.pokemones.map((pokemon) => {
				return (
					<Link to={`/pokemon/${pokemon.id}`} key={pokemon.id}>
						<Card
							cardName={pokemon.name}
							urlCardImg={pokemon.image + "/high.webp"}
						/>
					</Link>
				);
			})}
		</section>
	);
}
