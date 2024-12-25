import React from 'react';
import Search from './Home/Search/Search';
import Footer from './Footer';


const Home = () => {
  return (
    <div>
      <Search />
      <Footer/>

      {/* mudar a logo, tirar o texto, deixar só a pata pra quando a pessoa rolar a pagina o menu ser reduzido apenas a pata e mudar a altura da linha na frase da primeira pagina */}
    </div>
  )
}

export default Home;
