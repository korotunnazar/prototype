import React from 'react';
import {useSearchParams} from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import MyTextField from "../../components/text-field";
import "../pages.scss"

const Login = () => {

    const [userID, setUserID] = useSearchParams();
    let uid = userID.get("user");

    return (
        <div className="page-container">
            <Button href="/" className = 'return-button'>
                <Typography>Повернутися</Typography>
            </Button>
            {
                uid === "1" ? (
                    <Box className = "mainbox-container">
                        <Typography className = 'login-label' >
                            Вхід - Адміністратор
                        </Typography>
                        <MyTextField label='Пароль'/>
                        <Button className='submit-button'>
                            <Typography>Увійти</Typography>
                        </Button>
                    </Box>
                ) : (
                    uid === "2" ? (
                        <Box className = "mainbox-container">
                            <Typography className = 'login-label'>
                                Вхід - Менеджер
                            </Typography>
                            <MyTextField label='Пароль'/>
                            <Button className='submit-button'>
                                <Typography>Увійти</Typography>
                            </Button>
                        </Box>
                    ) : (
                        <Box className = "mainbox-container">
                            <Typography className = 'login-label'>
                                Вхід - Персонал
                            </Typography>
                            <MyTextField label='Пароль'/>
                            <Button className='submit-button'>
                                <Typography>Увійти</Typography>
                            </Button>
                        </Box>
                    )
                )
            }
        </div>
    );
};

export default Login;