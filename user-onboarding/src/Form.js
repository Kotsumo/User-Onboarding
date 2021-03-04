import React from 'react'

export default function Form(props) {
    const {
        values, 
        change, 
        submit,
        disabled
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const {name, value, type, checked} = evt.target
        const ValueToUse = type === 'checkbox' ? checked : value
        change(name, ValueToUse)
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add a user</h2>

                <button id='submitBtn' disabled={disabled}>submit</button>


                <label>Name
                    <input
                        name='name'
                        type='text'
                        onChange={onChange}
                        value={values.name}
                        placeholder='type a name...'
                        maxLength=''
                    />
                </label>

                <label>Email
                    <input
                        name='email'
                        type='email'
                        onChange={onChange}
                        value={values.email}
                        placeholder='type an email...'
                        maxLength='30'
                    />
                </label>

                <label>Password
                    <input
                        name='password'
                        type='password'
                        onChange={onChange}
                        value={values.password}
                        placeholder='type a password...'
                        maxLength='30'
                    />
                </label>

                <label>TOS
                    <input
                        type='checkbox'
                        name='tos'
                        onChange={onChange}
                        checked={values.tos}
                    />
                </label>
            </div>
        </form>
    )
}