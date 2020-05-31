import React from "react"
import Template from "../components/all/Template";
import AddIcon from "@material-ui/icons/Add";
import Button from "../components/material-kit-components/CustomButtons/Button.js";
import {MetaData, CustomButton, Title, ResourcesList, ResourcesFeatured} from "../components";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = () => ({
    addNewButton:{
        boxShadow:"none",
        fontSize: 15,
        marginLeft:'auto',
        marginRight:'auto'
    },
    description:{
        position: 'absolute',
        width: '773px',
        height: '60px',
        left: '333px',
        top: '169px',

        /* Desktop/Body */

        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '30px',

        color: '#000000'
    }
});

// Hi michelle! Testing

export default function Resources() {
    const classes = useStyles();
    return (
        <Template active={'resources'}>
            <MetaData title={'Resources'}/>
          <Title color={'blue'}>Resources</Title><br/>
            <div className={classes.description} style={{textAlign: 'center'}}>
                We have consolidated the following resources to help you navigate these uncertain times!
            </div><br/><br/>

            <ResourcesFeatured />

            <br/><br/>
            <div style={{textAlign:'center'}}>
              <CustomButton text={"ADD NEW RESOURCES"} href={"https://forms.gle/WWjyroMcnMsyp7Lv9"}
                            color={"orange"} size={"large"} style={{marginTop: 10, marginBottom: 25}}/>
            </div>
            <ResourcesList />
        </Template>
    );
}
