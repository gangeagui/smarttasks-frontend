import { useState } from "react";
import "../styles/tasksPage.css";

function TasksPage() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Configurar proyecto", status: "Pendiente" },
    { id: 2, title: "Diseñar interfaz", status: "Progreso" },
    { id: 3, title: "Revisión final", status: "Completada" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), title: newTask, status: "Pendiente" }]);
      setNewTask("");
      setShowModal(false);
    }
  };

  return (
    <div className="tasks-container">
      <div className="tasks-header">
        <h1>Tus Tareas</h1>
        <button className="btn-primary" onClick={() => setShowModal(true)}>
          + Nueva Tarea
        </button>
      </div>

      <div className="tasks-list">
        {tasks.map((task) => (
          <div key={task.id} className={`task-card ${task.status.toLowerCase()}`}>
            <h3>{task.title}</h3>
            <span className="status">{task.status}</span>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Nueva Tarea</h2>
            <input
              type="text"
              placeholder="Título de la tarea"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <div className="modal-actions">
              <button className="btn-secondary" onClick={() => setShowModal(false)}>
                Cancelar
              </button>
              <button className="btn-primary" onClick={handleAddTask}>
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TasksPage;
