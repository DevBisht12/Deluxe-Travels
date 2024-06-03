import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

export default function InputField({labelName}) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); 

      if (active) {
        setOptions([...topFilms]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={{ margin:'0.5rem 0'}}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label={labelName}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}

const topFilms = [
  
  {
    "name": "Andhra Pradesh",
    "type": "State"
  },
  {
    "name": "Arunachal Pradesh",
    "type": "State"
  },
  {
    "name": "Assam",
    "type": "State"
  },
  {
    "name": "Bihar",
    "type": "State"
  },
  {
    "name": "Chhattisgarh",
    "type": "State"
  },
  {
    "name": "Goa",
    "type": "State"
  },
  {
    "name": "Gujarat",
    "type": "State"
  },
  {
    "name": "Haryana",
    "type": "State"
  },
  {
    "name": "Himachal Pradesh",
    "type": "State"
  },
  {
    "name": "Jharkhand",
    "type": "State"
  },
  {
    "name": "Karnataka",
    "type": "State"
  },
  {
    "name": "Kerala",
    "type": "State"
  },
  {
    "name": "Madhya Pradesh",
    "type": "State"
  },
  {
    "name": "Maharashtra",
    "type": "State"
  },
  {
    "name": "Manipur",
    "type": "State"
  },
  {
    "name": "Meghalaya",
    "type": "State"
  },
  {
    "name": "Mizoram",
    "type": "State"
  },
  {
    "name": "Nagaland",
    "type": "State"
  },
  {
    "name": "Odisha",
    "type": "State"
  },
  {
    "name": "Punjab",
    "type": "State"
  },
  {
    "name": "Rajasthan",
    "type": "State"
  },
  {
    "name": "Sikkim",
    "type": "State"
  },
  {
    "name": "Tamil Nadu",
    "type": "State"
  },
  {
    "name": "Telangana",
    "type": "State"
  },
  {
    "name": "Tripura",
    "type": "State"
  },
  {
    "name": "Uttar Pradesh",
    "type": "State"
  },
  {
    "name": "Uttarakhand",
    "type": "State"
  },
  {
    "name": "West Bengal",
    "type": "State"
  },
  {
    "name": "Andaman and Nicobar Islands",
    "type": "Union Territory"
  },
  {
    "name": "Chandigarh",
    "type": "Union Territory"
  },
  {
    "name": "Dadra and Nagar Haveli and Daman and Diu",
    "type": "Union Territory"
  },
  {
    "name": "Lakshadweep",
    "type": "Union Territory"
  },
  {
    "name": "Delhi",
    "type": "Union Territory"
  },
  {
    "name": "Puducherry",
    "type": "Union Territory"
  },
  {
    "name": "Ladakh",
    "type": "Union Territory"
  },
  {
    "name": "Jammu and Kashmir",
    "type": "Union Territory"
  }


];