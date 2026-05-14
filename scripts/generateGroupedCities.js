import fs from "fs";
import csv from "csvtojson";
const csvFilePath = "public/cities.csv";
const cities = await csv({
  colParser: {
    id: "string",
  },
  checkType: true,
}).fromFile(csvFilePath);
const citiesMapObj = {};
cities.forEach((city) => {
  const key = `${city.roundedLat}, ${city.roundedLng}`;
  if (!citiesMapObj[key]) {
    citiesMapObj[key] = [city];
  } else {
    citiesMapObj[key].push(city);
  }
});
const fileContent = `import type { GroupedCities } from "../types"; export const groupedCities: GroupedCities = ${JSON.stringify(citiesMapObj)};`;
fs.writeFileSync("src/data/groupedCities.ts", fileContent);
console.log("✅ Done!");
