import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils'
import Board from './board'
import { render, Simulate, prettyDOM } from 'react-testing-library';

describe('testing total number of buttons', () => {
    test('board renders', () => {
        const root = document.createElement('div');
        ReactDOM.render(<Board />, root);    
        expect(root.querySelectorAll('button').length).toBe(25);
  });

  test('value of button renders', () => {
    const root = document.createElement('div');
    ReactDOM.render(<Board />, root);    
    expect(root.querySelectorAll('button')[0].value).toBe('0');
})
})