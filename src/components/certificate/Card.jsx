
// import { Link } from "react-router-dom"
import certificate from "../../assets/images/certificate.png"
import { Link } from "lucide-react"

export default function CardCertificate({index, data}) {

    return (
        <div className="card_certificate" data-aos="fade-up" data-aos-delay={index * 150}>
            <div className="image_sertificate">
                <img src={data?.image} alt={data?.title} loading="lazy"/>
            </div>

            <div className="info_certifcate">
                <div className="flex_between_center">
                    <div className="text text-xl text-medium single-line-title">{data?.title}</div>
                    <div className="text text-sm">{data?.expiration_date}</div>
                </div>

                <div className="text text-base text-line-2 my_start_2">{data?.description}</div>
                <div className="hr_primary"></div>
                <div className="flex_between_center" >
                    <div className="flex_start_center gap_8">
                        <div className="text text-sm ">
                            Organized By : 
                        </div>
                        <div className="text text-sm text-semibold">
                            {data?.issuing_organization}
                        </div>
                    </div>
                    <a href={data?.credential_url} 
                        className="text text-sm pointer border border_primary px_10 py_2 radius_30 flex_center_center gap_8 text_primary"
                        target="_blank"> 
                        <Link size={18} />  
                        Visit To Validate
                    </a>
                </div>
                    
            </div>
        </div>
    )
}