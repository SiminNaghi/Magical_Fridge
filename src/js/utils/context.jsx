// App-Kontext und Provider für die gesamte App

// Durch den AppProvider können Komponenten auf den App-Kontext zugreifen und von dort Daten und Funktionen beziehen

// Dadurch wird die Pflege und Anpassung der App erleichtert, da der Zustand an einer zentralen Stelle organisiert ist. Dies unterstützt auch das Wachstum der App, da Änderungen und Erweiterungen einfacher umgesetzt werden können.

import React, { createContext, useContext, useState, useEffect } from "react";

// Importieren der Funktionen aus appFunctions.js
import {
  fetchAndUpdate,
  deleteSingleAndUpdate,
  deleteMultipleAndUpdate,
  addNewAndUpdate,
  sortProductsByExpiry,
} from "./appFunctions";

// Erstellen des App-Kontexts
const AppContext = createContext();

// Custom-Hook, um auf den App-Kontext zuzugreifen
export function useStorageManagement() {
  // useContext erlaubt den Zugriff auf den App-Kontext von jeder Komponente
  return useContext(AppContext);
}

// Provider, der den App-Kontext bereitstellt
export function AppProvider({ children }) {
  // Zustand für die Liste der Produkte und Funktion zum Aktualisieren des Zustands
  const [products, setProducts] = useState([]);

  // Helferfunktionen zum Berechnen des Kühlschrank- und Produktvolumens
  const totalFridgeVolume = 50;
  const totalProductsVolume = products
    .reduce((total, product) => total + parseFloat(product.volume), 0)
    .toFixed(2);

  // Initialisierung beim ersten Rendern der App
  useEffect(() => {
    // Die Funktion fetchAndUpdate holt die Produkte von der API und aktualisiert den Zustand
    fetchAndUpdate(setProducts);
  }, []);

  // Wert für den Kontext, der Funktionen und Daten für Kindkomponenten bereitstellt
  const contextValue = {
    products, // Die aktuelle Liste der Produkte
    totalFridgeVolume, // Das Gesamtvolumen des Kühlschranks
    totalProductsVolume, // Das berechnete Gesamtvolumen der Produkte
    deleteSingleProduct: async (productId) => {
      // Funktion zum Löschen eines einzelnen Produkts und Aktualisieren der Produkte
      await deleteSingleAndUpdate(products, setProducts, productId);
    },
    deleteProducts: async (productIds) => {
      // Funktion zum Löschen mehrerer Produkte und Aktualisieren der Produkte
      await deleteMultipleAndUpdate(products, setProducts, productIds);
    },
    addProduct: async (product) => {
      // Funktion zum Hinzufügen eines Produkts und Aktualisieren der Produkte
      await addNewAndUpdate(products, setProducts, product);
    },
    sortProductsByExpiry: () => {
      // Funktion zum Sortieren der Produkte nach Ablaufdatum
      sortProductsByExpiry(products, setProducts);
    },
  };

  // Bereitstellen des App-Kontexts für Kindkomponenten
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
