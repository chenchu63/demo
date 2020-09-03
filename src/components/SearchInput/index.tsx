import React from 'react';
import { Select } from 'antd';
const Option = Select.Option;
let timeout;
let currentValue;
let dataSource;
function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    if (currentValue === value) {
      const {nodes=[]}=dataSource;
        const data = [];
        if(nodes){
          try{
              value=value.trim();
              const reg = new RegExp(value);
              nodes.forEach(node => {
                  if(reg.test(node.label) ||reg.test(node.label.text)){
                      if(node.label){
                          let suffix='';
                          switch (node.type){
                              case 'collection':
                                  suffix='(数据集)';
                                break;
                              case 'table':
                                  suffix='(CDR)';
                                break;
                              case 'service':
                                  suffix='(服务)';
                                break;
                              case 'cda':
                                  suffix='(cda)';
                                break;
                          }
                          if(node.label.text){
                              data.push({
                                  id:node.id,
                                  value: node.label.text+suffix,
                                  text: node.label.text+suffix,
                              });
                          }else{
                              data.push({
                                  id:node.id,
                                  value: node.label+suffix,
                                  text: node.label+suffix,
                              });
                          }
                      }
                  }
              });
          }catch(e){
            console.log(e)
          }
      }
      callback(data);
    }
  }

  timeout = setTimeout(fake, 300);
}
/**
 *封装下拉菜单是搜索框
 * 官方示例:https://ant-design.gitee.io/components/select-cn/#header
 *@author WangXLong
 *@date   2018-12-27
 */
export default class SearchInput extends React.Component {
  state = {
    data: [],
    value: undefined,
};

  handleSearch = (value) => {
    dataSource=this.props.data;
    fetch(value, data => this.setState({ data }));

  };

  handleChange = (value) => {
    this.setState({ value });
    this.props.FatherInput(value);
  };

  render() {
    const finalData=this.state.data;
    const options =finalData.map((d,index) => <Option key={d.id+index} value={d.value} >{d.text}</Option>);
    return (
      <Select
        showSearch
        value={this.state.value}
        placeholder={this.props.placeholder}
        style={this.props.style}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        notFoundContent={null}
      >
        {options}
      </Select>
    );
  }
}
