import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		pick: [
			{
				date: '2020-07-26',
				name: '테스나',
				stockNumber: '131970',
				category: 'kosdaq',
			},
			{
				date: '2020-07-26',
				name: '옵트론텍',
				stockNumber: '082210',
				category: 'kosdaq',
			},
			{
				date: '2020-07-26',
				name: '쎄트렉아이',
				stockNumber: '099320',
				category: 'kosdaq',
			},
			{
				date: '2020-07-26',
				name: '유니퀘스트',
				stockNumber: '077500',
				category: 'kospi',
			},
			{
				date: '2020-07-26',
				name: '레고켐바이오',
				stockNumber: '141080',
				category: 'kosdaq',
			},
			{
				date: '2020-07-26',
				name: '삼천당제약',
				stockNumber: '000250',
				category: 'kosdaq',
			},
			{
				date: '2020-07-26',
				name: '올릭스',
				stockNumber: '226950',
				category: 'kosdaq',
			},
			{
				date: '2020-07-26',
				name: '에코마케팅',
				stockNumber: '230360',
				category: 'kosdaq',
			},
			{
				date: '2020-07-26',
				name: '인크로스',
				stockNumber: '216050',
				category: 'kosdaq',
			},
			{
				date: '2020-07-26',
				name: '파이오링크',
				stockNumber: '170790',
				category: 'kosdaq',
			},
		],
	},
	mutations: {},
	actions: {},
	modules: {},
})
