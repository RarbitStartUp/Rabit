import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

interface LinkTabProps {
  label?: string
  href?: string
}

export default function Testing(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault()
      }}
      {...props}
    />
  )
}
