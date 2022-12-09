import {screen} from '@testing-library/react';
import { describe, it , expect } from 'vitest';
import { renderWithProviders } from '../../test/utils/utils-for-test';



import Header from './Header'
describe('header',()=>{
    it('title',()=>{
        renderWithProviders(<Header />)
        const h1 = screen.getByText('Todo')
        expect(h1).toBeInTheDocument()
    })
})