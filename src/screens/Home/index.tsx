import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { FlatList, Text, View } from "react-native";
import { Profile } from "../../components/Profile";
import { Background } from "../../components/Background";

import { styles } from "./styles";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
export function Home() {
    const [category, setCategory] = useState<string>("");
    const navigation = useNavigation();
    const appointments = [
        {
            id: "1",
            guild: {
                id: "1",
                name: "lendarios",
                icon: null,
                owner: true,
            },
            category: "1",
            date: "22/06 as 20:40h",
            description:
                "É hoje que vamos chegar ao challenger sem perder uma partida na md10",
        },
        {
            id: "2",
            guild: {
                id: "1",
                name: "lendarios",
                icon: null,
                owner: true,
            },
            category: "1",
            date: "22/06 as 20:40h",
            description:
                "É hoje que vamos chegar ao challenger sem perder uma partida na md10",
        },
    ];
    const handleCategorySelect = (categoryId: string) => {
        categoryId === category ? setCategory("") : setCategory(categoryId);
    };
    const handleAppointmentDetails = () => {
        navigation.navigate("AppointmentDetails");
    };
    const handleAppointmentCreate = () => {
        navigation.navigate("AppointmentCreate");
    };
    return (
        <Background>
            <View>
                <View style={styles.header}>
                    <Profile />
                    <ButtonAdd onPress={handleAppointmentCreate} />
                </View>
                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />

                <ListHeader title="Partidas Agendadas" subtitle="Total 6" />

                <FlatList
                    data={appointments}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Appointment
                            onPress={handleAppointmentDetails}
                            data={item}
                        />
                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                    contentContainerStyle={{ paddingBottom: 69 }}
                    style={styles.matches}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </Background>
    );
}
