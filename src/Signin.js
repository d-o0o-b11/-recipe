import React , {useState}from 'react';

import  signins from './Signin.module.scss'
import {  useHistory } from "react-router-dom";
import { useSpring, animated } from 'react-spring'

              


const Signin = () => {

  const history = useHistory(); //페이지가 이동 되어서 useState 값을 저장하기 위해서 사용
  const [on, set] = useState(true);
  const prop = useSpring({ to: { opacity: 1 }, from: { opacity: 0} });
  const prop2 = useSpring({ to: { opacity: 1 , marginBottom: 0}, from: { opacity: 0 , marginBottom: -300} });

  //변환이 일어날 때 useState 값 변환
  const menuToggleHandler = () => {
    set((p) => !p);
    history.push("#")
};
  return ( 

    <div className={signins.loginPage}>
    <div className={signins.loginPage__form} >
    {/* 회원가입 창 */}
    <animated.div style= {prop} className={on ? signins.loginPage__form__registerForm:''}>
        <input type="text" placeholder="name"/>
        <input type="password" placeholder="password"/>
        <input type="text" placeholder="email address"/>
        <button>create</button>
        <p className={signins.message}>Already registered? <a href="#" onClick={menuToggleHandler} >Sign In</a></p>   
    </animated.div>  
    {/* 로그인 창 */}
    <animated.div style= {prop2} className={on ? '': signins.loginPage__form__registerForm}>
      
        <input type="text" placeholder="username"/>
        <input type="password" placeholder="password"/>
        <button>login</button>
        <p className={signins.message}>Not registered? <a href="#" onClick={menuToggleHandler}>회원 가입</a></p>
    
    </animated.div> 


    </div>
  </div>

  )

  
};

export default Signin;
