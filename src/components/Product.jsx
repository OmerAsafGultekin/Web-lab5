import Card from './Card';

function Product({ title, price }) {
  return (
    <Card>
      <h3 style={{ margin: '0 0 8px 0', color: '#333' }}>{title}</h3>
      <p style={{ margin: 0, color: '#666' }}>Price: ${price}</p>
    </Card>
  );
}

export default Product;