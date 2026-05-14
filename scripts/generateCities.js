import fs from "fs";
import csv from "csvtojson";
const csvFilePath = "public/cities.csv";
csv({
  colParser: {
    id: "string",
  },
  checkType: true,
})
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    const fileContent = `import type { City } from "../types"; export const cities: City[] = ${JSON.stringify(jsonObj)};`;
    fs.writeFileSync("src/data/cities.ts", fileContent);
    console.log("✅ Done!");
  });
