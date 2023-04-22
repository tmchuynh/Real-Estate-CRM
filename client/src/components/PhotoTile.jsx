import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Image } from 'react-bootstrap';

const PhotoTile = ({ photos }) => {
  const { mainPhoto, smallPhotos, mediumPhotos } = photos;

  return (
    <Container>
      <Row>
        <Col>
          <Image src={mainPhoto} fluid />
        </Col>
      </Row>
      <Row>
        {smallPhotos.map((photo, index) => (
          <Col key={`small-${index}`}>
            <Image src={photo} fluid />
          </Col>
        ))}
      </Row>
      <Row>
        {mediumPhotos.map((photo, index) => (
          <Col key={`medium-${index}`}>
            <Image src={photo} fluid />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

PhotoTile.propTypes = {
  photos: PropTypes.shape({
    mainPhoto: PropTypes.string.isRequired,
    smallPhotos: PropTypes.arrayOf(PropTypes.string).isRequired,
    mediumPhotos: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default PhotoTile;


// <PhotoTile
//   photos={{
//     mainPhoto: 'path/to/main/photo.jpg',
//     smallPhotos: ['path/to/small/photo1.jpg', 'path/to/small/photo2.jpg'],
//     mediumPhotos: ['path/to/medium/photo1.jpg', 'path/to/medium/photo2.jpg'],
//   }}
// />
