import { getTranslations } from "next-intl/server";

export const generateMetadata = async () => {
  const t = await getTranslations();
  return {
    title: t("Footer.privacy_policy"),
  };
};

const PrivacyPage = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8">
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
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
            <h2 className="text-xl font-semibold text-black">Data Protection Policy (As of: March 2023)</h2>

            <p className="leading-relaxed">
              Woizzer AG, Osakallee 2, 20457 Hamburg/Germany (&quot;Woizzer&quot;, &quot;we&quot;) provides its clients (&quot;Users&quot;,
              &quot;Clients&quot;) with the URL www.quinbook.com (the &quot;Website&quot;) under the QuinBook brand a web-based
              administration and booking solution for activity and leisure providers (hereafter &quot;QuinBook&quot;) available online. The
              following data protection policy governs the use of the website. In principle, use of the website is possible without
              providing any personal data. However, if an affected person wishes to use our company&apos;s special services through our
              website, personal data processing may be required. If the processing of personal data is required and there is no legal basis
              for such processing, we generally obtain the consent of the concerned person.
            </p>

            <p className="leading-relaxed">
              This data protection policy explains the nature, scope and purpose of the processing of your personal data (hereinafter
              referred to as &quot;data&quot;) by us and your rights.
            </p>

            <p className="leading-relaxed">in this regard:</p>

            <div className="space-y-10">
              <section className="space-y-4">
                <h3 className="text-lg font-semibold text-black">1. Who is responsible for data processing and to whom I can refer to</h3>
                <p>Responsible according to the General Data Protection Regulation (GDPR) is:</p>
                <p>
                  Woizzer AG, Mr. Heiko Fuchs, Singapurstrasse 5, 20457 Hamburg/Germany, Tel.: +49 (0)40 2288-232, E-Mail:
                  support@quinbook.com, Website: https://quinbook.com/
                </p>
                <p>
                  If you wish to object to the collection, processing or use of your data in its entirety or to individual measures in
                  accordance with the provisions of data protection law, you should address your objection to the above-mentioned address or
                  by e-mail to the above-mentioned e-mail address.
                </p>
              </section>
              <section className="space-y-4">
                <h3 className="text-lg font-semibold text-black">2. On which legal basis we process your data</h3>
                <p>
                  In the following, we will inform you of the legal basis of our data processing in accordance with art. 13 GDPR. If the
                  legal basis is not expressly stated in this privacy statement, the following applies: If you have given your consent to
                  the processing of your personal data, the legal basis is art. 6 para. 1 lit. a and art. 7 GDPR. If the processing is
                  performed to fulfil our services and implementation of contractual measures as well as answering inquiries, the legal
                  basis is art. 6 para. 1 lit. b GDPR. If processing takes place to fulfil our legal obligations, the legal basis is art. 6
                  para.
                </p>
                <p>
                  1 lit. c GDPR and if processing takes place to safeguard our legitimate interests, the legal basis is art. 6 para. 1 lit.
                  f GDPR. If processing of personal data is required to protect vital interests of the data subject or another natural
                  person, art. 6 para. 1 lit. d GDPR is the legal basis.
                </p>
                <p>
                  If processing takes place on the basis of your consent, you can withdraw it at any time with effect for the future. You
                  can send your cancellation by post to the above address or by e-mail to the above e-mail address.
                </p>
                <p>
                  If in the course of our processing we disclose data to other persons and companies (contract processors or third parties),
                  transmit data to them or otherwise grant access to the data, this is done exclusively on the basis of a statutory license
                  (For example, if a transmission of the data to third parties, such as to payment service providers, acc. art. 6 para. 1
                  lit. b GDPR is required to fulfil the contract). It also applies if you have consented to, or there is a legal obligation
                  to do so, or it is based on our legitimate interests (for example, in the use of agents, web hosts, etc. acc. art 6 para.
                  1 lit. C GDPR applies).
                </p>
                <p>
                  In the event that we entrust third parties with the processing of data, this is done on the basis of art. 28 GDPR.
                  (So-called. “Order processing”).
                </p>
              </section>
              <section className="space-y-4">
                <h3 className="text-lg font-semibold text-black">3. What data is processed Registration</h3>
                <p>Clients can register on the website www.quinbook.com. The data entered over the</p>
                <p>
                  course of this registration, which can be seen during entry via the registration form, include your name, address, company
                  telephone number and e-mail address. The data is collected and stored exclusively for the use of our offer. The processing
                  of the data is based on art. 6 para. 1 lit. a GDPR as legal basis. By registering on our site, we will also store your IP
                  address and the date and time of your registration. This is used as a safeguard on our part in the event that a third
                  party misuses your data and registers with this data without your knowledge on our page. There is no transfer of
                  information to a third party. A comparison of the data collected with data which may be collected by other components of
                  our site, is also not performed.
                </p>
                <h4 className="font-semibold pt-4">Cookies</h4>
                <p>
                  We use cookies on our website. This is done in order to assign inquiries and require- ments of the prospective client.
                  Cookies are small text files that are stored on your
                </p>
                <p>computer system. By using cookies, we are able to measure the frequency of page</p>
                <p>
                  views and general navigation. We point out that some of these cookies are trans- ferred from our server to your computer
                  system, i.e. so-called “session cookies”.
                </p>
                <p>
                  “Session cookies” are automatically deleted from your hard disk after the end of the browser session. Other cookies remain
                  on your computer system and allow us to re- cognise your computer system during your next visit (so-called permanent
                  cookies). If your browser allows, you can reject cookies at any time. Please note that certain functions of this website
                  may not be used or can only be used to a limited extent if your browser is set in such a way that no cookies (from our
                  website) are accepted.
                </p>
                <h4 className="font-semibold pt-4">Hosting</h4>
                <p>
                  The hosting services we use serve to provide the following services: Infrastructure and platform services, computing
                  capacity, disk space and database services, colla- teral and technical maintenance services we use to operate this online
                  offer. For this purpose, we or our hosting provider process your data on the basis of our legitimate interests in an
                  efficient and secure provision of this online offer acc. art. 6 para. 1 lit. f GDPR IAW 28 GDPR (conclusion of agreement
                  processing contract).
                </p>
                <h4 className="font-semibold pt-4">Collection of access data and log files</h4>
                <p>
                  We or our hosting provider, collect on the basis of our legitimate interests according to art. 6 para. 1 lit. f. GDPR data
                  on every access to the server on which this service is located (so-called server log files). The access data includes the
                  date and time of the request, the name of the requested web page, the amount of data transmitted, the message about
                  successful retrieval, the browser type and version, the user‘s ope- rating system, the previously visited page (so-called
                  “Referrer URL”), the IP address and the requesting provider. Logfile information is stored for a maximum of 7 days and
                  then deleted. Data whose further retention is required for evidential purposes shall be exempted from the cancellation
                  until final clarification of the procedure.
                </p>
                <h4 className="font-semibold pt-4">Making contact</h4>
                <p>
                  When contacting us (for example via contact form, e-mail, telephone or via social media), the information provided by the
                  user for processing the contact request is carried out acc. art. 6 para. 1 lit. b GDPR. The deletion of the data takes
                  place after the completed processing of your request.
                </p>
                <h4 className="font-semibold pt-4">Newsletter</h4>
                <p>
                  The registered user‘s e-mail address can also be used to send an e-mail newsletter at regular intervals, containing
                  editorial information. If you consent to the receipt of our newsletter via our website, we will collect and use your name
                  and e-mail address as well as other voluntarily provided data for sending a newsletter. The consent is revocable at any
                  time.
                </p>
                <p>
                  You can unsubscribe from the newsletter at any time via the link provided in the newsletter. The aforementioned data is
                  collected, processed and used exclusively for sending the newsletter. The data shared with us for the purpose of the news-
                  letter will be stored by us until the time of your cancellation from the newsletter and deleted after the cancellation of
                  the newsletter. This data processing is based on art. 6 para. 1 lit. a GDPR in connection with the consent given by you.
                </p>
                <p>
                  Registration for our newsletter takes place in a so-called double opt-in procedure. Meaning, after registration you will
                  receive an e-mail asking you to confirm your registration. This confirmation is necessary so that nobody can register with
                  exter- nal e-mail addresses. The registration for the newsletter will be logged in order to prove the registration process
                  according to the legal requirements. This includes the storage of the login and the confirmation time, as well as the IP
                  address. Likewise, changes to your data stored with the dispatching service provider will be logged.
                </p>
                <p>
                  The logging of the registration process is based on our legitimate interests in acc. art. 6 para. 1 lit. f GDPR. Our
                  interest is focused on the use of a user-friendly and secure newsletter system, which serves our business interests as
                  well as the users‘ expectations and allows us to prove consent.
                </p>
              </section>
              <section className="space-y-4">
                <h3 className="text-lg font-semibold text-black">4. How safe is my data</h3>
                <p>
                  All data that you provide to us is encrypted and transmitted for security reasons using the SSL (Secure Socket Layer)
                  method. SSL is a trusted and global encryption system that automatically encrypts your data before sending it to us. You
                  can re- cognise an encrypted connection by changing the address line of the browser from “http: //” to “https: //” and the
                  lock symbol in your browser line.
                </p>
              </section>
              <section className="space-y-4">
                <h3 className="text-lg font-semibold text-black">5. What rights do I have as an affected person?</h3>
                <p>You can always</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Get information about the data stored or processed by us</li>
                  <li>Request rectifications or deletion of your data</li>
                  <li>Require restriction in the processing of your data</li>
                  <li>Object to the processing of your data</li>
                  <li>Demand the transferability of your data</li>
                  <li>
                    Submit a complaint to the data protection supervisory authority. Your competent supervisory authority is that of your
                    place of residence.
                  </li>
                </ul>
              </section>
              <section className="space-y-4">
                <h3 className="text-lg font-semibold text-black">6. How long will my data be stored</h3>
                <p>
                  The data processed by us is deleted or limited in its processing in accordance with art. 17 and 18 GDPR. As soon as the
                  data is no longer required for its intended use and the deletion does not conflict with any statutory storage
                  requirements, the data stored with us will be deleted. If the data is not deleted because it is required for other and
                  legitimate purposes, its processing will be restricted. Meaning, the data
                </p>
                <p>
                  is blocked and not processed for other purposes. This applies, for example, to data that must be kept for commercial or
                  tax reasons. According to legal requirements in Germany, the storage takes place in particular for 6 years according to
                  art. 257 para. 1 HGB (German Commercial Code) as well as for 10 years according to art. 147 para. 1 AO (German Fiscal
                  Code).
                </p>
              </section>
              <section className="space-y-4">
                <h3 className="text-lg font-semibold text-black">7. What services and content of third parties are involved</h3>
                <p>
                  Within our online offer based on our legitimate interests, (i.e. interest in the analysis, optimisation and economic
                  operation of our online offer as defined in art. 6 para. 1 lit. f. GDPR) we draw on content or services offered by third
                  parties, to include videos or fonts (collectively referred to as “content”). This always presupposes that the third-party
                  providers of this content perceive the IP address of the users, or else not be able to send the content to your browser
                  without the IP address. The IP address is therefore required for the presentation of this content. To prevent the transfer
                </p>
                <p>
                  of data to Google, it is possible to deactivate the respective service. To do this, you must disable the Java Script
                  feature in your browser.
                </p>
                <h4 className="font-semibold pt-4">Use of reCAPTCHA</h4>
                <p>To protect entry forms on our site, we use the service “reCAPTCHA” from Google</p>
                <p>Inc., 1600 Amphitheater Parkway, Mountain View, CA 94043 USA, hereafter “Googl e.”</p>
                <p>
                  By using this service, it can be distinguished whether the corresponding input is of human origin or abused by automated
                  machine processing.
                </p>
                <p>
                  As far as we are aware, the referrer URL, the IP address, the behaviour of the websi te visitors, information about the
                  operating system, browser and duration, cookies, presentation instructions and scripts, the input behaviour of the user as
                  well as mouse movements in the area of the “reCAPTCHA” checkbox will be transferred to “Google”.
                </p>
                <p>
                  Among other things, Google uses this information to digitalize books and other prin- ted matter, as well as to optimise
                  services such as Google Street View and Google Maps (e.g. house number and street name recognition).
                </p>
                <p>The scope of “reCAPTCHA” IP addresses will not be merged with other Google data</p>
                <p>
                  unless you are logged in to your Google account at the time of use of the “reCAPT-CH A” plug-ins. If you want to prevent
                  this transmission and storage of data about
                </p>
                <p>
                  you and your behaviour on our website by “Google”, you must log out of “Google” before you visit our site or use the
                  reCAPTCHA plug-in.
                </p>
                <p>The use of the “reCAPTCHA” service obtained information is in accordance with th e Google terms of use:</p>
                <p>
                  <a
                    href="https://www.google.com/policies/privacy/"
                    target="_blank"
                    className="text-black hover:underline hover:text-blue-600"
                  >
                    https://www.google.com/policies/privacy/
                  </a>
                </p>
                <h4 className="font-semibold pt-4">CleverReach</h4>
                <p>
                  The QuinBook newsletter is sent via “CleverReach”, a newsletter shipping platform of the provider CleverReach GmbH & Co.
                  KG, Schafjückenweg 2, 26180 Rastede, Germany. The e-mail addresses of our Newsletter recipients, as well as other infor-
                  mation described in these notes, are stored on secure data centers in the European Region. CleverReach uses this
                  information to send and evaluate the newsletters on our behalf. Furthermore, CleverReach may, according to its own
                  information, use this data to optimise or improve its own services, e.g. for the technical optimisation of the dispatch
                  and the presentation of the newsletter or for economic purposes to determine from which countries the recipients come.
                  However, CleverReach does not use the data of our newsletter recipients to write them or to pass them on to third parties.
                </p>
                <p>For more information on data protection at CleverReach, please visit:</p>
                <p>
                  <a
                    href="https://www.cleverreach.com/en-de/privacy-policy/"
                    target="_blank"
                    className="text-black hover:underline hover:text-blue-600"
                  >
                    https://www.cleverreach.com/en-de/privacy-policy/
                  </a>
                </p>
                <h4 className="font-semibold pt-4">Links</h4>
                <p>
                  Our website contains links to websites of other providers, to which this privacy policy does not extend. After clicking on
                  the integrated graphic, you will be redirected to the page of the respective provider, i.e. only then will user
                  information be transmitted to the respective provider. For information on the handling of your personal data when using
                  this website, please refer to the respective data protection policy of the provider. If the collection, processing or use
                  of personal data is connected with the use of the websites of other providers, please note the data protection policy of
                  the respective provider.
                </p>
                <h4 className="font-semibold pt-4">Limited Use disclosure</h4>
                <p>
                  QuinBook use of information received from Google APIs will adhere to the Google API Services User Data Policy ({" "}
                  <a
                    href="https://developers.google.com/terms/api-services-user-data-policy"
                    target="_blank"
                    className="text-black hover:underline hover:text-blue-600"
                  >
                    https://developers.google.com/terms/api-services-user-data-policy
                  </a>
                  ), including the Limited Use requirements (
                  <a
                    href="https://developers.google.com/terms/api-services-user-data-                  policy#additional_requirements_for_specific_api_scopes"
                    target="_blank"
                    className="text-black hover:underline hover:text-blue-600"
                  >
                    https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes
                  </a>
                  ).
                </p>
              </section>
            </div>
          </div>

          <footer className="pt-8 mt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} QuinBook. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
