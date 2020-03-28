import {
    faTwitterSquare,
    faFacebookSquare,
    faInstagramSquare
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

const Icons = () => {
    return library.add (
        faTwitterSquare,
        faFacebookSquare,
        faInstagramSquare
    );
};

export default Icons;