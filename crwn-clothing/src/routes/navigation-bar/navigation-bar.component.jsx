import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from "../../context/user.context";
import { SignOutUser } from "../../utils/firebase/firebase.utils";
import './navigation-bar.styles.scss';

const NavigationBar = () => {
    const { currentUser } = useContext(UserContext);
  
    return (
        <Fragment>
            <div className="navigation-bar">
                <Link className="navigation-bar_logo-container" to='/'>
                    <CrwnLogo className="logo" />
                </Link>
                <div className="navigation-bar_list-container">
                    <Link className="navigation-bar_list-container-link" to='/shop'>
                        SHOP
                    </Link>
                    <Link className="navigation-bar_list-container-link" to='/about'>
                        ABOUT
                    </Link>
                    {
                        currentUser ? 
                        <Link className="navigation-bar_list-container-link" onClick={SignOutUser} to='/'>
                            SIGN OUT
                        </Link> :
                        <Link className="navigation-bar_list-container-link" to='/sign-in'>
                            SIGN IN
                        </Link>
                    }
                </div>
            </div>
            <Outlet/>
        </Fragment>        
    );
};

export default NavigationBar
