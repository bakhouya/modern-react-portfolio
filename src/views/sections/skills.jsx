

import CardSkills from "../../components/skills/CardSkills"
import Skill from "../../components/skills/Skill"
import { PortfolioContext } from "../../providers/PortfolioProvider";
import { useContext } from "react";


export default function Skills({title, description}) {
    const { skills } = useContext(PortfolioContext);

    
    return (
        <section className="skills_section" id="skills">
            <div className="container">
                <div className="content_skills">
                    <div className="title_section">
                        <div className="text text-3xl text-center text_primary text-semibold" data-aos="zoom-in">
                            {title}
                        </div>
                        <div className="text text-base text-center my_start_4" data-aos="fade-up">
                            {description}
                        </div>
                    </div>


                    <div className="cards_skills my_start_25">
                        {skills.map((skill, index) => (
                            <CardSkills key={skill.id} skill={skill} index={index}/>
                        ))}
                        {skills.length > 5 && <Skill />}
                    </div>
                </div>
            </div>
        </section>
    )
}