import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from "../../context/user.context";
import { SignOutUser } from "../../utils/firebase/firebase.utils";
import './navigation-bar.styles.scss';

const NavigationBar = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const signOutHandler = async() => {
        await SignOutUser();
        setCurrentUser(null);
    } 

    // TODO: remove console.log()
    console.log(currentUser);
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
                        <Link className="navigation-bar_list-container-link" onClick={signOutHandler} to='/'>
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
