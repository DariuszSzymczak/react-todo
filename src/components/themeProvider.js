import { createGlobalStyle } from "styled-components"
import img from "./../assets/images/bg.jpg"
export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Acme&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Magra&display=swap');
    body  {
        background: url(${img}) ;
        font-family: 'Magra', sans-serif;
        
    }

    h1,h1,h3,h4,h5,h6{
        font-family: 'Acme', sans-serif;
        
    }
    h1{
      font-size:1.8em;
    }

`
export const Theme = {
  color: {
    blue: {
      light: "#F3F3F3",
      normal: "#5d6e9c",
      dark: "#233039"
    },
    green: {
      light: "#48fb57",
      normal: "#25b031",
      dark: "#233925"
    },
    red: {
      light: "#f95a5a",
      normal: "#d22929",
      dark: "#640b0b"
    },
    orange: {
      light: "#ffaf51",
      normal: "#ff8c03",
      dark: "#ab4000"
    },
    gray: {
      light: "#e5e5e5",
      normal: "#818181",
      dark: "#3b3b3b",
      darker: "#121212"
    },
    turkus: {
      light: "#2dd2ae",
      normal: "rgba(15, 90, 63, 0.85)",
      dark: "#002920"
    }
  }
}
