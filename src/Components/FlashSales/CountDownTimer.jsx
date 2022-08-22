import { useCountDown } from "./CountDown"
import ExpiredNotice from "./ExpiredNotice"
import ShowTimer from "./ShowTimer"


export const CountDownTimer = ({targetDate}) =>{
    const [days, hours, minutes, seconds] = useCountDown(targetDate)
    
    if(days + hours + minutes + seconds <=0){
        return <ExpiredNotice/>
    }else{
        return (
            <ShowTimer
              days={days}
              hours={hours}
              minutes={minutes}
              seconds={seconds}
            />
          );
    }
}