"use client";
import { useState, ChangeEvent, FormEvent } from 'react';
import Image from "next/image";
import { Card } from 'primereact/card';
import { IconPencil } from "@tabler/icons-react";

const SettingBoxes = () => {
  const [profile, setProfile] = useState({
    fullName: 'Soke Bahtera',
    phone: '08976543215',
    email: 'sokebah@gmail.com',
    password: '',
    confirmPassword: '',
    role: 'Anggota Kader',
    address: {
      kabupaten: '',
      kecamatan: '',
      desa: '',
      dusun: '',
    },
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleAddressChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      address: { ...profile.address, [name]: value },
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Profile submitted:', profile);
  };

  const handleEditClick = () => {
    alert("Fungsi edit belum diimplementasikan.");
  };

  return (
    <div className="mt-0 py-2">
      <Card>
      <form onSubmit={handleSubmit}>
        <div className="profile-container">
          <div className="profile-image">
            <Image src="/images/user/user-03.png" alt="Profile" width={150} height={150} className="profile-pic" />
            <button className="edit-btn" onClick={handleEditClick}>
              <IconPencil
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-edit"
              />
            </button>
          </div>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label className="mb-1 block text-sm font-medium text-gray-800">Nama Lengkap</label>
            <input
              type="text"
              name="fullName"
              className="text-sm font-medium text-gray-700"
              value={profile.fullName}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label className="mb-1 block text-sm font-medium text-gray-800">Posisi/Peran</label>
            <input
              type="text"
              name="role"
              className="text-sm font-medium text-gray-700"
              value={profile.role}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label className="mb-1 block text-sm font-medium text-gray-800">Nomor Telepon (WA Aktif)</label>
            <input
              type="text"
              name="phone"
              className="text-sm font-medium text-gray-700"
              value={profile.phone}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label className="mb-1 block text-sm font-medium text-gray-800">Alamat</label>
            <div className="address-group">
              <select name="kabupaten" onChange={handleAddressChange} className="text-sm font-medium text-gray-700">
                <option value="">Kabupaten</option>
                <option value="Kabupaten 1">Kabupaten 1</option>
                <option value="Kabupaten 2">Kabupaten 2</option>
              </select>
              <select name="kecamatan" onChange={handleAddressChange} className="text-sm font-medium text-gray-700">
                <option value="">Kecamatan</option>
                <option value="Kecamatan 1">Kecamatan 1</option>
                <option value="Kecamatan 2">Kecamatan 2</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="mb-1 block text-sm font-medium text-gray-800">Email</label>
            <input
              type="email"
              name="email"
              className="text-sm font-medium text-gray-700"
              value={profile.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group mt-6">
            <div className="address-group">
              <select name="desa" onChange={handleAddressChange} className="text-sm font-medium text-gray-700">
                <option value="">Desa</option>
                <option value="Desa 1">Desa 1</option>
                <option value="Desa 2">Desa 2</option>
              </select>
              <select name="dusun" onChange={handleAddressChange} className="text-sm font-medium text-gray-700">
                <option value="">Dusun</option>
                <option value="Dusun 1">Dusun 1</option>
                <option value="Dusun 2">Dusun 2</option>
              </select>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="mb-1 block text-sm font-medium text-gray-800">Kata Sandi</label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  className="text-sm font-medium text-gray-700"
                  value={profile.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="w-1/2">
              <label className="mb-1 block text-sm font-medium text-gray-800">Konfirmasi Kata Sandi</label>
              <div className="relative">
                <input
                  type="password"
                  name="confirmPassword"
                  className="text-sm font-medium text-gray-700"
                  value={profile.confirmPassword}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

        </div>
        <div className="flex justify-center md:col-span-4">
        <button type="submit" className="rounded bg-[#486284] px-20 py-2 font-bold text-white transition duration-300 ease-in-out hover:bg-[#3a4f6a] mt-6">
          Simpan
        </button>
        </div>
      </form>

      <style jsx>{`
        .profile-container {
          display: flex;
          justify-content: center;
        }
        
        .profile-image {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 150px;
          height: 150px;
          margin-bottom: 30px;
        }
        
        .profile-pic {
          border-radius: 50%;
          object-fit: cover;
        }

        .edit-btn {
          position: absolute;
          bottom: 0;
          right: 0;
          background-color: #486284;
          border: none;
          border-radius: 50%;
          padding: 5px;
          cursor: pointer;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
        }

        .feather.feather-edit {
          width: 16px;
          height: 16px;
        }

        .edit-btn:hover {
          background-color: #555555;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        label {
          margin-bottom: 5px;
          font-weight: bold;
        }

        input, select {
          width: 100%;
          padding: 8px;
          border-radius: 5px;
          border: 1px solid #ccc;
        }

        .address-group {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }
      `}</style>
      </Card>
    </div>
  );
};

export default SettingBoxes;
