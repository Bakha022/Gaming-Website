import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Validation from '../../utils/Validation'

import img_1 from '../../assets/svg/Vector 3.svg'
import img_2 from '../../assets/svg/Vector 4.svg'
import style from './FormComponent.module.css'

const FormComponent = () => {
	const [values, SetValues] = useState({
		name: '',
		lastName: '',
		email: '',
		message: '',
	})

	const [errors, SetErrors] = useState({})

	function handleInput(event) {
		const newObj = { ...values, [event.target.name]: event.target.name.value }

		SetValues(newObj)
	}

	function SendForm(event) {
		event.preventDefault()
		SetErrors(Validation(values))
	}

	// const notify = () => errors.name && toast.success('Succes')

	return (
		<div className={style['form-component']}>
			<img className={style['top-img']} src={img_1} alt='img' />
			<div className='container'>
				<h1 className={style['form-title']}>Say hello</h1>
				<p className={style['form-text']}>
					Lorem Ipsum is simply dummy text of the printing .
				</p>
				<form className={style['form-content']} onSubmit={SendForm}>
					<div className={style['full-name-inputs']}>
						<div className={style['name']}>
							<label htmlFor='name'>First Name</label>
							<br />
							<input name='name' type='text' onChange={handleInput} />
							{errors.name && (
								<p className={style['error-validation']}>{errors.name}</p>
							)}
						</div>
						<div className={style['last-name']}>
							<label htmlFor='lastName'>Last Name</label> <br />
							<input name='lastName' type='text' onChange={handleInput} />
							{errors.lastName && (
								<p className={style['error-validation']}>{errors.lastName}</p>
							)}
						</div>
					</div>
					<div className={style['email-input']}>
						<label htmlFor='email'>Email Address</label> <br />
						<input name='email' type='email' onChange={handleInput} />
						{errors.email && (
							<p className={style['error-validation']}>{errors.email}</p>
						)}
					</div>
					<div className={style['texts-input']}>
						<label htmlFor='message'>Message</label> <br />
						<textarea name='message' id='' onChange={handleInput}></textarea>
						{errors.message && (
							<p className={style['error-validation']}>{errors.message}</p>
						)}
					</div>
					<div className={style['send-btn']}>
						<button type='submit'>Get in touch</button>
					</div>
					<ToastContainer />
				</form>
			</div>
			<img className={style['bottom-img']} src={img_2} alt='img' />
		</div>
	)
}

export default FormComponent
