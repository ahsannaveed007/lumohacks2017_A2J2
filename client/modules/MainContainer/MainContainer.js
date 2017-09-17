import React, { PropTypes } from 'react';
import NavBar from './NavBar';

const styles = {
  border: '1px solid black',
};

export default class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={styles}>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}
MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};