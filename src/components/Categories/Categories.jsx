import React from "react";
import styles from "./CategoriesStyles";
import { FlatList, Text, View } from "react-native";

const Categories = ({ categories, selectedCategory }) => {
    return (
        <FlatList
            horizontal
            data={categories}
            renderItem={({ item }) => {
                const selected = selectedCategory === item;

                return (
                    <View
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
                    </View>
                );
            }}
        />
    );
};

export default React.memo(Categories);
