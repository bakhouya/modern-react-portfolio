

import { useState, useEffect, useContext } from "react";
import CardSkills from "../../components/skills/CardSkills"
import { PortfolioContext } from "../../providers/PortfolioProvider"
import NotFound from "../../components/basic/NotFound";
import HeroSearch from "../../components/basic/HeroSearch";


export default function ScreenSkills() {

    const [searchTerm, setSearchTerm] = useState("")
    const [filterData, setFilterData] = useState([])

    const { skills } = useContext(PortfolioContext)

    function handleSearchChange(e) {setSearchTerm(e.target.value);}

    useEffect(() => {
        if (!skills) return;
        
        if (searchTerm.trim() === "") {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setFilterData(skills)
        } else {
            const filtered = skills.filter(skill => {
                return (
                    skill.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    skill.description?.toLowerCase().includes(searchTerm.toLowerCase()) 
                );
            });
            setFilterData(filtered);
        }
    }, [searchTerm, skills]);


    return (
        <section className='portfolio_page'>
            <HeroSearch title="Use the search to filter skills by kywords" 
                        header="Skills"
                        holder="Searching by title, description : keywards" 
                        value={searchTerm} 
                        onChnage={handleSearchChange} />

                       
            <section className="skills content_screen">
                <div className="container">
                    <article className="cards_skills">
                        {filterData?.map((skill, index) => (
                            <CardSkills key={skill.id} index={index} skill={skill} />                    
                        ))}
                    </article>

                    {filterData.length === 0 && searchTerm && ( <NotFound value={searchTerm} serach={true}/>)}
                    {filterData.length === 0 &&  (<NotFound value={searchTerm}/>)}
                </div>
            </section>
            
        </section>
    )
}
