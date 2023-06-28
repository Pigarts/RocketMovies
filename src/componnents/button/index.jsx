import { Container } from "./styles";

export function Button({title, icon: Icon, loading = false}) {
    return(
    <Container 
    type="button"
    disabled = {loading}
    >
    {Icon && <Icon size={20}/>}
    {loading ? `carregandp...` : title}
   </Container>
    )
}
