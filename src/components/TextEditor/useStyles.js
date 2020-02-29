import { makeStyles } from "@material-ui/core/styles";




const useStyles = makeStyles(theme => ({

    show:{
        opacity:1,
        display: `flex`,
    },
    hide:{
        opacity:0,
        display: `none`,
    },
    paper:{
       ...theme.paper
    },
    textarea:{
        width: `100%`,
        border: `none`,
        outline: `none`,
        overflow:`hidden`,
        resize: `none`,

    },
    smileBtm:{
        float: `right`,
        /*
        width: 45,
        height: 45,
         */
    },
    line:{
        ...theme.line
    },
    buttonsBlock:{
      display: `flex`,
      flexWrap: `wrap`,
      justifyContent: `flex-end`
    },
    buttonsList:{
        margin:0,
        padding:`3px 0`,
    },
    buttonsListAction:{
        flexGrow: 1,
    },
    buttonsListSetting:{

    },
    buttonsListItm:{
        display:`inline-block`,
        padding:0,
        '&:hover div:nth-of-type(1)':{
            display: 'flex',
        }
    },
    buttonsListItmBtm:{
        width: 45,
        height: 45,
    },
    info:{
        padding:`20px 0`,
        fontWeight: 500,
    },
    textCount:{
        fontSize:10,
        fontWeight: 100,
        color: `#000000`,
        padding: 15,
    },
    dropMenu:{
        position: `absolute`,
        display: `none`,
        justifyContent: `center`,
        justifyItems: `center`,
        flexWrap: `wrap`,
        zIndex: 9,
        width: 100,
        minHeight: 50,
        border: `1px solid #eeeeee`,
        background: `white`,
        padding:5,
        boxShadow: `5px 6px 10px -1px rgb(44, 62, 79,0.6)`,
    },
    dropMenuItem:{
        width:20,
        height:20,
        borderRadius: 5,
        border: `1px solid #2c3e4f`,
        margin: 3,
        cursor: `pointer`,
        textAlign: `center`,
        '&:hover':{
            boxShadow: `0px 0px 4px #2c3e4f`,
        }
    },
    dropMenuItemNumber:{
        width: `100%`,
        border: `none`,
        borderBottom: `1px solid rgb(238, 238, 238)`,
        cursor: `pointer`,
        height: 20,
        margin: 3,
        textAlign: `center`,
        '&:hover':{
            background: `#2c3e4f`,
            color: `white`,
        }
    }

}));



export default useStyles;