'use client'
import React,{FC,useState} from "react"
import Heading from "./utils/Heading"
import Header from "./components/Header";
import Hero from "./components/Route/Hero"

interface Props{}

const Page: FC <Props> = (props)=>{
  const [open, setOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(0)
const [route,setRoute] = useState("Login")

  return(
    <div>
     <Heading title="lms platform" description="lms is a platform for student to learn programming and get help from the educators" keywords="programming,coding,MERN,Machine Learning,fullstack"/>
     <Header open={open} activeItem={activeItem} setOpen={setOpen} setRoute={setRoute} route={route}/>
     <Hero/>
    </div>
  )
}

export default Page