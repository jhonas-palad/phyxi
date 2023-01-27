export default Icons = ({iconPackage, name, size, color}) => {
    const getIconPackage = (name, size, color) => {
        const importPackage = require("@expo/vector-icons");

        console.log(importPackage?.MaterialCommunityIcons);
        const icon = importPackage[iconPackage];
        return icon(name, size, color);
    }
    return (
        getIconPackage(name, size, color)
    )
}