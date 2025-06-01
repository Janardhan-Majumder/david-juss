"use client";
import Container from "@/components/Container";
import Image from "next/image";
// import Image from "next/image";

const page = () => {
  return (
    <div className="">
      <div className="relative min-h-[45vh] md:min-h-[35vh] flex items-center justify-center">
        <Image
          src="/bgs/settings.png"
          alt="hero"
          className="absolute -z-10 object-cover object-center"
          fill
          // width={1000}
          // height={1000}
          sizes="100vw"
        />
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>
      </div>
      <Container className="">
        <div className="space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                1
              </span>
              Geltungsbereich
            </h2>
            <div className="ml-11 space-y-4 text-gray-700 leading-relaxed">
              <p>
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für die
                Nutzung des Internetportals{" "}
                <strong className="text-blue-600">kv-tarif24.de</strong>,
                betrieben von der <strong>DELTA Operations GmbH</strong>{" "}
                Schloßberg 21 69117 Heidelberg (im Folgenden „kv-tarif24.de&quot;
                oder „wir&quot; genannt).
              </p>
              <p>
                Das Portal richtet sich an privat krankenversicherte Personen,
                die ihre bestehenden Versicherungstarife auf
                Optimierungspotenziale prüfen lassen möchten. kv-tarif24.de ist
                kein Makler und bietet keine Versicherungsvermittlung oder
                -beratung im Sinne des Versicherungsvertragsgesetzes (VVG) oder
                der Gewerbeordnung (§ 34d GewO) an.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                2
              </span>
              Leistungsbeschreibung
            </h2>
            <div className="ml-11 space-y-4 text-gray-700 leading-relaxed">
              <p>
                kv-tarif24.de stellt eine digitale Plattform zur Verfügung, über
                die Nutzer ihre bestehende private Krankenversicherung auf
                mögliche Einsparpotenziale prüfen lassen können. Ziel ist die{" "}
                <strong className="bg-yellow-100 px-1 rounded">
                  Tarifoptimierung innerhalb des bestehenden
                  Versicherungsvertrags
                </strong>
                .
              </p>
              <p>
                Die Prüfung erfolgt durch externe, spezialisierte
                Optimierungspartner. kv-tarif24.de übernimmt hierbei
                ausschließlich die <strong>Vermittlung</strong> zwischen Nutzer
                und Partner. kv-tarif24.de erbringt{" "}
                <strong className="text-red-600">keine eigene Beratung</strong>{" "}
                und wird nicht Vertragspartei bei einer möglichen späteren
                Beauftragung des Optimierungspartners.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                3
              </span>
              Ablauf der Anfrage
            </h2>
            <div className="ml-11">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Der Nutzer übermittelt freiwillig Angaben zu seinem
                    bestehenden PKV-Tarif über das Onlineformular auf
                    kv-tarif24.de.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    kv-tarif24.de prüft automatisiert, ob eine grundsätzliche
                    Optimierung des Tarifs möglich erscheint.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Bei positiver Prüfung wird ein passender Optimierungspartner
                    aus unserem Netzwerk ausgewählt.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Der Nutzer kann anschließend seine Anfrage durch ergänzende
                    persönliche Angaben und eine digitale Unterschrift
                    vervollständigen.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Erst mit dieser Zustimmung werden die Daten an den
                    jeweiligen Partner weitergegeben, damit dieser die
                    Angebotserstellung und ggf. Verhandlungen mit der
                    Versicherung übernehmen kann.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                4
              </span>
              Kosten
            </h2>
            <div className="ml-11 space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium">
                  Die Nutzung von kv-tarif24.de sowie die Übermittlung der
                  Anfrage an einen Optimierungspartner ist für den Nutzer{" "}
                  <strong>vollständig kostenlos und unverbindlich</strong>.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Ein Honorar wird nur dann fällig, wenn der Nutzer{" "}
                <strong>ein konkretes Angebot des Partners annimmt</strong>.
                Dieses Honorar wird ausschließlich{" "}
                <strong>zwischen dem Nutzer und dem Partner</strong>{" "}
                abgerechnet. kv-tarif24.de erhält gegebenenfalls eine Provision
                für die erfolgreiche Vermittlung –{" "}
                <strong>ohne Einfluss auf die Höhe des Honorars</strong>.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                5
              </span>
              Datenschutz
            </h2>
            <div className="ml-11 space-y-4 text-gray-700 leading-relaxed">
              <p>
                Die Verarbeitung personenbezogener Daten erfolgt im Einklang mit
                den geltenden Datenschutzgesetzen, insbesondere der DSGVO. Alle
                Daten werden{" "}
                <strong className="bg-purple-100 px-1 rounded">
                  ausschließlich über verschlüsselte Verbindungen (HTTPS)
                </strong>{" "}
                übermittelt und{" "}
                <strong>
                  nur mit ausdrücklicher Zustimmung des Nutzers an den Partner
                  weitergegeben
                </strong>
                .
              </p>
              <p>
                Weitere Informationen finden Sie in unserer
                Datenschutzerklärung.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                6
              </span>
              Keine Garantie auf Optimierung
            </h2>
            <div className="ml-11 space-y-4">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <p className="text-orange-800">
                  kv-tarif24.de kann keine Garantie übernehmen, dass eine
                  tatsächliche Optimierung möglich oder wirtschaftlich sinnvoll
                  ist.
                </p>
              </div>
              <p className="text-gray-700">
                Dies hängt von vielen individuellen Faktoren ab, insbesondere
                den internen Tarifregelungen des jeweiligen
                Versicherungsunternehmens. Ein Anspruch auf Optimierung oder
                Angebotsabgabe besteht nicht.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                7
              </span>
              Haftungsausschluss
            </h2>
            <div className="ml-11 space-y-4 text-gray-700 leading-relaxed">
              <p>
                kv-tarif24.de haftet nicht für die Richtigkeit und
                Vollständigkeit der durch Nutzer bereitgestellten Angaben.
                Ebenso haften wir nicht für Inhalte, Angebote oder Leistungen
                der vermittelten Partner.
              </p>
              <p>
                Eine rechtliche, steuerliche oder versicherungsfachliche
                Beratung erfolgt durch kv-tarif24.de{" "}
                <strong className="text-red-600">nicht</strong>.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="bg-gray-100 text-gray-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                8
              </span>
              Änderungen der AGB
            </h2>
            <div className="ml-11 text-gray-700 leading-relaxed">
              <p>
                kv-tarif24.de behält sich vor, diese AGB jederzeit mit Wirkung
                für die Zukunft zu ändern. Es gilt die jeweils aktuelle Version,
                die auf kv-tarif24.de veröffentlicht ist.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="bg-gray-100 text-gray-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                9
              </span>
              Gerichtsstand und anwendbares Recht
            </h2>
            <div className="ml-11 text-gray-700 leading-relaxed">
              <p>
                Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand
                ist – soweit zulässig – Heidelberg.
              </p>
            </div>
          </section>
        </div>

        {/* Company Information */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Anbieter
            </h3>
            <div className="space-y-2 text-gray-700">
              <p className="font-medium">DELTA Operations GmbH</p>
              <p>Schloßberg 21</p>
              <p>69117 Heidelberg</p>
              <p>Geschäftsführer: David Jauss</p>
            </div>
          </div>
        </div>
        <header className="bg-white shadow-sm border-b">
          <div className=" px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">KV</span>
                </div>
                <span className="text-xl font-semibold text-gray-900">
                  kv-tarif24.de
                </span>
              </div>
              <div className="text-sm text-gray-500">Stand: April 2025</div>
            </div>
          </div>
        </header>
      </Container>
    </div>
  );
};

export default page;
