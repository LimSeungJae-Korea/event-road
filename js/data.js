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
    event3: { title: "이벤트 3", content: `<p>이벤트 설명 작성</p>` }
};

