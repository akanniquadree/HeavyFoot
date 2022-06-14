import React , {useState} from 'react'
import CheckoutStep from '../../Components/CheckoutStep/CheckoutStep'
import Footer from '../../Components/Footer/Footer'
import Topbar from '../../Components/Topbar/Topbar'
import "./payment.css"

export default function Payment() {
  const [btn1, setBtn1] = useState(false)
    const [btn2, setBtn2] = useState(false)
    const [btn3, setBtn3] = useState(false)
    const clickBtn1 = () =>{
        setBtn1(true)
        setBtn2(false)
        setBtn3(false)
    }
    const clickBtn2 = () =>{
        setBtn1(false)
        setBtn2(true)
        setBtn3(false)
    }
    const clickBtn3 = () =>{
        setBtn1(false)
        setBtn2(false)
        setBtn3(true)
    }
  return (
    <>
      <Topbar/>
      <div className="payment">
        <div className="paymentWrapper">
          <CheckoutStep step1 step2 step3/>
          <div className="paymentMaster">
            <div>
            <input type="radio" name="card" id="" onClick={()=>clickBtn1()}/>
            <span>Pay with Master Card or Visa</span>
            </div>
             
             <div  className='image'> 
                <img src="/Images/master.png" alt="" />
                <img src="/Images/visa.png" alt="" />
              </div>
          </div>
          {
            btn1 &&
          <form action="" className='paymentForm'>
            <input type="text" placeholder='Enter your Card Number' />
            <div className="paymentCard">
            <input type="text" placeholder='mm/yy' />
            <input type="text" placeholder='Enter your ccv' />
            </div>
            <button className="">Make Payment</button>
          </form>}
          <div className="paymentMaster">
            <div>
            <input type="radio" name="card" id="" onClick={()=>clickBtn2()}/>
            <span>Pay with Verve</span>
            </div>
             
             <div className='image'> 
                <img src="/Images/verve.png" alt="" />
              </div>
          </div>
          {
            btn2 &&
          <form action="" className='paymentForm'>
            <input type="text" placeholder='Enter your Card Number' />
            <div className="paymentCard">
            <input type="text" placeholder='mm/yy' />
            <input type="text" placeholder='Enter your ccv' />
            </div>
            <button className="">Make Payment</button>
          </form>}
          <div className="paymentMaster">
            <div>
            <input type="radio" name="card" id="" onClick={()=>clickBtn3()}/>
            <span>Pay on Delivery</span>
            </div>
            
          </div>
          {
            btn3 &&
            <form action="" className='paymentForm'>
              <button className="" style={{marginTop:"15px"}}>Continue</button>
            </form>}
        </div>
      </div>
      <Footer/>
    </>
  )
}
