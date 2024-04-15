import React from "react";
import { ThemeProvider } from "styled-components";

import Home from "@/pages/Home";
import theme from "@/global/styles/theme";
import SignIn from "@/pages/SignIn";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Home /> */}
      <SignIn />
    </ThemeProvider>
  );
}
