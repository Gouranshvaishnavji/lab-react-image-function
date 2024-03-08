import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Carousel = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(images.length - 1); // Loop back to the last image when reaching the beginning
    }
  };

  const increment = () => {
    if (count < images.length - 1) {
      setCount(count + 1);
    } else {
      setCount(0); // Loop back to the first image when reaching the end
    }
  };

  return (
    <div className="container">
      <div className="sidebtn" onClick={decrement}><ArrowBackIosIcon /></div>
      <div className="imgimg">
        <img src={images[count].img} alt="img" />
        <h1 className="texter">{images[count].title}</h1>
        <h3 className="texter">{images[count].subtitle}</h3>
      </div>
      <div className="sidebtn" onClick={increment}><ArrowForwardIosIcon /></div>
    </div>
  );
};

export default Carousel;

// <------------------------commented code------------------->
// class Carousel extends Component {
//     constructor() {
//         super();
//         this.state = {
//           count: 0,
//         };
//       }
    
//       decrement = () => {
//         if(this.state.count<2) {
//           this.setState({ count: this.state.count+1 });
//         };
//       }
        
    
//       increment = () => {
//         if(this.state.count>0) {
//           this.setState({ count: this.state.count-1 })
//         }
//       };

//       render() {
//         return(
//             <div className="container">
//                 <div className="sidebtn" onClick={this.increment}><ArrowBackIosIcon/></div>
//                 <div className="imgimg">
//                 <img src={images[this.state.count].img} alt="img"/>

//                 <h1 className="texter">{images[this.state.count].title}</h1>
//                 <h3 className="texter">{images[this.state.count].subtitle}</h3>
//                 </div>
//                 <div className="sidebtn" onClick={this.decrement}><ArrowForwardIosIcon/></div>
//             </div>
//         )
//       }
// }

// export default Carousel;