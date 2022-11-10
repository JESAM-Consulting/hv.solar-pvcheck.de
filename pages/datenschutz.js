import React, { useState, useEffect } from "react";
import NavTop from "../components/NavTop";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Datenschutz() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="font-visby">
      <NavTop />
      <Header />
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        className={`${
          scrollPosition > 300 ? " fixed " : " hidden "
        } md:p-2 p-1 md:bottom-10 bottom-10 right-10 md:right-14 z-50 rounded-full bg-green-1 hover:-translate-y-1 transition-all ease-linear duration-200`}>
        <svg
          width="32px"
          height="32px"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff">
          <path d="M 16 6.59375 L 15.28125 7.28125 L 2.78125 19.78125 L 4.21875 21.21875 L 16 9.4375 L 27.78125 21.21875 L 29.21875 19.78125 L 16.71875 7.28125 Z" />
        </svg>
      </button>
      <div className="">
        <div className="bg-white rounded-3xl container mx-auto p-6 md:p-20 space-y-6">
          <p>
            <strong>Datenschutzerkl&auml;rung</strong>
          </p>
          <p>
            <strong>Einleitung und &Uuml;berblick</strong>
          </p>
          <p>
            Wir haben diese Datenschutzerkl&auml;rung (Fassung 23.10.2022-)
            verfasst, um Ihnen gem&auml;&szlig; der Vorgaben der&nbsp;
            <a href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&amp;from=DE&amp;tid=312254249#d1e2269-1-1">
              Datenschutz-Grundverordnung (EU) 2016/679
            </a>
            &nbsp;und anwendbaren nationalen Gesetzen zu erkl&auml;ren, welche
            personenbezogenen Daten (kurz Daten) wir als Verantwortliche &ndash;
            und die von uns beauftragten Auftragsverarbeiter (z. B. Provider)
            &ndash; verarbeiten, zuk&uuml;nftig verarbeiten werden und welche
            rechtm&auml;&szlig;igen M&ouml;glichkeiten Sie haben. Die
            verwendeten Begriffe sind geschlechtsneutral zu verstehen.
            <br />
            <br />
            <strong>Kurz gesagt:</strong>&nbsp;Wir informieren Sie umfassend
            &uuml;ber Daten, die wir &uuml;ber Sie verarbeiten.
          </p>
          <p>
            Datenschutzerkl&auml;rungen klingen f&uuml;r gew&ouml;hnlich sehr
            technisch und verwenden juristische Fachbegriffe. Diese
            Datenschutzerkl&auml;rung soll Ihnen hingegen die wichtigsten Dinge
            so einfach und transparent wie m&ouml;glich beschreiben. Soweit es
            der Transparenz f&ouml;rderlich ist, werden technische&nbsp;
            <strong>Begriffe leserfreundlich erkl&auml;rt</strong>, Links zu
            weiterf&uuml;hrenden Informationen geboten und&nbsp;
            <strong>Grafiken</strong>&nbsp;zum Einsatz gebracht. Wir informieren
            damit in klarer und einfacher Sprache, dass wir im Rahmen unserer
            Gesch&auml;ftst&auml;tigkeiten nur dann personenbezogene Daten
            verarbeiten, wenn eine entsprechende gesetzliche Grundlage gegeben
            ist. Das ist sicher nicht m&ouml;glich, wenn man m&ouml;glichst
            knappe, unklare und juristisch-technische Erkl&auml;rungen abgibt,
            so wie sie im Internet oft Standard sind, wenn es um Datenschutz
            geht. Ich hoffe, Sie finden die folgenden Erl&auml;uterungen
            interessant und informativ und vielleicht ist die eine oder andere
            Information dabei, die Sie noch nicht kannten.
            <br /> Wenn trotzdem Fragen bleiben, m&ouml;chten wir Sie bitten,
            sich an die unten bzw. im Impressum genannte verantwortliche Stelle
            zu wenden, den vorhandenen Links zu folgen und sich weitere
            Informationen auf Drittseiten anzusehen. Unsere Kontaktdaten finden
            Sie selbstverst&auml;ndlich auch im Impressum.
          </p>
          <p>
            <strong>
              Anwendungsbereich
              <br />
              <br />
            </strong>
            <strong>Kurzfassung</strong>
          </p>
          <ul className="list-disc list-inside">
            <li>
              Wir nutzen Ihre Daten vor allem, um Sie zu unseren
              Solaranlagenprodukte zu beraten und mit Ihnen Ihre Projekte zu
              realisieren.
            </li>
            <li>
              Ihre 1:1 Betreuung setzen wir unter Zuhilfenahme von
              Vertriebspartnern um.
            </li>
            <li>
              Wir unterst&uuml;tzen Sie und unsere Finanzierungspartner bei der
              Kontaktaufnahme.
            </li>
            <li>
              &Uuml;ber neue Produkte und Services von uns m&ouml;chten wir Sie
              gerne auf dem Laufenden halten.
            </li>
            <li>
              Wir m&uuml;ssen auch gesetzliche Anforderungen erf&uuml;llen.
            </li>
            <li>
              Wir arbeiten mit einigen Dienstleistern wie etwa Planern zusammen,
              die zweckgebunden Ihr Daten zur Projektumsetzung erhalten
              k&ouml;nnen.
            </li>
            <li>
              Es ist m&ouml;glich, dass wir Ihre Daten von einem unserer
              Agenturpartner erhalten haben.
            </li>
          </ul>
          <p>
            <strong>Beratung, Verkauf, Montage</strong>
          </p>
          <p>
            Um den (Ver)Kauf(s)prozess, die Beratung und die Montage mit und
            f&uuml;r Sie durchzuf&uuml;hren, verarbeiten wir folgende Daten:
          </p>
          <p>
            <strong>Zu Ihnen</strong>
          </p>
          <ul className="list-disc list-inside">
            <li>Name</li>
            <li>Adresse</li>
            <li>Telefon, E-Mail-Adresse</li>
            <li>Kaufwunsch und Angaben aus Formularen Lead-Agentur</li>
          </ul>
          <p>
            <strong>Zum Projekt</strong>
          </p>
          <ul className="list-disc list-inside">
            <li>Bauliche Angaben zur Immobilie</li>
            <li>
              Fotodokumentation Objekt inkl. Umgebung (Dach, Z&auml;hlerkasten,
              Baufl&auml;che etc.)
            </li>
            <li>
              Lastenbezogene Angaben (Stromverbrauch, Strompreis,
              gew&uuml;nschte Speichergr&ouml;&szlig;e etc.)
            </li>
          </ul>
          <p>
            Grundlage f&uuml;r die Datenverarbeitung ist Art. 6 Abs. 1 lit. b
            DS-GVO, der die Verarbeitung von Daten zur Erf&uuml;llung eines
            Vertrags oder vorvertraglicher Ma&szlig;nahmen gestattet.
          </p>
          <p>
            <strong>Handelsvertreter</strong>
          </p>
          <ol>
            <li>
              <strong> Kaufberatung und Verkauf</strong>
            </li>
          </ol>
          <p>
            Die Durchf&uuml;hrung der Beratungsgespr&auml;che und die
            Angebotslegung bis hin zum Verkauf und der Montage Ihrer Solaranlage
            erfolgt durch unsere Vertriebspartner (Handelsvertreter) bzw. wird
            durch diese begleitet. Dazu ist es erforderlich Ihre Daten nach
            Ziff. 5 an diese weiterzuleiten. Rechtsgrundlage f&uuml;r diese
            &Uuml;bermittlung ist Art. 6 Abs. 1 f DS-GVO. Wir haben ein
            berechtigtes Interesse an der Einbindung unserer Vertriebspartner,
            da diese handels&uuml;bliche Praxis es uns erm&ouml;glicht, unsere
            Ressourcen auf unsere Kernkompetenzen zu konzentrieren, n&auml;mlich
            der Erbringung und Verbesserung unserer Produkte und
            Dienstleistungen f&uuml;r Sie.
          </p>
          <p>
            In der Regel bewahren wir Ihre Daten aus handels- und
            steuerrechtlichen Gr&uuml;nden bis zu 10 Jahren auf und f&uuml;r
            etwaige Gew&auml;hrleistungsanspr&uuml;che bis zu 2 bzw. 5 Jahren
            (&sect; 438 BGB). N&auml;heres erfahren Sie weiter unten.
          </p>
          <ol>
            <li>
              <strong> Gemeinsame Verantwortlichkeit</strong>
            </li>
          </ol>
          <p>
            Wie oben beschrieben verarbeiten wir in dieser Zusammenarbeit
            gemeinsam mit den Vertriebspartnern Ihre Daten. Daher haben wir mit
            diesen eine Vereinbarung nach Art. 26 DS-GVO getroffen und darin
            u.a. geregelt, dass f&uuml;r die Wahrnehmung Ihrer Rechte, wir (EKM)
            Ihr Ansprechpartner sind, sowie in allen anderen Fragen im
            Zusammenhang mit der Verarbeitung Ihrer Daten. Davon unabh&auml;ngig
            k&ouml;nnen Sie sich auch an den Vertriebspartner wenden. Im
            Einzelnen tr&auml;gt der Vertriebspartner die Verantwortung f&uuml;r
            die vor Ort Erhebung und Speicherung Ihrer Daten nach Ziff. 5 und
            die &Uuml;bermittlung Ihrer Daten an uns.
          </p>
          <p>
            Diese Datenschutzerkl&auml;rung gilt f&uuml;r alle von uns im
            Unternehmen verarbeiteten personenbezogenen Daten und f&uuml;r alle
            personenbezogenen Daten, die von uns beauftragte Firmen
            (Auftragsverarbeiter) verarbeiten. Mit personenbezogenen Daten
            meinen wir Informationen im Sinne des Art. 4 Nr. 1 DSGVO wie zum
            Beispiel Name, E-Mail-Adresse und postalische Anschrift einer
            Person. Die Verarbeitung personenbezogener Daten sorgt daf&uuml;r,
            dass wir unsere Dienstleistungen und Produkte anbieten und abrechnen
            k&ouml;nnen, sei es online oder offline. Der Anwendungsbereich
            dieser Datenschutzerkl&auml;rung umfasst:
          </p>
          <ul className="list-disc list-inside">
            <li>
              alle Onlineauftritte (Websites, Onlineshops), die wir betreiben
            </li>
            <li>Social Media Auftritte und E-Mail-Kommunikation</li>
            <li>mobile Apps f&uuml;r Smartphones und andere Ger&auml;te</li>
          </ul>
          <p>
            <strong>Kurz gesagt:</strong>&nbsp;Die Datenschutzerkl&auml;rung
            gilt f&uuml;r alle Bereiche, in denen personenbezogene Daten im
            Unternehmen &uuml;ber die genannten Kan&auml;le strukturiert
            verarbeitet werden. Sollten wir au&szlig;erhalb dieser Kan&auml;le
            mit Ihnen in Rechtsbeziehungen eintreten, werden wir Sie
            gegebenenfalls gesondert informieren.
          </p>
          <p>
            <strong>Rechtsgrundlagen</strong>
          </p>
          <p>
            In der folgenden Datenschutzerkl&auml;rung geben wir Ihnen
            transparente Informationen zu den rechtlichen Grunds&auml;tzen und
            Vorschriften, also den Rechtsgrundlagen der
            Datenschutz-Grundverordnung, die uns erm&ouml;glichen,
            personenbezogene Daten zu verarbeiten.
            <br /> Was das EU-Recht betrifft, beziehen wir uns auf die
            VERORDNUNG (EU) 2016/679 DES EUROP&Auml;ISCHEN PARLAMENTS UND DES
            RATES vom 27. April 2016. Diese Datenschutz-Grundverordnung der EU
            k&ouml;nnen Sie selbstverst&auml;ndlich online auf EUR-Lex, dem
            Zugang zum EU-Recht, unter&nbsp;
            <a href="https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679">
              https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679
            </a>
            &nbsp;nachlesen.
          </p>
          <p>
            Wir verarbeiten Ihre Daten nur, wenn mindestens eine der folgenden
            Bedingungen zutrifft:
          </p>
          <ol>
            <li>
              <strong>Einwilligung</strong>&nbsp;(Artikel 6 Absatz 1 lit. a
              DSGVO): Sie haben uns Ihre Einwilligung gegeben, Daten zu einem
              bestimmten Zweck zu verarbeiten. Ein Beispiel w&auml;re die
              Speicherung Ihrer eingegebenen Daten eines Kontaktformulars.
            </li>
            <li>
              <strong>Vertrag</strong>&nbsp;(Artikel 6 Absatz 1 lit. b DSGVO):
              Um einen Vertrag oder vorvertragliche Verpflichtungen mit Ihnen zu
              erf&uuml;llen, verarbeiten wir Ihre Daten. Wenn wir zum Beispiel
              einen Kaufvertrag mit Ihnen abschlie&szlig;en, ben&ouml;tigen wir
              vorab personenbezogene Informationen.
            </li>
            <li>
              <strong>Rechtliche Verpflichtung</strong>&nbsp;(Artikel 6 Absatz 1
              lit. c DSGVO): Wenn wir einer rechtlichen Verpflichtung
              unterliegen, verarbeiten wir Ihre Daten. Zum Beispiel sind wir
              gesetzlich verpflichtet Rechnungen f&uuml;r die Buchhaltung
              aufzuheben. Diese enthalten in der Regel personenbezogene Daten.
            </li>
            <li>
              <strong>Berechtigte Interessen</strong>&nbsp;(Artikel 6 Absatz 1
              lit. f DSGVO): Im Falle berechtigter Interessen, die Ihre
              Grundrechte nicht einschr&auml;nken, behalten wir uns die
              Verarbeitung personenbezogener Daten vor. Wir m&uuml;ssen zum
              Beispiel gewisse Daten verarbeiten, um unsere Website sicher und
              wirtschaftlich effizient betreiben zu k&ouml;nnen. Diese
              Verarbeitung ist somit ein berechtigtes Interesse.
            </li>
          </ol>
          <p>
            Weitere Bedingungen wie die Wahrnehmung von Aufnahmen im
            &ouml;ffentlichen Interesse und Aus&uuml;bung &ouml;ffentlicher
            Gewalt sowie dem Schutz lebenswichtiger Interessen treten bei uns in
            der Regel nicht auf. Soweit eine solche Rechtsgrundlage doch
            einschl&auml;gig sein sollte, wird diese an der entsprechenden
            Stelle ausgewiesen.
          </p>
          <p>
            Zus&auml;tzlich zu der EU-Verordnung gelten auch noch nationale
            Gesetze:
          </p>
          <ul className="list-disc list-inside">
            <li>
              In&nbsp;<strong>&Ouml;sterreich</strong>&nbsp;ist dies das
              Bundesgesetz zum Schutz nat&uuml;rlicher Personen bei der
              Verarbeitung personenbezogener Daten (
              <strong>Datenschutzgesetz</strong>), kurz&nbsp;
              <strong>DSG</strong>.
            </li>
            <li>
              In&nbsp;<strong>Deutschland</strong>&nbsp;gilt das&nbsp;
              <strong>Bundesdatenschutzgesetz</strong>, kurz
              <strong>&nbsp;BDSG</strong>.
            </li>
          </ul>
          <p>
            Sofern weitere regionale oder nationale Gesetze zur Anwendung
            kommen, informieren wir Sie in den folgenden Abschnitten
            dar&uuml;ber.
          </p>
          <p>
            <strong>Kontaktdaten des Verantwortlichen</strong>
          </p>
          <p>
            Sollten Sie Fragen zum Datenschutz oder zur Verarbeitung
            personenbezogener Daten haben, finden Sie nachfolgend die
            Kontaktdaten der verantwortlichen Person bzw. Stelle:
            <br /> Musterfirma GbR
            <br />
            <strong>FE Leads GmbH</strong>
          </p>
          <p>Zollpfad 4</p>
          <p>D-28217 Bremen</p>
          <p>
            E-Mail:&nbsp;
            <a href="mailto:%20info@fe-leads.de">info@fe-leads.de</a>
          </p>
          <p>
            Telefon:&nbsp;<a href="tel:%200421%206485230">0421 6485230</a>
          </p>
          <p>Gesch&auml;ftsf&uuml;hrer: Pouria Daftari</p>
          <p>Registergericht: Amtsgericht Bremen</p>
          <p>HRB 38018</p>
          <p>USt.-Ident.-Nr. DE353153929</p>
          <p>
            <strong>Speicherdauer</strong>
          </p>
          <p>
            Dass wir personenbezogene Daten nur so lange speichern, wie es
            f&uuml;r die Bereitstellung unserer Dienstleistungen und Produkte
            unbedingt notwendig ist, gilt als generelles Kriterium bei uns. Das
            bedeutet, dass wir personenbezogene Daten l&ouml;schen, sobald der
            Grund f&uuml;r die Datenverarbeitung nicht mehr vorhanden ist. In
            einigen F&auml;llen sind wir gesetzlich dazu verpflichtet, bestimmte
            Daten auch nach Wegfall des urspr&uuml;ngliches Zwecks zu speichern,
            zum Beispiel zu Zwecken der Buchf&uuml;hrung.
          </p>
          <p>
            Sollten Sie die L&ouml;schung Ihrer Daten w&uuml;nschen oder die
            Einwilligung zur Datenverarbeitung widerrufen, werden die Daten so
            rasch wie m&ouml;glich und soweit keine Pflicht zur Speicherung
            besteht, gel&ouml;scht.
          </p>
          <p>
            &Uuml;ber die konkrete Dauer der jeweiligen Datenverarbeitung
            informieren wir Sie weiter unten, sofern wir weitere Informationen
            dazu haben.
          </p>
          <p>
            <strong>Rechte laut Datenschutz-Grundverordnung</strong>
          </p>
          <p>
            Gem&auml;&szlig; Artikel 13, 14 DSGVO informieren wir Sie &uuml;ber
            die folgenden Rechte, die Ihnen zustehen, damit es zu einer fairen
            und transparenten Verarbeitung von Daten kommt:
          </p>
          <ul className="list-disc list-inside">
            <li>
              Sie haben laut Artikel 15 DSGVO ein Auskunftsrecht dar&uuml;ber,
              ob wir Daten von Ihnen verarbeiten. Sollte das zutreffen, haben
              Sie Recht darauf eine Kopie der Daten zu erhalten und die
              folgenden Informationen zu erfahren:
            </li>
            <ul className="list-disc list-inside">
              <li>zu welchem Zweck wir die Verarbeitung durchf&uuml;hren;</li>
              <li>
                die Kategorien, also die Arten von Daten, die verarbeitet
                werden;
              </li>
              <li>
                wer diese Daten erh&auml;lt und wenn die Daten an
                Drittl&auml;nder &uuml;bermittelt werden, wie die Sicherheit
                garantiert werden kann;
              </li>
              <li>wie lange die Daten gespeichert werden;</li>
              <li>
                das Bestehen des Rechts auf Berichtigung, L&ouml;schung oder
                Einschr&auml;nkung der Verarbeitung und dem Widerspruchsrecht
                gegen die Verarbeitung;
              </li>
              <li>
                dass Sie sich bei einer Aufsichtsbeh&ouml;rde beschweren
                k&ouml;nnen (Links zu diesen Beh&ouml;rden finden Sie weiter
                unten);
              </li>
              <li>
                die Herkunft der Daten, wenn wir sie nicht bei Ihnen erhoben
                haben;
              </li>
              <li>
                ob Profiling durchgef&uuml;hrt wird, ob also Daten automatisch
                ausgewertet werden, um zu einem pers&ouml;nlichen Profil von
                Ihnen zu gelangen.
              </li>
            </ul>
            <li>
              Sie haben laut Artikel 16 DSGVO ein Recht auf Berichtigung der
              Daten, was bedeutet, dass wir Daten richtig stellen m&uuml;ssen,
              falls Sie Fehler finden.
            </li>
            <li>
              Sie haben laut Artikel 17 DSGVO das Recht auf L&ouml;schung
              (&bdquo;Recht auf Vergessenwerden&ldquo;), was konkret bedeutet,
              dass Sie die L&ouml;schung Ihrer Daten verlangen d&uuml;rfen.
            </li>
            <li>
              Sie haben laut Artikel 18 DSGVO das Recht auf Einschr&auml;nkung
              der Verarbeitung, was bedeutet, dass wir die Daten nur mehr
              speichern d&uuml;rfen aber nicht weiter verwenden.
            </li>
            <li>
              Sie haben laut Artikel 20 DSGVO das Recht auf
              Daten&uuml;bertragbarkeit, was bedeutet, dass wir Ihnen auf
              Anfrage Ihre Daten in einem g&auml;ngigen Format zur
              Verf&uuml;gung stellen.
            </li>
            <li>
              Sie haben laut Artikel 21 DSGVO ein Widerspruchsrecht, welches
              nach Durchsetzung eine &Auml;nderung der Verarbeitung mit sich
              bringt.
            </li>
            <ul className="list-disc list-inside">
              <li>
                Wenn die Verarbeitung Ihrer Daten auf Artikel 6 Abs. 1 lit. e
                (&ouml;ffentliches Interesse, Aus&uuml;bung &ouml;ffentlicher
                Gewalt) oder Artikel 6 Abs. 1 lit. f (berechtigtes Interesse)
                basiert, k&ouml;nnen Sie gegen die Verarbeitung Widerspruch
                einlegen. Wir pr&uuml;fen danach so rasch wie m&ouml;glich, ob
                wir diesem Widerspruch rechtlich nachkommen k&ouml;nnen.
              </li>
              <li>
                Werden Daten verwendet, um Direktwerbung zu betreiben,
                k&ouml;nnen Sie jederzeit gegen diese Art der Datenverarbeitung
                widersprechen. Wir d&uuml;rfen Ihre Daten danach nicht mehr
                f&uuml;r Direktmarketing verwenden.
              </li>
              <li>
                Werden Daten verwendet, um Profiling zu betreiben, k&ouml;nnen
                Sie jederzeit gegen diese Art der Datenverarbeitung
                widersprechen. Wir d&uuml;rfen Ihre Daten danach nicht mehr
                f&uuml;r Profiling verwenden.
              </li>
            </ul>
            <li>
              Sie haben laut Artikel 22 DSGVO unter Umst&auml;nden das Recht,
              nicht einer ausschlie&szlig;lich auf einer automatisierten
              Verarbeitung (zum Beispiel Profiling) beruhenden Entscheidung
              unterworfen zu werden.
            </li>
            <li>
              Sie haben laut Artikel 77 DSGVO das Recht auf Beschwerde. Das
              hei&szlig;t, Sie k&ouml;nnen sich jederzeit bei der
              Datenschutzbeh&ouml;rde beschweren, wenn Sie der Meinung sind,
              dass die Datenverarbeitung von personenbezogenen Daten gegen die
              DSGVO verst&ouml;&szlig;t.
            </li>
          </ul>
          <p>
            <strong>Kurz gesagt:</strong>&nbsp;Sie haben Rechte &ndash;
            z&ouml;gern Sie nicht, die oben gelistete verantwortliche Stelle bei
            uns zu kontaktieren!
          </p>
          <p>
            Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das
            Datenschutzrecht verst&ouml;&szlig;t oder Ihre
            datenschutzrechtlichen Anspr&uuml;che in sonst einer Weise verletzt
            worden sind, k&ouml;nnen Sie sich bei der Aufsichtsbeh&ouml;rde
            beschweren. Diese ist f&uuml;r &Ouml;sterreich die
            Datenschutzbeh&ouml;rde, deren Website Sie unter&nbsp;
            <a href="https://www.dsb.gv.at/?tid=312254249">
              https://www.dsb.gv.at/
            </a>
            &nbsp;finden. In Deutschland gibt es f&uuml;r jedes Bundesland einen
            Datenschutzbeauftragten. F&uuml;r n&auml;here Informationen
            k&ouml;nnen Sie sich an die&nbsp;
            <a href="https://www.bfdi.bund.de/DE/Home/home_node.html">
              Bundesbeauftragte f&uuml;r den Datenschutz und die
              Informationsfreiheit (BfDI)
            </a>
            &nbsp;wenden. F&uuml;r unser Unternehmen ist die folgende lokale
            Datenschutzbeh&ouml;rde zust&auml;ndig:
          </p>
          <p>
            <strong>Bremen Datenschutzbeh&ouml;rde</strong>
          </p>
          <p>
            <strong>Landesbeauftragte f&uuml;r Datenschutz:</strong>&nbsp;Imke
            Sommer
            <br />
            <strong>Adresse:&nbsp;</strong>Arndtstra&szlig;e 1, 27570
            Bremerhaven
            <br />
            <strong>Telefonnr.:</strong>&nbsp;04 21/361-2010
            <br />
            <strong>E-Mail-Adresse:</strong>&nbsp;office@datenschutz.bremen.de
            <br />
            <strong>Website:&nbsp;</strong>
            <a href="https://www.datenschutz.bremen.de/?tid=312254249">
              https://www.datenschutz.bremen.de/
            </a>
          </p>
          <p>
            <strong>Web</strong>
            <strong>Analytics Einleitung</strong>
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <p>
                    <strong>
                      Web Analytics Datenschutzerkl&auml;rung Zusammenfassung
                    </strong>
                    &nbsp;
                    <br /> 👥 Betroffene: Besucher der Website
                    <br /> 🤝 Zweck: Auswertung der Besucherinformationen zur
                    Optimierung des Webangebots.
                    <br /> 📓 Verarbeitete Daten: Zugriffsstatistiken, die Daten
                    wie Standorte der Zugriffe, Ger&auml;tedaten, Zugriffsdauer
                    und Zeitpunkt, Navigationsverhalten, Klickverhalten und
                    IP-Adressen enthalten. Mehr Details dazu finden Sie beim
                    jeweils eingesetzten Web Analytics Tool.
                    <br /> 📅 Speicherdauer: abh&auml;ngig vom eingesetzten
                    Web-Analytics-Tool
                    <br /> ⚖️ Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO
                    (Einwilligung), Art. 6 Abs. 1 lit. f DSGVO (Berechtigte
                    Interessen)
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Was ist Web Analytics?</strong>
          </p>
          <p>
            Wir verwenden auf unserer Website Software zur Auswertung des
            Verhaltens der Website-Besucher, kurz Web Analytics oder Web-Analyse
            genannt. Dabei werden Daten gesammelt, die der jeweilige
            Analytic-Tool-Anbieter (auch Trackingtool genannt) speichert,
            verwaltet und verarbeitet. Mit Hilfe der Daten werden Analysen
            &uuml;ber das Nutzerverhalten auf unserer Website erstellt und uns
            als Websitebetreiber zur Verf&uuml;gung gestellt. Zus&auml;tzlich
            bieten die meisten Tools verschiedene Testm&ouml;glichkeiten an. So
            k&ouml;nnen wir etwa testen, welche Angebote oder Inhalte bei
            unseren Besuchern am besten ankommen. Daf&uuml;r zeigen wir Ihnen
            f&uuml;r einen begrenzten Zeitabschnitt zwei verschiedene Angebote.
            Nach dem Test (sogenannter A/B-Test) wissen wir, welches Produkt
            bzw. welcher Inhalt unsere Websitebesucher interessanter finden.
            F&uuml;r solche Testverfahren, wie auch f&uuml;r andere
            Analytics-Verfahren, k&ouml;nnen auch Userprofile erstellt werden
            und die Daten in Cookies gespeichert werden.
          </p>
          <p>
            <strong>Warum betreiben wir Web Analytics?</strong>
          </p>
          <p>
            Mit unserer Website haben wir ein klares Ziel vor Augen: wir wollen
            f&uuml;r unsere Branche das beste Webangebot auf dem Markt liefern.
            Um dieses Ziel zu erreichen, wollen wir einerseits das beste und
            interessanteste Angebot bieten und andererseits darauf achten, dass
            Sie sich auf unserer Website rundum wohlf&uuml;hlen. Mit Hilfe von
            Webanalyse-Tools k&ouml;nnen wir das Verhalten unserer
            Websitebesucher genauer unter die Lupe nehmen und dann entsprechend
            unser Webangebot f&uuml;r Sie und uns verbessern. So k&ouml;nnen wir
            beispielsweise erkennen wie alt unsere Besucher durchschnittlich
            sind, woher sie kommen, wann unsere Website am meisten besucht wird
            oder welche Inhalte oder Produkte besonders beliebt sind. All diese
            Informationen helfen uns die Website zu optimieren und somit bestens
            an Ihre Bed&uuml;rfnisse, Interessen und W&uuml;nsche anzupassen.
          </p>
          <p>
            <strong>Welche Daten werden verarbeitet?</strong>
          </p>
          <p>
            Welche Daten genau gespeichert werden, h&auml;ngt nat&uuml;rlich von
            den verwendeten Analyse-Tools ab. Doch in der Regel wird zum
            Beispiel gespeichert, welche Inhalte Sie auf unserer Website
            ansehen, auf welche Buttons oder Links Sie klicken, wann Sie eine
            Seite aufrufen, welchen Browser sie verwenden, mit welchem
            Ger&auml;t (PC, Tablet, Smartphone usw.) Sie die Website besuchen
            oder welches Computersystem Sie verwenden. Wenn Sie damit
            einverstanden waren, dass auch Standortdaten erhoben werden
            d&uuml;rfen, k&ouml;nnen auch diese durch den
            Webanalyse-Tool-Anbieter verarbeitet werden.
          </p>
          <p>
            Zudem wird auch Ihre IP-Adresse gespeichert. Gem&auml;&szlig; der
            Datenschutz-Grundverordnung (DSGVO) sind IP-Adressen
            personenbezogene Daten. Ihre IP-Adresse wird allerdings in der Regel
            pseudonymisiert (also in unkenntlicher und gek&uuml;rzter Form)
            gespeichert. F&uuml;r den Zweck der Tests, der Webanalyse und der
            Weboptimierung werden grunds&auml;tzlich keine direkten Daten, wie
            etwa Ihr Name, Ihr Alter, Ihre Adresse oder Ihre E-Mail-Adresse
            gespeichert. All diese Daten werden, sofern sie erhoben werden,
            pseudonymisiert gespeichert. So k&ouml;nnen Sie als Person nicht
            identifiziert werden.
          </p>
          <p>
            Das folgende Beispiel zeigt schematisch die Funktionsweise von
            Google Analytics als Beispiel f&uuml;r client-basiertes Webtracking
            mit Java-Script-Code.
          </p>
          <p>
            Wie lange die jeweiligen Daten gespeichert werden, h&auml;ngt immer
            vom Anbieter ab. Manche Cookies speichern Daten nur f&uuml;r ein
            paar Minuten bzw. bis Sie die Website wieder verlassen, andere
            Cookies k&ouml;nnen Daten &uuml;ber mehrere Jahre speichern.
          </p>
          <p>
            <strong>Dauer der Datenverarbeitung</strong>
          </p>
          <p>
            &Uuml;ber die Dauer der Datenverarbeitung informieren wir Sie weiter
            unten, sofern wir weitere Informationen dazu haben. Generell
            verarbeiten wir personenbezogene Daten nur so lange wie es f&uuml;r
            die Bereitstellung unserer Dienstleistungen und Produkte unbedingt
            notwendig ist. Wenn es, wie zum Beispiel im Fall von Buchhaltung,
            gesetzlich vorgeschrieben ist, kann diese Speicherdauer auch
            &uuml;berschritten werden.
          </p>
          <p>
            <strong>Widerspruchsrecht</strong>
          </p>
          <p>
            Sie haben auch jederzeit das Recht und die M&ouml;glichkeit Ihre
            Einwilligung zur Verwendung von Cookies bzw. Drittanbietern zu
            widerrufen. Das funktioniert entweder &uuml;ber unser
            Cookie-Management-Tool oder &uuml;ber andere Opt-Out-Funktionen. Zum
            Beispiel k&ouml;nnen Sie auch die Datenerfassung durch Cookies
            verhindern, indem Sie in Ihrem Browser die Cookies verwalten,
            deaktivieren oder l&ouml;schen.
          </p>
          <p>
            <strong>Rechtsgrundlage</strong>
          </p>
          <p>
            Der Einsatz von Web-Analytics setzt Ihre Einwilligung voraus, welche
            wir mit unserem Cookie Popup eingeholt haben. Diese Einwilligung
            stellt laut
            <strong>&nbsp;Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</strong>
            &nbsp;die Rechtsgrundlage f&uuml;r die Verarbeitung
            personenbezogener Daten, wie sie bei der Erfassung durch
            Web-Analytics Tools vorkommen kann, dar.
          </p>
          <p>
            Zus&auml;tzlich zur Einwilligung besteht von unserer Seite ein
            berechtigtes Interesse daran, das Verhalten der Websitebesucher zu
            analysieren und so unser Angebot technisch und wirtschaftlich zu
            verbessern. Mit Hilfe von Web-Analytics erkennen wir Fehler der
            Website, k&ouml;nnen Attacken identifizieren und die
            Wirtschaftlichkeit verbessern. Die Rechtsgrundlage daf&uuml;r
            ist&nbsp;
            <strong>Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)</strong>
            . Wir setzen die Tools gleichwohl nur ein, soweit sie eine
            Einwilligung erteilt haben.
          </p>
          <p>
            Da bei Web-Analytics-Tools Cookies zum Einsatz kommen, empfehlen wir
            Ihnen auch das Lesen unserer allgemeinen Datenschutzerkl&auml;rung
            zu Cookies. Um zu erfahren, welche Daten von Ihnen genau gespeichert
            und verarbeitet werden, sollten Sie die Datenschutzerkl&auml;rungen
            der jeweiligen Tools durchlesen.
          </p>
          <p>
            Informationen zu speziellen Web-Analytics-Tools, erhalten Sie
            &ndash; sofern vorhanden &ndash; in den folgenden Abschnitten.
          </p>
          <p>
            <strong>Facebook Conversions API Datenschutzerkl&auml;rung</strong>
          </p>
          <p>
            Wir verwenden auf unserer Website Facebook Conversions API, ein
            serverseitiges Event-Trackingtool. Dienstanbieter ist das
            amerikanische Unternehmen Meta Platforms Inc. F&uuml;r den
            europ&auml;ischen Raum ist das Unternehmen Meta Platforms Ireland
            Limited (4 Grand Canal Square, Grand Canal Harbour, Dublin 2,
            Irland) verantwortlich.
          </p>
          <p>
            Facebook verarbeitet Daten von Ihnen u.a. auch in den USA. Wir
            weisen darauf hin, dass nach Meinung des Europ&auml;ischen
            Gerichtshofs derzeit kein angemessenes Schutzniveau f&uuml;r den
            Datentransfer in die USA besteht. Dies kann mit verschiedenen
            Risiken f&uuml;r die Rechtm&auml;&szlig;igkeit und Sicherheit der
            Datenverarbeitung einhergehen.
          </p>
          <p>
            Als Grundlage der Datenverarbeitung bei Empf&auml;ngern mit Sitz in
            Drittstaaten (au&szlig;erhalb der Europ&auml;ischen Union, Island,
            Liechtenstein, Norwegen, also insbesondere in den USA) oder einer
            Datenweitergabe dorthin verwendet Facebook sogenannte
            Standardvertragsklauseln (= Art. 46. Abs. 2 und 3 DSGVO).
            Standardvertragsklauseln (Standard Contractual Clauses &ndash; SCC)
            sind von der EU-Kommission bereitgestellte Mustervorlagen und sollen
            sicherstellen, dass Ihre Daten auch dann den europ&auml;ischen
            Datenschutzstandards entsprechen, wenn diese in Drittl&auml;nder
            (wie beispielsweise in die USA) &uuml;berliefert und dort
            gespeichert werden. Durch diese Klauseln verpflichtet sich Facebook,
            bei der Verarbeitung Ihrer relevanten Daten, das europ&auml;ische
            Datenschutzniveau einzuhalten, selbst wenn die Daten in den USA
            gespeichert, verarbeitet und verwaltet werden. Diese Klauseln
            basieren auf einem Durchf&uuml;hrungsbeschluss der EU-Kommission.
            Sie finden den Beschluss und die entsprechenden
            Standardvertragsklauseln u.a. hier:&nbsp;
            <a href="https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de">
              https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de
            </a>
          </p>
          <p>
            Die Facebook Datenverarbeitungsbedingung, welche den
            Standardvertragsklauseln entsprechen, finden Sie unter&nbsp;
            <a href="https://www.facebook.com/legal/terms/dataprocessing">
              https://www.facebook.com/legal/terms/dataprocessing
            </a>
            .
          </p>
          <p>
            Mehr &uuml;ber die Daten, die durch die Verwendung von Facebook
            Conversions API verarbeitet werden, erfahren Sie in der Privacy
            Policy auf&nbsp;
            <a href="https://www.facebook.com/about/privacy">
              https://www.facebook.com/about/privacy
            </a>
            .
          </p>
          <p>
            <strong>Google Analytics Datenschutzerkl&auml;rung</strong>
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <p>
                    <strong>
                      Google Analytics Datenschutzerkl&auml;rung Zusammenfassung
                    </strong>
                    &nbsp;
                    <br /> 👥 Betroffene: Besucher der Website
                    <br /> 🤝 Zweck: Auswertung der Besucherinformationen zur
                    Optimierung des Webangebots.
                    <br /> 📓 Verarbeitete Daten: Zugriffsstatistiken, die Daten
                    wie Standorte der Zugriffe, Ger&auml;tedaten, Zugriffsdauer
                    und Zeitpunkt, Navigationsverhalten, Klickverhalten und
                    IP-Adressen enthalten. Mehr Details dazu finden Sie weiter
                    unten in dieser Datenschutzerkl&auml;rung.
                    <br /> 📅 Speicherdauer: abh&auml;ngig von den verwendeten
                    Properties
                    <br /> ⚖️ Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO
                    (Einwilligung), Art. 6 Abs. 1 lit. f DSGVO (Berechtigte
                    Interessen)
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Was ist Google Analytics?</strong>
          </p>
          <p>
            Wir verwenden auf unserer Website das Analyse-Tracking Tool Google
            Analytics (GA) des amerikanischen Unternehmens Google Inc. F&uuml;r
            den europ&auml;ischen Raum ist das Unternehmen Google Ireland
            Limited (Gordon House, Barrow Street Dublin 4, Irland) f&uuml;r alle
            Google-Dienste verantwortlich. Google Analytics sammelt Daten
            &uuml;ber Ihre Handlungen auf unserer Website. Wenn Sie
            beispielsweise einen Link anklicken, wird diese Aktion in einem
            Cookie gespeichert und an Google Analytics versandt. Mithilfe der
            Berichte, die wir von Google Analytics erhalten, k&ouml;nnen wir
            unsere Website und unser Service besser an Ihre W&uuml;nsche
            anpassen. Im Folgenden gehen wir n&auml;her auf das Tracking-Tool
            ein und informieren Sie vor allem dar&uuml;ber, welche Daten
            gespeichert werden und wie Sie das verhindern k&ouml;nnen.
          </p>
          <p>
            Google Analytics ist ein Trackingtool, das der Datenverkehrsanalyse
            unserer Website dient. Damit Google Analytics funktioniert, wird ein
            Tracking-Code in den Code unserer Website eingebaut. Wenn Sie unsere
            Website besuchen, zeichnet dieser Code verschiedene Handlungen auf,
            die Sie auf unserer Website ausf&uuml;hren. Sobald Sie unsere
            Website verlassen, werden diese Daten an die Google-Analytics-Server
            gesendet und dort gespeichert.
          </p>
          <p>
            Google verarbeitet die Daten und wir bekommen Berichte &uuml;ber Ihr
            Userverhalten. Dabei kann es sich unter anderem um folgende Berichte
            handeln:
          </p>
          <ul className="list-disc list-inside">
            <li>
              Zielgruppenberichte: &Uuml;ber Zielgruppenberichte lernen wir
              unsere User besser kennen und wissen genauer, wer sich f&uuml;r
              unser Service interessiert.
            </li>
            <li>
              Anzeigeberichte: Durch Anzeigeberichte k&ouml;nnen wir unsere
              Onlinewerbung leichter analysieren und verbessern.
            </li>
            <li>
              Akquisitionsberichte: Akquisitionsberichte geben uns hilfreiche
              Informationen dar&uuml;ber, wie wir mehr Menschen f&uuml;r unser
              Service begeistern k&ouml;nnen.
            </li>
            <li>
              Verhaltensberichte: Hier erfahren wir, wie Sie mit unserer Website
              interagieren. Wir k&ouml;nnen nachvollziehen welchen Weg Sie auf
              unserer Seite zur&uuml;cklegen und welche Links Sie anklicken.
            </li>
            <li>
              Conversionsberichte: Conversion nennt man einen Vorgang, bei dem
              Sie aufgrund einer Marketing-Botschaft eine gew&uuml;nschte
              Handlung ausf&uuml;hren. Zum Beispiel, wenn Sie von einem reinen
              Websitebesucher zu einem K&auml;ufer oder Newsletter-Abonnent
              werden. Mithilfe dieser Berichte erfahren wir mehr dar&uuml;ber,
              wie unsere Marketing-Ma&szlig;nahmen bei Ihnen ankommen. So wollen
              wir unsere Conversionrate steigern.
            </li>
            <li>
              Echtzeitberichte: Hier erfahren wir immer sofort, was gerade auf
              unserer Website passiert. Zum Beispiel sehen wir wie viele User
              gerade diesen Text lesen.
            </li>
          </ul>
          <p>
            <strong>
              Warum verwenden wir Google Analytics auf unserer Website?
            </strong>
          </p>
          <p>
            Unser Ziel mit dieser Website ist klar: Wir wollen Ihnen das
            bestm&ouml;gliche Service bieten. Die Statistiken und Daten von
            Google Analytics helfen uns dieses Ziel zu erreichen.
          </p>
          <p>
            Die statistisch ausgewerteten Daten zeigen uns ein klares Bild von
            den St&auml;rken und Schw&auml;chen unserer Website. Einerseits
            k&ouml;nnen wir unsere Seite so optimieren, dass sie von
            interessierten Menschen auf Google leichter gefunden wird.
            Andererseits helfen uns die Daten, Sie als Besucher besser zu
            verstehen. Wir wissen somit sehr genau, was wir an unserer Website
            verbessern m&uuml;ssen, um Ihnen das bestm&ouml;gliche Service zu
            bieten. Die Daten dienen uns auch, unsere Werbe- und
            Marketing-Ma&szlig;nahmen individueller und kosteng&uuml;nstiger
            durchzuf&uuml;hren. Schlie&szlig;lich macht es nur Sinn, unsere
            Produkte und Dienstleistungen Menschen zu zeigen, die sich
            daf&uuml;r interessieren.
          </p>
          <p>
            <strong>
              Welche Daten werden von Google Analytics gespeichert?
            </strong>
          </p>
          <p>
            Google Analytics erstellt mithilfe eines Tracking-Codes eine
            zuf&auml;llige, eindeutige ID, die mit Ihrem Browser-Cookie
            verbunden ist. So erkennt Sie Google Analytics als neuen User. Wenn
            Sie das n&auml;chste Mal unsere Seite besuchen, werden Sie als
            &bdquo;wiederkehrender&ldquo; User erkannt. Alle gesammelten Daten
            werden gemeinsam mit dieser User-ID gespeichert. So ist es
            &uuml;berhaupt erst m&ouml;glich pseudonyme Userprofile auszuwerten.
          </p>
          <p>
            Um mit Google Analytics unsere Website analysieren zu k&ouml;nnen,
            muss eine Property-ID in den Tracking-Code eingef&uuml;gt werden.
            Die Daten werden dann in der entsprechenden Property gespeichert.
            F&uuml;r jede neu angelegte Property ist die Google Analytics
            4-Property standardm&auml;&szlig;ig. Alternativ kann man aber auch
            noch die Universal Analytics Property erstellen. Je nach verwendeter
            Property werden Daten unterschiedlich lange gespeichert.
          </p>
          <p>
            Durch Kennzeichnungen wie Cookies und App-Instanz-IDs werden Ihre
            Interaktionen auf unserer Website gemessen. Interaktionen sind alle
            Arten von Handlungen, die Sie auf unserer Website ausf&uuml;hren.
            Wenn Sie auch andere Google-Systeme (wie z.B. ein Google-Konto)
            n&uuml;tzen, k&ouml;nnen &uuml;ber Google Analytics generierte Daten
            mit Drittanbieter-Cookies verkn&uuml;pft werden. Google gibt keine
            Google Analytics-Daten weiter, au&szlig;er wir als Websitebetreiber
            genehmigen das. Zu Ausnahmen kann es kommen, wenn es gesetzlich
            erforderlich ist.
          </p>
          <p>Folgende Cookies werden von Google Analytics verwendet:</p>
          <p>
            <strong>Name:</strong>&nbsp;_ga
            <br />
            <strong>Wert:&nbsp;</strong>2.1326744211.152312254249-5
            <br />
            <strong>Verwendungszweck:</strong>&nbsp;Standardm&auml;&szlig;ig
            verwendet analytics.js das Cookie _ga, um die User-ID zu speichern.
            Grunds&auml;tzlich dient es zur Unterscheidung der
            Webseitenbesucher.
            <br />
            <strong>Ablaufdatum:</strong>&nbsp;nach 2 Jahren
          </p>
          <p>
            <strong>Name:</strong>&nbsp;_gid
            <br />
            <strong>Wert:&nbsp;</strong>2.1687193234.152312254249-1
            <br />
            <strong>Verwendungszweck:</strong>&nbsp;Das Cookie dient auch zur
            Unterscheidung der Webseitenbesucher
            <br />
            <strong>Ablaufdatum:</strong>&nbsp;nach 24 Stunden
          </p>
          <p>
            <strong>Name:</strong>&nbsp;_gat_gtag_UA_&lt;property-id&gt;
            <br />
            <strong>Wert:</strong>&nbsp;1
            <br />
            <strong>Verwendungszweck:</strong>&nbsp;Wird zum Senken der
            Anforderungsrate verwendet. Wenn Google Analytics &uuml;ber den
            Google Tag Manager bereitgestellt wird, erh&auml;lt dieser Cookie
            den Namen _dc_gtm_ &lt;property-id&gt;.
            <br />
            <strong>Ablaufdatum:&nbsp;</strong>nach 1 Minute
          </p>
          <p>
            <strong>Name:</strong>&nbsp;AMP_TOKEN
            <br />
            <strong>Wert:</strong>&nbsp;keine Angaben
            <br />
            <strong>Verwendungszweck:</strong>&nbsp;Das Cookie hat einen Token,
            mit dem eine User ID vom AMP-Client-ID-Dienst abgerufen werden kann.
            Andere m&ouml;gliche Werte weisen auf eine Abmeldung, eine Anfrage
            oder einen Fehler hin.
            <br />
            <strong>Ablaufdatum:</strong>&nbsp;nach 30 Sekunden bis zu einem
            Jahr
          </p>
          <p>
            <strong>Name:</strong>&nbsp;__utma
            <br />
            <strong>Wert:&nbsp;</strong>1564498958.1564498958.1564498958.1
            <br />
            <strong>Verwendungszweck:</strong>&nbsp;Mit diesem Cookie kann man
            Ihr Verhalten auf der Website verfolgen und die Leistung messen. Das
            Cookie wird jedes Mal aktualisiert, wenn Informationen an Google
            Analytics gesendet werden.
            <br />
            <strong>Ablaufdatum:</strong>&nbsp;nach 2 Jahren
          </p>
          <p>
            <strong>Name:</strong>&nbsp;__utmt
            <br />
            <strong>Wert:</strong>&nbsp;1
            <br />
            <strong>Verwendungszweck:</strong>&nbsp;Das Cookie wird wie
            _gat_gtag_UA_&lt;property-id&gt; zum Drosseln der Anforderungsrate
            verwendet.
            <br />
            <strong>Ablaufdatum:</strong>&nbsp;nach 10 Minuten
          </p>
          <p>
            <strong>Name:</strong>&nbsp;__utmb
            <br />
            <strong>Wert:&nbsp;</strong>3.10.1564498958
            <br />
            <strong>Verwendungszweck:</strong>&nbsp;Dieses Cookie wird
            verwendet, um neue Sitzungen zu bestimmen. Es wird jedes Mal
            aktualisiert, wenn neue Daten bzw. Infos an Google Analytics
            gesendet werden.
            <br />
            <strong>Ablaufdatum:</strong>&nbsp;nach 30 Minuten
          </p>
          <p>
            <strong>Name:</strong>&nbsp;__utmc
            <br />
            <strong>Wert:</strong>&nbsp;167421564
            <br />
            <strong>Verwendungszweck:</strong>&nbsp;Dieses Cookie wird
            verwendet, um neue Sitzungen f&uuml;r wiederkehrende Besucher
            festzulegen. Dabei handelt es sich um ein Session-Cookie und wird
            nur solange gespeichert, bis Sie den Browser wieder schlie&szlig;en.
            <br />
            <strong>Ablaufdatum:</strong>&nbsp;Nach Schlie&szlig;ung des
            Browsers
          </p>
          <p>
            <strong>Name:</strong>&nbsp;__utmz
            <br />
            <strong>Wert:</strong>
            &nbsp;m|utmccn=(referral)|utmcmd=referral|utmcct=/
            <br />
            <strong>Verwendungszweck:</strong>&nbsp;Das Cookie wird verwendet,
            um die Quelle des Besucheraufkommens auf unserer Website zu
            identifizieren. Das hei&szlig;t, das Cookie speichert, von wo Sie
            auf unsere Website gekommen sind. Das kann eine andere Seite bzw.
            eine Werbeschaltung gewesen sein.
            <br />
            <strong>Ablaufdatum:</strong>&nbsp;nach 6 Monaten
          </p>
          <p>
            <strong>Name:</strong>&nbsp;__utmv
            <br />
            <strong>Wert:</strong>&nbsp;keine Angabe
            <br />
            <strong>Verwendungszweck:</strong>&nbsp;Das Cookie wird verwendet,
            um benutzerdefinierte Userdaten zu speichern. Es wird immer
            aktualisiert, wenn Informationen an Google Analytics gesendet
            werden.
            <br />
            <strong>Ablaufdatum:</strong>&nbsp;nach 2 Jahren
          </p>
          <p>
            <strong>Anmerkung:</strong>&nbsp;Diese Aufz&auml;hlung kann keinen
            Anspruch auf Vollst&auml;ndigkeit erheben, da Google die Wahl ihrer
            Cookies immer wieder auch ver&auml;ndert.
          </p>
          <p>
            Hier zeigen wir Ihnen einen &Uuml;berblick &uuml;ber die wichtigsten
            Daten, die mit Google Analytics erhoben werden:
          </p>
          <p>
            <strong>Heatmaps:</strong>&nbsp;Google legt sogenannte Heatmaps an.
            &Uuml;ber Heatmaps sieht man genau jene Bereiche, die Sie anklicken.
            So bekommen wir Informationen, wo Sie auf unserer Seite
            &bdquo;unterwegs&ldquo; sind.
          </p>
          <p>
            <strong>Sitzungsdauer:</strong>&nbsp;Als Sitzungsdauer bezeichnet
            Google die Zeit, die Sie auf unserer Seite verbringen, ohne die
            Seite zu verlassen. Wenn Sie 20 Minuten inaktiv waren, endet die
            Sitzung automatisch.
          </p>
          <p>
            <strong>Absprungrate</strong>&nbsp;(engl. Bouncerate): Von einem
            Absprung ist die Rede, wenn Sie auf unserer Website nur eine Seite
            ansehen und dann unsere Website wieder verlassen.
          </p>
          <p>
            <strong>Kontoerstellung:</strong>&nbsp;Wenn Sie auf unserer Website
            ein Konto erstellen bzw. eine Bestellung machen, erhebt Google
            Analytics diese Daten.
          </p>
          <p>
            <strong>IP-Adresse:</strong>&nbsp;Die IP-Adresse wird nur in
            gek&uuml;rzter Form dargestellt, damit keine eindeutige Zuordnung
            m&ouml;glich ist.
          </p>
          <p>
            <strong>Standort:</strong>&nbsp;&Uuml;ber die IP-Adresse kann das
            Land und Ihr ungef&auml;hrer Standort bestimmt werden. Diesen
            Vorgang bezeichnet man auch als IP- Standortbestimmung.
          </p>
          <p>
            <strong>Technische Informationen:</strong>&nbsp;Zu den technischen
            Informationen z&auml;hlen unter anderem Ihr Browsertyp, Ihr
            Internetanbieter oder Ihre Bildschirmaufl&ouml;sung.
          </p>
          <p>
            <strong>Herkunftsquelle:</strong>&nbsp;Google Analytics
            beziehungsweise uns interessiert nat&uuml;rlich auch &uuml;ber
            welche Website oder welche Werbung Sie auf unsere Seite gekommen
            sind.
          </p>
          <p>
            Weitere Daten sind Kontaktdaten, etwaige Bewertungen, das Abspielen
            von Medien (z. B. wenn Sie ein Video &uuml;ber unsere Seite
            abspielen), das Teilen von Inhalten &uuml;ber Social Media oder das
            Hinzuf&uuml;gen zu Ihren Favoriten. Die Aufz&auml;hlung hat keinen
            Vollst&auml;ndigkeitsanspruch und dient nur zu einer allgemeinen
            Orientierung der Datenspeicherung durch Google Analytics.
          </p>
          <p>
            <strong>Wie lange und wo werden die Daten gespeichert?</strong>
          </p>
          <p>
            Google hat ihre Server auf der ganzen Welt verteilt. Die meisten
            Server befinden sich in Amerika und folglich werden Ihre Daten meist
            auf amerikanischen Servern gespeichert. Hier k&ouml;nnen Sie genau
            nachlesen wo sich die Google-Rechenzentren befinden:&nbsp;
            <a href="https://www.google.com/about/datacenters/locations/?hl=de">
              https://www.google.com/about/datacenters/locations/?hl=de
            </a>
          </p>
          <p>
            Ihre Daten werden auf verschiedenen physischen Datentr&auml;gern
            verteilt. Das hat den Vorteil, dass die Daten schneller abrufbar
            sind und vor Manipulation besser gesch&uuml;tzt sind. In jedem
            Google-Rechenzentrum gibt es entsprechende Notfallprogramme f&uuml;r
            Ihre Daten. Wenn beispielsweise die Hardware bei Google
            ausf&auml;llt oder Naturkatastrophen Server lahmlegen, bleibt das
            Risiko einer Dienstunterbrechung bei Google dennoch gering.
          </p>
          <p>
            Die Aufbewahrungsdauer der Daten h&auml;ngt von den verwendeten
            Properties ab. Bei der Verwendung der neueren Google Analytics
            4-Properties ist die Aufbewahrungsdauer Ihrer Userdaten auf 14
            Monate fix eingestellt. F&uuml;r andere sogenannte Ereignisdaten
            haben wir die M&ouml;glichkeit eine Aufbewahrungsdauer von 2 Monaten
            oder 14 Monaten zu w&auml;hlen.
          </p>
          <p>
            Bei Universal Analytics-Properties ist bei Google Analytics eine
            Aufbewahrungsdauer Ihrer Userdaten von 26 Monaten standardisiert
            eingestellt. Dann werden Ihre Userdaten gel&ouml;scht. Allerdings
            haben wir die M&ouml;glichkeit, die Aufbewahrungsdauer von Nutzdaten
            selbst zu w&auml;hlen. Daf&uuml;r stehen uns f&uuml;nf Varianten zur
            Verf&uuml;gung:
          </p>
          <ul className="list-disc list-inside">
            <li>L&ouml;schung nach 14 Monaten</li>
            <li>L&ouml;schung nach 26 Monaten</li>
            <li>L&ouml;schung nach 38 Monaten</li>
            <li>L&ouml;schung nach 50 Monaten</li>
            <li>Keine automatische L&ouml;schung</li>
          </ul>
          <p>
            Zus&auml;tzlich gibt es auch die Option, dass Daten erst dann
            gel&ouml;scht werden, wenn Sie innerhalb des von uns gew&auml;hlten
            Zeitraums nicht mehr unsere Website besuchen. In diesem Fall wird
            die Aufbewahrungsdauer jedes Mal zur&uuml;ckgesetzt, wenn Sie unsere
            Website innerhalb des festgelegten Zeitraums wieder besuchen.
          </p>
          <p>
            Wenn der festgelegte Zeitraum abgelaufen ist, werden einmal im Monat
            die Daten gel&ouml;scht. Diese Aufbewahrungsdauer gilt f&uuml;r Ihre
            Daten, die mit Cookies, Usererkennung und Werbe-IDs (z.B. Cookies
            der DoubleClick-Domain) verkn&uuml;pft sind. Berichtergebnisse
            basieren auf aggregierten Daten und werden unabh&auml;ngig von
            Nutzerdaten gespeichert. Aggregierte Daten sind eine
            Zusammenschmelzung von Einzeldaten zu einer gr&ouml;&szlig;eren
            Einheit.
          </p>
          <p>
            <strong>
              Wie kann ich meine Daten l&ouml;schen bzw. die Datenspeicherung
              verhindern?
            </strong>
          </p>
          <p>
            Nach dem Datenschutzrecht der Europ&auml;ischen Union haben Sie das
            Recht, Auskunft &uuml;ber Ihre Daten zu erhalten, sie zu
            aktualisieren, zu l&ouml;schen oder einzuschr&auml;nken. Mithilfe
            des Browser-Add-ons zur Deaktivierung von Google
            Analytics-JavaScript (ga.js, analytics.js, dc.js) verhindern Sie,
            dass Google Analytics Ihre Daten verwendet. Das Browser-Add-on
            k&ouml;nnen Sie unter&nbsp;
            <a href="https://tools.google.com/dlpage/gaoptout?hl=de">
              https://tools.google.com/dlpage/gaoptout?hl=de
            </a>
            &nbsp;runterladen und installieren. Beachten Sie bitte, dass durch
            dieses Add-on nur die Datenerhebung durch Google Analytics
            deaktiviert wird.
          </p>
          <p>
            Falls Sie grunds&auml;tzlich Cookies deaktivieren, l&ouml;schen oder
            verwalten wollen, finden Sie unter dem Abschnitt
            &bdquo;Cookies&ldquo; die entsprechenden Links zu den jeweiligen
            Anleitungen der bekanntesten Browser.
          </p>
          <p>
            <strong>Rechtsgrundlage</strong>
          </p>
          <p>
            Der Einsatz von Google Analytics setzt Ihre Einwilligung voraus,
            welche wir mit unserem Cookie Popup eingeholt haben. Diese
            Einwilligung stellt laut
            <strong>&nbsp;Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</strong>
            &nbsp;die Rechtsgrundlage f&uuml;r die Verarbeitung
            personenbezogener Daten, wie sie bei der Erfassung durch
            Web-Analytics Tools vorkommen kann, dar.
          </p>
          <p>
            Zus&auml;tzlich zur Einwilligung besteht von unserer Seite ein
            berechtigtes Interesse daran, dass Verhalten der Websitebesucher zu
            analysieren und so unser Angebot technisch und wirtschaftlich zu
            verbessern. Mit Hilfe von Google Analytics erkennen wir Fehler der
            Website, k&ouml;nnen Attacken identifizieren und die
            Wirtschaftlichkeit verbessern. Die Rechtsgrundlage daf&uuml;r
            ist&nbsp;
            <strong>Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)</strong>
            . Wir setzen Google Analytics gleichwohl nur ein, soweit Sie eine
            Einwilligung erteilt haben.
          </p>
          <p>
            Google verarbeitet Daten von Ihnen u.a. auch in den USA. Wir weisen
            darauf hin, dass nach Meinung des Europ&auml;ischen Gerichtshofs
            derzeit kein angemessenes Schutzniveau f&uuml;r den Datentransfer in
            die USA besteht. Dies kann mit verschiedenen Risiken f&uuml;r die
            Rechtm&auml;&szlig;igkeit und Sicherheit der Datenverarbeitung
            einhergehen.
          </p>
          <p>
            Als Grundlage der Datenverarbeitung bei Empf&auml;ngern mit Sitz in
            Drittstaaten (au&szlig;erhalb der Europ&auml;ischen Union, Island,
            Liechtenstein, Norwegen, also insbesondere in den USA) oder einer
            Datenweitergabe dorthin verwendet Google sogenannte
            Standardvertragsklauseln (= Art. 46. Abs. 2 und 3 DSGVO).
            Standardvertragsklauseln (Standard Contractual Clauses &ndash; SCC)
            sind von der EU-Kommission bereitgestellte Mustervorlagen und sollen
            sicherstellen, dass Ihre Daten auch dann den europ&auml;ischen
            Datenschutzstandards entsprechen, wenn diese in Drittl&auml;nder
            (wie beispielsweise in die USA) &uuml;berliefert und dort
            gespeichert werden. Durch diese Klauseln verpflichtet sich Google,
            bei der Verarbeitung Ihrer relevanten Daten, das europ&auml;ische
            Datenschutzniveau einzuhalten, selbst wenn die Daten in den USA
            gespeichert, verarbeitet und verwaltet werden. Diese Klauseln
            basieren auf einem Durchf&uuml;hrungsbeschluss der EU-Kommission.
            Sie finden den Beschluss und die entsprechenden
            Standardvertragsklauseln u.a. hier:&nbsp;
            <a href="https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de">
              https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de
            </a>
          </p>
          <p>
            Die Google Ads Datenverarbeitungsbedingungen (Google Ads Data
            Processing Terms), welche auf die Standardvertragsklauseln
            verweisen, finden Sie unter&nbsp;
            <a href="https://business.safety.google/intl/de/adsprocessorterms/">
              https://business.safety.google/intl/de/adsprocessorterms/
            </a>
            .
          </p>
          <p>
            Wir hoffen, wir konnten Ihnen die wichtigsten Informationen rund um
            die Datenverarbeitung von Google Analytics n&auml;herbringen. Wenn
            Sie mehr &uuml;ber den Tracking-Dienst erfahren wollen, empfehlen
            wir diese beiden Links:&nbsp;
            <a href="https://marketingplatform.google.com/about/analytics/terms/de/">
              https://marketingplatform.google.com/about/analytics/terms/de/
            </a>
            &nbsp;und&nbsp;
            <a href="https://support.google.com/analytics/answer/6004245?hl=de">
              https://support.google.com/analytics/answer/6004245?hl=de
            </a>
            .
          </p>
          <p>
            <strong>Auftragsverarbeitungsvertrag (AVV) Google Analytics</strong>
          </p>
          <p>
            Wir haben im Sinne des Artikels 28 der Datenschutz-Grundverordnung
            (DSGVO) mit Google einen Auftragsverarbeitungsvertrag (AVV)
            abgeschlossen. Was ein AVV genau ist und vor allem was in einem AVV
            enthalten sein muss, k&ouml;nnen Sie in unserem allgemeinen
            Abschnitt &bdquo;Auftragsverarbeitungsvertrag (AVV)&ldquo;
            nachlesen.
          </p>
          <p>
            Dieser Vertrag ist gesetzlich vorgeschrieben, weil Google in unserem
            Auftrag personenbezogene Daten verarbeitet. Darin wird gekl&auml;rt,
            dass Google Daten, die sie von uns erhalten, nur nach unserer
            Weisung verarbeiten darf und die DSGVO einhalten muss. Den Link zu
            den Auftragsdatenverarbeitungsbedingungen finden Sie unter&nbsp;
            <a href="https://business.safety.google/intl/de/adsprocessorterms/">
              https://business.safety.google/intl/de/adsprocessorterms/
            </a>
          </p>
          <p>
            <strong>
              Google Analytics Berichte zu demografischen Merkmalen und
              Interessen
            </strong>
          </p>
          <p>
            Wir haben in Google Analytics die Funktionen f&uuml;r Werbeberichte
            eingeschaltet. Die Berichte zu demografischen Merkmalen und
            Interessen enthalten Angaben zu Alter, Geschlecht und Interessen.
            Damit k&ouml;nnen wir uns &ndash; ohne diese Daten einzelnen
            Personen zuordnen zu k&ouml;nnen &ndash; ein besseres Bild von
            unseren Nutzern machen. Mehr &uuml;ber die Werbefunktionen erfahren
            Sie auf&nbsp;
            <a href="https://support.google.com/analytics/answer/3450482?hl=de_AT&amp;utm_id=ad">
              https://support.google.com/analytics/answer/3450482?hl=de_AT&amp;utm_id=ad
            </a>
            .
          </p>
          <p>
            Sie k&ouml;nnen die Nutzung der Aktivit&auml;ten und Informationen
            Ihres Google Kontos unter &ldquo;Einstellungen f&uuml;r
            Werbung&rdquo; auf&nbsp;
            <a href="https://adssettings.google.com/authenticated">
              https://adssettings.google.com/authenticated
            </a>
            &nbsp;per Checkbox beenden.
          </p>
          <p>
            <strong>Google Analytics E-Commerce-Messung</strong>
          </p>
          <p>
            Wir verwenden f&uuml;r unsere Website auch die E-Commerce-Messung
            des Webanalysetools Google Analytics. Damit k&ouml;nnen wir sehr
            genau analysieren, wie Sie und all unsere anderen Kunden auf unserer
            Website interagieren. Bei der E-Commerce-Messung geht es vor allem
            um das Kaufverhalten. Anhand gewonnener Daten k&ouml;nnen wir
            unseren Dienst an Ihre W&uuml;nsche und Ihre Erwartungen anpassen
            und optimieren. Ebenso k&ouml;nnen wir unsere
            Online-Werbema&szlig;nahmen zielgerichteter einsetzen, damit unsere
            Werbung nur Menschen sehen, die sich auch f&uuml;r unsere Produkte
            bzw. Dienstleistungen interessieren. Die E-Commerce-Messung erfasst
            zum Beispiel welche Bestellungen get&auml;tigt wurden, wie lange es
            dauerte, bis Sie das Produkt erworben haben, wie hoch der
            durchschnittliche Bestellwert ist oder auch wie hoch die
            Versandkosten sind. All diese Daten k&ouml;nnen unter einer
            bestimmten ID erfasst und gespeichert werden.
          </p>
          <p>
            <strong>Google Analytics im Einwilligungsmodus</strong>
          </p>
          <p>
            Abh&auml;ngig von Ihrer Einwilligung werden im sogenannten
            Einwilligungsmodus (bzw. &bdquo;Consent Mode&ldquo;)
            personenbezogene Daten von Ihnen durch Google Analytics verarbeitet.
            Sie k&ouml;nnen w&auml;hlen, ob Sie Google-Analytics-Cookies
            zustimmen oder nicht. Damit w&auml;hlen Sie auch, welche Daten
            Google Analytics von Ihnen verarbeitet darf. Diese erhobenen Daten
            werden haupts&auml;chlich daf&uuml;r verwendet, Messungen &uuml;ber
            das Userverhalten auf der Website durchzuf&uuml;hren, zielgerichtete
            Werbung auszuspielen und uns Web-Analyseberichte zu liefern. In der
            Regel willigen Sie der Datenverarbeitung durch Google &uuml;ber ein
            Cookie-Consent-Tool ein. Wenn Sie der Datenverarbeitung nicht
            einwilligen, werden nur aggregierte Daten erfasst und verarbeitet.
            Das bedeutet, Daten k&ouml;nnen einzelnen Usern nicht zugeordnet
            werden und es entsteht somit kein Userprofil von Ihnen. Sie
            k&ouml;nnen auch nur der statistischen Messung zustimmen. Dabei
            werden keine personenbezogenen Daten verarbeitet und folglich nicht
            f&uuml;r Werbungen oder Werbemesserfolge verwendet.
          </p>
          <p>
            <strong>Google Analytics IP-Anonymisierung</strong>
          </p>
          <p>
            Wir haben auf dieser Webseite die IP-Adressen-Anonymisierung von
            Google Analytics implementiert.&nbsp;Diese Funktion wurde von Google
            entwickelt, damit diese Webseite die geltenden
            Datenschutzbestimmungen und Empfehlungen der lokalen
            Datenschutzbeh&ouml;rden einhalten kann, wenn diese eine Speicherung
            der vollst&auml;ndigen IP-Adresse untersagen. Die Anonymisierung
            bzw. Maskierung der IP findet statt, sobald die IP-Adressen im
            Google Analytics-Datenerfassungsnetzwerk eintreffen und bevor eine
            Speicherung oder Verarbeitung der Daten stattfindet.
          </p>
          <p>
            Mehr Informationen zur IP-Anonymisierung finden Sie auf&nbsp;
            <a href="https://support.google.com/analytics/answer/2763052?hl=de">
              https://support.google.com/analytics/answer/2763052?hl=de
            </a>
            .
          </p>
          <p>
            <strong>Google Analytics ohne Cookies</strong>
          </p>
          <p>
            Wir nutzen auf unserer Website zwar Google Analytics (kurz GA),
            allerdings ohne Cookies in Ihrem Browser zu setzen. Was Cookies
            sind, haben wir bereits weiter oben erkl&auml;rt, hoffentlich sind
            die Ausf&uuml;hrungen noch im Ged&auml;chtnis. Nur kurz und konkret
            auf GA bezogen: Durch Cookies werden f&uuml;r GA hilfreiche Daten in
            Ihrem Browser auf Ihrem Ger&auml;t gespeichert. Durch den Entfall
            der Nutzung von Cookies werden gerade keine personenbezogenen Daten
            in solchen Cookies gespeichert, die ein Nutzerprofil begr&uuml;nden
            werden. Google Analytics kann zwar diverse Messungen und Webanalysen
            durchf&uuml;hren, jedoch werden die daf&uuml;r erhobenen Daten
            lediglich auf den Google-Servern gespeichert und Ihre
            Privatsph&auml;re wird deutlich st&auml;rker respektiert und
            gesch&uuml;tzt.
          </p>
          <p>
            <strong>Google Optimize Datenschutzerkl&auml;rung</strong>
          </p>
          <p>
            Wir verwenden auf unserer Website Google Optimize, ein
            Website-Optimierungstool. Dienstanbieter ist das amerikanische
            Unternehmen Google Inc. F&uuml;r den europ&auml;ischen Raum ist das
            Unternehmen Google Ireland Limited (Gordon House, Barrow Street
            Dublin 4, Irland) f&uuml;r alle Google-Dienste verantwortlich.
          </p>
          <p>
            Google verarbeitet Daten von Ihnen u.a. auch in den USA. Wir weisen
            darauf hin, dass nach Meinung des Europ&auml;ischen Gerichtshofs
            derzeit kein angemessenes Schutzniveau f&uuml;r den Datentransfer in
            die USA besteht. Dies kann mit verschiedenen Risiken f&uuml;r die
            Rechtm&auml;&szlig;igkeit und Sicherheit der Datenverarbeitung
            einhergehen.
          </p>
          <p>
            Als Grundlage der Datenverarbeitung bei Empf&auml;ngern mit Sitz in
            Drittstaaten (au&szlig;erhalb der Europ&auml;ischen Union, Island,
            Liechtenstein, Norwegen, also insbesondere in den USA) oder einer
            Datenweitergabe dorthin verwendet Google sogenannte
            Standardvertragsklauseln (= Art. 46. Abs. 2 und 3 DSGVO).
            Standardvertragsklauseln (Standard Contractual Clauses &ndash; SCC)
            sind von der EU-Kommission bereitgestellte Mustervorlagen und sollen
            sicherstellen, dass Ihre Daten auch dann den europ&auml;ischen
            Datenschutzstandards entsprechen, wenn diese in Drittl&auml;nder
            (wie beispielsweise in die USA) &uuml;berliefert und dort
            gespeichert werden. Durch diese Klauseln verpflichtet sich Google,
            bei der Verarbeitung Ihrer relevanten Daten, das europ&auml;ische
            Datenschutzniveau einzuhalten, selbst wenn die Daten in den USA
            gespeichert, verarbeitet und verwaltet werden. Diese Klauseln
            basieren auf einem Durchf&uuml;hrungsbeschluss der EU-Kommission.
            Sie finden den Beschluss und die entsprechenden
            Standardvertragsklauseln u.a. hier:&nbsp;
            <a href="https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de">
              https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de
            </a>
          </p>
          <p>
            Die Google Ads Datenverarbeitungsbedingungen (Google Ads Data
            Processing Terms), welche auf die Standardvertragsklauseln
            verweisen, finden Sie unter&nbsp;
            <a href="https://business.safety.google/intl/de/adsprocessorterms/">
              https://business.safety.google/intl/de/adsprocessorterms/
            </a>
            .
          </p>
          <p>
            Mehr &uuml;ber die Daten, die durch die Verwendung von Google
            Optimize verarbeitet werden, erfahren Sie in der Privacy Policy
            auf&nbsp;
            <a href="https://policies.google.com/privacy?hl=de">
              https://policies.google.com/privacy?hl=de
            </a>
            .
          </p>
          <p>
            <strong>E-Mail-Marketing Einleitung</strong>
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <p>
                    <strong>E-Mail-Marketing Zusammenfassung</strong>&nbsp;
                    <br /> 👥 Betroffene: Newsletter-Abonnenten
                    <br /> 🤝 Zweck: Direktwerbung per E-Mail, Benachrichtigung
                    &uuml;ber systemrelevante Ereignisse
                    <br /> 📓 Verarbeitete Daten: Eingegebene Daten bei der
                    Registrierung jedoch mindestens die E-Mail-Adresse. Mehr
                    Details dazu finden Sie beim jeweils eingesetzten
                    E-Mail-Marketing-Tool.
                    <br /> 📅 Speicherdauer: Dauer des Bestehens des Abonnements
                    <br /> ⚖️ Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO
                    (Einwilligung), Art. 6 Abs. 1 lit. f DSGVO (berechtigte
                    Interessen)
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Was ist E-Mail-Marketing?</strong>
          </p>
          <p>
            Um Sie stets auf dem Laufenden zu halten, nutzen wir auch die
            M&ouml;glichkeit des E-Mail-Marketings. Dabei werden, sofern Sie dem
            Empfang unserer E-Mails bzw. Newsletter zugestimmt haben, auch Daten
            von Ihnen verarbeitet und gespeichert. E-Mail-Marketing ist ein
            Teilbereich des Online-Marketings. Dabei werden Neuigkeiten oder
            allgemeine Informationen &uuml;ber ein Unternehmen, Produkte oder
            Dienstleistungen per E-Mail an eine bestimmte Gruppe an Menschen,
            die sich daf&uuml;r interessieren, gesendet.
          </p>
          <p>
            Wenn Sie an unserem E-Mail-Marketing (meist per Newsletter)
            teilnehmen wollen, m&uuml;ssen Sie sich im Normalfall einfach nur
            mit Ihrer E-Mail-Adresse anmelden. Daf&uuml;r f&uuml;llen Sie ein
            Online-Formular aus und senden es ab. Es kann aber auch vorkommen,
            dass wir Sie etwa um Ihre Anrede und Ihren Namen bitten, damit wir
            Sie auch pers&ouml;nlich anschreiben k&ouml;nnen.
          </p>
          <p>
            Grunds&auml;tzlich funktioniert das Anmelden zu Newslettern mit
            Hilfe des sogenannten &bdquo;Double-Opt-In-Verfahrens&ldquo;.
            Nachdem Sie sich f&uuml;r unseren Newsletter auf unserer Website
            angemeldet haben, bekommen Sie eine E-Mail, &uuml;ber die Sie die
            Newsletter-Anmeldung best&auml;tigen. So wird sichergestellt, dass
            Ihnen die E-Mail-Adresse geh&ouml;rt und sich niemand mit einer
            fremden E-Mail-Adresse angemeldet hat. Wir oder ein von uns
            verwendetes Benachrichtigungs-Tool protokolliert jede einzelne
            Anmeldung. Dies ist n&ouml;tig, damit wir den rechtlich korrekten
            Anmeldevorgang auch nachweisen k&ouml;nnen. Dabei wird in der Regel
            der Zeitpunkt der Anmeldung, der Zeitpunkt der
            Anmeldebest&auml;tigung und Ihre IP-Adresse gespeichert.
            Zus&auml;tzlich wird auch protokolliert, wenn Sie &Auml;nderungen
            Ihrer gespeicherten Daten vornehmen.
          </p>
          <p>
            <strong>Warum nutzen wir E-Mail-Marketing?</strong>
          </p>
          <p>
            Wir wollen nat&uuml;rlich mit Ihnen in Kontakt bleiben und Ihnen
            stets die wichtigsten Neuigkeiten &uuml;ber unser Unternehmen
            pr&auml;sentieren. Daf&uuml;r nutzen wir unter anderem
            E-Mail-Marketing &ndash; oft auch nur &ldquo;Newsletter&rdquo;
            bezeichnet &ndash; als wesentlichen Bestandteil unseres
            Online-Marketings. Sofern Sie sich damit einverstanden erkl&auml;ren
            oder es gesetzlich erlaubt ist, schicken wir Ihnen Newsletter,
            System-E-Mails oder andere Benachrichtigungen per E-Mail. Wenn wir
            im folgenden Text den Begriff &bdquo;Newsletter&ldquo; verwenden,
            meinen wir damit haupts&auml;chlich regelm&auml;&szlig;ig versandte
            E-Mails. Nat&uuml;rlich wollen wir Sie mit unseren Newsletter in
            keiner Weise bel&auml;stigen. Darum sind wir wirklich stets
            bem&uuml;ht, nur relevante und interessante Inhalte zu bieten. So
            erfahren Sie etwa mehr &uuml;ber unser Unternehmen, unsere
            Leistungen oder Produkte. Da wir unsere Angebote auch immer
            verbessern, erfahren Sie &uuml;ber unseren Newsletter auch immer,
            wenn es Neuigkeiten gibt oder wir gerade spezielle, lukrative
            Aktionen anbieten. Sofern wir einen Dienstleister, der ein
            professionelles Versand-Tool anbietet, f&uuml;r unser
            E-Mail-Marketing beauftragen, machen wir das, um Ihnen schnelle und
            sichere Newsletter bieten zu k&ouml;nnen. Zweck unseres
            E-Mail-Marketings ist grunds&auml;tzlich, Sie &uuml;ber neue
            Angebote zu informieren und auch unseren unternehmerischen Zielen
            n&auml;her zu kommen.
          </p>
          <p>
            <strong>Welche Daten werden verarbeitet?</strong>
          </p>
          <p>
            Wenn Sie &uuml;ber unsere Website Abonnent unseres Newsletters
            werden, best&auml;tigen Sie per E-Mail die Mitgliedschaft in einer
            E-Mail-Liste. Neben IP-Adresse und E-Mail-Adresse k&ouml;nnen auch
            Ihre Anrede, Ihr Name, Ihre Adresse und Ihre Telefonnummer
            gespeichert werden. Allerdings nur, wenn Sie dieser
            Datenspeicherungen zustimmen. Die als solche markierten Daten sind
            notwendig, damit Sie an dem angebotenen Dienst teilnehmen
            k&ouml;nnen. Die Angabe ist freiwillig, die Nichtangabe f&uuml;hrt
            jedoch dazu, dass Sie den Dienst nicht nutzen k&ouml;nnen.
            Zus&auml;tzlich k&ouml;nnen etwa auch Informationen zu Ihrem
            Ger&auml;t oder zu Ihren bevorzugten Inhalten auf unserer Website
            gespeichert werden. Mehr zur Speicherung von Daten, wenn Sie eine
            Website besuchen, finden Sie im Abschnitt &ldquo;Automatische
            Datenspeicherung&rdquo;. Ihre Einwilligungserkl&auml;rung zeichnen
            wir auf, damit wir stets nachweisen k&ouml;nnen, dass dieser unseren
            Gesetzen entspricht.
          </p>
          <p>
            <strong>Dauer der Datenverarbeitung</strong>
          </p>
          <p>
            Wenn Sie Ihre E-Mail-Adresse aus unserem E-Mail/Newsletter-Verteiler
            austragen, d&uuml;rfen wir Ihre Adresse bis zu drei Jahren auf
            Grundlage unserer berechtigten Interessen speichern, damit wir Ihre
            damalige Einwilligung noch nachweisen k&ouml;nnen. Verarbeiten
            d&uuml;rfen wir diese Daten nur, wenn wir uns gegen etwaige
            Anspr&uuml;che wehren m&uuml;ssen.
          </p>
          <p>
            Wenn Sie allerdings best&auml;tigen, dass Sie uns die Einwilligung
            zur Newsletter-Anmeldung gegeben haben, k&ouml;nnen Sie jederzeit
            einen individuellen L&ouml;schantrag stellen. Widersprechen Sie der
            Einwilligung dauerhaft, behalten wir uns das Recht vor, Ihre
            E-Mail-Adresse in einer Sperrliste zu speichern. Solange Sie
            freiwillig unseren Newsletter abonniert haben, solange behalten wir
            selbstverst&auml;ndlich auch Ihre E-Mail-Adresse.
          </p>
          <p>
            <strong>Widerspruchsrecht</strong>
          </p>
          <p>
            Sie haben jederzeit die M&ouml;glichkeit Ihre Newsletter-Anmeldung
            zu k&uuml;ndigen. Daf&uuml;r m&uuml;ssen Sie lediglich Ihre
            Einwilligung zur Newsletter-Anmeldung widerrufen. Das dauert im
            Normalfall nur wenige Sekunden bzw. einen oder zwei Klicks. Meistens
            finden Sie direkt am Ende jeder E-Mail einen Link, um das
            Newsletter-Abonnement zu k&uuml;ndigen. Wenn der Link im Newsletter
            wirklich nicht zu finden ist, kontaktieren Sie uns bitte per Mail
            und wir werden Ihr Newsletter-Abo unverz&uuml;glich k&uuml;ndigen.
          </p>
          <p>
            <strong>Rechtsgrundlage</strong>
          </p>
          <p>
            Das Versenden unseres Newsletters erfolgt auf Grundlage Ihrer&nbsp;
            <strong>Einwilligung</strong>&nbsp;(Artikel 6 Abs. 1 lit. a DSGVO).
            Das hei&szlig;t, wir d&uuml;rfen Ihnen nur dann einen Newsletter
            schicken, wenn Sie sich zuvor aktiv daf&uuml;r angemeldet haben.
            Gegebenenfalls k&ouml;nnen wir Ihnen auch Werbenachrichten auf
            Grundlage des &sect; 7 Abs. 3 UWG senden, sofern Sie unser Kunde
            geworden sind und der Verwendung ihrer E-Mailadresse f&uuml;r
            Direktwerbung nicht widersprochen haben.
          </p>
          <p>
            Informationen zu speziellen E-Mail-Marketing Diensten und wie diese
            personenbezogene Daten verarbeiten, erfahren Sie &ndash; sofern
            vorhanden &ndash; in den folgenden Abschnitten.
          </p>
          <p>
            <strong>Social Media Einleitung</strong>
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <p>
                    <strong>
                      Social Media Datenschutzerkl&auml;rung Zusammenfassung
                    </strong>
                    &nbsp;
                    <br /> 👥 Betroffene: Besucher der Website
                    <br /> 🤝 Zweck: Darstellung und Optimierung unserer
                    Serviceleistung, Kontakt zu Besuchern, Interessenten u.a.,
                    Werbung
                    <br /> 📓 Verarbeitete Daten: Daten wie etwa Telefonnummern,
                    E-Mail-Adressen, Kontaktdaten, Daten zum Nutzerverhalten,
                    Informationen zu Ihrem Ger&auml;t und Ihre IP-Adresse.
                    <br /> Mehr Details dazu finden Sie beim jeweils
                    eingesetzten Social-Media-Tool.
                    <br /> 📅 Speicherdauer: abh&auml;ngig von den verwendeten
                    Social-Media-Plattformen
                    <br /> ⚖️ Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO
                    (Einwilligung), Art. 6 Abs. 1 lit. f DSGVO (Berechtigte
                    Interessen)
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Was ist Social Media?</strong>
          </p>
          <p>
            Zus&auml;tzlich zu unserer Website sind wir auch in diversen
            Social-Media-Plattformen aktiv. Dabei k&ouml;nnen Daten von Usern
            verarbeitet werden, damit wir gezielt User, die sich f&uuml;r uns
            interessieren, &uuml;ber die sozialen Netzwerke ansprechen
            k&ouml;nnen. Dar&uuml;ber hinaus k&ouml;nnen auch Elemente einer
            Social-Media-Plattform direkt in unsere Website eingebettet sein.
            Das ist etwa der Fall, wenn Sie einen sogenannten Social-Button auf
            unserer Website anklicken und direkt zu unserem
            Social-Media-Auftritt weitergeleitet werden. Als sogenannte Sozialen
            Medien oder Social Media werden Websites und Apps bezeichnet,
            &uuml;ber die angemeldete Mitglieder Inhalte produzieren, Inhalte
            offen oder in bestimmten Gruppen austauschen und sich mit anderen
            Mitgliedern vernetzen k&ouml;nnen.
          </p>
          <p>
            <strong>Warum nutzen wir Social Media?</strong>
          </p>
          <p>
            Seit Jahren sind Social-Media-Plattformen der Ort, wo Menschen
            online kommunizieren und in Kontakt treten. Mit unseren
            Social-Media-Auftritten k&ouml;nnen wir unsere Produkte und
            Dienstleistungen Interessenten n&auml;herbringen. Die auf unserer
            Website eingebundenen Social-Media-Elemente helfen Ihnen, schnell
            und ohne Komplikationen zu unseren Social-Media-Inhalten wechseln
            k&ouml;nnen.
          </p>
          <p>
            Die Daten, die durch Ihre Nutzung eines Social-Media-Kanals
            gespeichert und verarbeitet werden, haben in erster Linie den Zweck,
            Webanalysen durchf&uuml;hren zu k&ouml;nnen. Ziel dieser Analysen
            ist es, genauere und personenbezogene Marketing- und Werbestrategien
            entwickeln zu k&ouml;nnen. Abh&auml;ngig von Ihrem Verhalten auf
            einer Social-Media-Plattform, k&ouml;nnen mit Hilfe der
            ausgewerteten Daten, passende R&uuml;ckschl&uuml;sse auf Ihre
            Interessen getroffen werden und sogenannte Userprofile erstellt
            werden. So ist es den Plattformen auch m&ouml;glich, Ihnen
            ma&szlig;geschneiderte Werbeanzeigen zu pr&auml;sentieren. Meistens
            werden f&uuml;r diesen Zweck Cookies in Ihrem Browser gesetzt, die
            Daten zu Ihrem Nutzungsverhalten speichern.
          </p>
          <p>
            Wir gehen in der Regel davon aus, dass wir datenschutzrechtlich
            verantwortlich bleiben, auch wenn wir Dienste einer
            Social-Media-Plattform nutzen. Der Europ&auml;ische Gerichtshof hat
            jedoch entschieden, dass in bestimmten F&auml;llen der Betreiber der
            Social-Media-Plattform zusammen mit uns gemeinsam verantwortlich im
            Sinne des Art. 26 DSGVO sein kann. Soweit dies der Fall ist, weisen
            wir gesondert darauf hin und arbeiten auf Grundlage einer
            diesbez&uuml;glichen Vereinbarung. Das Wesentliche der Vereinbarung
            ist dann weiter unten bei der betroffenen Plattform wiedergegeben.
          </p>
          <p>
            Bitte beachten Sie, dass bei der Nutzung der
            Social-Media-Plattformen oder unserer eingebauten Elemente auch
            Daten von Ihnen au&szlig;erhalb der Europ&auml;ischen Union
            verarbeitet werden k&ouml;nnen, da viele Social-Media-Kan&auml;le,
            beispielsweise Facebook oder Twitter, amerikanische Unternehmen
            sind. Dadurch k&ouml;nnen Sie m&ouml;glicherweise Ihre Rechte in
            Bezug auf Ihre personenbezogenen Daten nicht mehr so leicht
            einfordern bzw. durchsetzen.
          </p>
          <p>
            <strong>Welche Daten werden verarbeitet?</strong>
          </p>
          <p>
            Welche Daten genau gespeichert und verarbeitet werden, h&auml;ngt
            vom jeweiligen Anbieter der Social-Media-Plattform ab. Aber f&uuml;r
            gew&ouml;hnlich handelt es sich um Daten wie etwa Telefonnummern,
            E-Mailadressen, Daten, die Sie in ein Kontaktformular eingeben,
            Nutzerdaten wie zum Beispiel welche Buttons Sie klicken, wen Sie
            liken oder wem folgen, wann Sie welche Seiten besucht haben,
            Informationen zu Ihrem Ger&auml;t und Ihre IP-Adresse. Die meisten
            dieser Daten werden in Cookies gespeichert. Speziell wenn Sie selbst
            ein Profil bei dem besuchten Social-Media-Kanal haben und angemeldet
            sind, k&ouml;nnen Daten mit Ihrem Profil verkn&uuml;pft werden.
          </p>
          <p>
            Alle Daten, die &uuml;ber eine Social-Media-Plattform erhoben
            werden, werden auch auf den Servern der Anbieter gespeichert. Somit
            haben auch nur die Anbieter Zugang zu den Daten und k&ouml;nnen
            Ihnen die passenden Ausk&uuml;nfte geben bzw. &Auml;nderungen
            vornehmen.
          </p>
          <p>
            Wenn Sie genau wissen wollen, welche Daten bei den
            Social-Media-Anbietern gespeichert und verarbeitet werden und wie
            sie der Datenverarbeitung widersprechen k&ouml;nnen, sollten Sie die
            jeweilige Datenschutzerkl&auml;rung des Unternehmens sorgf&auml;ltig
            durchlesen. Auch wenn Sie zur Datenspeicherung und Datenverarbeitung
            Fragen haben oder entsprechende Rechte geltend machen wollen,
            empfehlen wir Ihnen, sich direkt an den Anbieter wenden.
          </p>
          <p>
            <strong>Dauer der Datenverarbeitung</strong>
          </p>
          <p>
            &Uuml;ber die Dauer der Datenverarbeitung informieren wir Sie weiter
            unten, sofern wir weitere Informationen dazu haben. Beispielsweise
            speichert die Social-Media-Plattform Facebook Daten, bis sie
            f&uuml;r den eigenen Zweck nicht mehr ben&ouml;tigt werden.
            Kundendaten, die mit den eigenen Userdaten abgeglichen werden,
            werden aber schon innerhalb von zwei Tagen gel&ouml;scht. Generell
            verarbeiten wir personenbezogene Daten nur so lange wie es f&uuml;r
            die Bereitstellung unserer Dienstleistungen und Produkte unbedingt
            notwendig ist. Wenn es, wie zum Beispiel im Fall von Buchhaltung,
            gesetzlich vorgeschrieben ist, kann diese Speicherdauer auch
            &uuml;berschritten werden.
          </p>
          <p>
            <strong>Widerspruchsrecht</strong>
          </p>
          <p>
            Sie haben auch jederzeit das Recht und die M&ouml;glichkeit Ihre
            Einwilligung zur Verwendung von Cookies bzw. Drittanbietern wie
            eingebettete Social-Media-Elemente zu widerrufen. Das funktioniert
            entweder &uuml;ber unser Cookie-Management-Tool oder &uuml;ber
            andere Opt-Out-Funktionen. Zum Bespiel k&ouml;nnen Sie auch die
            Datenerfassung durch Cookies verhindern, indem Sie in Ihrem Browser
            die Cookies verwalten, deaktivieren oder l&ouml;schen.
          </p>
          <p>
            Da bei Social-Media-Tools Cookies zum Einsatz kommen k&ouml;nnen,
            empfehlen wir Ihnen auch unsere allgemeine Datenschutzerkl&auml;rung
            &uuml;ber Cookies. Um zu erfahren, welche Daten von Ihnen genau
            gespeichert und verarbeitet werden, sollten Sie die
            Datenschutzerkl&auml;rungen der jeweiligen Tools durchlesen.
          </p>
          <p>
            <strong>Rechtsgrundlage</strong>
          </p>
          <p>
            Wenn Sie eingewilligt haben, dass Daten von Ihnen durch eingebundene
            Social-Media-Elemente verarbeitet und gespeichert werden
            k&ouml;nnen, gilt diese Einwilligung als Rechtsgrundlage der
            Datenverarbeitung&nbsp;<strong>(Art. 6 Abs. 1 lit. a DSGVO)</strong>
            . Grunds&auml;tzlich werden Ihre Daten bei Vorliegen einer
            Einwilligung auch auf Grundlage unseres berechtigten
            Interesses&nbsp;<strong>(Art. 6 Abs. 1 lit. f DSGVO)</strong>
            &nbsp;an einer schnellen und guten Kommunikation mit Ihnen oder
            anderen Kunden und Gesch&auml;ftspartnern gespeichert und
            verarbeitet. Wir setzen die Tools gleichwohl nur ein, soweit Sie
            eine Einwilligung erteilt haben. Die meisten
            Social-Media-Plattformen setzen auch Cookies in Ihrem Browser, um
            Daten zu speichern. Darum empfehlen wir Ihnen, unseren
            Datenschutztext &uuml;ber Cookies genau durchzulesen und die
            Datenschutzerkl&auml;rung oder die Cookie-Richtlinien des jeweiligen
            Dienstanbieters anzusehen.
          </p>
          <p>
            Informationen zu speziellen Social-Media-Plattformen erfahren Sie
            &ndash; sofern vorhanden &ndash; in den folgenden Abschnitten.
          </p>
          <p>
            <strong>&Auml;nderungen dieser Datenschutzerkl&auml;rung</strong>
          </p>
          <p>
            Diese Datenschutzerkl&auml;rung kann jederzeit aktualisiert oder
            anderweitig ge&auml;ndert werden. &Uuml;ber s&auml;mtliche
            &Auml;nderungen unserer Datenschutzerkl&auml;rung werden Sie durch
            Ver&ouml;ffentlichung der ge&auml;nderten Fassung auf der Website in
            Kenntnis gesetzt.
          </p>
          <p>
            Diese Version wurde zuletzt am unten angegebenen Datum
            ge&auml;ndert. &Auml;ltere Versionen k&ouml;nnen bei uns angefordert
            werden.
          </p>
          <p>Zuletzt ge&auml;ndert am: 23.10.2022</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
