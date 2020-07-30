import React from 'react';
import ListItem from '@material-ui/core/ListItem';
interface Props {
  businessData: {name:string};
}
const Restaurant: React.FC<Props> = ({ businessData }) => {
  return (<div style={{transition:'all 0.5s ease'}}>{businessData.name}</div>);
};

export default Restaurant;