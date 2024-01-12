import React from 'react'
import { Link } from 'react-router-dom';
import Helmet from '../../components/Helmet';

const NotFound = () => {
  return (
    <Helmet title="Not Found">
      <div className='h-[50vh] justify-center items-center flex flex-col gap-4'>
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link className='px-4 py-2 bg-primary rounded-md' to="/">Go Home</Link>
      </div>
    </Helmet>
  )
}

export default NotFound