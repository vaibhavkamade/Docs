import React from 'react';
import { FaFileAlt } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";

function Cards({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={0.1} className='relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/90 px-8 py-10 text-white overflow-hidden'>
        <FaFileAlt/>
        <p className='text-sm leading-tight text-semibold mt-5'>{data.desc}</p>
        <div className='footer absolute bottom-0  w-full  left-0  '>
            <div className='flex items-center justify-between px-8 py-3 mb-5'>
                <h5>{data.filesize}</h5>
                <span className='w-7  h-7 bg-zinc-600 rounded-full flex items-center justify-center'>

                {data.close ? <IoIosCloseCircle/> : <FaFileDownload size=".7em" color='#fff' />}
                
                </span>
                
            </div>

            {data.tag.isOpen && (
                <div className={`tag w-full h-10 py-4 ${data.tag.tagColor === "green" ? "bg-green-600" : "bg-blue-600"} flex items-center justify-center`}>
                    <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                </div>
            )}
            


        </div>
    </motion.div>
  )
}

export default Cards