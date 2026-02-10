
import {  Facebook, Youtube, Instagram, Linkedin, Mail, PhoneCall,  MessageCircleIcon, Github } from "lucide-react"
import Wavetop from "../../assets/svg/wavetop.svg"
import CardContact from "../../components/contacts/ContactCard"
import MediaIcon from "../../components/contacts/MediaItem"
import MediaTitle from "../../components/contacts/MediaTitle"
import { PortfolioContext } from "../../providers/PortfolioProvider";
import { useContext } from "react"

export default function ContactIndex({title, description}) {
    const { user } = useContext(PortfolioContext)
    return (
        <section className="contact_index">
            <img src={Wavetop} alt="" className="waves" />
            <article className="block_waves">
                <div className="container">
                    <div className="content_contact">
                        <div className="header_contact_index">
                            <div className="text text-2xl text-center text_primary text-semibold">{title}</div>
                            <div className="text text-base text-center my_start_4">{description}</div>
                        </div>

                        <div className="contact_info my_start_50">
                            <MediaTitle 
                                title="Let we talk"
                                description="Feel free to reach out via email, WhatsApp, or phone. I’m always open to new opportunities"/>
  
                            <div className="contacts_chaine">

                                <CardContact title="Email" description={user?.email} type="mailto">
                                    <Mail size={61} className="text_primary"/>
                                </CardContact>
                                <CardContact title="Call Phone" description={user?.profile.phone} type="tel" >
                                    <PhoneCall size={56} className="text_primary"/>
                                </CardContact>
                                <CardContact title="Whatssap" description={user?.profile.whatsapp_url} phone={user?.profile.phone}>
                                    <MessageCircleIcon size={58} className="text_primary"/>
                                </CardContact>

                            </div>
                        </div>

                        <div className="folows_chaine my_start_30">
                            <MediaTitle 
                                title="Folow me"
                                description="Folow me on social media and explore more of my work and experience"/>

                            <div className="flex_center_center gap_15">
                                
                                {user?.profile.facebook_url && (
                                    <MediaIcon url={user?.profile.facebook_url} > <Facebook  className="text_white"/> </MediaIcon>
                                )}
                                {user?.profile.github_url && (
                                    <MediaIcon url={user?.profile.github_url} > <Github  className="text_white"/> </MediaIcon>
                                )}
                                {user?.profile.linkedin_url && (
                                    <MediaIcon url={user?.profile.linkedin_url} > <Linkedin  className="text_white"/> </MediaIcon>
                                )}
                                {user?.profile.instagram_url && (
                                    <MediaIcon url={user?.profile.instagram_url} > <Instagram  className="text_white"/> </MediaIcon>
                                )}
                                {user?.profile.youtube_url && (
                                    <MediaIcon url={user?.profile.youtube_url} > <Youtube  className="text_white"/> </MediaIcon>
                                )}
                            </div> 
                        </div>
                                        
                    </div>
                </div>
            </article>
        </section>
    )
}