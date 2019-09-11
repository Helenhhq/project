<template>
	<div class="jobEvalution">
		<h2>工作调动管理</h2>
		<el-input
			class="input1"
			placeholder="请输入要搜索的被调动人"
			prefix-icon="el-icon-search"
			v-model="input1">
		</el-input>
		<el-table
		class="el-table"
		:data="tableData"
		style="width: 100%">
			<el-table-column
			prop="name"
			label="被调动人"
			width="100">
			</el-table-column>
			<el-table-column
			prop="lastdept"
			label="原有部门"
			width="120">
			</el-table-column>
			<el-table-column
			prop="nextdept"
			label="调至部门"
			width="120">
			</el-table-column>
			<el-table-column
			prop="lastpost"
			label="原有岗位">
			</el-table-column>
			<el-table-column
			prop="nextpost"
			label="调至岗位">
			</el-table-column>
			<el-table-column
			prop="length"
			label="工作年限">
			</el-table-column>
			<el-table-column
			prop="reason"
			label="调动原因">
			</el-table-column>
			<el-table-column
			prop="wageschange"
			label="工资变动">
			</el-table-column>
			<el-table-column
			prop="agree"
			label="同意情况">
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
						lastdept:"0001",
						nextdept:"财务部",
						nextpost: '2018/05/02-2019/05/02',
						lastpost:"优秀",
						length:"3",
						reason:"良好",
						wageschange:"+3000",
						agree:"同意"
					}, {
						name: '王小虎',
						lastdept:"0001",
						nextdept:"财务部",
						nextpost: '2018/05/02-2019/05/02',
						lastpost:"优秀",
						length:"3",
						reason:"良好",
						wageschange:"+3000",
						agree:"同意"
					}, {
						name: '王小虎',
						lastdept:"0001",
						nextdept:"财务部",
						nextpost: '2018/05/02-2019/05/02',
						lastpost:"优秀",
						length:"3",
						reason:"良好",
						wageschange:"+3000",
						agree:"同意"
					}, {
						name: '王小虎',
						lastdept:"0001",
						nextdept:"财务部",
						nextpost: '2018/05/02-2019/05/02',
						lastpost:"优秀",
						length:"3",
						reason:"良好",
						wageschange:"+3000",
						agree:"同意"
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
	}
	.el-table{
		text-align: center;
	}
	h2{
		margin: 10px auto;
	}
	.input1{
		width: 50%;
		margin: 20px auto;
	}
</style>