import { memo } from "react";
import { siteConfig } from "../config/site.config";

function Clients() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {siteConfig.clients.map((client) => (
          <div
            key={client}
            className="flex min-h-[112px] w-full flex-col items-center justify-center gap-3 overflow-hidden rounded border bg-white p-4 text-center shadow-sm shadow-soft transition-transform hover:scale-105"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-800 to-lime-500 text-sm font-black text-white">
              {client.slice(0, 2).toUpperCase()}
            </div>
            <div className="text-sm font-medium">{client}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(Clients);
