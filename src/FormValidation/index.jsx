import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, updateStudent, selectStudent } from "./formSlice";

export default function FormValidation() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.form);
  const { studentSelected } = state;

  const [info, setInfo] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    if (studentSelected) {
      setInfo(studentSelected);
    } else {
      setInfo({
        id: "",
        name: "",
        phone: "",
        email: "",
      });
    }
  }, [studentSelected]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentSelected) {
      dispatch(updateStudent(info));
    } else {
      dispatch(addStudent(info));
    }
    setInfo({
      id: "",
      name: "",
      phone: "",
      email: "",
    });
    dispatch(selectStudent(null));
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded bg-white">
      <h2 className="text-lg font-bold mb-4">Thông tin sinh viên</h2>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="id"
          value={info.id}
          placeholder="Mã SV"
          onChange={handleChange}
          className={`p-2 border rounded ${
            studentSelected ? "bg-gray-200 border-gray-500" : ""
          }`}
          required
          readOnly={!!studentSelected}
        />
        <input
          type="text"
          name="name"
          value={info.name}
          placeholder="Họ tên"
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          name="phone"
          value={info.phone}
          placeholder="Số điện thoại"
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={info.email}
          placeholder="Email"
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        {studentSelected ? "Cập nhật sinh viên" : "Thêm sinh viên"}
      </button>
    </form>
  );
}
