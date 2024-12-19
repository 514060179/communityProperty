const fs = require('fs');

function extractPagePathsAndTitles(inputFilePath, outputFilePath) {
	// 读取输入的 JSON 文件
	fs.readFile(inputFilePath, 'utf8', (err, data) => {
		if (err) {
			console.error(`读取文件时发生错误: ${err}`);
			return;
		}

		try {
			// 解析 JSON 数据
			const jsonData = JSON.parse(data);

			// 提取路径和标题键的映射
			const pageMappings = {};
			jsonData.pages.forEach(page => {
				const path = page.path;
				const title = page.style.navigationBarTitleText || '';
				pageMappings[path] = title;
			});

			// 生成新的 JSON 对象
			const outputData = JSON.stringify(pageMappings, null, 2);

			// 写入到输出文件
			fs.writeFile(outputFilePath, outputData, 'utf8', (err) => {
				if (err) {
					console.error(`写入文件时发生错误: ${err}`);
					return;
				}
				console.log(`路径和标题键映射已成功写入到 ${outputFilePath}`);
			});
		} catch (error) {
			console.error(`解析 JSON 数据时发生错误: ${error}`);
		}
	});
}

// 调用函数并指定输入和输出文件路径
const inputFilePath = 'pages.json';
const outputFilePath = 'pageMappings.json';
extractPagePathsAndTitles(inputFilePath, outputFilePath);