import { PlusCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";





export default function Skill(props) {
    return (
        <Link className="card_skill flex_center_center more_skills" data-aos="fade-up" data-aos-delay={9 * 150}>
            <div className="">
                <div className="flex_center_center"><PlusCircleIcon size={50} className="text text_secoundary text-center"/></div>
                <div className="text text_base text-center text_light my_start_15"> More Skills </div>
            </div>           
        </Link>
    )
}