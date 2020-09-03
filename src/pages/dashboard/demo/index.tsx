import React, { Component } from 'react';
import { Col, Card, Row, Carousel } from 'antd';

import styles from './style.less';

import ReactEcharts from 'echarts-for-react';


class demo extends Component {
	
	constructor(props){
        super(props)
        this.state = {
            materials:[5000, 5000, 5000, 5000, 5000, 5000, 6000, 0, 0, 0, 0 ,0],
            assets:[0, 0, 0, 2000, 1000, 5000, 6000, 5000, 5000, 8000, 9000 ,0],
			compatible: [
						{value: 900, name: '匹配资源成功的资产'},
						{value: 310, name: '待匹配资源的资产'}
					],
			companies: [
						{value: 23, name: '建设单位'},
						{value: 69, name: '施工单位'}
					],
			users: [
						{value: 400, name: '资产管理员'},
						{value: 88, name: '项目经理'},
						{value: 77, name: '施工项目经理'},
						{value: 300, name: '施工人员'},
						{value: 23, name: '管理员'},
						{value: 69, name: '其他'}
			],
			accounts: {
				register: 1046,
				login: 621,
				active: 581,
				today: 118
			}
        }
    }
	
	/**
     * 账号统计了漏斗图
     */
    getAccountsOption = (accounts) =>{
        return {
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c}%"
			},
			color: ["#0099e5","#00dbc2","#88cc44","#f13f84"],
			series: [
				{
					type:'funnel',
					top: 5,
					bottom: 5,
					left: 20,
					right: 5,
					width: '80%',
					sort: 'descending',
					label: {
						show: true,
						position: 'inside',
						formatter: dataLabel => {
							if (dataLabel.name === '当前登录用户') {
								return "当前"+'\n'+"登录"+'\n';
							}else{
								return dataLabel.name;
							}
						},
					},
					itemStyle: {
						borderColor: '#fff',
						borderWidth: 1
					},
					emphasis: {
						label: {
							fontSize: 20
						}
					},
					data: [
						{value: 100, name: '注册用户'},
						{value: 75, name: '历史登录用户'},
						{value: 50, name: '活跃用户'},
						{value: 25, name: '当前登录用户'}
					]
				},
				{
					type:'funnel',
					top: 5,
					bottom: 5,
					left: 20,
					right: 5,
					width: '80%',
					sort: 'descending',
					label: {
						show: true,
						fontSize: 10,
						formatter: dataLabel => {
							let num = 0;
							if (dataLabel.name === '注册用户') {
								num = accounts ? accounts.register : 0;
							} else if (dataLabel.name === '历史登录用户') {
								num = accounts ? accounts.login : 0;
							} else if (dataLabel.name === '活跃用户') {
								num = accounts ? accounts.active : 0;
							} else if (dataLabel.name === '当前登录用户') {
								num = accounts ? accounts.today : 0;
							}
							return (typeof num != 'undefined' ? num : 0);
						},
					},
					labelLine: {
						lineStyle: {
							type: 'dashed',
						},
					},
					itemStyle: {
						borderColor: '#fff',
						borderWidth: 1
					},
					emphasis: {
						label: {
							fontSize: 20
						}
					},
					data: [
						{value: 100, name: '注册用户'},
						{value: 75, name: '历史登录用户'},
						{value: 50, name: '活跃用户'},
						{value: 25, name: '当前登录用户'}
					]
				}
			]
		};
    }
	
	/**
     * 用户统计环形图
     */
    getUsersOption = (users) =>{
        return {
			title: {
			  text: " " + "1000",
			  x: '57%',
			  y: 'center',
			  textStyle: {
				 fontSize: 16,
				 fontWeight: 'bold',
				 color: '#1890ff'
			  },
			  subtext: "用户总数\n",
			  subtextStyle: {
				  fontSize: 14,
				  color: 'black'
			  }
			},
			tooltip: {
				trigger: 'item',
				formatter: '{a} <br/>{b}: {c} ({d}%)'
			},
			hoverAnimation: false,
			animation: false,
			legend: {
				orient: 'vertical',
				left: 10,
				data: ['资产管理员', '项目经理', '施工项目经理', '施工人员', '管理员', '其他']
			},
			series: [
				{
					type: 'pie',
					color: ["#0099e5","#b6cbff","#00dbc2","#88cc44","#f13f84","#b9b8b8"],
					radius: ['75%', '95%'],
					center: ['65%', '50%'],
					avoidLabelOverlap: false,
					label: {
						show: false,
						position: 'center'
					},
					emphasis: {
						label: {
							show: false,
							fontSize: '30',
							fontWeight: 'bold'
						}
					},
					labelLine: {
						show: false
					},
					data: users
				},
				{
					type: 'pie',
					color: ["black","black","black","black","red","black"],
					radius: ['70%', '76%'],
					center: ['65%', '50%'],
					avoidLabelOverlap: false,
					label: {
						show: false,
						position: 'center'
					},
					emphasis: {
						label: {
							show: false,
							fontSize: '30',
							fontWeight: 'bold'
						}
					},
					labelLine: {
						show: false
					},
					data: users
				}
			]
        };
    }
	
	/**
     * 单位统计环形图
     */
    getCompaniesOption = (companies) =>{
        return {
			tooltip: {
				trigger: 'item',
				formatter: '{a} <br/>{b}: {c} ({d}%)'
			},
			legend: {
				orient: 'vertical',
				left: 10,
				data: ['建设单位', '施工单位']
			},
			hoverAnimation: false,
			animation: false,
			title: {
			  text: "  " + "100",
			  x: '52%',
			  y: 'center',
			  textStyle: {
				 fontSize: 16,
				 fontWeight: 'bold',
				 color: '#1890ff'
			  },
			  subtext: "单位总数\n",
			  subtextStyle: {
				  fontSize: 14,
				  color: 'black'
			  }
			},
			color: ["#0099e5", "#88cc44"],
			series: [
				{
					type: 'pie',
					radius: ['75%', '95%'],
					center: ['60%', '50%'],
					avoidLabelOverlap: false,
					label: {
						show: false,
						position: 'center'
					},
					emphasis: {
						label: {
							show: false,
							fontSize: '30',
							fontWeight: 'bold'
						}
					},
					labelLine: {
						show: false
					},
					data: companies
				},
				{
					type: 'pie',
					radius: ['70%', '76%'],
					center: ['60%', '50%'],
					avoidLabelOverlap: false,
					label: {
						show: false,
						position: 'center'
					},
					emphasis: {
						label: {
							show: false,
							fontSize: '30',
							fontWeight: 'bold'
						}
					},
					labelLine: {
						show: false
					},
					data: companies
				}
			]
        };
    }
	
	/**
     * 卡片统计环形图
     */
    getCardsOption = (compatible) =>{
        return {
			tooltip: {
				trigger: 'item',
				formatter: '{a} <br/>{b}: {c} ({d}%)'
			},
			legend: {
				orient: 'vertical',
				left: 10,
				data: ['匹配资源成功的资产', '待匹配资源的资产']
			},
			hoverAnimation: false,
			animation: false,
			title: {
			  text: "1000000",
			  x: '50%',
			  y: 'center',
			  textStyle: {
				 fontSize: 16,
				 fontWeight: 'bold',
				 color: '#1890ff'
			  },
			  subtext: "资产卡片数\n",
			  subtextStyle: {
				  fontSize: 14,
				  color: 'black'
			  }
			},
			color: ["#0099e5", "#b9b8b8"],
			series: [
				{
					type: 'pie',
					radius: ['75%', '95%'],
					center: ['60%', '50%'],
					avoidLabelOverlap: false,
					label: {
						show: false,
						position: 'center'
					},
					emphasis: {
						label: {
							show: false,
							fontSize: '30',
							fontWeight: 'bold'
						}
					},
					labelLine: {
						show: false
					},
					data: compatible
				},
				{
					type: 'pie',
					radius: ['71%', '76%'],
					center: ['60%', '50%'],
					avoidLabelOverlap: false,
					label: {
						show: false,
						position: 'center'
					},
					emphasis: {
						label: {
							show: false,
							fontSize: '30',
							fontWeight: 'bold'
						}
					},
					labelLine: {
						show: false
					},
					data: compatible
				}
			]
        };
    }
	
    /**
     * 新增待转资物料与资产柱状图
     */
    getNewAssetsOption = (materials,assets) =>{
		let xYear = (new Date).getUTCFullYear() + "年";

        return {
			grid: [{
				left: '5',  
				right: '0',  
				bottom: '0',  
				top: '10%',  
				containLabel: true  
			}],
			color: ["#0099e5", "#88cc44"],
            tooltip: {},
            legend: {
                data:['新增待转资物料','新增资产']
            },
            xAxis: {
				axisLine: {
					show: true,
					lineStyle: {
						color: '#8a8a8a',
						width: 1,
						type: 'solid'
					  }
				},
                data: [xYear+"1月", xYear+"2月", xYear+"3月", xYear+"4月", xYear+"5月", xYear+"6月", xYear+"7月", xYear+"8月", xYear+"9月", xYear+"10月", xYear+"11月", xYear+"12月"]
			},
			yAxis: [
				{
					type: 'value',
					splitLine: {
						show: true,
						lineStyle: {
							color: '#ececec',
							width: 1,
							type: 'solid'
						  }
					},
					axisLine: {
						show: true,
						lineStyle: {
							color: '#8a8a8a',
							width: 1,
							type: 'solid'
						  }
					}
				}
			],
            series: [{
                name: '新增待转资物料',
                type: 'bar',
				barWidth: 20,
				barGap: '8%',
                data: materials
            },
            {
                name: '新增资产',
                type: 'bar',
				barWidth: 20,
                data: assets
            }]
        };
    }

	render () {
		const {materials,assets,accounts,users,companies,compatible} = this.state;
		return (
			<div className={styles.container_box}>
				<div className={styles.eyebrow}>
					<div className={styles.eyebrow_date}><span>上线时间：</span><span className={styles.eyebrow_text}>2020年4月7日</span></div>
					<div className={styles.eyebrow_longth}><span>运行时间：</span><span className={styles.eyebrow_text}>188天</span></div>
				</div>
			<div className={styles.content_chart_box}>
				<div className={styles.firstRow}>
					<Row gutter={32}>
						<Col span={6}>
							<Card size="small" title={
							    <div className={styles.title_box}>
								    <span>账号统计</span>
							    </div>
								} className={styles.firstRowCard} bordered={false}>
								<ReactEcharts style={{width: '100%', height: '180px'}} option={this.getAccountsOption(accounts)}/>
							</Card>
						</Col>
						<Col span={6}>
							<Card size="small" title={
								<div className={styles.title_box}>
								  <span>用户统计</span>
								</div>
								} className={styles.firstRowCard} bordered={false}>
								<ReactEcharts style={{width: '100%', height: '180px'}} option={this.getUsersOption(users)}/>
							</Card>
						</Col>
						<Col span={6}>
							<Card size="small" title={
								<div className={styles.title_box}>
								  <span>单位统计</span>
								</div>
								} className={styles.firstRowCard} bordered={false}>
								<ReactEcharts style={{width: '100%', height: '180px'}} option={this.getCompaniesOption(companies)} />
							</Card>
						</Col>
						<Col span={6}>
							<Card size="small" title={
								<div className={styles.title_box}>
								  <span>纳入一体化管理的资产卡片</span>
								</div>
								} className={styles.firstRowCard} bordered={false}>
								<ReactEcharts style={{width: '100%', height: '180px'}} option={this.getCardsOption(compatible)} />
							</Card>
						</Col>
					</Row>
				</div>
				<div className={styles.secondRow}>
					<Row gutter={32}>
						<Col span={24}>
							<Card size="small" title={
								<div className={styles.title_box}>
								  <span>新增待转资物料与资产</span>
								</div>
								} className={styles.secondRowCard} bordered={false}>
								<ReactEcharts style={{width: '100%', height: '250px'}} option={this.getNewAssetsOption(materials,assets)} />
							</Card>
						</Col>
					</Row>
				</div>
				<div className={styles.thirdRow}>
          <Carousel dotPosition={'bottom'} autoplay>
            <div>
              <Row gutter={32}>
                <Col span={6}>
                  <Card size="small" title={
                    <div className={styles.area_title_box}>
                      <div className={styles.title_icon_box}>
                        <span>成</span>
                      </div>
                      <div className={styles.title_text_box}>
                        <span>成都分公司</span>
                      </div>
                    </div>
                  } className={styles.thirdRowCard} bordered={false}>
                    <div className={styles.area_content_box}>
                      <div className={styles.content_big_box}><span>接入时间：</span><span>2020-04-07</span></div>
                      <div className={styles.content_box}><span>管理项目：</span><span>100</span></div>
                      <div className={styles.content_box}><span>管理任务点：</span><span>1000</span></div>
                      <div className={styles.content_box}><span>新增待转资物料</span><span>1000</span></div>
                      <div className={styles.content_box}><span>新增资产</span><span>500</span></div>
                      <div className={styles.content_box}><span>纳入管理的资产卡片：</span><span>1000</span></div>
                      <div className={styles.content_box}><span>成功匹配资源的资产：</span><span>500</span></div>
                      <div className={styles.content_light_box}><span>资产资源匹配率：</span><span>50%</span></div>
                    </div>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card size="small" title={
                    <div className={styles.area_title_box}>
                      <div className={styles.title_icon_box}>
                        <span>天</span>
                      </div>
                      <div className={styles.title_text_box}>
                        <span>天府新区分公司</span>
                      </div>
                    </div>
                  } className={styles.thirdRowCard} bordered={false}>
                    <div className={styles.area_content_box}>
                      <div className={styles.content_big_box}><span>接入时间：</span><span>2020-04-07</span></div>
                      <div className={styles.content_box}><span>管理项目：</span><span>100</span></div>
                      <div className={styles.content_box}><span>管理任务点：</span><span>1000</span></div>
                      <div className={styles.content_box}><span>新增待转资物料</span><span>1000</span></div>
                      <div className={styles.content_box}><span>新增资产</span><span>500</span></div>
                      <div className={styles.content_box}><span>纳入管理的资产卡片：</span><span>1000</span></div>
                      <div className={styles.content_box}><span>成功匹配资源的资产：</span><span>500</span></div>
                      <div className={styles.content_light_box}><span>资产资源匹配率：</span><span>50%</span></div>
                    </div>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card size="small" title={
                    <div className={styles.area_title_box}>
                      <div className={styles.title_icon_box}>
                        <span>绵</span>
                      </div>
                      <div className={styles.title_text_box}>
                        <span>绵阳分公司</span>
                      </div>
                    </div>
                  } className={styles.thirdRowCard} bordered={false}>
                    <div className={styles.area_content_box}>
                      <div className={styles.content_big_box}><span>接入时间：</span><span>2020-04-07</span></div>
                      <div className={styles.content_box}><span>管理项目：</span><span>100</span></div>
                      <div className={styles.content_box}><span>管理任务点：</span><span>1000</span></div>
                      <div className={styles.content_box}><span>新增待转资物料</span><span>1000</span></div>
                      <div className={styles.content_box}><span>新增资产</span><span>500</span></div>
                      <div className={styles.content_box}><span>纳入管理的资产卡片：</span><span>1000</span></div>
                      <div className={styles.content_box}><span>成功匹配资源的资产：</span><span>500</span></div>
                      <div className={styles.content_light_box}><span>资产资源匹配率：</span><span>50%</span></div>
                    </div>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card size="small" title={
                    <div className={styles.area_title_box}>
                      <div className={styles.title_icon_box}>
                        <span>遂</span>
                      </div>
                      <div className={styles.title_text_box}>
                        <span>遂宁分公司</span>
                      </div>
                    </div>
                  } className={styles.thirdRowCard} bordered={false}>
                    <div className={styles.area_content_box}>
                      <div className={styles.content_big_box}><span>接入时间：</span><span>2020-04-07</span></div>
                      <div className={styles.content_box}><span>管理项目：</span><span>100</span></div>
                      <div className={styles.content_box}><span>管理任务点：</span><span>1000</span></div>
                      <div className={styles.content_box}><span>新增待转资物料</span><span>1000</span></div>
                      <div className={styles.content_box}><span>新增资产</span><span>500</span></div>
                      <div className={styles.content_box}><span>纳入管理的资产卡片：</span><span>1000</span></div>
                      <div className={styles.content_box}><span>成功匹配资源的资产：</span><span>500</span></div>
                      <div className={styles.content_light_box}><span>资产资源匹配率：</span><span>50%</span></div>
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
            <div>
              <Row gutter={32}>
                <Col span={6}>
                  <Card size="small" title={
                    <div className={styles.area_title_box}>
                      <div className={styles.title_icon_box}>
                        <span>攀</span>
                      </div>
                      <div className={styles.title_text_box}>
                        <span>攀枝花分公司</span>
                      </div>
                    </div>
                  } className={styles.thirdRowCard} bordered={false}>
                    <div className={styles.area_content_box}>
                      <div className={styles.content_big_box}><span>接入时间：</span><span>2020-04-07</span></div>
                      <div className={styles.content_box}><span>管理项目：</span><span>100</span></div>
                      <div className={styles.content_box}><span>管理任务点：</span><span>1000</span></div>
                      <div className={styles.content_box}><span>新增待转资物料</span><span>1000</span></div>
                      <div className={styles.content_box}><span>新增资产</span><span>500</span></div>
                      <div className={styles.content_box}><span>纳入管理的资产卡片：</span><span>1000</span></div>
                      <div className={styles.content_box}><span>成功匹配资源的资产：</span><span>500</span></div>
                      <div className={styles.content_light_box}><span>资产资源匹配率：</span><span>50%</span></div>
                    </div>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card size="small" title={
                    <div className={styles.area_title_box}>
                      <div className={styles.title_icon_box}>
                        <span>自</span>
                      </div>
                      <div className={styles.title_text_box}>
                        <span>自贡分公司</span>
                      </div>
                    </div>
                  } className={styles.thirdRowCard} bordered={false}>
                    <div className={styles.area_content_box}>
                      <div className={styles.content_big_box}><span>接入时间：</span><span>2020-04-07</span></div>
                      <div className={styles.content_box}><span>管理项目：</span><span>100</span></div>
                      <div className={styles.content_box}><span>管理任务点：</span><span>1000</span></div>
                      <div className={styles.content_box}><span>新增待转资物料</span><span>1000</span></div>
                      <div className={styles.content_box}><span>新增资产</span><span>500</span></div>
                      <div className={styles.content_box}><span>纳入管理的资产卡片：</span><span>1000</span></div>
                      <div className={styles.content_box}><span>成功匹配资源的资产：</span><span>500</span></div>
                      <div className={styles.content_light_box}><span>资产资源匹配率：</span><span>50%</span></div>
                    </div>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card size="small" title={
                    <div className={styles.area_title_box}>
                      <div className={styles.title_icon_box}>
                        <span>南</span>
                      </div>
                      <div className={styles.title_text_box}>
                        <span>南通分公司</span>
                      </div>
                    </div>
                  } className={styles.thirdRowCard} bordered={false}>
                    <div className={styles.area_content_box}>
                      <div className={styles.content_big_box}><span>接入时间：</span><span>2020-04-07</span></div>
                      <div className={styles.content_box}><span>管理项目：</span><span>100</span></div>
                      <div className={styles.content_box}><span>管理任务点：</span><span>1000</span></div>
                      <div className={styles.content_box}><span>新增待转资物料</span><span>1000</span></div>
                      <div className={styles.content_box}><span>新增资产</span><span>500</span></div>
                      <div className={styles.content_box}><span>纳入管理的资产卡片：</span><span>1000</span></div>
                      <div className={styles.content_box}><span>成功匹配资源的资产：</span><span>500</span></div>
                      <div className={styles.content_light_box}><span>资产资源匹配率：</span><span>50%</span></div>
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
            </Carousel>
			</div>
		</div>
		</div>
		);
	}
}

export default demo;
