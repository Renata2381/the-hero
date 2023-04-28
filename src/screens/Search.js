import Alert from '../common-components/Alert/Alert';
import Button from '../common-components/Button/Button';

export default function Search() {
  return (
    <div>
      Hello world <strong>FIAP</strong>!
      <hr />
      <Button>Buscar</Button>
      <hr />
      <Button ghost>Buscar</Button>
      <hr />
      <Alert type="success" small>
        Lorem Ipsum
      </Alert>
    </div>
  );
}
