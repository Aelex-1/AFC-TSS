import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import appCss from '../styles.css?url'
import { NotFound } from '#/components/NotFound'
import Header from '#/components/Header'
import Footer from '#/components/Footer'

const SITE_URL = "https://arthursfriedchicken.com/"
const SITE_NAME = "Arthur's Fried Chicken"
const TITLE = "Arthur's Fried Chicken - Home of Crispy and Delicious Fried Chicken"
const DESCRIPTION = "Welcome to Arthur's Fried Chicken, your destination for delicious and crispy fried chicken!"
const OG_IMAGE = '/seoimage.jpg'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8', },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: TITLE },
      { name: 'description', content: DESCRIPTION },
      { name: 'keywords', 
        content: 'fried chicken, fast food, chicken restaurant, AFC, crispy chicken, grilled chicken, chicken sisig, unli rice, fried chicken franchise, philippine fried chicken, afc midsayap, afc menu with price, afc chicken, afc restaurant near me, afc fried chicken' },
      { name: 'theme-color', content: '#ffffff' },

      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:url', content: SITE_URL },
      { property: 'og:locale', content: 'en_PH' },
      { property: 'og:title', content: TITLE },
      { property: 'og:description', content: DESCRIPTION },
      { property: 'og:image', content: OG_IMAGE },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: `${SITE_NAME} website image` },

      // Twitter/X 
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: TITLE },
      { property: 'twitter:description', content: DESCRIPTION },
      { property: 'twitter:image', content: OG_IMAGE },
      { property: 'twitter:url', content: SITE_URL },

    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'canonical', href: SITE_URL },

      { rel: 'apple-touch-icon', sizes: '180x180', href: '/logos/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/logos/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/logos/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/logos/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest', color: '#ffffff' },
      { rel: 'icon', href: '/logos/favicon.ico' },
    ],
    scripts: [
      {
        children: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','G-QJKKQDY9TR');
        `,
      },
    ],
  }),
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <div className="min-h-dvh grid grid-rows-[auto_1fr_auto] min-w-0">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </RootDocument>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
