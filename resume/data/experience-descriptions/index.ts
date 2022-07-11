import fs from "fs";
import path from "path";

export const abakPressDescription = fs
  .readFileSync(path.resolve("./data/experience-descriptions/abak-press.txt"))
  .toString();

export const freelanceDescription = fs
  .readFileSync(path.resolve("./data/experience-descriptions/freelance.txt"))
  .toString();

export const intTechDescription = fs
  .readFileSync(path.resolve("./data/experience-descriptions/int-tech.txt"))
  .toString();

export const motorsportNetworkDescription = fs
  .readFileSync(
    path.resolve("./data/experience-descriptions/motorsport-network.txt")
  )
  .toString();
