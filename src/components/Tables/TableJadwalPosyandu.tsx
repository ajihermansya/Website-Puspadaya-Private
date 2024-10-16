"use client";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import { Column, ColumnBodyOptions } from "primereact/column";
import { IconSearch, IconClock } from "@tabler/icons-react";
import { Posyandu } from "@/types/posyandu";
import { SvgAdd, SvgEdit, SvgDelete } from "../ui/Svg";
import Modal from "../modal/modal";
import { Calendar } from "primereact/calendar";
import ModalDelete from "../modal/modalDelete";

const TableJadwalPosyandu: React.FC = () => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedPosyandu, setSelectedPosyandu] = useState<Posyandu | null>(
    null,
  );

  // State for form inputs
  const [formData, setFormData] = useState<Posyandu>({
    id: 0,
    namaPosyandu: "",
    lokasi: "",
    tanggalPelaksanaan: null,
    waktuMulai: "",
    waktuSelesai: "",
  });

  // State for the table data
  const [dataPosyandu, setDataPosyandu] = useState<Posyandu[]>([
    {
      id: 1,
      namaPosyandu: "Posyandu Mawar 6",
      lokasi: "Balai Desa",
      tanggalPelaksanaan: new Date("2024-10-17"),
      waktuMulai: "09:00",
      waktuSelesai: "12:00",
    },
    {
      id: 2,
      namaPosyandu: "Posyandu Mawar 2",
      lokasi: "Rumah Bu Sri",
      tanggalPelaksanaan: new Date("2024-10-17"),
      waktuMulai: "09:00",
      waktuSelesai: "12:00",
    },
  ]);

  const resetForm = () => {
    setFormData({
      id: 0,
      namaPosyandu: "",
      lokasi: "",
      tanggalPelaksanaan: null,
      waktuMulai: "",
      waktuSelesai: "",
    });
    setIsEditMode(false);
    setSelectedPosyandu(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date: Date | null) => {
    setFormData({ ...formData, tanggalPelaksanaan: date });
  };

  const handleAddOrUpdateData = () => {
    if (!formData.tanggalPelaksanaan) return;

    if (isEditMode && selectedPosyandu) {
      const updatedData = dataPosyandu.map((item) =>
        item.id === selectedPosyandu.id ? { ...formData, id: item.id } : item,
      );
      setDataPosyandu(updatedData);
    } else {
      const newPosyandu = {
        ...formData,
        id: dataPosyandu.length + 1,
      };
      setDataPosyandu([...dataPosyandu, newPosyandu]);
    }

    setIsModalVisible(false);
    resetForm();
  };

  const handleEdit = (data: Posyandu) => {
    setIsEditMode(true);
    setSelectedPosyandu(data);
    setFormData(data);
    setIsModalVisible(true);
  };

  const handleDelete = (data: Posyandu) => {
    setSelectedPosyandu(data);
    setIsDeleteModalVisible(true);
  };

  const confirmDelete = () => {
    if (selectedPosyandu) {
      setDataPosyandu(
        dataPosyandu.filter((item) => item.id !== selectedPosyandu.id),
      );
      setSelectedPosyandu(null);
    }
  };

  const header = (
    <div className="mb-1 flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <h2 className="pb-1 text-2xl font-bold text-black">Jadwal Posyandu</h2>
        <p className="text-normal font-normal text-gray-500">
          Digunakan untuk menampilkan jadwal posyandu
        </p>
      </div>
      <div className="mt-2 flex items-center justify-end space-x-4 md:mt-0">
        <span className="relative flex items-center">
          <IconSearch className="absolute left-3 text-gray-500" />
          <InputText
            type="search"
            onInput={(e) =>
              setGlobalFilter((e.target as HTMLInputElement).value)
            }
            placeholder="Search..."
            className="rounded-lg border border-gray-300 py-2 pl-10 pr-4"
          />
        </span>
        <div
          className="flex cursor-pointer items-center justify-center rounded-md border p-[10px]"
          onClick={() => {
            resetForm();
            setIsModalVisible(true);
          }}
        >
          <SvgAdd />
        </div>
      </div>
    </div>
  );

  const actionTemplate = (data: Posyandu) => (
    <div className="flex items-center gap-2">
      <div className="cursor-pointer" onClick={() => handleEdit(data)}>
        <SvgEdit />
      </div>
      <div className="cursor-pointer" onClick={() => handleDelete(data)}>
        <SvgDelete />
      </div>
    </div>
  );
  const deleteModalContent = selectedPosyandu && (
    <>
      <p>Apakah Anda yakin ingin menghapus jadwal Posyandu berikut?</p>
      <ul className="mt-2 list-disc pl-5">
        <li>
          <strong>Nama Posyandu:</strong> {selectedPosyandu.namaPosyandu}
        </li>
        <li>
          <strong>Lokasi:</strong> {selectedPosyandu.lokasi}
        </li>
        <li>
          <strong>Tanggal:</strong>{" "}
          {selectedPosyandu.tanggalPelaksanaan?.toLocaleDateString()}
        </li>
        <li>
          <strong>Waktu:</strong> {selectedPosyandu.waktuMulai} -{" "}
          {selectedPosyandu.waktuSelesai}
        </li>
      </ul>
      <p className="mt-2">Tindakan ini tidak dapat dibatalkan.</p>
    </>
  );

  const dateBodyTemplate = (rowData: Posyandu) => {
    return rowData.tanggalPelaksanaan?.toLocaleDateString();
  };

  return (
    <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
      <div className="max-w-full overflow-x-auto">
        <DataTable
          value={dataPosyandu}
          dataKey="id"
          paginator
          rows={5}
          className="datatable-responsive"
          header={header}
          globalFilter={globalFilter}
          globalFilterFields={["namaPosyandu", "lokasi"]}
        >
          <Column field="id" header="No" />
          <Column field="namaPosyandu" header="Nama Posyandu" />
          <Column field="lokasi" header="Lokasi" />
          <Column
            field="tanggalPelaksanaan"
            header="Tanggal Pelaksanaan"
            body={dateBodyTemplate}
          />
          <Column field="waktuMulai" header="Waktu Mulai" />
          <Column field="waktuSelesai" header="Waktu Selesai" />
          <Column header="Aksi" body={actionTemplate} />
        </DataTable>
      </div>

      <Modal
        isOpen={isModalVisible}
        title={
          isEditMode ? "Perbarui Jadwal Posyandu" : "Tambah Jadwal Posyandu"
        }
        onClose={() => {
          setIsModalVisible(false);
          resetForm();
        }}
        onConfirm={handleAddOrUpdateData}
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nama Posyandu
            </label>
            <InputText
              name="namaPosyandu"
              value={formData.namaPosyandu}
              onChange={handleInputChange}
              placeholder="Nama Posyandu"
              className="w-full rounded-md border p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Lokasi
            </label>
            <InputText
              name="lokasi"
              value={formData.lokasi}
              onChange={handleInputChange}
              placeholder="Lokasi"
              className="w-full rounded-md border p-2"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tanggal Pelaksanaan
              </label>
              <Calendar
                value={formData.tanggalPelaksanaan}
                onChange={(e) => handleDateChange(e.value as Date)}
                placeholder="Pilih tanggal"
                dateFormat="dd/mm/yy"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Waktu Mulai
              </label>
              <div className="relative">
                <InputText
                  name="waktuMulai"
                  value={formData.waktuMulai}
                  onChange={handleInputChange}
                  placeholder="Waktu Mulai"
                  className="w-full rounded-md border p-2"
                />
                <IconClock className="absolute right-2 top-3 text-gray-500" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Waktu Selesai
              </label>
              <div className="relative">
                <InputText
                  name="waktuSelesai"
                  value={formData.waktuSelesai}
                  onChange={handleInputChange}
                  placeholder="Waktu Selesai"
                  className="w-full rounded-md border p-2"
                />
                <IconClock className="absolute right-2 top-3 text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <ModalDelete
        visible={isDeleteModalVisible}
        onHide={() => setIsDeleteModalVisible(false)}
        onConfirm={confirmDelete}
        headerTitle="Hapus Jadwal Posyandu"
      >
        {deleteModalContent}
      </ModalDelete>
    </div>
  );
};

export default TableJadwalPosyandu;
