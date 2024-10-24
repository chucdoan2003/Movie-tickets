import React, { useState } from "react";

const Modal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Quản lý trạng thái modal

  const openModal = () => setIsOpen(true); // Mở modal
  const closeModal = () => setIsOpen(false); // Đóng modal

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      {/* Nút mở modal */}
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Mở Modal
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Đây là Modal</h2>
            <p className="mb-4 text-gray-600">
              Đây là nội dung bên trong modal.
            </p>
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
