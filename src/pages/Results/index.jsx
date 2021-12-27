import { Container } from "./style";
import { Header } from "../../components/Header/index"
import { Footer } from "../../components/Footer/index"
import { useResults } from "../../providers/Results";
import { ResultCard } from "../../components/ResultCard";


export const Results = () => {

    const { results, Search } = useResults()

    return (
        <Container>
            <Header />
            <section>
                <div className="result__title">
                    <h2>Resultados para: {Search}</h2>
                </div>
                <div className="result__list">

                    {results.map((element) => {
                        return <ResultCard user={element} key={element.id} />

                    })}

                </div>

            </section>
            <Footer />
        </Container>

    )
}