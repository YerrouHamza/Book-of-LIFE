import Header from "./components/header"

function App() {

  const title = {
    first: 'Your Daily',
    second: 'Podcast'
  }

  return (
    <div className="font-montserrat">
      <Header title={title} isNavbarShow={true} />
    </div>
  )
}

export default App
