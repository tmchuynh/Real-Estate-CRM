import Figure from 'react-bootstrap/Figure';

const Figures = (props) => {
  return (
    <Figure>
      <Figure.Image
        width={180}
        height={180}
        alt="171x180"
        src={props.src}
      />
    </Figure>
  );
}

export default Figures;