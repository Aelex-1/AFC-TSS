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
      { name: 'keywords', content: 'fried chicken, fast food, chicken restaurant, AFC, crispy chicken, grilled chicken, chicken sisig, unli rice, fried chicken franchise, philippine fried chicken', },
      { name: 'theme-color', content: '#ffffff' },

      { name: 'og:type', content: 'website' },
      { name: 'og:site_name', content: SITE_NAME },
      { name: 'og:url', content: SITE_URL },
      { name: 'og:locale', content: 'en_PH' },
      { name: 'og:title', content: TITLE },
      { name: 'og:description', content: DESCRIPTION },
      { name: 'og:image', content: OG_IMAGE },
      { name: 'og:image:width', content: '1200' },
      { name: 'og:image:height', content: '630' },
      { name: 'og:image:alt', content: `${SITE_NAME} website image` },

      // Twitter/X 
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: TITLE },
      { name: 'twitter:description', content: DESCRIPTION },
      { name: 'twitter:image', content: OG_IMAGE },
      { name: 'twitter:url', content: SITE_URL },

    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'canonical', href: SITE_URL },

      { rel: 'apple-touch-icon', sizes: '180x180', href: '/logos/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/logos/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/logos/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/logos/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest', color: '#fffff' },
      { rel: 'icon', href: '/logos/favicon.ico' },
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
