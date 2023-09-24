import { useContext } from 'react';
import './Div.css';
import Paragraph from '../Paragraph/Paragraph';

function Div({children}){
    
    return (
        <div>
           <Paragraph>Your theme is: </Paragraph>
        </div>
    );
}

export default Div;