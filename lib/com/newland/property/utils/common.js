export function preventClick(fn, params = '') {
	const that = this;
	if (that.onoff) {
		that.onoff = false;
		fn(params);
		// setTimeout(function () {
		// 	that.onoff = true;
		// }, 3000)
	} else {
		uni.showToast({
			title: '操作过于频繁',
			icon: 'none'
		})
	}
}
/**
 * 获取文件类型
 * @param {String} fileName 文件链接
 * @returns {String} fileType => '', image, video, audio, office, unknown
 */
export function getFileType(fileName = '') {
	const flieArr = fileName.split('.');
	let suffix = flieArr[flieArr.length - 1];
	if (!suffix) return '';
	suffix = suffix.toLocaleLowerCase();
	const image = ['png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp'];
	if (image.includes(suffix)) return 'image';
	const video = ['mp4', 'm4v'];
	if (video.includes(suffix)) return 'video';
	const audio = ['mp3', 'm4a', 'wav', 'aac'];
	if (audio.includes(suffix)) return 'audio';
	const office = ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'txt', 'plain'];
	if (office.includes(suffix)) return 'office';
	return 'unknown';
}