import { JobExperienceItem } from "../components/job/JobExperienceItem";
import RegularList from "../components/RegularList";
import Stack from "../components/tech-stack/Stack";

function LandingPage() {
    return (
        <>
            <article>
                <h2>Hello world!</h2>
            </article>
            <article>
                <RegularList
                    items={stack}
                    resourceName="stack"
                    itemComponent={Stack}
                />
            </article>
            <article>
                <RegularList
                    items={jobExperience}
                    resourceName="job"
                    itemComponent={JobExperienceItem}
                />
            </article>
        </>
    );
}

export default LandingPage;

export const stack = [
    {
        tech: "Angular 2+",
        years: "3+",
        exp: "Intermediate - Advance",
    },
    {
        tech: "NestJs",
        years: "3+",
        exp: "Intermediate - Advance",
    },
    {
        tech: "Docker",
        years: "2+",
        exp: "Intermediate",
    },
];
export const jobExperience = [
    {
        title: "Full-Stack Developer",
        fromDate: "2019",
        toDate: "2020",
        description: "",
        companyName: "Smartraining Chile",
    },
    {
        title: "Full-Stack MEAN Developer",
        fromDate: "2017",
        toDate: "2019",
        description: "",
        companyName: "R1 Consulting Group",
    },
];
