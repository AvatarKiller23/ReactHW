import Paragraph from "../Paragraph/Paragraph"
import Image from "../Image/Image";
import './Border.css';

function Border({text, imgUrl}) {
  return (
    <div className="border">
        <Image imgUrl={imgUrl}/>
        <Paragraph text={text}/>
    </div>
  );  
}

export default Border;