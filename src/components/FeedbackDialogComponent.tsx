import React from "react";

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import {Button, makeStyles, Typography, withStyles} from "@material-ui/core";
import {DialogProps} from "../models/modelTypes";

const StyledDialog = withStyles({
    paper: {
        width: '50vw'
    }
})(Dialog);




const useStyles = makeStyles((theme) => ({
    title: {
        fontWeight: 'bold',
        fontSize: '2em'
    },
    message: {
        marginLeft: '4%',
        marginBottom: '5%'
    },

    container: {
        width: '20vw',
    },
    button: {
        borderRadius: '0px'
    },

}));

const FeedbackDialogComponent = (props : DialogProps) => {

    const classes = useStyles();

    const { openDialog, feedback, handleClose } = props;

    return (
        <StyledDialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={openDialog}>
            <DialogTitle className={`${classes.title} ${feedback.titleClass}`}>{feedback.titleText}</DialogTitle>
            <Typography className={`${classes.message} ${feedback.messageClass}`}>{feedback.messageText}</Typography>
            <Button onClick={handleClose} className={classes.button} variant={'contained'} color={feedback.isSuccess ? 'primary' : 'secondary'}>{feedback.buttonText}</Button>
        </StyledDialog>
    )
}

export default FeedbackDialogComponent;


