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
            main: '#f44336',
        },
        warning:{
            main: '#ff9800',
        },
        info:{
            main: '#2b3e50',
        },
        success:{
            main: '#4caf50',
        },
        color: {
            default: '#d4d4d4',
            main:'#ffffff'
        },

    },

    pre:{
        background:`#eeeeee`,
        padding: 20,
        width: `95%`,
        margin: `auto`,
        whiteSpace: `pre-wrap`,
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