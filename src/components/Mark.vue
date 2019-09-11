<template>
	<div class="mark">
		<h2>考核评分</h2>
		<div class="mark1">
			<el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
				<el-form-item label="被考核人">
					<el-input class="input1" v-model="sizeForm.name"></el-input>
				</el-form-item>
				<el-form-item label="员工编号">
					<el-input class="input1" v-model="sizeForm.name"></el-input>
				</el-form-item>
				<el-form-item label="公司部门">
					<el-select v-model="sizeForm.region" placeholder="请选择部门">
						<el-option label="总经办" value="zongjingban"></el-option>
						<el-option label="人力资源" value="hr"></el-option>
						<el-option label="财务部" value="finance"></el-option>
						<el-option label="生产技术部" value="technology"></el-option>
						<el-option label="销售部" value="market"></el-option>
						<el-option label="客服部" value="customer"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="考核区间">
					<el-col :span="6">
						<el-date-picker type="date" placeholder="选择开始日期" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
					</el-col>
					<el-col class="line" :span="2">-</el-col>
					<el-col :span="6">
						<el-date-picker type="date" placeholder="选择结束日期" v-model="sizeForm.date2" style="width: 100%;"></el-date-picker>
					</el-col>
				</el-form-item>
				<el-form-item label="个人素质">
					<el-rate
					v-model="value1"
					:colors="colors">
					</el-rate>
				</el-form-item>
				<el-form-item label="工作态度">
					<el-rate
					v-model="value2"
					:colors="colors">
					</el-rate>
				</el-form-item>
				<el-form-item label="专业知识">
					<el-rate
					v-model="value3"
					:colors="colors">
					</el-rate>
				</el-form-item>
				<el-form-item label="工作能力">
					<el-rate
					v-model="value4"
					:colors="colors">
					</el-rate>
				</el-form-item>
				<el-form-item label="总体评分">
					<el-rate
					v-model="value5"
					:colors="colors">
					</el-rate>
				</el-form-item>
				<el-form-item size="large">
					<el-button type="primary" @click="onSubmit">立即创建</el-button>
					<el-button>取消</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'mark',
		data(){
			return {
				sizeForm: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				value1: null,
				value2: null,
				value3: null,
				value4: null,
				value5: null,
				colors: ['#99A9BF', '#F7BA2A', '#FF9900']
			}
		}
	}
</script>

<style lang="less" scoped>
	.mark1{
		width: 60%;
		margin: 20px auto;
		text-align: left;
	}
	.line{
		margin-left: 35px;
	}
	.input1{
		width: 55%;
	}
	h2{
		font-size: 26px;
		color: #F7BA2A;
		margin-top: 25px;
		letter-spacing: 2px;
		text-align: left;
		margin-left: 36%;
	}
</style>
