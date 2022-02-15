import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
import AboutInnovator from "./Projetcs/AboutInnovator";
import ShareButton from "./ShareButton";

const Home = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    console.log(user, isAuthenticated, isLoading)
    console.log("hellllll");
    return (
        <>
            <AboutInnovator />
        </>
    );
}

export default Home;