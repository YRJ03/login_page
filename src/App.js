import { useState } from 'react';
import './App.css';

function App() {
  const [id,setId] = useState('')
  const [password,setPassword] = useState('')

  const [value1,setValue1] = useState('Submit Data')
  const [value2,setValue2] = useState('Submit Data')

  const [condition,setCondition] = useState(false)

  const getId =(e)=>{
    setId(e.target.value)
  }

  const getPass =(e)=>{
    setPassword(e.target.value)
  }

  const setData =()=>{
    if (id && password !== null){
      setValue1(id)
    setValue2(password)
    } else {
      setValue1('Submit Data')
      setValue2('Submit Data')
      alert('Please enter id and password')
    }
    
  }

  const resetValue =()=>{
    setId('')
    setPassword('')
    setValue1('Submit Data')
    setValue2('Submit Data')
  }

  const showData =()=>{
    setCondition(!condition)
  }
  return (
    <body className='main'>
      <div className="App">

      <div className='inputDiv'>
        <input
          className='input1'
          placeholder='Enter Your ID'
          type='text'
          value={id}
          onChange={getId}
        />
        <input
          className='input2'
          placeholder='Enter Your Password'
          type='password'
          value={password}
          onChange={getPass}
        />

      </div>

      <div className='buttonDiv'>
        <button onClick={setData}>Submit</button>

        <button onClick={resetValue}>Reset</button>

        <button onClick={showData}>{condition?`Hide`:`Show`}</button>
      </div>

      <div className='tableData'>
        <table className={condition?'dataTable':'tZero'}>
          <thead>
            <tr>
              <th>sr no.</th>
              <th>ID</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>00</td>
              <td>{value1}</td>
              <td>{value2}</td>
            </tr>           
          </tbody>
        </table>
      </div>
    </div>
    </body>
    
  );
}

export default App;
