"use client"
import { useState } from "react";
import CustomWebcam from "./Components/CustomWebcam";

export default function Home() {
  const [showCamera, setShowCamera] = useState(true)
  const [message, setMessage] = useState("")
  const handlerIA = async (base64: string) => {
    setShowCamera(false)
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
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      {showCamera ?
        <CustomWebcam callback={handlerIA} />
      :
        <p>{message}</p>
      }
    </main>
  );
}
