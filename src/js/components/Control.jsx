import { useStorageManagement } from "../utils/context";

export default function Control() {
  // Verwendet Funktionen aus dem Kontext, um auf Produkte und relevante Funktionen zuzugreifen
  const { products, deleteProducts, sortProductsByExpiry } =
    useStorageManagement();

  // Funktion zum Löschen aller Produkte
  const deleteAllProducts = () => {
    // Sammelt die IDs aller Produkte
    const allProductsIds = products.map((product) => product.id);
    // Löscht alle Produkte anhand ihrer IDs
    deleteProducts(allProductsIds);
  };

  // Funktion zum Löschen abgelaufener Produkte
  const deleteExpiredProducts = () => {
    // Filtert abgelaufene Produkte
    const expiredProducts = products.filter(
      (product) =>
        new Date(product.expirationDate) < new Date().setHours(0, 0, 0, 0)
    );
    // Sammelt die IDs der abgelaufenen Produkte
    const expiredProductIds = expiredProducts.map((product) => product.id);
    // Löscht alle abgelaufenen Produkte anhand ihrer IDs
    deleteProducts(expiredProductIds);
  };

  return (
    <div className="control">
      <button className="panel delete-all" onClick={deleteAllProducts}>
        ⚠️Clear Fridge⚠️
      </button>

      <button className="panel delete-expired" onClick={deleteExpiredProducts}>
        Remove all expired
      </button>

      <button className="panel sort-products" onClick={sortProductsByExpiry}>
        Sort by expiry
      </button>
    </div>
  );
}
