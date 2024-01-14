import { Background } from "./Background";
import { Table } from "./Table";
import { Modal } from "./Modal";
import { initJuno } from "@junobuild/core";
import { Auth } from "./Auth";
import {Stats} from "./Stats"
import { useEffect } from "react";

function App() {
  // TODO: STEP_1_INITIALIZATION
  useEffect(() => {
    (async () =>
      await initJuno({
        // satelliteId: "nizxm-piaaa-aaal-adm4a-cai",
        satelliteId: "okmkt-7yaaa-aaaal-adm4a-cai",
      }))();
  }, []);

  return (
    <>
      <div className="isolate bg-white">
        <main>
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto  pt-16">
              <div className="text-center">
                <Stats/>

                <Auth>
                  <Table />
                  <Modal />
                </Auth>
              </div>
            </div>
            <Background />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
