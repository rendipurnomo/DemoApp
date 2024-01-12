import React from 'react';
import Helmet from '../../components/Helmet';
import Hero from '../../components/Home/Hero';
import Rule from '../../components/Home/Rules';
import Categories from '../../components/Home/Category';
import { Separator } from '@/components/ui/separator';
// import Product from '../Products/product';

const Home = () => {
  return (
    <Helmet title="Home">
      <Hero />
      <Separator />
      <Rule />
      <Separator />
      <Categories />
      {/* <Product /> */}
    </Helmet>
  );
};

export default Home;
