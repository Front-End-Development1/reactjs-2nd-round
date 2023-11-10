import React from "react"
import ClassComponent  from "../stateManagement/ClassComponents"
import FunctionalComponent from "../stateManagement/FunctionalComponent"
import GlobalStateContext from "../stateManagement/GlobalStateContext"
import {MyProvider} from "../stateManagement/Context"
import APIs from "../CallAPI/APIs"
import EffectHook from "../Hooks/EffectHook"
import RefHook from "../Hooks/RefHook"
import StateHook from "../Hooks/StateHook"

//import Redux from "../stateManagement/Redux/Redux"

const Home = () => {
  return (
    <>
      <MyProvider>
      <ClassComponent />
      <FunctionalComponent />
      < GlobalStateContext />
      < APIs />
      <EffectHook />
      <RefHook />
      <StateHook />
      </MyProvider>
    </>
  )
}

export default Home