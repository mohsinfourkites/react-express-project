import SilderImg01 from '../../../assets/images/ps-image-04.webp'
import SilderImg02 from '../../../assets/images/ps-image-02.webp'
import SilderImg03 from '../../../assets/images/ps-image-01.webp'
import SilderImg04 from '../../../assets/images/ps-image-03.webp'
import SilderIcon01 from '../../../assets/images/svgs/business.png'
import SilderIcon02 from '../../../assets/images/svgs/paper-plane.png'
import SilderIcon03 from '../../../assets/images/svgs/sync.png'
import SilderIcon04 from '../../../assets/images/svgs/wifi.png'
import ProgressSlider from './ProgressSlider'




export function ProgressSliderPage() {  

  const items = [
    {
      img: SilderImg01,
      desc: 'Omnichannel',
      buttonIcon: SilderIcon01,
    },{
      img: SilderImg02,
      desc: 'Multilingual',
      buttonIcon: SilderIcon02,
    },{
      img: SilderImg03,
      desc: 'Interpolate',
      buttonIcon: SilderIcon03,
    },{
      img: SilderImg04,
      desc: 'Enriched',
      buttonIcon: SilderIcon04,
    }, 
  ]

  return (
    <>
      <main className="relative h-[600px] flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div className="w-full max-w-2xl mx-auto px-4 md:px-6 py-24">
          <div className="flex justify-center">

            <ProgressSlider items={items} />

          </div>
        </div>
      </main>
    </>
  )
}