import { createMuiTheme } from '@material-ui/core/styles';
import { green, blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: green,
    background: blue[100],
  },
});

export default theme;