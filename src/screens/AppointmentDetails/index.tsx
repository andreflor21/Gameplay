import React from "react";
import { ImageBackground, View, Text, FlatList } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { Banner } from "../../assets/banner.png";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { ListHeader } from "../../components/ListHeader";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";
export const AppointmentDetails = () => {
    const members = [
        {
            id: "1",
            username: "Andre",
            avatar_url: "https://github.com/andreflor21.png",
            status: "online",
        },
        {
            id: "2",
            username: "Andre",
            avatar_url: "https://github.com/andreflor21.png",
            status: "offline",
        },
    ];
    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />
            <ImageBackground source={Banner} style={styles.banner}>
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>Lendário</Text>
                    <Text style={styles.subtitle}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Vitae impedit{" "}
                    </Text>
                </View>
            </ImageBackground>
            <ListHeader title="Jogadores" subtitle="Total 3" />
            <FlatList
                data={members}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Member data={item} />}
                ItemSeparatorComponent={() => <ListDivider isCentered />}
                style={styles.members}
            />
            <View style={styles.footer}>
                <ButtonIcon title="Entrar na partida" />
            </View>
        </Background>
    );
};
