

import { useState, useEffect, useContext } from "react";
import CardProject from "../../components/projects/Card"
import DetailProject from "../../components/projects/Detail"
import { PortfolioContext } from "../../providers/PortfolioProvider"
import Clicked from "../../utils/Click" ;
import NotFound from "../../components/basic/NotFound";
import HeroSearch from "../../components/basic/HeroSearch";


export default function ScreenProjects() {
    const [detail, setDetail] = useState(false)
    const [item, setItem] = useState(null)
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredProjects, setFilteredProjects] = useState([])

    const { projects } = useContext(PortfolioContext)

    function handleSearchChange(e) {setSearchTerm(e.target.value);}

    function getDetails (item) {
        Clicked()
        setItem(item)
        setDetail(true) 
    }
    function close () {
        Clicked()
        setItem(null)
        setDetail(false) 
    }

    useEffect(() => {
        if (!projects?.results) return;
        
        if (searchTerm.trim() === "") {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setFilteredProjects(projects.results)
        } else {
            const filtered = projects.results.filter(project => {
                return (
                    project.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    project.details?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    project.description?.toLowerCase().includes(searchTerm.toLowerCase()) 
                );
            });
            setFilteredProjects(filtered);
        }
    }, [searchTerm, projects]);


    return (
        <section className='portfolio_page'>
            <HeroSearch title="Use the search to filter projects by kywords" 
                        header="Projects"
                        holder="Searching by title, description, details : keywards" 
                        value={searchTerm} 
                        onChnage={handleSearchChange} />

                       
            <section className="projects content_screen">
                <div className="container">
                    <article className="cards_projects">
                        {filteredProjects?.map((project, index) => (
                            <CardProject key={project.id} index={index} project={project} showDetails={getDetails}/>                    
                        ))}
                    </article>
                    {detail && item &&  (<DetailProject onClose={close} data={item}/>) }

                    {filteredProjects.length === 0 && searchTerm && (<NotFound value={searchTerm} search={true}/>)}
                    {filteredProjects.length === 0 && (<NotFound value={searchTerm}/>)}
                </div>
            </section>

        </section>
    )
}
