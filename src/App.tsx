import { TimerIcon } from "lucide-react";
import { Heading } from "./components/Heading";

import "./styles/global.css";
import "./styles/theme.css";

function App() {
  return (
    <>
      <Heading>
        Olá mundo 1
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
        temporibus possimus consectetur aliquid eius non commodi iusto.
        Accusamus modi voluptas alias nam. Omnis ipsam minima explicabo
        repellendus iure deleniti deserunt.
      </p>
    </>
  );
}

export default App;
