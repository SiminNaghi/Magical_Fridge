import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { useStorageManagement } from "../utils/context";

export default function AddProductForm() {
  // Verwendung der Funktionen aus dem Kontext, um auf die benötigten Funktionen und Daten zuzugreifen
  const { addProduct, totalFridgeVolume, totalProductsVolume } =
    useStorageManagement();

  // Zustand für das neue Produkt, das hinzugefügt werden soll
  const [newProduct, setNewProduct] = useState({
    name: "",
    expirationDate: "",
    volume: "",
  });

  // Funktion zum Verarbeiten des Formulars beim Absenden
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Überprüfung, ob alle erforderlichen Felder ausgefüllt sind und ob die Kapazität des Kühlschranks ausreicht
    if (newProduct.name && newProduct.expirationDate && newProduct.volume) {
      const productWithId = { ...newProduct, id: uuidv4() };
      // Fügt das neue Produkt hinzu, wenn alle Bedingungen erfüllt sind
      await addProduct(productWithId);
      // Setzt den Zustand für das neue Produkt zurück
      setNewProduct({
        name: "",
        expirationDate: "",
        volume: "",
      });
    } else {
      // Zeigt eine Benachrichtigung an, wenn nicht alle Bedingungen erfüllt sind
      alert("Please fill in ALL FIELDS!");
    }
  };

  return (
    <div className="product-form">
      <h3>
        <u>ADD PRODUCT</u>
      </h3>
      <form onSubmit={handleSubmit} className="add-product">
        <label>
          Product Name
          <input
            type="text"
            value={newProduct.name}
            onChange={(event) =>
              setNewProduct({ ...newProduct, name: event.target.value })
            }
          />
        </label>
        <label>
          Product Volume
          <input
            type="number"
            value={newProduct.volume}
            onChange={(event) => {
              const inputValue = event.target.value;
              // Aktualisiert den Zustand nur, wenn der eingegebene Wert positiv ist
              if (inputValue > 0) {
                setNewProduct({ ...newProduct, volume: inputValue });
              }
            }}
          />
        </label>

        <label>
          Expiration Date
          <input
            type="date"
            value={newProduct.expirationDate}
            onChange={(event) =>
              setNewProduct({
                ...newProduct,
                expirationDate: event.target.value,
              })
            }
          />
        </label>

        <button className="button-10" type="submit">
          Confirm
        </button>
      </form>
    </div>
  );
}
