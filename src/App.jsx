import React, { useState, useEffect } from 'react';
import {Routes, Route } from 'react-router-dom'
import './App.scss';
import Header from './components/header/Header';
import Logo from './components/logo/Logo';
import Nav from './components/nav/Nav';
import { navData, itemData } from './assets/data';
import NavItem from './components/nav/NavItem';
import Footer from './components/footer/Footer';
import Article from './components/article/Article';
import Button from './components/button/Button';
import Hero from './components/hero/Hero';
import ImageBg from './components/article/imagebg/ImageBg';
import { About } from './pages/about/About';
import { Todo } from './pages/todo/Todo';



      
function App() {
/*  const [active, setActive] = useState(false); */
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevBtn = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    } else {
      setCurrentIdx(itemData.length - 1)
    }
  }

  const nextBtn = () => {
    if (currentIdx < itemData.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setCurrentIdx(0)
    }
  }

  console.log(currentIdx);
  return (
    <div className='App'>
      <Header>
        <Logo />
        <Nav>
          {navData.map(({ title, path, cls, id }) => (
            <NavItem title={title} path={path} cls={cls} key={id} />
          ))}
        </Nav>
      </Header>
      <Routes>
        <Route path='/' element={
          <>           
            <main>
           <Hero />
           <div className='content_wrapper'>
             {itemData.map((item, i) => {
               if (currentIdx === i) {
                 return (
                   <>
                     <ImageBg {...item} key={Math.random() * 1000 + i} />
                    <Article
                     {...item}
                     key={i + (Math.random() * 1000)}
                   />
                   </>
                 );
               }
             })}
           </div>
           <div className='buttons'>
             <Button
               variant='default'
               onClick={() => prevBtn()}
             >
               Prev
             </Button>
             <Button
               variant='default'
               onClick={() => nextBtn()}
             >
               Next
             </Button>
           </div>
          
           </main>
          </>

        }
      />
        <Route path='/about' element={<About/>} />
        <Route path='/todo' element={<Todo/>} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;

/* 
export const dataA = {
  title: 'title 1',
  img: img1,
  text: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur ducimus molestiae sapiente aspernatur ipsum quis ipsa odio enim perspiciatis ecusandae obcaecati praesentium official perferendis itaque inventore, voluptas doloribus laboriosam necessitatibus assumenda minima hic! Nemo molestiae sunt  consequatur quae, sapiente hic.',
}; */

