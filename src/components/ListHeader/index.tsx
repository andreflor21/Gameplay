import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type Props = {
  title: string;
  subtitle: string;
};
export const ListHeader = ({ title, subtitle }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};
