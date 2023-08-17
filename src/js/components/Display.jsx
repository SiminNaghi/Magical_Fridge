import { useStorageManagement } from "../utils/context";

export default function Display() {
  // Verwendung der Funktionen aus dem Kontext, um auf Produkte und relevante Daten zuzugreifen
  const { products, totalFridgeVolume, totalProductsVolume } =
    useStorageManagement();

  // Berechnung des verbleibenden freien Kühlschrankvolumens
  const freeFridgeVolume =
    totalProductsVolume <= totalFridgeVolume
      ? (totalFridgeVolume - totalProductsVolume).toFixed(2)
      : 0;

  // Datum für morgen
  const expiringTomorrow = new Date();
  expiringTomorrow.setDate(expiringTomorrow.getDate());

  // Zählt Produkte, die morgen ablaufen
  const tomorrowExpiryCount = products.filter((product) => {
    const expirationDate = new Date(product.expirationDate);
    return (
      expirationDate.getFullYear() === expiringTomorrow.getFullYear() &&
      expirationDate.getMonth() === expiringTomorrow.getMonth() &&
      expirationDate.getDate() === expiringTomorrow.getDate()
    );
  }).length;

  // Zählt abgelaufene Produkte
  const expiredProductCount = products.filter(
    (product) =>
      new Date(product.expirationDate) < new Date().setHours(0, 0, 0, 0)
  ).length;

  // Berechnet das kleinste und größte Produktvolumen
  const smallestProductVolume =
    products.length > 0
      ? Math.min(...products.map((product) => product.volume))
      : null;

  const largestProductVolume =
    products.length > 0
      ? Math.max(...products.map((product) => product.volume))
      : null;

  // Überprüft, ob das Gesamtvolumen die Kapazität des Kühlschranks überschreitet
  const isOverCapacity = totalProductsVolume > totalFridgeVolume;

  // Klasse für die Anzeige des Gesamtvolumens
  let totalProductsVolumeClass;
  if (totalProductsVolume >= 49) {
    totalProductsVolumeClass = "warn";
  } else if (totalProductsVolume >= 45) {
    totalProductsVolumeClass = "attention";
  } else {
    totalProductsVolumeClass = "good";
  }

  // Klasse für die Anzeige des freien Kühlschrankvolumens
  let freeFridgeVolumeClass;
  if (freeFridgeVolume <= 1) {
    freeFridgeVolumeClass = "blink warn";
  } else if (freeFridgeVolume <= 5) {
    freeFridgeVolumeClass = "attention";
  } else {
    freeFridgeVolumeClass = "good";
  }

  return (
    <div className="display">
      <div className="info-box neutral">
        Total Fridge Volume: <b>{totalFridgeVolume}</b>
      </div>
      <div className={`info-box ${totalProductsVolumeClass}`}>
        Total Products Volume: <b>{totalProductsVolume}</b>
      </div>
      <div className={`info-box ${freeFridgeVolumeClass}`}>
        Free Fridge Volume: <b>{freeFridgeVolume}</b>
      </div>
      <div
        className={`info-box ${tomorrowExpiryCount > 0 ? "attention" : "good"}`}
      >
        Products Expiring Tomorrow: <b>{tomorrowExpiryCount}</b>
      </div>
      <div className={`info-box ${expiredProductCount > 0 ? "warn" : "good"}`}>
        Expired Products Count: <b>{expiredProductCount}</b>
      </div>
      <div className="info-box neutral">
        Smallest Product Volume:{" "}
        {smallestProductVolume !== null ? <b>{smallestProductVolume}</b> : ""}
      </div>
      <div className="info-box neutral">
        Largest Product Volume:{" "}
        {largestProductVolume !== null ? <b>{largestProductVolume}</b> : ""}
      </div>

      {isOverCapacity && (
        <div className="warn-box">
          <b>Warning:</b>
          <p>Total products volume exceeds storage capacity!</p>
          <b>Take something out of the fridge!</b>
          <p>Otherwise the door won't close.</p>
        </div>
      )}
    </div>
  );
}
