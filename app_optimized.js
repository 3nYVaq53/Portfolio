(function() {
    'use strict';

    // ==================== 0. 資料常量與初始資料 ====================
    const FOOD_DB = [ 
        {name: "白米飯", kcal: 130, protein: 2.4, fat: 0.3, carbs: 28, unit:'g', unitGram:1},
        {name: "糙米飯", kcal: 111, protein: 2.6, fat: 0.9, carbs: 23, unit:'g', unitGram:1},
        {name: "全麥麵包", kcal: 247, protein: 13, fat: 4.2, carbs: 41, unit:'g', unitGram:1},
        {name: "吐司", kcal: 265, protein: 9, fat: 3.2, carbs: 49, unit:'片', unitGram:30},
        {name: "雞胸肉", kcal: 165, protein: 31, fat: 3.6, carbs: 0, unit:'g', unitGram:1},
        {name: "雞腿肉", kcal: 209, protein: 26, fat: 10, carbs: 0, unit:'g', unitGram:1},
        {name: "蛋（全蛋）", kcal: 75, protein: 7, fat: 6, carbs: 0.8, unit:'顆', unitGram:50},
        {name: "蛋白", kcal: 52, protein: 11, fat: 0.2, carbs: 0.7, unit:'g', unitGram:1},
        {name: "鮭魚", kcal: 208, protein: 20, fat: 13, carbs: 0, unit:'g', unitGram:1},
        {name: "鯛魚", kcal: 96, protein: 20, fat: 1, carbs: 0, unit:'g', unitGram:1},
        {name: "牛肉（瘦）", kcal: 250, protein: 26, fat: 17, carbs: 0, unit:'g', unitGram:1},
        {name: "豬里肌", kcal: 143, protein: 21, fat: 6, carbs: 0, unit:'g', unitGram:1},
        {name: "豆腐", kcal: 76, protein: 8, fat: 4.8, carbs: 1.9, unit:'g', unitGram:1},
        {name: "牛奶", kcal: 60, protein: 3.2, fat: 3.3, carbs: 4.8, unit:'g', unitGram:1},
        {name: "優格（無糖）", kcal: 59, protein: 10, fat: 0.4, carbs: 3.6, unit:'g', unitGram:1},
        {name: "香蕉", kcal: 89, protein: 1.1, fat: 0.3, carbs: 23, unit:'g', unitGram:1},
        {name: "蘋果", kcal: 52, protein: 0.3, fat: 0.2, carbs: 14, unit:'g', unitGram:1},
        {name: "橘子", kcal: 47, protein: 0.9, fat: 0.1, carbs: 12, unit:'g', unitGram:1},
        {name: "地瓜", kcal: 86, protein: 1.6, fat: 0.1, carbs: 20, unit:'g', unitGram:1},
        {name: "燕麥片", kcal: 389, protein: 17, fat: 7, carbs: 66, unit:'g', unitGram:1},
        {name: "花生", kcal: 567, protein: 25, fat: 49, carbs: 16, unit:'g', unitGram:1},
        {name: "杏仁", kcal: 579, protein: 21, fat: 50, carbs: 22, unit:'g', unitGram:1},
        {name: "花椰菜", kcal: 25, protein: 2, fat: 0.3, carbs: 5, unit:'g', unitGram:1},
        {name: "菠菜", kcal: 23, protein: 2.9, fat: 0.4, carbs: 3.6, unit:'g', unitGram:1},
        {name: "番茄", kcal: 18, protein: 0.9, fat: 0.2, carbs: 3.9, unit:'g', unitGram:1},
        {name: "胡蘿蔔", kcal: 41, protein: 0.9, fat: 0.2, carbs: 10, unit:'g', unitGram:1},
        {name: "馬鈴薯", kcal: 77, protein: 2, fat: 0.1, carbs: 17, unit:'g', unitGram:1},
        {name: "紅豆", kcal: 128, protein: 7.5, fat: 0.5, carbs: 24, unit:'g', unitGram:1},
        {name: "黑豆", kcal: 132, protein: 8.9, fat: 0.5, carbs: 23, unit:'g', unitGram:1},
        {name: "雞蛋麵", kcal: 138, protein: 5, fat: 2, carbs: 25, unit:'g', unitGram:1},
        {name: "能量小姐 — 韓式菇菇雞", kcal: 526, protein: 30, fat: 18, carbs: 60, sugar_g:0, sodium_mg:0, unit:'份', unitGram:450},
        {name: "能量小姐 — 香滷雞腿", kcal: 602, protein: 32, fat: 26, carbs: 60, sugar_g:0, sodium_mg:0, unit:'份', unitGram:480},
        {name: "能量小姐 — 鹽烤鯖魚", kcal: 542, protein: 30, fat: 22, carbs: 55, sugar_g:0, sodium_mg:0, unit:'份', unitGram:450},
        {name: "能量小姐 — 厚切牛肉排", kcal: 511, protein: 30, fat: 19, carbs: 55, sugar_g:0, sodium_mg:0, unit:'份', unitGram:480},
        {name: "能量小姐 — 水煮嫩雞胸", kcal: 546, protein: 35, fat: 18, carbs: 60, sugar_g:0, sodium_mg:0, unit:'份', unitGram:440},
        {name: "香烤藍尾鱈魚五行餐盒", kcal: 442, protein: 24, fat: 7, carbs: 71.1, saturatedFat:1.6, transFat:0, sodium_mg:695, sugar_g:2.5, unit:'份', unitGram:316},
        {name: "義美 無糖豆奶（元氣豆奶） 250ml", kcal: 84.4, protein: 8.1, fat: 4.1, carbs: 3.9, saturatedFat:0.6, transFat:0, sodium_mg:15, sugar_g:1.2, unit:'份', unitGram:250},
        {name: "奇多 玉米棒 - 濃厚海苔 29.5g (118g 整包共4份)", kcal: 167, protein: 1.4, fat: 10.4, carbs: 16.9, saturatedFat:5.4, transFat:0, sodium_mg:134, sugar_g:1.9, unit:'份', unitGram:29.5},
        {name: "好味餅", kcal: 126, protein: 3.3, fat: 5.8, carbs: 15.1, saturatedFat:1.1, transFat:0, sodium_mg:119, sugar_g:14.2, unit:'份', unitGram:25.4},
        {name: "白い恋人 (1 片)", kcal: 57, protein: 1.0, fat: 3.4, carbs: 5.7, sugar_g:2.3, sodium_mg:12, unit:'片', unitGram:21},
        {name: "炸雞腿飯(加飯)", kcal: 1000, protein: 32, fat: 38, carbs: 100, sugar_g:2.3, sodium_mg:12, unit:'份', unitGram:350},
        {name: "豬肉丼", kcal: 650, protein: 24, fat: 20, carbs: 90, sugar_g:7, sodium_mg:12, unit:'份', unitGram:350},
        {name: "梁社漢排骨飯", kcal: 862, protein: 30.6, fat: 46.1, carbs: 76.3, sugar_g:7, sodium_mg:12, unit:'份', unitGram:500},
        {name: "梁社漢玫瑰油雞飯", kcal: 695, protein: 33.5, fat: 31.5, carbs: 69.4, sugar_g:7, sodium_mg:12, unit:'份', unitGram:500},
    ];

    // ** 運動消耗量 (MET 值) **
    const EXERCISE_MET = {
        running:9.8, running_slow:8.0, running_fast:11.5, jogging:7.0,
        cycling:7.5, cycling_leisure:4.0, cycling_moderate:7.5, cycling_vigorous:10.0,
        lifting:6, walking:3.5, walking_slow:2.5, walking_brisk:4.3, hiit:10,
        jump_rope:12.3, jumping_jacks:8.0, burpees:10.5, squats:5.5, pushups:8.0, mountain_climbers:10.0, lunges:6.0, plank:3.8,
        yoga:3.0, pilates:3.0, swimming:8.0, rowing:7.0, elliptical:6.5, stairs:8.8, stretching:2.5, core:5.0, zumba:7.0,
        badminton:5.5, basketball:8.0, soccer:7.0, tennis:7.3, hiking:6.5, skateboarding:6.0, skiing:7.0, snowboarding:6.5,
        gardening:4.0, housework:3.0
    };
    
    // ** 運動名稱對照表 **
    const EXERCISE_NAME = {
        running:'跑步', running_slow:'慢跑', running_fast:'飛跑', jogging:'慢跑(慢速)',
        cycling:'騎車', cycling_leisure:'休閒騎車', cycling_moderate:'中等強度騎車', cycling_vigorous:'高強度騎車',
        lifting:'重訓', walking:'快走', walking_slow:'慢走', walking_brisk:'快走(有氧)', hiit:'HIIT',
        jump_rope:'跳繩', jumping_jacks:'開合跳', burpees:'波比跳', squats:'深蹲', pushups:'伏地挺身', mountain_climbers:'登山者', lunges:'弓箭步', plank:'平板支撐',
        yoga:'瑜伽', pilates:'普拉提', swimming:'游泳', rowing:'划船', stairs:'爬樓梯', stretching:'伸展', core:'核心訓練', zumba:'尊巴', elliptical:'橢圓機',
        badminton:'羽球', basketball:'籃球', soccer:'足球', tennis:'網球', hiking:'健行', skateboarding:'滑板', skiing:'滑雪', snowboarding:'單板滑雪',
        gardening:'園藝', housework:'家事'
    };
    
    // ** 以次數為主的活動，每分鐘約多少次 (用於換算成時間以進行 MET 計算) **
    const REPS_PER_MINUTE = { jump_rope: 120, burpees: 30, pushups: 40, jumping_jacks: 60, mountain_climbers: 80, squats: 30, lunges: 30 };
    
    // ** 運動課表 (7天循環) - 0:週日, 1:週一, ..., 6:週六 **
    // 格式: ['運動KEY:數值', ...]
    const PLANS = {
        light: ['rest:0','walking:30','cycling:30','jumping_jacks:15','rest:0','walking:30','cycling:20'],
        strength: ['rest:0','squats:20','pushups:15','lifting:30','rest:0','lunges:20','core:20'],
        hiit: ['rest:0','hiit:20','burpees:12','mountain_climbers:60','rest:0','hiit:20','running:30'],
        jumpchallenge: ['rest:0','jump_rope:200','rest:0','jump_rope:300','rest:0','jump_rope:400','jump_rope:500'],
        home_bodyweight: ['rest:0','jumping_jacks:30','pushups:15','squats:20','plank:60','lunges:15','mountain_climbers:40']
    };


    const STORAGE = {
        USERS: 'wellness_users_v1',
        ACTIVE: 'wellness_active_user',
        ENTRIES: 'wellness_entries_',
        FOODDB: 'wellness_fooddb_v1'
    };
    
    const INITIAL_PROFILE = {
        "name": "使用者A",
        "sex": "male", "age": 23, "height": 175, "weight": 63, "activity": 1.55,
        "dailyWaterGoal": 2000, "targetProtein": 125, "targetCarbs": 313, "targetFat": 83,
        "userMeasuredBodyFat": 15.0,
        "bmi": 21.2, "bodyFat": 14.5, "lbm": 54, "muscle": 37.8,
        "waist": 78, "neck": 38, "hip": null, "bodyFatMethod": "deurenberg",
        "planKey": 'strength',
        "bodyFatEstimates": { "navy": 17.4, "deurenberg": 14.5, "cunbae": 26.8 }
    };
    
    // 新增: 本地音樂推薦資料庫 (心情分數對應的檔案路徑)
    // 假設音樂檔案放在 'music/' 子資料夾中
    const LOCAL_MUSIC_DB = {
        5: { title: "積極動感 - 健身房必備", file: "music/upbeat_workout.mp3" }, // 5: 很好/Good
        4: { title: "高效率專注 - 輕鬆節奏", file: "music/focus_light.mp3" },   // 4: 不錯/Fairly Good
        3: { title: "平靜中性 - 背景音樂", file: "music/neutral_calm.mp3" },    // 3: 還好/Neutral
        2: { title: "舒緩放鬆 - 療癒音景", file: "music/chill_relax.mp3" },     // 2: 不太好/Low
        1: { title: "深度冥想 - 大自然聲音", file: "music/deep_meditation.mp3" }, // 1: 很差/Bad
    };


    // ==================== 1. 資料庫模組 (DataStore Module) ====================
    const DataStore = {
        entries: {},
        profiles: {},
        profile: null,
        activeUserId: null,
        
        dateStr(date) { return date.toISOString().split('T')[0]; },
        loadUsers() {
            const data = localStorage.getItem(STORAGE.USERS);
            this.profiles = data ? JSON.parse(data) : {};
            this.activeUserId = localStorage.getItem(STORAGE.ACTIVE) || 'user_default';
            if (!this.profiles[this.activeUserId]) {
                 this.profiles[this.activeUserId] = { name: INITIAL_PROFILE.name || '新使用者', profile: {...INITIAL_PROFILE}, entries: {} };
                 this.saveUsers();
            }
        },
        saveUsers() { localStorage.setItem(STORAGE.USERS, JSON.stringify(this.profiles)); localStorage.setItem(STORAGE.ACTIVE, this.activeUserId); },
        loadProfile() { this.profile = this.profiles[this.activeUserId]?.profile || null; },
        saveProfile() { if(this.profiles[this.activeUserId]) this.profiles[this.activeUserId].profile = this.profile; this.saveUsers(); },
        loadEntries() { this.entries = this.profiles[this.activeUserId]?.entries || {}; },
        saveEntries() { if(this.profiles[this.activeUserId]) this.profiles[this.activeUserId].entries = this.entries; this.saveUsers(); },
        ensureTodayEntry(date = new Date()) { 
            const dateKey = this.dateStr(date);
            if (!this.entries[dateKey]) { this.entries[dateKey] = { foods: [], exercises: [], finance: [], mood: null, water: 0, sleep: null, sick: false, weight: this.profile?.weight || null }; } // 初始化時帶入 Profile 體重
            return this.entries[dateKey];
        },
        getEntry(date = new Date()) { 
             const dateKey = this.dateStr(date);
             return this.entries[dateKey] || { foods: [], exercises: [], finance: [], mood: null, water: 0, sleep: null, sick: false, weight: null };
        },
        clearAllData() { 
            if (confirm('確定要清除所有本地資料嗎？此操作不可逆。')) {
                localStorage.clear();
                alert('所有資料已清除。請重新載入頁面。');
                window.location.reload();
            }
        },
        addUser(name) {
            const newId = 'user_' + new Date().getTime();
            this.profiles[newId] = { name: name, profile: {...INITIAL_PROFILE, name: name}, entries: {} };
            this.activeUserId = newId;
            this.saveUsers();
            this.loadProfile();
            this.loadEntries();
        },
        setActiveUser(userId) {
            this.activeUserId = userId;
            this.saveUsers();
            this.loadProfile();
            this.loadEntries();
        }
    };
    
    // 載入初始資料
    DataStore.loadUsers();
    DataStore.loadProfile();
    DataStore.loadEntries();

    // ==================== 2. 計算邏輯 (Calculations Module) ====================
    const Calculations = {
        calculateBMR(sex, age, heightCm, weightKg) {
            if (sex === 'male') return Math.round(10 * weightKg + 6.25 * heightCm - 5 * age + 5);
            return Math.round(10 * weightKg + 6.25 * heightCm - 5 * age - 161);
        },
        calculateTDEE(bmr, activityFactor) { return Math.round(bmr * activityFactor); },
        
        // ** (更新) 使用 MET 值計算熱量消耗 **
        estimateExerciseKcal(type, value, weightKg, isReps = false) {
             const met = EXERCISE_MET[type];
             if (!met) return 0;
             
             let minutes = value;
             
             if (isReps) {
                 const rpm = REPS_PER_MINUTE[type];
                 if (!rpm) { 
                     // 如果是次數輸入但沒有 RPM 定義，使用一個通用回饋 (例如假設 30 reps/min)
                     minutes = value / 30;
                 } else {
                     minutes = value / rpm; // 次數 / 每分鐘次數 = 分鐘數
                 }
             }

             // MET Formula: Kcal = (MET * Weight_kg * Time_minutes / 60)
             const kcal = (met * weightKg * minutes) / 60;
             
             return Math.round(kcal);
        },
        
        estimateBodyFatNavy(sex, heightCm, waistCm, neckCm, hipCm) { 
            const h = heightCm / 2.54; const w = waistCm / 2.54; const n = neckCm / 2.54; const hip = hipCm ? hipCm / 2.54 : 0;
            if (sex === 'male') return 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450;
            if (sex === 'female') return 495 / (1.29579 - 0.35004 * Math.log10(w + hip - n) + 0.22100 * Math.log10(h)) - 450;
            return null;
        },
        estimateBodyFatDeurenberg(sex, age, bmi) {
            return (1.20 * bmi) + (0.23 * age) - (10.8 * (sex === 'male' ? 1 : 0)) - 5.4;
        },
        estimateBodyFatCunBae(sex, age, bmi) {
            // CUN-BAE formula: BF = (1.35 * BMI) + (0.17 * Age) - (10.8 * S) - 10.8
            const S = (sex === 'male' ? 1 : 0);
            return (1.35 * bmi) + (0.17 * age) - (10.8 * S) - 10.8; 
        },
        estimateBodyComposition(sex, age, heightCm, weightKg, waistCm, neckCm, hipCm, method) { 
            const bmi = +(weightKg / (heightCm / 100)**2).toFixed(1);
            let bodyFat = null;
            let estimates = {};
            
            estimates.navy = waistCm && neckCm ? +this.estimateBodyFatNavy(sex, heightCm, waistCm, neckCm, hipCm).toFixed(1) : null;
            estimates.deurenberg = +this.estimateBodyFatDeurenberg(sex, age, bmi).toFixed(1);
            estimates.cunbae = +this.estimateBodyFatCunBae(sex, age, bmi).toFixed(1);

            bodyFat = estimates[method] || estimates.deurenberg;

            const lbm = bodyFat ? +(weightKg * (1 - bodyFat / 100)).toFixed(1) : null;
            const muscle = lbm ? +(lbm * 0.7).toFixed(1) : null; // Rough estimate (LBM is 70% muscle + 30% bone/organ)

            return { bmi, bodyFat, lbm, muscle, estimates };
        },
        calculateDailySummary(entry, profile) {
            const profileExists = profile && profile.age && profile.height && profile.weight;
            const bmr = profileExists ? this.calculateBMR(profile.sex, profile.age, profile.height, profile.weight) : 0;
            const tdee = profileExists ? this.calculateTDEE(bmr, profile.activity) : 0;

            const kcalIn = entry.foods.reduce((sum, f) => sum + f.kcal, 0);
            const protein = entry.foods.reduce((sum, f) => sum + f.protein, 0);
            const carbs = entry.foods.reduce((sum, f) => sum + f.carbs, 0);
            const fat = entry.foods.reduce((sum, f) => sum + f.fat, 0);
            const kcalOut = entry.exercises.reduce((sum, e) => sum + e.kcal, 0);
            const kcalDiff = kcalIn - tdee + kcalOut;

            return { kcalGoal: tdee, kcalIn, kcalOut, kcalDiff, protein, carbs, fat, targetProtein: profile?.targetProtein || 0, targetCarbs: profile?.targetCarbs || 0, targetFat: profile?.targetFat || 0 };
        },
        calculateFinanceSummary(entry) {
            const totalIn = entry.finance.filter(f => f.type === 'in').reduce((sum, f) => sum + f.amount, 0);
            const totalOut = entry.finance.filter(f => f.type === 'out').reduce((sum, f) => sum + f.amount, 0);
            const dailyBalance = totalIn - totalOut;
            return { totalIn, totalOut, dailyBalance };
        },
        // ** (更新) 根據新 PLANS 結構解析今日建議 **
        getPlanForDate(planKey, date) {
            const day = date.getDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
            const planArr = PLANS[planKey];
            if (!planArr) return '未知的課表';
            
            const planStr = planArr[day] || 'rest:0';
            const [typeKey, value] = planStr.split(':');
            
            if (typeKey === 'rest') return '今日休息日';
            
            const name = EXERCISE_NAME[typeKey] || typeKey;
            const isReps = REPS_PER_MINUTE[typeKey];
            const unit = isReps ? '次' : '分鐘';
            
            return `${name}: ${value} ${unit}`;
        },
        calculateMacroScore(protein, carbs, fat, targetP, targetC, targetF) {
            const pPct = targetP > 0 ? protein / targetP : 0;
            const cPct = targetC > 0 ? carbs / targetC : 0;
            const fPct = targetF > 0 ? fat / targetF : 0;
            
            const score = (pPct + cPct + fPct) / 3;
            return { pPct, cPct, fPct, score };
        },
        calculateStatsData(allEntries, profile) {
            const days = 14;
            const endDate = new Date();
            let date = new Date(endDate);
            let labels = [];
            let weightData = [];
            let kcalDiffData = [];
            let totalKcalDiff = 0;
            let totalWeight = 0;
            let validDays = 0;

            for (let i = 0; i < days; i++) {
                const dateKey = DataStore.dateStr(date);
                const entry = allEntries[dateKey] || { foods: [], exercises: [], finance: [] };
                const summary = this.calculateDailySummary(entry, profile);

                labels.unshift(dateKey.substring(5)); // MM-DD
                
                // 使用今天的體重或最近一次記錄的體重
                let weightToday = entry.weight;
                if (!weightToday) {
                    // 嘗試向前查找最近的體重記錄 (這裡簡化，直接使用 profile 的體重作為基準)
                    weightToday = profile?.weight || null;
                }
                
                weightData.unshift(weightToday);
                kcalDiffData.unshift(entry.foods.length > 0 ? summary.kcalDiff : null);

                if (entry.foods.length > 0) totalKcalDiff += summary.kcalDiff;
                if (weightToday) { totalWeight += weightToday; validDays++; }

                date.setDate(date.getDate() - 1);
            }
            return { labels, weightData, kcalDiffData, averageKcalDiff: Math.round(totalKcalDiff / days), averageWeight: totalWeight / validDays };
        }
    };

    // ==================== 3. 應用程式控制 (App Module) ====================
    const App = {
        monthlyChart: null,
        
        async getMusicRecommendation(mood) {
             const recEl = document.getElementById('musicRecommendation');
             const moodInt = parseInt(mood);
             
             if (!mood || isNaN(moodInt)) {
                 recEl.textContent = '請先記錄您的心情 (1-5分)，以取得個人化音樂推薦。';
                 return;
             }

             const recommendation = LOCAL_MUSIC_DB[moodInt];

             if (recommendation) {
                 const fileLink = recommendation.file;
                 recEl.innerHTML = `
                     <p>我們根據您 ${moodInt} 分的心情，為您挑選了：</p>
                     <p style="font-weight: bold; margin-top: 8px;">${recommendation.title}</p>
                     <p class="text-muted-small">請將您的 MP3 檔案放在 **<code style="color: var(--accent-orange);">${fileLink}</code>**，並確保檔名正確。</p>
                     
                     <audio controls style="width: 100%; margin-top: 15px; background: var(--bg-secondary); border-radius: 8px; padding: 5px;">
                         <source src="${fileLink}" type="audio/mpeg">
                         您的瀏覽器不支援音頻播放。
                     </audio>
                 `;
             } else {
                 recEl.textContent = `抱歉，找不到適合 ${moodInt} 分心情的推薦音樂。`;
             }
        },

        renderUserSelect() {
            const userSelect = document.getElementById('userSelect');
            userSelect.innerHTML = '';
            for (const id in DataStore.profiles) {
                const user = DataStore.profiles[id];
                const option = document.createElement('option');
                option.value = id;
                option.textContent = user.name;
                if (id === DataStore.activeUserId) {
                    option.selected = true;
                }
                userSelect.appendChild(option);
            }
            document.getElementById('userInfo').textContent = DataStore.profile?.name || '未設定個人檔案';
        },

        renderSelects() {
            const foodSelect = document.getElementById('foodSelect');
            const exerciseType = document.getElementById('exerciseType');
            
            foodSelect.innerHTML = '<option value="">選擇食物</option>';
            exerciseType.innerHTML = '<option value="">選擇運動項目</option>';

            FOOD_DB.forEach(food => {
                const option = document.createElement('option');
                option.value = food.name;
                option.textContent = food.name;
                option.dataset.unit = food.unit || 'g'; 
                option.dataset.unitGram = food.unitGram || 1;
                foodSelect.appendChild(option);
            });
            
            // ** (更新) 渲染運動選單，使用新的 EXERCISE_NAME **
            for(const key in EXERCISE_NAME) {
                 const option = document.createElement('option');
                 option.value = key;
                 option.textContent = EXERCISE_NAME[key];
                 option.dataset.isReps = REPS_PER_MINUTE[key] ? 'true' : 'false'; // 標記是否支援次數
                 exerciseType.appendChild(option);
            }

            this.updateFoodAmountPlaceholder();
            this.updateExerciseInputMode(); // 新增：更新運動輸入模式
        },

        updateFoodAmountPlaceholder() {
             const foodSelect = document.getElementById('foodSelect');
             const foodAmount = document.getElementById('foodAmount');
             const foodInputMode = document.getElementById('foodInputMode');
             const foodInfo = document.getElementById('foodInfo');
             
             const sel = foodSelect.options[foodSelect.selectedIndex];
             const mode = foodInputMode.value || 'unit';

             if(!sel || !sel.value){
               foodAmount.placeholder = '份量';
               foodInfo.textContent = '請選擇食物';
               return;
             }
             
             const food = FOOD_DB.find(dbF => dbF.name === sel.value);
             if (!food) return;
             const unit = food.unit || 'g';
             const ug = parseFloat(food.unitGram) || 1;
             let baseKcal = food.kcal;

             if(mode === 'g'){
                 foodAmount.placeholder = '份量 (g)';
                 const kcal100 = (unit === 'g' && ug === 1) ? baseKcal : Math.round(baseKcal / ug * 100);
                 foodInfo.textContent = `輸入克數 (100g 約 ${kcal100} kcal)`;
             } else { // mode === 'unit'
                 foodAmount.placeholder = `份量 (${unit})`;
                 foodInfo.textContent = `1 ${unit} 約 ${ug} g (約 ${baseKcal} kcal)`;
             }
        },
        
        // ** 新增：動態更新運動輸入模式 (分鐘/次數) **
        updateExerciseInputMode() {
            const typeEl = document.getElementById('exerciseType');
            const minutesEl = document.getElementById('exerciseMinutes');
            const inputModeEl = document.getElementById('exerciseInputMode');
            const sel = typeEl.options[typeEl.selectedIndex];
            
            // 重置
            inputModeEl.innerHTML = '<option value="minutes">分鐘</option>';
            minutesEl.placeholder = '時長 (分)';

            if (!sel || !sel.value) {
                return;
            }
            
            const isRepsSupported = sel.dataset.isReps === 'true';
            
            if (isRepsSupported) {
                 // 支援次數的運動，讓使用者選擇
                 inputModeEl.innerHTML = `
                     <option value="minutes">分鐘</option>
                     <option value="reps">次數</option>
                 `;
                 // 根據當前選擇的模式更新 placeholder
                 minutesEl.placeholder = `時長 (${inputModeEl.value === 'reps' ? '次' : '分'})`;
            } 
            
            // 監聽模式切換，以更新 placeholder
            const updatePlaceholder = () => {
                 minutesEl.placeholder = `時長 (${inputModeEl.value === 'reps' ? '次' : '分'})`;
            };
            // 移除舊監聽器以避免重複，這裡簡化為直接設定 onchange 屬性
            inputModeEl.onchange = updatePlaceholder;
            updatePlaceholder(); // 首次執行
        },


        renderDashboard(summary, profile, todayEntry) {
            document.getElementById('kcalGoal').textContent = summary.kcalGoal.toLocaleString();
            document.getElementById('kcalIn').textContent = summary.kcalIn.toLocaleString();
            document.getElementById('kcalOut').textContent = summary.kcalOut.toLocaleString();
            document.getElementById('kcalDiff').textContent = summary.kcalDiff.toLocaleString();
            
            document.getElementById('bmiValDashboard').textContent = profile?.bmi || '—';
            document.getElementById('lbmValDashboard').textContent = profile?.lbm || '—';
            document.getElementById('muscleValDashboard').textContent = profile?.muscle || '—';

            if (profile?.bodyFat && profile?.userMeasuredBodyFat) {
                 const diff = +(profile.bodyFat - profile.userMeasuredBodyFat).toFixed(1);
                 const diffMsg = diff === 0 ? ` (一致)` : diff > 0 ? ` (+${diff})` : ` (${diff})`;
                 const diffColor = Math.abs(diff) > 2 ? 'var(--danger)' : (Math.abs(diff) > 0.5 ? 'var(--warning)' : 'var(--accent-green)');
                 document.getElementById('bodyFatValDashboard').innerHTML = `${profile.bodyFat}% <span style="font-size: 11px; color: ${diffColor};">vs 自測 ${profile.userMeasuredBodyFat}%${diffMsg}</span>`;
             } else {
                 document.getElementById('bodyFatValDashboard').textContent = profile?.bodyFat || '—';
             }

            const { pPct, cPct, fPct, score } = Calculations.calculateMacroScore(
                 summary.protein, summary.carbs, summary.fat, profile.targetProtein, profile.targetCarbs, profile.targetFat
            );
            document.getElementById('macroInfo').textContent = 
                `P: ${summary.protein}/${profile.targetProtein}g (${Math.round(pPct*100)}%) | C: ${summary.carbs}/${profile.targetCarbs}g (${Math.round(cPct*100)}%) | F: ${summary.fat}/${profile.targetFat}g (${Math.round(fPct*100)}%)`;

            const scoreEl = document.getElementById('todayScore');
            scoreEl.style.width = `${Math.min(score * 100, 100)}%`;
            scoreEl.style.background = score > 1.2 ? 'var(--danger)' : score < 0.8 ? 'linear-gradient(90deg,var(--warning),#ffcc66)' : 'linear-gradient(90deg,var(--accent-green),#00d68a)';

            document.getElementById('moodSelect').value = todayEntry.mood || '';
            document.getElementById('waterAmount').value = todayEntry.water || '';
            document.getElementById('sleepSelect').value = todayEntry.sleep || '';
            document.getElementById('sickCheckbox').checked = !!todayEntry.sick;
            this.updateHealthStatusMsg(todayEntry.mood, todayEntry.sick);
        },
        
        updateHealthStatusMsg(mood, isSick) {
             const msgEl = document.getElementById('healthStatusMsg');
             let text = '—';
             if (isSick) {
                 text = '<span style="color:var(--danger); font-weight: bold;">[健康警示] 身體正在抵抗病毒，建議今日僅進行輕度活動，確保充足飲水和睡眠。</span>';
             } else if (mood) {
                 switch (parseInt(mood)) {
                     case 1: text = '心情很差可能是壓力或睡眠不足造成，建議進行輕度運動或冥想。'; break;
                     case 2: text = '嘗試記錄讓你不開心的事件，或許能找到解決方案。'; break;
                     case 3: text = '保持穩定！維持良好飲食和適度運動有助於情緒。'; break;
                     case 4: text = '情緒良好！這正是維持進度的最佳狀態，記得保持！'; break;
                     case 5: text = '<span style="color:var(--accent-green); font-weight: bold;">情緒極佳！積極的心態是成功的關鍵，利用這股動力完成目標！</span>'; break;
                 }
             }
             msgEl.innerHTML = text;
        },

        renderProfileUI() {
             const profile = DataStore.profile;
             const bmrEl = document.getElementById('bmrVal');
             const tdeeEl = document.getElementById('tdeeVal');
             const waterGoalEl = document.getElementById('waterGoalVal');
             
             if (profile && profile.age && profile.height && profile.weight) {
                 const bmr = Calculations.calculateBMR(profile.sex, profile.age, profile.height, profile.weight);
                 const tdee = Calculations.calculateTDEE(bmr, profile.activity);
                 bmrEl.textContent = `${bmr.toLocaleString()} kcal`;
                 tdeeEl.textContent = `${tdee.toLocaleString()} kcal`;

                 // Profile Backfill
                 document.getElementById('profileName').value = profile.name || '';
                 document.getElementById('profileSex').value = profile.sex || 'male';
                 document.getElementById('profileAge').value = profile.age || '';
                 document.getElementById('profileHeight').value = profile.height || '';
                 document.getElementById('profileWeight').value = profile.weight || '';
                 document.getElementById('activityFactor').value = profile.activity || 1.55;
                 document.getElementById('profileWaterGoal').value = profile.dailyWaterGoal || 2000;
                 document.getElementById('profileProtein').value = profile.targetProtein || '';
                 document.getElementById('profileCarbs').value = profile.targetCarbs || '';
                 document.getElementById('profileFat').value = profile.targetFat || '';
                 document.getElementById('profileWaist').value = profile.waist || '';
                 document.getElementById('profileNeck').value = profile.neck || '';
                 document.getElementById('profileHip').value = profile.hip || '';
                 document.getElementById('bodyFatMethodSelect').value = profile.bodyFatMethod || 'navy';
                 document.getElementById('userMeasuredBodyFat').value = profile.userMeasuredBodyFat || '';


                 waterGoalEl.textContent = profile.dailyWaterGoal ? profile.dailyWaterGoal.toLocaleString() : '—';
                 
                 const todayEntry = DataStore.getEntry();
                 const waterConsumed = todayEntry.water || 0;
                 const goal = profile.dailyWaterGoal || 2000;
                 const progressPct = Math.min(waterConsumed / goal * 100, 100);
                 document.getElementById('waterProgress').style.width = `${progressPct}%`;
                 document.getElementById('waterProgressVal').textContent = `${waterConsumed} ml`;

             } else {
                 bmrEl.textContent = '—';
                 tdeeEl.textContent = '—';
                 waterGoalEl.textContent = '—';
                 document.getElementById('waterProgress').style.width = '0%';
                 document.getElementById('waterProgressVal').textContent = '0 ml';
             }
             
             document.getElementById('userInfo').textContent = DataStore.profile?.name || '未設定個人檔案';
        },

        renderLog() {
            const todayEntry = DataStore.getEntry();
            const logList = document.getElementById('logList');
            const foodLog = document.getElementById('foodLog');
            const exerciseLog = document.getElementById('exerciseLog');
            logList.innerHTML = '';
            foodLog.innerHTML = '';
            exerciseLog.innerHTML = '';
            
            // 渲染日誌項目
            const renderItem = (item, listEl, logType, index) => {
                 const row = document.createElement('div');
                 row.className = 'log-item';
                 row.setAttribute('data-index', index);
                 row.setAttribute('data-type', logType); // food, exercise
                 
                 const date = new Date(item.timestamp);
                 const timeStr = date.toTimeString().substring(0, 5);

                 let info = '';
                 if (logType === 'food') {
                    const unit = item.unit || (item.isGram ? 'g' : '份');
                    info = `${item.foodName} (${item.amount}${unit}) - ${item.kcal} kcal`;
                 } else if (logType === 'exercise') {
                    const typeName = EXERCISE_NAME[item.type] || item.type;
                    // 根據是 minutes 還是 reps 顯示正確的單位
                    const val = item.minutes ? `${item.minutes}分鐘` : `${item.reps}次`;
                    info = `${typeName} (${val}) - ${item.kcal} kcal`;
                 }
                 
                 row.innerHTML = `<span>[${timeStr}] ${info}</span> <span style="font-weight: bold; color: var(--text-primary);">點擊刪除</span>`;
                 
                 // **新增點擊監聽器**
                 row.addEventListener('click', this.handleLogDelete);
                 
                 listEl.appendChild(row);
            };

            // 渲染所有日誌 (依時間排序)
            const sortedLogs = [
                 ...todayEntry.foods.map((f, i) => ({...f, logType: 'food', originalIndex: i})),
                 ...todayEntry.exercises.map((e, i) => ({...e, logType: 'exercise', originalIndex: i}))
            ].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

            if (sortedLogs.length === 0) logList.innerHTML = '<p class="text-muted">目前沒有任何日誌記錄。</p>';
            sortedLogs.forEach((item) => renderItem(item, logList, item.logType, item.originalIndex));

            // 渲染個別日誌區塊
            if (todayEntry.foods.length === 0) foodLog.innerHTML = '<p class="text-muted">目前沒有飲食記錄。</p>';
            todayEntry.foods.forEach((item, index) => renderItem(item, foodLog, 'food', index));
            
            if (todayEntry.exercises.length === 0) exerciseLog.innerHTML = '<p class="text-muted">目前沒有運動記錄。</p>';
            todayEntry.exercises.forEach((item, index) => renderItem(item, exerciseLog, 'exercise', index));
        },
        
        renderFinanceList() {
            const financeList = document.getElementById('financeList');
            financeList.innerHTML = '';
            const todayEntry = DataStore.getEntry();
            const financeEntries = todayEntry.finance;
            const { dailyBalance, totalIn, totalOut } = Calculations.calculateFinanceSummary(todayEntry);

            if (financeEntries.length === 0) {
                financeList.innerHTML = '<p class="text-muted">目前沒有財務記錄。</p>';
                return;
            }

            const summaryRow = document.createElement('div');
            summaryRow.className = 'finance-row finance-summary-row';
            summaryRow.innerHTML = `<span>總結 (當日)：收入 $${totalIn.toLocaleString()} / 支出 $${totalOut.toLocaleString()}</span> <span class="finance-amount ${dailyBalance >= 0 ? 'in' : 'out'}">$${dailyBalance.toLocaleString()}</span>`;
            financeList.appendChild(summaryRow);

            financeEntries.forEach((item, index) => {
                const row = document.createElement('div');
                row.className = 'finance-row';
                row.setAttribute('data-index', index);
                row.setAttribute('data-type', 'finance'); // 標記為財務
                
                const note = document.createElement('span');
                note.textContent = `${item.note} (${item.type === 'in' ? '收入' : '支出'})`;
                
                const amountSpan = document.createElement('span');
                const sign = item.type === 'out' ? '-' : '+';
                amountSpan.textContent = `${sign} $${item.amount.toLocaleString()}`;
                amountSpan.className = `finance-amount ${item.type}`;
                
                row.appendChild(note);
                row.appendChild(amountSpan);
                financeList.appendChild(row);
                
                row.addEventListener('click', this.handleLogDelete); // **新增點擊監聽器**
            });
        },
        
        renderPersonalizedSuggestions(summary, finance, entry) {
            const targetProfile = DataStore.profile;
            
            let dietAnalysis = '';
            let pPct = summary.targetProtein > 0 ? summary.protein / summary.targetProtein : 0;
            let cPct = summary.targetCarbs > 0 ? summary.carbs / summary.targetCarbs : 0;
            let fPct = summary.targetFat > 0 ? summary.fat / summary.targetFat : 0;
            if (summary.kcalIn === 0) {
                dietAnalysis = '尚未記錄飲食，無法分析巨量營養素分佈。';
            } else if (pPct < 0.8 && targetProfile.targetProtein) {
                dietAnalysis = `蛋白質攝取量偏低 (${Math.round(pPct*100)}% 目標)，建議增加優質蛋白來源如雞蛋、豆腐或雞胸肉。`;
            } else if (cPct > 1.2 && targetProfile.targetCarbs) {
                dietAnalysis = `碳水化合物攝取過多 (${Math.round(cPct*100)}% 目標)，可考慮替換為糙米、地瓜等低GI食物，以維持血糖穩定。`;
            } else if (fPct < 0.8 && targetProfile.targetFat) {
                dietAnalysis = `脂肪攝取量不足 (${Math.round(fPct*100)}% 目標)，確保攝取足夠的健康脂肪（如鮭魚、堅果），有利於賀爾蒙。`;
            } else {
                dietAnalysis = '巨量營養素比例看起來相當均衡，持續追蹤細節並保持！';
            }

            let exerciseStat = '';
            if (summary.kcalOut === 0) {
                exerciseStat = '今日尚未記錄運動，保持適度活動對身心健康至關重要。';
            } else if (summary.kcalOut < 200) {
                exerciseStat = `今日消耗約 ${summary.kcalOut} kcal，屬於輕度活動，若目標是減脂，建議增加運動強度或時間。`;
            } else {
                exerciseStat = `<span style="color:var(--accent-green)">今日消耗 ${summary.kcalOut} kcal，活動量表現良好！</span>`;
            }
            
            let financeStat = '';
            const net = finance.totalIn - finance.totalOut;
            const status = net >= 0 ? '正向' : '負向';
            financeStat = `<span style="color:${net >= 0 ? 'var(--accent-green)' : 'var(--danger)'}">今日淨餘額 $${net.toLocaleString()} (${status})。</span> 總支出 $${finance.totalOut.toLocaleString()}。`;

            let moodRecText = '';
            const moodScore = entry.mood;
            if (moodScore === '1' || moodScore === '2') {
                moodRecText = '建議休息並進行冥想。';
            } else if (moodScore === '5') {
                moodRecText = '利用這股動力完成運動目標！';
            } else {
                moodRecText = '保持好心情！';
            }

            let resultHtml = `
                <h3>飲食與熱量分析</h3><p class="text-muted">${dietAnalysis}</p>
                <h3>運動量與熱量分析</h3><p class="text-muted">${exerciseStat}</p>
                <h3>財務支出統計</h3><p class="text-muted">${financeStat}</p>
                <h3>心情與推薦</h3><p class="text-muted">${moodRecText}</p>
            `;

            document.getElementById('personalizedSuggestions').innerHTML = resultHtml;
        },

        renderStats(allEntries, profile) {
            const summaryEl = document.getElementById('statsSummary');
            const canvas = document.getElementById('statsCanvas');
            
            if (!profile || !profile.weight) {
                summaryEl.textContent = '請先在「設定」頁面填寫體重等基本資料，才能進行統計分析。';
                if (this.monthlyChart) { this.monthlyChart.destroy(); this.monthlyChart = null; }
                return;
            }
            
            const { labels, weightData, kcalDiffData, averageKcalDiff, averageWeight } = Calculations.calculateStatsData(allEntries, profile);
            
            summaryEl.innerHTML = `最近 14 天平均體重: <span style="font-weight: bold;">${averageWeight.toFixed(1)} kg</span>，平均每日熱量盈餘: <span style="font-weight: bold; color:${averageKcalDiff >= 0 ? 'var(--danger)' : 'var(--accent-green)'}">${averageKcalDiff.toLocaleString()} kcal</span>。`;

            if (this.monthlyChart) { this.monthlyChart.destroy(); }
            
            this.monthlyChart = new Chart(canvas, {
                type: 'line',
                data: {
                     labels: labels,
                     datasets: [
                         {
                             label: '體重 (kg)',
                             data: weightData,
                             yAxisID: 'y1',
                             borderColor: 'var(--accent-blue)',
                             backgroundColor: 'rgba(0, 209, 255, 0.1)',
                             tension: 0.3,
                             pointRadius: 3,
                         },
                         {
                             label: '熱量差 (kcal)',
                             data: kcalDiffData,
                             yAxisID: 'y2',
                             borderColor: 'var(--accent-green)',
                             backgroundColor: 'rgba(0, 255, 122, 0.1)',
                             tension: 0.3,
                             pointRadius: 3,
                         }
                     ]
                },
                options: {
                    responsive: true, maintainAspectRatio: false,
                    scales: {
                         x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: 'var(--text-muted)' } },
                         y1: { 
                             type: 'linear', position: 'left', title: { display: true, text: '體重 (kg)', color: 'var(--accent-blue)' },
                             grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: 'var(--accent-blue)' }
                         },
                         y2: {
                             type: 'linear', position: 'right', title: { display: true, text: '熱量差 (kcal)', color: 'var(--accent-green)' },
                             grid: { drawOnChartArea: false }, ticks: { color: 'var(--accent-green)' }
                         }
                    },
                    plugins: { legend: { labels: { color: 'var(--text-primary)' } } }
                }
            });
        },

        renderTodayPlan() {
            const planEl = document.getElementById('todayPlan');
            const planKey = DataStore.profile?.planKey;
            
            if (!planKey) {
                 planEl.textContent = '今日建議：尚未套用課表';
                 return;
            }
            
            const info = Calculations.getPlanForDate(planKey, new Date());
            planEl.textContent = `今日建議：${info}`;
        },
        
        renderAll() {
            const todayEntry = DataStore.getEntry();
            const profile = DataStore.profile;
            
            this.renderUserSelect();
            
            if (!profile || !profile.weight) {
                // 如果沒有設定檔，強制切換到設定頁面
                document.querySelectorAll('.section').forEach(el => el.classList.remove('active'));
                document.getElementById('settings').classList.add('active');
                document.querySelectorAll('.tab').forEach(el => el.classList.remove('active'));
                document.querySelector('.tab[data-tab="settings"]').classList.add('active');
            }

            const summary = Calculations.calculateDailySummary(todayEntry, profile);
            const finance = Calculations.calculateFinanceSummary(todayEntry);
            
            this.renderSelects();
            this.renderProfileUI();
            this.renderDashboard(summary, profile, todayEntry);
            this.renderLog();
            this.renderFinanceList();
            this.renderPersonalizedSuggestions(summary, finance, todayEntry);
            this.renderStats(DataStore.entries, profile);
            this.renderTodayPlan();
            
            // *** 關鍵呼叫：更新音樂推薦 ***
            this.getMusicRecommendation(todayEntry.mood);
        },

        // 處理日誌和財務項目的刪除
        handleLogDelete(e) {
             const row = e.currentTarget;
             const index = parseInt(row.getAttribute('data-index'));
             const type = row.getAttribute('data-type'); // food, exercise, finance

             const entry = DataStore.getEntry();
             let itemName = '';
             let collection = [];
             
             switch (type) {
                 case 'food':
                     itemName = entry.foods[index].foodName;
                     collection = entry.foods;
                     break;
                 case 'exercise':
                     itemName = EXERCISE_NAME[entry.exercises[index].type] || entry.exercises[index].type;
                     collection = entry.exercises;
                     break;
                 case 'finance':
                     const item = entry.finance[index];
                     const sign = item.type === 'out' ? '-' : '+';
                     itemName = `${item.note}：${sign} $${item.amount.toLocaleString()}`;
                     collection = entry.finance;
                     break;
                 default:
                     return;
             }

             if (confirm(`確定要刪除這筆 ${type === 'finance' ? '財務' : type === 'food' ? '飲食' : '運動'} 記錄嗎？\n${itemName}`)) {
                 collection.splice(index, 1);
                 DataStore.saveEntries();
                 App.renderAll();
             }
        },

        setupEventListeners() {
            // Tab Navigation
            document.getElementById('appNav').addEventListener('click', (e) => {
                if (e.target.classList.contains('tab')) {
                    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                    e.target.classList.add('active');
                    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
                    document.getElementById(e.target.dataset.tab).classList.add('active');
                    if (e.target.dataset.tab === 'stats') { this.renderStats(DataStore.entries, DataStore.profile); }
                }
            });

            // User Management
            document.getElementById('userSelect').addEventListener('change', (e) => {
                DataStore.setActiveUser(e.target.value);
                this.renderAll();
            });
            document.getElementById('addUserBtn').addEventListener('click', () => {
                const name = prompt("請輸入新使用者的名稱：");
                if (name && name.trim()) {
                    DataStore.addUser(name.trim());
                    this.renderAll();
                }
            });

            // Food Input
            document.getElementById('foodSelect').addEventListener('change', () => this.updateFoodAmountPlaceholder());
            document.getElementById('foodInputMode').addEventListener('change', () => this.updateFoodAmountPlaceholder());

            document.getElementById('addFoodBtn').addEventListener('click', () => {
                 const foodSelect = document.getElementById('foodSelect');
                 const foodAmountEl = document.getElementById('foodAmount');
                 const foodInputMode = document.getElementById('foodInputMode').value;
                 const foodName = foodSelect.value;
                 const amount = parseFloat(foodAmountEl.value);

                 if (!foodName || !amount || amount <= 0) { alert('請選擇食物並輸入有效份量'); return; }

                 const food = FOOD_DB.find(dbF => dbF.name === foodName);
                 if (!food) return;

                 const entry = DataStore.ensureTodayEntry();
                 
                 let finalAmount = amount;
                 let unitGram = food.unitGram || 1;
                 let isGram = (foodInputMode === 'g');
                 
                 if (isGram) { finalAmount = amount / unitGram; } // Convert input grams to 'unit' multiplier
                 
                 const totalKcal = Math.round(food.kcal * finalAmount);
                 const totalProtein = +(food.protein * finalAmount).toFixed(1);
                 const totalFat = +(food.fat * finalAmount).toFixed(1);
                 const totalCarbs = +(food.carbs * finalAmount).toFixed(1);
                 
                 const newFood = { foodName, amount: amount, unit: isGram ? 'g' : (food.unit || '份'), kcal: totalKcal, protein: totalProtein, fat: totalFat, carbs: totalCarbs, isGram: isGram, timestamp: new Date().toISOString() };
                 
                 entry.foods.push(newFood);
                 DataStore.saveEntries();
                 foodAmountEl.value = '';
                 this.renderAll();
                 this.updateFoodAmountPlaceholder();
            });

            // ** (更新) Exercise Input **
            document.getElementById('exerciseType').addEventListener('change', () => this.updateExerciseInputMode());
            document.getElementById('exerciseInputMode').addEventListener('change', () => {
                 const minutesEl = document.getElementById('exerciseMinutes');
                 const inputMode = document.getElementById('exerciseInputMode').value;
                 minutesEl.placeholder = `時長 (${inputMode === 'reps' ? '次' : '分'})`;
            });

            document.getElementById('addExerciseBtn').addEventListener('click', () => {
                 const typeEl = document.getElementById('exerciseType');
                 const minutesEl = document.getElementById('exerciseMinutes');
                 const inputMode = document.getElementById('exerciseInputMode').value;
                 const type = typeEl.value;
                 const value = parseFloat(minutesEl.value);
                 
                 if (!type || !value || value <= 0) { alert('請選擇運動並輸入有效時長/次數'); return; }

                 const profile = DataStore.profile;
                 if (!profile || !profile.weight) { alert('請先在「設定」頁面填寫體重！'); return; }

                 const entry = DataStore.ensureTodayEntry();
                 const isReps = inputMode === 'reps';
                 
                 // ** 使用新的 MET 計算函式 **
                 const totalKcal = Calculations.estimateExerciseKcal(type, value, profile.weight, isReps);

                 const newEx = { type, kcal: totalKcal, timestamp: new Date().toISOString() };
                 
                 if (isReps) { newEx.reps = value; } else { newEx.minutes = value; }
                 
                 entry.exercises.push(newEx);
                 DataStore.saveEntries();
                 minutesEl.value = '';
                 this.renderAll();
            });

            // Finance Input
            document.getElementById('addFinanceBtn').addEventListener('click', () => {
                 const note = document.getElementById('financeNote').value.trim();
                 const type = document.getElementById('financeType').value;
                 const amount = parseFloat(document.getElementById('financeAmount').value);

                 if (!note || !amount || amount <= 0) { alert('請輸入項目說明和有效的金額'); return; }

                 const entry = DataStore.ensureTodayEntry();
                 entry.finance.push({ note, type, amount: Math.round(amount), timestamp: new Date().toISOString() });

                 DataStore.saveEntries();
                 document.getElementById('financeNote').value = '';
                 document.getElementById('financeAmount').value = '';
                 this.renderAll();
            });

            // 儲存飲水/心情/睡眠/生病狀態 (含音樂推薦呼叫)
            document.getElementById('saveWaterBtn').addEventListener('click', () => {
                 const entry = DataStore.ensureTodayEntry();
                 entry.water = parseFloat(document.getElementById('waterAmount').value) || 0;
                 entry.mood = document.getElementById('moodSelect').value || null;
                 entry.sleep = document.getElementById('sleepSelect').value || null;
                 entry.sick = document.getElementById('sickCheckbox').checked;
                 DataStore.saveEntries();
                 this.renderAll();
                 alert('健康狀態已儲存！');
                 this.getMusicRecommendation(entry.mood); // 更新音樂推薦
            });
            
            // Profile Settings
            document.getElementById('saveProfileBtn').addEventListener('click', () => {
                 const p = DataStore.profile || {};
                 p.name = document.getElementById('profileName').value.trim();
                 p.sex = document.getElementById('profileSex').value;
                 p.age = parseFloat(document.getElementById('profileAge').value) || null;
                 p.height = parseFloat(document.getElementById('profileHeight').value) || null;
                 p.weight = parseFloat(document.getElementById('profileWeight').value) || null;
                 p.activity = parseFloat(document.getElementById('activityFactor').value);
                 p.dailyWaterGoal = parseFloat(document.getElementById('profileWaterGoal').value) || 2000;
                 p.targetProtein = parseFloat(document.getElementById('profileProtein').value) || null;
                 p.targetCarbs = parseFloat(document.getElementById('profileCarbs').value) || null;
                 p.targetFat = parseFloat(document.getElementById('profileFat').value) || null;
                 p.waist = parseFloat(document.getElementById('profileWaist').value) || null;
                 p.neck = parseFloat(document.getElementById('profileNeck').value) || null;
                 p.hip = parseFloat(document.getElementById('profileHip').value) || null;
                 p.bodyFatMethod = document.getElementById('bodyFatMethodSelect').value || 'navy';
                 p.userMeasuredBodyFat = parseFloat(document.getElementById('userMeasuredBodyFat').value) || null;

                 if (!p.age || !p.height || !p.weight) { alert('請務必填寫年齡、身高和體重！'); return; }

                 DataStore.profile = p;
                 DataStore.saveProfile();
                 this.renderAll();
                 alert('設定已儲存！');
            });

            document.getElementById('calcBodyComp').addEventListener('click', () => {
                 const p = DataStore.profile;
                 if (!p || !p.age || !p.height || !p.weight) { alert('請先填寫年齡、身高和體重！'); return; }

                 const { bmi, bodyFat, lbm, muscle, estimates } = Calculations.estimateBodyComposition(
                     p.sex, p.age, p.height, p.weight, p.waist, p.neck, p.hip, document.getElementById('bodyFatMethodSelect').value
                 );
                 
                 p.bmi = bmi; p.bodyFat = bodyFat; p.lbm = lbm; p.muscle = muscle; p.bodyFatEstimates = estimates;
                 DataStore.saveProfile();
                 this.renderAll();
                 alert('身體組成估算完成。');
            });
            
            // Plan and Quick Actions
            document.getElementById('applyPlan').addEventListener('click', () => {
                const planKey = document.getElementById('planSelect').value;
                if (!planKey) return alert('請選擇一個課表');
                DataStore.profile.planKey = planKey;
                DataStore.saveProfile();
                this.renderTodayPlan();
                alert('課表已套用！');
            });

            // ** (更新) 加入今日建議按鈕，根據新 PLANS 結構解析 **
            document.getElementById('addPlanTodayBtn').addEventListener('click', () => {
                 const planKey = DataStore.profile?.planKey;
                 if(!planKey) return alert('尚未套用任何課表');
                 
                 const day = new Date().getDay();
                 const planArr = PLANS[planKey];
                 if (!planArr) return alert('課表資料錯誤');

                 const planStr = planArr[day] || 'rest:0';
                 const [type, valueStr] = planStr.split(':');
                 const value = parseFloat(valueStr);
                 
                 if (type === 'rest' || value === 0) return alert('今日為休息日或活動量為 0');

                 const profile = DataStore.profile;
                 if (!profile || !profile.weight) { alert('請先在「設定」頁面填寫體重！'); return; }

                 const entry = DataStore.ensureTodayEntry();
                 
                 const isReps = !!REPS_PER_MINUTE[type];

                 const totalKcal = Calculations.estimateExerciseKcal(type, value, profile.weight, isReps);
                 
                 const newEx = { type, kcal: totalKcal, timestamp: new Date().toISOString() };
                 
                 if (isReps) { newEx.reps = value; } else { newEx.minutes = value; }

                 entry.exercises.push(newEx);
                 DataStore.saveEntries();
                 this.renderAll();
                 alert(`已將今日建議 (${EXERCISE_NAME[type] || type}: ${value} ${isReps ? '次' : '分鐘'}) 加入日誌`);
            });

            document.getElementById('recordWeightBtn').addEventListener('click', () => {
                 const weight = parseFloat(document.getElementById('quickWeightInput').value);
                 if (!weight || weight <= 0) { alert('請輸入有效的體重'); return; }
                 
                 const entry = DataStore.ensureTodayEntry();
                 entry.weight = weight;
                 DataStore.profile.weight = weight; // 也更新 profile 中的最新體重
                 DataStore.saveEntries();
                 DataStore.saveProfile();
                 document.getElementById('quickWeightInput').value = '';
                 this.renderAll();
                 alert(`已記錄今日體重: ${weight} kg`);
            });

            document.getElementById('clearDataBtn').addEventListener('click', DataStore.clearAllData);
        },
        
        init() {
            this.setupEventListeners();
            this.renderAll();
        }
    };

    document.addEventListener('DOMContentLoaded', () => App.init());
})();