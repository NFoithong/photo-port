import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from "..";

afterEach(cleanup);

describe('Contact component renders', ()=>{
    it('renders', ()=>{
        render(<Contact />)
    });

    it('render', ()=>{
        const { asFragment } = render(<Contact />)
        expect(asFragment).toMatchSnapshot()
    })
})

it('renders', ()=>{
    const { getByTextId } = render(<Contact />)
    expect(getByTextId('h1tag')).toHaveTextContent('Contact me')
})

it('render', ()=>{
    const { getByTextId } = render(<Contact />)
    expect(getByTextId('button')).toHaveTextContent('Submit')
})