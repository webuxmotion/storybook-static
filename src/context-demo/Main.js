import { useAlert } from "../alert/AlertContext";

export default function Main() {
  const { show, hide, visible } = useAlert(); 

  return (
    <>
      <h1>Hi from Context</h1>
      <button 
        onClick={visible ? hide : show} 
        className="btn btn-success"
      >Show alert</button>
    </>
  )
}