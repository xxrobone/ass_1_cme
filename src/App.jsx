import React, { useState, useEffect } from 'react';

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

import articIMG1 from './assets/images/GW.png'
import articIMG2 from './assets/images/hoodie.png'


const Article1 = () => {
  return (
    <article>
      <h2>My coding journey</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id fugiat hic quod minima, cupiditate vitae nobis inventore tempore, possimus voluptatem ut incidunt eum. Repellat nisi sit hic. Adipisci, voluptatem quisquam recusandae et vero dolor ut iste vitae consequatur ad accusantium?</p>
      <img src={articIMG2} alt="" />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id fugiat hic quod minima, cupiditate vitae nobis inventore tempore, possimus voluptatem ut incidunt eum. Repellat nisi sit hic. Adipisci, voluptatem quisquam recusandae et vero dolor ut iste vitae consequatur ad accusantium?</p>
    </article>
  )
}

const Article2 = () => {
  return (
    <article>
      <h2>Article 2 tow you boo boo</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id fugiat hic quod minima, cupiditate vitae nobis inventore tempore, possimus voluptatem ut incidunt eum. Repellat nisi sit hic. Adipisci, voluptatem quisquam recusandae et vero dolor ut iste vitae consequatur ad accusantium?</p>
      <img src={articIMG1} alt="" />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id fugiat hic quod minima, cupiditate vitae nobis inventore tempore, possimus voluptatem ut incidunt eum. Repellat nisi sit hic. Adipisci, voluptatem quisquam recusandae et vero dolor ut iste vitae consequatur ad accusantium?</p>
    </article>
  )
}

function App() {
 /*  const [active, setActive] = useState('article1'); */
  const [currentIdx, setCurrentIdx] = useState(0);
/* 
  const onChangeHandler = () => {
    if (active === 'article1') {
     setActive('article1')
    }
    else {
      setActive('article2')
    }
    
  } */

  console.log(currentIdx);
  return (
    <div className='App'>
      <Header>
        <Logo />
        <Nav>
          {navData.map(({ title, href, cls, id }, i) => (
            <NavItem title={title} href={href} cls={cls} key={id} />
          ))}
        </Nav>
      </Header>
      <main>
        <Hero />
       {/*  <div className="cme">
          <Article1 className={`active ${getActiveClassName(active, 'article1')}`} />
          <Article2 className={`active ${getActiveClassName(active, 'article2')}`} />
          <Button variant='default' onClick={() => onChangeHandler}>Switch Article</Button>
        </div> */}
        <div className='content_wrapper'>
          {itemData.map((item, i) => {
            /* console.log(i); */

            if (currentIdx === i) {
              return (
                <Article
                  title={item.title}
                  img={item.img}
                  text={item.text}
                  link={item.link}
                  key={i}
                />
              );
            }
          })}
        </div>

        <div className='buttons'>
          <Button
            variant='default'
            onClick={() => {
              if (currentIdx > 0) {
                setCurrentIdx(currentIdx - 1);
              } else {
                setCurrentIdx(itemData.length - 1)
              }
            }}
          >
            Prev
          </Button>
         {/*  <Button variant="default" onClick={() => }>Show All</Button> */}
          <Button
            variant='default'
            onClick={() => {
              if (currentIdx < itemData.length - 1) {
                setCurrentIdx(currentIdx + 1);
              } else {
                setCurrentIdx(0)
              }
            }}
          >
            Next
          </Button>
        </div>
        {/*   <article>
          <h2>Title</h2>
          <div className='content'>
            <p>
             
            </p>
            <img src={img1} alt='' />
          </div>
        </article> */}
      </main>
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

