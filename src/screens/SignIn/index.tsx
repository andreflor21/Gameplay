import React from "react";
import { Image, Text, View, Alert, ActivityIndicator } from "react-native";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import IllustrationImg from "../../assets/illustration.png";

import { Background } from "../../components/Background";
import { ButtonIcon } from "../../components/ButtonIcon";

import { useAuth } from "../../hooks/auth";

export function SignIn() {
    const { loading, signIn } = useAuth();
    const HandleSingIn = async () => {
        try {
            await signIn();
        } catch (error) {
            Alert.alert(error);
        }
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
                    {loading ? (
                        <ActivityIndicator color={theme.colors.primary} />
                    ) : (
                        <ButtonIcon
                            onPress={HandleSingIn}
                            title="Entrar com Discord"
                        />
                    )}
                </View>
            </View>
        </Background>
    );
}
