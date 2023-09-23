import { StyleSheet } from "react-native";
import { colors } from "../../constants/color";

const styles = StyleSheet.create({
    container: { flexDirection: "row", alignItems: "center" },
    icon: { width: 40, height: 40 },
    title: {
        fontSize: 12,
        color: colors.blue1,
        color: colors.black,
        marginHorizontal: 8,
    },
});

export default styles;
