import Button from "./Button";
import { X } from "lucide-react";
export default function PopUp() {
	const handleClick = () => {
		console.log("Click");
	};

	return (
		<>
			<div className="div-PopUp glass">
				<div className="div__popUp-X">
					<X />
				</div>
				<span>Mensaje de Prueba</span>
				<div className="div__popUp-Button">
					<Button
						type="button"
						label="Aceptar"
						onClick={handleClick}
					/>
				</div>
			</div>
		</>
	);
}
