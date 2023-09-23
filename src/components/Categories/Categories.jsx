import React from "react";
import styles from "./CategoriesStyles";
import { FlatList, Text, TouchableOpacity } from "react-native";

const Categories = ({ categories, selectedCategory, onCategoryPress }) => {
    return (
        <FlatList
            horizontal
            data={categories}
            style={{ marginRight: -32 }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
                const selected = selectedCategory === item;

                return (
                    <TouchableOpacity
                        onPress={() => onCategoryPress(item)}
                        style={[
                            styles.itemContainer,
                            selected ? styles.selectedItemContainer : {},
                        ]}
                    >
                        <Text
                            style={[
                                styles.item,
                                selected ? styles.selectedItem : {},
                            ]}
                        >
                            {item}
                        </Text>
                    </TouchableOpacity>
                );
            }}
        />
    );
};

export default React.memo(Categories);
