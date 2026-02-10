



export default function Title({title, description}) {
    return (
        <div className="title_section">
            <h3 className="text text-3xl text-center text_primary text-semibold title" data-aos="zoom-in">
                {title}
            </h3>
            <div className="text text-base text-center my_start_1" data-aos="fade-up">
                {description}
            </div>
        </div>
    )
}