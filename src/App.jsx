import {Navbar} from "./components/Navbar";
import {ItemListContainer} from "./components/ItemListContainer"
function App() {
	return (
		<>
			<Navbar h1="TCG Safari" item1="Mercado de Cartas" item2="Expansiones" item3="Blog/News" item4="Nosotros" item5="Contacto" usuario="Arthur92UY"/>
			<ItemListContainer nombreBienvenida="Arthur92UY" />
		</>
	);
}

export default App;
