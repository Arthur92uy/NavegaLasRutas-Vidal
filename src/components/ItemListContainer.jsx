import { ItemList } from "./ItemList";
import { useState, useEffect } from "react";
import { Card } from "./Card";

export function ItemListContainer() {
	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		async function obtenerPokemones() {
			try {
				const resultado = await (
					await fetch("https://api.tcgdex.net/v2/es/sets/sv03.5/")
				).json();
				setPokemons(resultado.cards);
			} catch (error) {
				console.log(error);
			}
		}
		obtenerPokemones();
	}, []);

	return (
		<main className="fullwidth">
			<h2 className="main-titulo glass">
				Lista de cartas disponibles de la colección:
			</h2>
			<ItemList pokemones={pokemons} />
		</main>
	);
}
