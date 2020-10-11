import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './../Table.module.css'

const AddUser = (props) => {
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data, e) => {
		props.addNewUser(data.name, data.username, data.phone, data.address, data.website)
		e.target.reset()
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<table>
				<tbody>
					<tr >
						<td>{props.index + 1} </td>
						<td>
							<input disabled={props.inputFillAddLine} name="name" ref={register} />
						</td>
						<td>
							<input disabled={props.inputFillAddLine} name="username" ref={register} />
						</td>
						<td>
							<input disabled={props.inputFillAddLine} name="phone" ref={register} />
						</td>
						<td>
							<input disabled={props.inputFillAddLine} name="address" ref={register} />
						</td>
						<td>
							<input disabled={props.inputFillAddLine} name="website" ref={register} />
						</td>
						<td>
							<button disabled={props.buttonFillAddLine} onClick={() => props.onClickButtonFillAddLine()} >Заполнить</button>
							<button disabled={props.buttonSaveAddLine} type="submit">Сохранить</button>
						</td>

					</tr>
				</tbody>
			</table>
		</form>
	)
}

export default AddUser;