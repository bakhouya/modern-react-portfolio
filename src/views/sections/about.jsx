
import about from "../../assets/images/about.jpg"

export default function About() {
    return (
        <section className="about_section" id="about">
            <div className="animated_radius"></div>
            <div className="container">
                <div className="content_about">
                    <div className="image_about" data-aos="fade-right" data-aos-delay={150}>
                        <img src={about} alt="" />
                    </div>
                    <div className="info_about">
                       <div className="item_about" data-aos="fade-left" data-aos-delay={150}>
                            <div className="flex_start_center gap_10">
                                <div className="text text-2xl text-semibold text_primary">impedit illum odio accusamus </div>
                            </div>
                            <div className="text text-base my_start_8">
                                I began studying law, which enhanced my analytical and logical skills. This background helped me develop the 
                                structural thinking I now apply to building web solutions systematically and effectively.
                            </div>
                       </div>
                       <div className="hr_primary"></div>
                       <div className="item_about" data-aos="fade-left" data-aos-delay={300}>
                            <div className="flex_start_center gap_10">
                                <div className="text text-2xl text-semibold text_primary">accusamus ipsa perferendis iure </div>
                            </div>
                            <div className="text text-base my_start_8">
                                My passion for technology led me to learn programming. I enrolled in the ALX Web Development Program 
                                and learned the basics of back-end. I also expanded my knowledge of digital marketing through a 
                                course from Google.
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
