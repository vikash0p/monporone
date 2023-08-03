"use client";
import { useRouter } from 'next/navigation';
import React from 'react'
import { MdDelete } from 'react-icons/md';

const RemoveBtn = ({ id }) => {
  const router = useRouter()
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure you want to Remove?");
    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();

      }
    }
  }
  return (
    <button type='button' onClick={removeTopic} >
      <MdDelete className='text-2xl text-red-500' />
    </button>
  )
}

export default RemoveBtn
