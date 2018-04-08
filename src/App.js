import React, { Component } from 'react';
import { getCanvasPosition } from './utils/formulas';
import Canvas from './components/Canvas';
import PropTypes from 'prop-types';

class App extends Component {
  componentDidMount() {
    const self= this;

    setInterval(() => {
      self.props.moveObjects(self.canvasMousePosition);
    },10);

    window.onresize = () => {
      const cnv=document.getElementById('blob-battle-canvas');
      cnv.style.width= `${window.innerWidth}px`;
      cnv.style.height=`${window.innerHeight}px`;
    }

    window.onresize();
  }

trackMouse(event) {
  this.canvasMousePosition = getCanvasPosition(event);
}

render () {
  return(
    <Canvas
      angle={this.props.angle}
      trackMouse={event => (this.trackMouse(event))}
    />
  );
  }
}

App.propTypes={
  angle:PropTypes.number.isRequired,
  moveObjects:PropTypes.func.isRequired,
};

export default App;
