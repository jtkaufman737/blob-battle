import React from 'react';
import PropTypes from 'prop-types';
import { pathFromBezierCurve } from '../utils/formulas';

const Blob = (props) => {
  const style={
    background: '#03001e;', /* fallback for old browsers */
    background: '-webkit-linear-gradient(to right, #03001e, #7303c0, #ec38bc, #fdeff9)', /* Chrome 10-25, Safari 5.1-6 */
    background: 'linear-gradient(to right, #03001e, #7303c0, #ec38bc, #fdeff9)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: 'repeat: "no-repeat"',
    background: 'attachment:"fixed"',
    height: '100px',
    width:'100px',
  };

  return (
    <ellipse id="blobs"
      style={style}
      circle cx="50"
      cy="50"
      rx="50"
      ry="50"
      style={style}
      />
  );
}

Blob.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
};

export default Blob;
