import { create } from "twrnc";
import { createTWConfig } from "./tailwind.config.custom";

const createTW = (theme: any) => create(createTWConfig(theme));

const twMap = {
  "nintendo": createTW("nintendo"),
  "green": createTW("green"),
  "purple": createTW("purple"),
  "default": createTW("default"),
};
const tw = twMap["purple"];

export { createTW, tw, twMap };
export { useAppColorScheme, useDeviceContext } from "twrnc";
