import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core";

export default ({link, className="", faIcon, faIconClass="", faIconSize='xl'}: {faIcon:IconDefinition, link: string, className: string, faIconClass?: string, faIconSize?: SizeProp}) => 
      <a href={link} target="_blank" className={className} ><FontAwesomeIcon icon={faIcon} size={faIconSize} className={faIconClass} /></a>