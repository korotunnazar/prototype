import React from 'react';
import '../pages.scss'
import {Box, Button, Typography} from "@mui/material";

const Home = () => {

    return (
        <div className="page-container">
            <Box className="home-box">
                <Box className="home-box-title">
                    <Typography>
                        Вхід в програму BoxManage
                    </Typography>
                </Box>
                <Button href = "/login?user=1" className="home-box-button">
                    <Typography>
                        Адміністратор
                    </Typography>
                </Button>
                <Button href = "/login?user=2" className="home-box-button">
                    <Typography>
                        Менеджер
                    </Typography>
                </Button>
                <Button href = "/login?user=3" className="home-box-button">
                    <Typography>
                        Персонал
                    </Typography>
                </Button>
            </Box>
        </div>
    );
};

export default Home;