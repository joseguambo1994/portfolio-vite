import { useRef } from 'react'
import SoftwareExplorerLogo from "./assets/images/SoftwareExplorerLogo.png";
import PPMLogo from "./assets/images/PPMLogo.png";
import BluehatLogo from "./assets/images/BluehatLogo.png";
import HuaweiLogo from "./assets/images/HuaweiLogo.png";
import FormosLogo from "./assets/images/FormosLogo.png";
import GalaxyPurple from './assets/images/GalaxyPurple.jpg';
import GalaxyGreen from './assets/images/GalaxyGreen.jpg';
import GalaxyOrange from './assets/images/GalaxyOrange.jpg';
import GymnastPulling from './assets/images/GymnastPulling.svg';
import GymnastHanging from './assets/images/GymnastHanging.svg';
import GappnaderoAppDetail from './assets/images/GappnaderoAppDetail.png';
import GappnaderoAppCreate from './assets/images/GappnaderoAppCreate.png';
import GappnaderoAppList from './assets/images/GappnaderoAppList.png';
import GappnaderoAppLogin from './assets/images/GappnaderoAppLogin.png';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'

const App = () => {
  const parallax = useRef<IParallax>(null!)
  const parallax2 = useRef<IParallax>(null!)

  return (
    <div style={{ width: '100%', height: '100%', background: '#253237' }}>
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer offset={0} speed={-0.2} style={{ pointerEvents: 'none' }}>
          <img
            src={GalaxyPurple}
            alt="Remix"
            className="w-full h-full"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.55} speed={0.6} style={{ pointerEvents: 'none' }}>
          <div className="relative">

            <img
              src={GymnastHanging}
              alt="Remix"
              className='w-3/4 absolute -left-32'
            />
            <img
              src={GymnastPulling}
              alt="Remix"
              className='w-3/4 absolute left-16'
            />

            <img
              src={GymnastHanging}
              alt="Remix"
              className='w-3/4 absolute -right-32'
            />
          </div>
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
            src={GalaxyGreen}
            alt="Remix"
            className="w-full h-full"
          />

        </ParallaxLayer>

        <ParallaxLayer offset={1.3} speed={0.7} style={{ pointerEvents: 'none' }}>
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
        <ParallaxLayer offset={1.4} speed={0.7} style={{ pointerEvents: 'none' }}>
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
        <ParallaxLayer offset={1.5} speed={0.7} style={{ pointerEvents: 'none' }}>
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
        <ParallaxLayer offset={1.6} speed={0.7} style={{ pointerEvents: 'none' }}>
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
            src={GalaxyOrange}
            alt="Remix"
            className="w-full h-full"
          />

        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={-0.2} >
          <Parallax ref={parallax2} pages={2} horizontal>
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
      </Parallax>
    </div>
  )
}

export default App
