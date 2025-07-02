import './App.css'
import Cards from './components/Cards'
import ShinyText from './components/ShinyText'
import TextPressure from './components/TextPressure'
import SplitText from './components/SplitText'


function App() {
    return (
        <div>
            <SplitText text="Hello World"/>
            <TextPressure text="Hello World" textColor='red'/>
            <Cards />
        </div>
    )
}

export default App
