import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import IllustrationImg from "../../assets/illustration.png";
import { Background } from "../../components/Background";

import { ButtonIcon } from "../../components/ButtonIcon";
import { useNavigation } from "@react-navigation/native";
export function SignIn() {
  const navigation = useNavigation();

  const HandleSingIn = () => {
    navigation.navigate("Home");
  };
  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {"\n"}e organize {"\n"}
            suas jogatinas
          </Text>
          <Text style={styles.subtilte}>
            Crie grupos para jogar seus games {"\n"}
            favoritos com seus amigos
          </Text>
          <ButtonIcon onPress={HandleSingIn} title="Entrar com Discord" />
        </View>
      </View>
    </Background>
  );
}
