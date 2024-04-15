import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "@/global/styles/theme";
import Home from "@/pages/Home";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Home /> */}
      {/*  <SignIn /> */}
      <SignUp />
    </ThemeProvider>
  );
}
