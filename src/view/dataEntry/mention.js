// 提及
import React, { Component } from 'react'
import { Mention, Avatar } from 'antd';
const Nav = Mention.Nav;
const { toString, toContentState } = Mention;
const webFrameworks = [
  { name: 'React', type: 'JavaScript', icon: 'https://zos.alipayobjects.com/rmsportal/LFIeMPzdLcLnEUe.svg' },
  { name: 'Angular', type: 'JavaScript', icon: 'https://zos.alipayobjects.com/rmsportal/PJTbxSvzYWjDZnJ.png' },
  { name: 'Dva', type: 'Javascript', icon: 'https://zos.alipayobjects.com/rmsportal/EYPwSeEJKxDtVxI.png' },
  { name: 'Flask', type: 'Python', icon: 'https://zos.alipayobjects.com/rmsportal/xaypBUijfnpAlXE.png' },
];
export class mention extends Component {
  onChange = (contentState) => {
    console.error(toString(contentState));
  }

  onSelect = (suggestion) => {
    console.error('onSelect', suggestion);
  }
  state = {
    listAll: ['张三', '李四', '王五', '刘就', '贴心'],
    suggestions: [],
  }
  onSearchChange = (value) => {
    const searchValue = value.toLowerCase();
    const filtered = webFrameworks.filter(item => item.name.toLowerCase().indexOf(searchValue) !== -1);
    const suggestions = filtered.map(suggestion => (
      <Nav
        value={suggestion.name}
        data={suggestion}
        disabled={suggestion.disabled}
      >
        <Avatar
          src={suggestion.icon}
          size="small"
          style={{
            width: 14, height: 14, marginRight: 8, top: -1, position: 'relative',
          }}
        />
        {suggestion.name} - {suggestion.type}
      </Nav>
    ));
    this.setState({ suggestions });
  }
  render() {
    return (
      <div>
        <Mention
          style={{ width: '100%' }}
          onChange={this.onChange}
          defaultValue={toContentState('')}
          defaultSuggestions={this.state.listAll}
          onSelect={this.onSelect}
        />
        <Mention
          style={{ width: '100%' }}
          onChange={this.onChange}
          defaultSuggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
          onSelect={this.onSelect}
          placement="top"
        />
        <Mention
          style={{ width: '100%' }}
          suggestions={this.state.suggestions}
          onSearchChange={this.onSearchChange}
        />
        <Mention
          style={{ width: '100%' }}
          onChange={this.onChange}
          placeholder="this is readOnly Mention"

          readOnly
        />
      </div>
    )
  }
}

export default mention


