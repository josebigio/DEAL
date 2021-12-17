import MainNavigation from "./MainNavigation";
import AuthNav from "../auth/auth-nav";

import classes from './Layout.module.css'

export default function Layout(props) {
    return (
        <div>
            <MainNavigation/>
            <AuthNav/>
            <main className={classes.main}>
                {props.children}
            </main>
        </div>
    )
}