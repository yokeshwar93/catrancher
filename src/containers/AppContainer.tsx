import React, {useEffect, useState} from 'react';
import {makeStyles, Typography} from "@material-ui/core";
import {
    getSelectedCats,
    selectCatsList, selectClowders, selectFoundClowders,
    selectIsFetchingCatsList
} from "../store/reducers/catRancherSlice";
import {dateFormatter, getCatsList, validateSelectedClowder, isDuplicateClowder} from "../utils/helper";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import { updateCatsList, updateSelectedCats, updateClowders, updateClowdersCount } from '../store/reducers/catRancherSlice';
import CatsListComponent from "../components/CatsListComponent";
import ClowdersComponent from "../components/ClowdersComponent";
import FeedbackDialogComponent from "../components/FeedbackDialogComponent";
import loader from '../assets/loader.gif';

import {
    allClowdersFoundButtonText, failedButtonText,
    feedbackDuplicateMessage,
    feedbackFailedMessage,
    feedbackFailedTitle, feedbackFullClowderMessage,
    feedbackFullClowderTitle,
    feedbackSuccessMessage,
    feedbackSuccessTitle, successButtonText
} from "../utils/contants";
import {Cat, CatsList, Clowder, values} from "../models/modelTypes";


const useStyles = makeStyles((theme) => ({
    leftContainer: {
        width: '50vw',
        float: 'left',
        marginTop: '3%',

    },
    title: {
        fontSize: '4em',
        fontWeight: 'bold'
    },
    date: {
        color: 'grey'
    },
    rightContainer: {
        float: 'right',
        width: '45vw',
        marginTop: '15%',
        marginRight: '4%'
    },
    clowderTitle: {
        fontWeight: 'lighter'
    },
    loaderStyle: {
        width: '10vw',
        marginTop: '16%'
    },
    loaderText: {
        fontWeight: 'bold',
        fontSize: '2em'
    },
    feedbackTitleFailed: {
        color: 'red'
    },
    feedbackTitleSuccess: {
        color: 'green'
    },
    feedbackMessage: {
        marginLeft: '4%',
        marginBottom: '5%'
    },
    feedbackMessageSuccess: {
        marginLeft: '5%'
    },

}));


const AppContainer = () => {

    const dispatch = useAppDispatch();
    const classes = useStyles();
    const catsList : Array<CatsList> = useAppSelector(selectCatsList);
    const selectedCats : Array<Cat> = useAppSelector(getSelectedCats);
    const isFetchingCats : boolean = useAppSelector(selectIsFetchingCatsList);
    const clowders : Clowder = useAppSelector(selectClowders);
    const foundClowders: number = useAppSelector(selectFoundClowders);

    const [openDialog, setOpenDialog] = useState(false);
    const [feedbackStatus, setFeedbackStatus] = useState('')
    useEffect(() => {
        const catsList : Array<CatsList> = getCatsList();

        //Adding timeout to simulate showing of loader
        setTimeout(() => dispatch(updateCatsList(catsList)), 2000);
    },[])


    /**
     * Handler for selecting cats and validate to see if they form a valid clowder
     * @param catId
     * @param imageUrl
     * @returns {void}
     */
    const handleOnCatSelect = (catId : string, imageUrl : string) : void => {
        let existingCats : Array<Cat> = [...selectedCats];
        const existingIndex : number = existingCats.findIndex(data => data.id === catId);
        if(existingIndex !== -1) {
            existingCats = selectedCats.filter(cat => cat.id !== catId);
            dispatch(updateSelectedCats(existingCats));
        }
        else {
            existingCats.push({
                id: catId,
                stripes: catId[0],
                color: catId[1],
                shape: catId[2],
                eyes: catId[3],
                imageUrl: imageUrl
            })
            dispatch(updateSelectedCats(existingCats));
        }
        if(existingCats.length === 3) {
            const isExistingClowder : boolean = isDuplicateClowder(clowders, existingCats)
            if(isExistingClowder) {
                setFeedbackStatus('duplicateClowder')
            } else {
                const isValidClowder : boolean = validateSelectedClowder(existingCats)
                if(isValidClowder) {
                    const clowdersCount = foundClowders + 1;
                    dispatch(updateClowdersCount(foundClowders + 1))
                    dispatch(updateClowders({
                        ...clowders,
                        [clowdersCount]: existingCats
                    }))
                    if(clowdersCount === 4) {
                        setFeedbackStatus('fullClowder')
                    } else {
                        setFeedbackStatus('success')
                    }
                } else {
                    setFeedbackStatus('failed')
                }
            }
            setOpenDialog(true);
        }

    }

    /**
     * Handler for closing the feedback modal
     * @returns {void}
     */
    const onCloseDialogHandler = () : void => {
        setOpenDialog(false);
        dispatch(updateSelectedCats([]));
        if(foundClowders === 4) {
            dispatch(updateClowders({
                1: [],
                2: [],
                3: [],
                4: [],
            }));
            dispatch(updateClowdersCount(0));
        }
    }

    /**
     * Helper function for getting the values based on feedback status
     * @retuns {values}
     */
    const getValuesBasedOnStatus = () : values => {
        if(feedbackStatus === 'success') {
            return {
                titleClass: classes.feedbackTitleSuccess,
                messageClass: classes.feedbackMessageSuccess,
                titleText: feedbackSuccessTitle,
                messageText: feedbackSuccessMessage,
                isSuccess: true,
                buttonText: successButtonText
            }
        }
        else if (feedbackStatus === 'failed') {
            return {
                titleClass: classes.feedbackTitleFailed,
                messageClass: '',
                titleText: feedbackFailedTitle,
                messageText: feedbackFailedMessage,
                isSuccess: false,
                buttonText: failedButtonText
            }
        } else if (feedbackStatus === 'duplicateClowder') {
            return {
                titleClass: classes.feedbackTitleFailed,
                messageClass: '',
                titleText: feedbackFailedTitle,
                messageText: feedbackDuplicateMessage,
                isSuccess: false,
                buttonText: failedButtonText
            }
        } else if (feedbackStatus === 'fullClowder') {
            return {
                titleClass: classes.feedbackTitleSuccess,
                messageClass: '',
                titleText: feedbackFullClowderTitle,
                messageText: feedbackFullClowderMessage,
                isSuccess: true,
                buttonText: allClowdersFoundButtonText
            }
        }
        return {
            titleClass: '',
            messageClass: '',
            titleText: '',
            messageText: '',
            isSuccess: false,
            buttonText: ''
        }
    }

    const valuesBasedOnStatus = getValuesBasedOnStatus();

    return (
        <div>
            {isFetchingCats && <div>
                <img src={loader} alt={'loader'} className={classes.loaderStyle}/>
                <Typography className={classes.loaderText}>Hang tight! Your cats are on their way :)</Typography>
            </div>}

            { !isFetchingCats && catsList.length > 0 &&
            <>
            <div className={classes.leftContainer}>
                <Typography className={classes.title}>Catrancher</Typography>
                <Typography className={classes.date}>{dateFormatter()}</Typography>
                <CatsListComponent handleOnCatSelect={handleOnCatSelect} selectedCats={selectedCats} catsList={catsList} />

            </div>
            <div className={classes.rightContainer}>
                <Typography className={classes.clowderTitle}>Clowders Found</Typography>
                <ClowdersComponent clowders={clowders} />
            </div>
            <FeedbackDialogComponent handleClose={onCloseDialogHandler} openDialog={openDialog} feedback={valuesBasedOnStatus} />
            </>}
        </div>
    )
}

export default AppContainer;