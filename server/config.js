/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 1000,
    title: "",
    text: "特别奖"
  },
  {
    type: 1,
    count: 5,
    text: "特等奖",
    title: "iPhone 15 pro max 256gb",
    img: "../img/2024iphone15-promax2.jpeg"
  },
  {
    type: 2,
    count: 10,
    text: "一等奖",
    title: "iPhone 15 pro 256gb",
    img: "../img/2024iphone15-pro.jpeg"
  },
  {
    type: 3,
    count: 15,
    text: "二等奖",
    title: "iPhone 15 plus 256gb",
    img: "../img/2024iphone15-plus.jpeg"
  },
  {
    type: 4,
    count: 20,
    text: "三等奖",
    title: "华为 p60 pro",
    img: "../img/2024huawei-p60-pro2.jpg"
  },
  {
    type: 5,
    count: 25,
    text: "四等奖",
    title: "ipad 64gb wifi+插卡版",
    img: "../img/2024ipad3.jpg"
  },
  {
    type: 6,
    count: 30,
    text: "五等奖",
    title: "蓝牙耳机",
    img: "../img/2024aipods2.jpg"
  },
  {
    type: 7,
    count: 50,
    text: "幸运奖",
    title: "幸运红包",
    img: "../img/2024hongbao3.jpg"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 1, 5, 8, 10, 10, 10, 10];

/**
 * 卡片公司名称标识
 */
const COMPANY = "";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
