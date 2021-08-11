import React from 'react';
import { render } from '@testing-library/react';
import { mockFeedbackValue } from "../store/reducer/mockData";
import FeedbackDialogComponent from "../../components/FeedbackDialogComponent";

describe('renders feedback dialog', () => {

    it('render feedback dialog component', () => {
        const { container } = render(
            <FeedbackDialogComponent feedback={mockFeedbackValue} openDialog={true} handleClose={jest.fn()}  />
        );
        expect(container).toMatchSnapshot();

    })

});
