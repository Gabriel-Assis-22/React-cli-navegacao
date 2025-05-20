import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Label = styled.label`
  font-weight: bold;
`;

export const Input = ({ label, register, name, type, error }) => (
  <div style={{ marginBottom: '20px' }}>
    <Label>{label}</Label>
    <StyledInput type={type} {...register(name)} />
    {error && <p style={{ color: 'red', fontSize: '12px' }}>{error.message}</p>}
  </div>
);
