import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { H1, Flex, H5, Text, Caption, Icon } from '@/core'
import Layout from './layout/Layout'
import { BlockInner } from './blocks/Block'
import Link from 'next/link'
import { useRouter } from 'next/router'

const TermsOfService = () => {
  const [activeBlock, setActiveBlock] = useState(0)
  const router = useRouter()
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          const blockIndex = entry.target.id.split('-')[1]
          if (entry.isIntersecting)
            setActiveBlock((state) => (blockIndex > state ? blockIndex : state))
          else
            setActiveBlock((state) => (blockIndex == state ? state - 1 : state))
        }),
      {
        root: null,
        threshold: 0,
      }
    )
    const blocks = document.getElementById('terms-content')
    for (let i = 0; i < blocks.children.length; i++) {
      const block = blocks.children[i]
      observer.observe(block)
    }
    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const blockId = router.asPath.split('#')[1]
    if (blockId) {
      const block = document.getElementById(blockId)
      block.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      })
    }
  }, [router.asPath])

  return (
    <Layout animation={false}>
      <Wrapper>
        <TitlesList activeBlock={activeBlock} />
        <Flex direction="column">
          <Title color="dark">Terms of Service</Title>
          <LastUpdate>
            <Icon icon="refresh" size="16px" color="light-grey" />
            <Caption color="light-grey">Last Updated: January 1, 2023</Caption>
          </LastUpdate>
          <TermsList id="terms-content">
            {terms.map((block, i) => (
              <TermsBlock key={i} id={'block-' + i}>
                <H5>{block.title}</H5>
                <Text>{block.content}</Text>
              </TermsBlock>
            ))}
          </TermsList>
        </Flex>
      </Wrapper>
    </Layout>
  )
}

export default TermsOfService

const TitlesList = ({ activeBlock }) => {
  return (
    <TitlesListWrapper>
      {terms.map((block, i) => (
        <Link key={i} href={`#block-` + i}>
          <TitlesListItem active={i <= activeBlock}>
            {block.title}
          </TitlesListItem>
        </Link>
      ))}
    </TitlesListWrapper>
  )
}

const TitlesListWrapper = styled.div`
  position: sticky;
  margin-top: 253px;
  top: 250px;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 205px;
  min-width: 205px;

  @media (max-width: 1140px) {
    display: none;
  }
`

const TitlesListItem = styled(Caption)`
  padding-left: 16px;
  height: 40px;
  display: flex;
  align-items: center;
  border-left: 1px solid
    ${({ theme, active }) =>
      active ? theme.colors.primary : theme.colors.text};
  color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.text};
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  transition: all 0.3s;
`

const TermsList = styled(Flex)`
  flex-direction: column;
  gap: 100px;

  @media (max-width: 1140px) {
    gap: 48px;
  }
`

const TermsBlock = styled(Flex)`
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1140px) {
    gap: 16px;
  }
`

const LastUpdate = styled(Flex)`
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
`

const Title = styled(H1)`
  margin: 100px 0;

  @media (max-width: 1140px) {
    margin: 48px 0 32px;
  }
`

const Wrapper = styled(BlockInner)`
  position: relative;
  gap: 91px;
  padding-bottom: 150px;
`

const terms = [
  {
    title: 'Introduction',
    content: `Welcome to IPInfo! Your use of IPInfo’ services, including the services IPInfo makes available through IPInfo.io (the “Sites”), and any other software or services offered by IPInfo in connection with any of those (the “Services”) is governed by these terms of service (the “Terms”), so please carefully read them before using the Services. For the purposes of these Terms, “we,” “our,” “us,” and “IPInfo” refer to IDB, LLC, the providers and operators of the Services.

In order to use the Services, you must first agree to these Terms. If you are registering for or using the Services on behalf of an organization, you are agreeing to these Terms for that organization and promising that you have the authority to bind that organization to these Terms. In that case, “you” and “your” will also refer to that organization, wherever possible.
		
You must be over 13 years of age to use the Services, and children under the age of 13 cannot use or register for the Services. If you are over 13 years of age but are not yet of legal age to form a binding contract (in many jurisdictions, this age is 18), then you must get your parent or guardian to read these Terms and agree to them for you before you use the Services. If you are a parent or guardian and you provide your consent to your child's registration with the Services, you agree to be bound by these Terms with respect of your child’s use of the Services.
		
You agree your purchase and/or use of the Services are not contingent on the delivery of any future functionality or features or dependent on any oral or written public comments made by IPInfo or any of its affiliates regarding future functionality or features.
		
BY USING, DOWNLOADING, INSTALLING, OR OTHERWISE ACCESSING THE SERVICES OR ANY MATERIALS INCLUDED IN OR WITH THE SERVICES, YOU HEREBY AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT ACCEPT THESE TERMS, THEN YOU MAY NOT USE, DOWNLOAD, INSTALL, OR OTHERWISE ACCESS THE SERVICES.
		
IF YOU HAVE ENTERED INTO A SEPARATE WRITTEN AGREEMENT WITH IPINFO FOR USE OF SERVICES, THE TERMS AND CONDITIONS OF SUCH OTHER AGREEMENT SHALL PREVAIL OVER ANY CONFLICTING TERMS OR CONDITIONS IN THESE TERMS.
		
CERTAIN FEATURES OF THE SERVICES OR SITES MAY BE SUBJECT TO ADDITIONAL GUIDELINES, TERMS, OR RULES, WHICH WILL BE POSTED ON THE SERVICE OR SITES IN CONNECTION WITH SUCH FEATURES. TO THE EXTENT SUCH TERMS, GUIDELINES, AND RULES CONFLICT WITH THESE TERMS, SUCH TERMS SHALL GOVERN SOLELY WITH RESPECT TO SUCH FEATURES. IN ALL OTHER SITUATIONS, THESE TERMS SHALL GOVERN.`,
  },
  {
    title: 'Your Account',
    content: `In the course of registering for or using the Services, you may be required to provide IPInfo with certain information, including your name, contact information, username and password (“Credentials”). IPInfo handles such information with the utmost attention, care and security. Nonetheless, you, not IPInfo, shall be responsible for maintaining and protecting your Credentials in connection with the Services. If your contact information or other information relating to your account changes, you must notify IPInfo promptly and keep such information current. 

You are solely responsible for any activity using your Credentials, whether or not you authorized that activity. You should immediately notify IPInfo of any unauthorized use of your Credentials or if your email or password has been hacked or stolen. If you discover that someone is using your Credentials without your consent, or you discover any other breach of security, you agree to notify IPInfo immediately.`,
  },
  {
    title: 'Content',
    content: `A variety of information, messages, comments, posts, text, graphics, software, photographs, videos, data, reviews, recommendations, and other materials may be made available through the Services by IPInfo or its suppliers (“Content”). While IPInfo strives to keep the Content that it provides through the Services accurate, complete, and up-to-date, IPInfo cannot guarantee, and is not responsible for the accuracy, completeness, or timeliness of any Content. You acknowledge that by using the Services, you may be exposed to materials that are offensive, indecent or objectionable. Under no circumstances will IPInfo be liable in any way for any such Content. Furthermore, certain aspects of the Services may function to alert users of potential suspicious activity and threats (“Alerts”). Such Alerts are opinions generated by the Services. Accordingly, in no circumstances will IPInfo be liable for defamation, libel, or any similar claim as a result of the Alerts or any components of the Services used to generate Alerts.

You acknowledge that you may also be able to create, transmit, publish or display information (such as data files, written text, computer software, music, audio files or other sounds, photographs, videos or other images) through use of the Services. All such information is referred to below as “User Content.” You agree that you are solely responsible for your User Content, and for the consequences of your actions (including any loss or damage which IPInfo may suffer) in connection with such User Content. If you are registering for these Services on behalf of an organization, you also agree that you are also responsible for the actions of associated Users and for any User Content that such associated Users might upload, record, publish, post, link to, or otherwise transmit or distribute through use of the Services. IPInfo may refuse to store, provide, or otherwise maintain your User Content for any or no reason. IPInfo may remove your User Content from the Services at any time if you violate these Terms or if the Services are canceled or suspended. If User Content is stored using the Services with an expiration date, IPInfo may also delete the User Content as of that date. User Content that is deleted may be irretrievable. You agree that IPInfo has no responsibility or liability for the deletion or failure to store any User Content or other communications maintained or transmitted through use of the Services. IPInfo reserves the right (but shall have no obligation) to monitor and remove User Content from the Services, in its discretion. You agree to immediately take down any User Content that violates these Terms, including pursuant to a takedown request from IPInfo. In the event that you elect not to comply with a request from IPInfo to take down certain User Content, IPInfo reserves the right to directly take down such User Content. By submitting, posting or otherwise uploading User Content on or through the Services you give IPInfo a worldwide, royalty-free, and non-exclusive license to reproduce, adapt, modify, translate, publish, publicly perform, publicly display and distribute such User Content for the purpose of enabling IPInfo to provide you with the Services, and for the limited purposes stated in our Privacy Policy.
		
Notwithstanding anything to the contrary, you agree to give IPInfo a perpetual, irrevocable, worldwide, royalty-free, and non-exclusive license to reproduce, adapt, modify, translate, publish, publicly perform, publicly display, and distribute any queries that you submit through the Services.`,
  },
  {
    title: 'Proprietary Rights',
    content: `You acknowledge and agree that IPInfo (or IPInfo’s licensors) own all legal right, title and interest in and to the Services and the Content and that the Services and the Content are protected by copyrights, trademarks, patents, or other proprietary rights and laws (whether those rights happen to be registered or not, and wherever in the world those rights may exist).

Except as provided in Section 3, IPInfo acknowledges and agrees that it obtains no right, title or interest from you (or your licensors) under these Terms in or to any User Content that you create, upload, submit, post, transmit, share or display on, or through, the Services, including any intellectual property rights which subsist in that User Content (whether those rights happen to be registered or not, and wherever in the world those rights may exist). Unless you have agreed otherwise in writing with IPInfo, you agree that you are responsible for protecting and enforcing those rights and that IPInfo has no obligation to do so on your behalf.`,
  },
  {
    title: 'License from IPInfo and Restrictions on Use',
    content: `IPInfo gives you a personal, worldwide, royalty-free, non-assignable and non-exclusive license to use the software provided to you as part of the Services. When using a free version of the Services, this license is strictly limited to your personal, non-commercial use, in the manner permitted by these Terms. When using a paid version for the Services, this license is extended to include your commercial use, subject to these Terms.

You may not (and you may not permit anyone else to): (i) copy, modify, create a derivative work of, reverse engineer, decompile or otherwise attempt to extract the source code of the Services or any part thereof, unless this is expressly permitted or required by law, or unless you have been specifically told that you may do so by IPInfo, in writing (e.g., through an open source software license); or (ii) attempt to disable or circumvent any security mechanisms used by the Services or any applications running on the Services.
		
You may not engage in any activity that interferes with or disrupts the Services (or the servers and networks which are connected to the Services).
		
You may not access the Services in a manner intended to avoid incurring fees or exceeding usage limits or quotas.
You may not access the Services for the purpose of bringing an intellectual property infringement claim against IPInfo or for the purpose of creating a product or service competitive with the Services. You may not use any robot, spider, site search/retrieval application or other manual or automatic program or device to retrieve, index, “scrape,” “data mine” or in any way gather Content from the Services. You may not use the Services to assemble email lists for the purposes of sending out mass emails or “spam.” You may not access the Services for the purpose of collecting Content for sale or resale without the express written consent of IPInfo.
		
You agree that you will not upload, record, publish, post, link to, transmit or distribute User Content, or otherwise utilize the Services in a manner that: (i) advocates, promotes, incites, instructs, informs, assists or otherwise encourages violence or any illegal activities; (ii) infringes or violates the copyright, patent, trademark, service mark, trade name, trade secret, or other intellectual property rights of any third party or IPInfo, or any rights of publicity or privacy of any party; (iii) attempts to mislead others about your identity or the origin of a message or other communication, or impersonates or otherwise misrepresents your affiliation with any other person or entity, or is otherwise materially false, misleading, or inaccurate; (iv) promotes, solicits or comprises inappropriate, harassing, abusive, profane, hateful, defamatory, libelous, threatening, obscene, indecent, vulgar, pornographic or otherwise objectionable or unlawful content or activity; (v) is harmful to minors; (vi) utilizes or contains any viruses, Trojan horses, worms, time bombs, or any other similar software, data, or programs that may damage, detrimentally interfere with, surreptitiously intercept, or expropriate any system, data, personal information, or property of another; or (vii) violates any law, statute, ordinance, or regulation (including without limitation the laws and regulations governing export control, unfair competition, anti-discrimination, or false advertising).
		
You may not use the Services if you are a person barred from receiving the Services under the laws of the United States or other countries, including the country in which you are resident or from which you use the Services. You affirm that you are over the age of 13, as the Services are not intended for children under 13.`,
  },
  {
    title: 'Pricing Terms',
    content: `Subject to the Terms, the Services are provided to you without charge up to certain usage limits and functionalities, and usage in excess of these limits or outside of these functionalities will require purchase of additional resources and the payment of fees. Please see IPInfo’s Pricing Terms at https://ipinfo.io/pricing for details regarding pricing for the Services.`,
  },
  {
    title: 'Privacy Policies',
    content: `These Services are provided in accordance with our Privacy Policy, which can be found at https://ipinfo.io/privacy-policy. You agree to the use of your User Content and personal information in accordance with these Terms and IPInfo’s Privacy Policy.

Notwithstanding anything to the contrary, if you are utilizing the Services on behalf of an organization, you agree to permit IPInfo to identify your organization as a customer and to use your organization’s name and/or logo in IPInfo’s websites and marketing materials.`,
  },
  {
    title: 'Modification and Termination of Services',
    content: `IPInfo is constantly innovating in order to provide the best possible experience for its users. You acknowledge and agree that the form and nature of the Services which IPInfo provides may change from time to time without prior notice to you, subject to the terms in its Privacy Policy. Changes to the form and nature of the Services will be effective with respect to all versions of the Services; examples of changes to the form and nature of the Services include without limitation changes to fee and payment policies, security patches, added functionality, automatic updates, and other enhancements. Any new features that may be added to the Sites or the Services from time to time will be subject to these Terms, unless stated otherwise.

You may terminate these Terms at any time by canceling your account on the Services. You will not receive any refunds if you cancel your account.
		
You agree that IPInfo, in its sole discretion and for any or no reason, may terminate your account or any part thereof. You agree that any termination of your access to the Services may be without prior notice, and you agree that IPInfo will not be liable to you or any third party for such termination.
		
You are solely responsible for exporting your User Content from the Services prior to termination of your account for any reason, provided that if we terminate your account, we will endeavor to provide you a reasonable opportunity to retrieve your User Content.
		
Upon any termination of the Services or your account these Terms will also terminate, but all provisions of these Terms which, by their nature, should survive termination, shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, and limitations of liability.`,
  },
  {
    title: 'Changes to the Terms',
    content: `These Terms may be amended or updated from time to time without notice and may have changed since your last visit to the Sites or use of the Services. It is your responsibility to review these Terms for any changes. By continuing to access or use the Services after revisions become effective, you agree to be bound by the revised Terms. If you do not agree to the new Terms, please stop using the Services. Please visit this page regularly to review these Terms for any changes.`,
  },
  {
    title: 'DISCLAIMER OF WARRANTY',
    content: `YOU EXPRESSLY UNDERSTAND AND AGREE THAT YOUR USE OF THE SERVICES ARE AT YOUR SOLE RISK AND THAT THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE.”

IPINFO, ITS SUBSIDIARIES AND AFFILIATES, AND ITS LICENSORS MAKE NO EXPRESS WARRANTIES AND DISCLAIM ALL IMPLIED WARRANTIES REGARDING THE SERVICES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, IPINFO, ITS SUBSIDIARIES AND AFFILIATES, AND ITS LICENSORS DO NOT REPRESENT OR WARRANT TO YOU THAT: (A) YOUR USE OF THE SERVICES WILL MEET YOUR REQUIREMENTS, (B) YOUR USE OF THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE OR FREE FROM ERROR, AND (C) DATA AND INFORMATION PROVIDED THROUGH THE SERVICES WILL BE ACCURATE.
		
NOTHING IN THESE TERMS, INCLUDING SECTIONS 10 AND 11, SHALL EXCLUDE OR LIMIT IPINFO’S WARRANTY OR LIABILITY FOR LOSSES WHICH MAY NOT BE LAWFULLY EXCLUDED OR LIMITED BY APPLICABLE LAW.`,
  },
  {
    title: 'LIMITATION OF LIABILITY',
    content: `SUBJECT TO SECTION 10 ABOVE, YOU EXPRESSLY UNDERSTAND AND AGREE THAT IPINFO, ITS SUBSIDIARIES AND AFFILIATES, AND ITS LICENSORS SHALL NOT BE LIABLE TO YOU FOR ANY INDIRECT, INCIDENTAL, SPECIAL CONSEQUENTIAL OR EXEMPLARY DAMAGES WHICH MAY BE INCURRED BY YOU, HOWEVER CAUSED AND UNDER ANY THEORY OF LIABILITY. THIS SHALL INCLUDE, BUT NOT BE LIMITED TO, ANY LOSS OF PROFIT (WHETHER INCURRED DIRECTLY OR INDIRECTLY), ANY LOSS OF GOODWILL OR BUSINESS REPUTATION, ANY LOSS OF DATA SUFFERED, COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, OR OTHER INTANGIBLE LOSS. THESE LIMITATIONS SHALL APPLY NOTWITHSTANDING THE FAILURE OF ESSENTIAL PURPOSE OF ANY LIMITED REMEDY.

THE LIMITATIONS ON IPINFO’S LIABILITY TO YOU IN THIS SECTION SHALL APPLY WHETHER OR NOT IPINFO HAS BEEN ADVISED OF OR SHOULD HAVE BEEN AWARE OF THE POSSIBILITY OF ANY SUCH LOSSES ARISING.
		
SOME STATES AND JURISDICTIONS MAY NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU. IN NO EVENT SHALL IPINFO’S TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES, AND CAUSES OF ACTION (WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE) EXCEED THE AMOUNT THAT YOU HAVE ACTUALLY PAID FOR THE SERVICES IN THE PAST TWELVE MONTHS, OR ONE HUNDRED DOLLARS ($100.00), WHICHEVER IS GREATER.`,
  },
  {
    title: 'Indemnification',
    content: `You agree to hold harmless and indemnify IPInfo, and its subsidiaries, affiliates, officers, agents, employees, advertisers, licensors, suppliers or partners (collectively “IPInfo and Partners”) from and against any third party claim arising from or in any way related to (a) your breach of the Terms, (b) your use of the Services, (c) your violation of applicable laws, rules or regulations in connection with the Services, or (d) your User Content, including any liability or expense arising from all claims, losses, damages (actual and consequential), suits, judgments, litigation costs and attorneys’ fees, of every kind and nature.`,
  },
  {
    title: 'Third-Party Content',
    content: `The Services may include references or hyperlinks to other web sites or content or resources or email content. IPInfo has no control over any web sites or resources which are provided by companies or persons other than IPInfo.

You acknowledge and agree that IPInfo is not responsible for the availability of any such external sites or resources, and does not endorse any advertising, products or other materials on or available from such web sites or resources.
		
You acknowledge and agree that IPInfo is not liable for any loss or damage which may be incurred by you or other users as a result of the availability of those external sites or resources, or as a result of any reliance placed by you on the completeness, accuracy or existence of any advertising, products or other materials on, or available from, such web sites or resources.`,
  },
  {
    title: 'Third Party Software',
    content: `The Services may incorporate certain third party software (“Third Party Software”), which is licensed subject to the terms and conditions of the third party licensing such Third Party Software. Nothing in these Terms limits your rights under, or grants you rights that supersede, the terms and conditions of any applicable license for such Third Party Software.`,
  },
  {
    title: 'Feedback',
    content: `You may choose to or we may invite you to submit comments or ideas about the Services, including without limitation about how to improve the Services or our products. By submitting any feedback, you agree that your disclosure is gratuitous, unsolicited and without restriction and will not place IPInfo under any fiduciary or other obligation, and that we are free to use such feedback without any additional compensation to you, and/or to disclose such feedback on a non-confidential basis or otherwise to anyone.`,
  },
  {
    title: 'Miscellaneous',
    content: `These Terms, together with our Privacy Policy and Pricing Terms, constitutes the entire agreement between the parties relating to the Services and all related activities. These Terms shall not be modified except in writing signed by both parties or by a new posting of these Terms issued by us. If any part of these Terms is held to be unlawful, void, or unenforceable, that part shall be deemed severed and shall not affect the validity and enforceability of the remaining provisions. The failure of IPInfo to exercise or enforce any right or provision under these Terms shall not constitute a waiver of such right or provision. Any waiver of any right or provision by IPInfo must be in writing and shall only apply to the specific instance identified in such writing. You may not assign these Terms, or any rights or licenses granted hereunder, whether voluntarily, by operation of law, or otherwise without our prior written consent. These Terms and any action related thereto will be governed by the laws of the State of California without regard to its conflict of laws provisions. The exclusive jurisdiction and venue of any action with respect to the subject matter of these Terms will be the state and federal courts located in Los Angeles, California, and each of the parties hereto waives any objection to jurisdiction and venue in such courts. Except for claims for injunctive relief by either party, any dispute or controversy arising out of, in relation to, or in connection with these Terms or your use of the Services shall be finally settled by binding arbitration in Los Angeles County, California under the then current rules of JAMS (formerly known as Judicial Arbitration & Mediation Services) by one (1) arbitrator appointed in accordance with such rules.`,
  },
  {
    title: 'Contact Us',
    content: `If you have any questions about these Terms or if you wish to make any complaint or claim with respect to the Services, please contact us at: support@ipinfo.io

When submitting a complaint, please provide a brief description of nature of your complaint and the specific services to which your complaint relates.`,
  },
]
