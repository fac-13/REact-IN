import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils'
import Game from './game'
import { render, Simulate, prettyDOM } from 'react-testing-library';

describe('testing game component', () => {
    test('game renders', () => {
        const root = document.createElement('div');
        ReactDOM.render(<Game />, root);    
        expect(root.querySelectorAll('game-info')).toBeTruthy();
  });
})