import { useAuth0 } from "@auth0/auth0-react";
import Modal from "./Modal/Modal";
import { useState } from "react";
import ShareContainer from "./ShareContainer/ShareContainer";

const Home = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    console.log(user, isAuthenticated, isLoading)
    const [isModalOpen,setModal] = useState(false)
    
    return (
        <>
        <button onClick={()=>setModal(true)}>Click me</button>
        {/* <Modal isMobile={true} isOpen={isModalOpen} setModalState={() => setModal(false)}>
        <ShareContainer/>
        </Modal> */}
        </>
    );
}

export default Home;