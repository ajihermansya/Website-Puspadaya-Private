"use client";
import React, { useRef } from "react";
import { Card } from "primereact/card";
import CardDetail from "../ui/CardDetail";
import { RadioButton } from "primereact/radiobutton";
import KesimpulanBumil from "./KesimpulanBumil";
import { Image } from "primereact/image";

const DetailBumil = ({ id }: { id: string }) => {
  const op = useRef(null);

  return (
    <>
      <Card className="px-6">
        <div className="grid grid-cols-1 gap-6  md:grid-cols-2">
          <div>
            <div className="mb-4">
              <CardDetail label="NIK">3522010503102</CardDetail>
            </div>

            <div className="mb-4">
              <CardDetail label="Nama Lengkap">Siti Fatimah</CardDetail>
            </div>

            <div className="mb-4">
              <CardDetail label="Nomor Telepon">0123456789</CardDetail>
            </div>

            <div className="mb-4">
              <CardDetail label="Usia">30 tahun</CardDetail>
            </div>

            <div className="mb-4">
              <CardDetail label="Tanggal Pendampingan">10/10/2022</CardDetail>
            </div>

            <div className="mb-4">
              <CardDetail label="Usia Kehamilan">20 Minggu</CardDetail>
            </div>

            <div className="mb-4">
              <CardDetail label="Tinggi Badan" satuan="CM">
                155
              </CardDetail>
            </div>

            <div className="mb-4">
              <CardDetail label="Berat Badan" satuan="KG">
                50
              </CardDetail>
            </div>

            <div className="mb-4">
              <CardDetail label="Berapa Tablet Yang Diminum">
                2 tablet
              </CardDetail>
            </div>

            <div className="mb-4">
              <CardDetail
                label="Intervensi Yang Diberikan"
                className="min-h-18"
              >
                Obat
              </CardDetail>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <CardDetail label="Kabupaten">Banyuwangi</CardDetail>
              </div>
              <div className="mb-4">
                <CardDetail label="Kecamatan">Banyuwangi</CardDetail>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <CardDetail label="Desa">Rogojampi</CardDetail>
              </div>
              <div className="mb-4">
                <CardDetail label="Dusun">Krajan</CardDetail>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <CardDetail label="RT">01</CardDetail>
              </div>
              <div className="mb-4">
                <CardDetail label="RW">03</CardDetail>
              </div>
            </div>

            <div className="mb-4">
              <CardDetail label="Alamat">Jalan Kertanegara</CardDetail>
            </div>

            <div className="mb-4">
              <CardDetail label="Hari Pertama Haid Terakhir">
                10/10/2022
              </CardDetail>
            </div>

            <div className="mb-4">
              <CardDetail label="Hemoglobin" satuan="MG/DL">
                15
              </CardDetail>
            </div>

            <div className="mb-4">
              <CardDetail label="Lingkar Lengan Atas" satuan="CM">
                20
              </CardDetail>
            </div>

            <div className="mb-4">
              <CardDetail label="Tinggi Fundus Uteri" satuan="CM">
                5
              </CardDetail>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="mb-4 md:mb-8">
                <label className="mb-4 block text-sm text-gray-600">
                  Keterpapasan Asap Rokok
                </label>
                <div className="flex gap-3">
                  <div className="flex items-center">
                    <RadioButton inputId="asaprokok1" />
                    <label htmlFor="asaprokok1" className="ml-2">
                      Ya
                    </label>
                  </div>
                  <div className="flex items-center">
                    <RadioButton
                      inputId="asaprokok2"
                      checked={true}
                      disabled={false}
                    />
                    <label htmlFor="asaprokok2" className="ml-2">
                      Tidak
                    </label>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <KesimpulanBumil isStunting={false} />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="image"
                className="mb-4 block text-sm font-semibold text-gray-600"
              >
                TTD Yang Didampingi
              </label>
              <Image
                id="image"
                src="https://www.shutterstock.com/image-vector/fake-autograph-samples-handdrawn-signatures-260nw-2332469589.jpg"
                alt="Image"
                width="250"
                preview
              />
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default DetailBumil;
