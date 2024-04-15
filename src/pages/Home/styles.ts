import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { colors } from "@/global/styles/theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.black};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(17)}px;
  font-size: 24px;
  background-color: ${colors.secondary};
`;
