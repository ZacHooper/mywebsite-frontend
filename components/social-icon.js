import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialIcon({icon, url}) {
    return (
        <a href={url} target="_blank">
            <FontAwesomeIcon icon={icon} 
                             size="3x" 
                             className="text-light-white hover:text-success md:pr-4"/>
        </a>
    )

}