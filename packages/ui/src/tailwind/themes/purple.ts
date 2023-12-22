const rawstr = `
--theme-color-primary-50: 252, 245, 255;
--theme-color-primary-100: 248, 232, 255;
--theme-color-primary-200: 205, 174, 222;
--theme-color-primary-300: 165, 125, 189;
--theme-color-primary-400: 126, 84, 157;
--theme-color-primary-500: 91, 51, 124;
--theme-color-primary: 60, 26, 91;
--theme-color-primary-700: 52, 19, 87;
--theme-color-primary-800: 44, 12, 84;
--theme-color-primary-900: 37, 6, 80;
--theme-color-primary-950: 29, 0, 77;
--theme-color-dark-50: 253, 255, 245;
--theme-color-dark-100: 252, 255, 232;
--theme-color-dark-200: 250, 255, 200;
--theme-color-dark-300: 251, 255, 168;
--theme-color-dark-400: 253, 255, 136;
--theme-color-dark-500: 255, 252, 104;
--theme-color-dark: 255, 247, 72;
--theme-color-dark-700: 210, 197, 45;
--theme-color-dark-800: 166, 149, 23;
--theme-color-dark-900: 121, 104, 9;
--theme-color-dark-950: 77, 62, 0;
--theme-color-primaryBlack: 13, 1, 25;
--theme-color-primaryWhite: 242, 242, 243;
--theme-color-darkBlack: 25, 24, 1;
--theme-color-darkWhite: 243, 243, 242;
--theme-color-functional-success: 21, 91, 54;
--theme-color-functional-warning: 208, 126, 11;
--theme-color-functional-error: 218, 20, 20;
--theme-color-functional-info: 99, 176, 227;
--theme-color-extend0: 118, 185, 0;
--theme-color-extend1: 251, 114, 153;
--theme-color-extend2: 22, 119, 255;
`
 
export const transformTheme = () => {
  const theme: any = {}
  rawstr.split(";\n").forEach(row => {
    const col = row.split(":")
    const key = col[0].replace(/\n/, '')
    theme[key] = `rgb(${col[1]})`
  })
  return theme
}

export const theme = transformTheme()