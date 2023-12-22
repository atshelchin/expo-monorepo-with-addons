const rawstr = `
--theme-color-primary-50: 255, 246, 245;
--theme-color-primary-100: 255, 234, 232;
--theme-color-primary-200: 250, 185, 182;
--theme-color-primary-300: 245, 136, 134;
--theme-color-primary-400: 240, 87, 90;
--theme-color-primary-500: 235, 43, 52;
--theme-color-primary: 230, 0, 18;
--theme-color-primary-700: 192, 0, 22;
--theme-color-primary-800: 153, 0, 23;
--theme-color-primary-900: 115, 0, 21;
--theme-color-primary-950: 77, 0, 17;
--theme-color-dark-50: 245, 255, 254;
--theme-color-dark-100: 232, 255, 254;
--theme-color-dark-200: 182, 249, 249;
--theme-color-dark-300: 133, 240, 244;
--theme-color-dark-400: 87, 228, 238;
--theme-color-dark-500: 42, 214, 233;
--theme-color-dark: 0, 195, 227;
--theme-color-dark-700: 0, 158, 189;
--theme-color-dark-800: 0, 121, 152;
--theme-color-dark-900: 0, 87, 114;
--theme-color-dark-950: 0, 56, 77;
--theme-color-primaryBlack: 25, 1, 3;
--theme-color-primaryWhite: 243, 242, 242;
--theme-color-darkBlack: 1, 22, 25;
--theme-color-darkWhite: 242, 243, 243;
--theme-color-functional-success: 0, 180, 42;
--theme-color-functional-warning: 255, 125, 0;
--theme-color-functional-error: 245, 63, 63;
--theme-color-functional-info: 22, 93, 255;
--theme-color-extend0: 0, 82, 217;
--theme-color-extend1: 26, 173, 25;
--theme-color-extend2: 243, 112, 33;
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