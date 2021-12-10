import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useState, useContext} from 'react'
import UserContext from '../../store/user-context'
import { connect } from 'react-redux';
import { signIn, signOut } from "../../redux/user";

const CLIENT_ID = "130250325381-7860c3nvmvs4nvrdmrtt9a5otp15ss92.apps.googleusercontent.com"

function GoogleLoginComponent(props) {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userInfo, setUserInfo] = useState({
        name: "",
        emailId: "",
    })
    const userContext = useContext(UserContext)

    // Success Handler
    function responseGoogleSuccess(response){
        console.log(response);
        let userInfo = {
            name: response.profileObj.name,
            emailId: response.profileObj.email,
        };
        setIsLoggedIn(true)
        setUserInfo(userInfo)
        props.dispatch(signIn(userInfo))
        
    };

    // Error Handler
    function responseGoogleError(response) {
        console.log(response);
        setIsLoggedIn(false)
        setUserInfo({
            name: "",
            emailId: "",
        })
    };

    // Logout Session and Update State
    function logout(response){
        console.log(response);
        props.dispatch(signOut())
        setIsLoggedIn(false)
        setUserInfo({
            name: "",
            emailId: "",
        })
    };

    return (
        <div className="row mt-5">
            <div className="col-md-12">
                {isLoggedIn ? (
                    <div>
                        <h1>Welcome, {userInfo.name}</h1>

                        <GoogleLogout
                            clientId={CLIENT_ID}
                            buttonText={"Logout"}
                            onLogoutSuccess={logout}
                        ></GoogleLogout>
                    </div>
                ) : (
                    <GoogleLogin
                        clientId={CLIENT_ID}
                        buttonText="Sign In with Google"
                        onSuccess={responseGoogleSuccess}
                        onFailure={responseGoogleError}
                        isSignedIn={true}
                        cookiePolicy={"single_host_origin"}
                    />
                )}
            </div>
        </div>
    );
}

export default connect()(GoogleLoginComponent);