import React from "react";
import Container from "@/components/Container";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaQuestionCircle,
  FaNewspaper,
  FaExclamationTriangle,
  FaCheckCircle,
} from "react-icons/fa";
import Link from "next/link";

const page = () => {
  return (
    <Container>
      {/* Main Content */}
      <main className="">
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="bg-white rounded-lg shadow-sm border p-6 sm:p-8 lg:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Kontakt
              </h1>
              <div className="w-16 h-1 bg-blue-600 rounded mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>
                  Sie haben Fragen zu Ihrer Anfrage, zur Tarifoptimierung oder
                  zur Funktionsweise von kv-tarif24.de?
                </strong>{" "}
                Wir helfen Ihnen gerne weiter!
              </p>
              <p className="text-gray-600 leading-relaxed">
                Unser Team steht Ihnen für allgemeine Rückfragen, technische
                Anliegen oder Feedback zur Verfügung. Bitte beachten Sie:{" "}
                <strong className="text-red-600">
                  kv-tarif24.de bietet keine individuelle Versicherungsberatung
                </strong>{" "}
                – wir vermitteln ausschließlich den passenden
                Optimierungspartner für Ihre private Krankenversicherung.
              </p>
            </div>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm border p-6 sm:p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FaEnvelope className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Kontaktmöglichkeiten
                </h2>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        E-Mail
                      </h3>
                      <a
                        href="mailto:info@kv-tarif24.de"
                        target="_blank"
                        className="text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        info@kv-tarif24.de
                      </a>
                      <p className="text-sm text-gray-600 mt-2">
                        Bevorzugter Kontaktweg für alle Anfragen
                      </p>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Postanschrift
                      </h3>
                      <div className="space-y-1 text-gray-700">
                        <p className="font-medium">DELTA Operations GmbH</p>
                        <p>Schloßberg 21</p>
                        <p>69117 Heidelberg</p>
                        <p>Deutschland</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Information */}
            <div className="space-y-8">
              {/* Fast Support */}
              <div className="bg-white rounded-lg shadow-sm border p-6 sm:p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <FaClock className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Schneller Support
                  </h2>
                </div>

                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                  <div className="flex items-start space-x-3">
                    <FaCheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        Bitte nutzen Sie für konkrete Rückfragen zu Ihrer
                        Anfrage bevorzugt die E-Mail-Adresse. Unser Team
                        antwortet in der Regel{" "}
                        <strong className="text-green-800">
                          innerhalb von 1–2 Werktagen
                        </strong>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Press & Cooperation */}
              <div className="bg-white rounded-lg shadow-sm border p-6 sm:p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FaNewspaper className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Presse & Kooperationen
                  </h2>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Für Medienanfragen, Kooperationen oder Interviews wenden Sie
                    sich bitte ebenfalls an:
                  </p>
                  <a
                    href="mailto:presse@kv-tarif24.de"
                    className="text-lg font-semibold text-purple-600 hover:text-purple-700 transition-colors inline-flex items-center space-x-2"
                  >
                    <FaEnvelope className="w-4 h-4" />
                    <span>presse@kv-tarif24.de</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-white rounded-lg shadow-sm border p-6 sm:p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <FaQuestionCircle className="w-5 h-5 text-orange-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Hinweis zur Optimierung
              </h2>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
              <div className="flex items-start space-x-3">
                <FaExclamationTriangle className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    Haben Sie bereits das Formular ausgefüllt und möchten nun
                    Ihre Daten vervollständigen oder Ihre digitale Unterschrift
                    nachreichen? Nutzen Sie bitte den Link in der E-Mail, die
                    Sie von uns erhalten haben, oder wenden Sie sich direkt an
                    unseren Support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Quick Links */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg text-white p-6 sm:p-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">Häufige Fragen?</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Bevor Sie uns kontaktieren, schauen Sie gerne in unsere häufig
                gestellten Fragen oder lesen Sie unsere AGB für detaillierte
                Informationen über unseren Service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={"/faq"}>
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                    FAQ ansehen
                  </button>
                </Link>
                <Link href={"/terms"}>
                  <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors border border-blue-400">
                    AGB lesen
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
};

export default page;
