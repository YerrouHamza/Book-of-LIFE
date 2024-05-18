import Header from "./components/header"

function App() {

  const title = {
    first: 'Your Daily',
    second: 'Podcast'
  }

  return (
    <div className="font-montserrat">
      <Header
        title={title}
        description="We cover all kinds of categories and a weekly special guest."
        isNavbarShow={true}
      />

      <section className='bg-withe py-20 '>
        <h1 className=" text-black text-2xl text-center">Read. Get inspired by every minute of it.</h1>
      </section>
    </div>
  )
}

export default App
