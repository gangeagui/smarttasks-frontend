import "../styles/usersPage.css";
import { useState, useEffect } from "react";
import { getUsers, deleteUser, createUser, updateUser } from "../services/userService";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import UserFormModal from "../components/UserFormModal";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      setError(err.message || "Error al cargar usuarios");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async () => {
    if (!userToDelete) return;
    try {
      await deleteUser(userToDelete.id);
      setUsers(users.filter((u) => u.id !== userToDelete.id));
      setShowConfirmModal(false);
      setSuccess("Usuario eliminado correctamente");
    } catch (err) {
      setError(err.message || "Error al eliminar usuario");
    }
  };

  const handleSaveUser = async (formData) => {
    try {
      if (currentUser) {
        await updateUser(currentUser.id, formData);
        setSuccess("Usuario actualizado con éxito");
      } else {
        await createUser(formData);
        setSuccess("Usuario creado con éxito");
      }
      setShowModal(false);
      setCurrentUser(null);
      await fetchUsers();
    } catch (err) {
      setError(err.message || "Error al guardar usuario");
    }
  };

  return (
    <div className="users-container">
      <div className="users-header">
        <h2>Gestión de Usuarios</h2>
        <button
          className="create-button"
          onClick={() => {
            setCurrentUser(null);
            setShowModal(true);
          }}
        >
          <FaPlus style={{ marginRight: "0.4rem" }} />
          Nuevo Usuario
        </button>
      </div>

      {error && <p className="alert error">{error}</p>}
      {success && <p className="alert success">{success}</p>}

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
                    onClick={() => {
                      setCurrentUser(user);
                      setShowModal(true);
                    }}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="action-button delete"
                    onClick={() => {
                      setUserToDelete(user);
                      setShowConfirmModal(true);
                    }}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <UserFormModal
        show={showModal}
        onClose={() => {
          setShowModal(false);
          setCurrentUser(null);
        }}
        onSave={handleSaveUser}
        user={currentUser}
      />

      <ConfirmDeleteModal
        show={showConfirmModal}
        onClose={() => {
          setShowConfirmModal(false);
          setUserToDelete(null);
        }}
        onConfirm={handleDelete}
        user={userToDelete}
      />
    </div>
  );
}

export default UsersPage;
