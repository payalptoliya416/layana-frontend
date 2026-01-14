import { useState } from "react";
import { Menu, X, MapPin, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import white_logo from "@/assets/white_logo.png";

/* ================= MENU ================= */

const menu = [
  { label: "Book Now", href: "/book" },
  { label: "Treatments", dropdown: "treatments", href: "/treatments" },
  { label: "Prices", dropdown: "prices", href: "/prices" },
  { label: "Memberships", dropdown: "memberships", href: "/memberships" },
  { label: "Spa Packages", dropdown: "spa", href: "/spa-packages" },
  { label: "Gift Cards", href: "/gift-cards" },
  { label: "Contact Us", href: "/contact" },
];

/* ================= DATA ================= */

const locations = [
  { label: "Belsize Park", slug: "belsize-park" },
  { label: "Finchley Central", slug: "finchley-central" },
  { label: "Muswell Hill", slug: "muswell-hill" },
];

const pricesData = [
  {
    location: "Finchley Central",
    services: [
      { label: "Massage & Beauty", slug: "massage-beauty" },
      { label: "Skin", slug: "skin" },
      { label: "Laser", slug: "laser" },
    ],
  },
  {
    location: "Muswell Hill",
    services: [{ label: "Massage & Beauty", slug: "massage-beauty" }],
  },
  {
    location: "Belsize Park",
    services: [{ label: "Massage & Beauty", slug: "massage-beauty" }],
  },
];

/* ================= COMPONENT ================= */

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
        <div className="container mx-auto px-6 py-[22px] flex items-center justify-between text-white">

          {/* Logo */}
          <Link to="/">
            <img src={white_logo} alt="Layana" className="w-[114px]" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-[25px] text-xs tracking-widest uppercase">
            {menu.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.dropdown)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link to={item.href} className="hover:text-[#e6c9a2] transition">
                  {item.label}
                </Link>

                {item.dropdown === "treatments" && activeDropdown === "treatments" && (
                  <DesktopLocations baseUrl="/treatments" />
                )}

                {item.dropdown === "memberships" && activeDropdown === "memberships" && (
                  <DesktopLocations baseUrl="/memberships" />
                )}

                {item.dropdown === "spa" && activeDropdown === "spa" && (
                  <DesktopLocations baseUrl="/spa-packages" />
                )}

                {item.dropdown === "prices" && activeDropdown === "prices" && (
                  <DesktopPrices />
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Location */}
          <div
            className="relative hidden lg:block"
            onMouseEnter={() => setActiveDropdown("location")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-2 text-xs tracking-widest hover:text-[#e6c9a2]">
              <MapPin size={14} />
              Choose Location
            </button>

            {activeDropdown === "location" && (
              <DesktopLocations baseUrl="/locations" />
            )}
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="lg:hidden bg-black/85 text-white px-6 py-6 space-y-4">
          {menu.map((item) => (
            <div key={item.label}>
              <button
                onClick={() =>
                  setActiveDropdown(activeDropdown === item.dropdown ? null : item.dropdown || null)
                }
                className="w-full flex justify-between items-center uppercase tracking-widest text-sm py-2"
              >
                <span>{item.label}</span>
                {item.dropdown && <ChevronDown size={14} />}
              </button>

              {item.dropdown === "treatments" && activeDropdown === "treatments" && (
                <MobileLocations baseUrl="/treatments" />
              )}

              {item.dropdown === "memberships" && activeDropdown === "memberships" && (
                <MobileLocations baseUrl="/memberships" />
              )}

              {item.dropdown === "spa" && activeDropdown === "spa" && (
                <MobileLocations baseUrl="/spa-packages" />
              )}

              {item.dropdown === "prices" && activeDropdown === "prices" && (
                <MobilePrices />
              )}

              {/* {!item.dropdown && (
                <Link to={item.href} className="block pl-4 py-2 text-sm">
                  Go
                </Link>
              )} */}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}

/* ================= DESKTOP DROPDOWNS ================= */

const DesktopLocations = ({ baseUrl }: { baseUrl: string }) => (
  <div className="absolute left-full -translate-x-1/2 mt-2 w-[175px] bg-white rounded-b-xl shadow-xl overflow-hidden">
    {locations.map((loc) => (
      <Link
        key={loc.slug}
        to={`${baseUrl}/${loc.slug}`}
        className="block px-3 py-2 text-xs text-black hover:bg-[#f6efec]"
      >
        {loc.label}
      </Link>
    ))}
  </div>
);

const DesktopPrices = () => (
  <div className="absolute left-full -translate-x-1/2 mt-2 w-[175px] bg-white rounded-b-xl shadow-xl overflow-hidden">
    {pricesData.map((block) => (
      <div key={block.location} className="border-b last:border-0">
        <div className="px-2 py-2 font-medium text-black">
          {block.location}
        </div>
        {block.services.map((s) => (
          <Link
            key={s.slug}
            to={`/prices/${block.location.toLowerCase().replace(/ /g, "-")}/${s.slug}`}
            className="block px-3 py-2 text-xs text-black hover:bg-[#f6efec]"
          >
            {s.label}
          </Link>
        ))}
      </div>
    ))}
  </div>
);

/* ================= MOBILE DROPDOWNS ================= */

const MobileLocations = ({ baseUrl }: { baseUrl: string }) => (
  <div className="ml-4 mt-2 space-y-2">
    {locations.map((loc) => (
      <Link
        key={loc.slug}
        to={`${baseUrl}/${loc.slug}`}
        className="block text-sm text-white/80"
      >
        {loc.label}
      </Link>
    ))}
  </div>
);

const MobilePrices = () => (
  <div className="ml-4 mt-2 space-y-3">
    {pricesData.map((block) => (
      <div key={block.location}>
        <div className="text-sm font-semibold">{block.location}</div>
        {block.services.map((s) => (
          <Link
            key={s.slug}
            to={`/prices/${block.location.toLowerCase().replace(/ /g, "-")}/${s.slug}`}
            className="block text-sm text-white/80 ml-3"
          >
            {s.label}
          </Link>
        ))}
      </div>
    ))}
  </div>
);
