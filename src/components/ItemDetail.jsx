import { useParams} from "react-router-dom";
import { useState, useEffect } from "react";

export function ItemDetail() {
	const resultado = useParams();

	const [carta, setCarta] = useState([]);
	console.log(carta);

	useEffect(() => {
		async function obtenerPokemones() {
			try {
				const res = await (
					await fetch(
						`https://api.tcgdex.net/v2/en/cards/${resultado.id}`
					)
				).json();
				setCarta(res.card);
				console.log(`https://api.tcgdex.net/v2/en/cards/${resultado.id}`)
			} catch (error) {
				console.log(error);
			}
		}
		obtenerPokemones();
	}, []);

	return (
		<>
			<p>{carta.name}</p>
		</>
	);
}
