import React from "react";
import {
    Image,
    ImageBackground,
    Pressable,
    SafeAreaView,
    ScrollView,
    Text,
    View,
} from "react-native";

import styles from "./AttractionDetailsStyle";
import Title from "../../components/Title/Title";
import InfoCard from "../../components/infoCard/infoCard";

import MapView from "react-native-maps";

const AttractionDetails = ({ route, navigation }) => {
    const { item } = route?.params || {};
    const mainImage = item?.images?.length ? item?.images[0] : null;

    // back e.
    const onBack = () => {
        navigation.goBack();
    };

    //
    const onGalleryNavigate = () => {
        navigation.navigate("Gallery", { images: item?.images });
    };

    //
    const slicedImages = item?.images?.length ? item?.images?.slice(0, 5) : [];
    const diffImages = item?.images?.length - slicedImages?.length;

    //
    const openingHours = `OPEN
${item?.opening_time} - ${item?.closing_time}`;

    //
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
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

                    {/*  */}
                    <Pressable
                        onPress={onGalleryNavigate}
                        style={styles.footer}
                    >
                        {slicedImages?.map((image, index) => (
                            <View key={image}>
                                <Image
                                    source={{ uri: image }}
                                    style={styles.miniImage}
                                />
                                {diffImages > 0 &&
                                index === slicedImages?.length - 1 ? (
                                    <View style={styles.moreImagesContainer}>
                                        <Text
                                            style={styles.moreImages}
                                        >{`+${diffImages}`}</Text>
                                    </View>
                                ) : null}
                            </View>
                        ))}
                    </Pressable>
                </ImageBackground>

                <View style={styles.headerContainer}>
                    <View style={{ maxWidth: "70%" }}>
                        <Title style={styles.title} text={item?.name} />
                        <Text style={styles.city}>{item?.city}</Text>
                    </View>
                    <Title style={styles.title} text={item?.entry_price} />
                </View>

                <InfoCard
                    text={item?.address}
                    icon={require("../../assets/location_circle.png")}
                />
                <InfoCard
                    text={openingHours}
                    icon={require("../../assets/schedule.png")}
                />

                <View style={styles.container}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(AttractionDetails);
