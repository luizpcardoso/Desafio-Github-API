import { Container } from "./style";
import Logo from "../../images/Logotype.svg"
import { IoSearch } from "react-icons/io5";
import { useResults } from "../../providers/Results";
import { useState } from "react";
import { useHistory } from "react-router";



export const Header = () => {

    const [inputSearch, setInputSearch] = useState("")
    const { resultsSearch } = useResults()
    const history = useHistory()

    const clickSearch = () => {
        resultsSearch(inputSearch)
        history.push("/results")

    }


    return (
        <Container>
            <img src={Logo} alt="logo" className="logo" onClick={() => { history.push("/") }}></img>
            <div className="input__Container">
                <input placeholder="Pesquisar" onChange={(e) => { setInputSearch(e.target.value) }}></input>
                <button onClick={() => { clickSearch() }}><IoSearch /></button>
            </div>

        </Container>
    )
}