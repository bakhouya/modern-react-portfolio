
import Hero from "../sections/hero"
import Projects from "../sections/project";
import Certificate from "../sections/certificate";
import Skills from "../sections/skills";
import Services from "../sections/service";
import About from "../sections/about";
import ContactIndex from "../sections/media";
import { useTrack } from "../../providers/TrackProvider";


const Index = () => {
    const { content } = useTrack()
    return (
        <div>
            <Hero/>
            {content?.about && (<About title={content?.about_title} description={content?.about_description}/>)}

            {content?.skills && (<Skills title={content?.skill_title} description={content?.skill_description}/>)}
            {content?.project && (<Projects title={content?.project_title} description={content?.project_description}/>)}
            {content?.certificate && (<Certificate title={content?.certificate_title} description={content?.certificate_description}/>)}
            {content?.service && (<Services title={content?.service_title} description={content?.service_description}/>)}
            {content?.contact && (<ContactIndex title={content?.contact_title} description={content?.contact_description}/>)}

        </div>
    );
};

export default Index ;