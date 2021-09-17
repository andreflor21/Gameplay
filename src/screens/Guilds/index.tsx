import React, { useEffect, useState } from "react";

import { View, FlatList } from "react-native";
import { Guild, GuildProps } from "../../components/Guild";
import { Load } from "../../components/Load";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";
import { api } from "../../services/api";

type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
};
export const Guilds = ({ handleGuildSelect }: Props) => {
    const [guilds, setGuilds] = useState<GuildProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchGuilds = async () => {
        const response = await api.get("/users/@me/guilds");

        setGuilds(response.data);
        setLoading(false);
    };

    useEffect(() => {
        fetchGuilds();
    }, []);
    return (
        <View style={styles.container}>
            {loading ? (
                <Load />
            ) : (
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
                    contentContainerStyle={{
                        paddingBottom: 68,
                        paddingTop: 103,
                    }}
                    style={styles.guilds}
                />
            )}
        </View>
    );
};
