import Home from "./(1) - HomePage"
import Landing from "./(2) - Landing"
import Gallery from "./(3) - Gallery"
import Features from "./(4) - Features"
import TeamMembers from "./(5) - Team members"
import HowItWorks from "./(7) - How It Works"
import OurAwesomeStats from "./(8) - Our Awesome Stats"
import End from "./(9) - end"

function App ()
{
  return (
    <div className=" overflow-hidden">
      <Home />
      <Landing />
      <Gallery />
      <Features />
      <TeamMembers />
      <HowItWorks />
      <OurAwesomeStats />
      <End />
    </div>
  )
}

export default App
