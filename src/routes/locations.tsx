import { Dropdown, DropdownItems } from '#/components/Dropdown'
// import DropdownContent from '#/components/DropdownItems'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { LOCATIONSDATA } from '#/content/locationContent'

import { FaUndo } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TbClockHour4Filled } from "react-icons/tb";

import { seo } from '#/utils/seo'

export const Route = createFileRoute('/locations')({
  head: () => ({
    meta: [
      ...seo({
        title: "AFC | Locations",
        description: "Find an AFC branch near you and discover our store locations, addresses, and operating hours across Mindanao.",
        link: "/locations"
      })
    ],
    links: [
      {
        rel: "preload",
        href: "./images/location-page.webp",
        as: "image",
        fetchPriority: "high",
      }
    ]
  }),
  component: RouteComponent,
})

const getCity = () => {
  const city = LOCATIONSDATA.map((location) => location.storeCity);

  const uniqueCity = city.reduce<Record<string, number>>((acc, item) => {
    acc[item] = (acc[item] ?? 0) + 1;
    return acc;
  }, {});

  return Object.entries(uniqueCity).map(([value, count]) => ({ value, count }));
}

const LocationsCard = ({ locationObject }: { locationObject: any }) => {
  return (
    <div className='grid grid-cols-[auto_1fr] bg-white p-4 rounded-lg border border-gray-300 gap-y-2'>
      <div className=''></div>
      <h4 className='text-(--color-primary)'>{locationObject.storeName}</h4>
      <FaLocationDot className='text-lg text-gray-700 mt-0.5 mr-2' />
      <a
        href={locationObject.storeMapLink}
        target="_blank"
        rel="noopener noreferrer"
        className='text-lg text-gray-700 hover:text-(--color-secondary)'>
        {[locationObject?.storeBuilding, locationObject?.storeStreet, locationObject?.storeCity, locationObject?.storeProvince, locationObject?.storeRegion].filter(Boolean).join(', ')}
        <FaExternalLinkAlt className="inline-block align-middle ml-2 mb-1" />
      </a>
      <TbClockHour4Filled className='text-lg text-(--color-secondary) mt-1' />
      <p className='text-(--color-secondary)'>{locationObject.storeOpenHour}AM to {locationObject.storeCloseHour}PM</p>
    </div>
  )
}


function RouteComponent() {
  const [selectedValue, setSelectedValue] = useState<string | null>(null)

  return (
    <main className="min-w-0">
      <section className="page-wrap-red py-8">
        <div className="split-section border border-gray-200 rounded-lg shadow-md bg-white ">

          <div className='split-media'>
            <img
              src="./images/location-page.webp"
              alt="Image of AFC Franchise"
              width={540}
              height={273}
              loading="eager"
              fetchPriority="high"
              className='w-full h-auto rounded-lg'
            />
          </div>

          <div className="split-content ">
            <h3 className="font-bold text-black">Craving delicious fried chicken? Find your nearest AFC branch below!</h3>
            <p className="text-black">
              AFC stores are open Monday to Sunday for dine-in and takeout. Certain holidays may affect this schedule.
            </p>
          </div>

        </div>
      </section>
      <section className="bg-gray-100 py-8">
        <div className='page-wrap'>
          <div className="w-full flex items-center justify-end">
            <p className='text-gray-400 mr-2'>Filter City: </p>
            <Dropdown
              buttonText={selectedValue ?? "-- Select a City --"}
              content={<>
                {
                  getCity().map((city) => (
                    <DropdownItems key={city.value} onClick={() => setSelectedValue(city.value)}>
                      {city.value} <span className='text-gray-500'> ({city.count}) </span>
                    </DropdownItems>
                  ))
                }
              </>} >
            </Dropdown>
            <div className='p-3 ml-2 bg-white rounded-lg border border-(--color-border)  shadow-(--shadow-sm) hover:bg-(--color-secondary) hover:text-white cursor-pointer'
              onClick={() => setSelectedValue(null)}>
              <FaUndo />
            </div>

          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-2 my-4'>
            {!selectedValue && LOCATIONSDATA.map((location) => (
              <LocationsCard key={location.storeName} locationObject={location} />
            ))}

            {selectedValue &&
              LOCATIONSDATA
                .filter((locations) => (locations.storeCity === selectedValue))
                .map((locations) => (
                  <LocationsCard key={locations.storeName} locationObject={locations} />
                ))}
          </div>
        </div>
      </section>


    </main>
  )
}
