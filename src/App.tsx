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
        isNavbarShow={true} />
    </div>
  )
}

export default App
