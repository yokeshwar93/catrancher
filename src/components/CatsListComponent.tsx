import React from "react";
import {makeStyles} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {CatsList, CatsListProps} from "../models/modelTypes";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '1%',
        marginLeft: '2%'
    },
    paper: {
        height: '95%',
        width: '80%',
        cursor: 'pointer',
        borderRadius: '15px',

    },
    selected: {
        background: 'lightgray'
    },
    control: {
        padding: theme.spacing(2),
    },
    gridContainerStyle: {
        height: '25vh',
        width: '10vw'
    },
    imageStyle: {
        height: '95%',
        width: '95%',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block'
    }
}));



const CatsListComponent = (props : CatsListProps) => {
    const classes = useStyles();
    const { catsList, selectedCats, handleOnCatSelect } = props;

    const isCatSelected = (catId : string) : boolean => {
        return selectedCats.findIndex(data => data.id === catId) !== -1
    }
    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                {[0, 4, 8].map(value => (
                    <Grid container key={`${value}`} justifyContent="center" spacing={3}>
                        {catsList.slice(value, value +4).map((cat : CatsList) => (
                            <Grid className={classes.gridContainerStyle} key={cat.id} item>
                                <Paper onClick={() => handleOnCatSelect(cat.id, cat.imageUrl)} className={`${classes.paper} ${isCatSelected(cat.id) ? classes.selected : ''}`} elevation={0} >
                                    <img className={classes.imageStyle} src={cat.imageUrl} alt={`Cat image_${cat.id}`} />
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                ))
                }
            </Grid>
        </Grid>
    )
}

export default CatsListComponent;
