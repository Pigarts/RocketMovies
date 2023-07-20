import { Container, Content } from "./styles"
import { Header } from "../../componnents/header"
import { FullNote } from "../../componnents/fullNote"
import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { api } from "../../services/api"


export function Movie() {
    const [data, setData] = useState({})
    const params = useParams()
    useEffect(() => {
        async function fetchNotes() {
          const response = await api.get(`notes/${params.id}`)
          setData(response.data);
        }
        fetchNotes()
      }, [])
      
      console.log(data)

    return(
    <Container>
    <Header/>
        <Content>
            <Link to="/"> voltar</Link>

            <FullNote data={data} />
        </Content>
    </Container>
  );
}