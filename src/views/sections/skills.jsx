

import CardSkills from "../../components/skills/CardSkills"
import Skill from "../../components/skills/Skill"
import Title from "../../components/basic/Title"
import { PortfolioContext } from "../../providers/PortfolioProvider";
import { useContext } from "react";

import Wavetop from "../../assets/svg/wavetop.svg"
import WaveBottom from "../../assets/svg/wavebottom.svg"

export default function Skills({title, description}) {
    const { skills } = useContext(PortfolioContext);

    
    return (
        <section className="skills_section" id="skills">
            <img src={Wavetop} alt="" className="waves" />
            <article className="block_waves">
                <div className="container">
                    <div className="content_skills">
                        <Title title={title} description={description} />


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