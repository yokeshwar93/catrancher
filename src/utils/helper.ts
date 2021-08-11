import {Cat, CatsList, Clowder} from "../models/modelTypes";
import {catAttributes, color, dateFormat, eyes, shapes, stripes} from "./contants";
import {validClowder} from "../tests/store/reducer/mockData";

/**
 * Returns randomised list of cat ids and their image urls
 * @returns {Array<CatsList>}
 */
export const getCatsList = () : Array<CatsList> => {
    const catsList : Array<CatsList> = [];
    for(let i = 0; i < 12 ; i++) {
        const id = getRandomCatAttributes(catsList)
        catsList.push({
            id ,
            imageUrl: `http://quantcats.herokuapp.com/static/cats/${id}.png`
        })
    }
    return catsList;
}

/**
 * Returns random index for getting the cat attribute
 * @returns {number}
 */
const getRandomIndex = () : number => {
    return Math.floor(Math.random() * (2 - 0 + 1)) + 0
}

/**
 * Returns formatted date value for displaying in UI
 * @returns {string}
 */
export const dateFormatter = () : string => {
    return new Date().toLocaleDateString("en-US", dateFormat);
}


/**
 * Generates random and unique set of cat attributes
 * @param catsList
 * @returns {string}
 */
export const getRandomCatAttributes = (catsList: Array<CatsList>) : string => {
    const randomStripe : number = getRandomIndex();
    const randomColor : number = getRandomIndex();
    const randomShape : number = getRandomIndex();
    const randomEyes : number = getRandomIndex();
    const id = `${stripes[randomStripe]}${color[randomColor]}${shapes[randomShape]}${eyes[randomEyes]}`
    const doesExist : number = catsList.findIndex(data => data.id === id);
    if(doesExist !== -1) {
        return getRandomCatAttributes(catsList)
    }
    return id;
}

/**
 * Validates the selected cats to see if they would get along
 * @param selectedCats
 * @returns {boolean}
 */
export const validateSelectedClowder = (selectedCats : Array<Cat>) : boolean => {
    let flag = true;
    for(let i = 0 ; i< catAttributes.length; i++) {
        const attributeList : Array<string> = [];
        let attributeKey = catAttributes[i] as keyof typeof validClowder[0];
        selectedCats.forEach(cat => {
            const currentCat : string = cat[attributeKey]
            attributeList.push(currentCat)
        })

        const attributeLength = attributeList.filter(data => data === selectedCats[0][attributeKey]).length;

        if(attributeLength === 2) {
            flag = false;
            break;
        } else if (attributeLength === 1) {
            if(attributeList[1] === attributeList[2]) {
                flag = false;
                break;
            }
        }
    }

    return flag;
}

/**
 * Checks if the selected set of cats are already available in the clowder
 * @param clowders
 * @param existingCats
 * @returns {boolean}
 */
export const isDuplicateClowder = (clowders : Clowder, existingCats: Array<Cat>) : boolean => {
    let isExistingClowder = false;
    Object.values(clowders).forEach(clowder => {
        if(clowder.length > 0 && clowder.every(cat => existingCats.filter(data => data.id === cat.id).length > 0)) {
            isExistingClowder = true;
        }
    })
    return isExistingClowder;
}