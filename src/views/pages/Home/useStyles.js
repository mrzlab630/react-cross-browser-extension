import { makeStyles } from "@material-ui/core/styles";




const useStyles = makeStyles(theme => ({
    wrapper:{
        /*
        display: `flex`,
        justifyContent: `center`,
        justifyItems: `center`,
        alignItems: `center`,

         */
    },
    loading:{
        display: `flex`,
        justifyContent: `center`,
        justifyItems: `center`,
        alignItems: `center`,
        position: `fixed`,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        background: `rgb(238, 238, 238,.8)`,
    },
    textarea:{
        padding:`30px 10px`,
        margin: `auto`,
        '& pre':{
             ...theme.pre
        },
        '& hr':{
            border: `1px solid #eeeeee`,
            width: `90%`,
        }
    },
    notesList:{
        width:`100%`,
    },
}));



export default useStyles;