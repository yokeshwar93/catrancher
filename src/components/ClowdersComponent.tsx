import React from 'react';
import {Grid, makeStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import {clowderProps} from "../models/modelTypes";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '1%'
    },
    paper: {
        height: '10vh',
        width: '5vw',
        border: '1px solid #0593cf',
        borderRadius: '0px'
    },
    imageStyle: {
        height: '95%',
        width: '95%',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block'
    }

}));

const ClowdersComponent = (props : clowderProps) => {
    const classes = useStyles();
    const { clowders } = props;

    return (

        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                {[1, 2, 3, 4].map((index : any) => (
                    <Grid container  key={index} justifyContent="center" spacing={0}>
                        {[0, 1, 2].map((value) => (
                            <Grid key={value} item>
                                <Paper className={classes.paper} elevation={0} >
                                    {clowders[index][value] &&
                                        <img className={classes.imageStyle}
                                             src={clowders[index][value].imageUrl}
                                             alt={`Cat image_${clowders[index][value].id}`}/>
                                    }
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default ClowdersComponent;