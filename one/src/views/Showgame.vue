<template>
	<v-card>
		<v-card style="border-radius:0px;">
			<v-img gradient="to bottom, rgba(255,255,255,0), rgba(0,0,0,1)"  :src="this.$store.state.items[this.$store.state.showGameIndex].imgSrc" style="height:240px;"></v-img>
		</v-card>
		<div style="background-color: #000000; color: white;">
		
			<p class="text-justify, display-1" style="padding:24px 20px 0px 20px; font-size: 32; font-weight: 700;">{{ this.$store.state.items[this.$store.state.showGameIndex].title }}</p>
			<p class="text-justify, subtitle-1" style="padding:0px 20px 0px 20px; font-size: 20; font-weight: 300;">{{ this.$store.state.items[this.$store.state.showGameIndex].subtitle }}</p>

			<v-card class="mx-auto float-right" elevation="0" style="color:white; background-color: #000000;">
				<v-container>
					<v-row justify="space-between">
						<v-col cols="auto" class="text-right pl-0">
							<v-row class="flex-column ma-0 fill-height" justify="center">
								<v-spacer></v-spacer>
								<v-col style="padding:0px">
									<span style="font-size:18px; font-weight: 700;">
										{{ this.$store.state.items[this.$store.state.showGameIndex].member[0].name }}
									</span>
									<br/>
									<span style="font-size:18px; font-weight: 700;">
										{{ this.$store.state.items[this.$store.state.showGameIndex].organizer_location }}
									</span>
								</v-col>
								<v-spacer></v-spacer>
							</v-row>
						</v-col>
						<v-col cols="auto">
							<v-avatar width="80" height="80">
								<v-img :src="this.$store.state.items[this.$store.state.showGameIndex].member[0].profile_src"></v-img>
							</v-avatar>
						</v-col>
					</v-row>
				</v-container>
			</v-card>

			<div style="height:140px" class="ml-5">
				<v-icon color="white">mdi-calendar</v-icon>
				<span class="ml-2" style="font-size:14; font-weight: 300;">10월 22일 2019년</span><br>
				<v-icon color="white">mdi-clock</v-icon>
				<span class="ml-2" style="font-size:14; font-weight: 300;">22:30</span>
	<!-- <v-row>
      <v-col>
        <v-icon color="white">mdi-calendar</v-icon><br>
		<v-icon color="white">mdi-clock</v-icon>
      </v-col>
      <v-col>
			<span>10월22일 2019년</span><br>
		  <span>22:30</span>
      </v-col>
    </v-row> -->
			</div>
		</div>
		<p class="display-1" style="padding:20px 20px 0px 20px; white-space:nowrap; font-size: 32; font-weight: 700;">참여 인원</p>
		
		<v-card elevation="0">
			<v-card v-for="profile in this.$store.state.items[this.$store.state.showGameIndex].member" 
					class="d-inline-block" style="margin: 5px 5px 15px 15px; padding:0; border-radius: 10px; box-shadow: 10px 10px29px rgba(100,100,100,0.5);">
					<v-img :src="profile.profile_src" gradient="to bottom right, rgba(255,255,255,0.03), rgba(0,0,0,0.8)" width="80" height="130" class="text-right white--text align-end"
						   style="font-size:11px;">
						<v-col cols="auto" >
							<span style="font-weight:700; font-size:12px;"> {{ profile.name }}</span>
							<br/>
							<span style="font-weight:700; font-size:10px; ">
								<span v-if="profile.rating >= 5.0">
									★★★★★
								</span>
								<span v-else-if="profile.rating >= 4.0">
									★★★★☆
								</span>
								<span v-else-if="profile.rating >= 3.0">
									★★★☆☆
								</span>
								<span v-else-if="profile.rating >= 2.0">
									★★☆☆☆
								</span>
								<span v-else-if="profile.rating >= 1.0">
									★☆☆☆☆
								</span>
								<span v-else>
								</span>
							</span>
						</v-col>
					</v-img>
			</v-card>
		</v-card>

		<p class="display-1" style="padding:20px 20px 0px 20px; white-space:nowrap; font-size: 32; font-weight: 700;">위치</p>
		<div id="map2" style="height:300px;"></div>
		
		<v-card class="mx-auto float-right" elevation="0">
			<v-container>
				<v-row justify="space-between">
					<v-col cols="auto" v-if="this.$store.state.items[this.$store.state.showGameIndex].selected">
						<v-btn dark fab color="black" class="float-right" elevation="1" @click="dialog2 = true">
							<v-icon>mdi-message</v-icon>
						</v-btn>
						<v-dialog
						  v-model="dialog2"
						  min-width="300px"
						>
						  <v-card>
							  <v-toolbar dark color="primary">
							  <v-btn icon dark @click="dialog2 = false">
								<v-icon>mdi-close</v-icon>
							  </v-btn>
							  <v-toolbar-title>채팅</v-toolbar-title>
							  <v-spacer></v-spacer>
							</v-toolbar>
							  <v-card height="300px"></v-card>
							 <v-footer>
							  <v-text-field
								append-outer-icon="mdi-send"
								label="Message"
											solo
							  ></v-text-field>
								 </v-footer>
						  	</v-card>
						</v-dialog>
					</v-col>
					<v-col cols="auto" v-else>
						<v-btn dark fab color="black" class="float-right" elevation="1" @click="dialog = true">
							<v-icon>mdi-check</v-icon>
						</v-btn>
						<v-dialog
						  v-model="dialog"
						  max-width="290"
						>
						  <v-card>
							<v-card-title style="font-weight:700;font-size: 20px;">이 게임에 <br>참가하시겠습니까?</v-card-title>

							<v-card-text style="font-weight:400;">확인을 누르시면 신청이 완료됩니다.</v-card-text>

							<v-card-actions>
							  <v-spacer></v-spacer>

							  <v-btn
								color="blue accent-4" style="font-weight:700;"
								text
								@click="dialog = false"
							  >
								취소
							  </v-btn>

							  <v-btn
								color="blue accent-4" style="font-weight:700;"
								text
								@click="onAttend"
							  >
								확인
							  </v-btn>
							</v-card-actions>
						  </v-card>
						</v-dialog>
					</v-col>
					
				</v-row>
			</v-container>
		</v-card>
		
		<div style="height:140px"></div>
	</v-card>
</template>

<style>
</style>

<script>
	export default {
		
		data () {
		  return {
			dialog: false,
			  dialog2:false
		  }
		},
		
		methods : {
			
			onAttend(){
				if(this.$store.state.isLogin){
					var item = this.$store.state.items[this.$store.state.showGameIndex];
					this.$store.state.items[this.$store.state.showGameIndex].member[item.curMember].profile_src = "https://cdn.vox-cdn.com/thumbor/kdt6qs9H-BEQ29nZ1QJ0wzkFwxA=/0x0:2425x3212/1200x800/filters:focal(1182x380:1570x768)/cdn.vox-cdn.com/uploads/chorus_image/image/63722661/1141022853.jpg.0.jpg";
					this.$store.state.items[this.$store.state.showGameIndex].member[item.curMember].name = "최다함";
					this.$store.state.items[this.$store.state.showGameIndex].member[item.curMember].rating = 5.0;
					
					item.curMember++;
					item.selected = true;
					this.$store.state.curGame.push(item);	
					this.dialog = false;

					this.$router.push('./Mygame');
				}else{
					this.$router.push('./Profile');
				}
				
			}
		},
		
		computed: {
			param: function () {
				return this.$route.params;
			}
		},
		
		mounted(){
			var container = document.getElementById('map2'); //지도를 담을 영역의 DOM 레퍼런스
			var options = {
				//지도를 생성할 때 필요한 기본 옵션
				center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
				level: 3 //지도의 레벨(확대, 축소 정도)
			};
			
			var map = new kakao.maps.Map(container, options);
			
				// 주소-좌표 변환 객체를 생성합니다
			var geocoder = new kakao.maps.services.Geocoder();

			// 주소로 좌표를 검색합니다
			geocoder.addressSearch(this.$store.state.items[this.$store.state.showGameIndex].location, function(result, status) {

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
	}
	
</script>