import{ Container } from "./styles.js"

export function TextBox({ value ,...rest}) {
    return (
        <Container {...rest}>
            
            
            {value}
        </Container>
    )
}