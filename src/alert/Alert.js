import { useAlert } from './AlertContext';

export default function Alert() {
  const { visible } = useAlert();

  if (!visible) return null;

  return (
    <div className="alert alert-danger mt-3">
      This is danger message!
    </div>
  )
}