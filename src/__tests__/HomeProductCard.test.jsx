import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomeProductCard from '../components/HomeProductCard';
import products from '../data/products';

// Mock the products data
vi.mock('../data/products', () => {
  return {
    default: [
      {
        id: 1,
        name: "Nike Air Max 270",
        description: "Breathable mesh upper with responsive cushioning.",
        price: '700000',
        image: "https://example.com/image1.jpg"
      },
      {
        id: 2,
        name: "Adidas Ultraboost 22",
        description: "High-performance running shoes with Boost midsole.",
        price: '250000',
        image: "https://example.com/image2.jpg"
      },
      {
        id: 3,
        name: "Puma RS-X",
        description: "Bold, retro-inspired design with chunky sole.",
        price: '350000',
        image: "https://example.com/image3.jpg"
      },
      {
        id: 4,
        name: "New Balance 574",
        description: "Classic running silhouette with suede and mesh.",
        price: '450000',
        image: "https://example.com/image4.jpg"
      },
      {
        id: 5,
        name: "Asics Gel-Kayano 29",
        description: "Stability shoe with gel cushioning and FlyteFoam.",
        price: '550000',
        image: "https://example.com/image5.jpg"
      },
      {
        id: 6,
        name: "Converse Chuck Taylor All",
        description: "Iconic canvas high tops with rubber sole.",
        price: '950000',
        image: "https://example.com/image6.jpg"
      },
      {
        id: 7,
        name: "Vans Old Skool",
        description: "Classic skate shoes with durable suede uppers.",
        price: '550000',
        image: "https://example.com/image7.jpg"
      },
      {
        id: 8,
        name: "Reebok Club C 85",
        description: "Retro low-top sneaker with soft leather upper.",
        price: '550000',
        image: "https://example.com/image8.jpg"
      },
      {
        id: 9,
        name: "Test Product",
        description: "Test description",
        price: '100000',
        image: "https://example.com/image9.jpg"
      }
    ]
  };
});

describe('HomeProductCard Component', () => {
  beforeEach(() => {
    // Mock console.log to prevent it from cluttering test output
    vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  it('renders the product list with correct number of products per page', () => {
    render(
      <BrowserRouter>
        <HomeProductCard />
      </BrowserRouter>
    );
    
    // Check for title
    expect(screen.getByText('Product List')).toBeInTheDocument();
    
    // Check that we have 8 products on the first page (productsPerPage = 8)
    const detailButtons = screen.getAllByText('Detail');
    expect(detailButtons).toHaveLength(8);
    
    // Check for pagination
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('allows searching for products', () => {
    render(
      <BrowserRouter>
        <HomeProductCard />
      </BrowserRouter>
    );
    
    // Enter search term
    const searchInput = screen.getByPlaceholderText('Kata kunci...');
    fireEvent.change(searchInput, { target: { value: 'Nike' } });
    
    // Click search button
    const searchButton = screen.getByText('Cari');
    fireEvent.click(searchButton);
    
    // Check that Nike product is displayed
    expect(screen.getByText('Nike Air Max 270')).toBeInTheDocument();
  });

  it('resets search results when reset button is clicked', () => {
    render(
      <BrowserRouter>
        <HomeProductCard />
      </BrowserRouter>
    );
    
    // Enter search term and search
    const searchInput = screen.getByPlaceholderText('Kata kunci...');
    fireEvent.change(searchInput, { target: { value: 'Test' } });
    
    const searchButton = screen.getByText('Cari');
    fireEvent.click(searchButton);
    
    // Click reset button
    const resetButton = screen.getByText('Reset');
    fireEvent.click(resetButton);
    
    // Check that original products are displayed
    expect(screen.getByText('Nike Air Max 270')).toBeInTheDocument();
    expect(screen.getByText('Adidas Ultraboost 22')).toBeInTheDocument();
  });

  it('formats price correctly in rupiah', () => {
    render(
      <BrowserRouter>
        <HomeProductCard />
      </BrowserRouter>
    );
    
    // Check for formatted price (Rp700.000)
    expect(screen.getByText('Rp 700.000')).toBeInTheDocument();
  });

  it('handles pagination correctly', () => {
    render(
      <BrowserRouter>
        <HomeProductCard />
      </BrowserRouter>
    );
    
    // Click on page 2
    const page2Button = screen.getByText('2');
    fireEvent.click(page2Button);
    
    // Check that we have the 9th product on page 2
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    
    // Go back to page 1
    const page1Button = screen.getByText('1');
    fireEvent.click(page1Button);
    
    // Check that we have the first product on page 1
    expect(screen.getByText('Nike Air Max 270')).toBeInTheDocument();
  });
});