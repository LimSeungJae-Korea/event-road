const LOGO_IMAGE_URL = "images/Chall_title.jpg";
const pages = {
    Challangers_World: {
        title: "챌린저스 월드",
        content: `
        <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px; box-sizing: border-box;">
            
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 5px; flex-wrap: wrap;">
                <img src="${LOGO_IMAGE_URL}" alt="챌린저스 월드 로고" style="max-height: 40px; width: auto; object-fit: contain;">
                <h2 style="font-size: 26px; color: #2c3e50; margin: 0;">챌린저스 월드 코인 계산기 & 상점 시뮬레이터</h2>
            </div>
            <p style="color: #7f8c8d; font-size: 14px; margin-top: 5px; margin-bottom: 30px;">시즌 미션 보상을 누적으로 계산하고 상점 물품을 미리 구매해 볼 수 있는 시뮬레이터입니다.</p>
            
            <div style="display: flex; gap: 30px; align-items: flex-start; position: relative; width: 100%;">
                
                <div style="flex: 1; min-width: 0;">
                    
                    <div style="background: #fff; padding: 25px; border-radius: 12px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); margin-bottom: 25px;">
                        <h3 style="margin-top: 0; margin-bottom: 20px; font-size: 18px; color: #2c3e50; border-left: 4px solid #3498db; padding-left: 10px;">기본 정보 입력</h3>
                        <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                            <div style="flex: 1; min-width: 150px;">
                                <label style="font-weight: bold; font-size: 14px; color: #4a5568;">목표 레벨</label>
                                <input type="number" id="levelInput" oninput="updateCoin()" style="width: 100%; padding: 8px; margin-top: 5px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;">
                            </div>
                            <div style="flex: 1; min-width: 150px;">
                                <label style="font-weight: bold; font-size: 14px; color: #4a5568;">N주차 참여 (최대 13주)</label>
                                <input type="number" id="weekInput" oninput="updateCoin()" style="width: 100%; padding: 8px; margin-top: 5px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;">
                            </div>
                        </div>
                    </div>

                    <h3 style="font-size: 18px; color: #2c3e50; border-left: 4px solid #3498db; padding-left: 10px; margin-bottom: 15px;">보스 레이드</h3>
                    <table class="boss-table" style="width: 100%; background: #fff; border-collapse: collapse; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
                        <thead>
                            <tr style="background: #f8fafc;">
                                <th style="width: 50px; padding: 12px;"><input type="checkbox" id="toggleAllBosses" onchange="toggleAllBosses(this)"></th>
                                <th style="text-align: left; padding: 12px;">보스 명</th>
                                <th style="width: 110px; padding: 12px;">일반 코인</th>
                                <th style="width: 110px; padding: 12px;">상급 코인</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px; text-align: center;"><input type="checkbox" id="lowBoss" class="boss-checkbox" onchange="updateCoin()"></td><td style="padding: 10px;"><label for="lowBoss" style="cursor: pointer;">검밑솔</label></td><td style="padding: 10px; text-align: center; color:#2980b9; font-weight:500;">+9,400</td><td style="padding: 10px; text-align: center; color:#94a3b8;">-</td></tr>
                            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px; text-align: center;"><input type="checkbox" id="blackMage" class="boss-checkbox" onchange="updateCoin()"></td><td style="padding: 10px;"><label for="blackMage" style="cursor: pointer;">검은 마법사</label></td><td style="padding: 10px; text-align: center; color:#2980b9; font-weight:500;">+1,400</td><td style="padding: 10px; text-align: center; color:#e67e22; font-weight:500;">+20</td></tr>
                            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px; text-align: center;"><input type="checkbox" id="normalSeren" class="boss-checkbox" onchange="updateCoin()"></td><td style="padding: 10px;"><label for="normalSeren" style="cursor: pointer;">노말 세렌 </label></td><td style="padding: 10px; text-align: center; color:#2980b9; font-weight:500;">+1,400</td><td style="padding: 10px; text-align: center; color:#e67e22; font-weight:500;">+20</td></tr>
                            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px; text-align: center;"><input type="checkbox" id="hardSeren" class="boss-checkbox" onchange="updateCoin()"></td><td style="padding: 10px;"><label for="hardSeren" style="cursor: pointer;">하드 세렌 </label></td><td style="padding: 10px; text-align: center; color:#2980b9; font-weight:500;">+2,000</td><td style="padding: 10px; text-align: center; color:#e67e22; font-weight:500;">+30</td></tr>
                            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px; text-align: center;"><input type="checkbox" id="easyKalos" class="boss-checkbox" onchange="updateCoin()"></td><td style="padding: 10px;"><label for="easyKalos" style="cursor: pointer;">이지 칼로스 </label></td><td style="padding: 10px; text-align: center; color:#2980b9; font-weight:500;">+2,000</td><td style="padding: 10px; text-align: center; color:#e67e22; font-weight:500;">+30</td></tr>
                            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px; text-align: center;"><input type="checkbox" id="normalKalos" class="boss-checkbox" onchange="updateCoin()"></td><td style="padding: 10px;"><label for="normalKalos" style="cursor: pointer;">노말 칼로스 </label></td><td style="padding: 10px; text-align: center; color:#2980b9; font-weight:500;">+3,000</td><td style="padding: 10px; text-align: center; color:#e67e22; font-weight:500;">+60</td></tr>
                            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px; text-align: center;"><input type="checkbox" id="easySSal" class="boss-checkbox" onchange="updateCoin()"></td><td style="padding: 10px;"><label for="easySSal" style="cursor: pointer;">이지 대적자</label></td><td style="padding: 10px; text-align: center; color:#2980b9; font-weight:500;">+2,000</td><td style="padding: 10px; text-align: center; color:#e67e22; font-weight:500;">+30</td></tr>
                            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px; text-align: center;"><input type="checkbox" id="normalSSal" class="boss-checkbox" onchange="updateCoin()"></td><td style="padding: 10px;"><label for="normalSSal" style="cursor: pointer;">노말 대적자</label></td><td style="padding: 10px; text-align: center; color:#2980b9; font-weight:500;">+3,000</td><td style="padding: 10px; text-align: center; color:#e67e22; font-weight:500;">+60</td></tr>
                            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px; text-align: center;"><input type="checkbox" id="easyKaring" class="boss-checkbox" onchange="updateCoin()"></td><td style="padding: 10px;"><label for="easyKaring" style="cursor: pointer;">이지 카링</label></td><td style="padding: 10px; text-align: center; color:#2980b9; font-weight:500;">+3,000</td><td style="padding: 10px; text-align: center; color:#e67e22; font-weight:500;">+60</td></tr>
                            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px; text-align: center;"><input type="checkbox" id="normalmeilin" class="boss-checkbox" onchange="updateCoin()"></td><td style="padding: 10px;"><label for="normalmeilin" style="cursor: pointer;">노말 메이린</label></td><td style="padding: 10px; text-align: center; color:#2980b9; font-weight:500;">+1,200</td><td style="padding: 10px; text-align: center; color:#e67e22; font-weight:500;">+10</td></tr>
                            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px; text-align: center;"><input type="checkbox" id="hardmeilin" class="boss-checkbox" onchange="updateCoin()"></td><td style="padding: 10px;"><label for="hardmeilin" style="cursor: pointer;">하드 메이린</label></td><td style="padding: 10px; text-align: center; color:#2980b9; font-weight:500;">+3,000</td><td style="padding: 10px; text-align: center; color:#e67e22; font-weight:500;">+60</td></tr>
                        </tbody>
                    </table>

                    <h3 style="font-size: 18px; color: #2c3e50; border-left: 4px solid #3498db; padding-left: 10px; margin-top: 35px; margin-bottom: 15px;">시즌 미션</h3>
                    <table class="boss-table" style="width: 100%; background: #fff; border-collapse: collapse; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
                        <thead>
                            <tr style="background: #f8fafc;">
                                <th style="width: 50px; padding: 12px;"><input type="checkbox" id="toggleAllMissions" onchange="toggleAllMissions(this)"></th>
                                <th style="text-align: left; padding: 12px;">미션 내용</th>
                                <th style="width: 190px; padding: 12px; text-align: center;">획득 코인 / 설정</th>
                            </tr>
                        </thead>
                        <tbody id="seasonMissionContainer"></tbody>
                    </table>

                    <hr style="margin: 45px 0; border: 1px dashed #cbd5e1;">

                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; margin-top: 45px; flex-wrap: wrap; gap: 10px;">
                        <h3 style="font-size: 22px; color: #2c3e50; border-left: 5px solid #e74c3c; padding-left: 12px; margin: 0;">🛒 챌린저스 코인 상점</h3>
                        <button type="button" onclick="resetAllShopItems()" style="padding: 8px 14px; font-size: 13px; font-weight: 600; cursor: pointer; background: #e74c3c; border: none; border-radius: 6px; color: #fff; box-shadow: 0 2px 4px rgba(231,76,60,0.2); transition: background 0.2s;">
                            🔄 상점 구매 초기화
                        </button>
                    </div>
                    <p style="color: #7f8c8d; font-size: 14px; margin-bottom: 25px;">보유하신 코인 한도 내에서 아이템을 구매해 보며 최적의 소비 빌드를 연구하세요.</p>
                    
                    <table class="boss-table" style="width: 100%; background: #fff; border-collapse: collapse; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); margin-bottom: 50px;">
                        <thead>
                            <tr style="background: #f8fafc;">
                                <th style="text-align: left; padding: 12px; padding-left: 15px;">아이템 정보</th>
                                <th style="width: 120px; padding: 12px; text-align: center;">가격</th>
                                <th style="width: 120px; padding: 12px; text-align: center;">남은 수량</th>
                                <th style="width: 160px; padding: 12px; text-align: center;">구매 수량 설정</th>
                            </tr>
                        </thead>
                        <tbody id="shopContainer"></tbody>
                    </table>
                </div>

                <div style="width: 320px; flex-shrink: 0; background: #fff; padding: 25px; border-radius: 12px; border: 1px solid #e2e8f0; position: sticky; top: 20px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -2px rgba(0,0,0,0.05); box-sizing: border-box;">
                    <h3 style="margin-top:0; font-size: 18px; color: #1e293b; display: flex; align-items: center; gap: 8px;">
                        <span>💰</span> 코인 정산
                    </h3>
                    <div id="coinResult" style="font-size: 14px; line-height: 1.8; color: #334155;">
                        정보를 입력하면 정산이 시작됩니다.
                    </div>
                    

                        </div>
                    </div>
                </div>

            </div>
        </div>
         `
        //                     <div style="margin-top: 25px; padding: 15px; background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 8px; text-align: center; color: #94a3b8; font-size: 12px;">
        //                 <p style="margin: 0; font-weight: bold; color: #64748b;">ADVERTISEMENT</p>
        //                 <div style="margin-top: 8px; height: 100px; background: #edf2f7; display: flex; align-items: center; justify-content: center; border-radius: 4px; font-style: italic;">
        //                     스폰서 배너 입점 예정지
    },
    event2: { title: "이벤트 2", content: `<p>이벤트 설명 작성</p>` },
    event3: { title: "이벤트 3", content: `<p>이벤트 설명 작성</p>` }
};