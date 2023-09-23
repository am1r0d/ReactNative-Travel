import { StyleSheet } from "react-native";
import { colors } from "../../constants/color";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        // paddingHorizontal: 32,
    },
    image: {
        width: "100%",
        height: 400,
        borderRadius: 20,
        marginTop: 24,
    },
    backContainer: { position: "absolute", margin: 40 },
    backIcon: { width: 40, height: 40 },
});
export default styles;
