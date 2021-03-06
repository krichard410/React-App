import React from "react";
import styled, { ThemeProvider } from "styled-components";
import "../index.css";

// Define our button, but with the use of props.theme this time
export const Button = styled.button`
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
    main: "green"
  }
};

// Define what props.theme will look like
export const theme = {
  main: "mediumseagreen"
};

// eslint-disable-next-line no-undef
export const Theme = () => (
  <div>
    <Button>Normal</Button>
    <ThemeProvider theme={theme}>
      <Button>Themed</Button>
    </ThemeProvider>
  </div>
);
