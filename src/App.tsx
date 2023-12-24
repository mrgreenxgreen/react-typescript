import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Student} from "./studentInterface.interface.tsx";

function App() {

    const student:Student = {id:1,name:"john",isEnrolled:true };

  const [count, setCount] = useState(0);
  const [arrayCount, setArrayCount] = useState<Student[]>([]);


  useEffect( ()=>{
        setArrayCount(function (prevState: Student[]): Student[] {
            return[...prevState, student];
        });
    }
      , [count]
  );
  console.log(arrayCount);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
          <div>
              {Object.entries(arrayCount).map(([key, value])=>(
                  <div key={key}>
                      {value.id} <br/>
                      {value.name} <br/>
                      {JSON.stringify(value.isEnrolled)}
                  </div>
              ))}
          </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
