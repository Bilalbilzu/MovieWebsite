import React from 'react';
import styles from '../Header/Header.module.css';

class Header extends React.Component{

  render(){

    return(
      <div className={styles.Card}><h1 className={styles.headText}>Welcome To Movie Hub</h1>
      <p className={styles.headP}>Your Seacrh Ends here!!!</p> </div>
    )
  }

}
export default Header;