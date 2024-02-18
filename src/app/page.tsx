"use client"
import { useState } from "react";
import CustomWebcam from "./Components/CustomWebcam";
import Loading from "./Components/Loading";
import Camera from "./Icons/Camera";

export default function Home() {
  const [showCamera, setShowCamera] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const handlerIA = async (base64: string) => {
    setShowCamera(false)
    setIsLoading(true)
    try {
      const response = await fetch("/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ base64 })
      })
      const message = await response.text();
      setMessage((state) => state + message);
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      {showCamera ?
        <CustomWebcam callback={handlerIA} close={() => setShowCamera(false)} />
      :
        isLoading ? 
          <Loading />
        :
          <>
            {message ? 
              <p>{message}</p>
            :
              <div className="flex w-screen h-screen justify-center items-center">
                <button
                  onClick={() => setShowCamera(true)}
                  type="button"
                  className="flex gap-3 items-center text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Ver camara <Camera />
                </button>
              </div>
            }
          </>
      }
    </main>
  );
}
