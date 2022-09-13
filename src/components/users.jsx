import React, { useState } from 'react';
import api from '../api'

export const Users = () => {
	const [users, setUsers] = useState(api.users.fetchAll());

	const handleDelete = (usersId)=>{
		console.log('delete');
		console.log(users)
		
	};

	const renderPhrase = (number) => {
		return 'человек'
	};


	return (
		<>
		<span className=' m-2 badge bg-primary'><h5> {users.length} {renderPhrase()} тусанет с тобой сегодня</h5></span>
		<table className="table">
	<thead>
		<tr>
		<th scope="col">Имя</th>
		<th scope="col">Качества</th>
		<th scope="col" >Профессия</th>
		<th scope="col">Встретился раз</th>
		<th scope="col">Оценка</th>
		<th scope="col"></th>
		</tr>
	</thead>
	<tbody>
		{users.map((user)=>{
			return (<tr key={user._id}>
					<td>{user.name}</td>
					<td>{user.qualities.map(qality => <span key={qality._id} className={'m-1 badge bg-'+qality.color}>{qality.name}</span>)}</td>
					<td>{user.profession.name }</td>
					<td>{user.completedMeetings}</td>
					<td>{user.rate}</td> 
					<td><button type="button" className="btn btn-danger m-2" onClick={() => handleDelete(user._id)}>Delete</button></td>
				</tr>

			)
		})}
	</tbody>
	</table>
		</>
	);
}

export default Users