import React from 'react';



const Counter = (props) => {
	return <div>
		Счетчик: <span>{props.counter} </span>
		<div className="counter__box">
			<button disabled={props.disabled} onClick={props.increment} className="counter__btn" >Увеличить</button>
			<button disabled={props.disabled} onClick={props.decrement} className="counter__btn">Уменьшить</button>
			<button disabled={props.disabled} onClick={props.async} className="counter__btn">Уменьшить на 2 через две секунды</button>
		</div>

	</div>
}

export default Counter;