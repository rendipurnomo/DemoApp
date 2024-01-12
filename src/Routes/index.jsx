import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../components/Layout';
import {
  Blog,
  Cart,
  Checkout,
  Home,
  Login,
  NotFound,
  ProductDetail,
  Profile,
  Shop,
  SignUp,
} from '../pages';
import { ThemeProvider } from '../components/DarkMode/theme-provider';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'shop/:id',
        element: <ProductDetail />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'news',
        element: <Blog />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

const Routes = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default Routes;
