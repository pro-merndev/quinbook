import { getTranslations } from "next-intl/server";

export const generateMetadata = async () => {
  const t = await getTranslations();
  return {
    title: t("Footer.imprint"),
  };
};

const ImprintPage = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8">
          <h1 className="text-5xl font-bold mb-4">Imprint of WOIZZER AG for QuinBook</h1>
          <div>
            <p>
              <a
                href="https://cdn.quinbook.com/privacy_20230402_en.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Our data protection compliance to download
              </a>
            </p>
            <p>
              <a
                href="https://quinbook.com/meta/quinbook_com-SaaS-AGB_TW2017-04-21.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Our Terms and Conditions to download
              </a>
            </p>
          </div>
          <div className="bg-grey-dark h-[1px] w-full"></div>

          <div className="space-y-6 text-grey-darker">
            <div>
              <h4 className="font-bold text-black text-lg">Address:</h4>
              <p>WOIZZER AG</p>
              <p>QuinBook</p>
              <p>Osakaallee 2</p>
              <p>20457 Hamburg</p>
              <p>Germany</p>
              <p>+49 (0)40 22883-0</p>
            </div>
            <div>
              <p>Directors: Heiko Fuchs, Albert Hollenbach </p>
              <p>Supervisory Board: Axel Strehlitz (Chair) </p>
              <p>VAT-ID: DE 270102974 </p>
              <p>Registered with: Handelsregister Hamburg HRB 113063 </p>
            </div>
            <h4 className="font-bold text-black text-lg">Liability Disclosure: (German)</h4>
            <div className="space-y-4">
              <h4 className="font-bold text-black text-lg">Haftungsausschluss</h4>
              <p>
                Haftung für Inhalte Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
                und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für
                eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach § 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
                Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
                erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
              </p>
              <p>
                Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen. Haftung für Links Unser
                Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
                Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
                inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
              </p>
              <p>
                Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen. Urheberrecht Die durch die
                Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
                Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht
                kommerziellen Gebrauch gestattet.
              </p>
              <p>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.
                Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung
                aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
                Inhalte umgehend entfernen.
              </p>
            </div>
            <div className="bg-grey-dark h-[1px] w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImprintPage;
