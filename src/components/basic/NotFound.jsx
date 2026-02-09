import NotFoundImage from "../../assets/images/cancel.png"

export default function NotFound({value, search}) {
        return (
            <div className="no_results">
                <div className="text-center">
                    <div className="mx_auto my_end_6">
                        <img src={NotFoundImage} alt="Not found icon" className="image_notFound"/>
                    </div>
                    {search 
                    ? <p className='text text-xl text-medium text-center'>No projects found for "{value}"</p>
                    : <p className='text text-xl text-medium text-center'>No Projects Data</p>}
                    
                </div>
            </div>
        )
}
