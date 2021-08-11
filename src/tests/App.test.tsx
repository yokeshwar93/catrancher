import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import App from '../App';

describe('renders loader by default', () => {

    it('render loader with initial store', () => {
        const { getByText } = render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        expect(getByText(/Hang tight! Your cats are on their way/i)).toBeInTheDocument();
    })

});
