export interface CatsList {
    id: string,
    imageUrl: string,
}

export interface Cat {
    id: string;
    stripes: string ;
    color: string;
    shape: string;
    eyes: string,
    imageUrl: string;
}

export interface Clowder {
    [key: string]: Array<Cat>;
}
export interface CatRancher {
    catsList: Array<CatsList>;
    selectedCats: Array<Cat>;
    clowders: Clowder;
    isFetchingCatsList: boolean;
    clowdersFound: number;

}

export interface values {
    titleClass: string;
    messageClass: string;
    titleText: string,
    messageText: string,
    isSuccess: boolean,
    buttonText: string,
}

export interface CatsListProps {
    catsList: Array<CatsList>,
    handleOnCatSelect: any,
    selectedCats: Cat[]
}

export interface clowderProps {
    clowders: Clowder;
}

export interface DialogProps {
    openDialog: boolean;
    feedback: values;
    handleClose: any;
}