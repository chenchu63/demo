import React, { Component } from 'react';
import { Col, Card, Row, Carousel } from 'antd';

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
							<Card size="small" title={
                <div className={styles.title_box}>
                  <span>用户统计</span>
                </div>
                } className={styles.firstRowCard} bordered={false}>

							</Card>
						</Col>
						<Col span={6}>
							<Card size="small" title={
                <div className={styles.title_box}>
                  <span>单位统计</span>
                </div>
                } className={styles.firstRowCard} bordered={false}>

							</Card>
						</Col>
						<Col span={6}>
							<Card size="small" title={
                <div className={styles.title_box}>
                  <span>纳入一体化管理的资产卡片</span>
                </div>
                } className={styles.firstRowCard} bordered={false}>

							</Card>
						</Col>
					</Row>
				</div>
				<div className={styles.secondRow}>
					<Row gutter={32}>
						<Col span={24}>
							<Card size="small" title={
                <div className={styles.title_box}>
                  <span>新增物料与资产</span>
                </div>
                } className={styles.secondRowCard} bordered={false}>

							</Card>
						</Col>
					</Row>
				</div>
				<div className={styles.thirdRow}>
          <Carousel dots={false} autoplay>
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
		);
	}
}

export default demo;
