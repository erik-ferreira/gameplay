import React from "react";
import { View, ScrollView } from "react-native";

import Category from "../Category";

import { categories } from "../../utils/Categories";

import styles from "./styles";

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckBox?: boolean;
};

const CategorySelect: React.FC<Props> = ({
  categorySelected,
  setCategory,
  hasCheckBox = false,
}) => {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 24,
      }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
          hasCheckBox={hasCheckBox}
        />
      ))}
    </ScrollView>
  );
};

export default CategorySelect;
