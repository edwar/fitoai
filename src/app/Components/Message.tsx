import React from 'react'

interface Props {
    message: string
    close: () => void
}
const Message = ({ message, close }: Props) => {
  return (
    message !== "" && <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
    <div className="p-4 border w-full sm:w-1/2 m-5 shadow-lg rounded-md bg-white">
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-5">Recomendaciones</h3>
        <div className="text-balance">
            <div className="mt-2">
            <p className="text-lg text-gray-500">{message}</p>
            </div>
            <div className="flex justify-center mt-4">
            <button
                onClick={close}
                className="px-4 py-2 bg-red-700 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
                Cerrar
            </button>

            </div>
        </div>
    </div>
  </div>
  )
}

export default Message
