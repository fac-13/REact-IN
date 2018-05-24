import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils'
import Square from './square'
import { render, Simulate, prettyDOM } from 'react-testing-library';

describe('testing square component', () => {
    test('button renders', () => {
        const root = document.createElement('div');
        ReactDOM.render(<Square />, root);    
        expect(root.querySelector('button')).toBeTruthy()
    })
    
})