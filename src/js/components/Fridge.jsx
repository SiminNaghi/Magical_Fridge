import { useStorageManagement } from "../utils/context";

import Product from "./Product";

export default function Fridge() {
  // Verwendung der "useStorageManagement" Funktion, um auf die Produktliste im Kühlschrank zuzugreifen
  const { products } = useStorageManagement();

  return (
    <div className="fridge">
      <div className="products">
        {/* Durchlaufe die Liste der Produkte und erstelle für jedes Produkt eine "Product"-Komponente */}
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
