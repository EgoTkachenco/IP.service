import { contact_email } from '@/constants/constants'

const privacy = [
  {
    title: 'Introduction',
    content: () => (
      <>
        <p>
          The Privacy Policy governs the processing of Personal Data by Spyskey.
        </p>
        <br />
        <p>
          The provisions of this Privacy Policy describe how Spyskey processes,
          stores, and receives Personal Data.
        </p>
        <br />
        <p>
          Spyskey, when providing Services to the Client, may use the User's
          Personal Data, which is in the public domain or legally obtained.
        </p>
        <br />
        <p>
          Spyskey's services are intended for residents of different countries,
          so the laws of different countries are used in the Privacy Policy.
        </p>
        <br />
        <p>
          Spyskey, while providing Services to the Client, may use its database
          of IP addresses or obtain data about the User using his IP address.
        </p>
        <br />
        <p>
          We provide Services, the content of which is the use of an IP address
          that can be attributed to Personal Data and obtaining data about the
          User by using his IP address, so we advise you to carefully
          familiarize yourself with this Privacy Policy.
        </p>
        <br />
        <p>
          The privacy policy defines the Third parties to whom your Personal
          Data may be provided during the provision of the Services, and also
          defines the methods and rules for obtaining Personal and statistical
          data about your User.
        </p>
        <br />
        <p>
          Reference to the words "we", "our" or "us" (or equivalent terms) means
          Spyskey.
        </p>
        <br />
        <p>
          Reference to the words “you” or “your” (or similar words) means the
          Client receiving the Services.
        </p>
        <br />
        <p>
          The words he/she and their derivatives in the text of the document can
          be applied to either a male person or a female person, depending on
          the context of the document.
        </p>
        <br />
        <p>We are grateful to you for using Spyskey's services.</p>
      </>
    ),
  },
  {
    title: 'Definitions',
    content: () => (
      <ol>
        <li>
          <ol>
            <li>
              <b>Account</b> - is a functional part of the Site, with the help
              of which the Client gains access to the Services and can manage
              additional features of the Site.
            </li>
            <li>
              <b>Client</b> - is an individual or legal entity that receives
              Services from the Company to obtain data about its User using an
              IP address.
            </li>
            <li>
              <b>User</b> - any legal entity or natural person, whose data the
              Client receives when visiting the Client's website, by using the
              IP address of the User.
            </li>
            <li>
              <b>Controller</b> - means any natural or legal person, government
              agency, institution, or other body that independently determines
              the purposes and means of personal data processing.
            </li>
            <li>
              <b>Processor</b> - is a natural or legal person, government
              agency, institution, or other body that processes Personal Data on
              behalf of and behalf of the Controller.
            </li>
            <li>
              <b>Cookies</b> - are a piece of information in the form of text or
              binary data is transmitted to the browser from the site.
            </li>
            <li>
              <b>Client's Consent (hereinafter "Consent")</b> - means a
              voluntary, specific, informed, and unequivocal expression of will,
              in which the Client using a statement or explicit affirmative
              action agrees to the processing of his Personal Data and to comply
              with the terms of this Privacy Policy.
            </li>
            <li>
              <b>Personal Data </b> - means any information that directly or
              indirectly allows identifying the Client/User. For example, name,
              surname, phone number, IP address.
            </li>
            <li>
              <b>Statistical Data</b> - any information directly or indirectly
              related to the Client/User, but is in the public domain. For
              example company name, and legal address.
            </li>
            <li>
              <b>Data</b> - is a common name for Personal and Statistical Data.
            </li>
            <li>
              <b>Spyskey Company Site (hereinafter “Site”)</b> - means a web
              page or group of web pages on the Internet, which are located at:{' '}
              <a href="/">https://spyskey.com/</a>, through which the Client
              receives Services from Company.
            </li>
            <li>
              <b>
                Spyskey Company (hereinafter referred to as "Spyskey" or
                "Company")
              </b>{' '}
              - is a tool that allows the Client to obtain Data about its User,
              by using the IP address of the User.
            </li>
            <li>
              <b>Third Party</b> - means a natural or legal person, government
              agency, institution, or body other than the Client, User,
              Controller, Processor or Company and persons authorized by the
              Controller or Processor under their direct supervision to process
              Personal Data.
            </li>
            <li>
              <b>Services</b> - are the implementation by the Company of the
              algorithm of actions in order to provide the Client with the
              opportunity to obtain Data on the User, by using the IP address of
              the User.
            </li>
          </ol>
        </li>
      </ol>
    ),
  },
  {
    title: 'General Provisions',
    content: () => (
      <ol style={{ counterReset: 'item 1' }}>
        <li>
          <ol>
            <li>
              The Company provides Services to Clients from different regions of
              the world, therefore the Company uses the laws of different
              jurisdictions in its activities.
            </li>
            <li>
              The Company processes and stores Personal Data on the basis of the
              following legislative acts:
              <ol>
                <li>
                  Granting rights to the Client under the{' '}
                  <a href="https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201720180SB1121">
                    California Consumer Privacy Act
                  </a>
                  ;
                </li>
                <li>
                  Compliance with the principles of legality, fairness, and
                  transparency in accordance with the{' '}
                  <a href="https://gdpr-text.com/">
                    General Data Protection Regulation (GDPR)
                  </a>
                  .
                </li>
              </ol>
            </li>
            <li>
              Spyskey acts as a Processor in relation to the processing of
              Personal Data that it receives from the Client during the
              provision of Services to him.
            </li>
          </ol>
        </li>
      </ol>
    ),
  },
  {
    title: 'Personal Data',
    content: () => (
      <ol style={{ counterReset: 'item 2' }}>
        <li>
          <ol>
            <li>
              The Company may receive the following Personal Data about the
              Client or its employees:
              <ol>
                <li>FULL NAME;</li>
                <li>e-mail;</li>
                <li>place of residence and location;</li>
                <li>login for Account;</li>
                <li>password;</li>
                <li>IP address.</li>
              </ol>
            </li>
            <li>
              The Company may receive the following Statistical Data about the
              Client or its employees:
              <ol>
                <li>name;</li>
                <li>legal address;</li>
                <li>jurisdiction;</li>
                <li>field of activity;</li>
                <li>the number of employees;</li>
                <li>any data that is freely available.</li>
              </ol>
            </li>
            <li>
              The Company purposefully does not process the Client's banking
              data, and such data is processed exclusively by the payment
              system, which is used to receive payments. The Company may process
              payment data solely to resolve disputes and/or to comply with the
              requirements of the legislature and/or the decision of the
              judicial/executive authority.
            </li>
            <li style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
              Spyskey does not collect or process sensitive Personal Data of
              Clients, such as race or ethnic origin, political views, religious
              or philosophical beliefs, union membership, genetic or biometric
              data, health information, sexual life or sexual orientation.
            </li>
            <li>
              The Company does not process the User's Personal Data in any way
              and does not have access to them. The Company provides the Client
              with software that allows the Client, by checking the IP address,
              to access the following User Data:
              <ol>
                <li>full name, if the User is a natural person;</li>
                <li>location;</li>
                <li>organization type;</li>
                <li>country;</li>
                <li>name of the mobile device;</li>
                <li>carrier name;</li>
                <li>
                  Point of Contact (POC), Organization Identifiers (ORG),
                  Networks (NET).
                </li>
              </ol>
            </li>
            <li style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
              The Company's software uses exclusively legal methods of providing
              Services and provides the Client with the opportunity to obtain
              User Data by checking the IP address.
            </li>
            <li style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
              Spyskey does not in any way provide the Client with access to the
              following sensitive User Data: race or ethnic origin, political
              views, religious or philosophical beliefs, union membership,
              genetic or biometric data, health information, sexual life or
              sexual orientation.
            </li>
            <li>
              When visiting the Site or receiving Services, Spyskey may collect
              the following Personal Data automatically:
              <ol>
                <li>IP address;</li>
                <li>time zone and language settings;</li>
                <li>browser type and version;</li>
                <li>operating system, device type, and screen extension;</li>
                <li>the country in which you are located;</li>
                <li>
                  data about your visit to the Site, including full URL
                  information, routes to and from the Site (including date and
                  time), page response time, data loading errors, length of stay
                  on certain pages, page activity (such information such as
                  scrolling and mouse movements, clicks), methods used to exit
                  the page and telephone numbers to contact the Clients'
                  customer support.
                </li>
              </ol>
            </li>
            <li>
              The Company has the right to collect and receive Data as follows:
              <ol>
                <li>when providing Services to the Client;</li>
                <li>
                  when interacting with employees of the Company, by exchanging
                  emails, communicating with employees of the Company and making
                  phone calls;
                </li>
                <li>
                  use of log files, cookies and other tracking technologies;
                </li>
                <li>during registration on the Site;</li>
                <li>when the Client writes a message on the Site.</li>
              </ol>
            </li>
            <li>
              The Company has the right to use Data for the following purposes:{' '}
              <ol>
                <li>provision of the Services;</li>
                <li>to ensure the security of the Site;</li>
                <li>
                  to administer the Site and conduct internal operations,
                  including troubleshooting, data analysis, testing, and
                  completing surveys;
                </li>
                <li>
                  to improve your navigation on the Site in accordance with your
                  preferences;
                </li>
                <li>communication with you;</li>
                <li>respond to law enforcement requests;</li>
                <li>
                  to initiate responses to legal claims, investigations, or
                  dispute resolution with you.
                </li>
              </ol>
            </li>
          </ol>
        </li>
      </ol>
    ),
  },
  {
    title: 'Transfer of Personal Data',
    content: () => (
      <ol style={{ counterReset: 'item 3' }}>
        <li>
          <ol>
            <li>
              The Company may transfer Data to entities with which the Company
              cooperates in the implementation and provision of Services:
              <ol>
                <li>
                  <b>Payment service. </b>To receive payment for the Services,
                  Personal Data may be transferred automatically;
                </li>
                <li>
                  <b>Contractors and employees. </b>The Company may transfer
                  your Personal Data to other entities with which it will start
                  cooperation, including legal and tax consultants, as well as
                  entities that provide accounting, logistics, marketing, and IT
                  services;
                </li>
                <li>
                  <b>Counterparties. </b>The Company has the right to disclose
                  or transfer Personal Data in the following transactions:
                  acquisition or merger, financing, corporate reorganization,
                  joint venture, including the sale of assets, or bankruptcy;
                </li>
                <li>
                  <b>Courts, law enforcement, and state bodies. </b>The Company
                  has the right to transfer Personal Data in case of fulfillment
                  of any legal obligations, including in accordance with a court
                  order.
                </li>
              </ol>
            </li>
          </ol>
        </li>
      </ol>
    ),
  },
  {
    title: 'Client Consent',
    content: () => (
      <ol style={{ counterReset: 'item 4' }}>
        <li>
          <ol>
            <li>
              The following actions are considered consent to the processing of
              Personal Data specified in this Privacy Policy:
              <ol>
                <li>registration on the Site;</li>
                <li>receiving Services.</li>
              </ol>
            </li>
            <li>
              By agreeing to the terms of this Privacy Policy, the Client
              provides his consent to:
              <ol>
                <li>processing his Data;</li>
                <li>
                  do not use the User's Data by unlawful or illegal means;
                </li>
                <li>
                  do not process the User Data provided in paragraph 3.7 of this
                  Privacy Policy;
                </li>
                <li>
                  inform the User that the Client can access his Data by
                  checking the IP address.
                </li>
              </ol>
            </li>
            <li>
              The Company reserves the right to obtain the Client's Consent via
              the Pop-up form. The Pop-up form may contain a Consent form in the
              сheckbox view.
            </li>
          </ol>
        </li>
      </ol>
    ),
  },
  {
    title: 'Personal Data Storage and Protection',
    content: () => (
      <ol style={{ counterReset: 'item 5' }}>
        <li>
          <ol>
            <li>
              The Company uses all necessary security and protection measures
              for Personal Data to ensure their confidentiality and prevents
              loss or improper disclosure.
            </li>
            <li>
              The Company protects and stores Personal Data from:
              <ol>
                <li>losses;</li>
                <li>
                  unlawful use, transfer, disclosure, modification, deletion,
                  and/or destruction.
                </li>
              </ol>
            </li>
            <li>
              We may use the following methods to protect Personal Data in
              accordance with the{' '}
              <a href="https://gdpr-text.com/ru/read/article-32/?col=1&lang1=en&lang2=en&lang3=uk">
                article "Security of processing" 32 GDPR
              </a>
              :
              <ol>
                <li>pseudonymization and encryption of Personal Data;</li>
                <li>
                  ability to ensure constant confidentiality, integrity,
                  availability and fault tolerance of Personal Data processing
                  systems;
                </li>
                <li>
                  regular testing, evaluation and measurement of the
                  effectiveness of technical and organizational measures to
                  ensure the security of processing Personal Data.
                </li>
              </ol>
            </li>
            <li>
              The Company does not store the Client's Personal Data in the event
              of a request to delete Personal Data on his behalf in accordance
              with the right to delete, as provided in{' '}
              <a href="https://gdpr-text.com/ru/read/article-17/?col=1&lang1=en&lang2=en&lang3=uk">
                Article 17 of the "Right to Erase" GDPR
              </a>
              .
            </li>
            <li>
              Spyskey has the right to retain Personal Data of Client for{' '}
              <b>5 (five) years</b> after the termination of the relationship in
              the following cases:
              <ol>
                <li>for statistical accounting;</li>
                <li>if the current legislation requires their storage;</li>
                <li>if they are necessary for doing business.</li>
              </ol>
            </li>
          </ol>
        </li>
      </ol>
    ),
  },
  {
    title: 'Grounds For Personal Data Processing',
    content: () => (
      <ol style={{ counterReset: 'item 6' }}>
        <li>
          <ol>
            <li>
              The Company processes Personal Data based on the following legal
              grounds:
              <ol>
                <li>Client's Consent;</li>
                <li>receiving Services from the Company;</li>
                <li>registration on Site;</li>
                <li>
                  to comply with the provisions of applicable law, for the
                  proper level of our business, the conclusion, and execution of
                  corporate transactions (sale of shares/stocks, mergers,
                  acquisitions), to fulfill your obligations to you and/or the
                  Third Party.
                </li>
              </ol>
            </li>
            <li>
              In cases where the basis for the processing of Personal Data is
              Your Consent, You have the right to withdraw it at any time. To
              withdraw your Consent, You may send an email to:{' '}
              <a href={'mailto:' + contact_email}>{contact_email}</a>. If Your
              Consent is withdrawn, the Company has the right to terminate the
              provision of the Services and terminate all relations with You. If
              Consent is withdrawn, your Personal Data will be permanently
              deleted.
            </li>
            <li>
              The Company undertakes to stop processing Personal Data within 15
              (fifteen) business days from the date of receipt of the withdrawal
              of Consent.
            </li>
          </ol>
        </li>
      </ol>
    ),
  },
  {
    title: 'Client Rights',
    content: () => (
      <ol style={{ counterReset: 'item 7' }}>
        <li>
          <ol>
            <li>
              During the processing of Personal and Statistical Data, the
              Company grants the Client the following rights:
              <ol>
                <li>
                  <b>Right of access. </b>The Сlient may contact us directly to
                  request access to the Personal and Statistical Data we hold
                  about them, as well as to any information;
                </li>
                <li>
                  <b>Right to erasure. </b>The Client has the right to delete
                  Personal and Statistical Data about himself. Personal and
                  Statistical Data in this case will be permanently deleted;
                </li>
                <li>
                  <b>Right to data portability. </b>We may send the Personal and
                  Statistical Data of the Client to third parties at the request
                  of the User;
                </li>
                <li>
                  <b>Right to rectification. </b>The Client has access to
                  Personal and Statistical Data that needs to be updated,
                  corrected, and supplemented at any time;
                </li>
                <li>
                  <b>Right to object. </b>The Client has the right to object to
                  the processing of his/her Personal and Statistical Data at any
                  time;
                </li>
                <li>
                  <b>
                    Automated individual decision-making, including profiling.{' '}
                  </b>
                  The Client has the right not to be subject to a decision that
                  is based solely on the automated processing of his Personal
                  and Statistical Data, including profiling, which has legal
                  consequences for him or similarly significantly affects him.
                </li>
              </ol>
            </li>
            <li>
              The terms of this clause apply to U.S. residents: The Bot does not
              support Do Not Track ("DNT") as required by the California Online
              Protection Act (CalOPPA). Do Not Track is an option you can set on
              your web browser to tell websites that you do not want to be
              tracked. You can enable or disable Do Not Track by visiting your
              web browser settings page.
            </li>
            <li>
              Also, you may appoint an authorized agent to make a request on
              your behalf if:
              <ol>
                <li>
                  An authorized agent is an individual or entity registered with
                  the California secretary of state;
                </li>
                <li>
                  You sign a written statement that you authorize the authorized
                  agent to act on your behalf;
                </li>
                <li>
                  If you are using an authorized agent to request to exercise
                  your right to information or right to erasure, please send a
                  certified copy of your written statement authorizing the
                  authorized agent to act on your behalf using the contact
                  information provided below.
                </li>
              </ol>
            </li>
          </ol>
        </li>
      </ol>
    ),
  },
  {
    title: 'Jurisdictions of Other Countries',
    content: () => (
      <ol style={{ counterReset: 'item 8' }}>
        <li>
          <ol>
            <li>
              The Company makes every effort to legally process Data in
              accordance with international standards for personal data
              processing.
            </li>
            <li>
              This Privacy Policy contains the main legal acts related to the
              processing of Data.
            </li>
            <li>
              Unfortunately, we can't list all the laws regarding the processing
              of Data in every jurisdiction in the world.
            </li>
            <li>
              The terms of this Privacy Policy describe the basic rights of the
              Client, which are provided for by the main provisions of the main
              legislative acts regulating the processing of Data.
            </li>
            <li>
              If you believe that the provisions of this Privacy Policy violate
              and/or in any way limit Your rights regarding the processing of
              Data, please contact us by e-mail:{' '}
              <a href={'mailto:' + contact_email}>{contact_email}</a> and we
              will do our best to resolve the matter within a reasonable time.
            </li>
          </ol>
        </li>
      </ol>
    ),
  },
  {
    title: 'Submission of Request',
    content: () => (
      <ol style={{ counterReset: 'item 9' }}>
        <li>
          <ol>
            <li>
              A Client in any jurisdiction has the right to submit a request to
              the Company if he believes that his rights have been violated by
              writing a request in writing to the support of the Company at the
              address: <a href={'mailto:' + contact_email}>{contact_email}</a>
            </li>
            <li>
              The Client's request must contain accurate information about the
              requirements for the Company. If the exact requirements are not
              specified in the request, the Company has the right to refuse to
              fulfill the request.
            </li>
            <li>
              We will not be able to respond to your request or provide you with
              Personal Data unless we can verify your identity and confirm that
              the Personal Data belongs to you. In case of receiving a request
              with inaccurate information and/or in case of inability to confirm
              the Client's identity, the Company has the right not to process
              the received request and contact the Client for clarification. In
              case of receiving a response to a request for clarifications, the
              Client must provide a new corrected request or submit a new
              request.
            </li>
            <li>
              The Company must respond to the request or fulfill the conditions
              set forth in the request within 21 (twenty one) business days from
              the moment of its receipt.
            </li>
          </ol>
        </li>
      </ol>
    ),
  },
  {
    title: 'Responsibility',
    content: () => (
      <ol style={{ counterReset: 'item 10' }}>
        <li>
          <ol>
            <li>
              The Company informs the Client that Personal Data may be used to
              provide the Services, and in case of disagreement with this, the
              Client is not entitled to receive the Services.
            </li>
            <li>
              The Company is not responsible for any damage caused to the Client
              as a result of the use of his Data by a Third Party without his
              knowledge.
            </li>
            <li>
              The Company may link to other websites or services. The privacy
              practices of these websites and services are not governed by this
              Privacy Policy and the Company, and the Company cannot be held
              responsible for the processing of Client's Personal Data by Third
              Party websites and services.
            </li>
            <li>
              The Сlient undertakes:{' '}
              <ol>
                <li>
                  notify and obtain the User's consent that the Client may
                  obtain User Data, using his IP address, while visiting the
                  Website, and may use such data for commercial purposes, by
                  adding the following notice to his Privacy Policy or pop-up
                  notice: " We inform you that when you visit our website, we
                  may access your Personal and Statistical Data and it may be
                  processed by a Third Party";
                </li>
                <li>
                  reimburse the User for any damage resulting from the
                  processing of his Data by the Client;
                </li>
                <li>
                  protect the Company from any trial, disputes, including
                  litigation arising from the processing by the Client of the
                  User's Personal Data, by resolving the dispute with the User
                  and providing legal assistance to the Company, if required;
                </li>
                <li>
                  reimburse the Company for any damage and compensate for all
                  losses incurred as a result of the processing by the Client of
                  the User's Personal Data.
                </li>
              </ol>
            </li>
            <li>
              The Company does not intentionally monitor the Customer's
              compliance with clause 3.7 of this Privacy Policy, but if the
              Company becomes aware of a Customer's violation of this section,
              the Company has the right to terminate the provision of services
              to the Customer, delete its Data and terminate any relationship
              with such Customer without refunding any monies.
            </li>
            <li>
              Spyskey is not responsible for:
              <ol>
                <li>
                  for any damage to the User resulting from the processing of
                  his Data by the Client;
                </li>
                <li>
                  for the lawfulness of the processing of User Data by the
                  Client;
                </li>
                <li>
                  for notifying the User about the processing of his Data by the
                  Client/Company;
                </li>
                <li>
                  for the User's consent to the processing of the User's Data by
                  the Client/Company;
                </li>
                <li>
                  for the accuracy of the User Data obtained through the
                  Company's Services.
                </li>
              </ol>
            </li>
            <li>
              The Client is solely responsible for: processing User Data; for
              notifying the User that during his visit to the Client's website,
              the Client can receive User`s Data; for any violation of the law
              in the field of personal data processing; for any violation of the
              User's rights; for using User Data for unlawful purposes.
            </li>
            <li>
              Unfortunately, the transmission of information over the Internet
              cannot be completely secure. Although we make every effort to
              protect personal data, we cannot guarantee the secure process of
              transferring personal data to the site. In this regard, you are
              solely responsible for possible failures when transferring your
              Data to the Company.
            </li>
          </ol>
        </li>
      </ol>
    ),
  },
  {
    title: 'Cookie',
    content: () => (
      <ol style={{ counterReset: 'item 11' }}>
        <li>
          <ol>
            <li>
              Site pages may contain electronic images known as web beacons
              (sometimes also called transparent gifs or pixel tags). Web
              beacons are usually small images placed on the web page or email
              you are viewing. The request that a device connected to the
              Internet makes to download such an image from the server/computer
              is recorded and it provides us with information such as the IP
              address, the time the image was viewed, and the type of browser
              used to do so.
            </li>
            <li>
              Cookies do not transmit viruses and/or malware to your device, as
              the data in the Cookie does not change during transit and does not
              affect your computer's performance in any way. They act more like
              logs (i.e. record Client activity and remember state information)
              and are updated each time you visit the Site.
            </li>
            <li>
              The Company uses Cookies for the following purposes:
              <ol>
                <li>authentication and identification;</li>
                <li>storage of personal preferences and settings;</li>
                <li>access session tracking;</li>
                <li>storage of statistical data;</li>
                <li>website analysis.</li>
              </ol>
            </li>
            <li>
              The Company can use the following web analytics services:
              <ol>
                <li>Facebook;</li>
                <li>Google Analytics.</li>
              </ol>
            </li>
          </ol>
        </li>
      </ol>
    ),
  },
  {
    title: 'Confirm Policy',
    content: () => (
      <ol style={{ counterReset: 'item 12' }}>
        <li>
          <ol>
            <li>
              The Services of the Company are intended for persons who have
              reached the age of majority, in accordance with the laws of the
              country of residence of such a person. The Company does not
              process the Personal Data of minors.
            </li>
            <li>
              If the Client is a legal entity, then the Company has the right to
              check the authority of its representative and request additional
              Data about such a Client. If the Client's representative does not
              have sufficient authority and/or cannot provide additional Data,
              then the Company has the right to terminate any relationship with
              such a Client and delete his Data permanently.
            </li>
            <li>
              The Company has the right to delete the Personal Data of a person
              who has not reached the age of majority, without warning and any
              consequences for the Company, as well as to terminate the
              provision of the Services to such a person.
            </li>
            <li>
              The Company purposefully does not provide the Client with access
              to the Data of the User who has not reached the age of consent,
              according to the jurisdiction of the User, in case of obtaining
              Data about the User who has not reached the age of consent, the
              Client undertakes to delete such Data, and the Company will not
              bear any responsibility for any processing Data of the User who
              has not reached the return of consent.
            </li>
            <li>
              If you have information about the receipt of the Services by a
              person under the age of majority, please contact the Company
              support service by sending an email to:{' '}
              <a href={'mailto:' + contact_email}>{contact_email}</a>
            </li>
          </ol>
        </li>
      </ol>
    ),
  },
  {
    title: 'Privacy Policy Change',
    content: () => (
      <ol style={{ counterReset: 'item 13' }}>
        <li>
          <ol>
            <li>
              We have the right to periodically make changes to the Privacy
              Policy, the security of Personal Data, and compliance with the
              requirements of the laws of the jurisdiction in which we operate.
            </li>
            <li>
              The Client is obliged to familiarize himself with the new terms of
              the Privacy Policy and Spyskey is not responsible if the Client
              has not familiarized himself with the new terms of the Privacy
              Policy.
            </li>
            <li>
              Spyskey updates the date of changes to the current version of the
              Privacy Policy in the "Updated" line at the top of the document.
            </li>
            <li>
              Our electronic or otherwise stored copies of the Privacy Policy
              are considered true, complete, valid, and enforceable and in
              effect, at the time you visit the Site.
            </li>
          </ol>
        </li>
      </ol>
    ),
  },
  {
    title: 'Contacts',
    content: () => (
      <ol style={{ counterReset: 'item 14' }}>
        <li>
          <ol>
            <li>
              The Client has the right to contact the Company support service
              at: <a href={'mailto:' + contact_email}>{contact_email}</a> to
              ensure his rights, in accordance with the terms of this Privacy
              Policy, or in case of violation of his rights, or to leave
              feedback or ask a question.
            </li>
          </ol>
        </li>
      </ol>
    ),
  },
]

export default privacy
