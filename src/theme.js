import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({

    palette: {
        background: {
            default:'#eee',
        },
        primary: {
            main: '#2b3e50',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: '#b30001',
        },
        color: {
            default: '#d4d4d4',
        },
    },

    line:{
        width:`45%`,
        height:5,
        borderBottom:`1px solid #d0d0d047`,
        margin: `auto`,
    },
    paper:{
        padding: `20px 25px`,
        marginBottom: 20,
    },

});


export default theme;