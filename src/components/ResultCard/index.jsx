import { Container } from "./style";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import { MoreModal } from "../MoreModal";
import { useResults } from "../../providers/Results";


export const ResultCard = ({ user }) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { DetailForModal } = useResults()


    const click = () => {
        DetailForModal(user.login)
        handleOpen()


    }



    return (
        <>
            <Container>
                <img src={user.avatar_url}></img>
                <div className="details">
                    <h3>{user.login}</h3>
                    <a href={user.html_url}>{user.html_url}</a>
                    <p>Score: {user.score}</p>

                </div>
                <button onClick={click}>VER MAIS</button>

            </Container>
            <Modal
                open={open}
                onClose={handleClose}

            >
                <Box >
                    <MoreModal user={user} handleClose={handleClose} />
                </Box>
            </Modal>

        </>
    )
}

