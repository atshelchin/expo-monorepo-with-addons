const rawstr = `
--theme-color-primary-50: 245, 255, 248;
--theme-color-primary-100: 232, 255, 240;
--theme-color-primary-200: 191, 236, 207;
--theme-color-primary-300: 153, 217, 179;
--theme-color-primary-400: 120, 198, 154;
--theme-color-primary-500: 90, 179, 131;
--theme-color-primary: 64, 160, 112;
--theme-color-primary-700: 42, 139, 94;
--theme-color-primary-800: 24, 118, 77;
--theme-color-primary-900: 10, 97, 62;
--theme-color-primary-950: 0, 77, 48;
--theme-color-dark-50: 233, 255, 252;
--theme-color-dark-100: 232, 255, 253;
--theme-color-dark-200: 219, 242, 241;
--theme-color-dark-300: 206, 229, 229;
--theme-color-dark-400: 194, 216, 217;
--theme-color-dark-500: 181, 203, 204;
--theme-color-dark: 169, 189, 191;
--theme-color-dark-700: 108, 156, 162;
--theme-color-dark-800: 59, 123, 134;
--theme-color-dark-900: 23, 90, 105;
--theme-color-dark-950: 0, 60, 77;
--theme-color-primaryBlack: 1, 25, 13;
--theme-color-primaryWhite: 242, 243, 242;
--theme-color-darkBlack: 1, 23, 25;
--theme-color-darkWhite: 242, 243, 243;
--theme-color-functional-success: 21, 91, 54;
--theme-color-functional-warning: 208, 126, 11;
--theme-color-functional-error: 218, 20, 20;
--theme-color-functional-info: 99, 176, 227;
--theme-color-extend0: 95, 102, 114;
--theme-color-extend1: 142, 0, 0;
--theme-color-extend2: 0, 126, 199;
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