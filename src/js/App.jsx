// Import der zugehoerigen CSS-Datei
import "../styles/App.scss";

// Import eigener Komponenten
import { AppProvider } from "./utils/context";
import Fridge from "./components/Fridge";
import Display from "./components/Display";
import Control from "./components/Control";
import AddProductForm from "./components/AddProductForm";

// Hauptkomponente
export default function App() {
  return (
    <AppProvider>
      {/* Wickelt die gesamte App in den App-Provider ein */}
      <div className="app">
        <h1>Magical Fridge</h1>
        <div className="columns">
          <Display />
          <Fridge />
          <Control />
        </div>

        <div>
          <AddProductForm />
        </div>
      </div>
    </AppProvider>
  );
}
