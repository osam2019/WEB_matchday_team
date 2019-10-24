<template>
	<v-card>
		<v-card style="border-radius:0px;">
			<v-img gradient="to bottom, rgba(255,255,255,0), rgba(0,0,0,1)"  :src="this.$store.state.endGame[this.$store.state.endGameIndex].imgSrc"
				   class="text-center white--text align-center" style="font-size:60px; height:240px;">
				<span style="font-weight:700;">종료된게임</span>
			</v-img>
		</v-card>
		<div style="background-color: #000000; color: white;">
		
			<p class="text-justify, display-1" style="padding:24px 20px 0px 20px; font-size: 32; font-weight: 700;">{{ this.$store.state.endGame[this.$store.state.endGameIndex].title }}</p>
			<p class="text-justify, subtitle-1" style="padding:0px 20px 0px 20px; font-size: 20; font-weight: 300;">{{ this.$store.state.endGame[this.$store.state.endGameIndex].subtitle }}</p>

			<v-card class="mx-auto float-right" elevation="0" style="color:white; background-color: #000000;">
				<v-container>
					<v-row justify="space-between">
						<v-col cols="auto" class="text-right pl-0">
							<v-row class="flex-column ma-0 fill-height" justify="center">
								<v-spacer></v-spacer>
								<v-col style="padding:0px">
									<span style="font-size:18px; font-weight: 700;">
										{{ this.$store.state.endGame[this.$store.state.endGameIndex].member[0].name }}
									</span>
									<br/>
									<span style="font-size:18px; font-weight: 700;">
										{{ this.$store.state.endGame[this.$store.state.endGameIndex].organizer_location }}
									</span>
								</v-col>
								<v-spacer></v-spacer>
							</v-row>
						</v-col>
						<v-col cols="auto">
							<v-avatar width="80" height="80">
								<v-img :src="this.$store.state.endGame[this.$store.state.endGameIndex].member[0].profile_src"></v-img>
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
			
			<v-card v-for="(profile, i) in this.$store.state.endGame[this.$store.state.endGameIndex].member" :key="i"
					v-on:click="selectMember = i"
					class="d-inline-block" style="margin: 5px 5px 15px 15px; padding:0; border-radius: 10px; box-shadow: 10px 10px29px rgba(100,100,100,0.5);">
				
			<v-bottom-sheet v-model="sheet">
				<template v-slot:activator="{ on }">
					<v-img :src="profile.profile_src" gradient="to bottom right, rgba(255,255,255,0.03), rgba(0,0,0,0.8)" width="80" height="130" class="text-right white--text align-end"
						   style="font-size:11px; border-radius: 10px; font-weight: 700;" v-on="on">
						<v-col cols="auto" >
							<span> {{ profile.name }}</span>
							<br/>
							<span style="font-weight:700; font-size:10px;">
								<span v-if="profile.playerRating >= 5.0">
									★★★★★
								</span>
								<span v-else-if="profile.playerRating >= 4.0">
									★★★★☆
								</span>
								<span v-else-if="profile.playerRating >= 3.0">
									★★★☆☆
								</span>
								<span v-else-if="profile.playerRating >= 2.0">
									★★☆☆☆
								</span>
								<span v-else-if="profile.playerRating >= 1.0">
									★☆☆☆☆
								</span>
								<span v-else>
									☆☆☆☆☆
								</span>
							</span>
						</v-col>
					</v-img>
				</template>

				<v-sheet class="text-center" height="230px">
					<v-card class="d-inline-block mx-auto" elevation="0">
					<v-container style="padding-bottom:0px">
					  <v-row justify="space-between">
						<v-col cols="auto">
						  <v-img :src="$store.state.endGame[$store.state.endGameIndex].member[selectMember].profile_src" gradient="to bottom right, rgba(255,255,255,0.03), rgba(0,0,0,0.8)" width="80" height="130"
						   class="text-right white--text align-end"
						   style="font-size:11px; border-radius: 10px;">
						<v-col cols="auto" >
							<span style="font-weight:700; font-size:12px;"> {{ $store.state.endGame[$store.state.endGameIndex].member[selectMember].name }}</span>
							<br/>
							<span style="font-weight:700; font-size:10px;">
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
									☆☆☆☆☆
								</span>
							</span>
						</v-col>
					</v-img>
						</v-col>

						<v-col
						  cols="auto"
						  class="text-center pl-0"
						>
						  <v-row
							class="flex-column ma-0 fill-height text-left"
								 style="font-size:25px"
							justify="center"
						  >
							  <v-col>
							  <span style="font-weight:700; font-size:22px;">{{ $store.state.endGame[$store.state.endGameIndex].member[selectMember].name }}님의</span><br/>
								<span style="font-weight:700; font-size:22px;">평점을</span><br/>
								<span style="font-weight:700; font-size:22px;">매겨주세요.</span>
								  </v-col>
						  </v-row>
						</v-col>
					  </v-row>
					</v-container>
				  </v-card>
					<v-rating v-model="$store.state.endGame[$store.state.endGameIndex].member[selectMember].playerRating"></v-rating>
				</v-sheet>

			</v-bottom-sheet>
			</v-card>
			
		</v-card>

		<p class="display-1" style="padding:20px 20px 0px 20px; white-space:nowrap; font-size: 32; font-weight: 700;">위치</p>
		<div id="map2" style="height:300px;"></div>
		<div style="height:140px"></div>
	</v-card>
</template>

<style>
</style>

<script>
	export default {
		
		data: () => ({
		  sheet: false,
			selectMember : 0,
			rating: 3,
		}),
		
		methods : {
			
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
			geocoder.addressSearch(this.$store.state.endGame[this.$store.state.endGameIndex].location, function(result, status) {

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