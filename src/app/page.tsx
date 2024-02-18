"use client"
import { useState } from "react";
import CustomWebcam from "./Components/CustomWebcam";
import Loading from "./Components/Loading";
import Hero from "./Components/Hero";
import Team from "./Components/Team";
import Message from "./Components/Message";
import Footer from "./Components/Footer";

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
      const button = document.getElementById('updateProductButton');
      if(button) {
        button.click()
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className={`${message && "overflow-hidden"} flex max-h-screen flex-col`}>
      {showCamera ?
        <CustomWebcam callback={handlerIA} close={() => setShowCamera(false)} />
      :
        isLoading ? 
          <Loading />
        :
          <>
            <Hero goToCamera={() => setShowCamera(true)} />
            <Team />
            <Footer />
          </>
      }
      <Message message={message} close={() => setMessage("")} />
    </main>
  );
}
