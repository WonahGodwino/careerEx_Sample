// 7. Function that returns all drugs with stock less than 50.
function getLowStockDrugs() {
  return drugs.filter(drug => drug.stock < 50);
}

// 8. Return all drugs that are not prescription-only.
const nonPrescriptionDrugs = drugs.filter(drug => !drug.isPrescriptionOnly);

// 9. Function that returns how many drugs are from a specific manufacturer.
function countDrugsByManufacturer(manufacturer) {
  return drugs.filter(drug => drug.manufacturer === manufacturer).length;
}

// 10. Use forEach() to count how many drugs are Analgesics.
let analgesicCount = 0;
drugs.forEach(drug => {
  if (drug.category === "Analgesic") {
    analgesicCount++;
  }
});
console.log(`Number of Analgesic drugs: ${analgesicCount}`);
