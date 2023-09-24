import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../constants/color";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: { flex: 1 },
    map: { width: "100%", height: "100%" },
    back: {
        width: 50,
        height: 50,
        marginRight: 16,
    },
    header: {
        position: "absolute",
        top: 40,
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        width: width * 0.89,
        // width: width - 48,
        padding: 14,
        margin: 20,
    },
    title: {
        fontSize: 20,
    },
});
export default styles;
