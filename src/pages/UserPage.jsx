import "../styles/register.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers, deleteUser } from "../services/userService";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

function UserPage() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        console.error("Error al cargar usuarios:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar este usuario?")) {
      try {
        await deleteUser(id);
        setUsers(users.filter((u) => u.id !== id));
      } catch (err) {
        console.error("Error al eliminar usuario:", err);
      }
    }
  };

  const handleCreate = () => {
    navigate("/register");
  };

  const handleEdit = (id) => {
    navigate(`/users/edit/${id}`);
  };

  return (
    <div className="users-container">
      <div className="users-header">
        <h2>Usuarios</h2>
        <button className="create-button" onClick={handleCreate}>
          <FaPlus style={{ marginRight: "0.4rem" }} />
          Nuevo Usuario
        </button>
      </div>

      {loading ? (
        <p>Cargando usuarios...</p>
      ) : (
        <table className="users-table">
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Correo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="action-button edit"
                    onClick={() => handleEdit(user.id)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="action-button delete"
                    onClick={() => handleDelete(user.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UserPage;
