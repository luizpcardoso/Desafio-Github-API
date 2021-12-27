
import { Container } from "./style";
import { useResults } from "../../providers/Results";

export const MoreModal = ({ user, handleClose }) => {

    const { userDetail } = useResults()

    return (
        <Container>
            <section>

                <div className="imgContainer">
                    <img src={userDetail.avatar_url}></img>
                </div>
                <div className="modal__details">
                    <h3>{userDetail.name}</h3>
                    <div className="details__spaced">
                        <div className="details__content">
                            <div className="details__left">
                                <p className="details__title">Username:</p>
                                <p className="details__value">{userDetail.login}</p>
                            </div>
                            <div className="details__right">
                                <p className="details__title">Seguindo:</p>
                                <p className="details__value">{userDetail.following}</p>
                            </div>
                        </div>
                        <div className="details__content">
                            <div className="details__left">
                                <p className="details__title">Cadastrado(a):</p>
                                <p className="details__value">{userDetail.created_at}</p>
                            </div>
                            <div className="details__right">
                                <p className="details__title">Seguidores</p>
                                <p className="details__value">{userDetail.followers}</p>
                            </div>
                        </div>
                    </div>
                    <div className="details__url">
                        <p className="details__title">URL:</p>
                        <p className="details__value">{userDetail.html_url}</p>
                    </div>
                    <div className="details__close">
                        <button onClick={handleClose}>FECHAR</button>
                    </div>
                </div>
            </section>


        </Container>

    )
}