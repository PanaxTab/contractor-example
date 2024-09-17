import React from 'react'

export const CoreValues = () => {
  return (
    <section className='bg-neutral-950 text-white'>
        <div className="grid grid-cols-1 md:grod-cols-3">
            {
                data.map((item,index)=>{
                    const isSecondItem = index === 1;

                    return(
                        <div key={item.title} className={`flex flex-col items-center p-8 ${isSecondItem && "bg-primary text-black"}`}>
                            
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
};

const data = [
    {
        img: "/excellence.png",
        title: "Excellence",
        description:
            "Commiting to superior craftsmanship and attention to detail in everything"
    },
    {
        img: "/innovation.png",
        title: "Innovation",
        description:
            "Embracing cutting-edge technologies and creative solutions to deliver industry leading performance"
    },
    {
        img: "/customer.png",
        title: "Customer Focus",
        description:
            "Building strong relationships through clear communication, personal"
    },

]
