import Display from "./components/Display";
import TodoList from "./components/TodoList";

export default function Home() {
   return (
      <>
         <div className=' '>
            <TodoList />
            <Display />
         </div>
      </>
   );
}
