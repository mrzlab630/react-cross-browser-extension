/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630pw
 * Date: 23.09.2019
 * Time: 9:18
 * About:
 *
 */
import React,{useState} from "react";
import PropTypes from 'prop-types';
import {
    Paper,
    Box,
    IconButton,
   } from '@material-ui/core';

import ButtonRender from './ButtonRender';

import {useTheme} from "@material-ui/styles";
import useStyles from "./useStyles";
import smileSvg from '../../assets/svgs/smile.svg';

import {textEditor} from '../../config';




const TextEditor = ({callback,value='',info,placeholder='Напишите что-нибудь...', ...res}) => {


    const [text]                        = useState(value);
    const [textToSend, setTextToSend]   = useState(value);
    const [textCount, setTextCount]     = useState(0);

    const {actionButtons,settingBtm,settingBtmList} = textEditor;


    const textEditorAction = e =>{

        const {target} = e || false;
        const {innerHTML,innerText} = target || false;

        let count = innerText.length;

        setTextCount(count);
        setTextToSend({html:innerHTML,text:innerText});

    };


    const handleClickAction = id => e =>{

        const {id:action,command,color,size,font,tag} = e || false;
        let val;




        switch (action || 'none') {

            case 'send':
             return    callback({id,action,value:textToSend});

            case 'font size':
                val = size;
                break;


            case 'font':
                val = font;
                break;

            case 'back color':
            case 'highlighter':
            case 'font color':
                val = color;
                break;


            case 'code':
                val = tag;
                break;


            default:
                val = false;
                break;
        }

        if(command){
            document.execCommand("styleWithCSS", true, null);
            document.execCommand(command, false, val);
        }

        return false;

    };



    const theme = useTheme();
    const classes = useStyles();

    return (<Paper className={classes.paper}>

        <Box className={classes.buttonsBlock} >
            <Box className={`${classes.buttonsListAction} ${classes.textCount}`} >
             {textCount}
            </Box>
            <Box className={classes.buttonsListSetting} >
                <IconButton
                    aria-label="delete"
                    className={classes.smileBtm}
                    onClick={handleClickAction(`smile`)}>
                    <img src={smileSvg} width={20} height={`auto`} alt={`pic`}/>
                </IconButton>
            </Box>
        </Box>

               <div
                   contentEditable="true"
                   className={classes.textarea}
                   onInput={textEditorAction}
                   onBlur={textEditorAction}
                   dangerouslySetInnerHTML={{__html: text}}
                   {...{placeholder}}
               />

        <Box className={classes.info} >
            {
                info
            }
        </Box>

        <Box className={classes.line} />

        <Box className={classes.buttonsBlock} >


            <ButtonRender
                items={actionButtons}
                className={`${classes.buttonsListAction} ${classes.buttonsList}`}
                callback={handleClickAction(`action`)}
            />

            <ButtonRender
                items={settingBtm}
                sendBtm={settingBtmList}
                className={`${classes.buttonsListSetting} ${classes.buttonsList}`}
                callback={handleClickAction(`setting`)}
            />

        </Box>

            </Paper>);
};

TextEditor.prototype = {
    value:PropTypes.string,
    info:PropTypes.string,
    placeholder:PropTypes.string,
    callback: PropTypes.func
};


export default TextEditor;