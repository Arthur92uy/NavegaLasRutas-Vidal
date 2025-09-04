import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { ItemListContainer } from "./components/ItemListContainer";
import {ItemDetail} from './components/ItemDetail'
import { Routes, Route } from "react-router-dom";
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

			<Routes>
				<Route path="/" element={<ItemListContainer />} />
				<Route path="/nosotros" element={<p>Page nosotros</p>} />
				<Route path="/contacto" element={<p>Page contacto</p>} />
				<Route path="/pokemon/:id" element={<ItemDetail/>} />
				
			</Routes>
			<Footer />
		</>
	);
}

export default App;
