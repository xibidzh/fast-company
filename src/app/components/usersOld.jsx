import React, { useState } from 'react';
import api from '../api'
import SearchStatus from './searchStatus';

export const Users = () => {
	const [users, setUsers] = useState(api.users.fetchAll());

	const handleDelete = (usersId)=>{
		setUsers(prevState => prevState.filter((user) => user._id !== usersId))
	};



	const numberOfHuman = users.length
	return (
		<>
		 <SearchStatus length={numberOfHuman} />

		{numberOfHuman > 0 &&  
		<table className="table">
	<thead>
		<tr>
		<th scope="col">Имя</th>
		<th scope="col">Качества</th>
		<th scope="col" >Профессия</th>
		<th scope="col">Встретился раз</th>
		<th scope="col">Оценка</th>
		<th scope="col">Избранное</th>
		<th scope="col"></th>
		</tr>
	</thead>
	<tbody>
		{users.map((user)=>{
			return (<tr key={user._id}>
					<td className='p-1'>{user.name}</td>
					<td className='p-1'>{user.qualities.map(qality => <span key={qality._id} className={'m-1 badge bg-'+qality.color}>{qality.name}</span>)}</td>
					<td className='p-1'>{user.profession.name }</td>
					<td className='p-1'>{user.completedMeetings}</td>
					<td className='p-1'>{user.rate}</td> 
					<td className='p-1'></td> 
					<td className='p-1'><button type="button" className="btn btn-danger m-2" onClick={() => handleDelete(user._id)}>Delete</button></td>
				</tr>

			)
		})}
	</tbody>
	</table>}
		</>
	);
}

export default Users