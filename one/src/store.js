import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
	  isLogin : false,
	  endGameIndex : 0,
	  showGameIndex : 0,
	items: [
			{
				selected : false,
				imgSrc: 'https://content3.jdmagicbox.com/comp/siliguri/z5/9999px353.x353.170627153008.f8z5/catalogue/futsal-football-arena-dagapur-siliguri-v2fis14.jpg',
				title: '심심하면 마포에서 풋살',
				subtitle : '22일에 6명이서 경기시민체육관 풋살장에서 가볍게 게임하실 분 구합니다. 대여신청 미리 해놨습니다. 실력자가 아니여도 좋습니다. 같은 취미를 가지고 게임의 임하는 분과 함께 하고 싶습니다. 심실할땐 같이 모여 풋살 한판 하는 것이 최고입니다. 바로 참가신청해주세요. 진짜 빨리해주세요',
				location : '서울 마포구 망원동 450-3',
				location_distance : '3.4km',
				day: '10월 22일 2019년',
				time: '20 : 30',
				curMember: 3,
				maxMember: 6,
				avgPoint: 2.8,
				organizer: '박건우',
				organizer_location: '경기도 남양주',
				member : [
					{
						profile_src : 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Por-Mar_%289%29_%28cropped%29.jpg',
						name : '배동훈',
						rating : 4.0
					},
					{
						profile_src : 'https://resources.premierleague.com/photos/2019/10/04/7bc5d117-f62c-4e4a-b227-7af8ead3c3d7/Kevin-De-Bruyne-Man-City.png?width=930&height=620',
						name : '김덕배',
						rating : 4.7
					},
					{
						profile_src : 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ederson_%28cropped%29.png/220px-Ederson_%28cropped%29.png',
						name : '안동숙',
						rating : 3.2
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
			{
				selected : false,
				imgSrc: 'https://fastly.4sqi.net/img/general/600x600/58127220_BmnhW1kvebmxAE0VX5rxnDLBtcb3-kY7MLmgHgA3K2o.jpg',
				title: '주말 가볍게 한판',
				subtitle : '주말에는 역시 맥주와 풋살이져. 8명이면 충분할 것 같습니다. 실력 좋으신분들 구합니다. 좋은 퀄리티의 게임이 하고싶네요. 많은 관심바랍니다. 이런 게임 저런 게임 한번 해보면 좋잖아요. 함께 합시다. 풋살 이야기 한번 만들어 봅시다.',
				location : '경기 고양시 덕양구 행신동 1071',
				location_distance : '24km',
				day: '10월 26일 2019년',
				time: '15 : 00',
				curMember: 2,
				maxMember: 8,
				avgPoint: 4.00,
				organizer: '우성민',
				organizer_location: '제주시 서귀포시',
				member : [
					{
						profile_src : 'https://specials-images.forbesimg.com/imageserve/5cfea7bb4c687b0008593c0a/416x416.jpg?background=000000&cropX1=1554&cropX2=2474&cropY1=240&cropY2=1159',
						name : '마재원',
						rating : 4.0
					},
					{
						profile_src : 'https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2019/09/26/yq-antg-26092022.jpg?itok=ekpcGxpD&timestamp=1569511776',
						name : '권지만',
						rating : 4.7
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
			{
				selected : false,
				imgSrc: 'http://www.nowonsc.kr/images/group02/footsal_gallery_1.jpg',
				title: '인천에서의 한판은 어떨까요?',
				subtitle : '주변에서 인원을 모으기가 너무 어렵네요. 정말 같이 하고 싶은 사람 구합니다. 노쇼는 사절이에요. 왜 게임을 안나오려 하시나 몰라. 그냥 여러게임 하고 싶은 사람들은 신청하세요. 게임 뛸 생각하니깐 기대가 되네요. 함께하는 게임이 즐겁져. 같이 해요. 같이 같이',
				location : '인천 남동구 경신로 56',
				location_distance : '25km',
				day: '10월 21일 2019년',
				time: '10 : 30',
				curMember: 7,
				maxMember: 10,
				avgPoint: 3.5,
				organizer: '김택우',
				organizer_location: '인천 부천구',
				member : [
					{
						profile_src : 'https://specials-images.forbesimg.com/imageserve/5cfea7bb4c687b0008593c0a/416x416.jpg?background=000000&cropX1=1554&cropX2=2474&cropY1=240&cropY2=1159',
						name : '마재원',
						rating : 4.0
					},
					{
						profile_src : 'https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2019/09/26/yq-antg-26092022.jpg?itok=ekpcGxpD&timestamp=1569511776',
						name : '권지만',
						rating : 4.7
					},
					{
						profile_src : 'https://c0.thejournal.ie/media/2019/04/luis-suarez-barcelona-2018-19_1ofwxaahd6bpk1625qvn4e645g-390x285.jpg',
						name : '수지',
						rating : 3.2
					},
					{
						profile_src : 'https://fcbarcelona-static-files.s3.amazonaws.com/fcbarcelona/photo/2019/01/23/d626083b-be47-456f-91f2-ebee7235dcf3/mini_dejong.jpg',
						name : '김대준',
						rating : 3.0
					},
					{
						profile_src : 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Gerard_Piqu%C3%A9_in_2018.jpg',
						name : '박지훈',
						rating : 4.0
					},
					{
						profile_src : 'https://m.media-amazon.com/images/M/MV5BYjRjNWFkOGMtMDllYi00Njc5LTk3OGMtMjAwOGJiNjU3N2FiXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_UY317_CR131,0,214,317_AL_.jpg',
						name : '태수한',
						rating : 5.0
					},
					{
						profile_src : 'https://m.media-amazon.com/images/M/MV5BYjRjNWFkOGMtMDllYi00Njc5LTk3OGMtMjAwOGJiNjU3N2FiXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_UY317_CR131,0,214,317_AL_.jpg',
						name : '태수한',
						rating : 5.0
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
			{
				selected : false,
				imgSrc: 'https://www.uncmc.or.kr/nam_images/facilities/c0202_01.jpg',
				title: '울산은 참 풋살하기 좋은 도시',
				subtitle : '야심한 밤에 풋살한판? 하실분 구해요. 주변에서 인원을 모으기가 너무 어렵네요. 정말 같이 하고 싶은 사람 구합니다. 노쇼는 사절이에요. 왜 게임을 안나오려 하시나 몰라. 그냥 여러게임 하고 싶은 사람들은 신청하세요. 게임 뛸 생각하니깐 기대가 되네요. 함께하는 게임이 즐겁져. 같이 해요. 같이 같이',
				location : '울산광역시',
				location_distance : '122km',
				day: '10월 22일 2019년',
				time: '02 : 00',
				curMember: 4,
				maxMember: 8,
				avgPoint: 2.2,
				organizer: '안치훈',
				organizer_location: '울산광역시 동구',
				member : [
					{
						profile_src : 'https://specials-images.forbesimg.com/imageserve/5cfea7bb4c687b0008593c0a/416x416.jpg?background=000000&cropX1=1554&cropX2=2474&cropY1=240&cropY2=1159',
						name : '마재원',
						rating : 4.0
					},
					{
						profile_src : 'https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2019/09/26/yq-antg-26092022.jpg?itok=ekpcGxpD&timestamp=1569511776',
						name : '권지만',
						rating : 4.7
					},
					{
						profile_src : 'https://c0.thejournal.ie/media/2019/04/luis-suarez-barcelona-2018-19_1ofwxaahd6bpk1625qvn4e645g-390x285.jpg',
						name : '수지',
						rating : 3.2
					},
					{
						profile_src : 'https://fcbarcelona-static-files.s3.amazonaws.com/fcbarcelona/photo/2019/01/23/d626083b-be47-456f-91f2-ebee7235dcf3/mini_dejong.jpg',
						name : '김대준',
						rating : 3.0
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
			{
				selected : false,
				imgSrc: 'https://www.ddc.go.kr/site/ddc/images/contents/cnt_641_img_1.jpg',
				title: '선수출신입니다. 같이 뛰어요',
				subtitle : '친구끼리 모였는데 사람 없어서 글씁니다. 구로시민체육관에서 할 생각입니다. 주변에서 인원을 모으기가 너무 어렵네요. 정말 같이 하고 싶은 사람 구합니다. 노쇼는 사절이에요. 왜 게임을 안나오려 하시나 몰라. 그냥 여러게임 하고 싶은 사람들은 신청하세요. 게임 뛸 생각하니깐 기대가 되네요. 함께하는 게임이 즐겁져. 같이 해요. 같이 같이 10월 21일 9시에 할거에요',
				location : '강원도 춘천시',
				location_distance : '17km',
				day: '10월 21일 2019년',
				time: '21 : 00',
				curMember: 5,
				maxMember: 10,
				avgPoint: 4.9,
				organizer: '한영기',
				organizer_location: '강원도 춘천시',
				member : [
					{
						profile_src : 'https://specials-images.forbesimg.com/imageserve/5cfea7bb4c687b0008593c0a/416x416.jpg?background=000000&cropX1=1554&cropX2=2474&cropY1=240&cropY2=1159',
						name : '마재원',
						rating : 4.0
					},
					{
						profile_src : 'https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2019/09/26/yq-antg-26092022.jpg?itok=ekpcGxpD&timestamp=1569511776',
						name : '권지만',
						rating : 4.7
					},
					{
						profile_src : 'https://c0.thejournal.ie/media/2019/04/luis-suarez-barcelona-2018-19_1ofwxaahd6bpk1625qvn4e645g-390x285.jpg',
						name : '수지',
						rating : 3.2
					},
					{
						profile_src : 'https://fcbarcelona-static-files.s3.amazonaws.com/fcbarcelona/photo/2019/01/23/d626083b-be47-456f-91f2-ebee7235dcf3/mini_dejong.jpg',
						name : '김대준',
						rating : 3.0
					},
					{
						profile_src : 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Gerard_Piqu%C3%A9_in_2018.jpg',
						name : '박지훈',
						rating : 4.0
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
		],
	  endGame: [
			{
				imgSrc: 'https://scontent-yyz1-1.cdninstagram.com/vp/a38a7187c6070837402897dd949ac7ff/5E3A33C5/t51.2885-15/sh0.08/e35/c180.0.1079.1079a/s640x640/65856216_120509649225234_5644941001302522568_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_cat=106',
				title: '마! 이게 풋살이다',
				subtitle : '#부산 #풋살장 #모임 #폰스타 #풋살멤버구함 #멤버모집 #동호회모임 부산에서 축구 한판할 사랍들을 구합니다. 정말 잘합니다. 그래서 잘하시는분만 기다립니다. 재밌는 게임 하고싶습니다. 언젠가 신청할거 가벼운 마음으로 지금 당장 신청하세요. 빨리 신청하세요',
				location : '부산 부산진구 가야대로 506 홈플러스 가야점',
				location_distance : '338km',
				day: '10월 17일 2019년',
				time: '19 : 00',
				curMember: 6,
				maxMember: 6,
				avgPoint: 2.8,
				organizer: '김만기',
				organizer_location: '부산시 마포구',
				member : [
					{
						profile_src : 'https://cdn.vox-cdn.com/thumbor/kdt6qs9H-BEQ29nZ1QJ0wzkFwxA=/0x0:2425x3212/1200x800/filters:focal(1182x380:1570x768)/cdn.vox-cdn.com/uploads/chorus_image/image/63722661/1141022853.jpg.0.jpg',
						name : '원진우',
						rating : 4.0,
						playerRating : 0.0
					},
					{
						profile_src : 'https://i2.wp.com/metro.co.uk/wp-content/uploads/2019/09/GettyImages-1171749669.jpg?quality=90&strip=all&zoom=1&resize=644%2C443&ssl=1',
						name : '김아준',
						rating : 2.5,
						playerRating : 0.0
					},
					{
						profile_src : 'http://newsimg.hankookilbo.com/2016/03/07/201603071721393307_1.jpg',
						name : '최병준',
						rating : 1.2,
						playerRating : 0.0
					},
					{
						profile_src : 'https://e0.365dm.com/19/05/768x432/skysports-matthijs-de-ligt_4679562.jpg?20190527072821',
						name : '장민호',
						rating : 4.4,
						playerRating : 0.0
					},
					{
						profile_src : 'https://www.thesun.co.uk/wp-content/uploads/2019/05/NINTCHDBPICT000488439508-e1558020326242.jpg',
						name : '박진영',
						rating : 2.6,
						playerRating : 0.0
					},
					{
						profile_src : 'https://cdn.vox-cdn.com/thumbor/kdt6qs9H-BEQ29nZ1QJ0wzkFwxA=/0x0:2425x3212/1200x800/filters:focal(1182x380:1570x768)/cdn.vox-cdn.com/uploads/chorus_image/image/63722661/1141022853.jpg.0.jpg',
						name : '최다함',
						rating : 5.0,
						playerRating : 0.0
					},
				],
			},
		],
	  curGame: [
			
		],
  },
  mutations: {

  },
  actions: {

  },
});
