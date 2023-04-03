// import { Container } from "postcss";
import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-area: main;
    grid-template-areas: "aside body";
    grid-template-columns: ${({ weight }) => weight};
    @media only screen and (max-width: 768px) and (orientation: portrait) {
        grid-template-areas:
            "aside"
            "body";

        grid-template-columns: 1fr;
    }
`;
const Pane = styled.div`
    flex: ${(props) => props.weight};
    grid-area: ${(props) => props.area};
`;

function SplitScreen({ weight, children }) {
    const [left, right] = children;

    const fr = weight.reduce((acc, val) => {
        acc += `${val} `;
        return acc;
    }, "");
    return (
        <Container weight={fr}>
            <Pane area={"aside"}>{left}</Pane>
            <Pane area={"body"}>{right}</Pane>
        </Container>
    );
}

export default SplitScreen;
