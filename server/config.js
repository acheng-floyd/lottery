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
    count: 2,
    text: "特等奖",
    title: "雷克萨斯460汽车",
    img: "../img/lexus460.jpg"
  },
  {
    type: 2,
    count: 10,
    text: "一等奖",
    title: "苹果14Promax",
    img: "../img/iphone14promax.jpg"
  },
  {
    type: 3,
    count: 15,
    text: "二等奖",
    title: "苹果14Pro",
    img: "../img/iphone14pro.jpg"
  },
  {
    type: 4,
    count: 20,
    text: "三等奖",
    title: "苹果14",
    img: "../img/iphone14.jpg"
  },
  {
    type: 5,
    count: 25,
    text: "四等奖",
    title: "海蓝之谜护肤套装",
    img: "../img/hailan.jpg"
  },
  {
    type: 6,
    count: 30,
    text: "五等奖",
    title: "苹果蓝牙耳机",
    img: "../img/edifier.jpg"
  },
  {
    type: 7,
    count: 50,
    text: "六等奖",
    title: "幸运红包",
    img: "../img/hongbao.jpg"
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
