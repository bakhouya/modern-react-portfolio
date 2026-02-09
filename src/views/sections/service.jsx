
import CardService from "../../components/services/CardService"
import Title from "../../components/basic/Title"
import { PortfolioContext } from "../../providers/PortfolioProvider";
import { useContext } from "react";

export default function Services({title, description}) {
    const {user, services } = useContext(PortfolioContext);
    return (
        <section className="services_section" id="services">
            <div className="container">
                <div className="content_services">

                    <Title title={title} description={description} />

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