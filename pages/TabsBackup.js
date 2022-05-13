import * as React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import ShopsList from './shops/ShopsList'
import BookmarksList from './bookmarks/BookmarksList'
import FShopsList from './Fshops/FShopsList'
import FDiscountsList from './Fdiscounts/FDiscountsList'
import FBookmarksList from './Fbookmarks/FBookmarksList'

export default function LabTabs() {
  const [value, setValue] = React.useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            // indicatorColor="secondar"
            variant="fullWidth"
            // aria-label="lab API tabs example"
          >
            <Tab label="Shops" value="1" wrapped />
            <Tab label="Discounts" value="2" wrapped />
            <Tab label="Bookmarks" value="3" wrapped />
          </TabList>
        </Box>
        <TabPanel value="1">
          <FShopsList />
        </TabPanel>
        <TabPanel value="2">
          <FDiscountsList />
        </TabPanel>
        <TabPanel value="3">
          <FBookmarksList />
        </TabPanel>
      </TabContext>
    </Box>
  )
}

// function TabPanel(props) {
//   const { children } = props
//   return <div>{children}</div>
// }
