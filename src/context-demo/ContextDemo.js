import { AlertProvider } from "../alert/AlertContext";
import Alert from "../alert/Alert";
import Main from "./Main";

export default function ContextDemo() {

  return (
    <AlertProvider>
      <div className="pt-5">
        <Main />
        <Alert />
      </div>
    </AlertProvider>
  )
}