import { DeleteButton } from "./buttons/delete-button/DeleteButton";
import { DropdownButton1 } from "./buttons/dropdown-button-1/DropdownButton1";
import { DropdownButton2 as Button} from "./buttons/dropdown-button-2/DropdownButton2";
import { LoaderButton1 } from "./buttons/loader-button-1/LoaderButton1";
import { SendButton } from "./buttons/send-button/SendButton";

function App() {
  return (
    <>
      <Button /><br/>
      <DropdownButton1/>
      <LoaderButton1/>
      <SendButton/>
      <DeleteButton/>
    </>
  );
}

export default App;
