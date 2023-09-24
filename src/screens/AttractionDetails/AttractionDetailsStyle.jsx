import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../constants/color";
const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: { margin: 32 },
    mainImage: {
        width: "100%",
        height: height / 2,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    header: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    icon: { width: 36, height: 36, margin: 16 },
    footer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        backgroundColor: "rgba(256, 256, 256, 0.35)",
        margin: 16,
        paddingHorizontal: 8,
    },
    miniImage: {
        width: 40,
        height: 40,
        marginHorizontal: 4,
        marginVertical: 8,
        borderRadius: 10,
    },
    moreImages: {
        color: colors.white,
        fontWeight: "bold",
        fontSize: 20,
    },
    moreImagesContainer: {
        position: "absolute",
        backgroundColor: "rgba(0,0,0,0.38)",
        width: 40,
        height: 40,
        top: 8,
        left: 4,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: colors.black,
    },
    city: {
        fontSize: 20,
        color: colors.black,
        fontWeight: "400",
        marginTop: 8,
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 40,
    },
    map: {
        // justifyContent: "center",
        // alignContent: "center",
        // alignItems: "center",
        width: "100%",
        height: 200,
        borderRadius: 10,
    },
    mapText: {
        fontWeight: "bold",
        fontSize: 16,
        color: colors.blue1,
        textAlign: "center",
        padding: 16,
        marginBottom: 30,
    },
});
export default styles;
