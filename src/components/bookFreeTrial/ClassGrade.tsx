'use client'; // Mark as Client Component due to hooks (useState, useTheme)

import React, { useState, ReactNode, SyntheticEvent } from 'react'; // Import necessary types
import { useTheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'; // Import Theme type

// Define props interface for TabPanel
interface TabPanelProps {
  children?: ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

// Define return type for a11yProps
function a11yProps(index: number): { id: string; 'aria-controls': string } {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function ClassGrade() {
  const theme: Theme = useTheme(); // Add type annotation for theme
  const [value, setValue] = useState<number>(0); // Add type annotation for state

  interface HandleChangeEvent extends SyntheticEvent {}
  const handleChange = (event: HandleChangeEvent, newValue: number): void => {
    setValue(newValue);
  }

  return (
    <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
      <AppBar
        position='static'
        sx={{
          backgroundColor: '#F1F1F9',
          boxShadow: 'none',
          paddingY: 3,
        }}
      >
        <Tabs
          value={value}
          onChange={(event: SyntheticEvent, newValue: number) => handleChange(event, newValue)} // Type the event and newValue
          variant='fullWidth'
          textColor='inherit'
          indicatorColor='primary'
          aria-label='full width tabs example'
          scrollButtons={false}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            overflowX: 'auto',
            paddingX: 6,
            '& .MuiTab-root': {
              textTransform: 'none',
              marginRight: '16px',
              minWidth: 'auto',
              fontWeight: 'bold',
              fontSize: 16,
              padding: '12px 16px',
              backgroundColor: '#F1F1F9',
              color: '#171717',
              paddingX: 6,
              borderRadius: 20,
              border: ' solid 1px #9193A5',
              '&:hover': {
                backgroundColor: '#f2f2f2',
                color: '#007bff',
              },
              '&.Mui-selected': {
                backgroundColor: '#3198F5',
                color: '#fff',
                paddingX: 6,
                borderRadius: 20,
                border: ' solid 1px #3198F5',
              },
            },
          }}
        >
          <Tab label='Pre-K to Grade 3' {...a11yProps(0)} />
          <Tab label='Grades 4 - 8' {...a11yProps(1)} />
          <Tab label='Grades 9 - 12' {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        {/* Content for Pre-K to Grade 3 */}
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        {/* Content for Grades 4 - 8 */}
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        {/* Content for Grades 9 - 12 */}
      </TabPanel>
    </Box>
  )
}
