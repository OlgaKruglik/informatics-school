import { useState } from "react";


interface Props {

 title:string;

 children:React.ReactNode;

}


export default function LessonMenu({
 title,
 children
}:Props){


 const [open,setOpen] = useState(false);



 return (

  <div className="lesson-menu">


    <button
      className="lesson-title"
      onClick={()=>setOpen(!open)}
    >

      {title}

      <span>
        {open ? "▲" : "▼"}
      </span>


    </button>



    {
      open &&

      <div className="lesson-content">

        {children}

      </div>
    }


  </div>

 )

}
