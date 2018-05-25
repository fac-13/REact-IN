import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils'
import Cell from './cell';
import { render, Simulate, prettyDOM } from 'react-testing-library';

describe('testing cell component', () => {
    test('button renders', () => {
        const root = document.createElement('div');
        ReactDOM.render(<Cell />, root);    
        expect(root.querySelector('button')).toBeTruthy()
    })
    
})