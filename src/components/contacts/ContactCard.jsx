import { ChevronRight } from "lucide-react";


export default function CardContact({title, description, type, phone, children}) {

    return (
        <a href={type ? `${type}:${description}` : description}  

            className="item_contact" 
            rel="noopener noreferrer" target="_blank" data-aos="fade-up" data-aos-delay={150}>  
            <div className="flex_start_center">                             
                <div className="flex_start_center">{children}</div>
                <div className="slach"></div>
                <div className="">
                    <div className="text text-lg text-medium text_base_dark">{title}</div>
                    <div className="text text-base">
                        {type ? description : phone}
                    </div>
                </div>
            </div> 

            <ChevronRight size={25} />
        </a>
    )
}