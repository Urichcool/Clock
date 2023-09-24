import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

interface IrenderWithProvider{
    component: React.ReactNode
}

const RenderWithProvider:FC<IrenderWithProvider> = ({component}) => {
    return (
        <Provider store={store}>
            {component}
        </Provider>
    );
}

export default RenderWithProvider;