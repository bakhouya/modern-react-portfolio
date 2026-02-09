import { PlusCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";
import ROUTES from "../../routers/path"




export default function Skill({count}) {
    return (
        <Link to={ROUTES.SKILLS} className="card_skill flex_center_center more_skills" data-aos="fade-up" data-aos-delay={7 * 150}>
            <div className="">
                <div className="flex_center_center"><PlusCircleIcon size={40} className="text text-center text_white"/></div>
                <div className="text text-base text-center my_start_15 text_white"> More {count - 7} Skills </div>
            </div>           
        </Link>
    )
}