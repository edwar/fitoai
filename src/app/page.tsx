"use client"
import { useState } from "react";
import CustomWebcam from "@/app/Components/CustomWebcam";
import Loading from "@/app/Components/Loading";
import Hero from "@/app/Components/Hero";
import Team from "@/app/Components/Team";
import Message from "@/app/Components/Message";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";

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

  
  return (<>
    {showCamera && <CustomWebcam callback={handlerIA} close={() => setShowCamera(false)} />}
    {isLoading && <Loading />}
    <header>
      <Navbar />
      <Hero goToCamera={() => setShowCamera(true)} />
    </header>
    <main className={`${message && "overflow-hidden"} flex max-h-screen flex-col`}>
      <Team />
      <Footer />
      <Message message={message} close={() => setMessage("")} />
    </main>
  </>);
}
