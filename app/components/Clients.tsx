import Image from 'next/image'

const clients = [
  {name: 'IKEA', img:'/IKEA_Client.webp'},
  {name: 'Satthva', img:"/sattva.webp"},
  {name: 'Adhitya Enclave', img: '/Adhitya_Enclave.webp'},
  {name: 'Green Meadows',img:"/Green_meadows.webp"},
  {name: 'Sunrise Apartments', img:"/Sunrise_Apartments.webp"}
]

import { memo } from 'react'

function Clients(){
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {clients.map((c) => (
          <div key={c.name} className="flex flex-col items-center gap-3 p-4 bg-white border rounded shadow-sm w-full shadow-soft transform transition-transform hover:scale-105 overflow-hidden">
            {c.img ? (
              <div className="relative w-24 h-16">
                <Image src={c.img} alt={c.name} fill className="object-contain" unoptimized loading="lazy" />
              </div>
            ) : (
              <div className="w-16 h-16 bg-gray-200 rounded" />
            )}
            <div className="text-sm font-medium text-center">{c.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default memo(Clients)
