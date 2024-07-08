import React from 'react'
import { ClassComponent } from './class-component'
import FunctionalComponent from './funtional-component';

export const LifeCyclePage = () => {
  const [showClassComponent, setShowClassComponent] = React.useState(false);
  const [showFunctionalComponent, setShowFunctionalComponent] = React.useState(false);

  return (
    <div>
      <h1>Life cycle</h1>
      <button onClick={() => setShowClassComponent(!showClassComponent)}>show/hide</button>
      { showClassComponent && <ClassComponent /> }

      <hr />
      
      <button onClick={() => setShowFunctionalComponent(!showFunctionalComponent)}>show/hide</button>
      { showFunctionalComponent && <FunctionalComponent /> }
    </div>
  )
}
