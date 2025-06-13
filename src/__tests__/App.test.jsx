import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

// Mock the components used in App.jsx
vi.mock('../pages/HomePage', () => ({
  default: () => <div data-testid="mock-homepage">HomePage Component</div>
}));

vi.mock('../pages/ProductDetail', () => ({
  default: () => <div data-testid="mock-product-detail">ProductDetail Component</div>
}));

vi.mock('../pages/ProfilePage', () => ({
  default: () => <div data-testid="mock-profile-page">ProfilePage Component</div>
}));

vi.mock('../pages/Productpage', () => ({
  default: () => <div data-testid="mock-product-page">ProductPage Component</div>
}));

vi.mock('../pages/Checkout', () => ({
  default: () => <div data-testid="mock-checkout">Checkout Component</div>
}));

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByTestId('mock-homepage')).toBeInTheDocument();
  });
});