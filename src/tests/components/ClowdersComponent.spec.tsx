import React from 'react';
import { render } from '@testing-library/react';
import { mockStore } from "../store/reducer/mockData";
import ClowdersComponent from "../../components/ClowdersComponent";

describe('renders selected clowder', () => {

    it('render second grid with valid clowders', () => {
        const { container } = render(
            <ClowdersComponent clowders={mockStore.clowders}  />
        );
        expect(container).toMatchSnapshot();

    })

});
