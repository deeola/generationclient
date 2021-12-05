import React  from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// Util imports
import {makeStyles} from '@material-ui/core/styles';
// Custom Components
import CardInput from './CardInput';

const useStyles = makeStyles({
  
  content: {
    // display: 'flex',
    // flexDirection: 'column',
    // alignContent: 'flex-start',
  },
  div: {
    // display: 'flex',
    // flexDirection: 'column',
    // alignContent: 'flex-start',
    // justifyContent: 'space-between',
  },
  button: {
    // margin: '2em auto 1em',
  },
});

const HomePayment = () => {
  const classes = useStyles();

  return (
    <Card >
      <CardContent >

        <CardInput />
      </CardContent>
    </Card>
  );
}

export default HomePayment;
