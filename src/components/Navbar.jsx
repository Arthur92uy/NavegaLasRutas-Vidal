import { CartWidget } from "./CartWidget";
import avatar from "../assets/ico-avatar-mewtwo.png";
import pokebola from "../assets/ico-pokebola.png";

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
				<a href="">
					<img src={icoBulbasaur} alt="" />
					<span>{props.item1}</span>
				</a>
				<a href="">
					<img src={icoCharmander} alt="" />
					<span>{props.item2}</span>
				</a>
				<a href="">
					<img src={icoSquirtle} alt="" />
					<span>{props.item3}</span>
				</a>
				<a href="">
					<img src={icoCaterpie} alt="" />
					<span>{props.item4}</span>
				</a>
				<a href="">
					<img src={icoPichu} alt="" />
					<span>{props.item5}</span>
				</a>
			</nav>
			<div className="header__div-cuenta">
				<img src={avatar} alt="" />
				<span>{props.usuario}</span>
				<img src={pokebola} alt="" />
			</div>
			<div className="header__div-cartWidget">
				<CartWidget />
			</div>
		</header>
	);
}
