import React from "react";
import { Text } from "react-native";
import styles from "./TitleStyles";

const Title = ({ text, style }) => {
    return <Text style={[styles.title, style]}>{text}</Text>;
};

export default React.memo(Title);
