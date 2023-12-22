import * as themeMap from "./themes";
export const createTWConfig = (themeStr: string) => {
  const theme = themeMap[themeStr];
  return {
    darkMode: "class",
    content: ["./**/*.{html,js,ts,jsx,tsx}"],
    theme: {
      screens: {
        sm: "640px",
        md: "1250px",
        lg: "1920px",
      },
      extend: {
        colors: {
          primary: {
            50: theme["--theme-color-primary-50"],
            100: theme["--theme-color-primary-100"],
            200: theme["--theme-color-primary-200"],
            300: theme["--theme-color-primary-300"],
            400: theme["--theme-color-primary-400"],
            500: theme["--theme-color-primary-500"],
            DEFAULT: theme["--theme-color-primary"],
            700: theme["--theme-color-primary-700"],
            800: theme["--theme-color-primary-800"],
            900: theme["--theme-color-primary-900"],
            950: theme["--theme-color-primary-950"],
          },
          dark: {
            50: theme["--theme-color-dark-50"],
            100: theme["--theme-color-dark-100"],
            200: theme["--theme-color-dark-200"],
            300: theme["--theme-color-dark-300"],
            400: theme["--theme-color-dark-400"],
            500: theme["--theme-color-dark-500"],
            DEFAULT: theme["--theme-color-dark"],
            700: theme["--theme-color-dark-700"],
            800: theme["--theme-color-dark-800"],
            900: theme["--theme-color-dark-900"],
            950: theme["--theme-color-dark-950"],
          },
          primaryBlack: theme["--theme-color-primaryBlack"],
          primaryWhite: theme["--theme-color-primaryWhite"],
          darkBlack: theme["--theme-color-darkBlack"],
          darkWhite: theme["--theme-color-darkWhite"],

          success: theme["--theme-color-functional-success"],
          warning: theme["--theme-color-functional-warning"],
          error: theme["--theme-color-functional-error"],
          info: theme["--theme-color-functional-info"],

          extend0: theme["--theme-color-extend0"],
          extend1: theme["--theme-color-extend1"],
          extend2: theme["--theme-color-extend2"],
          black: "#000000",
          white: "#ffffff",
          gray: {
            50: "#f2f2f2",
            100: "#e6e6e6",
            200: "#cccccc",
            300: "#b3b3b3",
            400: "#999999",
            500: "#808080",
            600: "#666666",
            700: "#4D4D4D",
            800: "#333333",
            900: "#1A1A1A",
            950: "#0D0D0D",
          },
          transparent: "transparent",
        },
      },
    },
  };
};
