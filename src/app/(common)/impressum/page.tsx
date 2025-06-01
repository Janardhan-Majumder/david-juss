import Container from "@/components/Container";
import React from "react";
import { FaBuilding, FaUser, FaPhone, FaEnvelope, FaGlobe, FaFileAlt, FaCalculator } from 'react-icons/fa';

const page = () => {
  return (
    <Container>
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">KV</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">
                kv-tarif24.de
              </span>
            </div>
            <div className="text-sm text-gray-500">
              Rechtliche Informationen
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8">
        <div className="bg-white rounded-lg shadow-sm border p-6 sm:p-8 lg:p-12">
          {/* Title */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Impressum
            </h1>
            <p className="text-gray-600 text-lg">Angaben gemäß § 5 TMG</p>
            <div className="w-16 h-1 bg-blue-600 rounded mt-4"></div>
          </div>

          {/* Content Grid */}
          <div className="grid gap-8 md:gap-12">
            {/* Company Information */}
            <section className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FaBuilding className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Unternehmen
                </h2>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    DELTA Operations GmbH
                  </h3>
                  <div className="space-y-1 text-gray-700">
                    <p className="font-medium">Schloßberg 21</p>
                    <p className="font-medium">69117 Heidelberg</p>
                    <p className="font-medium">Deutschland</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Management */}
            <section className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <FaUser className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Vertretung
                </h2>
              </div>

              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <p className="text-gray-700">
                  <span className="font-medium text-gray-900">
                    Vertreten durch den Geschäftsführer:
                  </span>
                </p>
                <p className="text-lg font-semibold text-green-800 mt-2">
                  David Jauss
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FaPhone className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Kontakt
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3">
                {/* Phone */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <FaPhone className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Telefon
                      </p>
                      <a
                        href="tel:062217151337"
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        06221 7151337
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <FaEnvelope className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        E-Mail
                      </p>
                      <a
                        href="mailto:info@kv-tarif24.de"
                        className="text-blue-600 hover:text-blue-700 font-medium break-all"
                      >
                        info@kv-tarif24.de
                      </a>
                    </div>
                  </div>
                </div>

                {/* Website */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <FaGlobe className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Website
                      </p>
                      <a
                        href="https://www.kv-tarif24.de"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 font-medium break-all"
                      >
                        kv-tarif24.de
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Legal Information */}
            <section className="space-y-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <FaFileAlt className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Rechtliche Angaben
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Trade Register */}
                <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                      <FaFileAlt className="w-4 h-4 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-3">
                        Handelsregister
                      </h3>
                      <div className="space-y-2 text-gray-700">
                        <p>
                          <span className="font-medium">Eingetragen bei:</span>
                          <br />
                          Amtsgericht Mannheim
                        </p>
                        <p>
                          <span className="font-medium">
                            Handelsregisternummer:
                          </span>
                          <br />
                          HRB: 711997
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* VAT ID */}
                <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mt-1">
                      <FaCalculator className="w-4 h-4 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-3">
                        Umsatzsteuer-ID
                      </h3>
                      <div className="space-y-2 text-gray-700">
                        <p className="text-sm">
                          Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:
                        </p>
                        <p className="font-mono text-lg font-semibold text-indigo-800 bg-white px-3 py-2 rounded border">
                          DE277945254
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Additional Legal Notice */}
            <section className="mt-8">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-xs font-bold text-gray-600">i</span>
                  </div>
                  <div className="text-sm text-gray-600 leading-relaxed">
                    <p>
                      <strong>Hinweis:</strong> Diese Angaben entsprechen den
                      gesetzlichen Anforderungen nach dem Telemediengesetz
                      (TMG). Für weitere rechtliche Informationen beachten Sie
                      bitte unsere Allgemeinen Geschäftsbedingungen und
                      Datenschutzerklärung.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </Container>
  );
};

export default page;
