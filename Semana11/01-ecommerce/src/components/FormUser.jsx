import { useRef } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";


const FormUser = ({ handleLoginEmail, handleRegisterEmail }) => {
  const styleTab = "py-1 px-3 font-semibold text-black data-[selected]:border-blue-500 data-[selected]:border-b-4 data-[hover]:border-blue-500 data-[focus]:border-b-4";

  //useRef, veanlo como un id; cuando conviene, cuando es poquito
  const inputEmailLogIn = useRef();
  const inputPassLogIn = useRef();
  const inputEmailRegister = useRef();
  const inputPassRegister = useRef();

  const handleLogin = () => {
    // console.log(inputEmailLogIn.current.value);
    const email = inputEmailLogIn.current.value;
    const password = inputPassLogIn.current.value;
    handleLoginEmail(email, password);
  }

  const handleRegister = () => {
    const email = inputEmailRegister.current.value;
    const password = inputPassRegister.current.value;
    handleRegisterEmail(email, password);
  }

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
        {/* login */}
        <TabPanel>
          <div className="min-w-96 p-3 mb-4 block">
            <div className="mb-2">
              <label className="text-sm font-semibold mb-1 block">Email</label>
              <input className="border-2 p-1 h-12 w-full"  placeholder="Email Login" ref={inputEmailLogIn}/>
            </div>
            <div className="mb-2">
              <label className="text-sm font-semibold mb-1 block">
                Contraseña
              </label>
              <input className="border-2 p-1 h-12 w-full" type="password" ref={inputPassLogIn}/>
            </div>
            <button className="bg-sky-700 w-full h-16 p-3 text-center text-white font-semibold mb-3 hover:bg-sky-800" onClick={handleLogin}>
              Ingresa
            </button>
          </div>
        </TabPanel>
        {/* register */}
        <TabPanel>
          <div className="min-w-96 p-3 mb-4 block">
            <div className="mb-2">
              <label className="text-sm font-semibold mb-1 block">Email</label>
              <input className="border-2 p-1 h-12 w-full"  placeholder="Email Register" ref={inputEmailRegister} />
            </div>
            <div className="mb-2">
              <label className="text-sm font-semibold mb-1 block">
                Contraseña
              </label>
              <input className="border-2 p-1 h-12 w-full" type="password" ref={inputPassRegister} />
            </div>
            <button className="bg-sky-700 w-full h-16 p-3 text-center text-white font-semibold mb-3 hover:bg-sky-800" onClick={ handleRegister }>
              Registrate
            </button>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
};

export default FormUser;
