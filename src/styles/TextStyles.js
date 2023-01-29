import { StyleSheet } from "react-native";

const textStyleHelper = (fontSize, lineSpacing, lineHeight, fontWeight = 'normal') => ({fontSize, lineSpacing, lineHeight, fontWeight});

export default textStyles = StyleSheet.create({
    textTitleXLarge: textStyleHelper(34, 0.37, 41),
    textTitleLarge: textStyleHelper(28, 0.36, 34),
    textTitleMedium: textStyleHelper(22, 0.35, 28),
    textTitleSmall: textStyleHelper(20, 0.38, 24),
    textHeadline: textStyleHelper(17, -0.41, 22, '600'),
    textSubHeadline: textStyleHelper(15, -0.24, 20),
    textBody: textStyleHelper(17, -0.41, 22),
    textCallout: textStyleHelper(16, -0.32, 21),
    textCaption1: textStyleHelper(12,0, 16),
    textCaptiom2: textStyleHelper(11,0.07,13),
    textFootNote: textStyleHelper(13, -0.08, 18)
});

//ref https://ivomynttinen.com/blog/ios-design-guidelines