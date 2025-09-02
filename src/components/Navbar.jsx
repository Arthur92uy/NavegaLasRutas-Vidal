import { CartWidget } from "./CartWidget";
import avatar from "../assets/ico-avatar-mewtwo.png";
import { Link } from "react-router-dom";
import icoBulbasaur from "../assets/iconos-nav/ico-bulbasaur.png";
import icoIvysaur from "../assets/iconos-nav/ico-ivysaur.png";
import icoSquirtle from "../assets/iconos-nav/ico-squirtle.png";
import icoWartortle from "../assets/iconos-nav/ico-wartortle.png";
import icoCharmander from "../assets/iconos-nav/ico-charmander.png";
import icoCharmeleon from "../assets/iconos-nav/ico-charmeleon.png";
import icoPichu from "../assets/iconos-nav/ico-pichu.png";
import icoPikachu from "../assets/iconos-nav/ico-pikachu.png";
import icoCaterpie from "../assets/iconos-nav/ico-caterpie.png";
import icoMetapod from "../assets/iconos-nav/ico-metapod.png";

export function Navbar(props) {
	return (
		<header className="fullwidth glass">
			<div className="header__div-h1">
				<h1>{props.h1}</h1>
			</div>
			<nav className="header__div-nav">
				<Link to="/inicio">
					<img src={icoBulbasaur} alt="" />
					<span>{props.item1}</span>
				</Link>
				{/* <a href="">
					<img src={icoCharmander} alt="" />
					<span>{props.item2}</span>
				</a>
				<a href="">
					<img src={icoSquirtle} alt="" />
					<span>{props.item3}</span>
				</a> */}
				<Link to="/nosotros">
					<img src={icoCaterpie} alt="" />
					<span>{props.item4}</span>
				</Link>
				<Link to="/contacto">
					<img src={icoPichu} alt="" />
					<span>{props.item5}</span>
				</Link>
				<div className="header__div-cuenta">
					<Link to="/cuenta">
						<img src={avatar} alt="" />
						<span>{props.usuario}</span>
					</Link>
				</div>
				<div className="header__div-cartWidget">
					<CartWidget />
				</div>
			</nav>
		</header>
	);
}
