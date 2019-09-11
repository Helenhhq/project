<template>
	<div class="department">
		<div id="showecharts"></div>
	</div>
</template>

<script>
	export default {
		name: 'department',
		methods:{
			showEcharts(){
				var echarts = require('echarts');
				var myChart = echarts.init(document.getElementById('showecharts'));
				var option = {
								title : {
									text: '组织结构图'
								},
								tooltip : {
									show: false,
									trigger: 'item',
									formatter: "{b}: {c}"
								},
								toolbox: {
									show : true,
									feature : {
										mark : {show: true},
										dataView : {show: true, readOnly: false},
										restore : {show: true},
										saveAsImage : {show: true}
									}
								},
								calculable : true,
								series : [
									{
										name:'树图',
										type:'tree',
										orient: 'vertical',  // vertical horizontal
										rootLocation: {x: '50%', y: '15%'}, // 根节点位置 
										nodePadding: 40,
										layerPadding:40,
										symbol: 'rectangle',
										borderColor:'blue',
										itemStyle: {
											normal: {
												color: '#fff',
												label: {
													show: true,
													position: 'inside',
													textStyle: {
														color: 'black',
														fontSize: 15,
													}
												},
												lineStyle: {
													color: '#000',
													width: 1,
													type: 'solid' // 'curve'|'broken'|'solid'|'dotted'|'dashed'
												}
											},
											emphasis: {
												label: {
													show: false
												}
											}
										},
										data: [
											{
												name: '董事会',
												value: 6,
												symbolSize: [70, 40],
												symbol: 'rectangle',
												itemStyle: {
													normal: {
													borderWidth: 2,
													borderColor: 'blue'
													}
												},
												children: [
													{
														name: '总经理',
														value: 6,
														symbolSize: [70, 30],
														symbol: 'rectangle',
														itemStyle: {
															normal: {
																borderWidth: 2,
																borderColor: 'black'
															}
														},
														children: [
															{
																name: '营销中心',
																value: 4,
																symbolSize: [70, 30],
																symbol: 'rectangle',
																itemStyle: {
																normal: {
																		label: {
																			show: true,
																			position: 'inside'
																		},
																		borderWidth: 2,
																		borderColor: 'black'
																	}
																},
																children: [
																	{
																		name: '市场部',
																		value: 4,
																		symbolSize: [60, 30],
																		symbol: 'rectangle',
																		itemStyle: {
																			normal: {
																				label: {
																					show: true,
																					position: 'inside'
																				},
																				borderWidth: 2,
																				borderColor: 'black'
																			}
																		},
																	},
																	{
																		name: '销售部',
																		value: 4,
																		symbolSize: [60, 30],
																		symbol: 'rectangle',
																		itemStyle: {
																			normal: {
																				label: {
																					show: true,
																					position: 'inside'
																				},
																				borderWidth: 2,
																				borderColor: 'black'
																			}
																		},
																	},
																	{
																		name: '客服部',
																		value: 4,
																		symbolSize: [60, 30],
																		symbol: 'rectangle',
																		itemStyle: {
																			normal: {
																				label: {
																					show: true,
																					position: 'inside'
																				},
																				borderWidth: 2,
																				borderColor: 'black'
																			}
																		},
																	}
																]
															},
															{
																name: '项目中心',
																value: 4,
																symbolSize: [70, 30],
																symbol: 'rectangle',
																itemStyle: {
																	normal: {
																		label: {
																			show: true,
																			position: 'inside'
																		},
																		borderWidth: 2,
																		borderColor: 'black'
																	}
																},
																children: [
																	{
																		name: '售前支持部',
																		value: 4,
																		symbolSize: [90, 30],
																		symbol: 'rectangle',
																		itemStyle: {
																			normal: {
																				label: {
																					show: true,
																					position: 'inside'
																				},
																				borderWidth: 2,
																				borderColor: 'black'
																			}
																		},
																	},
																	{
																		name: '项目一部',
																		value: 4,
																		symbolSize: [70, 30],
																		symbol: 'rectangle',
																		itemStyle: {
																			normal: {
																				label: {
																					show: true,
																					position: 'inside'
																				},
																				borderWidth: 2,
																				borderColor: 'black'
																			}
																		},
																	},
																	{
																		name: '项目二部',
																		value: 4,
																		symbolSize: [70, 30],
																		symbol: 'rectangle',
																		itemStyle: {
																			normal: {
																				label: {
																					show: true,
																					position: 'inside'
																				},
																				borderWidth: 2,
																				borderColor: 'black'
																			}
																		},
																	},
																	{
																		name: '项目三部',
																		value: 4,
																		symbolSize: [70, 30],
																		symbol: 'rectangle',
																		itemStyle: {
																			normal: {
																				label: {
																					show: true,
																					position: 'inside'
																				},
																				borderWidth: 2,
																				borderColor: 'black'
																			}
																		},
																	},
																]
															},
															{
																name: '技术中心',
																value: 4,
																symbolSize: [70, 30],
																symbol: 'rectangle',
																itemStyle: {
																normal: {
																label: {
																show: true,
																position: 'inside'
																},
																borderWidth: 2,
																borderColor: 'black'
																}
															},
														children: [
															{
																name: '开发部',
																value: 4,
																symbolSize: [70, 30],
																symbol: 'rectangle',
																itemStyle: {
																	normal: {
																		label: {
																			show: true,
																			position: 'inside'
																		},
																		borderWidth: 2,
																		borderColor: 'black'
																	}
																},
															},
															{
																name: '设计部',
																value: 4,
																symbolSize: [70, 30],
																symbol: 'rectangle',
																itemStyle: {
																normal: {
																label: {
																show: true,
																position: 'inside'
																},
																borderWidth: 2,
																borderColor: 'black'
																}
																},
															},
															{
																name: '系统部',
																value: 4,
																symbolSize: [70, 30],
																symbol: 'rectangle',
																itemStyle: {
																normal: {
																label: {
																show: true,
																position: 'inside'
																},
																borderWidth: 2,
																borderColor: 'black'
																}
																},
															}
														]
													},
													{
														name: '行政部',
														value: 4,
														symbolSize: [70, 30],
														symbol: 'rectangle',
														itemStyle: {
														normal: {
														label: {
														show: true,
														position: 'inside'
														},
														borderWidth: 2,
														borderColor: 'black'
														}
														}
													},
													{
														name: '财务部',
														value: 4,
														symbolSize: [70, 30],
														symbol: 'rectangle',
														itemStyle: {
														normal: {
														label: {
														show: true,
														position: 'inside'
														},
														borderWidth: 2,
														borderColor: 'black'
														}
														}
													},
													{
														name: '其他分支',
														value: 4,
														symbolSize: [70, 30],
														symbol: 'rectangle',
														itemStyle: {
															normal: {
																label: {
																	show: true,
																	position: 'inside'
																},
																borderWidth: 2,
																borderColor: 'black'
															}
														},
														children: [
															{
																name: '杭州分公司',
																value: 4,
																symbolSize: [90, 30],
																symbol: 'rectangle',
																itemStyle: {
																	normal: {
																		label: {
																			show: true,
																			position: 'inside'
																		},
																		borderWidth: 2,
																		borderColor: 'black'
																	}
																},
															}
														]
													},
												]
											}
										]
									}
								]
							}
						]
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
	.department{
		width: 100%;
		height: 47.2rem;
		color: #fff;
	}
	#showecharts{
		width: 100%;
		height: 500px;
	}
</style>
