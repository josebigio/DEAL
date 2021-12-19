import GoogleLoginComponent from "../components/auth/GoogleLoginComponent"
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

function Signin() {
    
    return (
    <section>
       <GoogleLoginComponent />
    </section>)
}

export default withAuthenticationRequired(Signin);