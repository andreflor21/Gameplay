import React from "react";
import { View, FlatList } from "react-native";
import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";
type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
};
export const Guilds = ({ handleGuildSelect }: Props) => {
    const guilds = [
        {
            id: "1",
            name: "lendarios",
            icon: null,
            owner: true,
        },
        {
            id: "2",
            name: "SAS BROS",
            icon: null,
            owner: false,
        },
    ];
    return (
        <View style={styles.container}>
            <FlatList
                data={guilds}
                keyExtractor={(intem) => intem.id}
                renderItem={({ item }) => (
                    <Guild
                        data={item}
                        onPress={() => handleGuildSelect(item)}
                    />
                )}
                ItemSeparatorComponent={() => <ListDivider isCentered />}
                ListHeaderComponent={() => <ListDivider isCentered />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
                style={styles.guilds}
            />
        </View>
    );
};
