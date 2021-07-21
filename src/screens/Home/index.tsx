import React, { useState } from "react";

import { FlatList, Text, View } from "react-native";
import { Profile } from "../../components/Profile";
import { styles } from "./styles";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
export function Home() {
  const [category, setCategory] = useState<string>("");

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
  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
      <View style={styles.content}>
        <ListHeader title="Partidas Agendadas" subtitle="Total 6" />

        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Appointment data={item} />}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
