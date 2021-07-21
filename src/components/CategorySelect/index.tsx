import React from "react";
import { styles } from "./styles";
import { ScrollView } from "react-native";
import { categories } from "../../utils/categories";
import { Category } from "../Category";

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
};
export function CategorySelect({ categorySelected, setCategory }: Props) {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          title={category.title}
          icon={category.icon}
          key={category.id}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </ScrollView>
  );
}
