import React from 'react';
import { Grid } from '@material-ui/core';
import Controls from '../../components/controls/Controls';
import { useForm, Form } from '../../components/useForm';
import * as employeeService from '../../services/employeeService';

const initialFValues = {
  id: 0,
  fullName: '',
  email: '',
  mobile: '',
  jobTitle: '',
  company: '',
  departmentId: '',
  joinDate: new Date(),
};

export default function EmployeeForm() {
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('fullName' in fieldValues) temp.fullName = fieldValues.fullName ? '' : 'This field is required.';
    if ('email' in fieldValues) temp.email = /$^|.+@.+..+/.test(fieldValues.email) ? '' : 'Email is not valid.';
    if ('mobile' in fieldValues) temp.mobile = fieldValues.mobile.length > 9 ? '' : 'Minimum 10 numbers required.';
    if ('departmentId' in fieldValues)
      temp.departmentId = fieldValues.departmentId.length !== 0 ? '' : 'This field is required.';
    setErrors({
      ...temp,
    });

    if (fieldValues === values) return Object.values(temp).every((x) => x === '');
  };

  const { values, errors, setErrors, handleInputChange, resetForm } = useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      resetForm();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name='fullName'
            label='Full Name'
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />
          <Controls.Input
            label='Email'
            name='email'
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.Input
            label='Mobile'
            name='mobile'
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
          />
          <Controls.DatePicker
            name='joinDate'
            label='Join Date'
            value={values.joineDate}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={6}>
          <Controls.Input name='jobTitle' label='Job Title' value={values.jobTitle} onChange={handleInputChange} />
          <Controls.Input name='company' label='Copmany Name' value={values.company} onChange={handleInputChange} />
          <Controls.Select
            name='departmentId'
            label='Department'
            value={values.departmentId}
            onChange={handleInputChange}
            options={employeeService.getDepartmentCollection()}
            error={errors.departmentId}
          />

          <div>
            <Controls.Button type='submit' text='Submit' />
            <Controls.Button text='Reset' color='default' onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
