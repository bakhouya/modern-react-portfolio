
import CardService from "../../components/services/CardService"
import { PortfolioContext } from "../../providers/PortfolioProvider";
import { useContext } from "react";

export default function Services({title, description}) {
    const { services } = useContext(PortfolioContext);
    return (
        <section className="services_section" id="services">
            <div className="container">
                <div className="content_services">

                    <div className="title_section">
                        <div className="text text-3xl text-center text_primary text-semibold" data-aos="zoom-in">
                            {title}
                        </div>
                        <div className="text text-base text-center" data-aos="fade-up">{description}</div>
                    </div>

                    <div className="cards_services">
                        {services?.results?.map(service => (
                            <CardService key={service?.id} index="1" data={service}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}