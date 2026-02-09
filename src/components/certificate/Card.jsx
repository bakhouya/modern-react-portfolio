

import {ChevronRight } from "lucide-react"

export default function CardCertificate({index, data}) {

    return (
        <div className="card_certificate" data-aos="fade-up" data-aos-delay={index * 150}>
           
            <div className="info_certifcate">
                <div className="flex_between_center">
                    <div className="text text-xl text-medium single-line-title">{data?.title}</div>
                    <div className="text text-sm">{data?.expiration_date}</div>
                </div>

                <div className="text text-base text-line-3 my_start_4">{data?.description}</div>
                <div className="hr_primary"></div>
                <div className="flex_between_center" >
                    <div className="flex_start_center gap_8">
                        <div className="text text-sm">
                            Organized By : 
                        </div>
                        <div className="text text-sm text-semibold">
                            {data?.issuing_organization}
                        </div>
                    </div>
                    <a href={data?.credential_url} 
                        className="text text-sm text-medium pointer radius_30 flex_center_center gap_4 text_secoundary"
                        target="_blank">  
                        Visit
                        <ChevronRight size={21} /> 
                    </a>
                </div>
                    
            </div>
        </div>
    )
}