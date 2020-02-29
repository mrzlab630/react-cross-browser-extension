/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630pw
 * Date: 22.11.2019
 * Time: 10:16
 * About:
 *
 */
import React from "react";

import alignCenterSvg from '../src/assets/svgs/align-center.svg';
import alignJustifySvg from '../src/assets/svgs/align-justify.svg';
import alignLeftSvg from '../src/assets/svgs/align-left.svg';
import alignRightSvg from '../src/assets/svgs/align-right.svg';

import underlineSvg from '../src/assets/svgs/underline.svg';
import italicSvg from '../src/assets/svgs/italic.svg';
import listOlSvg from '../src/assets/svgs/list-ol.svg';
import listUlSvg from  '../src/assets/svgs/list-ul.svg';
import boldSvg from '../src/assets/svgs/bold.svg';
import highlighterSvg from '../src/assets/svgs/highlighter.svg';
import fillDripSvg from '../src/assets/svgs/fill-drip.svg';
import codeSvg from '../src/assets/svgs/code.svg';
import horizontalRuleSvg from '../src/assets/svgs/horizontal-rule.svg';
import textSizeSvg from '../src/assets/svgs/text-size.svg';
import fontColorSvg from '../src/assets/svgs/font-color.svg';
import fontSvg from '../src/assets/svgs/font.svg';
import DeleteIco from "./assets/svgs/trash-alt.inline.svg";



const DB = {
                nameDb:'mrZLab630DBnotes',
                ver:2,
                storeName:'notes'
            };

const colorsList = ['#e06ec8','#26e014','#b30001','#ffeb1c','#ffffff','#000000','#0e0ee0','#81878e','#2b3e50'];
const fontList = ['Arial','Tahoma','Verdana'];
const fontSizeList = [
                        {action:1,name:'x-small',px:10},
                        {action:2,name:'small',px:13},
                        {action:3,name:'medium',px:16},
                        {action:4,name:'large',px:18},
                        {action:5,name:'x-large',px:24},
                        {action:6,name:'xx-large',px:33},
                        {action:7,name:'xxx-large',px:44}
                        ];
const   textEditor = {
    actionButtons:[
        {
            id:`align left`,
            ico:alignLeftSvg,
            name:'left',
            command:'justifyLeft',
            size:17
        },
        {
            id:`align justify`,
            ico:alignJustifySvg,
            name:'justify',
            command:'justifyFull',
            size:17
        },
        {
            id:`align right`,
            ico:alignRightSvg,
            name:'right',
            command:'justifyRight',
            size:17
        },
        {
            id:`align center`,
            ico:alignCenterSvg,
            name:'center',
            command:'justifyCenter',
            size:17
        },
        {
            id:`underline`,
            ico:underlineSvg,
            name:'underline',
            command:'underline',
            size:15
        },
        {
            id:`italic`,
            ico:italicSvg,
            name:'italic',
            command:'italic',
            size:10
        },
        {
            id:`list numeric`,
            ico:listOlSvg,
            name:'list numeric',
            command:'insertOrderedList',
            size:17
        },
        {
            id:`list dotted`,
            ico:listUlSvg,
            name:'list dotted',
            command:'insertUnorderedList',
            size:17
        },
        {
            id:`bold`,
            ico:boldSvg,
            name:'bold',
            command:'bold',
            size:15
        },
        {
            id:`font`,
            ico:fontSvg,
            name:'font',
            command:'fontName',
            list:{font:fontList},
            size:17
        },
        {
            id:`font size`,
            ico:textSizeSvg,
            name:'font size',
            command:'fontSize',
            list:{fontSize:fontSizeList},
            size:17
        },
        {
            id:`highlighter`,
            ico:highlighterSvg,
            name:'high lighter',
            command:'hiliteColor',
            list:{colors:colorsList},
            size:17
        },
        {
            id:`font color`,
            ico:fontColorSvg,
            name:'font color',
            command:'foreColor',
            list:{colors:colorsList},
            size:17
        },
        {
            id:`back color`,
            ico:fillDripSvg,
            name:'back color',
            command:'backColor',
            list:{colors:colorsList},
            size:17
        },
        {
            id:`horizontal line`,
            ico:horizontalRuleSvg,
            name:'horizontal line',
            command:'insertHorizontalRule',
            size:17
        },
        {
            id:`code`,
            ico:codeSvg,
            name:'code',
            command:'formatBlock',
            tag:'pre',
            size:17
        },
    ],
    settingBtm:[],
    settingBtmList:[{
        id:'add',
        name:'save'
    }]
};
const menuAction = [
                        {name:`delete`,ico:<DeleteIco width={20}/>}
                    ];

export  {
            DB,
            colorsList,
            fontList,
            fontSizeList,
            textEditor,
            menuAction
            };
