import React from 'react';
import {
    Box,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography
} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";

interface MTFProps {
    label: string,
}

const MyTextField = ({label}:MTFProps) => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <Box component="form"
             sx={{
                 '& > :not(style)': { m: 1, width: '25ch' },
             }}
             noValidate
             autoComplete="off"
             className = "text-field-box"
        >

            <TextField id="outlined-basic" label="Логін" variant="outlined" className = "login-text-field"/>

            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                    <Typography>{label}</Typography>
                </InputLabel>
                <OutlinedInput
                    className='text-color'
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                sx = {{color: '#ffffff8a', borderColor: 'violetblue'}}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label = {label}
                />
            </FormControl>
        </Box>
    );
};

export default MyTextField;