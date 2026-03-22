const items = [
  {name: 'Shankar', text: 'Excellent service and neat installation.'},
  {name: 'Priya', text: 'Very professional team and on-time.'},
  {name: 'Arjun', text: 'Good quality nets, recommended.'},
  {name: 'Latha', text: 'Quick response and reliable.'},
  {name: 'Rajesh', text: 'Affordable pricing with great finish.'},
  {name: 'Sonal', text: 'Friendly staff and timely completion.'}
]

export default function Testimonials(){
  return (
    <div>
      <div className="overflow-x-auto hide-scrollbar snap-x py-2 md:hidden">
        <div className="flex gap-4 w-max px-4 flex-nowrap">
          {items.map((t, i) => (
            <div key={i} className="snap-start min-w-[260px] bg-white border rounded-lg p-4 shadow-soft transform transition-transform hover:scale-105 overflow-hidden">
              <p className="text-sm text-gray-700">"{t.text}"</p>
              <div className="mt-3 font-semibold">{t.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:block mt-4">
        <div className="grid grid-cols-3 gap-4">
          {items.map((t, i) => (
            <div key={i} className="p-4 border rounded-lg bg-white shadow-soft transform transition-transform hover:scale-105 overflow-hidden">
              <p className="text-sm text-gray-700">“{t.text}”</p>
              <div className="mt-3 font-semibold">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
