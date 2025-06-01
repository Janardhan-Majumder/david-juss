"use client";
import Container from "@/components/Container";
import React from "react";
import { BiCheckCircle, BiLock } from "react-icons/bi";
import { CgLock } from "react-icons/cg";
import { FaUserSecret } from "react-icons/fa";
import {
  MdSecurity,
  MdEmail,
  MdGroup,
  MdDescription,
  MdCheckCircle,
  MdWarning,
} from "react-icons/md";

const Page = () => {
  return (
    <div>
      {/* <div className="relative min-h-[45vh] md:min-h-[35vh] flex items-center justify-center">
        <Image
          src="/bgs/settings.png"
          alt="hero"
          className="absolute -z-10 object-cover object-center"
          fill
          // width={1000}
          // height={1000}
          sizes="100vw"
        />
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-poppins text-heading drop-shadow-sm">
          Privacy Policy
        </h1>
      </div> */}
      <Container>
        <div className="bg-white shadow-sm border-b border-slate-200">
          <div className="px-4 py-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <MdSecurity className="h-7 w-7 text-blue-600" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Datenschutzerklärung
                </h1>
                <p className="text-sm sm:text-base text-slate-600">
                  kv-tarif24.de • Stand: April 2025
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-4 py-8">
          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-green-100 rounded-lg flex-shrink-0">
                <MdCheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-slate-700 leading-relaxed">
                  Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges
                  Anliegen. Nachfolgend informieren wir Sie darüber, welche
                  Daten wir erheben, wie wir sie verwenden und welche Rechte Sie
                  im Rahmen der Datenschutz-Grundverordnung (DSGVO) haben.
                </p>
              </div>
            </div>
          </div>

          {/* Company Information */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <MdGroup className="h-5 w-5 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-slate-900">
                Verantwortlicher
              </h2>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <div className="space-y-1">
                <p className="font-semibold text-slate-900">
                  DELTA Operations GmbH
                </p>
                <p className="text-slate-700">Schloßberg 21</p>
                <p className="text-slate-700">69117 Heidelberg, Deutschland</p>
                <p className="text-slate-700">Geschäftsführer: David Jauss</p>
                <div className="flex items-center space-x-2 mt-2">
                  <MdEmail className="h-4 w-4 text-slate-500" />
                  <a
                    href="mailto:info@kv-tarif24.de"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    info@kv-tarif24.de
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Data Collection */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <MdDescription className="h-5 w-5 text-purple-600" />
              </div>
              <h2 className="text-xl font-semibold text-slate-900">
                Erhebung und Verarbeitung personenbezogener Daten
              </h2>
            </div>
            <p className="text-slate-700 mb-4">
              Wir erheben und verarbeiten personenbezogene Daten ausschließlich,
              soweit dies zur Bereitstellung unseres Angebots erforderlich ist
              oder Sie uns diese freiwillig zur Verfügung stellen.
            </p>
            <div className="bg-slate-50 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-3">
                Folgende Daten können verarbeitet werden:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  "Name, Vorname",
                  "Geburtsdatum",
                  "Geschlecht",
                  "Angaben zum Versicherer und Tarif",
                  "Gesundheits- und Versicherungsdaten",
                  "E-Mail-Adresse",
                  "Telefonnummer (optional)",
                  "IP-Adresse, Browserdaten, Zeitstempel",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Purpose */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <MdCheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <h2 className="text-xl font-semibold text-slate-900">
                Zweck der Datenverarbeitung
              </h2>
            </div>
            <div className="space-y-3">
              {[
                "Prüfung, ob Ihr PKV-Tarif grundsätzlich optimierbar ist",
                "Weiterleitung Ihrer Daten an einen geeigneten Optimierungspartner",
                "Erstellung eines kostenlosen und unverbindlichen Angebots",
                "Kommunikation mit Ihnen bezüglich Ihrer Anfrage",
                "Verbesserung unseres Online-Angebots (z. B. anonymisierte Analyse)",
              ].map((purpose, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">{purpose}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="flex items-start space-x-2">
                <MdWarning className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-amber-800 text-sm">
                  Ihre Daten werden nicht ohne Ihre ausdrückliche Einwilligung
                  an Dritte weitergegeben. Die Weitergabe an einen Partner zur
                  Angebotserstellung erfolgt nur nach aktiver Zustimmung durch
                  digitale Unterschrift.
                </p>
              </div>
            </div>
          </div>

          {/* Legal Basis */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <MdDescription className="h-5 w-5 text-indigo-600" />
              </div>
              <h2 className="text-xl font-semibold text-slate-900">
                Rechtsgrundlage
              </h2>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Art. 6 Abs. 1 lit. b DSGVO
                </span>
                <span className="text-slate-700">Vertragsanbahnung</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Art. 6 Abs. 1 lit. a DSGVO
                </span>
                <span className="text-slate-700">Einwilligung</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Art. 6 Abs. 1 lit. f DSGVO
                </span>
                <span className="text-slate-700">Berechtigtes Interesse</span>
              </div>
            </div>
          </div>

          {/* Storage Duration */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-orange-100 rounded-lg">
                <CgLock className="h-5 w-5 text-orange-600" />
              </div>
              <h2 className="text-xl font-semibold text-slate-900">
                Speicherdauer
              </h2>
            </div>
            <p className="text-slate-700 mb-3">
              Personenbezogene Daten werden nur so lange gespeichert, wie sie
              für die oben genannten Zwecke erforderlich sind oder gesetzliche
              Aufbewahrungsfristen bestehen.
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <p className="text-orange-800 text-sm">
                <strong>Automatische Löschung:</strong> Wenn Sie keine
                Optimierung wünschen oder keine Einwilligung erteilen, werden
                Ihre Angaben spätestens nach 6 Monaten automatisch gelöscht.
              </p>
            </div>
          </div>

          {/* User Rights */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <FaUserSecret className="h-5 w-5 text-emerald-600" />
              </div>
              <h2 className="text-xl font-semibold text-slate-900">
                Ihre Rechte als betroffene Person
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              {[
                "Auskunft über Ihre gespeicherten Daten",
                "Berichtigung unrichtiger Daten",
                "Löschung Ihrer Daten (Recht auf Vergessenwerden)",
                "Einschränkung der Verarbeitung",
                "Widerspruch gegen die Verarbeitung",
                "Datenübertragbarkeit (Art. 20 DSGVO)",
                "Beschwerde bei einer Aufsichtsbehörde",
              ].map((right, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <BiCheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">{right}</span>
                </div>
              ))}
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <p className="text-emerald-800 text-sm mb-2">
                <strong>
                  Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an:
                </strong>
              </p>
              <a
                href="mailto:datenschutz@kv-tarif24.de"
                className="text-emerald-700 hover:text-emerald-900 font-medium transition-colors"
              >
                datenschutz@kv-tarif24.de
              </a>
            </div>
          </div>

          {/* Data Security */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-red-100 rounded-lg">
                <BiLock className="h-5 w-5 text-red-600" />
              </div>
              <h2 className="text-xl font-semibold text-slate-900">
                Datensicherheit
              </h2>
            </div>
            <p className="text-slate-700">
              Ihre Daten werden über eine sichere SSL-/TLS-Verschlüsselung
              (HTTPS) übertragen. Wir setzen technische und organisatorische
              Sicherheitsmaßnahmen ein, um Ihre Daten gegen Verlust,
              Manipulation und unberechtigten Zugriff zu schützen.
            </p>
          </div>

          {/* Cookies */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Einsatz von Cookies und Tracking-Tools
            </h2>
            <p className="text-slate-700 mb-3">
              Unsere Website verwendet Cookies, um die Funktionalität
              sicherzustellen und die Nutzung zu analysieren (z. B. über Google
              Analytics oder vergleichbare Tools). Dabei werden keine
              personenbezogenen Daten gespeichert, es sei denn, Sie willigen
              ausdrücklich ein.
            </p>
            <p className="text-slate-700">
              Sie können der Nutzung von Cookies jederzeit in den Einstellungen
              Ihres Browsers widersprechen oder eine Einwilligung widerrufen.
            </p>
          </div>

          {/* Third Parties */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Drittanbieter & Partner
            </h2>
            <p className="text-slate-700">
              Ihre Daten werden nur an den jeweils ausgewählten
              Optimierungspartner übermittelt, wenn Sie dem ausdrücklich
              zustimmen. Die Zustimmung erteilen Sie mit absenden und signieren
              des Formulars. Eine darüber hinausgehende Weitergabe an Dritte
              oder Nutzung zu Werbezwecken erfolgt nicht.
            </p>
          </div>

          {/* Changes */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Änderungen dieser Datenschutzerklärung
            </h2>
            <p className="text-slate-700">
              Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf
              anzupassen, z. B. bei rechtlichen Änderungen oder
              Weiterentwicklung unseres Angebots. Die jeweils aktuelle Fassung
              finden Sie stets auf dieser Seite.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
