
import {  Facebook, Youtube, Instagram, Linkedin, Mail, PhoneCall, MessageCircle, MessageCircleIcon, Github } from "lucide-react"
import { Link } from "react-router-dom"
import { useTrack } from "../../providers/TrackProvider"


export default function ContactIndex({title, description}) {
    const { user } = useTrack()
    return (
        <section className="contact_index">
            <div className="container">
                <div className="content_contact">
                    <div className="header_contact_index">
                        <div className="text text-2xl text-center text_primary text-semibold">{title}</div>
                        <div className="text text-base text-center my_start_4">{description}</div>
                    </div>

                    <div className="contact_info my_start_50">
                        <div className="my_end_20" data-aos="fade-up">
                            <div className="text text-2xl text-center text-medium">
                                Get In Touch
                            </div>
                            <div className="text text-base text-center">
                                Feel free to reach out via email, WhatsApp, or phone. I’m always open to new opportunities
                            </div>
                        </div>
                        <div className="contacts_chaine">
                            <a href={`mailto:${user?.email}`} className="item_contact" rel="noopener noreferrer" target="_blank" data-aos="fade-right" data-aos-delay={150}>                                
                                <div className="btn btn_secoundary btn_icon_lg flex_center_center mx_auto">
                                    <Mail size={19} className="text_light"/>
                                </div>
                                <div className="text text-base text-medium text-center my_start_10">{user?.email}</div>
                            </a>
                            <a href={`tel:${user?.profile.phone}`} className="item_contact" rel="noopener noreferrer" target="_blank" data-aos="fade-up" data-aos-delay={150}>
                                <div className="btn btn_secoundary btn_icon_lg flex_center_center mx_auto">
                                    <PhoneCall size={19} className="text_light "/>
                                </div>
                                <div className="text text-base text-medium text-center my_start_10">{user?.profile.phone}</div>
                            </a>
                            <a href={user?.profile.whatsapp_url} className="item_contact" rel="noopener noreferrer" target="_blank" data-aos="fade-left" data-aos-delay={150}>
                                <div className="btn btn_secoundary btn_icon_lg flex_center_center mx_auto">
                                    <MessageCircleIcon size={19} className="text_light"/>
                                </div>
                                <div className="text text-base text-medium text-center my_start_10">{user?.profile.phone}</div>
                            </a>
                        </div>
                    </div>

                    <div className="folows_chaine my_start_30">
                        <div className="my_end_20"  data-aos="fade-up">
                            <div className="text text-2xl text-center text-medium">
                                Let’s Connect
                            </div>
                            <div className="text text-base text-center">
                                Connect with me on social media and explore more of my work and experience
                            </div>
                        </div>
                        <div className="flex_center_center gap_15">
                            {user?.profile.facebook_url && (
                                <Link to={user?.profile.facebook_url} className="item_media flex_center_center" rel="noopener noreferrer" target="_blank">
                                    <Facebook  className="text_light"/>
                                </Link>
                            )}
                            {user?.profile.github_url && (
                                <Link to={user?.profile.github_url} className="item_media flex_center_center" rel="noopener noreferrer" target="_blank">
                                    <Github  className="text_light"/>
                                </Link>
                            )}
                            {user?.profile.linkedin_url && (
                                <Link to={user?.profile.linkedin_url} className="item_media flex_center_center" rel="noopener noreferrer" target="_blank">
                                    <Linkedin  className="text_light"/>
                                </Link>
                            )}
                            {user?.profile.instagram_url && (
                                <Link to={user?.profile.instagram_url} className="item_media flex_center_center" rel="noopener noreferrer" target="_blank">
                                    <Instagram  className="text_light"/>
                                </Link>
                            )}
                            {user?.profile.youtube_url && (
                                <Link to={user?.profile.youtube_url} className="item_media flex_center_center" rel="noopener noreferrer" target="_blank">
                                    <Youtube  className="text_light"/>
                                </Link>
                            )}
                        </div> 
                    </div>
                                    
                </div>
            </div>
        </section>
    )
}