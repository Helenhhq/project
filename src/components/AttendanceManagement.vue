<template>
	<div class="attendance">
		<div class="attendance-title"><span>考勤管理</span></div>
		<div class="calendar">
			<el-calendar v-model="value"></el-calendar>
		</div>
		<div id="macro">
			<div id="tu1"></div>
			<div id="tu2"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'attendance',
		data(){
			return {
				hiddenArrow:true,
				value: new Date(),
			}
		},
		methods:{
			showDoughnut1(){
				var echarts = require('echarts');
				var myChart = echarts.init(document.getElementById('tu1'));
				var option = {
					title: {
						text: '本月考勤情况'
					},
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}: {c} ({d}%)"
					},
					legend: {
						orient: 'vertical',
						x: 'right',
						data:['全勤','早退/迟到','缺勤','旷工']
					},
					series: [
						{
							name:'考勤来源',
							type:'pie',
							radius: ['50%', '70%'],
							avoidLabelOverlap: false,
							label: {
							normal: {
								show: false,
								position: 'center'
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '30',
									fontWeight: 'bold'
								}
							}
						},
						labelLine: {
							normal: {
									show: false
								}
							},
							data:[
								{value:70, name:'全勤'},
								{value:20, name:'早退/迟到'},
								{value:6, name:'缺勤'},
								{value:4, name:'旷工'}
							]
						}
					]
				};
				myChart.setOption(option);
			},
			showDoughnut2(){
				var echarts = require('echarts');
				var myChart = echarts.init(document.getElementById('tu2'));
				var option = {
					title: {
						text: '今日考勤情况'
					},
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}: {c} ({d}%)"
					},
					legend: {
						orient: 'vertical',
						x: 'right',
						data:['全勤','早退/迟到','缺勤','旷工']
					},
					series: [
						{
							name:'考勤来源',
							type:'pie',
							radius: ['50%', '70%'],
							avoidLabelOverlap: false,
							label: {
							normal: {
								show: false,
								position: 'center'
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '30',
									fontWeight: 'bold'
								}
							}
						},
						labelLine: {
							normal: {
									show: false
								}
							},
							data:[
								{value:70, name:'全勤',itemStyle:{color:"blue"}},
								{value:20, name:'早退/迟到'},
								{value:6, name:'缺勤'},
								{value:4, name:'旷工'}
							]
						}
					]
				};
				myChart.setOption(option);
			}
		},
		mounted(){
			this.showDoughnut1();
			this.showDoughnut2()
		}
	}
</script>

<style lang="less" scoped>
	.attendance{
		width: 100%;
		height: 47.2rem;
/*		background-color: rgba(256,256,51,.9);*/
		.attendance-title{
			font-size: 26px;
			font-weight: bold;
			color: #fff;
			letter-spacing: 4px;
		}
	}
	.calendar{
		width: 65%;
		display: inline-block;
		vertical-align: top;
		margin: 20px 40px;
	}
	#macro{
		width: 25%;
		display: inline-block;
		vertical-align: top;
		height: 500px;
		margin-top: 30px;
	}
	#tu1,#tu2{
		width: 100%;
		height: 300px;
	}
</style>
