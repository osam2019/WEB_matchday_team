<template>
  <v-container class="" v-if="this.$store.state.isLogin">
    <v-row class="">
      <v-col md="4" class="ml-4">
        <span style="font-size:36px; font-weight: 700;">최다함</span>
      </v-col>	
		<v-spacer></v-spacer>
      <v-col md="4" offset-md="4" class="ml-12">
        <v-avatar size="68" class="elevation-1"><img src="http://api-lunacy.icons8.com/api/assets/16a0e055-d43d-4695-bded-c524ca75295d/서울시심볼@2x.png"></v-avatar>
      </v-col>
    </v-row>  
    <v-row justify="center">
		<v-spacer></v-spacer>
      <v-col md="6" offset-md="3" >
		<v-card style="" class="ma-4" style="border-radius: 20px;">
			<v-img src="https://cdn.vox-cdn.com/thumbor/kdt6qs9H-BEQ29nZ1QJ0wzkFwxA=/0x0:2425x3212/1200x800/filters:focal(1182x380:1570x768)/cdn.vox-cdn.com/uploads/chorus_image/image/63722661/1141022853.jpg.0.jpg" gradient="to bottom right, rgba(255,255,255,0.0), rgba(0,0,0,0.45)" style="height: 240px; border-radius: 20px;" class="text-right white--text align-end">
				<v-card-text style="font-weight: 700; font-size: 18px;">★★★★★<br>왼발 / 공격적</v-card-text>
			</v-img>
		</v-card>
      </v-col>
		<v-spacer></v-spacer>
    </v-row>
	
	<v-row class="mb-6">
      <v-col md="3" offset-md="3" class="ml-4">
        <span style="font-size:36px; font-weight: 700;">스탯</span>
      </v-col>
    </v-row>
	  
	<v-row class="mb-6 text-center" no-gutters><v-spacer></v-spacer>
      <v-col class="text-center" md="6" offset-md="3">
        <span style="font-size:48px; font-weight: 700;" class="col-item-box">26</span><br>
		<span style="font-size:18px; font-weight: 400;">나이</span>
      </v-col><v-spacer></v-spacer>
      <v-col md="3" offset-md="3">
        <span style="font-size:48px; font-weight: 700;">174</span><br>
		  <span style="font-size:18px; font-weight: 400;">키</span>
      </v-col><v-spacer></v-spacer>
	  <v-col md="3" offset-md="3">
        <span style="font-size:48px; font-weight: 700;">62</span><br>
		  <span style="font-size:18px; font-weight: 400;">체중</span>
      </v-col><v-spacer></v-spacer>
    </v-row>
	
	  
	<v-row class="mb-6 text-center" no-gutters justify="center"><v-spacer></v-spacer>
      <v-col md="3" offset-md="3" class="mr-4">
        <span style="font-size:48px; font-weight: 700;">76</span><br>
		  <span style="font-size:18px; font-weight: 400;">경기</span>
      </v-col><v-spacer></v-spacer>
      <v-col md="3" offset-md="3" class="mr-4">
        <span style="font-size:48px; font-weight: 700;">20</span><br>
		  <span style="font-size:18px; font-weight: 400;">MOM</span>
      </v-col><v-spacer></v-spacer>
	  <v-col md="3" offset-md="3" class="mt-4 ml-3">
        <img src="http://api-lunacy.icons8.com/api/assets/ae96f2df-7a41-40ad-ad12-91e15f21fa37/group-3-copy.png"><br>
		<span style="font-size:18px; font-weight: 400;">랭크</span>
      </v-col><v-spacer></v-spacer>
    </v-row>
  </v-container>
 <v-container v-else
        fluid elevation="0"
			  class="fill-height"
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card elevation="0" style="background-color: #fafafa; border-radius:0px;">
              <v-toolbar
                flat style="background-color: #fafafa;"
              >
                <v-toolbar-title style="font-weight: 700; font-size: 34px;">매치데이에
					<br>오신걸 환영합니다.</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form class="pt-12">
                  <v-text-field
                    label="아이디"
                    name="login"
                    type="text"
					style="font-weight: 700; font-size: 20px;"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="비밀번호"
                    name="password"
                    type="password"
					style="font-weight: 700; font-size: 20px;"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue accent-4" @click="onLoginButton" style="color: white; font-weight: 700; font-size:12px;">로그인</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
</template>

<style>
	.col-item-box{
		width: 50px; max-width:50px; min-width: 50px;
		height: 50px; max-height:50px; min-height: 50px;
	}
</style>

<script>
  export default {
		methods : {
			onLoginButton(){
				this.$store.state.isLogin = true;
		},
	},
	  props: {
      source: String,
    },
    data: () => ({
		drawer: null,
		isLogin : false,
    }),
  }
</script>