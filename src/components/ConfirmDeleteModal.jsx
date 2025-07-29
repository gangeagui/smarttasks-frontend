import "../styles/modal.css";

function ConfirmDeleteModal({ show, onClose, onConfirm, user }) {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h3>¿Eliminar Usuario?</h3>
        <p>
          Estás a punto de eliminar al usuario <strong>{user?.username}</strong>.
        </p>

        <div className="modal-actions">
          <button className="btn cancel" onClick={onClose}>
            Cancelar
          </button>
          <button className="btn delete" onClick={onConfirm}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;
