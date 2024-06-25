import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdDownloadForOffline } from "react-icons/md";




const Links = () => {
    const iconClass = "flex flex-col items-center justify-center gap-2 hover:text-greylight-100"
  return (
    <>
    <div className="text-5xl font-bold mb-10 flex flex-col items-center justify-center">Links</div>
    
        <div className='grid grid-cols-3 sm:flex flex-row items-center justify-center gap-16 text-sm font-bold'>
            <a target="_blank" className={iconClass} href="https://github.com/rahul1841"><FaGithub size={40}/>Github</a>
            <a target="_blank" className={iconClass} href="https://twitter.com/KumarRahul3748"><FaXTwitter size={40}/>Twitter</a>
            <a target="_blank" className={iconClass} href="https://leetcode.com/u/rahul2004kumar14/"><SiLeetcode size={40}/>LeetCode</a>
            <a target="_blank" className={iconClass} href="https://www.linkedin.com/in/rahul-kumar-716045207/"><FaLinkedin size={40}/>LinkedIn</a>
            <a href="mailto:rahul2004kumar14@gmail.com" className={iconClass} ><MdEmail size={40}/>Email</a>
            <a href="./resume.pdf" download="resume.pdf" className={iconClass} ><MdDownloadForOffline size={40}/>Resume</a>
        </div>
   
    </>
  )
}

export default Links