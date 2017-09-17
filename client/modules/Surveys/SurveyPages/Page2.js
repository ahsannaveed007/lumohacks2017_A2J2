import React from 'react';
import { Button } from 'semantic-ui-react';
import styles from './pages.css';

const myStyles = {
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 150,
  },
  bodyText: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 2rem',
    marginTop: '2rem',
  },
};


export default class Page1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles['pages-container']}>
        <span style={myStyles.bodyText}>
          <h3>I'll keep track of how well you're doing.</h3>
        </span>
      </div>
    );
  }
}
