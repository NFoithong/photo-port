import React from "react";
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..'

afterEach(cleanup);

const currentPhoto = {
    name: 'Grocery aisle',
    category: 'commercial',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
}

describe('Modal component', ()=>{
    it('renders', ()=>{
        // baseline render component test
        <Modal />
    })
    // snapshot test
    it('matches snapshot', ()=>{
        const { asFragment } = render(<Modal />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('Click event', ()=>{
    it('Calls onClose handler', ()=>{
        // Arrange: render Modal
        const { getByText } = render(<Modal 
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />);
        // Act: Simulate click event
        fireEvent.click(getByText('Close this modal'));
        // Assert: Expected matcher
        expect(mockToggleModal).toHaveTextContent(1);
    });
})