
// import dynamic title headile section 
import Title from "../../components/basic/Title"
// import Portfolio Context providers
import { PortfolioContext } from "../../providers/PortfolioProvider";
import { useContext } from "react"; 

export default function About({title, description}) {
    // Get user & abouts data from Context provider
    const {user, abouts } = useContext(PortfolioContext);
    // Check if abouts data not fount return "NULL"
    if(abouts.results.length <= 0 ) {return null}
    // if we have about data return the section JSX component
    return (
        <section className="about_section" id="about">
            <div className="animated_radius"></div>
            <div className="container">
                {/* include component dynamic Title */}
                <Title title={title} description={description} />
                {/* Content section about */}
                <div className="content_about">
                    <div className="image_about" data-aos="fade-up">
                        <img src={user?.profile?.avatar} alt="about section image" loading="lazy"/>
                    </div>
                    <div className="info_about">
                        <div className="">
                            <div className="hr_primary hr_first"></div>
                            {abouts?.results?.slice(0, 4).map((about) => (
                                <div key={about?.id} className="card_about">
                                    <div className="item_about" data-aos="fade-up" data-aos-delay={150}>
                                        <h3 className="text text-xl text-semibold "> {about?.title} </h3>
                                        <div className="text text-base my_start_8">{about?.description} </div>
                                    </div>
                                    <div className="hr_primary"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
