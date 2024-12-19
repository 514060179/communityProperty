import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

// 引入国际化 json 文件
import en from './language/en.js';
import cn from './language/cn.js';
import tw from './language/tw.js';

console.log(uni.getStorageSync('lang'));
// 配置 i18n
const i18nConfig = {
	locale: uni.getStorageSync('lang') || 'zh-Hant', // 获取已设置的语言，默认为繁体中文
	messages: {
		'en': en,
		'zh-Hant': tw,
		'zh-Hans': cn
	}
};

const i18n = new VueI18n(i18nConfig);
Vue.prototype.i18n = i18n

export default i18n;