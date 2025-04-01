/* eslint-disable jsx-a11y/alt-text */
"use client";
import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
  pdf,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 53,
  },
  title: {
    fontSize: 24,
    color: "#1DAE9A",
    fontWeight: "semibold",
    textAlign: "center",
    marginVertical: 15,
  },
  section: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 11,
    color: "#3C5267",
  },
  formContainer: {
    marginVertical: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  formRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  formColumn: {
    width: "45%",
    marginLeft: "15px",
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#1DAE9A",
    paddingTop: 4,
    paddingBottom: 4,
    marginBottom: 10,
    borderRadius: 1,
    width: "200px",
  },
  formField: {
    borderWidth: 1,
    borderColor: "gray",
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 8,
    paddingRight: 8,
    marginTop: 4,
    borderRadius: 1,
    width: "220px",
  },
  signatureBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 30,
    textAlign: "center",
  },
  date: { width: 150, padding: 10, marginBottom: 6, borderBottom: "1px" },
});

interface DashboardPDFProps {
  PDFInfo: {
    fullName: string;
    profession: string;
    street: string;
    houseNumber: string;
    healthInsuranceCompany: string;
    postalCode: string;
    city: string;
    tariffs: string;
    dateOfBirth: string;
    insuranceNumber: string;
    signature: string;
  };
}

const PdfDocument: React.FC<DashboardPDFProps> = ({ PDFInfo }) => (
  <Document>
    <Page size="LEGAL" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Image src="/images/derk-logo.png" style={styles.logo} />
        <View>
          <Text
            style={{
              paddingLeft: 45,
              textAlign: "center",
              paddingBottom: "5px",
            }}
          >
            Ihr persönlicher Berater
          </Text>
          <View style={styles.inputField}>
            <Text style={{ margin: "auto" }}>{PDFInfo.fullName}</Text>
          </View>
        </View>
      </View>

      <Text style={styles.title}>SICHERHEITSGARANTIE</Text>

      {/* Content Sections */}
      {[
        "Mit diesem Auftragsmandat erhält die VVM Verwaltungs- und Versicherungsmakler GmbH das Recht, eine einmalige Beitragsreduzierung in Ihrer privaten Krankenversicherung zu verhandeln.",
        "Unsere Dienstleistung bleibt für Sie kostenlos, wenn Sie unsere angebotenen Einsparmöglichkeiten, unabhängig vom Grund, nicht in Anspruch nehmen möchten. Unser Vergütungsanspruch bleibt 36 Monate nach Erhalt des Angebots bestehen.",
        "Wenn Sie unsere ermittelten Einsparmöglichkeiten nutzen, berechnen wir Ihnen die Jahresbruttoersparnis (die Differenz zwischen dem alten und neuen Monatsbeitrag, multipliziert mit 12). Unser Erfolgshonorar wird nur bei schriftlicher Akzeptanz des Angebots innerhalb von 7 Tagen fällig. Zusätzlich gewähren wir Ihnen einen Skonto von 5 %, wenn die Zahlung innerhalb von 3 Tagen erfolgt.",
        "Die VVM Verwaltungs- und Versicherungsmakler GmbH verpflichtet sich, das für mich bestmögliche Angebot zu ermitteln.",
        "Ich habe die Datenschutzbestimmungen und die Widerrufsbelehrung zur Kenntnis genommen auf",
      ].map((text, index) => (
        <Text key={index} style={styles.section}>
          {text}
        </Text>
      ))}

      {/* Form Section */}
      <View style={styles.formContainer}>
        {/* Form Rows */}
        <View style={styles.formRow}>
          <View style={styles.formColumn}>
            <Text style={{ fontSize: "10px", color: "#3C5267" }}>
              Vorname Name
            </Text>
            <View style={styles.formField}>
              <Text>{PDFInfo.fullName}</Text>
            </View>
          </View>
          <View style={styles.formColumn}>
            <Text style={{ fontSize: "10px", color: "#3C5267" }}>
              Vorname Name
            </Text>
            <View style={styles.formField}>
              <Text>{PDFInfo.fullName}</Text>
            </View>
          </View>
        </View>
        <View style={styles.formRow}>
          <View style={styles.formColumn}>
            <Text style={{ fontSize: "10px", color: "#3C5267" }}>
              Straße, Hausnummer
            </Text>
            <View style={styles.formField}>
              <Text>{PDFInfo.fullName}</Text>
            </View>
          </View>
          <View style={styles.formColumn}>
            <Text style={{ fontSize: "10px", color: "#3C5267" }}>
              Krankenversicherungsgesellschaft
            </Text>
            <View style={styles.formField}>
              <Text>{PDFInfo.fullName}</Text>
            </View>
          </View>
        </View>
        <View style={styles.formRow}>
          <View style={styles.formColumn}>
            <Text style={{ fontSize: "10px", color: "#3C5267" }}>PLZ, Ort</Text>
            <View style={styles.formField}>
              <Text>{PDFInfo.fullName}</Text>
            </View>
          </View>
          <View style={styles.formColumn}>
            <Text style={{ fontSize: "10px", color: "#3C5267" }}>Tarife</Text>
            <View style={styles.formField}>
              <Text>{PDFInfo.fullName}</Text>
            </View>
          </View>
        </View>
        <View style={styles.formRow}>
          <View style={styles.formColumn}>
            <Text style={{ fontSize: "10px", color: "#3C5267" }}>
              Geburtsdatum
            </Text>
            <View style={styles.formField}>
              <Text>{PDFInfo.fullName}</Text>
            </View>
          </View>
          <View style={styles.formColumn}>
            <Text style={{ fontSize: "10px", color: "#3C5267" }}>
              Versicherungsnummer
            </Text>
            <View style={styles.formField}>
              <Text>{PDFInfo.fullName}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Footer Sections */}
      <Text style={styles.section}>
        Hiermit ermächtige ich die VVM Verwaltungs- und Versicherungsmakler
        GmbH, Über den Steinen 10A, 06449 Aschersleben, Tarifberechnungen gemäß
        §204 VVG einzuholen.
      </Text>
      <Text style={styles.section}>
        Die VVM Verwaltungs- und Versicherungsmakler GmbH ist nicht befugt, in
        meinem Namen vertragliche Erklärungen abzugeben.
      </Text>

      <Text style={{ ...styles.title, fontSize: 18 }}>
        Sollte ich das Angebot nicht annehmen, entstehen mir keine Kosten!
      </Text>

      {/* Signature Section */}
      <View style={styles.signatureBox}>
        <View style={{ paddingLeft: "30px" }}>
          <View style={styles.date}>
            <Text>{new Date().toLocaleDateString()}</Text>
          </View>
          <Text style={{ fontSize: "10px", textAlign: "center", width: 150 }}>
            Datum
          </Text>
        </View>
        <View style={{ paddingLeft: "30px" }}>
          <Image
            src={PDFInfo.signature}
            style={{ ...styles.logo, borderBottom: "1px", marginBottom: 6 }}
          />
          <Text style={{ fontSize: "10px", textAlign: "center", width: 150 }}>
            Unterschrift
          </Text>
        </View>
      </View>
      {/* <View style={{ ...styles.formRow, marginTop: 50, fontSize: 10 }}>
        <View style={{ ...styles.formColumn, paddingLeft: "15px" }}>
          <View>
            <Text style={{ textAlign: "left", width: "100%" }}>
              VVM Verwaltungs- und
            </Text>
            <Text style={{ textAlign: "left", width: "100%" }}>
              Versicherungsmakler GmbH
            </Text>
            <Text style={{ textAlign: "left" }}>06449 Aschersleben</Text>
          </View>
        </View>

        <View
          style={{
            ...styles.formColumn,
            textAlign: "right",
            paddingLeft: "95px",
          }}
        >
          <View style={{ textAlign: "center" }}>
            <Text style={{ textAlign: "left", width: "100%" }}>
              Telefax: +4922197590599
            </Text>
            <Text style={{ textAlign: "left", width: "100%" }}>
              E-Mail: info@kvdoc.com
            </Text>
            <Text style={{ textAlign: "left" }}>www.kvdoc.com</Text>
          </View>
        </View>
      </View> */}
    </Page>
  </Document>
);

// export const renderPDF = async ({ PDFInfo }: DashboardPDFProps) => {
//   const blob = await pdf(<PdfDocument PDFInfo={{ ...PDFInfo }} />).toBlob();
//   const blobUrl = URL.createObjectURL(blob);
//   return { blob, blobUrl };
// };
export const renderPDF = async ({ PDFInfo }: DashboardPDFProps) => {
  const blob = await pdf(<PdfDocument PDFInfo={{ ...PDFInfo }} />).toBlob();
  const dataUrl = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
  const file = new File([blob], "document.pdf", { type: "application/pdf" });

  return { dataUrl, file };
};
// export default function PDFLayout() {
//   const [isPdfVisible, setIsPdfVisible] = useState(false);

//   const handleShowPDF = async () => {
//     const blob = await pdf(<PdfDocument PDFInfo={{ ...PDFInfo }} />).toBlob();
//     const blobUrl = URL.createObjectURL(blob);
//     // setIsPdfVisible(!isPdfVisible);
//     console.log({file: blob,  blobUrl});
//   };
//   return (
//     <div style={{ height: "100vh" }} className="flex flex-col items-center">
//       <h1 className="text-2xl font-bold my-4 text-gray-800">PDF Viewer</h1>
//       <button
//         className="px-4 py-2 text-white mx-auto bg-black cursor-pointer my-4 rounded-md"
//         onClick={handleShowPDF}
//       >
//         {isPdfVisible ? "Hide" : "View"} PDF
//       </button>

//       {isPdfVisible && (
//         <PDFViewer style={{ width: "100%", height: "100%" }}>
//           <PdfDocument PDFInfo={PDFInfo} />
//         </PDFViewer>
//       )}
//     </div>
//   );
// }
