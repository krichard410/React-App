import React from "react";
import styled from "styled-components";
import "../index.css";

// Define our button, but with the use of props.theme this time
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: "palevioletred"
  }
}

// Define what props.theme will look like
const theme = {
  main: "mediumseagreen"
};

// eslint-disable-next-line no-undef
render(
  <div>
    <Button>Normal</Button>
    {/*eslint-disable-next-line react/jsx-no-undef*/}
    <ThemeProvider theme={theme}>
      <Button>Themed</Button>
    </ThemeProvider>
  </div>
);