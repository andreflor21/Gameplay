import React from "react";
import { styles } from "./styles";
import { ScrollView } from "react-native";
import { categories } from "../../utils/categories";
import { Category } from "../Category";

type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
    hasCheckBox?: boolean;
};
export const CategorySelect = ({
    categorySelected,
    setCategory,
    hasCheckBox = false,
}: Props) => {
    return (
        <ScrollView
            style={styles.container}
            horizontal
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {categories.map((category) => (
                <Category
                    hasCheckBox={hasCheckBox}
                    title={category.title}
                    icon={category.icon}
                    key={category.id}
                    checked={category.id === categorySelected}
                    onPress={() => setCategory(category.id)}
                />
            ))}
        </ScrollView>
    );
};
