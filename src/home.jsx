import React from 'react';
import Header from './header';
import Banner from './banner';
import Search from './search';
import Footer from './footer';


const home = () => {
  return (
    <div>
      <Banner />
      <Search />
      <Footer/>
    </div>
  )
}

export default home
