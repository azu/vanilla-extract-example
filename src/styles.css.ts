import { createTheme, style } from '@vanilla-extract/css';

export const [themeClass, themeVars] = createTheme({
  color: {
    brand: 'blue'
  },
  font: {
    body: 'arial'
  }
});

export const exampleStyle = style({
  backgroundColor: themeVars.color.brand,
  fontFamily: themeVars.font.body,
  color: 'white',
  padding: 10
});

