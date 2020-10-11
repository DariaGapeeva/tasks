import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './../Table.module.css'



const User = (props) => {

	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data, e) => {
		props.updateUserData(props.user.id, props.index, data.name, data.username, data.phone, data.website)
		e.target.reset()
	};


	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<table>
				<tbody>
					<tr >

						<td>{props.index + 1} </td>
						<td>{props.user.name}
							<input disabled={props.inputDisabled} name="name" ref={register} />
						</td>
						<td>{props.user.username}
							<input disabled={props.inputDisabled} name="username" ref={register} />
						</td>
						<td>{props.user.phone}
							<input disabled={props.inputDisabled} name="phone" ref={register} />
						</td>
						<td>{`${props.user.address.city} , ${props.user.address.street}, ${props.user.address.suite}  `}
						</td>
						<td>{props.user.website}
							<input disabled={props.inputDisabled} name="website" ref={register} />
						</td>
						<td>
							<button disabled={props.buttonDeleteDisabled} onClick={() => props.deleteUserThunk(props.user.id, props.index)}>Удалить</button>

							<button disabled={props.buttonUpdateDisabled} onClick={() => props.updateButton(props.index)}>Редактировать</button>
							<button disabled={props.buttonSaveDisabled} type="submit">Сохранить</button>
						</td>

					</tr>
				</tbody>
			</table>
		</form>
	)
}

export default User;