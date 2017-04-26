# DaysTimer
DaysTimer component is used to display the elapsing time in days,hour,min,sec 
## Install

`npm install --save days_timer`

## Usage
In DaysTimer Component pass the future date that till the timer run

``` javascript
import React  from 'react';
import {DaysTimer} from 'days_timer';
class App extends React.Component {
  render() {
    let style = {
          parentDiv:{
              background: '#ccc',
              display: 'inline-block'
          },
          value:{
              display: 'inline-block',
              padding: '10px'
          }
      }
    let date = "2018-04-15T16:00:00.000+05:30"; //Future date untill the timer run
    return (
        <DaysTimer 
            style={style}
            startDate={date}
        />
    )
  }
}
export default App;
```
## Demo
You can see the demo here
visit http://daystimer.surge.sh
