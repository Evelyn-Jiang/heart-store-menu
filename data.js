const MENU_DATA = {
  shop: {
    name: '心动便利店',
    slogan: '遇见你，是我最初的悸动。',
    status: 'open',
    hours: '14:00-24:00',
    closedDay: '快乐不打烊'
  },
  services: [
    '【情难自控】599/h：1V1影院房精神陪伴，可以跟小姐姐深度接触，感受小姐姐的嫩滑肌，👄脸，摸🐻，骑乘式拥抱。',
    '【情难自控】799/h：🐍吻，真空摸🐻，亲🐻，乘骑式抱抱☺️感受初恋的感觉，卸下一天的疲劳，其他要求可以跟小姐姐聊聊，合理范围都可以满足！',
    '【外派地陪业务】700/h 两小时起，女友感陪伴',
    '【外派喝酒业务】499/h 三小时起，微醺、解锁偶遇的邂逅时光！'
  ],
  items: [
    {
      id: 'coffee',
      name: '猫猫',
      price: 12,
      desc: '160 86 C+ 曲线玲珑 御萝双休',
      detail: '选用埃塞俄比亚与哥伦比亚拼配豆，每日新鲜烘焙。中深烘焙带来坚果与黑巧克力的香气，口感干净明亮。凌晨三点的路灯、加班后的疲惫，一杯热美式是最好的陪伴。',
      signature: true,
      media: [
        'images/maomao-1.jpg',
        'videos/coffee-pour.mp4',
        'images/coffee-2.jpg',
        'images/coffee-3.jpg'
      ]
    },
    {
      id: 'latte',
      name: '热拿铁咖啡',
      price: 15,
      desc: '丝滑奶泡，温润顺口',
      detail: '浓缩咖啡与新鲜牛乳的完美比例。奶泡绵密细腻，温度控制在65度，入口即化的丝滑感中藏着咖啡的醇厚。是冬日清晨里最温柔的一口。',
      signature: false,
      media: []
    },
    {
      id: 'onigiri',
      name: '奥尔良鸡腿饭团',
      price: 8,
      desc: '整块鸡腿肉，酱香入味',
      detail: '精选奥尔良风味烤鸡腿肉，整片铺在东北大米之上。米饭用昆布高汤浸润，外裹海苔，微波加热后香气四溢。每一个都是手工现做，拒绝工厂流水线味道。',
      signature: true,
      media: [
        'images/onigiri-1.jpg',
        'images/onigiri-2.jpg',
        'images/onigiri-3.jpg'
      ]
    },
    {
      id: 'bento',
      name: '照烧鸡排便当',
      price: 18,
      desc: '现烤鸡排，酱汁浓郁',
      detail: '去骨鸡腿肉以秘制照烧酱腌制过夜，铁板现烤至表皮焦香。搭配时令蔬菜与软糯白饭，酱汁咸甜适中，是便利店便当里的顶流选手。每日限量供应，来晚了就没了。',
      signature: true,
      media: [
        'images/bento-1.jpg',
        'images/bento-2.jpg',
        'images/bento-3.jpg'
      ]
    },
    {
      id: 'hotdog',
      name: '芝士热狗棒',
      price: 12,
      desc: '拉丝芝士，外酥里嫩',
      detail: '马苏里拉芝士裹住整块热狗肠，外层面衣炸至金黄酥脆。咬开瞬间芝士拉出长长的丝，咸香奶香肉香三重奏。柜台现炸现卖，到手还是烫的。',
      signature: true,
      media: [
        'images/hotdog-1.jpg',
        'videos/hotdog-cheese-pull.mp4',
        'images/hotdog-2.jpg',
        'images/hotdog-3.jpg'
      ]
    },
    {
      id: 'oden',
      name: '关东煮组合',
      price: 15,
      desc: '五款经典，高汤慢熬',
      detail: '每日清晨现熬的昆布鲣鱼高汤，萝卜、鸡蛋、魔芋丝、鱼豆腐、海带结五款经典入汤慢煮。萝卜吸饱了汤汁软糯清甜，鸡蛋蛋白微皱、蛋黄绵密。深夜来一碗，暖胃又暖心。',
      signature: true,
      media: [
        'images/oden-1.jpg',
        'images/oden-2.jpg',
        'images/oden-3.jpg'
      ]
    },
    {
      id: 'wings',
      name: '香辣烤鸡翅',
      price: 12,
      desc: '微辣过瘾，表皮酥脆',
      detail: '鸡翅以辣椒粉、孜然、花椒等十余种香料腌制，烤箱高温烤制至表皮金黄酥脆。肉质鲜嫩多汁，辣度温和不刺激，配啤酒是一绝。',
      signature: false,
      media: []
    },
    {
      id: 'sweetpotato',
      name: '烤红薯',
      price: 8,
      desc: '蜜汁流油，软糯香甜',
      detail: '精选山东烟薯25号，低温慢烤两小时。表皮微微焦脆，内里蜜汁横流，甜度自然不做作。秋冬限定，捧在手里暖乎乎，吃在嘴里甜丝丝。',
      signature: false,
      media: []
    },
    {
      id: 'sandwich-tuna',
      name: '金枪鱼沙拉三明治',
      price: 14,
      desc: '水浸金枪鱼，清爽不腻',
      detail: '水浸金枪鱼肉撕成细丝，拌入玉米粒、洋葱丁与低脂蛋黄酱。夹在现烤全麦吐司之间，口感层次丰富。减脂期的首选午餐，吃完没负担。',
      signature: false,
      media: [],
      allergens: ['鱼', '蛋', '麸质']
    },
    {
      id: 'sandwich-ham',
      name: '火腿蛋三明治',
      price: 10,
      desc: '经典搭配，百吃不厌',
      detail: '厚切火腿片配上嫩滑煎蛋，夹在松软的牛奶吐司中。简单却最考验食材品质——火腿要咸香适中，鸡蛋要溏心微流。是早上赶时间时的救星。',
      signature: false,
      media: [],
      allergens: ['蛋', '麸质']
    },
    {
      id: 'salad',
      name: '轻食蔬菜沙拉杯',
      price: 16,
      desc: '八种蔬菜，低脂油醋汁',
      detail: '罗马生菜、苦菊、紫甘蓝、樱桃番茄、黄瓜、玉米粒、鹰嘴豆、南瓜籽八种食材层层叠放。搭配自制低脂油醋汁，清爽解腻。健身党和上班族的健康之选。',
      signature: false,
      media: []
    },
    {
      id: 'strawberry-cake',
      name: '草莓奶油蛋糕',
      price: 15,
      desc: '动物奶油，酸甜适中',
      detail: '松软戚风蛋糕胚夹着新鲜草莓与动物奶油。奶油轻盈不腻，草莓酸甜爆汁，一口下去幸福感爆棚。是下午茶时间最心动的选择。',
      signature: true,
      media: [
        'images/strawberry-cake-1.jpg',
        'images/strawberry-cake-2.jpg',
        'images/strawberry-cake-3.jpg'
      ],
      allergens: ['乳', '蛋', '麸质']
    },
    {
      id: 'matcha-mousse',
      name: '抹茶慕斯',
      price: 12,
      desc: '宇治抹茶，入口即化',
      detail: '宇治抹茶粉与法国奶油芝士调和，质地如云朵般轻盈。入口先是抹茶的微苦，随后奶香缓缓释放，最后留下悠长的回甘。配一杯热美式，是完美的午后组合。',
      signature: false,
      media: [],
      allergens: ['乳']
    },
    {
      id: 'eggtart',
      name: '葡式蛋挞',
      price: 8,
      desc: '酥皮千层，蛋奶香浓',
      detail: '手工折叠的千层酥皮，层次分明。蛋奶液以鲜奶油与蛋黄调制，烤至表面焦糖色斑点。外皮一碰掉渣，内馅嫩滑如布丁，趁热吃是最佳赏味时刻。',
      signature: false,
      media: [],
      allergens: ['乳', '蛋', '麸质']
    },
    {
      id: 'orange-juice',
      name: '鲜榨橙汁',
      price: 18,
      desc: '鲜橙现榨，维C满满',
      detail: '每日清晨鲜榨，三个赣南脐橙才能榨出一杯。不加水、不加糖，保留果肉纤维和天然酸甜。每一口都是阳光的味道，是健康生活的仪式感。',
      signature: false,
      media: []
    },
    {
      id: 'oolong-tea',
      name: '无糖乌龙茶',
      price: 6,
      desc: '解腻神器，零糖零卡',
      detail: '台湾高山乌龙原叶冷萃，茶香清冽带有淡淡的花果香。零糖零卡零负担，吃炸鸡、饭团、热狗时的最佳拍档。冷藏后口感更佳。',
      signature: false,
      media: []
    },
    {
      id: 'sparkling',
      name: '白桃气泡水',
      price: 8,
      desc: '清甜白桃，气泡十足',
      detail: '日本山梨县白桃果汁调配，气泡细腻绵密。甜度克制，桃香自然，冰镇的口感在炎炎夏日里堪称救命稻草。0脂低卡，喝起来没负担。',
      signature: false,
      media: []
    },
    {
      id: 'soy-milk',
      name: '热豆浆',
      price: 5,
      desc: '现磨黄豆，香浓醇厚',
      detail: '东北非转基因黄豆，每日凌晨现磨现煮。豆香浓郁，口感顺滑无渣，甜度来自少量冰糖。是中式早餐的灵魂伴侣，也是深夜暖胃的神器。',
      signature: false,
      media: []
    }
  ]
};
