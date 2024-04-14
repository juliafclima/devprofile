import { View, Text, StatusBar } from "react-native";
import React from "react";

import { Container, Title } from "@/pages/Home/styles";

export default function Home() {
  return (
    <Container>
      <StatusBar />
      <Title>Home</Title>
    </Container>
  );
}
