import { motion } from 'framer-motion';
import './Backdrop.scss';


const Backdrop = ({ children, handleClose }) => {
  return (
   
    <motion.div
      className='backdrop'
      onClick={(e) => { e.stopPropagation(), handleClose }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0}}
    >
      {children}
      </motion.div>
     
  );
};

export default Backdrop;
