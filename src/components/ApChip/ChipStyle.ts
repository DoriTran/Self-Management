import { themes } from "@/utils/themes";

// Base chip styles
export const chipStyle: object = {
  position: "relative",
  backgroundColor: themes.color.priWhite,
  border: `1px solid ${themes.color.primaryDark}`,
  color: themes.color.primaryDark,

  "&&:hover": {
    backgroundColor: themes.color.primaryLight,
  },

  "&.MuiButtonBase-root.Mui-focusVisible": {
    backgroundColor: themes.color.primaryLight,
  },
};

// Conditional chip styles
export const iconStyle: object = {
  paddingLeft: "4px",
};

export const onlyIconStyle: object = {
  width: "30px",
  m: 0,
  p: 0,
  ".MuiChip-label": { m: 0, p: 0 },
  ".MuiChip-icon": { m: 0, p: 0 },
};

export const labelStyle: object = {
  // ".MuiChip-label": {
  //   padding: icon ? "0 3px 0 12px" : "0 6px",
  //   width: "100%",
  // },
};

// Chip colors
interface ColorType {
  dark: string;
  base: string;
  light: string;
}

export const chipColors: { [key: string]: ColorType } = {
  green: {
    dark: "#367E18",
    base: "#B1D7B4",
    light: "#E1F0DA",
  },
  pink: {
    dark: "#F72798",
    base: "#FFC0D9",
    light: "#FED9ED",
  },
  purple: {
    dark: "#6420AA",
    base: "#DCBFFF",
    light: "#E5D4FF",
  },
  red: {
    dark: "#DF2E38",
    base: "#FFABAB",
    light: "#FCC8D1",
  },
  orange: {
    dark: "#FBA834",
    base: "#F7DED0",
    light: "#FEECE2",
  },
  yellow: {
    dark: "#FFC94A",
    base: "#FFFC9B",
    light: "#FFFDD7",
  },
  blue: {
    dark: "#1D24CA",
    base: "#AEE2FF",
    light: "#E0F4FF",
  },
  black: {
    dark: "#0C0C0C",
    base: "#D8D9DA",
    light: "#EEEEEE",
  },
};
