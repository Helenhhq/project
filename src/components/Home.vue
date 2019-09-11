<template>
	<div class="home">
		<div class="plan-title">工作计划安排表</div>
		<div class="plan-list">
			<router-link to="/main/yearS">
				<div class="plan-item">
					<i class="el-icon-apple icon-item icon-apple"></i>年度计划
				</div>
			</router-link>
			<router-link to="/main/seasonS">
				<div class="plan-item">
					<i class="el-icon-grape icon-item icon-grape"></i>季度计划
				</div>
			</router-link>
			<router-link to="/main/monthS">
				<div class="plan-item">
					<i class="el-icon-orange icon-item icon-orange"></i>月度计划
				</div>
			</router-link>
			<router-link to="/main/weekS">
				<div class="plan-item">
					<i class="el-icon-cherry icon-item icon-cherry"></i>周度计划
				</div>
			</router-link>
		</div>
		<div id="echarts"></div>
	</div>
</template>

<script>
	export default {
		name: 'home',
		methods:{
			showEcharts(){
			var echarts = require('echarts');
			var myChart = echarts.init(document.getElementById('echarts'),'light');
			var option = {
				title: {
					text: '工作计划完成情况'
				},
				tooltip: {},
				legend: {
					data:['完成度']
				},
				xAxis: {
					data: ["年度计划","季度计划","月度计划","一周计划"]
				},
				yAxis: {},
				series: [{
					name: '完成度',
					type: 'bar',
					data: [20, 60, 75, 95]
				}]
			};
			myChart.setOption(option);
			}
		},
		mounted(){
			this.showEcharts()
		}
	}
</script>

<style lang="less" scoped>
	.home{
		width: 100%;
		height: 47.2rem;
		color: #fff;
		border: 1px solid #fff;
	}
	.plan-title{
		margin-top: 40px;
		color: #42b983;
		font-weight: bold;
		font-size: 24px;
		letter-spacing: 4px;
	}
	.plan-list{
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.plan-item{
		max-width: 220px;
		max-height: 100px;
		padding: 20px;
		box-sizing: border-box;
		margin-top: 40px;
		font-size: 26px;
		line-height: 60px;
		color: #333;
		background-color: #fff;
		.icon-item{
			font-size: 40px;
			margin-right: 10px;
			vertical-align: top;
			margin-top: 8px;
		}
		.icon-apple{
			color: red;
		}
		.icon-grape{
			color: purple;
		}
		.icon-orange{
			color: orange;
		}
		.icon-cherry{
			color: pink;
		}
	}
	#echarts{
		width: 100%;
		height: 400px;
		margin: 50px auto;
	}
	a{
		text-decoration: none;
	}
</style>
