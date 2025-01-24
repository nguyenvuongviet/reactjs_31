import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent, selectStudent } from "./formSlice";

export default function Table() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.form);
  const { listStudent } = state;

  const [search, setSearch] = useState("");

  const handleSearch = (e) => setSearch(e.target.value);

  const filteredList = listStudent.filter((student) => {
    return (
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.id.toLowerCase().includes(search.toLowerCase())
    );
  });

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
    dispatch(selectStudent(null));
  };

  const handleSelect = (student) => {
    dispatch(selectStudent(student));
  };

  return (
    <div className="mt-4">
      <div className="mb-4">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Tìm kiếm sinh viên... (theo Mã SV, Họ tên)"
          className="p-2 border rounded w-full"
        />
      </div>

      <h2 className="text-lg font-bold mb-4">Danh sách sinh viên</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Mã SV</th>
            <th className="border px-4 py-2">Họ tên</th>
            <th className="border px-4 py-2">Số điện thoại</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((student) => (
            <tr key={student.id}>
              <td className="border px-4 py-2">{student.id}</td>
              <td className="border px-4 py-2">{student.name}</td>
              <td className="border px-4 py-2">{student.phone}</td>
              <td className="border px-4 py-2">{student.email}</td>
              <td className="border px-4 py-2">
                <div className="flex justify-center space-x-2">
                  <button
                    onClick={() => handleSelect(student)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    Sửa
                  </button>
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Xóa
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
