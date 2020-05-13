import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faLock,faEnvelope,faUser} from '@fortawesome/free-solid-svg-icons';
import { Container,GlobalStyle } from './Styles/Login';
import { register, logIn } from './functions/UserFunctions';
import { Redirect } from 'react-router-dom';

const initialState = {
    name: '',
    email:'',
	password: '',
	redirectLogin: false,

}

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state= {
                name: '',
                email:'',
				password: '',
				redirect: false,
		}
	}
	showSignIn=_=>{
		this.setState(initialState)
		document.body.classList.remove('sign-up-js');
		document.body.classList.add('sign-in-js');
	}
	showSignUp=_=>{
        this.setState(initialState)
		document.body.classList.remove('sign-in-js');
		document.body.classList.add('sign-up-js');
    }
    onSubmitRegister=(ev)=>{
        ev.preventDefault();
        register({name:this.state.name, email: this.state.email, password: this.state.password}).then(response =>{
            if(response.error)
            return window.alert(response.error)
			localStorage.setItem('token', response.token)
			this.setState({redirect : true})
        })

    }
    onSubmitLogin=(ev)=>{
        ev.preventDefault();
        logIn({email : this.state.email ,password: this.state.password }).then(response =>{
            if(response.error)
            return window.alert(response.error)
			localStorage.setItem('token', response.token)
			this.setState({redirect : true})
        })

    }
    onChage=(ev)=>{
        this.setState({[ev.currentTarget.name] : ev.currentTarget.value})
    }

    render(){
       if(this.state.redirect){
		return <Redirect to={{
			pathname: '/app/index',
		  }} />
	   }
        return(
            
			<Container>
				<GlobalStyle/>
			<div className="content first-content">
				<div className="first-column">
					<h2 className="title title-primary">Bem vindo de volta!</h2>
					<p className="description description-primary">Para manter-se conectado conosco</p>
					<p className="description description-primary">faça o login com suas informações pessoais</p>
					<button id="signin" className="btn btn-primary"  onClick={this.showSignIn}>Entrar</button>
				</div>    
				<div className="second-column">
					<h2 className="title title-second">Criar Conta</h2>
					<div className="social-media">
						<ul className="list-social-media">
							<a className="link-social-media" href="/#">
								<li className="item-social-media">
								<FontAwesomeIcon icon={faFacebook} />
								</li>
							</a>
							<a className="link-social-media" href="/#">
								<li className="item-social-media">
								<FontAwesomeIcon icon={faGooglePlusG} />
								</li>
							</a>
							<a className="link-social-media" href="/#">
								<li className="item-social-media">
								<FontAwesomeIcon icon={faLinkedinIn} />
								</li>
							</a>
						</ul>
					</div>
					<p className="description description-second">ou se cadastre com outras contas:</p>
					<form className="form" onSubmit={this.onSubmitRegister}>
						<label className="label-input" >
						<FontAwesomeIcon icon={faUser} />
							<input type="text" placeholder="Name" onChange={this.onChage} name='name' value={this.state.name}/>
						</label>
						
						<label className="label-input" >
						<FontAwesomeIcon icon={faEnvelope} />
							<input type="email" placeholder="Email" onChange={this.onChage} name='email' value={this.state.email}  />
						</label>
						
						<label className="label-input" >
						<FontAwesomeIcon icon={faLock} />
							<input type="password" placeholder="Password"  onChange={this.onChage} name='password' value={this.state.password} />
						</label>
						
						
						<button className="btn btn-second" type='submit'>Cadastrar</button>        
					</form>
				</div>
			</div>
			<div className="content second-content">
				<div className="first-column">
					<h2 className="title title-primary">Olá, amigo!</h2>
					<p className="description description-primary">Coloque suas informações</p>
					<p className="description description-primary">e aproveite!</p>
					<button id="signup" className="btn btn-primary" onClick={this.showSignUp}>Cadastrar</button>
				</div>
				<div className="second-column">
					<h2 className="title title-second">Entre no PostToView</h2>
					<div className="social-media">
						<ul className="list-social-media">
							<a className="link-social-media" href="/#">
								<li className="item-social-media">
								<FontAwesomeIcon icon={faFacebook} />
								</li>
							</a>
							<a className="link-social-media" href="/#">
								<li className="item-social-media">
								<FontAwesomeIcon icon={faGooglePlusG} />
								</li>
							</a>
							<a className="link-social-media" href="/#">
								<li className="item-social-media">
								<FontAwesomeIcon icon={faLinkedinIn} />
								</li>
							</a>
						</ul>
					</div>
					<p className="description description-second">se prefirir usar outras contas:</p>
					<form className="form" onSubmit={this.onSubmitLogin}>
					
						<label className="label-input" >
						<FontAwesomeIcon icon={faEnvelope} />
							<input type="email" placeholder="Email" onChange={this.onChage} name='email' value={this.state.email} />
						</label>
					
						<label className="label-input" >
						<FontAwesomeIcon icon={faLock} />
							<input type="password" placeholder="Password" onChange={this.onChage} name='password' value={this.state.password} />
						</label>
					
						<a className="password" href="/#">esqueceu a senha?</a>
						<button className="btn btn-second">entrar</button>
					</form>
				</div>
			</div>
		</Container>

        )
    }
}
