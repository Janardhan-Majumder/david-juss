import React from "react";
import Container from "../Container";
import Image from "next/image";

const DetailsSection = () => {
  return (
    <Container
      parentClass="bg-playground py-10"
      className="flex flex-col md:flex-row-reverse items-center md:items-start justify-center gap-10 xl:gap-14"
    >
      <div className="w-full max-w-xs sm:max-w-sm xl:max-w-md md:pt-36">
        <Image
          alt="oldest"
          src={"/images/oldest-man.png"}
          height={1000}
          width={1000}
          className="w-full"
        />
      </div>
      <div className="space-y-5 w-full lg:max-w-3xl">
        <h2 className="text-3xl lg:text-4xl font-semibold text-heading font-poppins leading-normal lg:leading-normal">
          Optimieren Sie einfach Ihre private Krankenversicherung
        </h2>
        <div className="space-y-2.5">
          <p className="text-hash">
            Viele privat Krankenversicherte zahlen Monat für Monat mehr als
            nötig – und das, ohne es zu wissen. Veraltete Tarife, fehlende
            Transparenz oder ein fehlender Ansprechpartner führen dazu, dass
            sich Beiträge im Laufe der Jahre stark erhöhen. Dabei gibt es
            innerhalb fast jeder privaten Krankenversicherung deutlich
            günstigere Tarifalternativen –
            <span className="font-medium">
              {" "}
              mit identischem oder sogar besseren Leistungsumfang
            </span>
            .
          </p>
          <p className="text-hash">
            Genau hier setzt kv-tarif24.de an: Wir machen die Tarifoptimierung
            <span className="font-medium">
              {" "}
              einfach, sicher und unverbindlich
            </span>
            . Und das Beste:{" "}
            <span className="font-medium">
              Ein Anbieterwechsel ist nicht nötig
            </span>
            . Sie bleiben bei Ihrer aktuellen Versicherung – ob Debeka, AXA,
            Allianz, DKV, HanseMerkur oder Signal Iduna – und erhalten trotzdem
            ein modernes, beitragsoptimiertes Tarifmodell. Ihre{" "}
            <span className="font-medium">
              Versicherungsnummer bleibt erhalten
            </span>
            , ebenso wie Ihre{" "}
            <span className="font-medium">
              {" "}
              wertvollen Altersrückstellungen
            </span>
            , die Sie über Jahre hinweg angespart haben.
          </p>
          <p className="text-hash">
            Die Anfrage ist unkompliziert und dauert nur wenige Minuten. Sie
            füllen unser verschlüsseltes Onlineformular aus – ganz ohne Risiko.
            Schon bei der Eingabe erkennen wir automatisch, ob Ihr aktueller
            Tarif grundsätzlich optimierbar ist. Ist das der Fall, wählen wir
            aus unserem Netzwerk{" "}
            <span className="font-medium">
              {" "}
              den passenden Optimierungspartner{" "}
            </span>{" "}
            für Sie aus. Dieser analysiert Ihre Angaben und erstellt ein
            <span className="font-medium">
              {" "}
              individuelles, kostenloses und unverbindliches Angebot
            </span>
            , das exakt auf Ihre Situation zugeschnitten ist.
          </p>
          <p className="text-hash">
            Sie behalten dabei jederzeit die volle Kontrolle: Erst wenn Sie das
            Angebot annehmen und mit der Optimierung einverstanden sind, wird
            ein Honorar fällig – das direkt mit dem Optimierungspartner
            abgerechnet wird. Vorher entstehen Ihnen keinerlei Kosten oder
            Verpflichtungen.
          </p>
          <p className="text-hash">
            Unsere Erfahrung zeigt: In{" "}
            <span className="font-medium">
              {" "}
              etwa 96 % der optimierten Fälle{" "}
            </span>{" "}
            bleiben die Leistungen vollständig erhalten – oft bei einem
            monatlich{" "}
            <span className="font-medium"> deutlich reduzierten Beitrag </span>.
            Die Ersparnis liegt dabei nicht selten bei{" "}
            <span className="font-medium"> bis zu 35 %</span>. Über die Laufzeit
            betrachtet ergibt sich so häufig ein finanzieller Vorteil von
            <span className="font-medium"> mehreren tausend Euro</span> – ohne
            auf gewohnte Qualität oder Leistungen verzichten zu müssen.
          </p>
          <p className="text-hash">
            Wenn Sie also Ihre private Krankenversicherung optimieren möchten,
            ohne sich auf einen Anbieterwechsel einzulassen oder Risiken
            einzugehen, dann sind Sie bei kv-tarif24.de genau richtig. Wir
            begleiten Sie neutral, diskret und datenschutzkonform durch den
            gesamten Prozess – von der Anfrage bis zur finalen Bestätigung durch
            Ihre Versicherung.
          </p>
          <p className="text-hash font-medium">
            Starten Sie jetzt Ihre kostenlose Anfrage – und prüfen Sie
            unverbindlich Ihr Einsparpotenzial.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default DetailsSection;
