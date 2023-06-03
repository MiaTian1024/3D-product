import { swatch, dribbblef, dribbblel, fileIcon, photo, logoShirt, stylishShirt } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: photo,
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: dribbblel,
  },
  {
    name: "stylishShirt",
    icon: dribbblef,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
