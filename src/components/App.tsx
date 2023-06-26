import { observer } from 'mobx-react'
import { useEffect } from 'react'
import ThemeButton from './ThemeButton'
import Logo from '../logo.svg'
import {useStore} from "../stores"

const App = () => {
  const store = useStore()

  useEffect(() => {
    document.body.setAttribute('data-mode', store.theme.themeMode)
  }, [store.theme.themeMode])

  return (
    <div className="max-w-screen-md mx-auto p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={Logo} alt="logo"></img>
          <div className="text-xl text-primary">Todo</div>
        </div>
        <ThemeButton />
      </div>
      {/* <TaskInput></TaskInput>
      <TaskList></TaskList> */}
    </div>
  )
}

export default observer(App)
