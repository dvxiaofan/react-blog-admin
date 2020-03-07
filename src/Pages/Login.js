import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Card, Input, Icon, Spin } from 'antd';
import '../static/css/Login.css';

function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const checkLogin = () => {
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
    }

	return (
		<div className='login-div'>
			<Spin tip='Loading ...' spinning={isLoading}>
				<Card
					title='devZhang blog System'
					bordered={true}
					style={{ width: 400 }}
				>
                    <Input 
                        id='userName' 
                        size='large' 
                        placeholder='Enter your username' 
                        prefix={<Icon type='user' style={{color: 'grba(0, 0, 0, .25)'}}/>}
                        onChange={e => {setUsername(e.target.value)}} 

                    />
                    <br />
                    <br />

                    <Input.Password 
                        id='password' 
                        size='large' 
                        placeholder='Enter your password' 
                        prefix={<Icon type='user' style={{color: 'grba(0, 0, 0, .25)'}}/>}
                        onChange={e => {setPassword(e.target.value)}} 

                    />
                    <br />
                    <br />

                    <Button type='primary' size='large' block onClick={checkLogin}>Login</Button>
                    
                </Card>
			</Spin>
		</div>
	);
}

export default Login;
