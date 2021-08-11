import {CatsList} from "../../store/reducers/catRancherSlice";
import {
    dateFormatter,
    getCatsList,
    getRandomCatAttributes,
    isDuplicateClowder,
    validateSelectedClowder
} from "../../utils/helper";
import {dateFormat} from "../../utils/contants";
import {invalidClowder, invalidClowder1, mockClowder, validClowder} from "../store/reducer/mockData";

describe('helper functions', () => {

    it('getCatsList returns list of 12 cats with id and image url', () => {
        const catsList : Array<CatsList> = getCatsList();
        expect(catsList.length).toEqual(12);
    })

    it('dateFormatter returns formatted current date', () => {
        const expectedFormattedDate = new Date().toLocaleDateString("en-US", dateFormat);
        const actual = dateFormatter();
        expect(actual).toEqual(expectedFormattedDate);
    })

    it('getRandomCatAttributes returns a random id which shold be 4 digits', () => {
        const catId : string = getRandomCatAttributes([]);
        expect(catId.length).toEqual(4)
    })

    it('validateSelectedClowder validate selected cats if it forms a valid clowder valid case', () => {
        const valid : boolean = validateSelectedClowder(validClowder);
        expect(valid).toEqual(true)
    })

    it('validateSelectedClowder validate selected cats if it forms a valid clowder invalid case', () => {
        const valid : boolean = validateSelectedClowder(invalidClowder);
        expect(valid).toEqual(false)
    })

    it('validateSelectedClowder validate selected cats if it forms a valid clowder another invalid case', () => {
        const valid : boolean = validateSelectedClowder(invalidClowder1);
        expect(valid).toEqual(false)
    })

    it('isDuplicateClowder check if the select set is already present isDuplicate case', () => {
        const valid : boolean = isDuplicateClowder(mockClowder, validClowder);
        expect(valid).toEqual(true)
    })

    it('isDuplicateClowder check if the select set is already present not isDuplicate case', () => {
        const valid : boolean = isDuplicateClowder(mockClowder, invalidClowder1);
        expect(valid).toEqual(false)
    })
})