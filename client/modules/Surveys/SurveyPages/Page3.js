import React from 'react';
import { Button } from 'semantic-ui-react';
import styles from './pages.css';

export default class Page1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles['pages-container']}>
        <h3>And I can suggest some tips along the way!</h3>
      </div>
    );
  }
}
