import React ,{ useRef,useContext ,useState,useEffect}from 'react'
import {UserContext} from '.././App';

function Contact() {
  const [val, setval] = useState('')
  const [count, setcount] = useState(0)
  const user = useContext(UserContext);
  var input1=useRef() 
  console.log(input1.current);
  useEffect(() => {
    input1.current.focus()
    return () => {
      console.log('unamount');
    }
  }, [val])
  
  return (
    <div>
      <h1>{user}</h1>
      <h1>{val} : {count}</h1>
    <input type='text' ref={input1} name='val' value={val || ''} onChange={(e)=>setval(e.target.value)}/>
    </div>
  )
}

export default Contact