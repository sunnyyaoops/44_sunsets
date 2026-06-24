import fs from "fs";
import csv from "csvtojson";
const csvFilePath = "public/cities.csv";
const cities = await csv({
  colParser: {
    id: "string",
  },
  checkType: true,
}).fromFile(csvFilePath);
const cityGroupObj = {};
cities.forEach((city) => {
  const key = `${city.roundedLat}, ${city.roundedLng}`;
  if (!cityGroupObj[key]) {
    cityGroupObj[key] = [city];
  } else {
    cityGroupObj[key].push(city);
  }
});
const fileContent = `import type { GroupedCities } from "../types"; export const groupedCities: GroupedCities = ${JSON.stringify(cityGroupObj)};`;
fs.writeFileSync("src/data/groupedCities.ts", fileContent);
console.log("✅ Done!");
