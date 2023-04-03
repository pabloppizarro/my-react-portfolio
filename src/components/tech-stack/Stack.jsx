function Stack({ stack }) {
    const { tech, years, exp } = stack;

    return (
        <>
            <h3>Tech: {tech}</h3>
            <small>{years}y</small>
            <p>Exp: {exp}</p>
        </>
    );
}

export default Stack;
