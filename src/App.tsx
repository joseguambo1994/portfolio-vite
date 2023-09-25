import { useEffect, useRef, useState } from 'react'
import SoftwareExplorerLogo from "./assets/images/SoftwareExplorerLogo.png";
import PPMLogo from "./assets/images/PPMLogo.png";
import BluehatLogo from "./assets/images/BluehatLogo.png";
import HuaweiLogo from "./assets/images/HuaweiLogo.png";
import FormosLogo from "./assets/images/FormosLogo.png";
// import WavesPurple from './assets/images/WavesPurple.svg';
// import WavesGreen from './assets/images/WavesGreen.svg';
// import WavesOrange from './assets/images/WavesOrange.svg';
import GymnastPullingGreen from './assets/images/GymnastPullingGreen.svg';
import GymnastPullingPurple from './assets/images/GymnastPullingPurple.svg';
import GymnastHangingOrange from './assets/images/GymnastHangingOrange.svg';
import WavesGreen from './assets/images/WavesGreen.svg';
import WavesPurple from './assets/images/WavesPurple.svg';
import WavesOrange from './assets/images/WavesOrange.svg';
import StarsPurple from './assets/images/StarsPurple.svg';
import StarsGreen from './assets/images/StarsGreen.svg';
import StarsOrange from './assets/images/StarsOrange.svg';
import GappnaderoAppDetail from './assets/images/GappnaderoAppDetail.png';
import GappnaderoAppCreate from './assets/images/GappnaderoAppCreate.png';
import GappnaderoAppList from './assets/images/GappnaderoAppList.png';
import GappnaderoAppLogin from './assets/images/GappnaderoAppLogin.png';
import HamsterAnimation from "./assets/animations/Hamster.json";

import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import Lottie from 'lottie-react';
import { useSpring, animated } from '@react-spring/web'


type HamsterPosition = 1|2|3;
const App = () => {
  const [position, setPosition] = useState(8)
  const parallax2 = useRef<IParallax>(null!)

  const parallax = useRef<IParallax>(null!);

  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }))



  const updateHamsterPosition = (scrollPercentage: number):HamsterPosition => {
    if (scrollPercentage < 0.33) { return 1 } else
    if (scrollPercentage < 0.65) { return 2 } else
    if (scrollPercentage < 1) { return 3 } else 
    return 1
  }

  

  const scrollListener = () => {
    const handleWheelEvent = () => {
      const {container, current } = parallax.current;
      const scrollpercent = current / (container.current.scrollHeight - window.innerHeight)
      const scrollpercent2 = current / (container.current.scrollHeight)
      setPosition(updateHamsterPosition(scrollpercent2))
      //console.log(scrollpercent, {container}, {current}, {offset} );
      console.log("parallax.current",{scrollpercent}, {scrollpercent2})
    };

    window.addEventListener('wheel', handleWheelEvent);
    return () => {
      window.removeEventListener('wheel', handleWheelEvent);
    };
  };
  useEffect(scrollListener, []);

  useEffect(()=>{
    api.start({
      to: {
        x: position *30,
      },
    })
  } , [position]);


  return (
    <div style={{ width: '100%', height: '100%', background: '#253237' }}>
      <Parallax ref={parallax} pages={3}>
      <ParallaxLayer sticky={{ start: 0, end:4 }} style={{ pointerEvents: 'none' }}>
      <animated.div style={{...springs}}  className='w-24'><Lottie animationData={HamsterAnimation} loop={true} /></animated.div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.2} style={{ pointerEvents: 'none' }}>
          <img
            src={WavesPurple}
            alt="Remix"
            className="w-full h-screen"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0}         speed={-0.6}
          factor={3}>
             <img
            src={StarsPurple}
            alt="Remix"
            className="w-full"
          />
         
        </ParallaxLayer>
        <ParallaxLayer offset={0.4} speed={0.6} style={{ pointerEvents: 'none' }}>
          <div className="relative">

            <img
              src={GymnastPullingGreen}
              alt="Remix"
              className='w-3/4 absolute -left-32 mt-4'
            />
             <img
              src={GymnastPullingPurple}
              alt="Remix"
              className='w-3/4 absolute -right-28  mt-8'
            />
            <img
              src={GymnastHangingOrange}
              alt="Remix"
              className='w-3/4 absolute left-16'
            />

           
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.5}         speed={0}
          factor={3}>
             <img
            src={StarsPurple}
            alt="Remix"
            className="w-full"
          />
         
        </ParallaxLayer>


        <ParallaxLayer offset={0} speed={-1.5} style={{ pointerEvents: 'none' }}>
          <div className="relative px-4 pb-8 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-32">
            <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
              <span className="block uppercase text-purple-500 drop-shadow-md">
                Jose Guambo
              </span>
            </h1>
            <h1 className="text-center text-3xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
              <span className="block uppercase text-white drop-shadow-md">
                Software Developer
              </span>
            </h1>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={-0.2} style={{ pointerEvents: 'none' }}>
          <img
            src={WavesGreen}
            alt="Remix"
            className="w-full h-screen"
          />

        </ParallaxLayer>
        <ParallaxLayer offset={1.1}         speed={-0.6}
          factor={3}>
             <img
            src={StarsGreen}
            alt="Remix"
            className="w-full"
          />
         
        </ParallaxLayer>

        <ParallaxLayer offset={1.4} speed={1} style={{ pointerEvents: 'none' }}>
          <div className="grid grid-cols-3 gap-4  bg-gray-100	p-4 m-4 rounded-xl">
            <h4 className="text-base font-extrabold">
              <span className="block uppercase text-purple-500 drop-shadow-md">
                BlueHat
              </span>
            </h4>
            <p className="">
              <span className="block uppercase text-purple-500 drop-shadow-md">
                2019
              </span>
            </p>
            <img
              src={BluehatLogo}
              alt="Remix"
              className="w-1/4"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.5} speed={1} style={{ pointerEvents: 'none' }}>
          <div className="grid grid-cols-3 gap-4  bg-gray-100	p-4 m-4 rounded-xl">
            <h4 className="text-base font-extrabold">
              <span className="block uppercase text-purple-500 drop-shadow-md">
                Huawei
              </span>
            </h4>
            <p className="">
              <span className="block uppercase text-purple-500 drop-shadow-md">
                2020
              </span>
            </p>
            <img
              src={HuaweiLogo}
              alt="Remix"
              className="w-1/4"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.6} speed={1} style={{ pointerEvents: 'none' }}>
          <div className="grid grid-cols-3 gap-4  bg-gray-100	p-4 m-4 rounded-xl">
            <h4 className="text-base font-extrabold">
              <span className="block uppercase text-purple-500 drop-shadow-md">
                Formos
              </span>
            </h4>
            <p className="">
              <span className="block uppercase text-purple-500 drop-shadow-md">
                2021
              </span>
            </p>
            <img
              src={FormosLogo}
              alt="Remix"
              className="w-1/4"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.3}         speed={0.1}
          factor={3}>
             <img
            src={StarsGreen}
            alt="Remix"
            className="w-full"
          />
         
        </ParallaxLayer>
        <ParallaxLayer offset={1.6} speed={1.2} style={{ pointerEvents: 'none' }}>
          <div className="grid grid-cols-3 gap-4  bg-gray-100	p-4 m-4 rounded-xl">
            <h4 className="text-base font-extrabold">
              <span className="block uppercase text-purple-500 drop-shadow-md">
                PPM
              </span>
            </h4>
            <p className="">
              <span className="block uppercase text-purple-500 drop-shadow-md">
                2021
              </span>
            </p>
            <img
              src={PPMLogo}
              alt="Remix"
              className="w-1/4"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 0.9, end: 3 }} style={{ pointerEvents: 'none' }}>
          <div className="flex flex-row-reverse ">
            <img
              src={SoftwareExplorerLogo}
              alt="Remix"
              className='w-1/4 fixed bottom-4 right-4'
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={-0.2} style={{ pointerEvents: 'none' }}>
          <img
            src={WavesOrange}
            alt="Remix"
            className="w-full h-screen"
          />

        </ParallaxLayer>

        <ParallaxLayer offset={1.8}         speed={-0.4}
          factor={3}>
             <img
            src={StarsOrange}
            alt="Remix"
            className="w-full"
          />
         
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={-0.2} >
          <Parallax ref={parallax2} pages={2} horizontal>
          <ParallaxLayer offset={0}         speed={-0.4}
          factor={3}>
             <img
            src={StarsOrange}
            alt="Remix"
            className="w-1/2"
          />
             </ParallaxLayer>
            <ParallaxLayer offset={0.6} speed={-0.4} style={{ pointerEvents: 'none' }} >
              <div> <img
                src={GappnaderoAppLogin}
                alt="Remix"
                className="w-1/2"
              /></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0.6} speed={1} style={{ pointerEvents: 'none' }} >
              <div> <img
                src={GappnaderoAppList}
                alt="Remix"
                className="w-1/2"
              /></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0.6}         speed={-0.4}
          factor={3}>
             <img
            src={StarsOrange}
            alt="Remix"
            className="w-1/2"
          />
         
        </ParallaxLayer>
            <ParallaxLayer offset={0.6} speed={2.4} style={{ pointerEvents: 'none' }} >
              <div> <img
                src={GappnaderoAppDetail}
                alt="Remix"
                className="w-1/2"
              /></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0.6} speed={3.8} style={{ pointerEvents: 'none' }} >
              <div> <img
                src={GappnaderoAppCreate}
                alt="Remix"
                className="w-1/2"
              /></div>
            </ParallaxLayer>
  
          </Parallax>
        </ParallaxLayer>
        <ParallaxLayer offset={2.8} speed={-0.2} >
          <div>
            <h4 className="text-base font-extrabold">
              <span className="block uppercase text-red-500 drop-shadow-md">
                hollaa
                <a
                  target="_blank"
                  href="https://app.gappnadero.com"
                  rel="noreferrer"
                >
                  Gappnadero - Cattle register PWA
                </a>
              </span>
            </h4>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.8}         speed={-0.4}
          factor={3}>
             <img
            src={StarsOrange}
            alt="Remix"
            className="w-full"
          />
         
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App
