<template>
	<v-stepper v-model="e1">
		<v-stepper-header>
			<v-stepper-step step="1">Name of step 1</v-stepper-step>
			<v-divider></v-divider>
			<v-stepper-step step="2">Name of step 2</v-stepper-step>
			<v-divider></v-divider>
			<v-stepper-step step="3">Name of step 3</v-stepper-step>
			<v-divider></v-divider>
			<v-stepper-step step="4">Name of step 4</v-stepper-step>
			<v-divider></v-divider>
			<v-stepper-step step="5">Name of step 5</v-stepper-step>
		</v-stepper-header>

		<v-stepper-items>
			<v-stepper-content step="1">
				<span style="height:10vh font-weight: 700">만드실 게임의<br>이름을 정해주세요</span>
				<v-text-field label="최고의 게임!" style="height:10vh"></v-text-field>
				<v-card elevation="0">
					<v-card-text style="height: 45vh;"></v-card-text>
					<v-card-text style="height: 10vh; position: relative">
						<v-btn dark fab color="color="blue accent-4 @click="e1 = 2" top right absolute>
							<v-icon>mdi-chevron-right</v-icon>
						</v-btn>
					</v-card-text>
				</v-card>
			</v-stepper-content>

			<v-stepper-content step="2">
				<span style="height:10vh">게임의 장소를 정해주세요</span>
				<v-text-field style="height:10vh" append-icon="mdi-magnify" label="최고의 게임!" @click:append="onSearchMap"></v-text-field>
				
				<v-card elevation="0">
					<v-card-text style="height: 1vh;"></v-card-text>
					<v-card-text style="height: 10vh; position: relative">
						<v-btn dark fab color="color="blue accent-4" " @click="e1 = 1" top left absolute>
							<v-icon>mdi-chevron-left</v-icon>
						</v-btn>
						<v-btn dark fab color="color="blue accent-4" " @click="e1 = 3" top right absolute>
							<v-icon>mdi-chevron-right</v-icon>
						</v-btn>
					</v-card-text>
				</v-card>
			</v-stepper-content>

			<v-stepper-content step="3">
				<span>게임의 인원을 정해주세요</span>
				<v-radio-group v-model="radios" :mandatory="false">
					<v-radio label="3   vs   3" value="radio-1"></v-radio>
					<v-radio label="4   vs   4" value="radio-2"></v-radio>
					<v-radio label="5   vs   5" value="radio-3"></v-radio>
				</v-radio-group>
				<v-btn dark fab color="color="blue accent-4" " @click="e1 = 2" style="position:absolute; bottom:80px; left:30px">
					<v-icon>mdi-chevron-left</v-icon>
				</v-btn>
				<v-btn dark fab color="color="blue accent-4" " @click="e1 = 4" style="position:absolute; bottom:80px; right:30px">
					<v-icon>mdi-chevron-right</v-icon>
				</v-btn>
			</v-stepper-content>

			<v-stepper-content step="4">
				<span>게임의 날짜를 정해주세요</span>
				
					<v-date-picker v-model="picker" full-width landspace></v-date-picker>
				
				<v-btn dark fab color="color="blue accent-4" " @click="e1 = 3" style="position:fixed; bottom:80px; left:30px">
					<v-icon>mdi-chevron-left</v-icon>
				</v-btn>
				<v-btn dark fab color="color="blue accent-4" " @click="e1 = 5" style="position:fixed; bottom:80px; right:30px">
					<v-icon>mdi-chevron-right</v-icon>
				</v-btn>
			</v-stepper-content>
			
			<v-stepper-content step="5">
				<span>게임의 시간을 정해주세요</span>
				
				<v-time-picker v-model="picker"></v-time-picker>
				
				<v-btn dark fab color="color="blue accent-4" " @click="e1 = 4" style="position:fixed; bottom:80px; left:30px">
					<v-icon>mdi-chevron-left</v-icon>
				</v-btn>
				<v-btn dark fab color="color="blue accent-4" " @click="onEndCreate" style="position:fixed; bottom:80px; right:30px">
					<v-icon>mdi-check</v-icon>
				</v-btn>
			</v-stepper-content>
		</v-stepper-items>
	</v-stepper>
</template>
<style>
	.v-stepper__header {
		box-shadow: none;
	}
	
	.v-stepper__items {
		min-height : 80vh;
		position:relative;
	}
</style>

<script>
  export default {
    data () {
      return {
        e1: 0,
      }
    },
	methods:{
		onSearchMap(){
			alert("GGG");
		},
		onEndCreate(){
			alert("게임 생성 완료");
		},
	},
  }
</script>