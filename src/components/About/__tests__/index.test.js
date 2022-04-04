import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// configure the testing environment - call the cleanup function using global afterEach
afterEach(cleanup);

// to declare the compoenet we're testing
describe('About component', () => {
    // renders About test
    // First test - test file About directory using it() function

    it('renders', () => {
        render( < About /> );
    });

    // Second test - TEST CASE - create test to compare snapshots of the DOM
    it('matches sanpshot DOM node structure', () => {
        // renders About 
        const { asFragment } = render( < About /> );
        expect(asFragment()).toMatchSnapshot();
    })
})