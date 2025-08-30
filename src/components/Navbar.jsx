import { CartWidget } from "./CartWidget";
import avatar from "../assets/ico-avatar-mewtwo.png";
import pokebola from "../assets/ico-pokebola.png";
export function Navbar(props) {
	return (
		<>
			<header className="fullwidth glass">
				<div className="header__div-h1 fullwidth">
					<h1>{props.h1}</h1>
				</div>
				<nav className="header__div-nav fullwidth">
					<a href="">
						{props.item1}
					</a>
					<a href="">
						{props.item2}
					</a>
					<a href="">
						{props.item3}
					</a>
					<a href="">
						{props.item4}
					</a>
					<a href="">
						{props.item5}
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
		</>
	);
}
