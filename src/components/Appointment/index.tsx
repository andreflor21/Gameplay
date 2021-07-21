import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { GuildIcon } from "../GuildIcon";

export type GuildProps = {};
export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};
type Props = RectButtonProps & {
  data: AppointmentProps;
};
export const Appointment = ({ data, ...rest }: Props) => {
  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <GuildIcon />
      </View>
    </RectButton>
  );
};
