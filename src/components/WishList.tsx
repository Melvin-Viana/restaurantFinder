import React from 'react';
import Box from "@material-ui/core/Box";
interface Props {
    wishlist: Object[]
}
const WishList: React.FC<Props> = ({wishlist}) => {
    
    return (<Box margin={1}>{wishlist.map(restaurant => <h3 style={{paddingTop:'.3em'}}>{restaurant}</h3>)}</Box>)
};
export default WishList