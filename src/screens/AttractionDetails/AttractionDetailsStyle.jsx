import { StyleSheet } from "react-native";
import { colors } from "../../constants/color";
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subtitle: {
        fontSize: 20,
        color: colors.black,
        marginTop: 40,
        // marginBottom: 18,
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    emptyText: {
        textAlign: "center",
        marginTop: 20,
        fontSize: 15,
        color: "rgba(0,0,0,0.5)",
    },
});
export default styles;
