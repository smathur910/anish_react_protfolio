import './Main.css'
import Title from '../pages/Title'
import About from '../pages/About'
import Skills from '../pages/Skills'
import Avater from '../pages/Avater'


const Main = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="main-heading">
                    <Title/>
                    <About/>
                    <Skills/>
                </div>
                    <Avater/>
            </div>
        </div>
    )
}

export default Main
