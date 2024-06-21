import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const FormUser = () => {
  const styleTab = "py-1 px-3 font-semibold text-black data-[selected]:border-blue-500 data-[selected]:border-b-4 data-[hover]:border-blue-500 data-[focus]:border-b-4";

  return (
    <TabGroup>
      <TabList className="flex gap-4">
        <Tab className={styleTab}>
          Ingresa
        </Tab>
        <Tab className={styleTab}>
          Registrate
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <div className="min-w-96 p-3 mb-4 block">
            <div>
              <label className="text-sm font-semibold mb-1 block">Email</label>
              <input className="border-2 p-1 h-12 w-full"  placeholder="Email Login" />
            </div>
            <div className="mb-2">
              <label className="text-sm font-semibold mb-1 block">
                Contraseña
              </label>
              <input className="border-2 p-1 h-12 w-full"/>
            </div>
            <button className="bg-sky-700 w-full h-16 p-3 text-center text-white font-semibold mb-3 hover:bg-sky-800">
              Ingresa
            </button>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="min-w-96 p-3 mb-4 block">
            <div>
              <label className="text-sm font-semibold mb-1 block">Email</label>
              <input className="border-2 p-1 h-12 w-full"  placeholder="Email Register" />
            </div>
            <div className="mb-2">
              <label className="text-sm font-semibold mb-1 block">
                Contraseña
              </label>
              <input className="border-2 p-1 h-12 w-full" />
            </div>
            <button className="bg-sky-700 w-full h-16 p-3 text-center text-white font-semibold mb-3 hover:bg-sky-800">
              Registrate
            </button>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
};

export default FormUser;
