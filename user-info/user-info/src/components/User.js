import { Component } from 'react';
import classes from './User.module.css';

//class based component
class User extends Component{
  componentWillUnmount() {
    console.log("User will unmount ");
  }
  render() {
    return <li className={classes.user}>{this.props.name}</li>
  }
}

//functional compoenent
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
