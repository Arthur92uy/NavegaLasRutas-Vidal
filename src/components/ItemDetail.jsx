import { Card } from "./Card";
import metalImg from "../assets/iconos-energias/acero.png";
import aguaImg from "../assets/iconos-energias/agua.png";
import dragonImg from "../assets/iconos-energias/dragon.png";
import fuegoImg from "../assets/iconos-energias/fuego.png";
import hadaImg from "../assets/iconos-energias/hada.png";
import incoloraImg from "../assets/iconos-energias/incolora.png";
import luchaImg from "../assets/iconos-energias/lucha.png";
import oscuridadImg from "../assets/iconos-energias/oscuridad.png";
import plantaImg from "../assets/iconos-energias/planta.png";
import psiquicoImg from "../assets/iconos-energias/psiquico.png";
import rayoImg from "../assets/iconos-energias/rayo.png";

export function ItemDetail(props) {
	const tiposDeEnergias = {
		Acero: <img src={metalImg} alt="Acero" />,
		Agua: <img src={aguaImg} alt="Agua" />,
		Dragón: <img src={dragonImg} alt="Dragón" />,
		Guego: <img src={fuegoImg} alt="Fuego" />,
		Hada: <img src={hadaImg} alt="Hada" />,
		Incolora: <img src={incoloraImg} alt="Incolora" />,
		Lucha: <img src={luchaImg} alt="Lucha" />,
		Oscuridad: <img src={oscuridadImg} alt="Oscuridad" />,
		Planta: <img src={plantaImg} alt="Planta" />,
		Psíquico: <img src={psiquicoImg} alt="Psíquico" />,
		Rayo: <img src={rayoImg} alt="Rayo" />,
	};

	return (
		<section className="card-container glass fullwidth">
			<Card
				cardName={props.carta.name}
				urlCardImg={props.carta.image + "/high.webp"}
			/>
			<section className="card-container-info">
				<p>
					Número dentro del set: {props.carta.localId}/
					{props.carta.set?.cardCount?.official ?? "?"}
				</p>
				<p>
					Nombre de expansion: {props.carta.set?.name ?? "?"}
					<img
						src={
							props.carta.set?.symbol
								? props.carta.set.symbol + ".webp"
								: "?"
						}
					/>
				</p>
				<p>tipo de carta: {props.carta.category ?? "?"}</p>
				<p>Rareza: {props.carta.rarity ?? "?"}</p>
				<p>
					Elemento:{" "}
					{props.carta.types == "Guego"
						? "Fuego"
						: props.carta.types ?? "?"}
					{tiposDeEnergias[props.carta.types?.[0]] ?? <span>❓</span>}
				</p>

				<p>Etapa: {props.carta.stage ?? "?"}</p>
				<p>PS: {props.carta.hp ?? "?"}</p>
				
			</section>
		</section>
	);
}
