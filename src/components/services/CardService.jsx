import { Link } from "react-router-dom"
import { Image } from "lucide-react"
// import Portfolio Context providers
import { PortfolioContext } from "../../providers/PortfolioProvider";
import { useContext } from "react"; 


export default function CardService({index, data, contact}) {
    // Get user  data from Context provider
    const {user} = useContext(PortfolioContext);

    return (
        <article className="card_service" data-aos="zoom-in" data-aos-delay={index * 100}>

            <div className="header_card my_end_10">
                <img src={data?.image} alt="" className="image_service" loading="lazy"/>
                <div className="service_svg"></div>
            </div>
            <div className="">
                <div className="text text-xl text-medium text-center my_start_25"> {data?.title} </div>
                <div className="text text-base text-center my_start_6 text-line-2"> {data?.description} </div>
            </div>
            <div className="">
                <a href={`${user?.profile.whatsapp_url}?text=${encodeURIComponent(
                        "Hello, I visited your website and I would like to inquire about your web development services."
                    )}`}
                    className="btn btn_lg border_2 flex_center_center radius_30 w_8 btn_primary my_start_20 mx_auto"
                    >
                    Start your project
                </a>
            </div>

        </article>
    )
}