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
   event2: { 
        title: "패스 효율 비교", 
        content: `
        <div style="max-width: 1200px; margin: 0 auto; padding: 0 40px; box-sizing: border-box; font-family: 'Malgun Gothic', sans-serif; color: #2c3e50;">
            
            <!-- 📌 대제목 구역 -->
            <div style="margin-bottom: 40px; border-bottom: 2px solid #e2e8f0; padding-bottom: 20px;">
                <h1 style="font-size: 32px; margin: 0; font-weight: 700; color: #1e293b;">🎫 시즌 패스 종합 구성품 및 가치 분석</h1>
                <p style="color: #64748b; font-size: 16px; margin-top: 8px;">각 패스별 전체 구성품 정보와 재화 가치 산출 내역을 투명하게 공개합니다.</p>
            </div>

            <!-- 📊 [PART 1] 5대 패스 전체 구성품 정보 요약 -->
            <div style="background: #fff; padding: 30px; border-radius: 12px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); margin-bottom: 40px;">
                <h2 style="margin-top: 0; margin-bottom: 20px; font-size: 22px; color: #1e293b; border-left: 4px solid #475569; padding-left: 12px; font-weight: 700;">1. 패스별 전체 구성품 및 가격 가이드</h2>
                
                <table style="width: 100%; border-collapse: collapse; font-size: 15px; text-align: left;">
                    <thead>
                        <tr style="background: #f8fafc; border-bottom: 2px solid #edf2f7;">
                            <th style="padding: 15px; color: #475569; font-weight: 600; width: 220px;">패스 종류 / 가격</th>
                            <th style="padding: 15px; color: #475569; font-weight: 600;">포함된 전체 보상 물품 목록</th>
                            <th style="padding: 15px; color: #475569; font-weight: 600; width: 160px; text-align: center;">단독 억당 효율</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- 1. EXP 지원 패스 -->
                        <tr style="border-bottom: 1px solid #f1f5f9;">
                            <td style="padding: 18px; font-weight: bold; color: #1e293b; font-size: 16px;">
                                챌린저스 EXP 지원 패스<br>
                                <span style="font-size: 14px; color: #64748b; font-weight: normal;">19,800 캐시</span>
                            </td>
                            <td style="padding: 18px; line-height: 1.6; color: #4a5568;">
                                블루베리 농장 입판권 17개 / VIP 사우나 이용권 12개 / 상급 EXP 포인트 쿠폰 6,000개 / ~279 성장의 비약 1개
                            </td>
                            <td style="padding: 18px; text-align: center; color: #94a3b8; font-style: italic; font-size: 14px;">측정 불가<br><span style="font-size: 11px;">(성장 특화)</span></td>
                        </tr>
                        <!-- 2. 프리미엄 패스 -->
                        <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                            <td style="padding: 18px; font-weight: bold; color: #1e293b; font-size: 16px;">
                                프리미엄 패스<br>
                                <span style="font-size: 14px; color: #64748b; font-weight: normal;">19,800 캐시</span><br>
                                <span style="font-size: 12px; color: #94a3b8; font-weight: normal;">(EXP 지원 패스 구매 필요)</span>
                            </td>
                            <td style="padding: 18px; line-height: 1.6; color: #4a5568;">
                                선택 심볼 교환권 600개 / 코어 젬스톤 2,000개 / 명예의 훈장 400개 / 4배 경험치 쿠폰 12개 /<br>
                                <b>솔 에르다 조각 교환권(다조) 20개 / 검은 환생의 불꽃 400개 / 블랙 큐브 20개 / 화이트 에디셔널 큐브 20개</b>
                            </td>
                            <td style="padding: 18px; text-align: center; color: #2f855a; font-weight: bold; font-size: 16px; background: #f0fff4;">
                                약 316 원<br><span style="font-size: 12px; color: #64748b; font-weight: normal;">(62.6억 환산)</span>
                            </td>
                        </tr>
                        <!-- 3. 제네시스 패스 -->
                        <tr style="border-bottom: 1px solid #f1f5f9;">
                            <td style="padding: 18px; font-weight: bold; color: #1e293b; font-size: 16px;">
                                제네시스 패스<br>
                                <span style="font-size: 14px; color: #64748b; font-weight: normal;">30,000 캐시</span>
                            </td>
                            <td style="padding: 18px; line-height: 1.6; color: #4a5568;">
                                제네시스 무기 해방 유저 대상 전용 퀘스트 및 기간 단축 / 추가 유틸리티 보상 지원 라인업
                            </td>
                            <td style="padding: 18px; text-align: center; color: #94a3b8; font-style: italic; font-size: 14px;">측정 불가<br><span style="font-size: 11px;">(기간 단축)</span></td>
                        </tr>
                        <!-- 4. 제네시스 패스 + -->
                        <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                            <td style="padding: 18px; font-weight: bold; color: #1e293b; font-size: 16px;">
                                제네시스 패스 +<br>
                                <span style="font-size: 14px; color: #64748b; font-weight: normal;">30,000 캐시</span><br>
                                <span style="font-size: 12px; color: #94a3b8; font-weight: normal;">(제네시스 패스 구매 필요)</span>
                            </td>
                            <td style="padding: 18px; line-height: 1.6; color: #4a5568;">
                                <b>패스 코인 총 10,000개 지급</b><br>
                                <span style="font-size: 13px; color: #64748b;">(상점에서 블랙 큐브 개당 25코인, 화이트 에디셔널 큐브 개당 50코인으로 교환 가능)</span>
                            </td>
                            <td style="padding: 18px; text-align: center; color: #2f855a; font-weight: bold; font-size: 16px; background: #f0fff4;">
                                약 170 원<br><span style="font-size: 12px; color: #64748b; font-weight: normal;">(176억 환산)</span>
                            </td>
                        </tr>
                        <!-- 5. 웰컴 패키지 -->
                        <tr style="border-bottom: 1px solid #f1f5f9;">
                            <td style="padding: 18px; font-weight: bold; color: #1e293b; font-size: 16px;">
                                웰컴 패키지<br>
                                <span style="font-size: 14px; color: #64748b; font-weight: normal;">10,000 캐시</span>
                            </td>
                            <td style="padding: 18px; line-height: 1.6; color: #4a5568;">
                                투명셋, 뷰티어워즈 헤어 성형쿠폰, 통달의 비약 6종 등
                            </td>
                            <td style="padding: 18px; text-align: center; color: #94a3b8; font-style: italic; font-size: 14px;">-</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- 📝 [PART 2] 가치 환산 및 계산 근거 (정보 수식 나열) -->
            <div style="background: #fff; padding: 35px; border-radius: 12px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); margin-bottom: 40px;">
                <h2 style="margin-top: 0; margin-bottom: 25px; font-size: 22px; color: #1e293b; border-left: 4px solid #3498db; padding-left: 12px; font-weight: 700;">2. 시장 시세 기준 및 상세 계산 근거</h2>
                
                <!-- 시세 기준 단락 -->
                <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 25px; font-size: 15px; line-height: 1.6;">
                    <b>📊 산정에 적용된 경매장 및 메소 마켓 시세 기준</b><br>
                    • 솔 에르다 조각 교환권(다조): 1개당 2억 1,000만 메소 (조각 30개 × 개당 700만 메소)<br>
                    • 검은 환생의 불꽃: 1개당 300만 메소<br>
                    • 블랙 큐브: 1개당 4,500만 메소<br>
                    • 화이트 에디셔널 큐브: 1개당 8,800만 메소<br>
                    <span style="color: #64748b; font-size: 13px;">※ 성장의 비약 등 경험치 재화와 선택 심볼, 코어 젬스톤, 명예의 훈장 등 가격 변동성이 크거나 계정 귀속 성격이 강한 아이템은 계산의 객관성을 위해 가치 산정에서 일절 제외(0원 처리)하였습니다.</span>
                </div>

                <!-- 상세 수식 나열 -->
                <div style="font-size: 16px; line-height: 1.9; color: #334155;">
                    <div style="margin-bottom: 20px; border-left: 3px solid #cbd5e1; padding-left: 15px;">
                        <span style="font-weight: bold; font-size: 17px; color: #1e293b; display: block; margin-bottom: 5px;">■ 프리미엄 패스 가치 산출 (가격: 19,800원)</span>
                        • 솔 에르다 조각 교환권: 20개 × 2.1억 메소 = 42억 0,000만 메소<br>
                        • 검은 환생의 불꽃: 400개 × 300만 메소 = 12억 0,000만 메소<br>
                        • 블랙 큐브: 20개 × 4,500만 메소 = 9억 0,000만 메소<br>
                        • 화이트 에디셔널 큐브: 20개 × 8,800만 메소 = 17억 6,000만 메소<br>
                        • 프리미엄 패스 순수 재화 총액 = <span style="color: #2f855a; font-weight: bold;">62억 6,000만 메소</span><br>
                        <b>➡️ 단독 구매 시 효율: <span style="color: #b7791f; font-weight: bold;">1억 메소당 약 316 원</span></b> <span style="font-size: 14px; color: #718096;">(19,800원 ÷ 62.6억)</span>
                    </div>

                    <div style="margin-bottom: 10px; border-left: 3px solid #cbd5e1; padding-left: 15px;">
                        <span style="font-weight: bold; font-size: 17px; color: #1e293b; display: block; margin-bottom: 5px;">■ 제네시스 패스 + 가치 산출 (가격: 30,000원)</span>
                        • 지급된 10,000 코인으로 가치가 가장 높은 화이트 에디셔널 큐브를 올인 구매한다고 가정<br>
                        • 화이트 에디셔널 큐브 최대 구매 수량: 10,000 코인 ÷ 50 코인 = 200개<br>
                        • 화이트 에디셔널 큐브 환산: 200개 × 8,800만 메소 = 176억 0,000만 메소<br>
                        • 제네시스 패스 + 순수 재화 총액 = <span style="color: #2f855a; font-weight: bold;">176억 0,000만 메소</span><br>
                        <b>➡️ 단독 구매 시 효율: <span style="color: #b7791f; font-weight: bold;">1억 메소당 약 170 원</span></b> <span style="font-size: 14px; color: #718096;">(30,000원 ÷ 176.0억)</span>
                    </div>
                </div>
            </div>

            <!-- 🎯 [PART 3] 종합 가성비 요약 (차분하고 확실한 데이터 제시) -->
            <div style="background: #f7fafc; padding: 35px; border-radius: 12px; border: 1px solid #e2e8f0;">
                <h2 style="margin-top: 0; margin-bottom: 15px; font-size: 22px; color: #1e293b; font-weight: 700;">3.저는 해방도 천천히 해도 되고 경험치도 필요 없는데요?</h2>
                <p style="font-size: 15px; color: #4a5568; line-height: 1.6; margin-bottom: 25px;">
                    경험치 보상과 제네시스 해방 기간 단축 등의 부가 유틸리티 혜택을 전혀 고려하지 않고,<br>
                    오직 위에서 계산한 <b>순수 스펙업 강화 재화</b>만을 얻기 위해 모든 패스(웰컴 패키지 포함 5종)를 구매했을 때의 종합 가성비입니다.
                </p>

                <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 25px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px; font-size: 16px; border-bottom: 1px dashed #e2e8f0; padding-bottom: 15px; margin-bottom: 15px;">
                        <div>
                            <span style="color: #64748b; display: block; margin-bottom: 3px;">총 투자 비용 (패스 5종 합산)</span>
                            <span style="font-size: 24px; font-weight: 700; color: #1e293b;">109,600 캐시</span>
                        </div>
                        <div style="text-align: right;">
                            <span style="color: #64748b; display: block; margin-bottom: 3px;">순수 재화 가치</span>
                            <span style="font-size: 24px; font-weight: 700; color: #2f855a;">총 238.6 억 메소</span>
                        </div>
                    </div>

                    <div style="text-align: center; padding-top: 10px;">
                        <span style="font-size: 15px; color: #4a5568; font-weight: 500;">모든 유틸리티 가치를 제외한 순수 재화 환산 효율</span>
                        <div style="font-size: 30px; font-weight: 700; color: #c53030; margin-top: 8px; margin-bottom: 8px;">
                            1억 메소당 비용 ＝ <span style="background: #fff5f5; padding: 2px 8px; border-radius: 4px;">약 459 원</span>
                        </div>
                        <p style="font-size: 14px; color: #64748b; margin: 0; line-height: 1.5;">
                            일반적인 메소 마켓 비율과 대조해 보았을 때 매우 파격적인 효율 지표를 나타내고 있습니다.<br>
                            따라서 성장이나 유틸 요소가 필요 없는 고스펙 유저 기준에서도 큐브 및 환불 재화 수급을 위해 구매 가치가 충분합니다.
                        </p>
                    </div>
                </div>
            </div>

        </div>
        `
    },
    event3: { 
        title: "챌린저스 육성 공략", 
        content: `
        <div style="max-width: 1200px; margin: 0 auto; padding: 0 40px; box-sizing: border-box; font-family: 'Malgun Gothic', sans-serif; color: #2c3e50;">
            
            <div style="margin-bottom: 35px; border-bottom: 2px solid #e2e8f0; padding-bottom: 20px;">
                <h1 style="font-size: 32px; margin: 0; font-weight: 700; color: #1e293b;"> 챌린저스 월드 초고속 육성 및 정착 가이드</h1>
                <p style="color: #64748b; font-size: 16px; margin-top: 8px;">이 공략을 그대로 따라오시면 손해 없이 빠르게 260 달성 및 이후 정착 틀을 완벽하게 잡을 수 있습니다.</p>
            </div>

            <div style="background: #fff5f5; padding: 30px; border-radius: 12px; border: 1px solid #fed7d7; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); margin-bottom: 35px;">
                <h2 style="margin-top: 0; margin-bottom: 20px; font-size: 22px; color: #c53030; border-left: 4px solid #e53e3e; padding-left: 12px; font-weight: 700;">0. ⚠️ 육성에 앞서 '절대' 하지 말아야 할 행동 (필독)</h2>
                
                <ul style="margin: 0; padding-left: 20px; font-size: 15px; line-height: 1.8; color: #2d3748;">
                    <li style="margin-bottom: 12px;">
                        <b style="color: #e53e3e;">엠블렘에 유잠(유니크 잠재) 사용 절대 금지:</b> 신입 용병 미션 중 <span style="background:#fff; padding:2px 6px; border-radius:4px; font-weight:bold;">카오스 벨룸 처치 미션</span>을 깨면 유니크 엠블렘을 그냥 지급합니다.
                    </li>
                    <li style="margin-bottom: 12px;">
                        <b style="color: #e53e3e;">첫 주차 울티마(출석) 코인 절대 아끼기 (이벤링 레잠용):</b> 주간 획득 코인은 4,000개인데 이벤링 레전 잠재 주문서가 딱 4,000코인입니다. 첫 주에 사실 분들은 코인을 다른 곳에 절대 쓰면 안 됩니다.
                    </li>
                    <li style="margin-bottom: 12px;">
                        <b style="color: #e53e3e;">이터널 플레임 링에 레잠 지르지 않기:</b> 기본적으로 유니크 등급으로 지급받기 때문에, 레잠 주문서는 다른 이벤트 링에 양보하는 것이 훨씬 이득입니다.
                    </li>
                    <li style="margin-bottom: 12px;">
                        <b style="color: #e53e3e;">모든 보스 미션은 '연습 모드' 활용:</b> 아이템 버닝 성장 및 챌린저스 보스 미션은 전부 <b>연습 모드로 클리어해도 인정</b>됩니다. 주간 처치 제한을 낭비하거나 리워드가 적은 보스를 포함시키지 않기 위해 연습 모드로 안전하게 깨세요.
                    </li>
                    <li style="margin-bottom: 12px;">
                        <b style="color: #4a5568;">200 ~ 260 구간 경험치 쿠폰(경쿠) 아끼기:</b> 이 구간은 기본 추가 경험치 버프가 무려 <span style="color:#e53e3e; font-weight:bold;">+5,000%</span>입니다. 경쿠를 써봤자 합적용이라 5,200%가 되므로 효율이 좋지 않습니다. 경쿠가 넘치는 유저가 아니라면 260 이후 사냥을 위해 킵하세요.
                    </li>
                    <li style="margin-bottom: 0;">
                        <b style="color: #4a5568;">브론즈 등급 시드링 3레벨 선택 팁:</b> 미래에 본인이 장착할 4레벨 시드링의 <b>반대 성향</b>으로 받으세요. (예: 추후 리레 4렙을 낄 예정이다 ➡️ 시드링 3렙은 컨티뉴어스로 수령)
                    </li>
                </ul>

                <div style="margin-top: 20px; background: #fff; padding: 15px; border-radius: 8px; border: 1px dashed #feb2b2; font-size: 14px; color: #4a5568; line-height: 1.5;">
                    💡 <b>소소한 팁:</b> '의문의 결계'는 <b>에메랄드 등급</b>을 찍기 전까지 인벤토리에 아껴두세요. 에메랄드 등급 달성 시 유니크 결계가 뜰 확률이 비약적으로 상승합니다. (단, 기다리기 너무 귀찮다면 그냥 까셔도 무방합니다.)
                </div>
            </div>

            <!-- 30~200 테라블링크 준비 구간 (키워드/설정 분리 버전) -->
                    <div style="background: #f8fafc; padding: 25px 30px; border-radius: 12px; border: 1px solid #e2e8f0; border-left: 6px solid #4a5568; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
                        <span style="background: #4a5568; color: #fff; padding: 3px 10px; border-radius: 4px; font-size: 13px; font-weight: bold; letter-spacing: 0.5px;">기본 세팅 (필독)</span>
                        <h3 style="margin: 12px 0 20px 0; font-size: 22px; color: #1e293b; font-weight: 800;">30 ~ 200 : 테라블링크 종료 후 본격 사냥 준비 체크리스트</h3>
                        
                        <!-- 가로 분할 리스트 스타일 -->
                        <div style="display: flex; flex-direction: column; gap: 10px; font-family: sans-serif;">
                            
                            <!-- 1. 5차 전직 -->
                            <div style="display: flex; align-items: center; background: #fff; border: 1px solid #edf2f7; border-radius: 8px; padding: 12px 20px; min-height: 45px;">
                                <div style="width: 200px; font-size: 17px; font-weight: bold; color: #1e293b; flex-shrink: 0; display: flex; align-items: center;">
                                    <span style="color: #64748b; margin-right: 10px; font-size: 14px;">01</span> 5차 전직하기
                                </div>
                                <div style="flex-grow: 1; font-size: 15px; color: #4a5568; border-left: 2px solid #e2e8f0; padding-left: 20px;">
                                    화면 왼쪽 <span style="color: #dd6b20; font-weight: bold;">전구</span>를 누르고 전직 퀘스트를 진행합니다.
                                </div>
                            </div>

                            <!-- 2. 이벤트 활성화 -->
                            <div style="display: flex; align-items: center; background: #fff; border: 1px solid #edf2f7; border-radius: 8px; padding: 12px 20px; min-height: 45px;">
                                <div style="width: 200px; font-size: 17px; font-weight: bold; color: #1e293b; flex-shrink: 0; display: flex; align-items: center;">
                                    <span style="color: #64748b; margin-right: 10px; font-size: 14px;">02</span> 이벤트 활성화
                                </div>
                                <div style="flex-grow: 1; font-size: 15px; color: #4a5568; border-left: 2px solid #e2e8f0; padding-left: 20px;">
                                    화면 왼쪽 <span style="color: #df9b00; font-weight: bold;">별</span>을 누르고 활성화할 수 있는 모든 이벤트를 켜고 보상을 수령합니다.
                                </div>
                            </div>

                            <!-- 3. 코어 강화 -->
                            <div style="display: flex; align-items: center; background: #fff; border: 1px solid #edf2f7; border-radius: 8px; padding: 12px 20px; min-height: 45px;">
                                <div style="width: 200px; font-size: 17px; font-weight: bold; color: #1e293b; flex-shrink: 0; display: flex; align-items: center;">
                                    <span style="color: #64748b; margin-right: 10px; font-size: 14px;">03</span> 코어 강화 (코강)
                                </div>
                                <div style="flex-grow: 1; font-size: 15px; color: #4a5568; border-left: 2px solid #e2e8f0; padding-left: 20px;">
                                    이벤트 탭에서 수령한 젬스톤으로 사냥에 필수인 <span style="font-weight: bold; color: #2b6cb0;">'쓸만한 홀리 심볼'</span> 등만 간략하게 강화해 줍니다.
                                </div>
                            </div>

                            <!-- 4. 아버, 보장 착용 -->
                            <div style="display: flex; align-items: center; background: #fff; border: 1px solid #edf2f7; border-radius: 8px; padding: 12px 20px; min-height: 45px;">
                                <div style="width: 200px; font-size: 17px; font-weight: bold; color: #1e293b; flex-shrink: 0; display: flex; align-items: center;">
                                    <span style="color: #64748b; margin-right: 10px; font-size: 14px;">04</span> 아버,보장 착용
                                </div>
                                <div style="flex-grow: 1; font-size: 15px; color: #4a5568; border-left: 2px solid #e2e8f0; padding-left: 20px;">
                                    아이템 버닝 장비, 보스 장신구, <span style="color: #e53e3e; font-weight: bold;">이터널 플레임 링</span>을 착용합니다. (⚠️ 이터널 링은 아직 강화 금지)
                                </div>
                            </div>

                            <!-- 5. 하이퍼스탯 -->
                            <div style="display: flex; align-items: center; background: #fff; border: 1px solid #edf2f7; border-radius: 8px; padding: 12px 20px; min-height: 45px;">
                                <div style="width: 200px; font-size: 17px; font-weight: bold; color: #1e293b; flex-shrink: 0; display: flex; align-items: center;">
                                    <span style="color: #64748b; margin-right: 10px; font-size: 14px;">05</span> 하이퍼스탯 설정
                                </div>
                                <div style="flex-grow: 1; font-size: 15px; color: #4a5568; border-left: 2px solid #e2e8f0; padding-left: 20px;">
                                    <b>캐릭터 정보창(단축키)의 왼쪽 아래</b> 버튼을 눌러 데미지 및 경험치 위주로 알맞게 스탯을 배분합니다.
                                </div>
                            </div>

                            <!-- 6. 정령의 펜던트 -->
                            <div style="display: flex; align-items: center; background: #fff; border: 1px solid #edf2f7; border-radius: 8px; padding: 12px 20px; min-height: 45px;">
                                <div style="width: 200px; font-size: 17px; font-weight: bold; color: #1e293b; flex-shrink: 0; display: flex; align-items: center;">
                                    <span style="color: #64748b; margin-right: 10px; font-size: 14px;">06</span> 정령의 펜던트 수령
                                </div>
                                <div style="flex-grow: 1; font-size: 15px; color: #4a5568; border-left: 2px solid #e2e8f0; padding-left: 20px;">
                                    추가 경험치 획득을 위해 <span style="color: #2f855a; font-weight: bold;">울티마 출석 보급일지 1일차</span> 보상에서 정펜을 수령하여 장착합니다.
                                </div>
                            </div>

                            <!-- 7. 쑥쑥 새싹 받기 -->
                            <div style="display: flex; align-items: center; background: #fff; border: 1px solid #edf2f7; border-radius: 8px; padding: 12px 20px; min-height: 45px;">
                                <div style="width: 200px; font-size: 17px; font-weight: bold; color: #1e293b; flex-shrink: 0; display: flex; align-items: center;">
                                    <span style="color: #64748b; margin-right: 10px; font-size: 14px;">07</span> 쑥쑥 새싹
                                </div>
                                <div style="flex-grow: 1; font-size: 15px; color: #4a5568; border-left: 2px solid #e2e8f0; padding-left: 20px;">
                                    <b>길라잡이 탭</b>을 열어 30레벨 달성 보상 항목에 있는 육성 지원용 '쑥쑥 새싹' 버프를 활성화합니다.
                                </div>
                            </div>

                            <!-- 8. 세팅 설정 -->
                            <div style="display: flex; align-items: center; background: #fff; border: 1px solid #edf2f7; border-radius: 8px; padding: 12px 20px; min-height: 45px;">
                                <div style="width: 200px; font-size: 17px; font-weight: bold; color: #1e293b; flex-shrink: 0; display: flex; align-items: center;">
                                    <span style="color: #64748b; margin-right: 10px; font-size: 14px;">08</span> 프리셋 및 스케줄러
                                </div>
                                <div style="flex-grow: 1; font-size: 15px; color: #4a5568; border-left: 2px solid #e2e8f0; padding-left: 20px;">
                                    키세팅 및 사냥 세팅을 마치고, <span style="font-weight: bold;">ESC 메뉴</span>를 통해 사냥 프리셋 등록 및 효율적인 동선을 위해 스케줄러를 설정해 둡니다.
                                </div>
                            </div>

                        </div>
                    </div>

                   <!-- 200~260 사냥터 및 부스터 사용 표 (은은한 색상 가독성 보완 버전) -->
                    <div style="border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; font-family: sans-serif; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                        <table style="width: 100%; border-collapse: collapse; font-size: 16px; text-align: left; background: #ffffff;">
                            
                            <!-- 테이블 헤더 (신뢰감을 주는 차분한 톤) -->
                            <thead style="background: #f1f5f9; color: #334155; border-bottom: 2px solid #cbd5e1;">
                                <tr>
                                    <th style="padding: 15px 20px; width: 130px; text-align: center;">레벨 구간</th>
                                    <th style="padding: 15px 20px;">필수 행동</th>
                                    <th style="padding: 15px 20px; width: 160px; text-align: center;">VIP 부스터 개수</th>
                                    <th style="padding: 15px 20px; width: 280px;">추천 사냥터</th>
                                </tr>
                            </thead>
                            
                            <!-- 테이블 본문 -->
                            <tbody style="color: #334155; line-height: 1.6;">
                                
                                <!-- 200 ~ 220 -->
                                <tr style="border-bottom: 1px solid #e2e8f0;">
                                    <td style="padding: 15px 20px; text-align: center; font-weight: bold; background: #f8fafc; color: #1e3a8a;">200 ~ 220</td>
                                    <td style="padding: 15px 20px;">소멸의 여로 일일 퀘스트 진행</td>
                                    <td style="padding: 15px 20px; text-align: center; font-weight: bold;">1개</td>
                                    <td style="padding: 15px 20px;">숨겨진 호숫가</td>
                                </tr>
                                
                                <!-- 220 ~ 225 -->
                                <tr style="border-bottom: 1px solid #e2e8f0; background: #fdfdfd;">
                                    <td style="padding: 15px 20px; text-align: center; font-weight: bold; background: #f8fafc; color: #1e3a8a;">220 ~ 225</td>
                                    <td style="padding: 15px 20px;">츄츄 아일랜드 일퀘 + 하이퍼버닝 보상 수령</td>
                                    <td style="padding: 15px 20px; text-align: center; font-weight: bold;">1개</td>
                                    <td style="padding: 15px 20px; color: #64748b;">아무 지형이나 편한 곳</td>
                                </tr>
                                
                                <!-- 225 ~ 230 -->
                                <tr style="border-bottom: 1px solid #e2e8f0;">
                                    <td style="padding: 15px 20px; text-align: center; font-weight: bold; background: #f8fafc; color: #1e3a8a;">225 ~ 230</td>
                                    <td style="padding: 15px 20px;">레헬른 일일 퀘스트 + 하이버버닝 보상 수령</td>
                                    <td style="padding: 15px 20px; text-align: center; font-weight: bold;">1개</td>
                                    <td style="padding: 15px 20px; color: #64748b;">아무 지형이나 편한 곳</td>
                                </tr>
                                
                                <!-- 230 ~ 240 -->
                                <tr style="border-bottom: 1px solid #e2e8f0; background: #fdfdfd;">
                                    <td style="padding: 15px 20px; text-align: center; font-weight: bold; background: #f8fafc; color: #1e3a8a;">230 ~ 240</td>
                                    <td style="padding: 15px 20px;">모라스/아르카나 일퀘 + 하버 보상 수령</td>
                                    <td style="padding: 15px 20px; text-align: center; font-weight: bold;">1개 <span style="font-size: 14px; font-weight: normal; color: #64748b;">(+ 약간의 사냥)</span></td>
                                    <td style="padding: 15px 20px;">그날의 트뤼에페 2, 그림자가 춤추는 곳 2, 3</td>
                                </tr>
                                
                                <!-- 240 ~ 255 -->
                                <tr style="border-bottom: 1px solid #e2e8f0;">
                                    <td style="padding: 15px 20px; text-align: center; font-weight: bold; background: #f8fafc; color: #1e3a8a;">240 ~ 255</td>
                                    <td style="padding: 15px 20px;">셀라스/에스페라 일퀘 + 하버 보상 수령</td>
                                    <td style="padding: 15px 20px; text-align: center; font-weight: bold;">5개</td>
                                    <td style="padding: 15px 20px;">별이 삼켜진 심해 3, 6</td>
                                </tr>
                                
                                <!-- 255 ~ 260 -->
                                <tr>
                                    <td style="padding: 15px 20px; text-align: center; font-weight: bold; background: #f8fafc; color: #1e3a8a;">255 ~ 260</td>
                                    <td style="padding: 15px 20px;">문브릿지/미궁 일퀘 + <b>신입 용병 보상에서 vip부스터 수령</b></td>
                                    <td style="padding: 15px 20px; text-align: center; font-weight: bold;">2 ~ 3개</td>
                                    <td style="padding: 15px 20px;">미궁 중심부 또는 리멘</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

            <!-- 🎯 [PART 2] 260 달성 이후, 그래서 이제 뭐함? -->
            <div style="background: #ffffff; padding: 25px 30px; border-radius: 12px; border: 1px solid #cbd5e1; box-shadow: 0 2px 4px rgba(0,0,0,0.02); margin-top: 35px;">
                <h2 style="margin-top: 0; margin-bottom: 25px; font-size: 22px; color: #1e293b; font-weight: 800; border-bottom: 2px solid #cbd5e1; padding-bottom: 15px;">2. 260 달성 이후, 그래서 이제 뭐함? </h2>
                
                <!-- 가로 분할 리스트 구조 -->
                <div style="display: flex; flex-direction: column; gap: 10px; font-family: sans-serif;">
                    
                    <!-- 1. 6차 전직 및 야누스 -->
                    <div style="display: flex; align-items: center; background: #ffffff; border: 1px solid #edf2f7; border-radius: 8px; padding: 15px 20px; min-height: 50px;">
                        <div style="width: 250px; font-size: 17px; font-weight: bold; color: #1e293b; flex-shrink: 0;">
                            6차 전직 및 야누스 수령
                        </div>
                        <div style="flex-grow: 1; font-size: 16px; color: #334155; border-left: 2px solid #e2e8f0; padding-left: 20px;">
                            6차 전직을 완료하고, 이벤트 탭에서 솔 야누스 스킬 지원 클릭,<b>야누스 30렙</b> 보상을 수령합니다.
                        </div>
                    </div>

                    <!-- 2. 울티마 1주차 코인샵 -->
                    <div style="display: flex; align-items: center; background: #ffffff; border: 1px solid #edf2f7; border-radius: 8px; padding: 15px 20px; min-height: 50px;">
                        <div style="width: 250px; font-size: 17px; font-weight: bold; color: #1e293b; flex-shrink: 0;">
                            울티마 코인 1주차 사용법
                        </div>
                        <div style="flex-grow: 1; font-size: 16px; color: #334155; border-left: 2px solid #e2e8f0; padding-left: 20px;">
                            • <b>엠블렘이 없어요:</b> 신입 용병 지원 미션 ➡️ 카벨 처치 미션에서 유니크 엠블렘 획득 ➡️ 에디 에픽 잠재 구매 ➡️ 유니크 엠블렘에 사용<br>
                            • <b>엠블렘 구매했어요:</b> 이벤링 레전 잠재 구매 ➡️ 유니크 등급이 아닌 이벤트 링에 사용
                        </div>
                    </div>

                    <!-- 3. 이벤트 링 스펙업 -->
                    <div style="display: flex; align-items: center; background: #ffffff; border: 1px solid #edf2f7; border-radius: 8px; padding: 15px 20px; min-height: 50px;">
                        <div style="width: 250px; font-size: 17px; font-weight: bold; color: #1e293b; flex-shrink: 0;">
                            이벤트 링 큐브/에디 설정
                        </div>
                        <div style="flex-grow: 1; font-size: 16px; color: #334155; border-left: 2px solid #e2e8f0; padding-left: 20px;">
                            용병 미션 - 250렙 보상에 <b>이벤링 레잠 + 골드큐브 50개</b>를 사용하여 <b>드랍링</b> 또는 <b>스탯 18% 이상</b> 세팅<br>
                            (챌섭 코인으로 에디잠재문서 및 브론즈 에디큐브를 구매하여 이벤링에 <b>공/마 +10</b> 적용)
                        </div>
                    </div>

                    <!-- 4. 어빌리티 설정 -->
                    <div style="display: flex; align-items: center; background: #ffffff; border: 1px solid #edf2f7; border-radius: 8px; padding: 15px 20px; min-height: 50px;">
                        <div style="width: 250px; font-size: 17px; font-weight: bold; color: #1e293b; flex-shrink: 0;">
                            어빌리티 레전드리 등업
                        </div>
                        <div style="flex-grow: 1; font-size: 16px; color: #334155; border-left: 2px solid #e2e8f0; padding-left: 20px;">
                            레전 등업 및 옵션을 저격합니다. <b>하이퍼버닝 MAX 보상 미라클 서큘레이터</b> 를 활용
                        </div>
                    </div>

                    <!-- 5. 울티마 훈련 일지 및 보스 준비 -->
                    <div style="display: flex; align-items: center; background: #ffffff; border: 1px solid #edf2f7; border-radius: 8px; padding: 15px 20px; min-height: 50px;">
                        <div style="width: 250px; font-size: 17px; font-weight: bold; color: #1e293b; flex-shrink: 0;">
                            보스 갈 준비<br>
                             •보약 버프<br>
                             •세이람 퀘<br>
                             •보장 검환불
                        </div>
                        <div style="flex-grow: 1; font-size: 16px; color: #334155; border-left: 2px solid #e2e8f0; padding-left: 20px;">
                            • 보약 버프는 <b>보공 및 몬파</b> 위주로 먼저 투자<br>
                            • 왼쪽 전구의 <b>'콜렉터의 의뢰'</b> 선행 퀘스트를 클리어하여 세이람 상점 활성화<br>
                            • 보스 장신구들은 검환불을 사용해 기본 베이스 스펙인 <b>60 ~ 70급</b> 수준으로 세팅
                        </div>
                    </div>

                    <!-- 6. 솔 에르다 조각 강화 -->
                    <div style="display: flex; align-items: center; background: #ffffff; border: 1px solid #edf2f7; border-radius: 8px; padding: 15px 20px; min-height: 50px;">
                        <div style="width: 250px; font-size: 17px; font-weight: bold; color: #1e293b; flex-shrink: 0;">
                            솔 에르다 조각 강화
                        </div>
                        <div style="flex-grow: 1; font-size: 16px; color: #334155; border-left: 2px solid #e2e8f0; padding-left: 20px;">
                            <b>썸머 카운트 보상, 신입 용병 미션, 챌린저스 패스</b>조각 수령, 본인의 <b>환산 주스탯 효율표</b>를 기준 삼아 강화합니다.
                        </div>
                    </div>

                    <!-- 7. 시드링 수급 -->
                    <div style="display: flex; align-items: center; background: #ffffff; border: 1px solid #edf2f7; border-radius: 8px; padding: 15px 20px; min-height: 50px;">
                        <div style="width: 250px; font-size: 17px; font-weight: bold; color: #1e293b; flex-shrink: 0;">
                            시드링 3레벨 획득
                        </div>
                        <div style="flex-grow: 1; font-size: 16px; color: #334155; border-left: 2px solid #e2e8f0; padding-left: 20px;">
                            <b>노말 스우, 노말 데미안 및 이하 주간 보스</b>들을 <span style="color: #e53e3e; font-weight: bold;">연습 모드</span> 로 클리어하여 챌린저스 브론즈 등급을 달성하고 수령합니다.
                        </div>
                    </div>

                    <!-- 8. 유잠 / 에디에픽 획득 -->
                    <div style="display: flex; align-items: center; background: #ffffff; border: 1px solid #edf2f7; border-radius: 8px; padding: 15px 20px; min-height: 50px;">
                        <div style="width: 250px; font-size: 17px; font-weight: bold; color: #1e293b; flex-shrink: 0;">
                            카르마 유잠 & 에디에픽 수급
                        </div>
                        <div style="flex-grow: 1; font-size: 16px; color: #334155; border-left: 2px solid #e2e8f0; padding-left: 20px;">
                            <b>이지 루시드 격파</b> 후 <b>신입 용병</b> 미션 탭에서 수령합니다. (교불 보조무기에 우선 사용하고, 보조가 이미 있다면 페어리 하트에 투자)
                        </div>
                    </div>

                </div>

                <!-- 최종 요약 바 -->
                <div style="margin-top: 25px; background: #f1f5f9; padding: 18px; border-radius: 8px; border: 1px solid #cbd5e1; font-size: 16px; font-weight: bold; color: #334155; text-align: center;">
                    
                </div>
            </div>
        `
    }
};

