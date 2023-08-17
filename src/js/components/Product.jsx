import { useStorageManagement } from "../utils/context";

export default function Product({ product }) {
  // Verwendung der "useStorageManagement" Funktion, um Zugriff auf die Löschfunktion zu erhalten
  const { deleteSingleProduct } = useStorageManagement();

  // Erstellt ein Datum-Objekt für das Verfallsdatum des Produkts und das heutige Datum
  const expirationDate = new Date(product.expirationDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Definiert eine Variable, um die CSS-Klasse für das Produkt-Styling festzulegen
  let productClass;

  // Überprüfe, ob das Produkt abgelaufen ist
  if (expirationDate < today) {
    productClass = "expired"; // Setzt die Klasse auf "expired" für abgelaufene Produkte
  } else if (
    expirationDate.getDate() === today.getDate() &&
    expirationDate.getMonth() === today.getMonth() &&
    expirationDate.getFullYear() === today.getFullYear()
  ) {
    productClass = "expiring-tomorrow"; // Setzt die Klasse auf "expiring-tomorrow" für Produkte, die morgen ablaufen
  } else {
    productClass = "not-expired"; // Setzt die Klasse auf "not-expired" für Produkte, die noch nicht abgelaufen sind
  }

  // Definiert die Button-Handler-Funktion, um ein Produkt zu löschen
  const handleDelete = () => {
    deleteSingleProduct(product.id); // Ruft die Löschfunktion auf, um das aktuelle Produkt zu löschen
  };

  return (
    <div className={`product ${productClass}`}>
      <h3>{product.name}</h3>
      <button
        className={productClass === "expired" ? "expired" : "not-expired"}
        onClick={handleDelete}
      >
        {productClass === "expired" ? "Trash" : "Eat"}
      </button>
      <p>
        {product.expirationDate
          ? product.expirationDate.split("-").reverse().join("-")
          : "No expiration date"}{" "}
        {/* Zeige "No expiration date" an, wenn kein Verfallsdatum vorhanden ist */}
      </p>
      <p>{product.volume}</p>
    </div>
  );
}
