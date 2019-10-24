<template>
	<v-card style="background-color: #fafafa; border-radius:0px;">
		<v-col cols="12">
			<v-dialog persistent v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
				<template v-slot:activator="{ on }">
					<v-btn v-on="on" block min-height="40px" style="border-radius: 12px;" color="rgba(255, 255, 255, 0)">
						<v-icon color="black">mdi-plus</v-icon>
					</v-btn>
				</template>
				<v-card>
					<v-toolbar>
						<v-btn icon dark @click="dialog = false">
							<v-icon color="black">mdi-close</v-icon>
						</v-btn>
						<v-toolbar-title style="font-weight: 700;">게임 만들기</v-toolbar-title>
						<v-spacer></v-spacer>
					</v-toolbar>
					<v-stepper v-model="e1">
						<v-stepper-header style="box-shadow: none;">
							<v-stepper-step step="1" color="blue accent-4">이름</v-stepper-step>
							<v-divider></v-divider>
							<v-stepper-step step="2" color="blue accent-4">장소</v-stepper-step>
							<v-divider></v-divider>
							<v-stepper-step step="3" color="blue accent-4">사진</v-stepper-step>
							<v-divider></v-divider>
							<v-stepper-step step="4" color="blue accent-4">인원</v-stepper-step>
							<v-divider></v-divider>
							<v-stepper-step step="5" color="blue accent-4">날짜</v-stepper-step>
							<v-divider></v-divider>
							<v-stepper-step step="6" color="blue accent-4">시간</v-stepper-step>
							<v-divider></v-divider>
							<v-stepper-step step="7" color="blue accent-4">설명</v-stepper-step>
						</v-stepper-header>

						<v-stepper-items>
							<v-stepper-content step="1">
								<div class="title-text">만드실 게임의<br>이름을 정해주세요</div>
								<v-text-field label="게임 이름"></v-text-field>
								<v-btn fab color="blue accent-4"  @click="e1 = 2; createMap();" class="float-right" style="" elevation="0">
									<v-icon color="white">mdi-chevron-right</v-icon>
								</v-btn>
							</v-stepper-content>

							<v-stepper-content step="2">
								<div class="title-text">게임은 어디서 하나요?</div>
								<v-text-field v-model="message" append-icon="mdi-magnify" label="장소" @click:append="onSearchMap"></v-text-field>
								<div id="map" style="width:100vh; height:300px;">
								</div>

								<div style="width:100vh; height:30px"></div>
								<v-btn dark fab color="blue accent-4" @click="e1 = 1" class="float-left" elevation="0">
									<v-icon>mdi-chevron-left</v-icon>
								</v-btn>
								<v-btn dark fab color="blue accent-4" @click="e1 = 3" class="float-right" elevation="0">
									<v-icon>mdi-chevron-right</v-icon>
								</v-btn>
							</v-stepper-content>
							
							<v-stepper-content step="3">
								<div class="title-text pb-4">게임할 장소의<br>사진을 올려주세요</div>
								
								<v-file-input
											  style="width:240px;"
									:rules="rules"
									accept="image/png, image/jpeg, image/bmp"
									placeholder="사진을 선택해 주세요"
									prepend-icon="mdi-camera"
									label="이미지"
								  ></v-file-input>
								<v-spacer></v-spacer>
								<v-btn dark fab color="blue accent-4" @click="e1 = 2" class="float-left" elevation="0">
									<v-icon>mdi-chevron-left</v-icon>
								</v-btn>
								<v-btn dark fab color="blue accent-4" @click="e1 = 4" class="float-right" elevation="0">
									<v-icon>mdi-chevron-right</v-icon>
								</v-btn>
							</v-stepper-content>
							
							<v-stepper-content step="4">
								<div class="title-text">게임은 몇명이서 하나요?</div>
								<v-radio-group v-model="radios" :mandatory="false">
									<v-radio label="3   vs   3" value="radio-1"></v-radio>
									<v-radio label="4   vs   4" value="radio-2"></v-radio>
									<v-radio label="5   vs   5" value="radio-3"></v-radio>
								</v-radio-group>
								<v-btn dark fab color="blue accent-4" @click="e1 = 3" class="float-left" elevation="0">
									<v-icon>mdi-chevron-left</v-icon>
								</v-btn>
								<v-btn dark fab color="blue accent-4" @click="e1 = 5" class="float-right" elevation="0">
									<v-icon>mdi-chevron-right</v-icon>
								</v-btn>
							</v-stepper-content>

							<v-stepper-content step="5">
								<div class="title-text">몇일에 할까요?</div>
								<div style="width:100vh; height:30px"></div>
								<template>
									<v-row justify="center">
										<v-date-picker v-model="picker"></v-date-picker>
									</v-row>
								</template>
								<div style="width:100vh; height:30px"></div>
								<v-btn dark fab color="blue accent-4" @click="e1 = 4" class="float-left" elevation="0">
									<v-icon>mdi-chevron-left</v-icon>
								</v-btn>
								<v-btn dark fab color="blue accent-4" @click="e1 = 6" class="float-right" elevation="0">
									<v-icon>mdi-chevron-right</v-icon>
								</v-btn>
							</v-stepper-content>

							<v-stepper-content step="6">
								<div class="title-text">몇시에 할까요?</div>

								<div style="width:100vh; height:30px"></div>

								<template>
									<v-row justify="center">
										<v-time-picker v-model="pickerTime"></v-time-picker>
									</v-row>
								</template>

								<div style="width:100vh; height:30px"></div>

								<v-btn dark fab color="blue accent-4" @click="e1 = 5" class="float-left" elevation="0">
									<v-icon>mdi-chevron-left</v-icon>
								</v-btn>
								<v-btn dark fab color="blue accent-4" @click="e1 = 7" class="float-right" elevation="0">
									<v-icon>mdi-chevron-right</v-icon>
								</v-btn>
							</v-stepper-content>
							
							<v-stepper-content step="7">
								<div class="title-text">게임을 소개해 주세요</div>

								<div style="width:100vh; height:30px"></div>

									<v-textarea
									  name="input-7-1"
									  label="게임 설명"
									  hint="500자 이내로 적어주세요"
									></v-textarea>
								
								<div style="width:100vh; height:30px"></div>

								<v-btn dark fab color="blue accent-4" @click="e1 = 6" class="float-left" elevation="0">
									<v-icon>mdi-chevron-left</v-icon>
								</v-btn>
								<v-btn dark fab color="blue accent-4" @click="dialog2 = true" class="float-right" elevation="0">
									<v-icon>mdi-check</v-icon>
								</v-btn>
								<v-dialog
								  v-model="dialog2"
								  max-width="290"
								>
								  <v-card>
									<v-card-title style="font-weight:700; font-size: 20px;">게임을 만드시겠습니까?</v-card-title>
									<v-card-text style="font-weight:400;">확인을 누르시면 신청이 완료됩니다.</v-card-text>
									<v-card-actions>
										<v-spacer></v-spacer>
										<v-btn color="blue accent-4" text @click="dialog2 = false" style="font-weight:700;">취소</v-btn>
										<v-btn color="blue accent-4" text @click="onEndCreate" style="font-weight:700;">확인</v-btn>
									</v-card-actions>
									</v-card>
								</v-dialog>
							</v-stepper-content>
						</v-stepper-items>
					</v-stepper>
				</v-card>
			</v-dialog>
		</v-col>

		<v-col v-for="(item, i) in this.$store.state.items" :key="i" cols="12" v-on:click="onGameClick(i)">
			<v-card style="border-radius: 12px;" to="./Showgame" tag="gameCard_i">
				<v-img gradient="to bottom, rgba(255,255,255,.2), rgba(0,0,0,.95)" height="116px" :src="item.imgSrc" class="white--text align-end">
					<v-card-title v-text="item.title" style="font-size: 24px; font-weight: 700; max-width: 90%;"></v-card-title>
					
					<v-card-text style=" padding-bottom: 6px; padding-left: 16px; padding-right: 16px;">
					<div>
						<v-icon style="padding-right:5px; padding-bottom: 4px; color:white;" size="14px">mdi-calendar-month</v-icon>
						<span v-text="item.day" class="card-items" style="font-weight:400; font-size: 14px;"></span>
						<v-icon style="padding-right:5px; padding-left:20px; padding-bottom: 4px; color:white;" size="14px">mdi-clock</v-icon>
						<span v-text="item.time" class="card-items" style="font-weight:400; font-size: 14px;"></span>
					</div>
					<div style="padding-top: 1px;">
						<v-icon style="padding-right:5px; padding-bottom: 4px; color:white;" size="14px">mdi-account</v-icon>
						<span v-text="item.curMember" class="card-items" style="font-weight:400; font-size: 14px;"></span>
						<span class="card-items" style="font-weight:400; font-size: 16px; color: white;"> / </span>
						<span v-text="item.maxMember" class="card-items" style="font-weight:400; font-size: 14px;"></span>
						
						<span class="float-right">
							<v-icon style="color:white">mdi-map-marker</v-icon>
							<span>{{ item.location_distance }}</span>
						</span>
					</div>
					</v-card-text>
				</v-img>
			</v-card>
		</v-col>
	</v-card>
</template>

<style>
	#fileInput {
  display: none;
}
	
	.card-items{
		font-weight: 300;
	}
	.title-text{
		font-size: 30px;
		font-weight: 700;
	}
	.v-stepper__header {
		box-shadow: none;
	}
	
	.v-stepper__content {
		height:100vh;
	}
</style>

<script>
	
export default {
	mounted(){
		
	},
	components: {
		
	},
	data: () => ({
		dialog: false,
		dialog2: false,
		notifications: false,
		sound: true,
		widgets: false,
		picker: null,
		pickerTime: null,
		e1: 0,
		hasImage : false,
		image : null,
		map : null,
		message : null,
		
		gameItem : {
			selected : true,
			imgSrc: 'https://i.ytimg.com/vi/J_Yj8PoZPiI/maxresdefault.jpg',
				title: '풋살하실분 빠르게 구합니다.',
				subtitle : '시흥시에서 풋살할분 구해봅니다. 주변에 풋살하는 사람이 없네요. 혼자 하기에 조금 그러신 분들 만나서 같이 합니다. 시간되시면 생각 해보세요. 재미있는 게임 해봅시다. ',
				location : '시흥시 대야동 210-22번지',
			location_distance : '8km',
				day: '10월 26일 2019년',
				time: '21 : 00',
				curMember: 1,
				maxMember: 8,
				avgPoint: 2.8,
				organizer: '최다함',
				organizer_location: '서울시 구로구',
				member : [
					{
						profile_src : 'https://cdn.vox-cdn.com/thumbor/kdt6qs9H-BEQ29nZ1QJ0wzkFwxA=/0x0:2425x3212/1200x800/filters:focal(1182x380:1570x768)/cdn.vox-cdn.com/uploads/chorus_image/image/63722661/1141022853.jpg.0.jpg',
						name : '최다함',
						rating : 4.0,
						playerRating : 0.0
					},
					{
						profile_src : 'http://api-lunacy.icons8.com/api/assets/864c66d3-9bf4-4fd5-b29c-869170ed799a/group-9@2x.png',
						name : '',
						rating : 0.0
					},
					{
						profile_src : 'http://api-lunacy.icons8.com/api/assets/864c66d3-9bf4-4fd5-b29c-869170ed799a/group-9@2x.png',
						name : '',
						rating : 0.0
					},
					{
						profile_src : 'http://api-lunacy.icons8.com/api/assets/864c66d3-9bf4-4fd5-b29c-869170ed799a/group-9@2x.png',
						name : '',
						rating : 0.0
					},
					{
						profile_src : 'http://api-lunacy.icons8.com/api/assets/864c66d3-9bf4-4fd5-b29c-869170ed799a/group-9@2x.png',
						name : '',
						rating : 0.0
					},
					{
						profile_src : 'http://api-lunacy.icons8.com/api/assets/864c66d3-9bf4-4fd5-b29c-869170ed799a/group-9@2x.png',
						name : '',
						rating : 0.0
					},
					{
						profile_src : 'http://api-lunacy.icons8.com/api/assets/864c66d3-9bf4-4fd5-b29c-869170ed799a/group-9@2x.png',
						name : '',
						rating : 0.0
					},
					{
						profile_src : 'http://api-lunacy.icons8.com/api/assets/864c66d3-9bf4-4fd5-b29c-869170ed799a/group-9@2x.png',
						name : '',
						rating : 0.0
					},
				],
			},
	}),

	methods: {
		
		onGameClick(index){
			this.$store.state.showGameIndex = index;
		},
		
		onChange(image) {
			console.log('New picture selected!');
		},
		onSearchMap() {
			var map = this.map;
			
			// 주소-좌표 변환 객체를 생성합니다
		var geocoder = new kakao.maps.services.Geocoder();

		// 주소로 좌표를 검색합니다
		geocoder.addressSearch(this.message, function(result, status) {

			// 정상적으로 검색이 완료됐으면 
			 if (status === kakao.maps.services.Status.OK) {

				var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

				// 결과값으로 받은 위치를 마커로 표시합니다
				var marker = new kakao.maps.Marker({
					map: map,
					position: coords
				});

				// 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
				map.setCenter(coords);
			 }     
		});
		},
		onEndCreate() {
			this.$store.state.curGame.push(this.gameItem);	
			this.$store.state.items.push(this.gameItem);	
				
			this.dialog2 = false;
			this.dialog = false;

			this.$router.push('./Mygame');
		},
		onPlusButton(event) {
			this.$router.push('/Hostgame');
		},
		createMap() {
			var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
			var options = {
				//지도를 생성할 때 필요한 기본 옵션
				center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
				level: 3 //지도의 레벨(확대, 축소 정도)
			};
			
			this.map = new kakao.maps.Map(container, options);
		},
		setImage : function(output){
			this.hasImage = true;
			  this.image = output;
			  console.log(this.image);
		},
	}
};
</script>