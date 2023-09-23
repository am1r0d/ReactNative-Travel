import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../constants/color";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    card: {
        padding: 4,
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 15,
        marginBottom: 12,
    },
    image: {
        width: (width - 96) / 2,
        height: 100,
        borderRadius: 15,
        height: 120,
    },
    title: {
        fontSize: 12,
        fontWeight: "500",
        color: colors.black,
        marginTop: 12,
        marginLeft: 6,
    },
    subtitle: {
        fontSize: 10,
        fontWeight: "300",
        color: "rgba(0, 0, 0, 0.5)",
    },
    icon: { width: 12, height: 12, marginRight: 4 },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
        marginLeft: 6,
        marginTop: 4,
    },
});

export default styles;
