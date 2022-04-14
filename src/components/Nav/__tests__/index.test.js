import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', ()=>{
    //baseline test
    it('renders', ()=>{
        render (<Nav />);
    });
    // snapshot test
    it('matches snapshot', ()=>{
        const { asFragment } = render(<Nav />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})

// Create a test for emoji visibility
describe('emoji is visible', ()=>{
    it('inserts emoji into the h2', ()=>{
        // Arrange
        const { getText } = render(<Nav />);
        // Assert
        expect(getText('camera')).toHaveTextContent('📸');
    });
})

// Create a test for link visibility
describe('links are visible', ()=>{
    it('inserts text into the links', ()=>{
        // Arrange
        const { getById } = render(<Nav />);
        //Assert
        expect(getById('link')).toHaveTextContent('Oh Snap!');
        expect(getById('about')).toHaveTextContent('About me');
    });
})