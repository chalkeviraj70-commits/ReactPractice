import logo from './logo.svg';
import './App.css';
import Basicjsx from './23-11JSXEX/Basicjsx';
import Attr from './23-11JSXEX/Attribute';

import Express from './23-11JSXEX/Expresionjsx';
import Obj from './23-11JSXEX/JsObj';
import DateTime from './23-11JSXEX/Ass_date_time';
import ArraywithObj from './ASS25_11/AssArrayWithObj';
import ArraywithMap from './ASS25_11/ASS2ArrayWithMap';
import Calc from './ASS25_11/Calculator';
import Heading from './Ass27_11/CardHeading';
import CardSameContent from './Ass27_11/CardWithSameContent';

function App() {
  return (
    <div className="App">
      

      {/* <Basicjsx />
      <Attr/> */}
      {/* <Express /> */}
      {/* <Obj /> */}
      {/* <DateTime /> */}
      {/* <ArraywithObj /> */}
      {/* <ArraywithMap /> */}
      {/* <Calc/> */}
      <Heading />
      <div className='Card'>
        <CardSameContent />
        <CardSameContent />
        <CardSameContent />
        <CardSameContent />
        <CardSameContent />
        <CardSameContent />
      </div>


    </div>
  );
}

export default App;
