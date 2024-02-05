import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';

const Home = () => {
  return (
    <>
    <div className='h-screen bg-opacity-100 bg-no-repeat bg-cover bg-custom-image '>
      <div className='text-white'>
        <p>Hello</p>
 

     <TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: '#ffff',
          fontWeight: 500,
          fontSize: '1.5em',
          
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          'Hey there, This is a type writer animation package',
          'it consist of two types...',
          'Single text display and multi text display',
          'Fonts can be customized.',
          'The type speed can be customized as well',
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
      />
      </div>

    </div>
      <p>

          path='/' element=Home  <br />
      path='/Gallery' element=ImageGallery<br />
      path='/Research' element=Research <br />
      path='/Publication' element=Publication <br />
      path='/Placements' element=Placements <br />
      path='/Achievements' element=Achievements </p>
      </>
  )
}

export default Home