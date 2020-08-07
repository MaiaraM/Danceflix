import React from 'react';
import PropTypes from 'prop-types';
import { Input, FormFieldWrapper, Label } from './styled';

function FormField({
  name, label, type, value, onChange, tag, suggestions,
}) {
  const fieldId = `input_${name}`;
  const hasSuggestions = Boolean(suggestions.length);

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
          autoComplete={hasSuggestions ? 'off' : 'on'}
          list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
        />
        <Label.Text>
          {label}
        </Label.Text>
        {
          hasSuggestions && (
            <datalist id={`suggestionFor_${fieldId}`}>
              {
                suggestions.map((suggestion) => (
                  <option value={suggestion} key={`suggestionFor_${fieldId}_option${suggestion}`}>
                    {suggestion}
                  </option>
                ))
              }
            </datalist>
          )
        }
      </Label>
    </FormFieldWrapper>

  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  tag: 'input',
  suggestions: [],
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  tag: PropTypes.string,
  suggestions: PropTypes.array,
  onChange: PropTypes.func.isRequired,
};

export default FormField;
