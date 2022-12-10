import { AppBar, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import AnimationIcon from '@mui/icons-material/Animation';
import React, { useState } from 'react';
import DrawerComp from '../Drawer/DrawerComp';


const PAGES = ["Intro", "service", "About", "Contact"]

const Home = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div>
            <React.Fragment>
                <AppBar sx={{ background: "#141850" }}>
                    <Toolbar>
                        <AnimationIcon></AnimationIcon>
                        {
                            isMatch ? (
                                <>
                                    <Typography sx= {{fontSize:'1.5rem',paddingLeft:'10px'}}>Tawheed</Typography>
                                    <DrawerComp>
                                    </DrawerComp>
                                </>
                            )
                                :
                                (<Tabs sx={{ marginLeft: 'auto' }} textColor='inherit' value={value} onChange={(e, value) => setValue(value)} indicatorColor='primary'>
                                    {
                                        PAGES.map((page, index) => (
                                            <Tab key={index} label={page} />
                                        ))
                                    }
                                </Tabs>)

                        }



                    </Toolbar>

                </AppBar>
            </React.Fragment>
        </div>
    );
};

export default Home;