import React, { useState, useEffect } from 'react';

const Password = () => {
    const [password, setPassword] = useState('');
    
    // 렌더링 될 때마다 호출
  	// useEffect(() => {
    //   console.log('렌더링');
    //   console.log({password});
    // });

    // 화면에 맨 처음 렌더링 될 때만 호출, state를 넣으면 당연히 렌더링되지 않은 상태이므로 컴파일 에러가 뜸
    // useEffect(() => {
    //     console.log('렌더링');
    // }, []);

    useEffect(() => {
        console.log('렌더링');
    }, [password]);


    const onChangePassword = e => {
        setPassword(e.target.value);
    }
    return (
        <div>
            <div>
                <input value={password} onChange={onChangePassword} />
            </div>
            <div>
                <b>{password}</b>
            </div>
        </div>
    );
};

export default Password;