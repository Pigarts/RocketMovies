import {Container} from "./styles"

export function TextButton({ title, isActive = false, icon: Icon, loading = false, ...rest }) {
    return (
        <Container  
        type="button"
        isActive={isActive}
        {...rest}>
            {Icon && <Icon size={20}/>}
            {loading ? `carregando...` : title}
        </Container>
    )
}