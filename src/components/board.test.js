import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils'
import Board from './board'
import Square from './square'
import Game from './game'
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
    expect(root.querySelectorAll('button')[0].value).toBe("");
  });

  test('button changes content on click', () => {
    const root = document.createElement('div');
    ReactDOM.render(<Board />, root);    
    const buttonNode = root.querySelectorAll('button')[0];
    Simulate.click(buttonNode);
    expect(buttonNode.textContent).toBe("X");
  });

  test('the player changes on next click', () => {
    const root = document.createElement('div')
    ReactDOM.render(<Board />, root);    
    const buttonNode = root.querySelectorAll('button')[0];
    const statusNode = root.querySelectorAll('.status-line')[0];
    Simulate.click(buttonNode);
    expect(statusNode.textContent).toBe("Next player: O");
  });
  
})