import React from "react"
import ClassComponent  from "../stateManagement/ClassComponents"
import FunctionalComponent from "../stateManagement/FunctionalComponent"
import GlobalStateContext from "../stateManagement/GlobalStateContext"
import {MyProvider} from "../stateManagement/Context"
//import Redux from "../stateManagement/Redux/Redux"

const Home = () => {
  return (
    <>
      <MyProvider>
      <ClassComponent />
      <FunctionalComponent />
      < GlobalStateContext />
     
      </MyProvider>
    </>
  )
}

export default Home