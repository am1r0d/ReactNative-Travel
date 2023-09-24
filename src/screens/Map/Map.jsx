import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./MapStyle";
import MapView, { Marker } from "react-native-maps";

const Map = ({ navigation, route }) => {
    //
    const { item } = route?.params || {};

    //
    const coords = {
        latitude: item?.coordinates?.lat,
        longitude: item?.coordinates?.lon,
        longitudeDelta: 0.09,
        latitudeDelta: 0.09,
    };

    // back e.
    const onBack = () => {
        navigation.goBack();
    };

    //
    return (
        <View style={styles.container}>
            <MapView style={styles.map} initialRegion={coords}>
                <Marker coordinate={coords} title={item?.name} />
            </MapView>

            <View style={styles.header}>
                <TouchableOpacity onPress={onBack}>
                    <Image
                        style={styles.back}
                        source={require("../../assets/back.png")}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>
                    {`${item?.name} ,${item?.city}`}
                </Text>
            </View>
        </View>
    );
};

export default React.memo(Map);
