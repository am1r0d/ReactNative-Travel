import React from "react";
import styles from "./AttractionCardStyles";
import { FlatList, View, TouchableOpacity, Image, Text } from "react-native";

const AttractionCard = ({ imageSrc, title, subtitle }) => {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={{ uri: imageSrc }} />
            <Text style={styles.title}>{title}</Text>
            <View style={styles.row}>
                <Image
                    style={styles.icon}
                    source={require("../../assets/location.png")}
                />
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </View>
    );
};

export default React.memo(AttractionCard);
