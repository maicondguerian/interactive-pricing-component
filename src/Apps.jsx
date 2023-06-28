
import { useState } from 'react'
import { MidDiv } from './styles/styled-components/globalStyles';

function Apps() {
  const [state, setState] = useState(false);
  const [slider, setSlider] = useState(16);
  const [newValue, setNewValue] = useState(slider);

const mutiplyBy12 = () =>{
  const newState = !state;
  setState(newState)
  if(slider){
    setNewValue((slider * 12) - (slider * 0.25))
  }
}

  return (
    <MidDiv>
      <label className="switch">
        <input 
          type="checkbox" 
          checked={state}
          onChange={()=>
            setState(!state)
          }
          onClick={mutiplyBy12}
          />
          <span className="slider"  />
      </label>

      <input type="range" value={slider} onChange={(event)=>{
        setSlider(event.target.value)
        setState(false)
      }
        
      } max={32}/>

      {state ? (
        newValue
      ): 
      slider} 
    </MidDiv>
  )
}

export default Apps
