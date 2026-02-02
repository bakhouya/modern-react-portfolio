
import { useEffect} from "react";  
import {  Settings } from "lucide-react"
import Git from "../../assets/images/skills/git.png"
import Hero from "../../views/sections/hero";

export default function CardSkills({skill, index}) {



    return (
        <div className="card_skill" data-aos="fade-up" data-aos-delay={index * 150} 
            style={{
                border: '1px solid ' + addOpacity(skill?.color, 0.3), 
                backgroundColor: addOpacity(skill?.color, 0.1),
                }}>
            <div className="icon_skill flex_center_center">
                <img src={skill?.icon} alt="" className="mx_auto" />
            </div>
            <div className="text text-base text-center my_start_10"> {skill?.title} </div>
            <div className="text text-xs text-center my_start_6 inset_text border px_5 radius_20 border_primary text_primary flex_center_center gap_5"> 
                {skill?.level} - {skill?.percentage}% 
            </div>
            <div className="text text-sm text-center text_primary my_start_2"> {skill?.category.title} </div>
        </div>
    )

    
}
const addOpacity = (hexColor, opacity) => {
    const hex = hexColor.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};