//henter app.scss
import './App.scss';
//henter header.js

import { Header } from './components/partials/Header/Header'
import { Main } from './components/partials/Main/Main'

const Images = [
  {image: require('./Assets/images/Goals/Goal-No-Poverty.png')},
  {image: require('./Assets/images/Goals/Goal-No-Hunger.png')},
  {image: require('./Assets/images/Goals/Goal-Good-Health.png')},
  {image: require('./Assets/images/Goals/Goal-Good-Education.png')},
  {image: require('./Assets/images/Goals/Goal-Gender-Equality.png')},
  {image: require('./Assets/images/Goals/Goal-Clean-Water.png')},
  {image: require('./Assets/images/Goals/Goal-Clean-Energy.png')},
  {image: require('./Assets/images/Goals/Goal-Decent-Work.png')},
  {image: require('./Assets/images/Goals/Goal-Industry.png')},
  {image: require('./Assets/images/Goals/Goal-Inequalities.png')},
  {image: require('./Assets/images/Goals/Goal-Sustainable-Cities.png')},
  {image: require('./Assets/images/Goals/Goal-Responsible-Consumption.png')},
  {image: require('./Assets/images/Goals/Goal-Climate-Action.png')},
  {image: require('./Assets/images/Goals/Goal-Life-Water.png')},
  {image: require('./Assets/images/Goals/Goal-Life-Land.png')},
  {image: require('./Assets/images/Goals/Goal-Institutions.png')},
  {image: require('./Assets/images/Goals/Goal-Partnership.png')},
  {image: require('./Assets/images/Goals/Global-Goals.png')},
]

function App() {
  return (
    <div className="containerWrapper">
      <Header />
      <Main imgList={Images}/>
    </div>
  );
}

export default App;
