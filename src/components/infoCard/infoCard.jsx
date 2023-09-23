import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./infoCardStyles";

const infoCard = ({ icon, text, style }) => {
    return (
        <View style={styles.container}>
            <Image source={icon} style={styles.icon} />
            <Text style={[styles.title, style]}>{text}</Text>
        </View>
    );
};

export default React.memo(infoCard);
