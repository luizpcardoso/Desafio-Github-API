import { Container } from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import logoBig from "../../images/Logotype - Shadow.svg"



export const Home = () => {

    return (
        <Container>
            <Header />
            <section>
                <img src={logoBig} alt="logo"></img>
            </section>
            <Footer />
        </Container>
    )
}