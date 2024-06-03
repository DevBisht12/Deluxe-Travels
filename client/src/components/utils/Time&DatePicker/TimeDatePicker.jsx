
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function MUIDateTimePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={['DateTimePicker', 'DateTimePicker', 'DateTimePicker']}
      >
        <DateTimePicker sx={{width:337,margin:'0.5rem 0'}} label="Date and Time" name="startDateTime" />
      </DemoContainer>
    </LocalizationProvider>
  );
}

