import React from "react";
import styles from "./AttractionCardStyles";
import { FlatList, View, TouchableOpacity, Image, Text } from "react-native";

const AttractionCard = ({ imageSrc, title, subtitle, onPress, style }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.card, style]}>
            <Image style={styles.image} source={{ uri: imageSrc }} />
            <Text style={styles.title}>{title}</Text>
            <View style={styles.row}>
                <Image
                    style={styles.icon}
                    source={require("../../assets/location.png")}
                />
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default React.memo(AttractionCard);
