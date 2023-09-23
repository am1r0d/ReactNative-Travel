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
    miniImage: {
        width: 40,
        height: 40,
        margin: 8,
        borderRadius: 10,
    },
    footer: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 15,
        justifyContent: "center",
        backgroundColor: "rgba(256,256,256,0.35)",
        margin: 16,
        paddingHorizontal: 8,
    },
});
export default styles;
