
// import (CardService, Skill, Title) compoents
import CardSkills from "../../components/skills/CardSkills"
import Skill from "../../components/skills/Skill"
import Title from "../../components/basic/Title"
// import portfolio context
import { PortfolioContext } from "../../providers/PortfolioProvider";
import { useContext } from "react";
// import top & bottom waves for sections
import Wavetop from "../../assets/svg/wavetop.svg"
import WaveBottom from "../../assets/svg/wavebottom.svg"

export default function Skills({title, description}) {
    // Get skills data from context provider
    const { skills } = useContext(PortfolioContext);
    // Check if skills data not fount return "NULL"
    if(skills.length <= 0 ) {return null}
    // if we have skills data return the section JSX component
    return (
        <section className="skills_section" id="skills">
            <img src={Wavetop} alt="" className="waves" />
            <article className="block_waves">
                <div className="container">
                    <div className="content_skills">
                        {/* include component dynamic Title */}
                        <Title title={title} description={description} />
                        {/* cards skills */}
                        <div className="cards_skills">
                            {skills?.slice(0, 7).map((skill, index) => (
                                <CardSkills key={skill.id} skill={skill} index={index}/>
                            ))}
                            {skills.length > 7 && <Skill count={skills.length}/>}
                        </div>
                    </div>
                </div>
            </article>
            <img src={WaveBottom} alt="" className="w_10 wave_bottom" />
        </section>
    )
}