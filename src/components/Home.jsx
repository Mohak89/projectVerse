import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
import ShareButton from "./ShareButton";
import Modal from "./Modal/Modal";
import { useState } from "react";

const Home = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    console.log(user, isAuthenticated, isLoading)
    const [isModalOpen,setModal] = useState(false)
    
    return (
        <>
        <button onClick={()=>setModal(true)}>Click me</button>
        <Modal isOpen={isModalOpen} setModalState={() => setModal(false)}>
            Helllooo
        </Modal>
        </>
    );
}

export default Home;