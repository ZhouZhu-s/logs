const winston = require('winston');
const path = require('path');
const yaml = require('yaml');
const fs = require('fs');

const file = fs.readFileSync('./config.yaml', 'utf8');
const configs = yaml.parse(file);

const CST_FORMAT = () => {
  return new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });
};

const customFormat = winston.format.printf((info) => {
	return `[${CST_FORMAT()}] [${info.level}] ${info.label} - ${info.message}`;
});

const logger = [];
configs.Logs.forEach(i => {
	logger[i.fileName] = winston.createLogger({
		format: winston.format.combine(
			winston.format.label({ label: i.fileName }),
			winston.format.timestamp(),
			customFormat
		),
		transports: [
			new winston.transports.Console(),
			new winston.transports.File({
				level: 'silly',
				filename: path.join(__dirname, 'logs', `${i.fileName}.log`),
				maxsize: i.maxSize, // 1m
				maxFiles: i.maxFiles
			})
		]
	});
});

module.exports = {
	logger,
	configs,
	CST_FORMAT
}