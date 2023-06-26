import { observer } from 'mobx-react'
import { useStore } from '../stores'
import TextWrapper from './TextWrapper'
import TaskItem from './TaskItem'

const TaskList = () => {
  const store = useStore()

  return (
    <div className="mt-6">
      {store.task.tasks.map((task) => (
        <TaskItem key={task.id} task={task}></TaskItem>
      ))}
      <TextWrapper className="p-3">Completed ({store.task.completedTasks.length})</TextWrapper>
      {store.task.completedTasks.map((task) => (
        <TaskItem key={task.id} task={task}></TaskItem>
      ))}
    </div>
  )
}

export default observer(TaskList)
