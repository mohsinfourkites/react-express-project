// https://cruip-tutorials.vercel.app/cards-hover-effect/

function UILayoutCard() {
  return (
    <>
      <section className='grid md:grid-cols-3 gap-6 max-md:max-w-xs mx-auto '>
        <div className="group  bg-gradient-to-t from-[#242424] to-[#020202] hover:from-[#182135] hover:to-[#080808] relative before:absolute before:inset-0 before:bg-[url('/noise.gif')] before:opacity-5 rounded-2xl border ">
          <div className='relative'>
            <div className='px-6 py-5'>
              <div className='group-hover:bg-blue-400 bg-white transition-all duration-500 ease-in-out w-fit px-3 rounded-full text-sm py-1 text-black group-hover:text-white mb-1'>
                stastic
              </div>
              <span className='text-lg group-hover:hidden inline-block font-semibold pt-2 text-slate-200 mb-1 transition-all duration-500 ease-in-out'>
                Subscriber Reports
              </span>
              <span className='text-lg group-hover:inline-block hidden font-semibold pt-2 text-slate-200 mb-1 transition-all duration-500 ease-in-out'>
                Subscriber Highlights
              </span>
              <p className='text-sm text-slate-500'>
                Building truly great products is both art and science. It's part
                intuition and part data.
              </p>
            </div>
            <div className='relative group-hover:-translate-y-2 transition-transform duration-500 ease-in-out '>
              <img
                className='group-hover:opacity-0 transition-opacity duration-500  object-cover h-full m-0 p-0'
                src='https://images.pexels.com/photos/2907578/pexels-photo-2907578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                width={350}
                height={240}
                alt='Card img 01'
              />
              <img
                className='absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity  object-cover duration-300  h-full  m-0 p-0'
                src='https://images.pexels.com/photos/3974036/pexels-photo-3974036.jpeg'
                width={350}
                height={240}
                alt='Card img 01 displaying on hover'
                aria-hidden='true'
              />
            </div>
          </div>
        </div>
        <div className="group  bg-gradient-to-t from-[#050a0a] to-[#051818] hover:from-[#05070a] hover:to-[#0b1a3b] relative before:absolute before:inset-0 before:bg-[url('/noise.gif')] before:opacity-5 rounded-2xl border ">
          <div className='relative'>
            <div className='px-6 py-5'>
              <div className='bg-green-400 group-hover:bg-blue-600  transition-all duration-500 ease-in-out w-fit px-3 rounded-full text-sm py-1 text-white mb-1'>
                Password
              </div>
              <span className='text-lg group-hover:hidden inline-block font-semibold pt-2 text-slate-200 mb-1 transition-all duration-500 ease-in-out'>
                Don't Show Your Password
              </span>
              <span className='text-lg group-hover:inline-block hidden font-semibold pt-2 text-slate-200 mb-1 transition-all duration-500 ease-in-out'>
                Hide Your Password
              </span>
              <p className='text-sm text-slate-500'>
                If you don't hide your password then we can see it and know it
                and then can enter your account
              </p>
            </div>
            <div className='relative group-hover:-translate-y-2 transition-transform duration-500 ease-in-out'>
              <img
                className='group-hover:opacity-0 transition-opacity duration-500'
                src='https://images.pexels.com/photos/2528431/pexels-photo-2528431.jpeg'
                width={350}
                height={240}
                alt='Card img 01'
              />
              <img
                className='absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                src='https://images.pexels.com/photos/3974089/pexels-photo-3974089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                width={350}
                height={240}
                alt='Card img 01 displaying on hover'
                aria-hidden='true'
              />
            </div>
          </div>
        </div>
        <div className="group  bg-gradient-to-t from-[#171c35] to-[#000000] hover:from-[#2b131e] hover:to-[#141414] relative before:absolute before:inset-0 bbefore:bg-[url('/noise.gif')] before:opacity-5  rounded-2xl border ">
          <div className='relative'>
            <div className='px-6 py-5'>
              <div className='bg-blue-400 group-hover:bg-red-500 transition-all duration-500 ease-in-out w-fit px-3 rounded-full text-sm py-1 text-white mb-1'>
                Alert
              </div>
              <span className='text-lg group-hover:hidden inline-block font-semibold pt-2 text-slate-200 mb-1 transition-all duration-500 ease-in-out'>
                Chatting Seemlessly
              </span>
              <span className='text-lg group-hover:inline-block hidden font-semibold pt-2 text-slate-200 mb-1 transition-all duration-500 ease-in-out'>
                Don't Hide Chat
              </span>
              <p className='text-sm text-slate-500'>
                Building truly great products is both art and science. It's part
                intuition and part data.
              </p>
            </div>
            <div className='relative group-hover:-translate-y-2 transition-transform duration-500 ease-in-out'>
              <img
                className='group-hover:opacity-0 transition-opacity duration-500'
                src='https://images.pexels.com/photos/6780256/pexels-photo-6780256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                width={350}
                height={240}
                alt='Card img 01'
              />
              <img
                className='absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                src='https://images.pexels.com/photos/29109528/pexels-photo-29109528/free-photo-of-serene-horses-grazing-in-pahalgam-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                width={350}
                height={240}
                alt='Card img 01 displaying on hover'
                aria-hidden='true'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UILayoutCard;
