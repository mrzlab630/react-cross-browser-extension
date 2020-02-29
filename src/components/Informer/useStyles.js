import { makeStyles } from "@material-ui/core/styles";




const useStyles = makeStyles(theme => ({

    center:{
        display: `flex`,
        justifyContent: `center`,
    },
    wrapperContent:{
        width:320,
        borderRadius: 4,
        backgroundColor: `transparent`,
        boxShadow: `0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)`
    },
    ContentIco:{
        opacity: .9,
        fontSize: 22,
    },
    ContentInfo:{
        alignSelf: `center`,
    },
    ContentClose:{

    },
    error:{
        backgroundColor: theme.palette.error.main,
        color: theme.palette.color.main,
        fill: theme.palette.color.main,
    },
    warning:{
        backgroundColor: theme.palette.warning.main,
        color: theme.palette.color.main,
        fill: theme.palette.color.main,
    },
    info:{
        backgroundColor: theme.palette.info.main,
        color: theme.palette.color.default,
        fill: theme.palette.color.default,
    },
    success:{
        backgroundColor: theme.palette.success.main,
        color: theme.palette.color.main,
        fill: theme.palette.color.main,
    },
    default:{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.primary.main,
    },
    closeBtm:{
        padding: `12px 15px`
    }

}));



export default useStyles;