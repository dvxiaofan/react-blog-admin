import React, { useState } from 'react';
import marked from 'marked';
import '../static/css/AddArticle.css';
import { Row, Col, Input, Select, Button, DatePicker } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

function AddArticle() {
	const [articleId, setArticleId] = useState(0); // 文章ID, 0 是新增, 非0是修改
	const [articleTitle, setArticleTitle] = useState(''); // 文章标题
	const [articleContent, setArticleContent] = useState(''); // 文章内容
	const [markdownContent, setMarkdownContent] = useState('预览内容'); // HTML内容
	const [introduceMd, setIntroduceMd] = useState(); // 简介Markdown内容
	const [introduceHtml, setIntroduceHtml] = useState('等待编辑'); // 简介HTML内容
	const [showDate, setShowDate] = useState(); // 发布日期
	const [updateDate, setUpdateDate] = useState(); // 修改日期
	const [typeInfo, setTypeInfo] = useState([]); // 文章类别信息
	const [selectedType, setSelectedType] = useState(1); // 选择的文章类别

	const renderer = new marked.Renderer();

	marked.setOptions({
		renderer: renderer,
		gfm: true,
		pedantic: false,
		sanitize: false,
		tables: true,
		breaks: false,
		smartLists: true,
		smartypants: false
	});

	// 修改文章内容
	const changeContent = e => {
		setArticleContent(e.target.value);
		let html = marked(e.target.value);
		setMarkdownContent(html);
	};

	// 修改简介
	const changeIntroduce = e => {
		setIntroduceMd(e.target.value);
		let html = marked(e.target.value);
		setIntroduceHtml(html);
	};

	return (
		<div>
			<Row gutter={5}>
				<Col span={18}>
					<Row gutter={10}>
						<Col span={20}>
							<Input placeholder='博客标题' size='large' />
						</Col>
						<Col span={4}>
							&nbsp;
							<Select defaultValue='1' size='large'>
								<Option value='1'>博文</Option>
							</Select>
						</Col>
					</Row>
					<br />

					<Row gutter={10}>
						<Col span={12}>
							<TextArea
								className='markdown-content'
								rows={35}
								placeholder='文章内容'
								onChange={changeContent}
							/>
						</Col>
						<Col span={12}>
							<div
								className='show-html'
								dangerouslySetInnerHTML={{
									__html: markdownContent
								}}
							></div>
						</Col>
					</Row>
				</Col>
				<Col span={6}>
					<Row>
						<Col span={24}>
							<Button size='large'>暂存文章</Button>&nbsp;
							<Button type='primary' size='large'>
								发布文章
							</Button>
							<br />
						</Col>
						<Col span={24}>
							<br />
							<TextArea
								rows={4}
								placeholder='文章简介'
								onChange={changeIntroduce}
							></TextArea>
							<br />
							<br />
							<div className='introduce-html' dangerouslySetInnerHTML={{__html: introduceHtml}}></div>
						</Col>
						<Col span={12}>
							<div className='date-select'>
								<DatePicker
									placeholder='发布时间'
									size='large'
								/>
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
}

export default AddArticle;
