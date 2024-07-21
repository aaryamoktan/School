import React from 'react'

const Studentloin = () => {
  return (
    <>
    <div className='w-full h-[80vh]'>
      <img className='w-full blur-sm  h-full brightness-50' src="https://s39613.pcdn.co/wp-content/uploads/2019/11/Implementing-active-learning-and-student-centered-pedagogy.jpg"/>
      <div className='w-[25%] h-[50vh] shadow-2xl bg-transparent absolute top-[250px] left-[600px]'>
        <h1 className='text-white text-3xl font-semibold font-serif ml-[100px]'>Login Form</h1>
        <form className='flex flex-col gap-5 w-fit h-[100vh] mt-[50px] bg'>
          <input type="text" placeholder='User_ID' className='w-[200%] h-[4vh] ml-[5px] rounded-lg'></input>
          <input type="password" placeholder='Password' className='w-[200%] h-[4vh] ml-[5px] rounded-lg' ></input>
          <button  className='w-[100%] bg-white h-[4vh] ml-[50%] rounded-lg'>Login</button> 
        </form>
        <p className='text-white absolute top-[70%] text-center font-serif text-lg'>Student Can see theri own progress and the result and other things by login with your User_Id and Password</p>
      </div>
      </div></>
  )
}

export default Studentloin