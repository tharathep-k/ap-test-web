export default function InputErrorMessage({ message, placeholder }) {
    return <div>{placeholder} <span className="text-xs text-red-600">{message}</span></div>
  }
  