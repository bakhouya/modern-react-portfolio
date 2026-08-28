
import { Link } from "react-router-dom";
import ROUTES from "../../routers/path";
import { AlertCircle, ChevronRight, RefreshCw } from "lucide-react";

export default function ErrorPage() {
    return (
        <section className="error_section">

            <div className="content_error_page">
                <AlertCircle className="icon_page_error" size={80}/>
                <div className="">
                        <h1 className="text text-xl my_end_6">Data Loading Error</h1>
                        <p className="text text-base my_end_8">Sorry, an error occurred while fetching the data. Please try again later.</p>
                        {/* <h3 className="text text-xl">Possible Reasons:</h3>
                        <ul className="my_start_8 mx_start_15">
                            <div className="flex_start_center gap_6 py_4">
                                <ChevronRight size={20}/>
                                <li className="text text-sm">The server or API is temporarily unavailable.</li>
                            </div>
                            <div className="flex_start_center gap_6 py_4">
                                <ChevronRight size={20}/>
                                <li className="text text-sm">Your internet connection might be unstable.</li>
                            </div>
                            <div className="flex_start_center gap_6 py_4">
                                <ChevronRight size={20}/>
                                <li className="text text-sm">Some required data is missing or corrupted.</li>
                            </div>
                            <div className="flex_start_center gap_6 py_4">
                                <ChevronRight size={20}/>
                                <li className="text text-sm">There was an unexpected error in the application.</li>
                            </div>  
                            <div className="my_start_16">
                            <Link to={ROUTES.HOME} className="text_primary px_15 py_6 border border_primary radius_30 flex_center_center gap_8">
                                <RefreshCw size={20}/>
                                <div className="text text-base text_primary">Back to Home</div>
                            </Link>
                        </div>                 
                        </ul> */}
                        <div className="my_start_15">
                        <Link to={ROUTES.HOME} className="text_primary px_15 py_6 border border_primary radius_30 flex_center_center gap_8 max_content">
                            <RefreshCw size={20}/>
                            <div className="text text-base text_primary">Back to Home</div>
                        </Link>
                        </div>
                        
                </div>
            </div>
        </section>
    );
}
