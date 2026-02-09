

export default function MediaTitle({title, description}) {

    return (
        <div className="my_end_20"  data-aos="fade-up">
            <div className="text text-2xl text-center text-medium"> {title} </div>
            <div className="text text-base text-center"> {description}</div>
        </div>
    )
}