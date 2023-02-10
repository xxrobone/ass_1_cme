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
import { Modal } from './components/modal/Modal';

const colors = ['#ff6340', '#ffc130', '#1e847f', '#7a2048']


const ModalContent = () => (
  <div className='modal_content'>
   {itemData.map((item, i) => {
                 return (
                   <>
                    <Article
                     {...item}
                     key={item.id}
                   />
                   </>
                 );               
             })}
  </div>
);

      
function App() {

 const [articleTitle, setArticleTitle] = useState('');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  
  const prevBtn = () => {
    if (currentIdx > 0) {
      setCurrentIdx((currNum) => currNum - 1);
    } else {
      setCurrentIdx(itemData.length - 1)
    }
  }

  const nextBtn = () => {
    if (currentIdx < itemData.length - 1) {
      setCurrentIdx((currNum) => currNum + 1);
    } else {
      setCurrentIdx(0)
    }
  }

  /* Had some issues fixing this, but the teacher provided a video and I found the sollutions */
  /* lama dev https://www.youtube.com/watch?v=Fhu5cu864ag  */
  useEffect(() => {
    console.count('effect run')
    if (!itemData) {
      return
            
    } else {
      setArticleTitle(itemData[`${currentIdx}`].title)
    }
  }, [currentIdx])

 /*  console.log(currentIdx); */
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
              <h3 className='title' style={{backgroundColor: colors[currentIdx]}}>{articleTitle}</h3>
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
                  } else {
                    return
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
                {/* Button to show all articles, dont know if im doing this right */}
                <Button variant='default' onClick={() => (modalOpen ? close() : open())}>
                  Show All
                </Button>
             <Button
               variant='default'
               onClick={() => nextBtn()}
             >
               Next
             </Button>
              </div>
              
              {modalOpen && (
                <Modal
                modalOpen={modalOpen}
                handleClose={close}
                content={<ModalContent />
                }>                
                </Modal>
              )}
          
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

