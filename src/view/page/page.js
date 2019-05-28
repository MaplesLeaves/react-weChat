import React from 'react'
import { Table,  Tag ,Button} from 'antd'

const { Column } = Table
const data = [
	{
		key: '1',
		firstName: 'John',
		lastName: 'Brown',
		age: 32,
		address: 'New York No. 1 Lake Park',
		tags: ['nice', 'developer'],
  },
  {
		key: '4',
		firstName: 'John',
		lastName: 'Brown',
		age: 32,
		address: 'New York No. 1 Lake Park',
		tags: ['nice', 'developer'],
	},
	{
		key: '2',
		firstName: 'Jim',
		lastName: 'Green',
		age: 42,
		address: 'London No. 1 Lake Park',
		tags: ['loser'],
	},
	{
		key: '3',
		firstName: 'Joe',
		lastName: 'Black',
		age: 32,
		address: 'Sidney No. 1 Lake Park',
		tags: ['cool', 'cool'],
	},
]

export default class Page extends React.Component {
  constructor(){
    super()
    this.state = { // 初始化定义变量  在这里进行数据更改 如 vue的data return 里面的数据
        data:data,
        age: 15,
        value: ''
    }
}
  clickAll(a,b){
    console.error(a,b)
    // data.push({tags:[]})
    // this.setState({
    //   data
    // })
  }
  onclickItem(){
  }
  getInitialState(){

  }
  componentWillMount(){
    data[2].age =456
  }
	render() {
		return (
			<div>
        
				<Table dataSource={this.state.data}>
					<Column title="Age" dataIndex="age" key="age" />
					<Column title="Address" dataIndex="address" key="address" />
					<Column
						title="Tags"
						dataIndex="tags"
						key="tags"
						render={tags => (
							<span>
								{tags.map((tag,index) => (
									<Tag color="blue" key={tag + index}>
										{tag}
									</Tag>
								))}
							</span>
						)}
					/>
					<Column
						title="Action"
						key="action"
						render={(text, record) => (
							<span>
							 <Button type="primary" size='small' onClick={()=>this.clickAll(text, record)}>{text.lastName}</Button>
							</span>
						)}
					/>
				</Table>
        <Button type="primary" size='small' onClick={()=>this.onclickItem(this)}>123123123</Button>      
			</div>
		)
	}
}
