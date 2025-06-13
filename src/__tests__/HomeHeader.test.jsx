import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomeHeader from '../components/HomeHeader';

describe('HomeHeader Component', () => {
  it('renders the header with correct elements', () => {
    render(
      <BrowserRouter>
        <HomeHeader />
      </BrowserRouter>
    );
    
    // Check for brand name
    expect(screen.getByText('E-COMMERCE')).toBeInTheDocument();
    
    // Check for navigation links
    expect(screen.getByText('HOME')).toBeInTheDocument();
    expect(screen.getByText('PRODUK')).toBeInTheDocument();
    
    // Check for user information
    expect(screen.getByText('Aji Sukmo')).toBeInTheDocument();
    
    // Check for dropdown items
    // expect(screen.getByText('Profile')).toBeInTheDocument();
    // expect(screen.getByText('Logout')).toBeInTheDocument();
  });
});