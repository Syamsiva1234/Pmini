import React, { useState } from 'react'
import './OurScience.css'


const OurScience = () => {

    let [state, setState] = useState({
        About: true,
        Intimations: false,
        Abstracts: false,
        Device: false,
        Milesstones: false
    })
    let { About, Intimations, Abstracts, Device, Milestones } = state
    let stateHndler = (event) => {
        console.log(event.target.name)
        // const value = event.target.value;
        setState({
            About: event.target.name === 'About' ? true : false,
            Intimations: event.target.name === 'Intimations' ? true : false,
            Abstracts: event.target.name === 'Abstracts' ? true : false,
            Device: event.target.name === 'Device' ? true : false,
            Milestones: event.target.name === 'Milestones' ? true : false,
            // [event.target.name]: false
        });

    }
    return (
        <div className='container p-2 p-md-5 m-auto' >

            {About && (<><h1 className='text-white'>About</h1>
                <p className='text-white'>This paper presents the life and works of the famous doctor, hygienist, folklore researcher and
                    sanitary mentor, Charles Laugier, whose contribution to the development of the medical system of
                    Oltenia marked the beginning of the 20th century. He is noted for his research in hygiene, in the
                    treatment of some diseases like: tuberculosis, malaria, pellagra, and also as the founder of numerous
                    societies which contributed to the cultural and scientific development of the region of Oltenia and even
                    of its small localities.
                </p>
                <br></br>
                <p style={{ color: "white" }}> He is noted for his research in hygiene, in the
                    treatment of some diseases like: tuberculosis, malaria, pellagra, and also as the founder of numerous
                    societies which contributed to the cultural and scientific development of the region of Oltenia and even
                    of its small localities.</p>
                <br></br>
                <br></br>
            </>)}

            {
                Abstracts && (
                    <div>
                        <h3 className='text-white'>Abstracts</h3>
                        <p className='text-white'>ng a loriing a busy day in the hospital, they are still bombarded with reports that range about the patient, the cause of the issue and the results of the examinations being taken. Having to go through a lot of these while working in a busy hospital can also take its toll. But all that could change or at least lessened. The key to making it less of a deal having to write a lot of reports especially medical reports is to make a summary of them. Basically by making a medical summary report</p>
                    </div>
                )
            }
            {
                Intimations && (
                    <div>
                        <h3 className='text-white'>Intimations</h3>
                        <p className='text-white'>Doctors and nurses are no strangers Oltenia marked the beginning of the 20th century. He is noted for his research in hygiene, in the
                            treatment of some diseases like: to having a lot of medical reports to write, summarize, study, evaluate and even read. Even during a busy day in the hospital, they are still bombarded with reports that range about the patient, the cause of the issue and the results of the examinations being taken. Having to go through a lot of these while working in a busy hospital can also take its toll. But all that could change or at least lessened. The key to making it less of a deal having to write a lot of reports especially medical reports is to make a summary of them. Basically by making a medical summary report</p>
                    </div>
                )
            }

            {
                Device && (
                    <div>
                        <h3 className='text-white'>Devices</h3>
                        <p className='text-white'>d nurses are no strangers to  Oltenia marked the beginning of the 20th century. He is noted for his research in hygiene, in the
                            treatment of some diseases like:havingd nurses are no strangers to havingd nurses are no strangers to having</p>
                    </div>
                )
            }
            {
                Milestones && (
                    <div className='text-white'>
                        <h3>Milesstones</h3>
                        <p className='text-white'> o Milestones is the doing in the way o strangers Oltenia marked the beginning of the 20th century. He is noted for his research in hygiene, in the
                            treatment of some diseases like: to havingd nurses are no strangersrses are no strangerso strangers to havingd nurses are no strangerso strangers to havingd nurses are no strangers</p>
                    </div>
                )
            }


            <div>
                <button id='too' name='About' onClick={stateHndler} className='btn borderThick border-white m-2 col focus'>About</button>
                <button id='too2' name='Intimations' onClick={stateHndler} className='btn borderThick border-white m-2 col focus' >Intimations</button>
                <button id='too3' name='Abstracts' onClick={stateHndler} className='btn borderThick border-white m-2 col focus'>Abstracts</button>
                <button id='too4' name='Device' onClick={stateHndler} className='btn borderThick border-white m-2 col focus' >Device</button>
                <button id='too5' name='Milestones' onClick={stateHndler} className='btn borderThick border-white m-2 col focus'>Milestones</button>
            </div>
        </div>
    )
}

export default OurScience
