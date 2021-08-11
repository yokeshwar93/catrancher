import React from 'react';
import { render } from '@testing-library/react';
import { mockStore } from "../store/reducer/mockData";
import CatsListComponent from "../../components/CatsListComponent";

describe('renders Catslist component', () => {

    it('render first grid with cats image', () => {
        const { container } = render(
                <CatsListComponent catsList={mockStore.catsList} handleOnCatSelect={jest.fn()} selectedCats={mockStore.selectedCats} />
        );
        expect(container).toMatchSnapshot();

    })

});
