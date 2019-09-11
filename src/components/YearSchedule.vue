<template>
	<div class="schedule">
		<header>
			<label class="labeltitle"><strong>年度计划安排表</strong></label>
			<label class="btntableandform">
				<el-button @click="showTable">查看添加内容</el-button>
				<el-button type="primary" @click="showForm">返回创建</el-button>
			</label>
		</header>
		<el-form ref="form" :model="form" label-width="80px" v-if="showform">
			<el-form-item label="项目名称">
				<el-input v-model="form.name"></el-input>
			</el-form-item>
			<el-form-item label="主执行者">
				<el-select v-model="form.region" placeholder="请选择执行人">
				<el-option label="rose" value="shanghai"></el-option>
				<el-option label="jeck" value="beijing"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="项目时间">
				<el-col :span="3">
					<el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
				</el-col>
				<el-col class="line" :span="2">：</el-col>
				<el-col :span="3">
					<el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
				</el-col>
				<el-col class="line" :span="2">-</el-col>
				<el-col :span="3">
					<el-date-picker type="date" placeholder="选择日期" v-model="form.date3" style="width: 100%;"></el-date-picker>
				</el-col>
				<el-col class="line" :span="2">：</el-col>
				<el-col :span="3">
					<el-time-picker placeholder="选择时间" v-model="form.date4" style="width: 100%;"></el-time-picker>
				</el-col>
			</el-form-item>
			<el-form-item label="是否开始">
				<el-switch v-model="form.delivery"></el-switch>
			</el-form-item>
			<el-form-item label="项目分类">
				<el-checkbox-group v-model="form.type">
				<el-checkbox label="招聘" name="type"></el-checkbox>
				<el-checkbox label="培训" name="type"></el-checkbox>
				<el-checkbox label="薪酬" name="type"></el-checkbox>
				<el-checkbox label="考勤" name="type"></el-checkbox>
				<el-checkbox label="考核" name="type"></el-checkbox>
				<el-checkbox label="离职" name="type"></el-checkbox>
				<el-checkbox label="活动安排" name="type"></el-checkbox>
				<el-checkbox label="制度定制" name="type"></el-checkbox>
				<el-checkbox label="其他" name="type"></el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item label="审核情况">
				<el-radio-group v-model="form.resource">
				<el-radio label="已审核"></el-radio>
				<el-radio label="未审核"></el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="工作内容">
				<el-input type="textarea" v-model="form.desc"></el-input>
			</el-form-item>
			<el-form-item label="工作进度">
				<el-progress :percentage="percentage" :color="customColors"></el-progress>
				<el-button-group>
					<el-button icon="el-icon-minus" @click="decrease"></el-button>
					<el-button icon="el-icon-plus" @click="increase"></el-button>
				</el-button-group>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">立即创建</el-button>
				<el-button>取消</el-button>
			</el-form-item>
		</el-form>
		<div class="table" v-if="showtable">
			<table>
				<tr>
					<td>项目名称</td>
					<td>主执行者</td>
					<td>项目时间</td>
					<td>是否开始</td>
					<td>项目分类</td>
					<td>审核情况</td>
					<td>工作内容</td>
					<td>工作进度</td>
					<td>是否删除</td>
				</tr>
				<tr>
					<td>1</td>
					<td>111</td>
					<td>111</td>
					<td>111</td>
					<td>111</td>
					<td>111</td>
					<td>111</td>
					<td>111</td>
					<td><el-button>删除</el-button></td>
				</tr>
				<tr>
					<td>2</td>
					<td>222</td>
					<td>222</td>
					<td>222</td>
					<td>222</td>
					<td>222</td>
					<td>222</td>
					<td>222</td>
					<td><el-button>删除</el-button></td>
				</tr>
				<tr>
					<td>3</td>
					<td>333</td>
					<td>333</td>
					<td>333</td>
					<td>333</td>
					<td>333</td>
					<td>333</td>
					<td>333</td>
					<td><el-button>删除</el-button></td>
				</tr>
				<tr>
					<td>4</td>
					<td>444</td>
					<td>444</td>
					<td>444</td>
					<td>444</td>
					<td>444</td>
					<td>444</td>
					<td>444</td>
					<td><el-button>删除</el-button></td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'schedule',
		data() {
			return {
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					date3: '',
					date4: '',
					delivery: false,
					type: [],
					resource: '',
					desc: '',
				},
				percentage: 20,
				customColor: '#409eff',
				customColors: [
					{color: '#f56c6c', percentage: 20},
					{color: '#e6a23c', percentage: 40},
					{color: '#5cb87a', percentage: 60},
					{color: '#1989fa', percentage: 80},
					{color: '#6f7ad3', percentage: 100}
				],
				showform:true,
				showtable:false
			}
		},
		methods: {
			onSubmit() {
			console.log('submit!');
			},
			format(percentage) {
				return percentage === 100 ? '满' : `${percentage}%`;
			},
			customColorMethod(percentage) {
				if (percentage < 30) {
					return '#909399';
				} else if (percentage < 70) {
					return '#e6a23c';
				} else {
					return '#67c23a';
				}
			},
			increase() {
				this.percentage += 5;
				if (this.percentage > 100) {
					this.percentage = 100;
				}
			},
			decrease() {
				this.percentage -= 5;
				if (this.percentage < 0) {
					this.percentage = 0;
				}
			},
			showTable(){
				this.showtable = true;
				this.showform = false;
			},
			showForm(){
				this.showtable = false;
				this.showform = true;
			}
		}
	}
</script>

<style lang="less" scoped>
	header{
		.labeltitle{
			letter-spacing: 2px;
			color: #409eff;
			display: inline-block;
			margin: 20px auto;
		}
		.btntableandform{
			margin-left: 50px;
		}
	}
	.content-title{
		background-color: #fff;
		padding: 20px;
	}
	.grade{
		width: 60px;
		margin-right: 30px;
	}
	.project{
		width: 320px;
		margin-left: 5px;
	}
	.jobcontent{
		margin-top: 20px;
		margin-bottom: 10px;
		display: inline-block;
	}
	.btnCreate{
		width: 60px;
		height: 40px;
		background-color: lightgray;
		border:0;
		outline: none;
		margin-left: 150px;
		&:active{
			background-color: gray;
			color: #fff;
		}
		&:hover{
			background-color: gray;
		}
	}
	textarea{
		width: 430px;
		min-height: 100px;
		vertical-align: top;
	}
	table{
		width: 100%;
		text-align: center;
		margin: 0 auto;
	}
	table tr td{
		width: 50px;
		height: 50px;
		border: 1px solid #fff;
		font-size: 18px;
		color: #000;
	}
	table tr:first-child td{
		font-size: 22px;
	}
</style>