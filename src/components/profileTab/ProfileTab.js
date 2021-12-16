import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { IoPersonOutline, IoCalendarOutline } from 'react-icons/io5'
import ProfileTabContent1 from '../profileTabContent1/ProfileTabContent1';
import ProfileTabContent2 from '../profileTabContent2/ProfileTabContent2';




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

export default function BasicTabs({ artist }) {
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
                    <Tab label={<IoPersonOutline size={22} />} {...a11yProps(0)} />
                    <Tab label={<IoCalendarOutline size={22} />} {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <ProfileTabContent1 artist={artist} bio={artist.bio} styles={artist.styles} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ProfileTabContent2 travelPlans={artist.travelPlans} />
            </TabPanel>
        </Box>
    );
}
