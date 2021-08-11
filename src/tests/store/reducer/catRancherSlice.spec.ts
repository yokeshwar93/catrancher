import catRancherReducer, { CatRancher, updateCatsList,
    updateSelectedCats, updateClowders, updateClowdersCount } from "../../../store/reducers/catRancherSlice";
import {mockCatsList, mockClowder, mockClowdersCount, mockInitialState, mockSelectedCats} from "./mockData";


describe('Catrancher reducer', () => {
    const initialState: CatRancher = mockInitialState

    it('should return initial state', () => {
        expect(catRancherReducer(undefined, { type: 'unknown'})).toEqual({
            catsList: [],
            selectedCats: [],
            isFetchingCatsList: true,
            clowders: {
                1: [],
                2: [],
                3: [],
                4: [],
            },
            clowdersFound: 0
        })
    })

    it('should handle update catslist', () => {
        const actual = catRancherReducer(initialState, updateCatsList(mockCatsList));
        expect(actual.catsList).toEqual(mockCatsList);
        expect(actual.isFetchingCatsList).toEqual(false)
    })

    it('should handle update SelectedCats', () => {
        const actual = catRancherReducer(initialState, updateSelectedCats(mockSelectedCats));
        expect(actual.selectedCats).toEqual(mockSelectedCats)
    })

    it('should handle update Clowders', () => {
        const actual = catRancherReducer(initialState, updateClowders(mockClowder));
        expect(actual.clowders).toEqual(mockClowder)
    })

    it('should handle update ClowdersCount', () => {
        const actual = catRancherReducer(initialState, updateClowdersCount(mockClowdersCount));
        expect(actual.clowdersFound).toEqual(mockClowdersCount)
    })
})