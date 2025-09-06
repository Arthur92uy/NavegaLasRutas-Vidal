import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";

export function ItemDetailContainer() {
	const resultado = useParams();

	const [carta, setCarta] = useState({});

	useEffect(() => {
		toast.loading("Obteniendo carta...");
		async function obtenerCarta() {
			try {
				const res = await (
					await fetch(
						`https://api.tcgdex.net/v2/es/cards/${resultado.id}`
					)
				).json();
				setCarta(res);
				toast.dismiss();
				toast.success("Carga finalizada con éxito!");
			} catch (error) {
				toast.dismiss();
				toast.error("Ups!");
			}
		}
		obtenerCarta();
	}, []);

	return (
		<>
			<main className="fullwidth">
				<h2 className="main-titulo glass">Detalles de carta:</h2>
				<ItemDetail carta={carta} />
			</main>
		</>
	);
}
