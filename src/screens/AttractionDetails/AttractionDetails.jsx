import React from "react";
import { SafeAreaView, Text } from "react-native";

import styles from "./AttractionDetailsStyle";

const AttractionDetails = ({ route, navigation }) => {
    const { item } = route?.params || {};

    // back e.
    const onBack = () => {
        navigation.goBack();
    };
    //
    return (
        <SafeAreaView style={styles.container}>
            <Text onPress={onBack} style={{ margin: 32 }}>
                Back
            </Text>
            <Text>{item?.name}</Text>
        </SafeAreaView>
    );
};

export default React.memo(AttractionDetails);
