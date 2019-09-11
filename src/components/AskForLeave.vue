<template>
	<div class="askForLeave">
		<h2>请假管理</h2>
		<table cellpadding="0" cellspacing="0">
			<tr>
				<td rowspan="2">请假人</td>
				<td rowspan="2">请假类别</td>
				<td colspan="2">请假时间</td>
				<td rowspan="2">请假天数(小时)</td>
				<td rowspan="2">批准</td>
				<td rowspan="2">请假事由</td>
			</tr>
			<tr>
				<td>起</td>
				<td>止</td>
			</tr>
			<tr>
				<td>1</td>
				<td>1</td>
				<td>1</td>
				<td>1</td>
				<td>1</td>
				<td>1</td>
				<td>1</td>
			</tr>
		</table>
	</div>
</template>


<script>
	export default {
		name:"askForLeave",
		data(){
			return {
				
			}
		}
	}

</script>


<style lang="less" scoped>
	.askForLeave{
		width: 100%;
		height: 47.2rem;
		overflow: auto;
	}
	h2{
		font-size: 30px;
		margin: 20px auto;
		font-weight: bold;
		letter-spacing: 5px;
		color: #ccc;
	}
	table{
		width: 80%;
		margin: 20px auto 0;
	}
	table tr td{
		border: 1px solid rgb(131,175,155);
		width: 60px;
		height: 40px;
		border-collapse: collapse;
		border-spacing: 0;
	}
</style>