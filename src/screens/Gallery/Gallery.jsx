import React from "react";
import { SafeAreaView, Text } from "react-native";

import styles from "./GalleryStyle";

const Gallery = () => {
    //
    return (
        <SafeAreaView style={styles.container}>
            <Text>Gallery</Text>
        </SafeAreaView>
    );
};

export default React.memo(Gallery);
