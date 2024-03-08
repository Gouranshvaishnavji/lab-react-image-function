import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import React, {useState} from "react";

//<!---------------uncommented code-------------->
const Carousel = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
      if (count < 2) {
          setCount(count + 1);
      }
  };

  const increment = () => {
      if (count > 0) {
          setCount(count - 1);
      }
  };

  return (
      <div className="container">
          <div className="sidebtn" onClick={increment}><ArrowBackIosIcon /></div>
          <div className="imgimg">
              <img src={images[count].img} alt="img" />
              <h1 className="texter">{images[count].title}</h1>
              <h3 className="texter">{images[count].subtitle}</h3>
          </div>
          <div className="sidebtn" onClick={decrement}><ArrowForwardIosIcon /></div>
      </div>
  );
};
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

export default Carousel;