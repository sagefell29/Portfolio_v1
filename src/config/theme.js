import { extendTheme } from "@chakra-ui/react"
const theme = extendTheme({
    initialColorMode: "dark",
    useSystemColorMode: true,
    font: "Montserrat",
    styles: {
        global: (props) => ({
            'html, body': {
                bg: props.colorMode === "dark" ? "#1A202C" : "#f5f5f5",
                color: props.colorMode === "dark" ? "#dadbdb" : "#393e46",
            },
            '&::-webkit-scrollbar': { width: "0.75rem", bg: props.colorMode === "dark" ? "#1A202C" : "#f5f5f5" },
            '&::-webkit-scrollbar-track': {bg: "transparent",borderRadius: "3rem" },
            '&::-webkit-scrollbar-thumb': { bg: props.colorMode === "dark" ? "#3f444e" : "#CACBCD",borderRadius: "3rem" },
        }),
    },

})

export default theme