const bossCoinData = { lowBoss: 9400, blackMage: 1400, normalSeren: 1400, hardSeren: 2000, easyKalos: 2000, normalKalos: 3000, easySSal: 2000, normalSSal: 3000, easyKaring: 3000, normalmeilin: 1200, hardmeilin: 3000 };
const highBossCoinData = { blackMage: 20, normalSeren: 20, hardSeren: 30, easyKalos: 30, normalKalos: 60, easySSal: 30, normalSSal: 60, easyKaring: 60, normalmeilin: 10, hardmeilin: 60 };

const shopItems = [
    { id: "item1", name: "블랙 보조 무기 상자", type: "normal", price: 100, max: 1 },
    { id: "item2", name: "스페셜 소울 인챈터", type: "normal", price: 100, max: 3 },
    { id: "item3", name: "경험치 3배 쿠폰 (30분)", type: "normal", price: 100, max: 7 },
    { id: "item4", name: "VIP 버프 (경험치)", type: "normal", price: 30, max: 9999 },
    { id: "item5", name: "VIP 버프 (능력치)", type: "normal", price: 30, max: 9999 },
    { id: "item6", name: "카르마 검은 환생의 불꽃", type: "normal", price: 50, max: 1000 },
    { id: "item7", name: "솔 에르다 조각", type: "normal", price: 40, max: 500 },
    { id: "item8", name: "솔 에르다", type: "normal", price: 2000, max: 5 },
    { id: "item9", name: "메멘토 골드 큐브 (200제)", type: "normal", price: 100, max: 50 },
    { id: "item10", name: "메멘토 실버 큐브 (200제)", type: "normal", price: 50, max: 500 },
    { id: "item11", name: "카르마 브론즈 에디셔널 큐브", type: "normal", price: 20, max: 1000 },
    { id: "item12", name: "펫장비 주문서 선택권", type: "normal", price: 500, max: 100 },
    { id: "item13", name: "에픽 잠재능력 부여 스크롤 100%", type: "normal", price: 150, max: 30 },
    { id: "item14", name: "에디셔널 잠재능력 부여 스크롤 100%", type: "normal", price: 150, max: 30 },
    { id: "item15", name: "카르마 프리미엄 펫장비 주문서 선택권", type: "normal", price: 1000, max: 10 },
    { id: "item16", name: "이노센트 주문서 100%", type: "normal", price: 50, max: 10 },
    { id: "item17", name: "순백의 주문서 100%", type: "normal", price: 100, max: 10 },
    { id: "item18", name: "카르마 스타포스 17성 강화권 (160제)", type: "normal", price: 3000, max: 3 },
    { id: "item19", name: "카르마 프리미엄 악세서리 주문서 선택권", type: "normal", price: 1000, max: 10 },
    { id: "item20", name: "주문의 흔적 (1000개)", type: "normal", price: 100, max: 9999 },
    { id: "item21", name: "솔 에르다 조각 (10개)", type: "high", price: 1, max: 10 },
    { id: "item22", name: "카르마 심연의 환생의 불꽃", type: "high", price: 1, max: 250 },
    { id: "item23", name: "솔 에르다", type: "high", price: 3, max: 20 },
    { id: "item24", name: "카르마 블랙 큐브", type: "high", price: 1, max: 20 },
    { id: "item25", name: "카르마 화이트 에디셔널 큐브", type: "high", price: 2, max: 20 }
];

let globalTotalNormal = 0;
let globalTotalHigh = 0;

function showPage(pageName){
    const page = pages[pageName];
    document.getElementById("content").innerHTML = `<h1>${page.title}</h1>${page.content}`;
    createSeasonMissionList();
    createShopList();
    updateCoin();
}

function toggleAllBosses(masterCheckbox) {
    document.querySelectorAll(".boss-checkbox").forEach(cb => cb.checked = masterCheckbox.checked);
    updateCoin();
}

function toggleAllMissions(masterCheckbox) {
    document.querySelectorAll(".seasonMission-cb").forEach(cb => cb.checked = masterCheckbox.checked);
    document.querySelectorAll(".seasonMission-select").forEach(select => {
        select.selectedIndex = masterCheckbox.checked ? select.options.length - 1 : 0;
    });
    updateCoin();
}

function setMaxDropdown(selectId) {
    const select = document.getElementById(selectId);
    if (select) { select.selectedIndex = select.options.length - 1; updateCoin(); }
}

function updateCoin(){
    const level = Number(document.getElementById("levelInput").value) || 0;
    const week = Number(document.getElementById("weekInput").value) || 0;
    const levelCoin = calculateLevelCoin(level);
    const weeklyCoin = week * 1500;
    
    let bossCoin = 0;
    for(const boss in bossCoinData){
        const checkbox = document.getElementById(boss);
        if(checkbox && checkbox.checked) bossCoin += bossCoinData[boss];
    }

    let highBossCoin = 0;
    for(const boss in highBossCoinData){
        const checkbox = document.getElementById(boss);
        if(checkbox && checkbox.checked) highBossCoin += highBossCoinData[boss];
    }

    let seasonCoin = 0;
    document.querySelectorAll(".seasonMission-cb").forEach(cb => { if(cb.checked) seasonCoin += Number(cb.dataset.coin); });
    document.querySelectorAll(".seasonMission-select").forEach(select => { seasonCoin += Number(select.value); });

    globalTotalNormal = levelCoin + weeklyCoin + bossCoin + seasonCoin;
    globalTotalHigh = highBossCoin;

    let spentNormal = 0;
    let spentHigh = 0;

    shopItems.forEach(item => {
        const input = document.getElementById(`buy_${item.id}`);
        const count = input ? Number(input.value) || 0 : 0;
        if (item.type === "normal") {
            spentNormal += (item.price * count);
        } else {
            spentHigh += (item.price * count);
        }
    });

    const remainingNormal = globalTotalNormal - spentNormal;
    const remainingHigh = globalTotalHigh - spentHigh;

    const normalColor = remainingNormal < 0 ? "#ef4444" : "#1e293b";
    const highColor = remainingHigh < 0 ? "#ef4444" : "#ea580c";

    document.getElementById("coinResult").innerHTML = `
        <span style="font-weight: 600; color: #3b82f6;">[ 수입 리포트 ]</span><br>
        <div style="display:flex; justify-content:space-between; margin-top:5px;"><span>레벨 기본 보상:</span><span>${levelCoin.toLocaleString()} 개</span></div>
        <div style="display:flex; justify-content:space-between;"><span>주간 미션 (${week}주):</span><span>${weeklyCoin.toLocaleString()} 개</span></div>
        <div style="display:flex; justify-content:space-between;"><span>보스 레이드 토벌:</span><span>${bossCoin.toLocaleString()} 개</span></div>
        <div style="display:flex; justify-content:space-between; margin-bottom: 8px;"><span>시즌 챌린지 미션:</span><span>${seasonCoin.toLocaleString()} 개</span></div>
        <div style="border-top: 1px solid #e2e8f0; padding-top:8px; display:flex; justify-content:space-between; font-weight:600;"><span>총 획득 일반:</span><span>${globalTotalNormal.toLocaleString()} 개</span></div>
        <div style="display:flex; justify-content:space-between; font-weight:600; color:#ea580c; margin-bottom:12px;"><span>총 획득 상급:</span><span>${globalTotalHigh.toLocaleString()} 개</span></div>
        
        <span style="font-weight: 600; color: #94a3b8;">[ 상점 지출 리포트 ]</span><br>
        <div style="display:flex; justify-content:space-between; margin-top:5px;"><span>소비한 일반 코인:</span><span>-${spentNormal.toLocaleString()} 개</span></div>
        <div style="display:flex; justify-content:space-between; margin-bottom:12px;"><span>소비한 상급 코인:</span><span>-${spentHigh.toLocaleString()} 개</span></div>
        
        <div style="border-top: 2px dashed #cbd5e1; padding-top:12px; margin-top:5px; line-height:2.0;">
            <div style="display:flex; justify-content:space-between; font-size:15px;">
                <strong>남은 일반 코인:</strong>
                <strong style="color: ${normalColor};">${remainingNormal.toLocaleString()} 개</strong>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:15px;">
                <strong>남은 상급 코인:</strong>
                <strong style="color: ${highColor};">${remainingHigh.toLocaleString()} 개</strong>
            </div>
        </div>
        ${remainingNormal < 0 || remainingHigh < 0 ? `<div style="margin-top:15px; background:#fef2f2; color:#ef4444; border:1px solid #fee2e2; border-radius:6px; padding:10px; text-align:center; font-weight:bold;">⚠️ 잔액이 부족합니다! 수량을 낮춰주세요.</div>` : ""}
    `;
}

function calculateLevelCoin(level){
    let coin = 0; if(level < 260) return 0; coin += 3000;
    for(let i = 261; i <= Math.min(level,269); i++) coin += 300;
    for(let i = 270; i <= Math.min(level,274); i++) coin += 600;
    for(let i = 275; i <= Math.min(level,279); i++) coin += 900;
    for(let i = 280; i <= Math.min(level,284); i++) coin += 1200;
    for(let i = 285; i <= Math.min(level,289); i++) coin += 1500;
    if(level >= 290) coin += 2500; return coin;
}

function createSeasonMissionList(){
    const container = document.getElementById("seasonMissionContainer");
    if(!container) return;
    container.innerHTML = "";

    seasonMissionData.forEach((mission, index) => {
        const id = `mission_${index}`;
        if (mission.type === "dropdown") {
            let optionsHtml = `<option value="0">- 선택 안함 -</option>`;
            let cumulativeCoin = 0;

            mission.options.forEach(opt => {
                cumulativeCoin += opt.coin;
                let labelText = cumulativeCoin === opt.coin ? `${opt.label} (+${opt.coin.toLocaleString()})` : `${opt.label} (+${opt.coin.toLocaleString()}=총 ${cumulativeCoin.toLocaleString()})`;
                optionsHtml += `<option value="${cumulativeCoin}">${labelText}</option>`;
            });

            container.innerHTML += `<tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding:10px;"></td>
                <td style="padding:10px;"><strong>${mission.name}</strong></td>
                <td style="padding:10px; text-align:center;">
                    <div style="display: flex; gap: 5px; justify-content: center; align-items: center;">
                        <select id="${id}" class="seasonMission-select" onchange="updateCoin()" style="padding: 6px; border: 1px solid #cbd5e1; border-radius: 4px; max-width: 170px; font-size:13px; color:#334155;">${optionsHtml}</select>
                        <button type="button" class="max-btn" onclick="setMaxDropdown('${id}')" style="padding: 5px 8px; font-size:12px; font-weight:600; background:#3498db; border:none; border-radius:4px; color:#fff; cursor:pointer;">MAX</button>
                    </div>
                </td>
            </tr>`;
        } else {
            container.innerHTML += `<tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding:10px; text-align:center;"><input type="checkbox" id="${id}" class="seasonMission-cb" data-coin="${mission.coin}" onchange="updateCoin()"></td>
                <td style="padding:10px;"><label for="${id}" style="cursor:pointer;">${mission.name}</label></td>
                <td style="padding:10px; text-align:center; color:#2980b9; font-weight:500;">+${mission.coin.toLocaleString()}</td>
            </tr>`;
        }
    });
}

function createShopList() {
    const container = document.getElementById("shopContainer");
    if (!container) return;
    container.innerHTML = "";

    shopItems.forEach(item => {
        const coinUnit = item.type === "normal" ? "일반" : "<span style='color:#ea580c; font-weight:600;'>상급</span>";
        const maxDisplay = item.max === 9999 ? "제한 없음" : `${item.max} 개`;
        const rowBg = item.type === 'high' ? 'background: #fffbf5;' : 'border-bottom: 1px solid #f1f5f9;';
        
        container.innerHTML += `
            <tr style="${rowBg}">
                <td style="text-align: left; padding: 12px 10px 12px 15px;">
                    <strong style="color:#334155;">${item.name}</strong> 
                    <span style="font-size: 11px; color:#94a3b8; margin-left: 5px;">[${coinUnit}]</span>
                </td>
                <td style="text-align: center; color:#475569; font-weight:500;">${item.price.toLocaleString()}</td>
                <td style="text-align: center;"><span style="font-size:13px; color:#64748b;">${maxDisplay}</span></td>
                <td style="padding: 8px 10px;">
                    <div style="display:flex; justify-content:center; align-items:center; gap:5px;">
                        <input type="number" id="buy_${item.id}" min="0" max="${item.max}" value="0" oninput="validateAndUpdateShop('${item.id}', ${item.max})" style="width: 55px; text-align: center; padding: 5px; border: 1px solid #cbd5e1; border-radius: 4px; color:#334155;">
                        <button type="button" onclick="setShopMax('${item.id}', ${item.max})" style="padding: 5px 8px; font-size: 12px; font-weight:600; cursor:pointer; background:#64748b; border:none; border-radius:4px; color:#fff;">MAX</button>
                    </div>
                </td>
            </tr>
        `;
    });
}

function validateAndUpdateShop(id, max) {
    const input = document.getElementById(`buy_${id}`);
    if (input) {
        let val = Number(input.value) || 0;
        if (val < 0) input.value = 0;
        if (val > max) input.value = max;
        updateCoin();
    }
}

// 💡 개별 MAX 설정 함수
function setShopMax(id, max) {
    const input = document.getElementById(`buy_${id}`);
    if (input) {
        input.value = max;
        updateCoin();
    }
}

// 💡 상점의 모든 구매 수량을 0으로 초기화하는 함수
function resetAllShopItems() {
    if (confirm("상점에서 설정한 모든 구매 수량을 초기화하시겠습니까?")) {
        shopItems.forEach(item => {
            const input = document.getElementById(`buy_${item.id}`);
            if (input) {
                input.value = 0;
            }
        });
        updateCoin();
    }
}

const seasonMissionData = [
    { name: "어빌리티 등급 달성", type: "dropdown", options: [{ label: "유니크 등급 달성", coin: 100 }, { label: "레전드리 등급 달성", coin: 300 }] },
    { name: "레전 어빌 핵심 옵션 1개 획득 (보공/재사용 등)", type: "checkbox", coin: 500 },
    { name: "아케인 심볼 성장 레벨 총합", type: "dropdown", options: [{ label: "총합 60레벨 달성", coin: 100 }, { label: "총합 80레벨 달성", coin: 300 }, { label: "총합 100레벨 달성", coin: 500 }, { label: "총합 120레벨 달성", coin: 1000 }] },
    { name: "어센틱 심볼 성장 레벨 총합", type: "dropdown", options: [{ label: "총합 20레벨 달성", coin: 100 }, { label: "총합 25레벨 달성", coin: 100 }, { label: "총합 30레벨 달성", coin: 300 }, { label: "총합 35레벨 달성", coin: 300 }, { label: "총합 40레벨 달성", coin: 500 }] },
    { name: "잠재 능력 레전드리 엠블럼 장착", type: "checkbox", coin: 1000 },
    { name: "잠재 능력 레전드리 보조 무기 장착", type: "checkbox", coin: 1000 },
    { name: "에디셔널 잠재 유니크 이상 엠블럼 장착", type: "checkbox", coin: 500 },
    { name: "에디셔널 잠재 유니크 이상 보조 무기 장착", type: "checkbox", coin: 500 },
    { name: "5차 전직 직업 코어 강화 (Lv.30)", type: "dropdown", options: [{ label: "직업 코어 2개 이상 달성", coin: 100 }, { label: "직업 코어 4개 이상 달성", coin: 300 }] },
    { name: "5차 전직 강화 코어 강화 (Lv.60)", type: "dropdown", options: [{ label: "강화 코어 2개 이상 달성", coin: 100 }, { label: "강화 코어 4개 이상 달성", coin: 300 }] },
    { name: "HEXA 스탯 활성화", type: "checkbox", coin: 300 },
    { name: "HEXA 스킬 솔 에르다 조각 사용량", type: "dropdown", options: [{ label: "조각 300개 이상 사용", coin: 100 }, { label: "조각 600개 이상 사용", coin: 300 }, { label: "조각 900개 이상 사용", coin: 300 }, { label: "조각 1,200개 이상 사용", coin: 500 }, { label: "조각 1,500개 이상 사용", coin: 500 }, { label: "조각 1,800개 이상 사용", coin: 1000 }] },
    { name: "전투력 달성 수치", type: "dropdown", options: [{ label: "전투력 1,000만 달성", coin: 100 }, { label: "전투력 3,000만 달성", coin: 300 }, { label: "전투력 5,000만 달성", coin: 300 }, { label: "전투력 7,000만 달성", coin: 500 }, { label: "전투력 1억 달성", coin: 1000 }] },
    { name: "제네시스 무기 해방", type: "dropdown", options: [{ label: "제네시스 1차 해방하기", coin: 500 }, { label: "제네시스 2차 해방하기", coin: 1000 }] }
];