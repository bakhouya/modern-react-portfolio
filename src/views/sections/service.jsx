// import (CardService, Title) compoents
import CardService from "../../components/services/CardService"
import Title from "../../components/basic/Title"
// import portfolio context
import { PortfolioContext } from "../../providers/PortfolioProvider";
import { useContext } from "react";

export default function Services({title, description}) {
    // Get user, services from context provider
    const {user, services } = useContext(PortfolioContext);
    // Check if services data not fount return "NULL"
    if(services.results.length <= 0 ) {return null}
    // if we have services data return the section JSX component
    return (
        <section className="services_section" id="services">
            <div className="container">
                <div className="content_services">
                    {/* include component dynamic Title */}
                    <Title title={title} description={description} />
                    {/* cards services */}
                    <div className="cards_services">
                        {services?.results?.slice(0, 4).map(service => (
                            <CardService key={service?.id} index="1" data={service} contact={user?.profile?.whatsapp_url}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}