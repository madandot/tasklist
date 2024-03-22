import Navbar from "./components/Navbar";
import "./components/Navbar.css";
export default function Home() {
   return (
      <>
         <div className='one md:max-w-7xl mx-auto px-4 py-8 md:px-0'>
            <Navbar />
         </div>
      </>
   );
}
