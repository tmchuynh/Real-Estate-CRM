import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Gallery = ({ photos }) => {
  return (
    <Container fluid>
      <Row>
        {photos.map((photo, index) => (
          <Col key={`photo-${index}`}>
            <Image src={photo.src} fluid />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

Gallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number
  })).isRequired,
};

export default Gallery;
