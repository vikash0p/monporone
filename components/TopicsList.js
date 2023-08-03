import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi';

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  }
  catch (error) {
    console.log("Error loading Topics", error)
  }
}

const TopicsList = async () => {

 
    let crudbd = await getTopics();
    console.log(crudbd)
        


 





  return (
    <>
      {
        crudbd.topics.map((value, index) => {
          return (
            <div className='my-2' key={index}>
              <div className='flex justify-between items-start border border-blue-400 p-4 rounded-md'>
                <div>
                  <h1>{value.title} </h1>
                  <h1>{value.description} </h1>
                </div>
                <div className='flex gap-2'>
                  <RemoveBtn id={value._id} />
                  <Link href={`editTopic/${value._id}`}><HiPencilAlt className='text-2xl text-blue-600' /> </Link>
                </div>

              </div>
            </div>
          )
        })
      }
    </>

  )
}

export default TopicsList
