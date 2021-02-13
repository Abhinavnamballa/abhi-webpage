import React, {Fragment, useEffect, useState, useRef} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Sticky from './sticky';

const Header = (props) => {
    const [isSticky, setSticky] = useState(false);
    const ref = useRef(null);
    const handleScroll = () => {
      if (ref.current) {
        setSticky(window.pageYOffset != 0);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', () => handleScroll);
      };
    }, []);
    return(
        <div className="Header">
        <Fragment>
        <div className={`sticky-wrapper${isSticky ? ' sticky' : ' notsticky'}`} ref={ref}>
          <Sticky />
        </div>
        <p></p>
      </Fragment>
      </div>
    )
}

export default Header;