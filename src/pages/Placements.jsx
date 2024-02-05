import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  height: '50vh',

  textAlign:'center',
  color: '#fff',
  lineHeight: '160px',
//   textAlign: 'center',
  background: '#364d79',
};
const Placements = () => (
  <>

  <h1 className='my-3 text-4xl text-center'>CSE PLACEMENTS AND INTERNSHIPS</h1>
  <Carousel autoplay className='w-[50vw] m-auto p-3 shadow-2xl shadow-black ' >
    <div>
      <img src='https://srkrec.edu.in/img/cse/placements/1.jpg' style={contentStyle} />
    </div>
    <div>
    <img src='https://srkrec.edu.in/img/cse/placements/2.jpg' style={contentStyle} />
    </div>
    <div>
    <img src='https://srkrec.edu.in/img/cse/placements/3.jpg' style={contentStyle} />

    </div>
    <div>
    <img src='/assets/placements/04.jpg' style={contentStyle} />

    </div>
   
  </Carousel>
  </>
);
export default Placements;