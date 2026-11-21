import {useState} from 'react';
import Card from './components/Card';
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={()=>setCount((count)=>count+1)}>Count {count}</button>
      <button onClick={()=>setCount((count)=>count*0)}>Reset Count</button>
      <Card user="Sarthak Sharma"  age="25" />
      <Card user="Kavya Jeet"  age="1.5" />
    </div>
  )
}

export default App
