import { Button, Card, Input, Space } from "antd"
import { useEffect, useState } from "react"

const Home = () => {
	const [id, setId] = useState()
  return (
	<div className="container">
		<h1 style={{textAlign: 'center'}}>Fetch post</h1>
		<Input
		placeholder="Enter user Id"
		type="number"
		onChange={(e) => setId(e.target.value)}
		value={id}
		style={{width: '300px'}}
		/>
		<br />
		<br />
		<Space size='small' style={{margin: 10}}>
			<Button type="primary">Fetch User Post</Button>
			<Button type="primary">Create User Post</Button>
		</Space>
	</div>
  )
}

export default Home