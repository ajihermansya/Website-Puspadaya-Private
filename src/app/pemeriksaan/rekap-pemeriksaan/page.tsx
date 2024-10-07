'use client';

import { IconPencil, IconTrash } from '@tabler/icons-react';
import Link from 'next/link';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dialog } from 'primereact/dialog'; // Import Dialog
import { ProgressBar } from 'primereact/progressbar';
import { Toast } from 'primereact/toast';
import React, { useEffect, useRef, useState } from 'react';

interface DataRow {
  id: number;
  contact_ref: string;
  nik: string;     // NIK
  status: string;      // Status
}

const statusColors: { [key: string]: string } = {
  'Stunting': 'bg-red-200',
  'Risiko': 'bg-yellow-200',
  'Normal': 'bg-green-200',
  'Gizi Buruk': 'bg-red-300',
  'Gizi Kurang': 'bg-orange-200',
  'Gizi Baik': 'bg-green-300',
  'Berisiko Gizi Lebih': 'bg-yellow-300',
  'Gizi Lebih': 'bg-orange-300',
  'Obesitas': 'bg-red-500',
};

const TablesPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dataWithDisplayId, setDataWithDisplayId] = useState<DataRow[]>([]);
  const [formData, setFormData] = useState<{ nama: string }>({ nama: '' });
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const toast = useRef<Toast>(null);

  const [information, setInformation] = useState<DataRow | null>(null);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      const dummyData: DataRow[] = Array.from({ length: 30 }, (_, index) => ({
        id: index + 1,
        contact_ref: `Nama Lengkap ${index + 1}`, // Nama Lengkap
        nik: generateNIK(), // NIK acak 16 angka
        status: getRandomStatus(), // Status acak
      }));
      setDataWithDisplayId(dummyData);
    } catch (err) {
      setError('Error fetching data');
      toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Failed to load data', life: 3000 });
    } finally {
      setLoading(false);
    }
  }, []);

  const generateNIK = (): string => {
    let nik = '';
    for (let i = 0; i < 16; i++) {
      nik += Math.floor(Math.random() * 10); // Menghasilkan angka 0-9
    }
    return nik;
  };

  const rowClassName = (data: DataRow) => {
    return data.id % 2 === 0
      ? 'bg-gray-100 h-12 text-base text-black rounded-lg'
      : 'bg-white h-12 text-base text-black rounded-lg';
  };

  const getRandomStatus = () => {
    const statuses = Object.keys(statusColors);
    return statuses[Math.floor(Math.random() * statuses.length)];
  };

  const handleEdit = (rowData: DataRow) => {
    console.log('Edit', rowData);
    toast.current?.show({ severity: 'info', summary: 'Edit', detail: `Editing ${rowData.contact_ref}`, life: 3000 });
  };

  const confirmDeleteProduct = (rowData: DataRow) => {
    setInformation(rowData);
    setDeleteProductDialog(true);
  };

  const deleteProduct = () => {
    if (information) {
      setDataWithDisplayId(prev => prev.filter(item => item.id !== information.id));
      toast.current?.show({ severity: 'success', summary: 'Deleted', detail: 'Product deleted successfully', life: 3000 });
    }
    setDeleteProductDialog(false);
  };

  const actionBodyTemplate = (rowData: DataRow) => {
    return (
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <Link href={`/pemeriksaan/edit-pemeriksaan?id=${rowData.id}`} passHref>
          <IconPencil style={{ color: 'green', cursor: 'pointer' }} />
        </Link>
        <IconTrash onClick={() => confirmDeleteProduct(rowData)} style={{ color: 'red', cursor: 'pointer' }} />
      </div>
    );
  };

  const statusBodyTemplate = (rowData: DataRow) => {
    return (
      <span className={`${statusColors[rowData.status]} text-sm font-medium px-3 py-1 rounded-full`}>
        {rowData.status}
      </span>
    );
  };

  return (
    <div className="container mx-auto">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-800">Rekap Pemeriksaan</h1>
        <h5 className="text-lg text-gray-600">Pantau perkembangan balita di sini!</h5>
      </div>

      <div className="card p-4 bg-white shadow-md rounded-lg overflow-hidden">
        {loading && (
          <div className="mb-4">
            <span className="text-sm text-gray-600">Loading...</span>
            <ProgressBar mode="indeterminate" className="mt-2 h-2" />
          </div>
        )}
        {error && (
          <div className="mb-4 bg-red-100 text-red-700 p-4 rounded-lg">
            {error}
          </div>
        )}

        <Toast ref={toast} />
        <div className="rounded-lg ">
          <DataTable
            value={dataWithDisplayId}
            dataKey="id"
            paginator
            rows={rowsPerPage}
            rowsPerPageOptions={[20, 40, 60, 80, 100]}
            className="datatable-responsive"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} records"
            emptyMessage="No data available"
            responsiveLayout="scroll"
            rowClassName={rowClassName}
            paginatorClassName="bg-gray-50 p-4 mt-4 rounded-lg"
          >
            <Column
              field="id"
              header="No"
              headerStyle={{ height: '54px' }}
              sortable
              headerClassName="bg-[#F7F9FC] text-black rounded-l-lg"
              className="text-center"
            />
            <Column
              field="nik"
              header="NIK"
              sortable
              headerClassName="bg-[#F7F9FC] text-black"
              style={{ minWidth: '10rem' }}
            />
            <Column
              field="contact_ref"
              header="Nama Lengkap"
              sortable
              headerClassName="bg-[#F7F9FC] text-black"
              style={{ minWidth: '10rem' }}
            />
            <Column
              field="status"
              header="Status"
              body={statusBodyTemplate}
              sortable
              headerClassName="bg-[#F7F9FC] text-black"
              style={{ minWidth: '10rem' }}
            />
            <Column
              header="Action"
              body={actionBodyTemplate}
              headerClassName="bg-[#F7F9FC] text-black rounded-r-lg"
              style={{ minWidth: '5rem' }}
            />
          </DataTable>
        </div>
      </div>

      {/* Dialog Konfirmasi Hapus */}
      <Dialog
        visible={deleteProductDialog}
        header="Konfirmasi Hapus"
        modal
        onHide={() => setDeleteProductDialog(false)}
        draggable={false} // Menghindari dialog dapat digeser
        className="max-w-md rounded-lg shadow-lg bg-white bg-gray-100"
      >
        <div className="p-6">
          <p className="text-lg font-medium">
            Apakah Anda yakin ingin menghapus <strong>{information?.contact_ref}</strong>?
          </p>
        </div>
        <div className="flex justify-end p-4  rounded-b-lg">
          <button
            className="px-4 py-2 text-gray-700 bg-gray-300 rounded-md hover:bg-gray-400 transition duration-300 ease-in-out"
            onClick={() => setDeleteProductDialog(false)}
          >
            Batal
          </button>
          <button
            className="ml-2 px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 transition duration-300 ease-in-out"
            onClick={deleteProduct}
          >
            Hapus
          </button>
        </div>
      </Dialog>

    </div>
  );
};

export default TablesPage;
