import Layout from '../components/Layout'

const tasksMock = [
  { id: 1, title: 'Diseñar login', status: 'pendiente' },
  { id: 2, title: 'Crear layout', status: 'en-progreso' },
  { id: 3, title: 'Conectar backend', status: 'completado' },
  { id: 4, title: 'Probar autenticación', status: 'pendiente' }
]

function TasksPage() {
  const groupedTasks = {
    pendiente: [],
    'en-progreso': [],
    completado: []
  }

  tasksMock.forEach(task => {
    groupedTasks[task.status].push(task)
  })

  return (
    <Layout>
      <h2>Mis Tareas</h2>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        {Object.entries(groupedTasks).map(([status, tasks]) => (
          <div key={status} style={{ flex: 1, border: '1px solid #ccc', padding: '1rem' }}>
            <h3>
              {status === 'pendiente' && '🟨 Pendiente'}
              {status === 'en-progreso' && '🟦 En progreso'}
              {status === 'completado' && '🟩 Completado'}
            </h3>
            {tasks.map(task => (
              <div key={task.id} style={{
                background: '#f9f9f9',
                border: '1px solid #ddd',
                padding: '0.5rem',
                marginTop: '0.5rem'
              }}>
                {task.title}
              </div>
            ))}
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default TasksPage
