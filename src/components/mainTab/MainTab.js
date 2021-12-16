import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MainTabContentTattoo from '../mainTabContentTattoo/MainTabContentTattoo';
import MainTabContentFlash from '../mainTabContentFlash/MainTabContentFlash';
import MainTabContentWorkplace from '../mainTabContentWorkplace/MainTabContentWorkplace';



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs({ images, flash, workplace }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                >
                    <Tab style={{textTransform: 'capitalize', fontWeight:700}} label="Tattoo" {...a11yProps(0)} />
                    <Tab style={{textTransform: 'capitalize', fontWeight:700}} label="Flash" {...a11yProps(1)} />
                    <Tab style={{textTransform: 'capitalize', fontWeight:700}} label="Workplace" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <MainTabContentTattoo images={images} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <MainTabContentFlash flash={flash} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <MainTabContentWorkplace workplace={workplace}/>               
            </TabPanel>
        </Box>
    );
}
