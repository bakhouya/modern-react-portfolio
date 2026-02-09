


export default function MediaIcon({url, children}) {

    return (
        <a href={url} 
            className="item_media flex_center_center" 
            rel="noopener noreferrer" 
            target="_blank">
            {children}
        </a>
    )
}