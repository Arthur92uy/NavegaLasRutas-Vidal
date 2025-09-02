import { useState } from "react";
import Button from "./Button";
import { X } from "lucide-react";

export default function PopUp() {
	//Estado
	const [isShow, setIsShow] = useState("div-PopUp glass popup-open");

	//Acciones
	const handleClose = () => {
		setIsShow("div-PopUp glass");
	};

	//vista
	return (
		<div className={isShow}>
			<div className="div__popUp-X">
				<X onClick={handleClose} />
			</div>
			<span>Mensaje de Prueba</span>
			<div className="div__popUp-Button">
				<Button type="button" label="Aceptar" onClick={handleClose} />
			</div>
		</div>
	);
}
