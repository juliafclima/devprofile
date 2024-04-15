import React from "react";
import { ScrollView } from "react-native";

import { Container } from "@/pages/SignIn/styles";

export default function Button() {
  return (
    <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{flex: 1}}>
      <Container>

      </Container>
    </ScrollView>
  );
}
