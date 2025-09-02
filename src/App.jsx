import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { ItemListContainer } from "./components/ItemListContainer";
import PopUp from "./components/PopUp";
function App() {
	return (
		<>
			<Navbar
				h1="TCG Safari"
				item1="Inicio"
				// item2="Expansiones" Proximamente
				// item3="Blog/News" Proximamente
				item4="Nosotros"
				item5="Contacto"
				usuario="Arthur92UY"
			/>
			<ItemListContainer />
			<Footer />
		</>
	);
}

export default App;
