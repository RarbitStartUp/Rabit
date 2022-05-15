import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import ListAltIcon from '@material-ui/icons/ListAlt'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import SettingsIcon from '@material-ui/icons/Settings'
import { useRouter } from 'next/router'

const useStyles = makeStyles(
  {
    custom: {
      width: '100%',
      margin: '0 auto',
      position: 'fixed',
      bottom: '0px',
      boxShadow:
        'rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px',
    },
  },
  { name: 'MuiBottomNavigation' }
)

export default function MuiBottomNavigation() {
  const classes = useStyles()
  const router = useRouter()
  const [value, setValue] = React.useState(router.pathname.slice(1)) // アクセス時のURLを解析して、適切なナビゲーションボタンをアクティブにする。

  React.useEffect(() => {
    router.prefetch('/setting')
    router.prefetch('/create')
  }, [])
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
        setTimeout(() => {
          router.push(`${newValue}`)
        }, 250)
      }}
      showLabels
      classes={{
        root: classes.custom,
      }}
    >
      <BottomNavigationAction
        label="一覧"
        value="Vote"
        icon={<ListAltIcon />}
      />
      <BottomNavigationAction
        label="作成"
        value="create"
        icon={<AddCircleOutlineIcon />}
      />
      <BottomNavigationAction
        label="設定"
        value="setting"
        icon={<SettingsIcon />}
      />
    </BottomNavigation>
  )
}
