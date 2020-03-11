import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Row, Col, List, Modal, message, Switch } from 'antd';
import servicePath from '../config/apiUrl';
import '../static/css/ArticleList.css';

const { confirm } = Modal;

const ArticleList = props => {
	const [list, setList] = useState([]);

	useEffect(() => {
		getList();
	}, []);

	const getList = () => {
		axios({
			method: 'get',
			url: servicePath.getArticleList,
			withCredentials: true
		}).then(res => {
			setList(res.data.data);
		});
	};

	const deleteArticle = id => {
		confirm({
			title: '确认删除文章吗?',
			content: '如果点击OK文章将被直接删除',
			onOk() {
				axios(servicePath.delArticle + id, { withCredentials: true }).then(
					res => {
						message.success('文章删除成功');
						getList();
					}
				);
			},
			onCancel() {
				message.success('文章没有改变');
			}
		});
	};

	return (
		<div>
			<List
				header={
					<Row className='list-div'>
						<Col span={8}>
							<b>标题</b>
						</Col>
						<Col span={4}>
							<b>类别</b>
						</Col>
						<Col span={5}>
							<b>发布时间</b>
						</Col>
						<Col span={3}>
							<b>浏览量</b>
						</Col>
						<Col span={4}>
							<b>操作</b>
						</Col>
					</Row>
				}
				bordered
				dataSource={list}
				renderItem={item => (
					<List.Item>
						<Row className='list-div'>
							<Col span={8}>{item.title}</Col>
							<Col span={4}>{item.typeName}</Col>
							<Col span={5}>{item.addTime}</Col>
							<Col span={3}>{item.viewCount}</Col>
							<Col span={4}>
								<Button type='primary'>修改</Button>
								&nbsp;
								<Button
									onClick={() => {
										deleteArticle(item.id);
									}}
								>
									删除
								</Button>
							</Col>
						</Row>
					</List.Item>
				)}
			/>
		</div>
	);
};

export default ArticleList;
