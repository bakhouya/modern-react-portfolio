
import about from "../../assets/images/about.jpg"
import Title from "../../components/basic/Title"
import { PortfolioContext } from "../../providers/PortfolioProvider";
import { useContext } from "react"; 

export default function About({title, description}) {
    const {user, abouts } = useContext(PortfolioContext);
 
    return (
        <section className="about_section" id="about">
            <div className="animated_radius"></div>
            <div className="container">
                <Title title={title} description={description} />
                <div className="content_about">
                    <div className="image_about" data-aos="fade-right">
                        <img src={user?.profile?.avatar} alt={about?.title} />
                    </div>
                    <div className="info_about">
                        <div className="">
                            <div className="hr_primary hr_first"></div>
                            {abouts?.results?.slice(0, 4).map((about) => (
                                <div key={about?.id} className="card_about">
                                    <div className="item_about" data-aos="fade-left" data-aos-delay={150}>
                                        <div className="text text-xl text-semibold "> {about?.title} </div>
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
