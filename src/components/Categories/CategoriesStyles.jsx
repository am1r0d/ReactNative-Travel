import { StyleSheet } from "react-native";
import { colors } from "../../constants/color";

const styles = StyleSheet.create({
    item: {
        fontSize: 12,
        color: "rgba(0,0,0,0.5)",
        paddingVertical: 2,
    },
    selectedItem: {
        color: colors.black,
    },
    selectedItemContainer: {
        borderBottomColor: colors.blue1,
        borderBottomWidth: 1,
    },
    itemContainer: {
        marginRight: 17,
        marginBottom: 14,
    },
});

export default styles;
