import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import './Loading.css'

const Loading = () => {
	return (
		<div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center'>
			<Button className='p-2' variant="danger" disabled>
				<Spinner
				as="span"
				animation="border"
				size="sm"
				role="status"
				aria-hidden="true"
				style={{height:'30px', width:'30px'}}
				/>
				<span className="visually-hidden">Loading...</span>
			</Button>
		</div>
	);
};

export default Loading;