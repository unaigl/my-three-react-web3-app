import { Html } from '@react-three/drei';
import PropTypes from 'prop-types';

import './HtmlCanvas.css';


const HtmlCanvas = (props) => {

    let classname;
    if (props.children === ' WINNER ') {
        classname = 'htmlcanvas-winner';
    } else {
        classname = 'htmlcanvas-gameover';
    }

    return (
        <Html
            fullscreen
            transform={true}
            position={[0, 3, 0]}
        >
            <h4
                className={classname}
            >{props.children}</h4>
        </Html>
    )
}

HtmlCanvas.propTypes = {
    children: PropTypes.string
}

export default HtmlCanvas