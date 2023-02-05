import React from 'react'
import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

import Backdrop from '../backdrop/Backdrop';
import './Modal.scss';

// using framer motion for this, with variants

const dropIn = {
    hidden: {
      y: '0',
      x: '-100vw',
      opacity: 0,
    },
    visible: {
      y: '0',
      x: '0',
      opacity: '1',
        transition: {
          delay: 0.3,
        duration: 0.4,
        ease: [0.17, 0.67, 0.83, 0.67],
        type: 'spring',
        damping: 50,
        stiffness: 200,
      },
    },
    exit: {
        x: '-100vw',
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

export const Modal = ({ handleClose, content }) => {
  return (
    <Backdrop handleClose={handleClose}>
    <motion.div
      drag
      /* onClick={(e) => e.stopPropagation()} */
      className='modal glass'
      variants={dropIn}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <button
        onClick={handleClose}
        className='modal_btn close_btn'
      >
        <FiX />
      </button>
      {content}
    </motion.div>
  </Backdrop>
  )
}
