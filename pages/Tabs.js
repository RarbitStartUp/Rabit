import * as React from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { TabList, TabContext, TabPanel } from '@mui/lab'
import ListingShops from './ListingShops'

// function LinkTab(props) {
//   return (
//     <Tab
//       component="a"
//       onClick={(event) => {
//         event.preventDefault()
//       }}
//       {...props}
//     />
//   )
// }

export default function NavTabs() {
  const [selectedTab, setSelectedTab] = React.useState('1')

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue)
  }
  // const [value, setValue] = React.useState(0)

  // const handleChange = (event, newValue) => {
  //   setValue(newValue)
  // }

  return (
    // <Box sx={{ width: '100%' }}>
    //   <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
    //     <LinkTab label="Page One" href="/Login" />
    //     <LinkTab label="Page Two" href="/trash" />
    //     <LinkTab label="Page Three" href="/spam" />
    //   </Tabs>
    // </Box>
    // <div className="">
    <TabContext value={selectedTab}>
      <TabList
        onChange={handleChange}
        arial-label="lab API tabs example"
        centered
      >
        <Tab label="Shops" value="1" />
        <Tab label="Discounts" value="2" />
        <Tab label="Bookmark" value="3" />
      </TabList>
      <TabPanel value="1">
        <ListingShops />
      </TabPanel>
      <TabPanel value="2">ItemTwo</TabPanel>
      <TabPanel value="3">ItemThree</TabPanel>
    </TabContext>
    // </div>
  )
}
