import { createMuiTheme } from '@material-ui/core/styles';

/* Approximate Hex Codes of US Flag Colors are Red (#B22234), Blue (#3C3B6E) and White(#FFFFFF). */

const llBlue = "#3C3B6E";
const llRed = "#B22234";

const theme = createMuiTheme({
    palette: {
        common: {
            blue: `${llBlue}`,
            orange: `${llRed}`
        },
        primary: {
            main: `${llBlue}`
        },
        secondary: {
            main: `${llRed}`
        }
    }
});

export default theme;