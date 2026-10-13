import { createFileRoute, Link } from '@tanstack/react-router'
import { MENUCATEGORY, MENUDATA } from '#/content/menuContent'
import { seo } from '#/utils/seo';

import { GiChickenLeg } from "react-icons/gi";
import { MdOutdoorGrill } from "react-icons/md";
import { GiHotSurface } from "react-icons/gi";
import { MdTakeoutDining } from "react-icons/md";

export const Route = createFileRoute('/menu')({
  head: () => ({
    meta: [
      ...seo({
        title:  "AFC | Menu",
        description: "Explore the AFC menu featuring our signature fried chicken, value meals, sides, and other Sulit Sarap favorites.",
        link: "/menu"
      })
    ],
    links: [
      {
        rel: "preload",
        href: "./images/menu/menu-poster.webp",
        as: "image",
        fetchPriority: "high",
      }
    ]
  }),
  component: RouteComponent,
})

interface MenuButtonProps {
  category: string;
  icon: React.ReactNode;
}

const MenuButtons = ({ category, icon }: MenuButtonProps) => {
  return (
    <button className="shrink-0 font-semibold tracking-tight">
      <a
        href={`#${category}`}
        className="button-secondary text-sm px-4 py-2 md:px-4.5 md:py-2.5 gap-x-1 capitalize"
      >
        {icon}
        {category}
      </a>
    </button>
  )
}

const ItemCard = ({ category }: { category?: string }) => {
  return (
    <div className='flex flex-col my-5 items-center justify-between gap-y-4 sm:grid sm:gap-y-8 sm:place-items-center sm:grid-cols-2 lg:grid-cols-3'>
      {MENUDATA
        .filter(entry => (entry.itemCategory === `${category}`))
        .map((entry, index) => (
          <div
            key={index}
            className='flex flex-row items-center p-2 max-w-100 sm:flex-col sm:min-w-60 sm:w-70 sm:h-115 md:w-80 md:h-120  bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:border-(--color-secondary)'
          >

            <div className='flex flex-2 flex-col gap-y-2 pr-2 sm:pb-4 sm:px-4 sm:order-2'>
              <small className='hidden sm:block text-white font-semibold bg-(--color-secondary) px-2 py-1 w-fit rounded-md'>{entry.itemTag ? entry.itemTag : 'Solo'}</small>
              <span className='font-bold text-lg md:text-xl'>
                <span className='inline sm:hidden text-white text-sm font-semibold bg-(--color-secondary) px-1 py-0.5 mr-1 w-fit rounded-md'>
                  {entry.itemTag ? entry.itemTag : 'Solo'}
                </span>
                {entry.itemName}
              </span>
              <small className='text-gray-500 italic '>{entry.itemDescription}</small>
            </div>

            <img
              className='flex-1 h-30 w-auto aspect-square rounded-t-lg sm:order-1 sm:w-full sm:h-auto'
              src={entry.itemImage}
              alt={entry.itemName}
              loading="lazy"
            />
          </div>
        ))}
    </div>
  )
}

function RouteComponent() {
  return (
    <main className="min-w-0">
      <section>
        <video
          src="./videos/menu-video.mp4"
          width={1920}
          height={480}
          autoPlay muted loop playsInline
          poster='./images/menu/menu-poster.webp'
          className='h-60 w-full md:h-auto md:w-full object-cover block'>
        </video>
      </section>

      <section className='page-wrap pt-4 pb-8'>
        <div className='flex flex-col items-center justify-between gap-y-4'>
          <div className='text-center'>
            <h2 className='text-(--color-primary)'>SULIT SARAP MENU</h2>
            <span className='text-md md:text-lg font-medium text-gray-700'>Browse a selection of our items available at all AFC stores</span>
          </div>
          <div className='grid grid-cols-2 place-content-evenly gap-4 sm:w-2/3 sm:flex sm:flex-row sm:flex-wrap'>
            <MenuButtons category={MENUCATEGORY[0]} icon={<GiChickenLeg />} />
            <MenuButtons category={MENUCATEGORY[1]} icon={<MdOutdoorGrill />} />
            <MenuButtons category={MENUCATEGORY[2]} icon={<GiHotSurface />} />
            <MenuButtons category={MENUCATEGORY[3]} icon={<MdTakeoutDining />} />
          </div>
        </div>

        <div className=' text-center'>
          <hr className="my-4 border-gray-200" />
          <span className='block font-semibold text-lg text-gray-700 '>
            <span className='text-(--color-primary) mr-2'>
              Price varies.
            </span>
            Visit the nearest AFC location to view prices.
          </span>
          <button className=" mt-4 shrink-0 font-semibold tracking-tight">
            <Link
              to="/locations"
              className="button-primary text-sm px-3 py-1.5 md:px-4 md:py-2"
            >
              See Locations
            </Link>
          </button>
        </div>
      </section>

      <section className='bg-gray-100'>
        <div className='page-wrap pb-8'>
          {MENUCATEGORY.map((category, index) => (
            <div key={index} id={category}>
              <h2 className='text-(--color-primary) pt-8 uppercase'>{category}</h2>
              <hr className="border-gray-300" />
              <ItemCard category={category} />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
