<template>
	<div class="salary">
		<h2>员工工资统计表</h2>
		<div class="bar-btn">
			<el-input class="input-search" v-model="input" placeholder="查找姓名"></el-input>
			<el-button class="btn-add" type="success" plain>添加</el-button>
		</div>
		<table cellpadding="0" cellspacing="0">
			<tr>
				<td>姓名</td>
				<td>基本工资</td>
				<td>加班小时</td>
				<td>加班工资</td>
				<td>扣除金额</td>
				<td>福利</td>
				<td>奖金</td>
				<td>其他</td>
				<td>实际工资</td>
			</tr>
			<tr>
				<td>小明</td>
				<td>5000</td>
				<td>2</td>
				<td>50</td>
				<td>700</td>
				<td>500</td>
				<td>3000</td>
				<td>200</td>
				<td>8500</td>
			</tr>
			<tr>
				<td>小明</td>
				<td>5000</td>
				<td>2</td>
				<td>50</td>
				<td>700</td>
				<td>500</td>
				<td>3000</td>
				<td>200</td>
				<td>8500</td>
			</tr>
			<tr>
				<td>小明</td>
				<td>5000</td>
				<td>2</td>
				<td>50</td>
				<td>700</td>
				<td>500</td>
				<td>3000</td>
				<td>200</td>
				<td>8500</td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default {
		name: 'salary'
	}
</script>

<style lang="less" scoped>
	.salary{
		width: 100%;
		height: 47.2rem;
		text-align: center;
		color: #fff;
		/*background-color: rgb(160,191,124);*/
		background: url(../assets/bg1.png) no-repeat;
		background-size: cover;
	}
	h2{
		padding-top: 40px;
		font-size: 28px;
		letter-spacing: 4px;
	}
	table{
		width: 80%;
		margin: 30px auto;
	}
	table tr td{
		width: 100px;
		height: 40px;
	}
	table tr td:not(:last-child){
		border-right: 1px solid #fff;
	}
	table tr:not(:first-child) td{
		border-top: 1px solid #fff;
	}
	.bar-btn{
		width: 80%;
		margin: 20px auto;
		.input-search{
			width: 20%;
		}
	}
	.btn-add{
		margin-left: 60px;
	}
</style>
