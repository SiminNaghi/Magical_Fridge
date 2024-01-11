// Trennung der API-Logik: Die API-Funktionen sind an einem Ort organisiert, was den Code übersichtlich und wartbar macht.

// Wiederverwendbarkeit: Diese Funktionen können in verschiedenen Teilen der App wiederverwendet werden, ohne dass man den API-Aufruf wiederholt implementieren musst.

// Flexibilität: Wenn sich die API-Endpunkte ändern oder andere Änderungen an der API durchgeführt werden, müssen nur die Funktionen in api.js aktualisiert werden.//

// Die Basis-URL für die API-Endpunkte
const API_BASE_URL = "http://localhost:3000";

// Funktionen, die mit der API interagieren, um Daten abzurufen, zu löschen oder hinzuzufügen:

// Ruft alle Produkte von der API ab
export async function fetchProducts() {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

//  Löscht ein einzelnes Produkt anhand seiner ID
export async function deleteSingleProduct(productId) {
  try {
    await fetch(`${API_BASE_URL}/products/${productId}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error(`Error deleting product with ID ${productId}:`, error);
    throw error;
  }
}

//  Löscht mehrere Produkte basierend auf einer Liste von IDs
export async function deleteProducts(productIds) {
  try {
    const promises = productIds.map((productId) =>
      fetch(`${API_BASE_URL}/products/${productId}`, {
        method: "DELETE",
      })
    );
    await Promise.all(promises);
  } catch (error) {
    console.error("Error deleting multiple products:", error);
    throw error;
  }
}

// Fügt ein neues Produkt zur API hinzu
export async function addProduct(product) {
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
}
