import { describe, it, expect } from 'vitest';
import products from '../data/products';

describe('Products Data', () => {
  it('contains the correct number of products', () => {
    expect(products).toHaveLength(16);
  });

  it('has products with all required properties', () => {
    products.forEach(product => {
      expect(product).toHaveProperty('id');
      expect(product).toHaveProperty('name');
      expect(product).toHaveProperty('description');
      expect(product).toHaveProperty('price');
      expect(product).toHaveProperty('image');
    });
  });

  it('has unique product IDs', () => {
    const ids = products.map(product => product.id);
    const uniqueIds = [...new Set(ids)];
    expect(uniqueIds.length).toBe(products.length);
  });

  it('has valid price values', () => {
    products.forEach(product => {
      expect(typeof product.price).toBe('string');
      expect(parseInt(product.price)).toBeGreaterThan(0);
    });
  });

  it('has non-empty product names and descriptions', () => {
    products.forEach(product => {
      expect(product.name.trim()).not.toBe('');
      expect(product.description.trim()).not.toBe('');
    });
  });

  it('has valid image URLs', () => {
    products.forEach(product => {
      expect(product.image).toMatch(/^https?:\/\//);
    });
  });
});