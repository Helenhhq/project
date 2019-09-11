<template>
	<div class="staffInfo">
		<h2>职工信息管理</h2>
		<table>
			<tr>
				<td>序号</td>
				<td>姓名</td>
				<td>性别</td>
				<td>籍贯</td>
				<td>政治面貌</td>
				<td>年龄</td>
				<td>学历</td>
				<td>身份证号</td>
				<td>婚姻状况</td>
				<td>联系电话</td>
				<td>电子邮箱</td>
				<td>通讯地址</td>
			</tr>
			<tr>
				<td>1</td>
				<td>小张</td>
				<td>男</td>
				<td>浙江</td>
				<td>群众</td>
				<td>22</td>
				<td>本科</td>
				<td>310345199702058934</td>
				<td>未婚</td>
				<td>15951002455</td>
				<td>1869503020@qq.com</td>
				<td>浙江杭州</td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default {
		name: 'staffInfo'
	}
</script>

<style lang="less" scoped>
	.staffInfo{
		width: 100%;
		height: 735px;
		background-color: #fff;
		color: #333;
		border-top: 1px solid #ccc;
	}
	h2{
		padding: 20px;
	}
	table{
		width: 90%;
		margin: 30px auto;
	}
	table tr td{
		width: 100px;
		height: 40px;
		border: 1px solid #fff;
	}
	table tr:first-child td{
		background-color: #f56c6c;
		color: #fff;
		font-weight: bold;
	}
</style>
