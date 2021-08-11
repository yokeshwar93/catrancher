import React from 'react';
import { render } from '@testing-library/react';
import AppContainer from "../../containers/AppContainer";
import {Provider} from "react-redux";
import { store } from '../../app/store';

describe('renders app container ', () => {

    it('render app container which takes care of all the business logic', () => {
        const { container } = render(
            <Provider store={store}>
            <AppContainer />
            </Provider>
        );
        expect(container).toMatchSnapshot();

    })

});
