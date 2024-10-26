"use client";
import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { IconSearch } from "@tabler/icons-react";
import { SvgAdd, SvgEdit, SvgDelete } from "../ui/Svg";
import Modal from "../modal/modal";
import ModalDelete from "../modal/modalDelete";
import {
  CascadeSelect,
  CascadeSelectChangeEvent,
} from "primereact/cascadeselect";
import { Puskesmas } from "@/types/puskesmas";

interface City {
  cname: string;
  code: string;
}

interface CountryState {
  name: string;
  cities: City[];
}

interface Country {
  name: string;
  code: string;
  states: CountryState[];
}

const TablePuskesmas: React.FC = () => {
  const initialState = {
    id: 0,
    nama: "",
    kecamatan: "",
    kabupaten: "",
  };

  const [globalFilter, setGlobalFilter] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedPuskesmas, setselectedPuskesmas] = useState<Puskesmas | null>(
    null,
  );
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [formData, setFormData] = useState<Puskesmas>(initialState);
  const [puskesmas, setPuskesmas] = useState<Puskesmas[]>([]);

  const countries: Country[] = [
    {
      name: "Banyuwangi",
      code: "BWI",
      states: [
        {
          name: "Kabat",
          cities: [
            { cname: "Kedayunan", code: "A-SY" },
            { cname: "Tambong", code: "A-NE" },
          ],
        },
        {
          name: "Rogojampi",
          cities: [
            { cname: "Brisbane", code: "A-BR" },
            { cname: "Townsville", code: "A-TO" },
          ],
        },
      ],
    },
    {
      name: "Maluku",
      code: "MLK",
      states: [
        {
          name: "A",
          cities: [
            { cname: "A1", code: "C-MO" },
            { cname: "B1", code: "C-QU" },
          ],
        },
      ],
    },
  ];

  const puskesmasData: Puskesmas[] = [
    {
      id: 1,
      nama: "Puskesmas Suka Sehat",
      kecamatan: "Suka Maju",
      kabupaten: "Banyuwangi",
    },
    {
      id: 2,
      nama: "Puskesmas Sentosa",
      kecamatan: "Aman Jaya",
      kabupaten: "Banyuwangi",
    },
    {
      id: 3,
      nama: "Puskesmas Mulia Bersama",
      kecamatan: "Sumber Makmur",
      kabupaten: "Banyuwangi",
    },
    {
      id: 4,
      nama: "Puskesmas Harapan Kita",
      kecamatan: "Luhur Mulyo",
      kabupaten: "Banyuwangi",
    },
    {
      id: 5,
      nama: "Puskesmas Sehat Makmur",
      kecamatan: "Karya Bakti",
      kabupaten: "Banyuwangi",
    },
  ];

  useEffect(() => {
    setPuskesmas(puskesmasData);
  }, []);

  const resetForm = () => {
    setFormData(initialState);
    setIsEditMode(false);
    setselectedPuskesmas(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddOrUpdateData = () => {
    if (!formData.nama || !formData.kecamatan || !formData.kabupaten) {
      alert("Input Yang Benar");
      return;
    }

    if (isEditMode && selectedPuskesmas) {
      const updatedData = puskesmas.map((item) =>
        item.id === selectedPuskesmas.id ? { ...formData, id: item.id } : item,
      );
      setPuskesmas(updatedData);
    } else {
      const newPuskesmas = {
        ...formData,
        id: puskesmas.length + 1,
      };

      setPuskesmas([...puskesmas, newPuskesmas]);
    }

    setIsModalVisible(false);
    resetForm();
  };

  const handleEdit = (data: Puskesmas) => {
    setIsEditMode(true);
    setselectedPuskesmas(data);
    setFormData(data);
    setIsModalVisible(true);
  };

  const handleDelete = (data: Puskesmas) => {
    setselectedPuskesmas(data);
    setIsDeleteModalVisible(true);
  };

  const confirmDelete = () => {
    if (selectedPuskesmas) {
      setPuskesmas(
        puskesmas.filter((item) => item.id !== selectedPuskesmas.id),
      );
      setselectedPuskesmas(null);
    }
  };

  const header = (
    <div className="mb-1 flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <h2 className="pb-1 text-2xl font-bold text-black">Data Puskesmas</h2>
        <p className="text-normal font-normal text-gray-500">
          Digunakan untuk menampilkan data puskesmas
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
            className="h-11 rounded-lg border border-gray-300 py-2 pl-10 pr-4"
          />
        </span>
        <div>
          <CascadeSelect
            value={selectedCity}
            onChange={(e: CascadeSelectChangeEvent) => setSelectedCity(e.value)}
            options={countries}
            optionLabel="cname"
            optionGroupLabel="name"
            optionGroupChildren={["states", "cities"]}
            className="md:w-14rem flex h-11 w-full items-center"
            breakpoint="767px"
            placeholder="Select a City"
            style={{ minWidth: "14rem" }}
          />
        </div>
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

  const actionTemplate = (data: Puskesmas) => (
    <div className="flex items-center gap-2">
      <div className="cursor-pointer" onClick={() => handleEdit(data)}>
        <SvgEdit />
      </div>
      <div className="cursor-pointer" onClick={() => handleDelete(data)}>
        <SvgDelete />
      </div>
    </div>
  );

  const deleteModalContent = selectedPuskesmas && (
    <>
      <p>Apakah Anda yakin ingin menghapus data puskesmas berikut?</p>
      <ul className="mt-2 list-disc pl-5">
        <li>
          <strong>Nama Puskesmas:</strong> {selectedPuskesmas.nama}
        </li>
        <li>
          <strong>Kecamatan:</strong> {selectedPuskesmas.kecamatan}
        </li>
        <li>
          <strong>Kabupaten:</strong> {selectedPuskesmas.kabupaten}
        </li>
      </ul>
      <p className="mt-2">Tindakan ini tidak dapat dibatalkan.</p>
    </>
  );

  return (
    <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
      <div className="max-w-full overflow-x-auto">
        <DataTable
          value={puskesmas}
          dataKey="id"
          paginator
          rows={10}
          className="datatable-responsive"
          header={header}
          globalFilter={globalFilter}
          globalFilterFields={["nama", "kecamatan", "kabupaten"]}
        >
          <Column
            header="No"
            field="id"
            headerStyle={{ height: "54px", width: "4rem" }}
            headerClassName="bg-[#F7F9FC] text-black rounded-l-lg"
            className="text-center"
          />

          <Column
            field="nama"
            header="Nama Puskesmas"
            sortable
            headerClassName="bg-[#F7F9FC] text-black"
            style={{ minWidth: "10rem" }}
          />

          <Column
            field="kecamatan"
            header="Kecamatan"
            sortable
            headerClassName="bg-[#F7F9FC] text-black"
            style={{ minWidth: "10rem" }}
          />

          <Column
            field="kabupaten"
            header="Kabupaten"
            sortable
            headerClassName="bg-[#F7F9FC] text-black"
            style={{ minWidth: "10rem" }}
          />

          <Column
            header="Aksi"
            headerClassName="bg-[#F7F9FC] text-black rounded-r-lg text-center"
            body={actionTemplate}
            style={{ minWidth: "5rem" }}
          />
        </DataTable>
      </div>

      <Modal
        isOpen={isModalVisible}
        title={isEditMode ? "Perbarui Data Puskemas" : "Tambah Data Puskemas"}
        onClose={() => {
          setIsModalVisible(false);
          resetForm();
        }}
        onConfirm={handleAddOrUpdateData}
      >
        <div className="space-y-4">
          <div className="mb-4">
            <label
              htmlFor="namaPuskesmas"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Nama Puskesmas
            </label>
            <InputText
              value={formData.nama}
              onChange={handleInputChange}
              id="namaPuskesmas"
              name="nama"
              className="w-full rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan Nama Puskesmas"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="kabupaten"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Kabupaten
            </label>
            <InputText
              value={formData.kabupaten}
              onChange={handleInputChange}
              id="kabupaten"
              name="kabupaten"
              className="w-full rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan Kabupaten"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="kecamatan"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Kecamatan
            </label>
            <InputText
              value={formData.kecamatan}
              onChange={handleInputChange}
              id="kecamatan"
              name="kecamatan"
              className="w-full rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan Kecamatan"
            />
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

export default TablePuskesmas;
