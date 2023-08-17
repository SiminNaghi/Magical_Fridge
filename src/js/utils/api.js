// Trennung der API-Logik: Die API-Funktionen sind an einem Ort organisiert, was den Code übersichtlich und wartbar macht.

// Wiederverwendbarkeit: Diese Funktionen können in verschiedenen Teilen der App wiederverwendet werden, ohne dass man den API-Aufruf wiederholt implementieren musst.

// Flexibilität: Wenn sich die API-Endpunkte ändern oder andere Änderungen an der API durchgeführt werden, müssen nur die Funktionen in api.js aktualisiert werden.//

// Die Basis-URL für die API-Endpunkte
const API_BASE_URL = "http://localhost:3000";

// Funktionen, die mit der API interagieren, um Daten abzurufen, zu löschen oder hinzuzufügen:

// Ruft alle Produkte von der API ab
export async function fetchProducts() {
  const response = await fetch(`${API_BASE_URL}/products`);
  const data = await response.json();
  return data;
}

//  Löscht ein einzelnes Produkt anhand seiner ID
export async function deleteSingleProduct(productId) {
  await fetch(`${API_BASE_URL}/products/${productId}`, {
    method: "DELETE",
  });
}

//  Löscht mehrere Produkte basierend auf einer Liste von IDs
export async function deleteProducts(productIds) {
  // Erstellt eine Liste von Versprechensobjekten für jedes zu löschende Produkt
  const promises = productIds.map((productId) =>
    fetch(`${API_BASE_URL}/products/${productId}`, {
      method: "DELETE",
    })
  );
  // Führt alle Versprechen parallel aus und wartet auf Abschluss
  await Promise.all(promises);
}

// Fügt ein neues Produkt zur API hinzu
export async function addProduct(product) {
  const response = await fetch(`${API_BASE_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  const data = await response.json();
  return data;
}
