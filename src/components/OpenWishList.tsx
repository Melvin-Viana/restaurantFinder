import React, {useEffect} from 'react'
import Modal from '@material-ui/core/Modal';
import  Paper from '@material-ui/core/Paper';
import Box from "@material-ui/core/Box";
 
import WishList from './WishList';
import { CSSTransition } from 'react-transition-group'

interface Props {
  wishlist: Object[]
}

const OpenWishList: React.FC<Props> = ({wishlist}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    return (<div className='wishlist-button'>
        <button onClick={handleOpen}>See Wishlist</button>
        <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
        ><Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
      <Paper style={{height:'400px', maxWidth: '500px', width:'75%', overflowY:'scroll'}} variant="outlined" >
        <WishList wishlist ={wishlist}/>    
      </Paper>      
          </Box>
          
        </Modal>
    </div>);
};

export default OpenWishList
