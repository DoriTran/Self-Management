interface Themes {
  color: { [key: string]: string };
  font: { [key: string]: string };
  fontSize: { [key: string]: string };
  fontWeight: { [key: string]: number };
  breakpoints: { [key: string]: string };
  sidebar: { [key: string]: string };
}

export const themes: Themes = {
  color: {
    primary: "#ccd8f8",
    primaryDark: "#6a65ff",
    primaryLight: "#e7e7ff",
    secondary: "#fcdcfe",
    secondartDark: "#f7418f",
    background: "#f9fbfc",

    priBlack: "#090027",
    priBlackLight: "#31363F",
    priWhite: "#fff",
    priGreen: "#2db46e",
    priRed: "#ed4337",
  },
  font: {
    lexend: "Lexend, sans-serif",
    mali: "Mali, sans-serif",
  },
  fontSize: {
    small: "12px",
    normal: "14px",
    medium: "16px",
    large: "18px",
    huge: "20px",
    extra: "24px",
    super: "32px",
    brand: "64px",
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  breakpoints: {
    width: "1200px",
    phone: "576px",
  },
  sidebar: {
    expandedWidth: "300px",
    collapsedWidth: "70px",
  },
};

export interface Mixin {
  [key: string]: {
    [key: string]: string | number;
  };
}

export const mixin: Mixin = {
  username: {
    fontFamily: themes.font.mali,
    fontSize: themes.fontSize.huge,
    fontWeight: themes.fontWeight.regular,
  },
  email: {
    fontFamily: themes.font.mali,
    fontSize: themes.fontSize.huge,
    fontWeight: themes.fontWeight.regular,
  },
  baseGradient: {
    background: `linear-gradient(to right, ${themes.color.primary}, ${themes.color.secondary})`,
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  flexCol: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};
