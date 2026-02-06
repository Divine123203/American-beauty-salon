// Fix: Added React import to resolve the 'Cannot find namespace React' error for React.ReactNode
import React from 'react';

export interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'haircare' | 'tools';
  price: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  // Fix: React.ReactNode is now valid due to the React import above
  icon: React.ReactNode;
}