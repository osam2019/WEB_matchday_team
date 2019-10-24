<template>
  <v-card elevation="0">
    <v-toolbar elevation="0">
      <v-tabs v-model="tabs" background-color="transparent" centered grow color="blue accent-4">
        <v-tab :key="1" class="tab-title">게임 </v-tab>
		<v-tab :key="2">지난 게임</v-tab>
      </v-tabs>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <v-card flat style="background-color: #fafafa; border-radius:0px;">
			<v-col v-if="item.selected" v-for="(item, i) in this.$store.state.items" :key="i" cols="12" v-on:click="onCurGameClick(i)">
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
			<!--
			<v-col v-if="item.selected" v-for="(item, i) in this.$store.state.items" :key="i" cols="12" v-on:click="onCurGameClick(i)">
				<v-card style="border-radius: 12px;" to="./Showgame" tag="gameCard_i">
				<v-img gradient="to bottom, rgba(255,255,255,.2), rgba(0,0,0,.95)" height="160px" :src="item.imgSrc" class="white--text align-end">
					<v-card-title v-text="item.title" style="font-size: 26px; font-weight: 700; max-width: 90%; padding-bottom: 12px;"></v-card-title>
			<v-card-text class="text--primary"	style="padding-bottom: 6px; padding-left: 16px; padding-right: 16px;">
					<div>
						<v-icon style="padding-right:5px; padding-bottom: 4px;">mdi-calendar-month</v-icon>
						<span v-text="item.day" class="card-items" style="font-weight:400; font-size: 16px; color: #757575;"></span>
						<v-icon style="padding-right:5px; padding-left:20px; padding-bottom: 4px;">mdi-clock</v-icon>
						<span v-text="item.time" class="card-items" style="font-weight:400; font-size: 16px; color: #757575;"></span>
					</div>
					<div style="padding-top: 1px;">
						<v-icon style="padding-right:5px; padding-bottom: 4px;">mdi-account</v-icon>
						<span v-text="item.curMember" class="card-items" style="font-weight:400; font-size: 16px; color: #757575;"></span>
						<span class="card-items" style="font-weight:400; font-size: 16px; color: #757575;"> / </span>
						<span v-text="item.maxMember" class="card-items" style="font-weight:400; font-size: 16px; color: #757575;"></span>
					</div>
				</v-card-text>			
			</v-img>
			</v-card>
			</v-col>-->
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat style="background-color: #fafafa; border-radius:0px;">
			<!--
			<v-col v-for="(item, i) in this.$store.state.endGame" :key="i" cols="12" v-on:click="onEndGameClick(i)">
			<v-card style="border-radius: 12px;" to="./Showendgame" tag="gameCard_i">
				<v-img gradient="to bottom, rgba(255,255,255,.2), rgba(0,0,0,.95)" height="160px" :src="item.imgSrc" class="white--text align-end">
					<v-card-title v-text="item.title" style="font-size: 26px; font-weight: 700; max-width: 90%; padding-bottom: 12px;"></v-card-title>
				</v-img>
				
				<v-card-text class="text--primary"	style="padding-top: 10px; padding-bottom: 6px; padding-left: 16px; padding-right: 16px;">
					<div>
						<v-icon style="padding-right:5px; padding-bottom: 4px;">mdi-calendar-month</v-icon>
						<span v-text="item.day" class="card-items" style="font-weight:400; font-size: 16px; color: #757575;"></span>
						<v-icon style="padding-right:5px; padding-left:20px; padding-bottom: 4px;">mdi-clock</v-icon>
						<span v-text="item.time" class="card-items" style="font-weight:400; font-size: 16px; color: #757575;"></span>
					</div>
					<div style="padding-top: 1px;">
						<v-icon style="padding-right:5px; padding-bottom: 4px;">mdi-account</v-icon>
						<span v-text="item.curMember" class="card-items" style="font-weight:400; font-size: 16px; color: #757575;"></span>
						<span class="card-items" style="font-weight:400; font-size: 16px; color: #757575;"> / </span>
						<span v-text="item.maxMember" class="card-items" style="font-weight:400; font-size: 16px; color: #757575;"></span>
					</div>
				</v-card-text>
			</v-card>
			</v-col>-->
			<v-col  v-for="(item, i) in this.$store.state.endGame" :key="i" cols="12" v-on:click="onEndGameClick(i)">
			<v-card style="border-radius: 12px;" to="./Showendgame" tag="gameCard_i">
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
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>


<style>
	.v-tab:hover:before, .v-tab:hover:after, .v-tab:focus:before, v-tab:focus:after {
		background-color: #ffffff !important;
	} 
	.tab-title{
		font-weight: 700;
	}
</style>
<script>
  export default {
	  
	  methods : {
		  
		  onCurGameClick(index){
			  this.$store.state.showGameIndex = index;
		  },
		  
		onEndGameClick(index){
			this.$store.state.endGameIndex = index;
		},
	  },
	  
    data () {
      return {
        tabs: null,
        text: '',
      }
    },
  }
</script>