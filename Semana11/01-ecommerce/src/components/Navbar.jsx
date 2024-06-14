import {
  Disclosure,
  Menu,
  Transition,
  DisclosureButton,
} from "@headlessui/react";

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-sky-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* {boton responsive para sm} */}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Abrir Menú</span>
                  {/* si esta abierto, enseña la X si esta cerrado enseña la 🍔 */}
                  {open ? (
                    <i className="fa-solid fa-xmark"></i>
                  ) : (
                    <i className="fa-solid fa-bars"></i>
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
