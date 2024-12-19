import Vue from 'vue';
import i18n from '../lang/index.js'; // 导入配置好的 i18n 实例
import pageMappings from './pageMappings';

// 页面路径与标题键的映射
const pageTitleMap = pageMappings

Vue.mixin({
	onShow() {
		try {
			const pages = getCurrentPages();
			const currentPage = pages[pages.length - 1];
			const route = currentPage.route;

			// 定义一个包含路由路径和对应标题key的对象
			const titleKeys = pageTitleMap
			if (titleKeys[route]) {
				const i18nKey = titleKeys[route];
				const title = i18n.t(i18nKey);
				// 使用uni.setNavigationBarTitle设置页面标题
				uni.setNavigationBarTitle({
					title
				});
			}
		} catch (e) {
			//TODO handle the exception
		}

		// 底部tabBar的国际化配置
		uni.setTabBarItem({
			index: 0,
			text: i18n.t('home_title')
		})
		uni.setTabBarItem({
			index: 1,
			text: i18n.t('work_title')
		})
		uni.setTabBarItem({
			index: 2,
			text: i18n.t('address_Book')
		})
		uni.setTabBarItem({
			index: 3,
			text: i18n.t('my_title')
		})
	}
});