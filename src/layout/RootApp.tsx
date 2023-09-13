import SideNav from "../components/SideNav"
import RouterIndex from "../routes/Index"

function RootApp() {
   return (
      <>
         <SideNav />
         <RouterIndex />
      </>
   )
}

console.log("RootApp")

export default RootApp
