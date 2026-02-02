
import CardCertificate from "../../components/certificate/Card"
import { Link } from "react-router-dom"
import { PortfolioContext } from "../../providers/PortfolioProvider";
import { useContext } from "react";

export default function Certificate({title, description}) {
    const { certificates } = useContext(PortfolioContext) ;
    return (
        <section className="certificate_section my_start_40" id="certificates">
            <div className="svg svg_1"></div>
            <div className="svg svg_2"></div>
            <div className="container">
                <div className="content_certificate">

                    <div className="title_section">
                        <div className="text text-3xl text-center text_primary text-semibold" data-aos="zoom-in">
                            {title}
                        </div>
                        <div className="text text-base text-center my_start_4" data-aos="fade-up">
                            {description}
                        </div>
                    </div>


                    <div className="cards_certificate">
                        {certificates?.results?.map((certificate, index) => (
                            <CardCertificate key={certificate?.id} index={index} data={certificate}/>
                        ))}
                    </div>

                    {certificates?.length > 5 && (
                        <div className="flex_center_center my_start_30">
                            <Link to={"https://lucide.dev/icons/send"} className="btn btn_md border_2 flex_center_center radius_30 btn_outline_primary">
                                Show All Certificates
                            </Link>
                        </div>
                    )}
                    

                </div>
            </div>
        </section>
    )
}