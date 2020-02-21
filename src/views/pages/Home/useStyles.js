import { makeStyles } from "@material-ui/core/styles";




const useStyles = makeStyles(theme => ({
    wrapper:{
        display: `flex`,
        justifyContent: `center`,
        justifyItems: `center`,
    },
    textarea:{
        padding:`30px 10px`,
        width:`95%`,
        '& pre':{
              background:`#eeeeee`,
              padding: 20,
              width: `90%`,
              margin: `auto`
        },
        '& hr':{
            border: `1px solid #eeeeee`,
            width: `90%`,
        }
    }
}));



export default useStyles;