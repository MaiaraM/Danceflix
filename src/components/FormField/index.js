import React from 'react';
import PropTypes from 'prop-types';
import { Input, FormFieldWrapper, Label } from './styled';

function FormField({
  name, label, type, value, onChange, tag,
}) {
  const fieldId = `input_${name}`;

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        <Input
          id={fieldId}
          as={tag}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
        <Label.Text>
          {label}
        </Label.Text>
      </Label>
    </FormFieldWrapper>

  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  tag: 'input',
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  tag: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default FormField;
