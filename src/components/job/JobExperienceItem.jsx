export const JobExperienceItem = ({ job }) => {
    const { title, companyName, description } = job;

    return (
        <>
            <h3>{title}</h3>
            <p>
                <strong>{companyName}</strong>
            </p>
            <p>{description}</p>
        </>
    );
};
