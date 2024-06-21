import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const FormUser = () => {
  return (
    <TabGroup>
      <TabList className="flex gap-4">
        <Tab className="rounded-full py-1 px-3 text-sm/6 font-semibold text-black focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white">
          Ingresa
        </Tab>
        <Tab className="rounded-full py-1 px-3 text-sm/6 font-semibold text-black focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white">
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
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
};

export default FormUser;
