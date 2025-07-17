import React from "react";
//import "../styles/userModal.css";

function ConfirmDeleteModal({ show, onClose, onConfirm, user }) {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Eliminar usuario</h3>
        <p>
          ¿Estás seguro de que quieres eliminar al usuario{" "}
          <strong>{user?.username}</strong>?
        </p>
        <div className="modal-actions">
          <button className="btn btn-secondary" onClick={onClose}>
            Cancelar
          </button>
          <button className="btn btn-danger" onClick={onConfirm}>
            Sí, eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;
