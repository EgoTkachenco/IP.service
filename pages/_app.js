import { useState, useEffect } from 'react'
import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'
import { ThemeProvider } from 'styled-components'
import ModalContext from '@/utils/modalContext'
import AuthContext from '@/utils/authContext'
import Modals from '@/components/modals'
import { observer } from 'mobx-react-lite'
import AuthStore from '@/store/AuthStore'
import Script from 'next/script'
import { GA_TRACKING_ID, GTM_TRACKING_ID } from '@/utils/ga'

const App = observer(({ Component, pageProps, router }) => {
  const [modal, setModal] = useState(null)
  const [isLogged, setIsLogged] = useState(false)
  const { user, relog } = AuthStore

  useEffect(() => {
    if (user && !isLogged) {
      setIsLogged(true)
    } else {
      relog()
        .then(() => setIsLogged(true))
        .catch(() => setIsLogged(false))
    }
  }, [user, router.asPath])

  // check url and open reset password token
  useEffect(() => {
    const { reset_password } = router.query
    if (reset_password) setModal('reset-password-code')
  }, [router.query])

  return (
    <>
      {/* <!-- Chatra {literal} --> */}
      <Script strategy="beforeInteractive">
        {`(function(d, w, c) {
        w.ChatraID = 'hgbpDrSJigQFvMAiR';
        var s = d.createElement('script');
        w[c] = w[c] || function() {
            (w[c].q = w[c].q || []).push(arguments);
        };
        s.async = true;
        s.src = 'https://call.chatra.io/chatra.js';
        if (d.head) d.head.appendChild(s);
    })(document, window, 'Chatra');`}
      </Script>
      {/* <!-- /Chatra {/literal} --> */}
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="beforeInteractive"
      ></Script>
      <Script strategy="beforeInteractive">
        {`
window.dataLayer = window.dataLayer || []; 
function gtag(){window.dataLayer.push(arguments)}
gtag('js', new Date()); 
gtag('config', '${GA_TRACKING_ID}');
			`}
      </Script>
      {/* <!-- Google Tag Manager --> */}
      <Script strategy="beforeInteractive">
        {`
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_TRACKING_ID}');
			`}
      </Script>
      {/* <!-- End Google Tag Manager --> */}
      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_TRACKING_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}
      <ThemeProvider theme={theme}>
        <AuthContext.Provider value={{ isLogged, setIsLogged }}>
          <ModalContext.Provider value={{ modal, openModal: setModal }}>
            <GlobalStyles />
            <Component {...pageProps} />
            <Modals />
          </ModalContext.Provider>
        </AuthContext.Provider>
      </ThemeProvider>
    </>
  )
})

export default App
