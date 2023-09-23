import { StyleSheet } from "react-native";
import { colors } from "../../constants/color";
const styles = StyleSheet.create({
    container: {
        padding: 32,
    },
    subtitle: {
        fontSize: 20,
        color: colors.black,
        marginTop: 40,
        marginBottom: 18,
    },
    row: {
        flexDirection: "row",
    },
});
export default styles;
