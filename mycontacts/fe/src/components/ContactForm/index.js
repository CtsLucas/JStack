import PropTypes from 'prop-types';
import { Form, ButtonContainer } from './styles';

import FomrGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

export default function ContactForm({ buttonLabel }) {
  return (
    <Form>
      <FomrGroup>
        <Input placeholder="Nome" />
      </FomrGroup>

      <FomrGroup
        error="O formato do e-mail é inválido."
      >
        <Input placeholder="E-mail" error />
      </FomrGroup>

      <FomrGroup>
        <Input placeholder="Telefone" />
      </FomrGroup>

      <FomrGroup>
        <Select>
          <option value="instagram">Instagram</option>
        </Select>
      </FomrGroup>

      <ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
