(() => {
  "use strict";

  const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
  const ease = (value) => {
    const x = clamp(value);
    return x * x * (3 - 2 * x);
  };

  const days = [
    {
      id: "day-1",
      number: "01",
      date: "08.06 · THURSDAY",
      title: "成都 → 丽江，入住和第一夜",
      theme: "完成移动与入住，不立刻进入打卡模式。",
      intensity: "★☆☆☆☆",
      scene: "动车 · 酒店 · 五一街近距离散步",
      stop: "完成入住和吃饭就算圆满；明显疲劳时取消晚间散步。",
      fallback: "晚餐后直接回酒店，在院子坐十分钟后早睡。",
      budget: "160—310 元（不含动车和酒店）",
      timeline: [
        ["07:20—08:00", "抵达成都南站", "完成安检、候车与早餐；确认车次、检票口和座位，证件与充电设备放进随身包。"],
        ["08:33", "乘 D239 前往丽江（参考）", "先安置行李，再休息或看离线内容；车次和时刻只以 12306 订单为准。"],
        ["12:00", "动车上清淡午餐", "选择米饭、面条、鸡蛋和水果；少量多次补水，餐后起身活动几分钟。"],
        ["17:46", "抵达丽江站（参考）", "下车前检查座位、充电口和行李架；出站后放慢动作，不奔跑、不抢车。"],
        ["17:55—18:30", "前往丽江古城外围", "乘正规网约车或出租车，并提前与酒店管家确认古城下车点和行李接应。"],
        ["18:30—19:10", "入住花间府·植梦", "核对连续入住、房型、早餐与接应；先喝温水、检查房间，不急着展开全部行李。"],
        ["19:20—20:10", "第一顿丽江晚餐", "选择小锅米线、汽锅鸡、时蔬或清汤家常菜；排队超过 20—30 分钟就换店。"],
        ["20:10—20:50", "只走酒店附近", "熟悉文治巷、五一街和回酒店主路线；雨后石板湿滑，不边走边看手机。"],
        ["21:00 后", "回院休息", "补水、洗漱并准备第二天衣物雨具；不饮酒、不吃重口夜宵，也不再研究大量攻略。"],
      ],
    },
    {
      id: "day-2",
      number: "02",
      date: "08.07 · FRIDAY",
      title: "丽江古城慢逛＋黑龙潭",
      theme: "在水系、石板与院落中建立对丽江的第一层理解。",
      intensity: "★★☆☆☆",
      scene: "五一街 · 四方街外围 · 午休 · 黑龙潭",
      stop: "出现头痛、恶心或明显疲劳时，下午直接取消黑龙潭。",
      fallback: "持续下雨则改为酒店庭院、古城茶馆或一个室内文化空间。",
      budget: "340—710 元＋可选门票",
      timeline: [
        ["09:00—10:00", "自然醒与酒店早餐", "先吃热食和主食，再观察降雨与身体状态；早餐后在院子坐一会儿。"],
        ["10:15—10:40", "沿五一街水系出发", "观察店铺、溪水、木门与屋檐；先顺着水走，不急着机械导航地标。"],
        ["10:40—11:30", "小石桥与支巷慢逛", "每走一段就停一次，留意东巴文字、五花石板和居民巷；不冲动购买银饰、药材或高价茶。"],
        ["11:30—12:20", "四方街外围与木府周边", "四方街短停看空间与人流；默认只看木府外围，不叠加狮子山和万古楼。"],
        ["12:30—13:40", "纳西风味午餐", "两人点 2—3 道菜和主食；鸡豆凉粉、银鱼炒蛋、水性杨花或汽锅鸡均可。"],
        ["13:40—15:30", "回酒店午休", "沿熟悉路线返回，真正躺下休息；上午步行较多时可延长至 16:00。"],
        ["15:30—16:00", "第二次天气判断", "雨势减弱、路面安全且身体正常才去黑龙潭；否则立即启动雨天替代。"],
        ["16:00—17:30", "黑龙潭低强度散步", "以入口、五孔桥、古树和主要水面为主；雪山未露时就拍倒影与树影。"],
        ["18:00—19:20", "返回古城晚餐", "可尝小份腊排骨或纳西菜；下午疲劳时直接选择酒店附近家常菜。"],
        ["19:30—20:30", "夜间二选一", "五一街短逛，或安静民谣店坐 30—60 分钟；只选其一，进店前问清费用。"],
        ["21:00", "沿熟悉主街回酒店", "补水、轻柔拉伸并准备白沙衣物；不熬夜修图，不走偏僻近路。"],
      ],
    },
    {
      id: "day-3",
      number: "03",
      date: "08.08 · SATURDAY",
      title: "白沙古镇＋雪山脚下咖啡",
      theme: "看纳西村落、看云、拍照和发呆，不增加第二个古镇。",
      intensity: "★★☆☆☆",
      scene: "白沙主街 · 支巷 · 壁画可选 · 雪山咖啡",
      stop: "白沙与束河只选一个；不为追雪山连续更换露台。",
      fallback: "人流过大或持续降雨时，白沙替换为束河或酒店慢度假。",
      budget: "420—790 元＋可选项目",
      timeline: [
        ["08:30—09:30", "自然醒、早餐与看云", "从院子观察雪山方向后再决定穿搭；雨具、防晒、外套和充电宝装进轻便包。"],
        ["09:30—10:20", "前往白沙古镇", "乘正规网约车或出租车，保存主街入口或返程上车点；不接受途中临时收费推荐。"],
        ["10:20—10:50", "先熟悉白沙尺度", "确认洗手间、午餐、咖啡与返程位置；先观察，不急着购物或冲进网红店。"],
        ["10:50—12:20", "离开拥挤主街慢走", "在可通行支巷看石墙、木门、花墙和生活场景；不擅自进入私人院落。"],
        ["12:20—13:30", "白沙午餐", "选择有座位、能避雨、上菜快的纳西家常菜、米线或简餐；不排队超过半小时。"],
        ["13:30—14:10", "白沙壁画可选", "有兴趣且排队可接受时进入；天气突然转好可把时间继续留给户外。"],
        ["14:10—16:00", "坐进雪山咖啡", "先确认室内座位和消费规则；在同一处看云、聊天、整理照片，不追最佳机位。"],
        ["16:00—16:50", "提前叫车返古城", "避开傍晚高峰，不顺路叠加束河；上车前检查相机、手机和购物袋。"],
        ["17:00—18:30", "回酒店恢复", "洗漱、备份照片、喝茶或午睡；不被临时种草带去新的日落点。"],
        ["18:30—19:50", "五一街附近晚餐", "选择前两天没吃过的口味，以方便、热食和回酒店距离短为原则。"],
        ["20:00—20:30", "确认香格里拉日期", "共同核对天气预警、铁路订单、旅拍预约和身体感受；决定后不再反复纠结。"],
        ["20:30 后", "提前休息", "写清早餐、离店与进站时间；若已明显不适，第二天早上优先取消。"],
      ],
    },
    {
      id: "day-4",
      number: "04",
      date: "08.09 · SUNDAY",
      title: "香格里拉一日往返（默认日）",
      theme: "只体验独克宗、藏服、藏餐与藏地文化，不追全域打卡。",
      intensity: "★★★☆☆",
      scene: "动车 · 独克宗 · 妆造旅拍 · 月光广场",
      stop: "任何持续加重的不适都立即停止；返程列车是今天的硬边界。",
      fallback: "天气普通则保留室内妆造、藏餐与短逛；预警或身体不适则顺延或取消。",
      budget: "900—1,750 元",
      timeline: [
        ["07:50—08:35", "身体自查与热早餐", "无明显不适才出发；检查身份证、车票、预约、保暖层和雨具，轻装上高原。"],
        ["08:40—09:15", "前往丽江站", "预留古城石板路、叫车、安检和找站台的时间；不搭价格不明的揽客车。"],
        ["09:41", "动车前往香格里拉（参考）", "安静休息、少量补水；车上若已出现持续不适，到站后先寻求帮助。"],
        ["11:22", "抵达香格里拉（参考）", "放慢动作并先穿好外套；不在站外临时拼团或购买全景点一日游。"],
        ["11:30—12:00", "打车前往独克宗", "与旅拍店再次确认到店和结束时间，同时确认返程叫车方便区域。"],
        ["12:00—12:50", "热而不过量的藏餐", "牦牛肉主菜或汤面配青稞饼、蔬菜与少量酸奶；不同时点大火锅和多份主食。"],
        ["13:00—13:40", "选服装并锁定费用", "逐项确认底片、精修、外景、加片与交付；服装兼顾保暖、行动和照片效果。"],
        ["13:40—14:30", "完成妆造", "尽量坐着休息；头饰过紧、衣服过冷或身体不适时及时表达并停止。"],
        ["14:30—15:20", "情侣外景拍摄", "只选门店附近街巷与月光广场一两个区域；以牵手、并肩走、整理衣领为主。"],
        ["15:20—15:40", "卸配饰与确认原片", "穿回自己的保暖外套，补水和少量能量；不为更多机位延长拍摄。"],
        ["15:40—16:30", "独克宗短距离慢逛", "月光广场、仓房街、白塔、龟山中只选一至两处；转经筒顺时针参与。"],
        ["16:30—17:00", "坐下恢复并确认返程", "少量体验酥油茶或热饮；至少提前 45—60 分钟离开古城去车站。"],
        ["返程前 45—60 分", "前往香格里拉站", "不再临停纳帕海或其他景点；先安检候车，再购买必要食物。"],
        ["傍晚", "动车返回丽江", "保持保暖、少量补水并休息；持续不适及时告知列车工作人员。"],
        ["抵达后", "直接回酒店", "换衣、喝温水、简单热食并早睡；不饮酒、不泡久澡、不进入古城夜游。"],
      ],
    },
    {
      id: "day-5",
      number: "05",
      date: "08.10 · MONDAY",
      title: "恢复日／玉湖村二选一",
      theme: "默认把酒店、咖啡与闲散时间正式纳入旅行。",
      intensity: "A ★☆☆☆☆ · B ★★☆☆☆",
      scene: "酒店庭院 · 忠义市场 · 咖啡 · 玉湖村可选",
      stop: "疲劳、下雨、车辆不确定或两人意见不一致，立即回到 A 方案。",
      fallback: "若香格里拉顺延到今天，直接执行 Day 4，恢复日与玉湖村自动取消。",
      budget: "A 450—1,000 元 · B 650—1,300 元",
      timeline: [
        ["A·09:00—10:00", "睡到自然醒", "评估香格里拉后的睡眠与疲劳；状态差时把上午全部留给酒店。"],
        ["A·10:00—11:30", "庭院喝茶与拍照", "按环境空镜、单人、双人、细节的顺序慢拍，不打扰其他住客。"],
        ["A·11:30—12:10", "忠义市场或五一街二选一", "少量体验烤饵块、鸡豆凉粉和水果，不把市场走成购物任务。"],
        ["A·12:10—13:10", "附近家常午餐", "若已吃较多小吃就减量；野生菌只在正规餐厅并确认完全煮熟。"],
        ["A·13:10—15:30", "回酒店午休", "这是高原日后的主要恢复窗口；不把午休变成持续修图和做攻略。"],
        ["A·15:30—17:10", "庭院咖啡或茶馆", "只选一家能坐久、有室内座位的店，写记录、看照片或聊天。"],
        ["A·17:10—18:10", "购买伴手礼", "优先包装完整、日期清楚且方便携带的鲜花饼、咖啡和酸角糕。"],
        ["A·18:30—20:00", "正式告别晚餐", "小份腊排骨、纳西烤肉、汽锅鸡和时蔬中组合 2—3 道菜，不再叠加酒吧。"],
        ["A·20:00—21:00", "整理返程行李", "身份证、充电宝、外套、药品与零食单独放入随身包，确认退房和接应。"],
        ["B·09:00—10:00", "决定是否启动玉湖村", "天气、身体、路况和正规往返车辆必须全部清楚，否则直接执行 A 方案。"],
        ["B·10:30", "乘预约往返车辆出发", "再次确认返程时间、集合点、费用、车牌和司机联系方式。"],
        ["B·11:40—13:00", "玉湖村公共区域慢走", "用石屋与道路做雪山前景；不进私人院落，不为角度攀高或倒退。"],
        ["B·13:00—14:00", "简单午餐与休息", "确保有热食、主食和干净座位；雨势增强或疲劳时立即提前返程。"],
        ["B·14:00—14:40", "集合点附近短距离补拍", "不再向更远处探索，检查随身物品并给找车留足时间。"],
        ["B·15:00—16:00", "原车返回丽江", "不叠加白沙、束河或黑龙潭；回酒店洗漱、午休并准备晚餐。"],
      ],
    },
    {
      id: "day-6",
      number: "06",
      date: "08.11 · TUESDAY",
      title: "丽江 → 成都，从容返程",
      theme: "不把最后半天排满，完成退房、进站与长途移动。",
      intensity: "★☆☆☆☆",
      scene: "酒店早餐 · 退房 · 丽江站 · 动车",
      stop: "返程早晨不新增景点，也不临时采购需要挑选或邮寄的商品。",
      fallback: "直接前往车站；任何延误都优先保证安检与进站余量。",
      budget: "100—430 元（不含动车）",
      timeline: [
        ["08:20—09:10", "最后一顿酒店早餐", "先检查床头、插座、洗手间和衣柜，再吃热食并确认车次、叫车与接应。"],
        ["09:10—09:40", "打包与退房", "核对账单、押金、遗留物和两笔订单；伴手礼集中加固，途中用品放随身包。"],
        ["09:40—10:00", "走到古城外上车点", "按确认主路线离开，不绕去景点或商店拍最后一张；到达后核对行李数量。"],
        ["10:00", "前往丽江站", "乘正规网约车或出租车，确认终点和预计到达时间，不要求司机绕路采购。"],
        ["10:30", "安检与候车", "先确认检票口和列车状态，再补水或购买熟悉、易消化的食物。"],
        ["11:03", "乘 D240 返回成都南（参考）", "先安置大件行李，再准备颈枕、外套和充电设备；最终车次只以 12306 为准。"],
        ["动车途中", "吃饭、休息、活动、整理照片", "不统计漏掉了多少景点；到站前 20 分钟检查座位、充电口、行李架和伴手礼。"],
      ],
    },
  ];

  const budgets = [
    ["成都—丽江往返动车", "约 ¥1,536", 60],
    ["丽江—香格里拉往返", "约 ¥280", 18],
    ["丽江及周边交通", "¥400—650", 26],
    ["六日餐饮", "¥1,800—2,600", 100],
    ["咖啡、茶与一次清吧", "¥300—600", 23],
    ["藏服妆造／简易跟拍", "¥300—800", 31],
    ["备用金", "¥500—1,000", 39],
  ];

  const checklist = [
    ["证件与电子", ["身份证", "12306 与酒店订单截图", "手机、充电器、充电宝与充电线", "耳机、相机与备用电池", "离线地图和重要地址截图"]],
    ["衣物与防护", ["短袖 2—3 件", "薄长袖／卫衣 1—2 件", "轻薄防风防水外套", "长裤与舒适防滑鞋", "拍照服装 1 套", "帽子、太阳镜与防晒", "折叠伞或轻便雨衣"]],
    ["健康与核验", ["个人处方药和常用药", "纸巾、湿巾、口罩", "少量能量零食和水", "酒店连续入住已确认", "古城接应与行李已确认", "8 月 9 日车票已锁定", "旅拍价格和改期规则已书面确认"]],
  ];

  const dayList = document.querySelector("#dayList");
  const budgetBars = document.querySelector("#budgetBars");
  const checklistGroups = document.querySelector("#checklistGroups");

  const createTimeline = (events) =>
    events
      .map(
        ([time, title, copy]) => `
          <div class="timeline-event">
            <time class="timeline-time">${time}</time>
            <div class="timeline-copy">
              <h5>${title}</h5>
              <p>${copy}</p>
            </div>
          </div>`,
      )
      .join("");

  if (dayList) {
    dayList.innerHTML = days
      .map(
        (day, index) => `
          <article class="day-card${index === 0 ? " is-open" : ""}" id="${day.id}">
            <button
              class="day-toggle"
              type="button"
              aria-expanded="${index === 0 ? "true" : "false"}"
              aria-controls="${day.id}-panel"
            >
              <span class="day-number">${day.number}</span>
              <span class="day-title">
                <small>${day.date}</small>
                <strong>${day.title}</strong>
              </span>
              <span class="day-summary">
                <small>THE DAY IN ONE LINE</small>
                <p>${day.theme}</p>
              </span>
              <span class="day-plus" aria-hidden="true"></span>
            </button>
            <div class="day-panel" id="${day.id}-panel">
              <div class="day-panel-inner">
                <div class="day-content">
                  <aside class="day-aside">
                    <div class="day-aside-block"><small>强度 / INTENSITY</small><p>${day.intensity}</p></div>
                    <div class="day-aside-block"><small>主场景 / MAIN SCENE</small><p>${day.scene}</p></div>
                    <div class="day-aside-block"><small>停损线 / STOP LINE</small><p>${day.stop}</p></div>
                    <div class="day-aside-block"><small>替代 / FALLBACK</small><p>${day.fallback}</p></div>
                    <div class="day-aside-block"><small>双人参考 / BUDGET</small><p>${day.budget}</p></div>
                  </aside>
                  <div class="timeline">${createTimeline(day.timeline)}</div>
                </div>
              </div>
            </div>
          </article>`,
      )
      .join("");
  }

  if (budgetBars) {
    budgetBars.innerHTML = budgets
      .map(
        ([label, value, width]) => `
          <div class="budget-row">
            <div class="budget-label"><span>${label}</span><b>${value}</b></div>
            <div class="budget-track"><i style="--budget-width:${width}%"></i></div>
          </div>`,
      )
      .join("");
  }

  const storageKey = "lijiang-shangrila-checklist-v1";
  let savedChecks = {};
  try {
    savedChecks = JSON.parse(localStorage.getItem(storageKey) || "{}");
  } catch {
    savedChecks = {};
  }

  if (checklistGroups) {
    let itemIndex = 0;
    checklistGroups.innerHTML = checklist
      .map(([group, items]) => {
        const rows = items
          .map((item) => {
            const id = `packing-${itemIndex++}`;
            return `
              <label class="check-item" for="${id}">
                <input id="${id}" type="checkbox" ${savedChecks[id] ? "checked" : ""} />
                <span class="check-box" aria-hidden="true"></span>
                <span>${item}</span>
              </label>`;
          })
          .join("");
        return `<section class="checklist-group"><h4>${group}</h4>${rows}</section>`;
      })
      .join("");
  }

  const updateChecklist = () => {
    const boxes = [...document.querySelectorAll(".check-item input")];
    const state = {};
    boxes.forEach((box) => {
      state[box.id] = box.checked;
    });
    try {
      localStorage.setItem(storageKey, JSON.stringify(state));
    } catch {
      // Storage is an enhancement; the checklist remains usable without it.
    }
    const checked = boxes.filter((box) => box.checked).length;
    const checkedCount = document.querySelector("#checkedCount");
    const totalCount = document.querySelector("#totalCount");
    const checkProgress = document.querySelector("#checkProgress");
    if (checkedCount) checkedCount.textContent = String(checked);
    if (totalCount) totalCount.textContent = String(boxes.length);
    if (checkProgress) checkProgress.style.width = `${boxes.length ? (checked / boxes.length) * 100 : 0}%`;
  };

  document.addEventListener("change", (event) => {
    if (event.target.matches(".check-item input")) updateChecklist();
  });

  document.querySelector("#resetChecklist")?.addEventListener("click", () => {
    document.querySelectorAll(".check-item input").forEach((box) => {
      box.checked = false;
    });
    updateChecklist();
  });

  updateChecklist();

  dayList?.addEventListener("click", (event) => {
    const toggle = event.target.closest(".day-toggle");
    if (!toggle) return;
    const card = toggle.closest(".day-card");
    const willOpen = !card.classList.contains("is-open");
    document.querySelectorAll(".day-card").forEach((other) => {
      other.classList.remove("is-open");
      other.querySelector(".day-toggle")?.setAttribute("aria-expanded", "false");
    });
    if (willOpen) {
      card.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
    }
  });

  const openDayFromHash = () => {
    const card = document.querySelector(location.hash);
    if (!card?.classList.contains("day-card")) return;
    card.classList.add("is-open");
    card.querySelector(".day-toggle")?.setAttribute("aria-expanded", "true");
  };

  window.addEventListener("hashchange", openDayFromHash);
  openDayFromHash();

  const root = document.documentElement;
  const stage = document.querySelector(".stage");
  let scrollTicking = false;

  const updateScene = () => {
    if (!stage) return;
    const top = stage.getBoundingClientRect().top + window.scrollY;
    const scene = (window.scrollY - top) / Math.max(window.innerHeight, 1);
    const p0 = ease(scene / 0.85);
    const p1 = ease((scene - 0.45) / 0.95);
    const p2 = ease((scene - 1.55) / 0.95);
    const p3 = ease((scene - 2.55) / 0.95);
    root.style.setProperty("--p0", p0.toFixed(4));
    root.style.setProperty("--p1", p1.toFixed(4));
    root.style.setProperty("--p2", p2.toFixed(4));
    root.style.setProperty("--p3", p3.toFixed(4));
    root.style.setProperty("--hero-out", ease((scene - 0.05) / 0.75).toFixed(4));
    scrollTicking = false;
  };

  const requestSceneUpdate = () => {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(updateScene);
  };

  window.addEventListener("scroll", requestSceneUpdate, { passive: true });
  window.addEventListener("resize", requestSceneUpdate, { passive: true });
  updateScene();

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.28, rootMargin: "0px 0px -8%" },
  );

  document.querySelectorAll(".story-copy, .field-tools").forEach((element) => revealObserver.observe(element));

  const cards = [...document.querySelectorAll(".sight-card")];
  const track = document.querySelector(".sights-track");
  const count = document.querySelector(".sight-count b");
  let sightIndex = 0;
  let baseTrackX = 0;
  let pointerStartX = 0;
  let pointerDelta = 0;
  let dragging = false;
  let suppressCardClickUntil = 0;

  const updateSight = (nextIndex, animate = true) => {
    if (!cards.length || !track) return;
    sightIndex = (nextIndex + cards.length) % cards.length;
    const firstOffset = cards[0].offsetLeft;
    const cardOffset = cards[sightIndex].offsetLeft;
    const viewportPadding = window.innerWidth <= 700 ? 18 : Math.max(window.innerWidth * 0.08, (window.innerWidth - 1060) / 2);
    const maxMove = Math.max(0, track.scrollWidth - window.innerWidth + viewportPadding * 2);
    baseTrackX = -Math.min(cardOffset - firstOffset, maxMove);
    track.classList.toggle("is-dragging", !animate);
    track.style.setProperty("--track-x", `${baseTrackX}px`);
    cards.forEach((card, index) => card.classList.toggle("is-active", index === sightIndex));
    if (count) count.textContent = String(sightIndex + 1).padStart(2, "0");
    if (!animate) requestAnimationFrame(() => track.classList.remove("is-dragging"));
  };

  document.querySelector(".sight-prev")?.addEventListener("click", () => updateSight(sightIndex - 1));
  document.querySelector(".sight-next")?.addEventListener("click", () => updateSight(sightIndex + 1));

  cards.forEach((card, index) => {
    const activate = () => {
      if (performance.now() < suppressCardClickUntil) return;
      if (index !== sightIndex) {
        updateSight(index);
        return;
      }
      const target = document.querySelector(`#${card.dataset.target}`);
      if (target) {
        target.classList.add("is-open");
        target.querySelector(".day-toggle")?.setAttribute("aria-expanded", "true");
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    card.addEventListener("click", activate);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activate();
      }
    });
  });

  track?.addEventListener("pointerdown", (event) => {
    dragging = true;
    pointerStartX = event.clientX;
    pointerDelta = 0;
    track.classList.add("is-dragging");
    track.setPointerCapture(event.pointerId);
  });

  track?.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    pointerDelta = event.clientX - pointerStartX;
    track.style.setProperty("--track-x", `${baseTrackX + pointerDelta}px`);
  });

  const endDrag = (event) => {
    if (!dragging || !track) return;
    dragging = false;
    if (Math.abs(pointerDelta) > 8) suppressCardClickUntil = performance.now() + 320;
    if (track.hasPointerCapture?.(event.pointerId)) track.releasePointerCapture(event.pointerId);
    track.classList.remove("is-dragging");
    if (Math.abs(pointerDelta) > 48) updateSight(sightIndex + (pointerDelta < 0 ? 1 : -1));
    else updateSight(sightIndex);
  };

  track?.addEventListener("pointerup", endDrag);
  track?.addEventListener("pointercancel", endDrag);
  window.addEventListener("resize", () => updateSight(sightIndex, false));
  updateSight(0, false);

  const decisionButtons = [...document.querySelectorAll("[data-decision]")];
  const decisionOutput = document.querySelector("#decisionOutput");
  const updateDecision = () => {
    const selected = decisionButtons.filter((button) => button.getAttribute("aria-pressed") === "true");
    if (!decisionOutput) return;
    if (selected.length === 3) {
      decisionOutput.innerHTML = `
        <span>PRIMARY PLAN · 08.09</span>
        <strong>执行独克宗</strong>
        <p>三个条件全部满足：按主计划前往，只做独克宗，并把返程进站时间作为硬边界。</p>`;
    } else if (selected.length === 2) {
      decisionOutput.innerHTML = `
        <span>ONE CONDITION MISSING</span>
        <strong>暂缓决定</strong>
        <p>还缺一个条件。不要用已经买票或已经预约代替天气与身体判断。</p>`;
    } else if (selected.length === 1) {
      decisionOutput.innerHTML = `
        <span>INSUFFICIENT CONDITIONS</span>
        <strong>保留备用日</strong>
        <p>只确认一项还不够。继续观察 8 月 10 日，并保留改签或取消余地。</p>`;
    } else {
      decisionOutput.innerHTML = `
        <span>DEFAULT PLAN</span>
        <strong>暂不出发</strong>
        <p>依次确认三个条件；全部满足后才执行 8 月 9 日独克宗主计划。</p>`;
    }
  };

  decisionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const pressed = button.getAttribute("aria-pressed") === "true";
      button.setAttribute("aria-pressed", String(!pressed));
      updateDecision();
    });
  });

  const languageButton = document.querySelector(".language-switcher");
  let englishLabels = false;
  languageButton?.addEventListener("click", () => {
    englishLabels = !englishLabels;
    document.querySelectorAll("[data-nav-zh]").forEach((item) => {
      item.textContent = englishLabels ? item.dataset.navEn : item.dataset.navZh;
    });
    const label = languageButton.querySelector("span:first-child");
    if (label) label.textContent = englishLabels ? "中" : "EN";
    const titleCn = document.querySelector(".title-cn");
    if (titleCn) titleCn.textContent = englishLabels ? "LIJIANG · SHANGRI-LA" : "丽江 · 香格里拉";
    languageButton.setAttribute("aria-label", englishLabels ? "切换为中文导航" : "Switch navigation to English");
  });

  const sectionLinks = [...document.querySelectorAll(".site-nav a, .day-dock a")];
  const sectionTargets = sectionLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  const activeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        sectionLinks.forEach((link) => {
          const active = link.getAttribute("href") === `#${entry.target.id}`;
          if (active) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-18% 0px -68%", threshold: 0 },
  );
  sectionTargets.forEach((target) => activeObserver.observe(target));

  const sceneImages = [...document.querySelectorAll(".scene-img")];
  Promise.race([
    Promise.all(sceneImages.map((image) => (image.decode ? image.decode().catch(() => undefined) : Promise.resolve()))),
    new Promise((resolve) => setTimeout(resolve, 1600)),
  ]).finally(() => {
    requestAnimationFrame(() => document.body.classList.remove("is-loading"));
  });
})();
