import React from "react";

const TodoList = () => {
   return (
      <div className='flex flex-col justify-center items-center py-10'>
         <form>
            <div>
               <h1 className='capitalize font-semibold text-center py-4 text-3xl'>TodoList</h1>
            </div>
            <div className='py-[2px] mb-4'>
               <label className='w-full flex mb-2 text-lg border-b-[2px] border-white ' htmlFor='text'>
                  Add List
               </label>
               <input
                  className='h-10 sm:w-[250px] md:w-[500px] px-2 outline-none text-black'
                  type='text'
                  placeholder='what is your TodoList?'
               />
               <button className='bg-blue-600 h-10 capitalize px-4' type='submit'>
                  add
               </button>
            </div>
            <div>
               <label className='w-full flex mb-2 text-lg border-b-[2px] border-white' htmlFor='text'>
                  List Displayed
               </label>
            </div>
            <div>
               <label className='w-full flex mb-2 text-lg border-b-[2px] border-white' htmlFor='text'>
                  Completed Task
               </label>
            </div>
         </form>
      </div>
   );
};

export default TodoList;
