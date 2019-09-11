<template>
	<div class="jobEvalution">
		<h2><i class="el-icon-star-off"></i>工作考核</h2>
		<el-input
			class="input1"
			placeholder="请输入要搜索的被考核人"
			prefix-icon="el-icon-search"
			v-model="input1">
		</el-input>
		<router-link to="/main/mark">
			<el-tooltip class="item" effect="dark" content="点击添加数据" placement="top-start">
				<el-button class="btn-edit" type="primary" icon="el-icon-edit" circle></el-button>
			</el-tooltip>
		</router-link>
		<el-table
		:data="tableData"
		style="width: 100%">
			<el-table-column
			prop="name"
			label="被考核人"
			width="100">
			</el-table-column>
			<el-table-column
			prop="id"
			label="员工编号"
			width="100">
			</el-table-column>
			<el-table-column
			prop="dept"
			label="部门">
			</el-table-column>
			<el-table-column
			prop="date"
			label="考核区间"
			width="180">
			</el-table-column>
			<el-table-column
			prop="quality"
			label="个人素质">
			</el-table-column>
			<el-table-column
			prop="attitude"
			label="工作态度">
			</el-table-column>
			<el-table-column
			prop="profess"
			label="专业知识">
			</el-table-column>
			<el-table-column
			prop="capacity"
			label="工作能力">
			</el-table-column>
			<el-table-column
			prop="total"
			label="总体评分">
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		name: "jobEvalution",
		data(){
			return {
				tableData: [
					{
						name: '王小虎',
						id:"0001",
						dept:"财务部",
						date: '2018/05/02-2019/05/02',
						quality:"优秀",
						attitude:"优秀",
						profess:"良好",
						capacity:"良好",
						total:"良好"
					}, {
						name: '王虎',
						id:"0001",
						dept:"财务部",
						date: '2018/05/02-2019/05/02',
						quality:"优秀",
						attitude:"优秀",
						profess:"良好",
						capacity:"良好",
						total:"良好"
					}, {
						name: '小虎',
						id:"0001",
						dept:"财务部",
						date: '2018/05/02-2019/05/02',
						quality:"优秀",
						attitude:"优秀",
						profess:"良好",
						capacity:"良好",
						total:"良好"
					}, {
						name: '王小',
						id:"0001",
						dept:"财务部",
						date: '2018/05/02-2019/05/02',
						quality:"优秀",
						attitude:"优秀",
						profess:"良好",
						capacity:"良好",
						total:"良好"
					},
					{
						name: '王虎',
						id:"0001",
						dept:"财务部",
						date: '2018/05/02-2019/05/02',
						quality:"优秀",
						attitude:"优秀",
						profess:"良好",
						capacity:"良好",
						total:"良好"
					}, {
						name: '小虎',
						id:"0001",
						dept:"财务部",
						date: '2018/05/02-2019/05/02',
						quality:"优秀",
						attitude:"优秀",
						profess:"良好",
						capacity:"良好",
						total:"良好"
					}, {
						name: '王小',
						id:"0001",
						dept:"财务部",
						date: '2018/05/02-2019/05/02',
						quality:"优秀",
						attitude:"优秀",
						profess:"良好",
						capacity:"良好",
						total:"良好"
					}, {
						name: '王虎',
						id:"0001",
						dept:"财务部",
						date: '2018/05/02-2019/05/02',
						quality:"优秀",
						attitude:"优秀",
						profess:"良好",
						capacity:"良好",
						total:"良好"
					}, {
						name: '小虎',
						id:"0001",
						dept:"财务部",
						date: '2018/05/02-2019/05/02',
						quality:"优秀",
						attitude:"优秀",
						profess:"良好",
						capacity:"良好",
						total:"良好"
					}

				],
				input1:""
			}
		}
	}
</script>

<style lang="less" scoped>
	.jobEvalution{
		width: 100%;
		height: 47.2rem;
		overflow: auto;
		text-align: center;
	}
	h2{
		padding: 20px;
		margin-top: 5px;
		font-size: 30px;
		text-align: left;
		color: #409eff;
		letter-spacing: 4px;
		background-color: #fff;
		width: 180px;
	}
	.input1{
		width: 50%;
		margin: 20px auto;
	}
	.btn-edit{
		margin-left: 85px;
	}
</style>