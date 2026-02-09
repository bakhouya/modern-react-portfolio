import { Link } from "react-router-dom"
import WaveBottom from "../../assets/svg/wavebottom.svg"
import { ChevronLeft, Search } from 'lucide-react'
import ROUTES from "../../routers/path"



export default function HeroSearch({header, title, holder, onChnage, value}) {
    return (
        <div className="">
            <div className="block_waves ">
                <div className="container border_y_end py_10">
                    <Link to={ROUTES.HOME} className="flex_start_center gap_8">
                        <ChevronLeft size={26}/>
                        <div className="text text-2xl text-semibold">{header}</div>
                    </Link>
                </div>
                <article className="hero_portfolio_page">
                    
                    <div className="container">
                        <h6 className="text text-2xl text_primary text-semibold mx_auto text-center my_end_15">
                            {title}
                        </h6>
                        <div className="form_search">
                            <input type="text" 
                                    className="input_search" 
                                    placeholder={holder}
                                    value={value} onChange={onChnage}/>
                            <div className="flex_start_center gap_3">
                                <div className="slach mx10"></div>
                                <Search />
                            </div>
                            
                        </div>
                    </div>
            
                </article>
            </div>
            <img src={WaveBottom} alt="" className="w_10 wave_bottom" />
        </div>
    )
}
