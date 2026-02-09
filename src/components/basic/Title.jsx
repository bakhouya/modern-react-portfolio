



export default function Title({title, description}) {
    return (
        <div className="title_section">
            <div className="text text-3xl text-center text_primary text-semibold title" data-aos="zoom-in">
                {title}
            </div>
            <div className="text text-base text-center my_start_1" data-aos="fade-up">
                {description}
            </div>
        </div>
    )
}