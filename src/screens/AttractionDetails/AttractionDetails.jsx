import React from "react";
import {
    Image,
    ImageBackground,
    Pressable,
    SafeAreaView,
    Text,
    View,
} from "react-native";

import styles from "./AttractionDetailsStyle";

const AttractionDetails = ({ route, navigation }) => {
    const { item } = route?.params || {};
    const mainImage = item?.images?.length ? item?.images[0] : null;
    // back e.
    const onBack = () => {
        navigation.goBack();
    };
    //
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                style={styles.mainImage}
                source={{ uri: mainImage }}
                imageStyle={{ borderRadius: 15 }}
            >
                <View style={styles.header}>
                    <Pressable onPress={onBack} hitSlop={8}>
                        <Image
                            style={styles.icon}
                            source={require("../../assets/back.png")}
                        />
                    </Pressable>
                    <Pressable hitSlop={8}>
                        <Image
                            style={styles.icon}
                            source={require("../../assets/share.png")}
                        />
                    </Pressable>
                </View>
                <View style={styles.footer}>
                    {item?.images?.length
                        ? item?.images?.map((image) => (
                              <Image
                                  key={image}
                                  source={{ uri: image }}
                                  style={styles.miniImage}
                              />
                          ))
                        : null}
                </View>
            </ImageBackground>
            <Text>{item?.name}</Text>
        </SafeAreaView>
    );
};

export default React.memo(AttractionDetails);
