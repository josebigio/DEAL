import { GoogleLogin, GoogleLogout } from "react-google-login";
import { connect } from 'react-redux';
import { signIn, signOut } from "../../redux/user";

const CLIENT_ID = "130250325381-7860c3nvmvs4nvrdmrtt9a5otp15ss92.apps.googleusercontent.com"

function GoogleLoginComponent(props) {



    // Success Handler
    function responseGoogleSuccess(response){
        console.log(response);
        let userInfo = {
            name: response.profileObj.name,
            emailId: response.profileObj.email,
        };
        props.signIn(userInfo, response.tokenId)
    };

    // Error Handler
    function responseGoogleError(response) {
        console.log(response);
        props.signOut()
        
    };

    // Logout Session and Update State
    function logout(response){
        console.log(response);
        props.signOut();
    };

    console.log("GoogleLoginComponent. props:", props)

    return (
        <div className="row mt-5">
            <div className="col-md-12">
                {props.isSignedIn ? (
                    <div>
                        <h1>Welcome, {props.userInfo.name}</h1>

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
                        onFailure={(error)=>console.log("Unable to init googleLogin", error)}
                        cookiePolicy={"single_host_origin"}
                        isSignedIn={true}
                    />
                )}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
      userInfo: state.user.userInfo,
      isSignedIn: state.user.isSignedIn
    }
  }


const mapDispatchToProps = {
    signIn: signIn,
    signOut: signOut
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleLoginComponent);