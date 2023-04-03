// import { Container } from "postcss";
import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-area: main;
    grid-template-areas: "aside body";

    @media only screen and (max-width: 768px) and (orientation: portrait) {
        grid-template-areas:
            "aside"
            "body";
    }
`;
const Pane = styled.div`
    flex: ${(props) => props.weight};
    grid-area: ${(props) => props.area};
`;

function SplitScreen({ children, leftWeight = 1, rightWeight = 1 }) {
    const [left, right] = children;
    return (
        <Container>
            <Pane area={"aside"} weight={leftWeight}>
                {left}
            </Pane>
            <Pane area={"body"} weight={rightWeight}>
                {right}
            </Pane>
        </Container>
    );
}

export default SplitScreen;
