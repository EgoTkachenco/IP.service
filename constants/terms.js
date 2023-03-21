import { contact_email } from '@/constants/constants'

const terms = [
  {
    title: 'Introduction',
    content: () => (
      <>
        <p>
          The Terms of Use regulate the conditions for obtaining Services,
          namely obtaining access to Data by using an IP address.
        </p>
        <br />
        <p>
          The Terms of Use describe the types of Services, their cost, and
          payment methods.
        </p>
        <br />
        <p>
          The provision of Services is regulated exclusively by the conditions
          of these Terms of Use and relevant legislative acts.
        </p>
        <br />
        <p>
          Please read this document carefully to familiarize yourself with the
          methods and cost of providing the Services.
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
            <li>
              <b>Tariff</b> - is the amount of the cost of a Services officially
              established by the Company, which is indicated in the relevant
              section of the Site.
            </li>
          </ol>
        </li>
      </ol>
    ),
  },
  {
    title: 'Registration/Authorization',
    content: () => (
      <ol style={{ counterReset: 'item 1' }}>
        <li>
          <ol>
            <li>
              To receive the Services, the Client must register on the Site.The
              Client registers on the Site by filling out the appropriate form
              on Site, indicating his e-mail address and password.
            </li>
            <li>
              After registration, an Account will be created for the Client. The
              Company sets the functions for the Client Account.
            </li>
            <li>
              To authorize on the Company's Site, the Client must enter the
              email address and password that he provided during registration.
            </li>
          </ol>
        </li>
      </ol>
    ),
  },
  {
    title: 'Account',
    content: () => (
      <ol style={{ counterReset: 'item 2' }}>
        <li>
          <ol>
            <li>
              With the help of the Account, the Client can perform the following
              actions:
              <ol>
                <li>
                  adjust the receipt of Services in the manner provided by the
                  Company;
                </li>
                <li>choose the Tariff for payment of Services;</li>
                <li>fill in your profile;</li>
                <li>
                  configure the Site function - domain check, and create a list
                  of certain domain names that will make the Site available for
                  participation.
                </li>
              </ol>
            </li>
            <li>
              The Client undertakes not to disclose the password for access to
              his Account and is solely responsible in case of loss of his
              password and/or its transfer to a Third Party. If the Client has
              lost access to his Account, the Company may restore access to the
              Client's Account if the Client, at the request of the Company,
              provides documentary evidence that the Account belongs to him.
              Such confirmation is provided at the request of the Company, and
              the Company solely decides whether the Account belongs to such a
              Client.
            </li>
            <li>
              To delete the Account, the Client can write to the Company a
              request to delete the Account and such Account will be deleted by
              the Company within 24 hours from the receipt of the request. In
              case of deletion of the Account, the Company deletes all Personal
              Data of such a Client and the deletion of the Account is
              irrevocable and cannot be canceled. If the Account is deleted, the
              subscription to the Services will be deleted without a refund for
              the paid period.
            </li>
          </ol>
        </li>
      </ol>
    ),
  },
  {
    title: 'Provision of services and payment procedure',
    content: () => (
      <ol style={{ counterReset: 'item 3' }}>
        <li>
          <ol>
            <li>
              The Company provides Services to the Client through which the
              Client can obtain Data about its User when he visits the Client's
              website by checking his IP address. The Company provides Services
              to the Client under the conditions of these Terms of Use, which
              are a public contract addressed to an unlimited number of persons.
              If the Client does not agree to the Terms of Use, the Company has
              the right not to provide Services to such Client.
            </li>
            <li>
              The Company provides the following types of Services to the
              Client:
              <ol>
                <li>
                  <b>IP Geolocation API. </b>Using geolocation data to create an
                  efficient, enjoyable and secure online experience for its
                  Users, resulting in higher conversion rates, higher User
                  satisfaction.
                </li>
                <li>
                  <b>IP Ranges API. </b>The Company allows you to convert an IP
                  address to an operator, and our database provides information
                  about each operator's mobile IP name, country code, and
                  network code
                </li>
                <li>
                  <b>Privacy Detection API. </b>The User's true IP discovery
                  API, including VPN discovery, proxy discovery, tor, using a
                  relay or connecting through a hosting provider, which can
                  potentially be used to tunnel traffic and mask the User's true
                  IP.
                </li>
                <li>
                  <b>IP to Company API. </b>Our API provides customers with
                  firmographics Data on the companies behind IP traffic.
                </li>
                <li>
                  <b>ASN API. </b>Mapping an IP address to an ASN and looking up
                  an ASN is possible using the ASN API, providing access to a
                  database that includes ASN data for each IP address and each
                  domain associated with the ASN, allocation date, registry
                  name, the total number of IP addresses and assigned prefixes.
                </li>
                <li>
                  <b>Reverse IP API. </b>Our Hosted Domains API, or Reverse IP
                  API returns a full list of domains that are hosted on a single
                  IP address. These domains are ordered based on host.io domain
                  ranking.
                </li>
                <li>
                  <b>Mobile Carrier Detection. </b>Convert IP address to carrier
                  and provide information about each carrier's mobile IP name,
                  country code, and network code.
                </li>
                <li>
                  Abuse Contact Data for IP Address. Our Abuse Contacts API
                  returns data containing information owned by Abuse Contacts
                  for each Internet IP address.
                </li>
                <li>
                  <b>IP Whois API. </b>Our Whois API provides records with
                  accurate and easy-to-use data fields - Point of Contact (POC),
                  Organization Identifiers (ORG), Networks (NET), and more.
                </li>
              </ol>
            </li>
            <li style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
              The Company provides the Client with Data about the User by
              analyzing his IP address in an exclusively legal way. The Company
              does not additionally collect User Data from closed sources and
              does not receive User Data directly from the User.
            </li>
            <li>
              The Company provides the Services to the Client in the form of a
              subscription, and the Client pays for such Services automatically
              by deducting the amount of the provision of the Services specified
              in the relevant section of the Site.
            </li>
            <li>
              Depending on the type of Service and their quantity, the cost of
              providing the Services may vary. The Company indicates the cost of
              providing the Services to the Client in the Tariff, and the types
              of Tariffs are posted in the relevant section of the Site,
              according to which the Client can choose the appropriate type and
              number of Services.
            </li>
            <li>
              The terms of the Tariffs are indicated in the relevant section of
              the Site and can be changed by the Company unilaterally. In the
              event of a change in the terms or cost of payment, the Company
              notifies the Client of such changes by posting relevant
              information in the section of the Site and/or by sending a letter
              to the Client's e-mail address. The new payment terms come into
              effect from the moment the paid registration period ends.
            </li>
            <li>
              The Company provides the Client with a demo version of access to
              the Company's software and the Client can familiarize himself with
              the terms of the Services before ordering them.The term for
              providing access to the demo version is 14 (fourteen) calendar
              days.
            </li>
          </ol>
        </li>
      </ol>
    ),
  },
  {
    title: 'Refunds',
    content: () => (
      <ol style={{ counterReset: 'item 4' }}>
        <li>
          <ol>
            <li>
              Payment for the Services is in the form of a subscription, so the
              purchase of the Services is final and non-refundable.
            </li>
            <li>
              The Company has the right to make a refund, but the refund is made
              only within 7 (seven) calendar days after the first payment has
              been made and the Company can refund the first payment. After the
              expiration of 7 (seven) calendar days after the first payment is
              made, the Company does not return the money.
            </li>
            <li>
              To return the funds, the Client undertakes to send a request to
              the Company to the email address:{' '}
              <a href={'mailto:' + contact_email}>{contact_email}</a> Such a
              request must contain the following information: confirmation of
              the Client's identity and description of the Client's order If we
              are unable to verify your identity or receive a description of the
              reasons for the refund, then we will not be able to process the
              refund.
            </li>
            <li>
              In the event of a refund, the Company returns the funds within 7
              (seven) calendar days from the date of receipt of the request for
              a refund to the bank details specified by the Client when paying
              for the Services.
            </li>
            <li>
              The Client has the right to refuse to receive the Service and
              cancel the subscription to such Services at any time. To cancel a
              subscription, the Client needs to write to the following e-mail
              address: <a href={'mailto:' + contact_email}>{contact_email}</a> a
              request indicating the cancellation of the subscription and
              indicating your identity data. The Company has the right to
              request the Client to confirm his Personal Data in the manner
              determined by the Company, and if the Client cannot provide such
              confirmation, the Company has the right not to cancel the
              subscription to the Services. Your cancellation will take effect
              at the end of the current paid period. There are no refunds for
              our Subscription Services.
            </li>
          </ol>
        </li>
      </ol>
    ),
  },
  {
    title: 'Intellectual Rights',
    content: () => (
      <ol style={{ counterReset: 'item 5' }}>
        <li>
          <ol>
            <li>
              All exclusive intellectual property rights to the content of the
              Company and other objects, as well as components and their
              elements, belong exclusively to Spyskey.
            </li>
            <li>
              The Company grants the Client a non-exclusive right to use the
              Services.
            </li>
            <li>
              The Client grants the Company the non-exclusive right to use,
              copy, process and transfer his Data during the term of using the
              Services.
            </li>
            <li>
              The Client guarantees that the Data and information provided by
              him do not infringe the intellectual property rights of a Third
              Party.
            </li>
            <li>
              If the Data and/or information provided by the Client violates the
              intellectual property rights of a Third Party, the Company
              reserves the right to stop providing the Services.
            </li>
          </ol>
        </li>
      </ol>
    ),
  },
  {
    title: 'Responsibility',
    content: () => (
      <ol style={{ counterReset: 'item 6' }}>
        <li>
          <ol>
            <li>
              The Client undertakes to comply with the conditions of clause
              11.4. of the Privacy Policy, if the Client does not comply with
              the conditions of this clause, the Company has the right to
              terminate the relationship with the Client without refunding funds
              to such Client.
            </li>
            <li>
              The Client is solely responsible for the safety of his password to
              his Account, and the Company is not responsible in case of its
              loss.
            </li>
            <li>
              The Client undertakes not to carry out the following actions:{' '}
              <ol>
                <li>provide a Account password to the Third Party;</li>
                <li>alienate the Account in any way;</li>
                <li>
                  provide Personal Data or other information on behalf of a
                  Third Party;
                </li>
                <li>
                  copy, adapt, decipher, decompile, disassemble or reverse
                  engineer any software that constitutes or in any way forms
                  part of the Company Site.
                </li>
              </ol>
            </li>
            <li>
              The Сlient undertakes:
              <ol>
                <li>use User Data exclusively in a lawful way;</li>
                <li>
                  notify the User, in accordance with the requirements of the
                  Company, about the receipt of his Data and methods of their
                  use;
                </li>
                <li>
                  participate solely in any disputes with the User arising from
                  the processing of his Data;
                </li>
                <li>
                  reimburse the Company for any losses that arise as a result of
                  the processing of User Data by the Client;
                </li>
                <li>
                  reimburse the Company for the payment of penalties that arise
                  as a result of the processing of User Data by the Client.
                </li>
              </ol>
            </li>
            <li>
              The Company does not guarantee:
              <ol>
                <li>uninterrupted access to the Company's Site;</li>
                <li>uninterrupted access to the Services;</li>
                <li>receipt by the Client of reliable Data about the User;</li>
                <li>
                  absence of claims from the User to the Client, as a result of
                  the processing of his Data by the Client.
                </li>
              </ol>
            </li>
            <li>
              Spyskey reserves the right, but not the obligation:
              <ol>
                <li>monitor violations of these Terms of Use;</li>
                <li>
                  take appropriate legal action against anyone who, in its sole
                  discretion, violates the law or these Terms of Use, including,
                  without limitation, reporting such Client to law enforcement;
                </li>
                <li>
                  in our sole discretion and without limitation, notice or
                  liability, remove from the Site or otherwise disable all files
                  and content that are excessive in size or otherwise burden our
                  systems;
                </li>
                <li>
                  administer the Site in a manner that protects our rights and
                  property and facilitates the proper functioning of the Site.
                </li>
              </ol>
            </li>
            <li>
              To the extent permitted by law, we provide the materials and
              Services on an "as is" basis. This means that we make no
              warranties of any kind, including but not limited to warranties of
              merchantability and fitness for a particular purpose.
            </li>
            <li style={{ fontWeight: 'bold' }}>
              COMPANY WILL NOT BE LIABLE FOR EFFECTS CAUSED BY AN ACT HACKERS,
              CRIMINAL SOFTWARE CHANGES, AND OTHER TYPES OF UNAUTHORIZED ACCESS
              AND USE OF SITE.
            </li>
          </ol>
        </li>
      </ol>
    ),
  },
  {
    title: 'Governing law and dispute resolution',
    content: () => (
      <ol style={{ counterReset: 'item 7' }}>
        <li>
          <ol>
            <li>
              All relationships between the Company and the Client arising in
              connection with the fulfillment of the terms of these Services,
              about the use and use of the Services, shall be governed by the
              laws of Canada.
            </li>
            <li>
              To expedite resolution and control the costs of any dispute,
              controversy, or claim related to these Terms of Use (each a
              “Dispute” and collectively “Disputes”) brought by you or us
              (individually a “Party” and collectively the “Parties »), the
              Parties agree to first attempt to arbitrate any Dispute (other
              than Disputes expressly set forth below) informally at least 10
              (ten) business days before the commencement of the arbitration.
              Such informal negotiations begin after written notice from one
              Party to the other Party.
            </li>
            <li>
              Any dispute arising out of or in connection with this agreement,
              including any question as to its existence, validity, or
              termination, shall be referred to and finally decided by the ADR
              Chambers International in accordance with laws of Canada. The
              number of arbitrators is one. The legal place of arbitration is
              the city of Ontario. The language of the proceedings is English.
            </li>
            <li>
              The Parties agree that any arbitration will be limited to the
              dispute between the Parties individually. To the fullest extent
              permitted by law, (a) no arbitration shall be combined with any
              other proceeding; (b) has no right or authority to litigate any
              dispute on a class action basis or to use class action procedures;
              (c) has no right or authority for any dispute to be brought in a
              representative capacity on behalf of the general public or any
              other persons.
            </li>
          </ol>
        </li>
      </ol>
    ),
  },
  {
    title: 'Client consent',
    content: () => (
      <ol style={{ counterReset: 'item 8' }}>
        <li>
          <ol>
            <li>
              By signing these Terms of Use, the Client agrees to:
              <ol>
                <li>
                  debiting funds automatically, in the form of a subscription,
                  as payment for receiving the Services;
                </li>
                <li>terms of registration on the Site;</li>
                <li>
                  notify the User can be obtained through the use of the IP
                  address;
                </li>
                <li>with the conditions of these Terms of Use.</li>
              </ol>
            </li>
          </ol>
        </li>
      </ol>
    ),
  },
  {
    title: 'Implementation of changes',
    content: () => (
      <ol style={{ counterReset: 'item 9' }}>
        <li>
          <ol>
            <li>
              The Company has the right to make changes to these Terms of Use in
              the event of a change in the terms of providing Services or a
              change in the amount of the сommission.
            </li>
            <li>
              The Client is obliged to familiarize himself with the new terms of
              the Terms of Use, and the Company is not responsible if the Client
              has not familiarized himself with the new terms of the Terms of
              Use.
            </li>
            <li>
              Our electronic or otherwise stored copies of the Terms of Use are
              deemed to be the true, complete, valid, and enforceable versions
              of these Terms of Use that are in effect at the time you visit the
              Site. If the Client uses the Services after the date of update of
              the Terms of Use, we have the right to assume that the Client has
              read the new version of the Terms of Use and agrees to the terms
              of the Services.
            </li>
          </ol>
        </li>
      </ol>
    ),
  },
  {
    title: 'Company details',
    content: () => (
      <>
        <p>
          <b>Name: </b>LEADEON CONVERSION LP
        </p>
        <p>
          <b>Business Identification Number (BIN): </b>311230692
        </p>
        <p>
          <b>Address: </b>{' '}
          <address>
            1110 Finch Avenue West, Suite 406, North York, Ontario, Canada, M3J
            2T2
          </address>
        </p>
        <p>
          <b>E-mail: </b>{' '}
          <a href={'mailto:' + contact_email}>{contact_email}</a>
        </p>
        <p>
          <b>Website: </b>{' '}
          <a href="https://spyskey.com/">https://spyskey.com/</a>
        </p>
      </>
    ),
  },
]

export default terms
