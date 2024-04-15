import React from "react";
import { ThemeProvider } from "styled-components";

import Home from "@/pages/Home";
import theme from '@/global/styles/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
