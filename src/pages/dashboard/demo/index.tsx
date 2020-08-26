import React, { Component } from 'react';
import { Col, Card, Row } from 'antd';
import ReactEcharts from 'echarts-for-react';

import echarts from 'echarts/lib/echarts';

import styles from './style.less';

class demo extends Component {
	render () {
		return (
			<div className={styles.container_box}>
				<div className={styles.firstRow}>
					<Row gutter={32}>
						<Col span={6}>
							<Card size="small" title={
							  <div className={styles.title_box}>
                  <span>账号统计</span>
							  </div>
							} className={styles.firstRowCard} bordered={false}>

							</Card>
						</Col>
						<Col span={6}>
							<Card size="small" title="用户统计" className={styles.firstRowCard} bordered={false}>

							</Card>
						</Col>
						<Col span={6}>
							<Card size="small" title="单位统计" className={styles.firstRowCard} bordered={false}>

							</Card>
						</Col>
						<Col span={6}>
							<Card size="small" title="纳入一体化管理的资产卡片" className={styles.firstRowCard} bordered={false}>

							</Card>
						</Col>
					</Row>
				</div>
				<div className={styles.secondRow}>
					<Row gutter={16}>
						<Col span={8}>
							<Card title="Card title" bordered={false}>

							</Card>
						</Col>
					</Row>
				</div>
				<div className={styles.thirdRow}>

				</div>
			</div>
		);
	}
}

export default demo;
