// Trennung der Verantwortlichkeiten: Die App-Funktionen sind getrennt von der API und von den Komponenten, was den Code besser lesbar und wartbar macht.

// Funktionen, die spezifische Aufgaben in Bezug auf Datenmanipulation und Aktualisierung der Benutzeroberfläche ausführen:

import { deleteSingleProduct, deleteProducts, addProduct } from "./api";
import { fetchProducts } from "./api";

// Löscht ein einzelnes Produkt mithilfe der API und aktualisiert dann die Produktliste in der Benutzeroberfläche.
export async function deleteSingleAndUpdate(setProducts, productId) {
  // Löscht das Produkt mit der angegebenen ID aus der API
  await deleteSingleProduct(productId);
  // Ruft die aktualisierte Liste der Produkte von der API ab
  const updatedProducts = await fetchProducts();
  // Aktualisiert den Zustand der Produkte in der App mit den neuen Daten
  setProducts(updatedProducts);
}

// Löscht mehrere Produkte anhand ihrer IDs und aktualisiert anschließend die Produktliste in der Benutzeroberfläche.
export async function deleteMultipleAndUpdate(setProducts, productIds) {
  // Löscht die Produkte mit den angegebenen IDs aus der API
  await deleteProducts(productIds);
  // Ruft die aktualisierte Liste der Produkte von der API ab
  const updatedProducts = await fetchProducts();
  // Aktualisiert den Zustand der Produkte in der App mit den neuen Daten
  setProducts(updatedProducts);
}

// Fügt ein neues Produkt hinzu mithilfe der API und aktualisiert dann die Produktliste in der Benutzeroberfläche.
export async function addNewAndUpdate(setProducts, newProduct) {
  // Fügt das neue Produkt über die API hinzu
  const addedProduct = await addProduct(newProduct);
  // Aktualisiert den Zustand der Produkte in der App, indem das neue Produkt hinzugefügt wird
  setProducts((prevProducts) => [...prevProducts, addedProduct]);
}

// Ruft die Liste der Produkte von der API ab und aktualisiert dann die Produktliste in der Benutzeroberfläche.
export async function fetchAndUpdate(setProducts) {
  // Ruft die Liste der Produkte von der API ab
  const updatedProducts = await fetchProducts();
  // Aktualisiert den Zustand der Produkte in der App mit den neuen Daten
  setProducts(updatedProducts);
}

// Sortiert die Produkte nach ihrem Ablaufdatum und aktualisiert die Produktliste entsprechend.
export function sortProductsByExpiry(products, setProducts) {
  // Erstellt eine sortierte Kopie der Produktliste basierend auf dem Ablaufdatum
  const sortedProducts = [...products].sort((a, b) => {
    const dateA = new Date(a.expirationDate).getTime();
    const dateB = new Date(b.expirationDate).getTime();
    return dateA - dateB;
  });
  // Aktualisiert den Zustand der Produkte in der App mit der sortierten Liste
  setProducts(sortedProducts);
}
