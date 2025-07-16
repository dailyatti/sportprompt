// Sports data with enhanced prompts and Perplexity integration
const sportsData = {
    football: {
        name: "Football",
        icon: "⚽",
        category: "traditional",
        promptTitle: "Professional Football Betting Analysis",
        prompt: `Kérlek, végezz részletes elemzést a következő futballmérkőzésre vonatkozóan:

**ALAPVETŐ INFORMÁCIÓK:**
- Csapatok: [CSAPAT1] vs [CSAPAT2]
- Dátum: [DÁTUM]
- Bajnokság: [BAJNOKSÁG]
- Helyszín: [HELYSZÍN]

**ELEMZÉSI SZEMPONTOK:**
1. **Forma elemzés**: Utolsó 5 mérkőzés eredményei és teljesítmény
2. **Egymás elleni mérleg**: Korábbi találkozók statisztikái
3. **Sérülések és eltiltások**: Kulcsjátékosok állapota
4. **Hazai/vendég teljesítmény**: Pálya előny hatása
5. **Motivációs tényezők**: Tabellás helyzet, célok
6. **Taktikai elemzés**: Játékstílus, felállás várható hatása

**FOGADÁSI JAVASLATOK:**
- Végeredmény (1X2) valószínűségekkel
- Gólok száma (Over/Under 2.5)
- Mindkét csapat szerez gólt
- Szöglet és lap fogadások
- Értékes kombinációs tippek

**KOCKÁZAT ÉRTÉKELÉS:**
- Biztonságos fogadások (alacsony kockázat)
- Közepes kockázatú tippek
- Magas kockázatú, de értékes lehetőségek

Adj konkrét odds ajánlásokat és indokold minden tipped!`
    },
    basketball: {
        name: "Basketball",
        icon: "🏀",
        category: "traditional",
        promptTitle: "NBA/Kosárlabda Betting Strategy",
        prompt: `Készíts professzionális kosárlabda fogadási elemzést:

**MÉRKŐZÉS ADATOK:**
- Csapatok: [CSAPAT1] vs [CSAPAT2]
- Liga: [NBA/EUROLEAGUE/stb.]
- Dátum és időpont: [DÁTUM]
- Helyszín: [ARÉNA]

**STATISZTIKAI ELEMZÉS:**
1. **Csapat teljesítmény**: PPG, FG%, 3P%, FT%
2. **Védelem**: Allowed PPG, Rebounds, Steals, Blocks
3. **Pace és stílus**: Játéktempó, birtoklások száma
4. **Kulcsjátékosok**: Sztárok formája, sérülések
5. **Hazai/vendég különbségek**: Utazás hatása
6. **Back-to-back játékok**: Fáradtság tényező

**FOGADÁSI LEHETŐSÉGEK:**
- Végeredmény és handicap
- Összes pont (Over/Under)
- Negyedek eredményei
- Játékos teljesítmény fogadások
- Live betting stratégiák

**SPECIÁLIS TIPPEK:**
- Első negyed eredmény
- Legnagyobb előny
- Overtime valószínűség
- Hárompontosok száma

Adj részletes indoklást minden ajánláshoz!`
    },
    tennis: {
        name: "Tennis",
        icon: "🎾",
        category: "traditional",
        promptTitle: "Tennis Match Prediction Analysis",
        prompt: `Végezz mélyreható tenisz mérkőzés elemzést:

**MÉRKŐZÉS INFORMÁCIÓK:**
- Játékosok: [JÁTÉKOS1] vs [JÁTÉKOS2]
- Torna: [TOURNAMENT]
- Felület: [CLAY/GRASS/HARD]
- Kör: [QUALIFYING/R1/R2/stb.]
- Dátum: [DÁTUM]

**JÁTÉKOS ELEMZÉS:**
1. **Jelenlegi forma**: Utolsó 10 mérkőzés
2. **Felület specifikus teljesítmény**: Win/Loss arány
3. **Egymás elleni mérleg**: H2H statisztikák
4. **Fizikai állapot**: Sérülések, fáradtság
5. **Mentális tényezők**: Nyomás, motiváció
6. **Játékstílus összevetés**: Erősségek vs gyengeségek

**TECHNIKAI ELEMZÉS:**
- Szervajáték hatékonysága
- Return game minősége
- Breakpoint konverzió
- Unforced errors aránya
- Winner/Error arány

**FOGADÁSI STRATÉGIA:**
- Mérkőzés győztes
- Set fogadások (2:0, 2:1 stb.)
- Games handicap
- Over/Under games összesen
- Első set győztes
- Tiebreak valószínűség

**WEATHER ÉS KÖRÜLMÉNYEK:**
- Időjárás hatása
- Nappali/esti játék
- Közönség befolyása

Adj konkrét odds értékelést és kockázat elemzést!`
    },
    boxing: {
        name: "Boxing",
        icon: "🥊",
        category: "traditional",
        promptTitle: "Professional Boxing Fight Analysis",
        prompt: `Készíts részletes boksz mérkőzés elemzést:

**FIGHT CARD INFORMÁCIÓK:**
- Bokszolók: [FIGHTER1] vs [FIGHTER2]
- Súlycsoport: [WEIGHT CLASS]
- Címek: [TITLES ON THE LINE]
- Helyszín: [VENUE]
- Dátum: [DATE]

**FIGHTER PROFIL ELEMZÉS:**
1. **Rekord és tapasztalat**: W-L-D, KO arány
2. **Utolsó mérkőzések**: Forma és teljesítmény
3. **Stílus elemzés**: Orthodox/Southpaw, fighting style
4. **Fizikai adottságok**: Magasság, nyúlás, súly
5. **Edzői csapat**: Taktikai felkészítés
6. **Mentális erősség**: Nagy meccseken való teljesítmény

**TECHNIKAI ÖSSZEHASONLÍTÁS:**
- Ütőerő és pontosság
- Védési képességek
- Állóképesség és kondíció
- Ring IQ és tapasztalat
- Chin (ütésállóság)

**FOGADÁSI LEHETŐSÉGEK:**
- Mérkőzés győztes
- Győzelem módja (KO/TKO/Decision)
- Round betting (melyik roundban ér véget)
- Over/Under rounds
- Knockdown fogadások
- Pontozásos győzelem

**KOCKÁZATI TÉNYEZŐK:**
- Sérülés történet
- Súlycsökkentés problémák
- Kívülálló tényezők
- Bírói befolyás

Adj részletes indoklást és értékfogadás ajánlásokat!`
    },
    horse_racing: {
        name: "Horse Racing",
        icon: "🏇",
        category: "traditional",
        promptTitle: "Horse Racing Betting Guide",
        prompt: `Végezz professzionális lóverseny elemzést:

**VERSENY INFORMÁCIÓK:**
- Pálya: [TRACK NAME]
- Távolság: [DISTANCE]
- Pálya állapot: [TRACK CONDITION]
- Verseny típus: [RACE TYPE]
- Díjazás: [PURSE]
- Dátum: [DATE]

**LÓ ELEMZÉS (minden indulóra):**
1. **Forma elemzés**: Utolsó 5 futás eredményei
2. **Pálya és távolság**: Alkalmasság az adott körülményekre
3. **Jockey és trainer**: Tapasztalat és siker arány
4. **Breeding**: Származás és genetikai előzmények
5. **Fizikai állapot**: Egészség, kondíció
6. **Odds mozgás**: Piac reakció elemzése

**TECHNIKAI TÉNYEZŐK:**
- Starting position hatása
- Pace scenario elemzés
- Class level összehasonlítás
- Weight carried
- Equipment changes
- Weather impact

**FOGADÁSI STRATÉGIÁK:**
- Win, Place, Show fogadások
- Exacta és Trifecta kombinációk
- Daily Double és Pick 3/4/6
- Each-way betting értékelés
- Longshot value plays

**SPECIÁLIS ELEMZÉS:**
- Speed figures összehasonlítás
- Beyer numbers értékelés
- Pace handicapping
- Trip notes elemzés

**BANKROLL MANAGEMENT:**
- Stake sizing ajánlások
- Risk/reward arány
- Portfolio approach

Adj konkrét fogadási javaslatokat indoklással!`
    },
    esports_lol: {
        name: "League of Legends",
        icon: "🎮",
        category: "esports",
        promptTitle: "LoL Esports Betting Analysis",
        prompt: `Készíts részletes League of Legends mérkőzés elemzést:

**MATCH INFORMÁCIÓK:**
- Csapatok: [TEAM1] vs [TEAM2]
- Liga: [LCS/LEC/LCK/LPL/stb.]
- Format: [BO1/BO3/BO5]
- Patch verzió: [PATCH]
- Dátum: [DATE]

**CSAPAT ELEMZÉS:**
1. **Jelenlegi forma**: Utolsó 10 játék W/L
2. **Meta adaptáció**: Patch változásokra való reagálás
3. **Játékos teljesítmény**: KDA, CS/min, damage share
4. **Draft phase**: Pick/ban prioritások és flexibilitas
5. **Makro játék**: Objective control, rotations
6. **Late game execution**: Teamfight és closing ability

**POZÍCIÓ SZERINTI BREAKDOWN:**
- Top lane matchup és impact
- Jungle pathing és gank potential
- Mid lane roaming és wave control
- Bot lane 2v2 és scaling
- Support vision control és engage

**META ÉS PATCH ELEMZÉS:**
- Erős championok aktuális patchben
- Itemization változások hatása
- Objective prioritások (Dragon, Baron, Rift Herald)
- Early/Mid/Late game meta shift

**FOGADÁSI LEHETŐSÉGEK:**
- Match winner (BO3/BO5)
- Map winner (individual games)
- First Blood, First Tower, First Dragon
- Total kills Over/Under
- Game duration
- Handicap betting

**SPECIÁLIS ESPORTS TIPPEK:**
- Side selection advantage
- Comfort picks vs meta picks
- Playoff pressure factor
- International tournament adjustments

Adj részletes stratégiai elemzést és értékfogadásokat!`
    },
    csgo: {
        name: "CS:GO/CS2",
        icon: "🔫",
        category: "esports",
        promptTitle: "Counter-Strike Betting Strategy",
        prompt: `Végezz professzionális CS:GO/CS2 mérkőzés elemzést:

**MATCH SETUP:**
- Csapatok: [TEAM1] vs [TEAM2]
- Torna: [TOURNAMENT]
- Format: [BO1/BO3/BO5]
- Mappool: [AVAILABLE MAPS]
- Dátum: [DATE]

**CSAPAT PROFIL:**
1. **Overall skill level**: HLTV ranking és rating
2. **Map specifikus teljesítmény**: Win rate mapokra
3. **Jelenlegi forma**: Utolsó mérkőzések eredményei
4. **Játékos formák**: Individual ratings és K/D
5. **Stratégiai elemzés**: Taktikai repertoár
6. **Clutch situations**: Pressure alatt való teljesítmény

**MAP ELEMZÉS:**
- Veto process prediction
- Map-specific advantages
- CT/T side preferences
- Economic management style
- Anti-eco és force-buy situations
- Pistol round importance

**INDIVIDUAL PLAYER ANALYSIS:**
- AWPer consistency és impact
- Entry fraggers effectiveness
- IGL tactical calling
- Support players utility usage
- Clutch players mental strength

**FOGADÁSI OPCIÓK:**
- Match winner
- Map winner (individual maps)
- Total rounds Over/Under
- Handicap rounds
- First map winner
- Pistol round winners
- Total maps played

**TECHNICAL FACTORS:**
- Recent roster changes
- Ping és server location
- LAN vs Online performance
- Time zone adjustments
- Crowd factor (if applicable)

**ADVANCED METRICS:**
- KAST percentage
- ADR (Average Damage per Round)
- Flash assists és utility damage
- Multi-kill rounds frequency
- Eco round conversion rate

Adj konkrét fogadási stratégiát és kockázat értékelést!`
    },
    formula1: {
        name: "Formula 1",
        icon: "🏎️",
        category: "motor",
        promptTitle: "F1 Race Weekend Betting Analysis",
        prompt: `Készíts átfogó Formula 1 hétvége elemzést:

**RACE WEEKEND INFO:**
- Pálya: [CIRCUIT NAME]
- Ország: [COUNTRY]
- Pálya hossz: [TRACK LENGTH]
- Körök száma: [LAPS]
- Weather forecast: [WEATHER]
- Dátum: [DATE]

**PÁLYA KARAKTERISZTIKA:**
1. **Pálya típus**: Street/Permanent circuit
2. **Overtaking lehetőségek**: DRS zónák hatékonysága
3. **Tire degradation**: Compound selection impact
4. **Fuel consumption**: Strategy implications
5. **Safety Car valószínűség**: Historical data
6. **Weather sensitivity**: Rain impact potential

**CSAPAT ÉS VERSENYZŐ ELEMZÉS:**
- Championship standings impact
- Car performance ezen a pályán
- Driver track record és tapasztalat
- Recent form és momentum
- Technical upgrades hatása
- Reliability concerns

**QUALIFYING PREDICTIONS:**
- Pole position contenders
- Q3 advancement predictions
- Weather impact on qualifying
- Track evolution factor
- Tire strategy for qualifying

**RACE DAY STRATEGY:**
- Starting tire compound choices
- Pit stop window predictions
- Undercut/overcut opportunities
- Safety Car restart scenarios
- DRS train possibilities

**FOGADÁSI LEHETŐSÉGEK:**
- Race winner
- Podium finishers (Top 3)
- Points finish (Top 10)
- Fastest lap
- First retirement
- Safety Car appearance
- Winning margin
- Constructor championship points

**WEATHER CONTINGENCY:**
- Wet weather specialists
- Intermediate tire performance
- Strategy flexibility in changing conditions
- Driver wet weather skills

**VALUE BETTING OPPORTUNITIES:**
- Long-shot podium chances
- Midfield battle outcomes
- Rookie vs veteran performance
- Team orders scenarios

Adj részletes race strategy elemzést és fogadási javaslatokat!`
    },
    mma: {
        name: "MMA/UFC",
        icon: "🥋",
        category: "traditional",
        promptTitle: "MMA Fight Breakdown Analysis",
        prompt: `Végezz részletes MMA/UFC mérkőzés elemzést:

**FIGHT CARD DETAILS:**
- Fighters: [FIGHTER1] vs [FIGHTER2]
- Weight class: [DIVISION]
- Title fight: [YES/NO]
- Main/Co-main: [CARD POSITION]
- Location: [VENUE]
- Date: [DATE]

**FIGHTER PROFILES:**
1. **Record analysis**: Wins-Losses-Draws breakdown
2. **Finish rate**: KO/TKO vs Submission vs Decision
3. **Recent activity**: Fight frequency és layoffs
4. **Age és career stage**: Prime vs declining
5. **Camp és training**: Gym changes, sparring partners
6. **Weight cutting**: Hydration és size advantages

**TECHNICAL BREAKDOWN:**
- Striking analysis (boxing, kicks, clinch)
- Grappling skills (takedowns, ground control)
- Submission game (offensive/defensive)
- Cardio és conditioning
- Fight IQ és adaptability
- Cage craft és positioning

**STYLISTIC MATCHUP:**
- Striker vs Grappler dynamics
- Range és reach advantages
- Southpaw vs Orthodox
- Pressure fighter vs Counter-striker
- Wrestling vs Jiu-Jitsu base
- Experience level comparison

**PSYCHOLOGICAL FACTORS:**
- Big fight experience
- Comeback ability
- Pressure handling
- Trash talk impact
- Crowd factor
- Revenge motivation

**BETTING MARKETS:**
- Fight winner (Moneyline)
- Method of victory
- Round betting
- Over/Under rounds
- Fight goes the distance
- Performance bonuses potential

**INJURY ÉS PREPARATION:**
- Training camp reports
- Previous injury history
- Short notice replacements
- Weight cut difficulties
- Sparring footage analysis

**REFEREE ÉS JUDGING:**
- Referee tendencies
- Judging criteria preferences
- Hometown advantage
- Commission differences

Adj részletes fight prediction és betting strategy!`
    },
    politics: {
        name: "Politics",
        icon: "🗳️",
        category: "logic",
        promptTitle: "Political Betting & Election Analysis",
        prompt: `Készíts professzionális politikai fogadási elemzést:

**VÁLASZTÁSI/POLITIKAI ESEMÉNY:**
- Esemény: [ELECTION/REFERENDUM/POLITICAL EVENT]
- Ország/Régió: [LOCATION]
- Dátum: [DATE]
- Tét: [STAKES - President/Parliament/Local/stb.]

**POLLING DATA ELEMZÉS:**
1. **Aktuális felmérések**: Legfrissebb poll eredmények
2. **Trend analysis**: Polling momentum változások
3. **Margin of error**: Statisztikai bizonytalanság
4. **Pollster reliability**: Történelmi pontosság
5. **Sample size és methodology**: Felmérés minősége
6. **Demographic breakdown**: Korosztály, nem, régió szerinti bontás

**POLITIKAI TÉNYEZŐK:**
- Incumbent advantage/disadvantage
- Economic indicators hatása
- Major policy issues
- Scandal vagy controversy impact
- Media coverage bias
- Endorsement effects
- Debate performance impact

**HISTORICAL CONTEXT:**
- Previous election results
- Swing state/constituency analysis
- Voter turnout patterns
- Seasonal/timing effects
- Electoral system specifics
- Coalition building potential

**MARKET ANALYSIS:**
- Betting odds vs poll numbers
- Market efficiency gaps
- Insider trading indicators
- Volume és liquidity analysis
- Arbitrage opportunities
- Late money movements

**FOGADÁSI LEHETŐSÉGEK:**
- Overall winner
- Popular vote vs Electoral College
- Margin of victory
- Swing state outcomes
- Turnout predictions
- Third party performance
- Referendum Yes/No results

**RISK FACTORS:**
- Polling errors historical precedent
- Late-breaking news impact
- Weather effects on turnout
- Legal challenges potential
- Foreign interference concerns
- Technology/voting system issues

**DEMOGRAPHIC INSIGHTS:**
- Youth voter mobilization
- Minority voter patterns
- Rural vs Urban divide
- Education level correlations
- Income bracket preferences
- Gender gap analysis

**MEDIA ÉS CAMPAIGN ANALYSIS:**
- Advertising spend effectiveness
- Social media influence
- Ground game organization
- Fundraising momentum
- Volunteer enthusiasm
- Celebrity endorsements impact

Adj konkrét fogadási stratégiát és kockázat management tanácsokat!`
    },
    cricket: {
        name: "Cricket",
        icon: "🏏",
        category: "traditional",
        promptTitle: "Cricket Match Betting Analysis",
        prompt: `Végezz részletes krikett mérkőzés elemzést:

**MATCH INFORMATION:**
- Teams: [TEAM1] vs [TEAM2]
- Format: [TEST/ODI/T20/T10]
- Venue: [GROUND NAME]
- Pitch report: [PITCH CONDITIONS]
- Weather: [FORECAST]
- Date: [DATE]

**TEAM ANALYSIS:**
1. **Current form**: Recent match results és performance
2. **Squad strength**: Key players availability
3. **Home/Away record**: Venue specific performance
4. **Format expertise**: Specialization in match format
5. **Head-to-head**: Historical matchup results
6. **Team balance**: Batting/Bowling/Fielding strength

**PITCH ÉS CONDITIONS:**
- Pitch type (batting/bowling friendly)
- Weather impact on play
- Dew factor (day/night matches)
- Ground dimensions és boundaries
- Historical scores at venue
- Toss advantage analysis

**BATTING ANALYSIS:**
- Top order stability
- Middle order depth
- Power hitters capability
- Spin/Pace handling ability
- Pressure situation performance
- Strike rate vs average balance

**BOWLING ATTACK:**
- Pace vs Spin balance
- Death bowling expertise (T20/ODI)
- New ball specialists
- Wicket-taking ability
- Economy rate consistency
- Fielding support quality

**KEY PLAYER MATCHUPS:**
- Star batsman vs key bowlers
- Spin vs pace preferences
- Left-hand vs right-hand advantages
- Experience vs youth factor
- Captain leadership impact

**BETTING MARKETS:**
- Match winner
- Toss winner
- Total runs Over/Under
- Highest opening partnership
- Man of the Match
- Method of dismissal
- Century/Half-century scorer
- Wicket-keeper catches/stumpings

**FORMAT SPECIFIC FACTORS:**
**Test Cricket:**
- Declaration timing
- Follow-on scenarios
- Weather interruption impact
- Day 5 pitch deterioration

**Limited Overs:**
- Powerplay utilization
- Death overs execution
- DLS method scenarios
- Chasing vs defending records

**T20 Specific:**
- Super Over possibilities
- Impact player usage
- Strategic timeouts
- Boundary hitting ability

**WEATHER CONTINGENCY:**
- Rain interruption probability
- Revised target calculations
- Indoor/covered venue advantages
- Seasonal weather patterns

Adj részletes match prediction és betting strategy!`
    },
    golf: {
        name: "Golf",
        icon: "⛳",
        category: "precision",
        promptTitle: "Golf Tournament Betting Guide",
        prompt: `Készíts professzionális golf torna elemzést:

**TOURNAMENT DETAILS:**
- Tournament: [TOURNAMENT NAME]
- Course: [COURSE NAME]
- Par: [TOTAL PAR]
- Yardage: [TOTAL YARDS]
- Field size: [NUMBER OF PLAYERS]
- Prize money: [PURSE]
- Date: [DATE]

**COURSE ANALYSIS:**
1. **Course setup**: Length, par distribution
2. **Key holes**: Risk/reward opportunities
3. **Weather conditions**: Wind, rain forecast
4. **Rough thickness**: Penalty for missed fairways
5. **Green speed**: Putting difficulty factor
6. **Historical scoring**: Average winning scores

**PLAYER FORM ANALYSIS:**
- Recent tournament results
- Strokes gained statistics
- Course history performance
- Current world ranking
- Injury status és fitness
- Equipment changes impact

**STATISTICAL BREAKDOWN:**
- Driving distance és accuracy
- Greens in regulation percentage
- Putting average
- Sand save percentage
- Scrambling ability
- Scoring average trends

**COURSE FIT ANALYSIS:**
- Long vs short hitters advantage
- Accuracy vs distance priority
- Links vs Parkland specialists
- Altitude/climate adjustments
- Left-handed player advantages
- Local knowledge benefits

**BETTING MARKETS:**
- Tournament winner (Outright)
- Top 5/10/20 finishes
- Head-to-head matchups
- First round leader
- Hole-in-one occurrence
- Playoff possibility
- Winning score prediction
- Cut line betting

**WEATHER IMPACT:**
- Wind direction és strength
- Rain delay possibilities
- Temperature effects on ball flight
- Seasonal course conditions
- Tee time advantages/disadvantages

**PSYCHOLOGICAL FACTORS:**
- Major championship pressure
- Home country advantage
- Defending champion curse
- First-time winner potential
- Veteran experience value
- Momentum from recent wins

**VALUE BETTING OPPORTUNITIES:**
- Overlooked international players
- Course specialists at long odds
- Form players with good course fit
- Each-way betting value
- In-play betting opportunities

**CUT ANALYSIS:**
- Projected cut line
- Players likely to miss cut
- Second round weather impact
- Tee time distribution effects

**FINAL ROUND FACTORS:**
- Sunday performance history
- Closing ability under pressure
- Head-to-head final group dynamics
- Weather forecast for final day
- Leaderboard congestion impact

Adj részletes tournament strategy és betting recommendations!`
    },
    volleyball: {
        name: "Volleyball",
        icon: "🏐",
        category: "traditional",
        promptTitle: "Volleyball Match Analysis",
        prompt: `Végezz részletes röplabda mérkőzés elemzést:

**MATCH INFORMATION:**
- Teams: [TEAM1] vs [TEAM2]
- League: [LEAGUE/TOURNAMENT]
- Format: [BEST OF 3/5]
- Venue: [LOCATION]
- Court type: [INDOOR/BEACH]
- Date: [DATE]

**TEAM ANALYSIS:**
1. **Current standings**: League position és form
2. **Key players**: Star players és their roles
3. **Team chemistry**: Playing together duration
4. **Coaching strategy**: Tactical approach
5. **Home court advantage**: Crowd support impact
6. **Injury report**: Missing key players

**TECHNICAL BREAKDOWN:**
- Attack efficiency percentage
- Block effectiveness
- Serve accuracy és aces
- Reception quality
- Setting precision
- Defensive coverage

**POSITIONAL ANALYSIS:**
- Outside hitters performance
- Middle blockers effectiveness
- Opposite hitters impact
- Setter distribution skills
- Libero defensive contribution
- Bench depth quality

**TACTICAL ELEMENTS:**
- Offensive system (5-1, 6-2, 4-2)
- Blocking schemes
- Serving strategies
- Substitution patterns
- Timeout usage effectiveness
- Rotation strengths/weaknesses

**PHYSICAL ÉS MENTAL FACTORS:**
- Team height és reach advantages
- Jumping ability és athleticism
- Endurance for long matches
- Mental toughness in close sets
- Experience in pressure situations
- Travel fatigue considerations

**BETTING MARKETS:**
- Match winner
- Set betting (3-0, 3-1, 3-2 etc.)
- Total sets Over/Under
- First set winner
- Handicap betting
- Total points in match
- Longest set prediction

**SET-BY-SET ANALYSIS:**
- Opening set importance
- Momentum swing factors
- Timeout strategic usage
- Substitution impact timing
- Service rotation advantages
- Closing set mental strength

**STATISTICAL TRENDS:**
- Head-to-head record
- Recent form (last 10 matches)
- Home vs away performance
- Performance against similar opponents
- Set win percentage
- Come-from-behind ability

**SPECIAL CONSIDERATIONS:**
**Indoor Volleyball:**
- Court surface impact
- Ceiling height effects
- Lighting conditions
- Crowd noise factor

**Beach Volleyball:**
- Weather conditions (wind, sun)
- Sand court adjustments
- Two-player team dynamics
- Endurance factor outdoors

**LIVE BETTING OPPORTUNITIES:**
- In-play set winners
- Next point winner
- Service break predictions
- Momentum shift identification
- Timeout effectiveness

Adj részletes match prediction és betting strategy!`
    },
    darts: {
        name: "Darts",
        icon: "🎯",
        category: "precision",
        promptTitle: "Darts Match Betting Analysis",
        prompt: `Készíts professzionális darts mérkőzés elemzést:

**MATCH SETUP:**
- Players: [PLAYER1] vs [PLAYER2]
- Tournament: [TOURNAMENT NAME]
- Format: [LEGS/SETS FORMAT]
- Stage: [ROUND/FINAL]
- Venue: [LOCATION]
- Date: [DATE]

**PLAYER PROFILE ANALYSIS:**
1. **Current form**: Recent tournament results
2. **Ranking position**: Order of Merit/World ranking
3. **Head-to-head record**: Previous encounters
4. **Tournament history**: Performance at this event
5. **Stage experience**: Big match temperament
6. **Physical condition**: Fitness és consistency

**TECHNICAL STATISTICS:**
- Three-dart average
- 180s per leg frequency
- Checkout percentage
- First 9 dart average
- Double percentage
- 100+ scores frequency

**MENTAL ÉS PSYCHOLOGICAL:**
- Pressure handling ability
- Crowd interaction comfort
- Comeback capability
- Concentration levels
- Confidence indicators
- Rivalry factor impact

**PLAYING STYLE ANALYSIS:**
- Scoring power vs finishing
- Rhythm preferences
- Favorite doubles
- Left-handed advantages
- Throwing stance consistency
- Pre-shot routine importance

**VENUE ÉS CONDITIONS:**
- Stage lighting effects
- Crowd support/hostility
- Oche conditions
- Board setup consistency
- Temperature és humidity
- TV table experience

**BETTING MARKETS:**
- Match winner
- Handicap betting
- Total legs Over/Under
- Highest checkout
- Most 180s
- First to X legs
- Correct score prediction
- Tournament outright winner

**FORMAT SPECIFIC FACTORS:**
**Legs Format:**
- Fast start importance
- Momentum maintenance
- Break of throw significance
- Finishing under pressure

**Sets Format:**
- Set distribution strategy
- Mental reset between sets
- Stamina for longer matches
- Tactical adjustments

**STATISTICAL TRENDS:**
- Average leg duration
- Break percentage
- Comeback frequency
- Performance by session
- Weekend vs weekday form
- TV vs floor performance

**CHECKOUT ANALYSIS:**
- Favorite finishing routes
- Under pressure finishing
- Big checkout capability
- Double trouble tendencies
- Left-handed checkout advantages

**TOURNAMENT PROGRESSION:**
- Early round vs later stages
- Fatigue accumulation
- Confidence building through rounds
- Draw difficulty assessment
- Potential final opponents

**VALUE BETTING SPOTS:**
- Underrated players
- Form vs reputation gaps
- Stylistic matchup advantages
- Venue-specific performance
- Motivation level differences

Adj részletes match analysis és betting recommendations!`
    }
};

// Perplexity API configuration
const PERPLEXITY_CONFIG = {
    apiUrl: 'https://api.perplexity.ai/chat/completions',
    model: 'sonar-pro',
    headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
    }
};

// Global variables
let currentSport = null;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let customPrompts = JSON.parse(localStorage.getItem('customPrompts')) || {};
let copyCounts = JSON.parse(localStorage.getItem('copyCounts')) || {};
let currentTheme = localStorage.getItem('theme') || 'dark';
let currentPage = 1;
const itemsPerPage = 12;
let isLoading = false;
let apiKey = localStorage.getItem('perplexity_api_key') || '';

// Merge custom prompts with default sports data
const allSportsData = { ...sportsData, ...customPrompts };

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    applyTheme();
    setupEventListeners();
    renderSportsGrid();
    setupIntersectionObserver();
    checkApiKey();
}

function checkApiKey() {
    if (!apiKey) {
        showApiKeyModal();
    }
}

function showApiKeyModal() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay visible';
    modal.innerHTML = `
        <div class="modal-content">
            <h3 class="text-2xl font-bold mb-6 text-white">Perplexity API Key Required</h3>
            <p class="text-slate-300 mb-4">To use the AI-powered betting analysis, please enter your Perplexity API key:</p>
            <input type="password" id="api-key-input" placeholder="Enter your Perplexity API key..." 
                   class="w-full p-3 rounded-lg modal-input mb-4">
            <div class="flex justify-end gap-4">
                <button id="save-api-key" class="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition">
                    Save & Continue
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    document.getElementById('save-api-key').addEventListener('click', () => {
        const key = document.getElementById('api-key-input').value.trim();
        if (key) {
            apiKey = key;
            localStorage.setItem('perplexity_api_key', key);
            document.body.removeChild(modal);
        } else {
            alert('Please enter a valid API key');
        }
    });
}

function setupEventListeners() {
    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    
    // Search functionality
    document.getElementById('search-input').addEventListener('input', handleSearch);
    
    // Category filters
    document.querySelectorAll('.category-filter').forEach(button => {
        button.addEventListener('click', handleCategoryFilter);
    });
    
    // Add new prompt button
    document.getElementById('add-new-prompt-btn').addEventListener('click', () => openEditModal());
    
    // Prompt container close button
    document.getElementById('close-prompt-button').addEventListener('click', closePrompt);
    
    // Edit and copy buttons
    document.getElementById('edit-button').addEventListener('click', () => openEditModal(currentSport));
    document.getElementById('copy-button').addEventListener('click', handleCopyPrompt);
    
    // Modal event listeners
    setupModalEventListeners();
    
    // Tools event listeners
    setupToolsEventListeners();
    
    // Effectiveness slider
    document.getElementById('effectiveness-slider').addEventListener('input', updateEffectivenessValue);
    
    // Specific match/date options
    setupSpecificOptionsListeners();
}

function setupSpecificOptionsListeners() {
    const matchCheckbox = document.getElementById('specific-match-checkbox');
    const dateCheckbox = document.getElementById('specific-date-checkbox');
    const matchContainer = document.getElementById('match-input-container');
    const dateContainer = document.getElementById('date-input-container');
    
    matchCheckbox.addEventListener('change', () => {
        matchContainer.style.display = matchCheckbox.checked ? 'block' : 'none';
        updatePromptWithSpecifics();
    });
    
    dateCheckbox.addEventListener('change', () => {
        dateContainer.style.display = dateCheckbox.checked ? 'block' : 'none';
        updatePromptWithSpecifics();
    });
    
    document.getElementById('specific-match-input').addEventListener('input', updatePromptWithSpecifics);
    document.getElementById('specific-date-input').addEventListener('change', updatePromptWithSpecifics);
}

function updatePromptWithSpecifics() {
    if (!currentSport) return;
    
    const sport = allSportsData[currentSport];
    let prompt = sport.prompt;
    
    const matchCheckbox = document.getElementById('specific-match-checkbox');
    const dateCheckbox = document.getElementById('specific-date-checkbox');
    const matchInput = document.getElementById('specific-match-input').value;
    const dateInput = document.getElementById('specific-date-input').value;
    
    if (matchCheckbox.checked && matchInput) {
        prompt = prompt.replace(/\[CSAPAT1\] vs \[CSAPAT2\]/g, matchInput);
        prompt = prompt.replace(/\[TEAM1\] vs \[TEAM2\]/g, matchInput);
        prompt = prompt.replace(/\[FIGHTER1\] vs \[FIGHTER2\]/g, matchInput);
        prompt = prompt.replace(/\[PLAYER1\] vs \[PLAYER2\]/g, matchInput);
        prompt = prompt.replace(/\[JÁTÉKOS1\] vs \[JÁTÉKOS2\]/g, matchInput);
    }
    
    if (dateCheckbox.checked && dateInput) {
        const formattedDate = new Date(dateInput).toLocaleDateString('hu-HU');
        prompt = prompt.replace(/\[DÁTUM\]/g, formattedDate);
        prompt = prompt.replace(/\[DATE\]/g, formattedDate);
    }
    
    document.getElementById('prompt-text').value = prompt;
}

function updateEffectivenessValue() {
    const slider = document.getElementById('effectiveness-slider');
    const valueDisplay = document.getElementById('effectiveness-value');
    valueDisplay.textContent = slider.value + '%';
}

function setupModalEventListeners() {
    // Edit modal
    document.getElementById('cancel-edit-btn').addEventListener('click', closeEditModal);
    document.getElementById('edit-form').addEventListener('submit', handleEditSubmit);
    
    // Close modals when clicking outside
    document.getElementById('edit-modal').addEventListener('click', (e) => {
        if (e.target.id === 'edit-modal') closeEditModal();
    });
    
    document.getElementById('alert-modal').addEventListener('click', (e) => {
        if (e.target.id === 'alert-modal') closeAlertModal();
    });
}

function setupToolsEventListeners() {
    // Export/Import/Reset buttons (both main and inline)
    ['export-btn', 'export-btn-inline'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.addEventListener('click', exportData);
    });
    
    ['import-input', 'import-input-inline'].forEach(id => {
        const input = document.getElementById(id);
        if (input) input.addEventListener('change', importData);
    });
    
    ['reset-btn', 'reset-btn-inline'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.addEventListener('click', () => showConfirmDialog(
            'Reset to Default',
            'Are you sure you want to reset all prompts to default? This will delete all custom prompts and favorites.',
            resetToDefault
        ));
    });
}

function setupIntersectionObserver() {
    const sentinel = document.getElementById('load-more-sentinel');
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !isLoading) {
            loadMoreSports();
        }
    });
    observer.observe(sentinel);
}

function applyTheme() {
    document.body.className = currentTheme === 'light' ? 'text-white light-theme' : 'text-white';
    const themeIcon = document.getElementById('theme-icon');
    themeIcon.textContent = currentTheme === 'light' ? '🌙' : '☀️';
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
    applyTheme();
}

function renderSportsGrid(page = 1) {
    const grid = document.getElementById('sports-grid');
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const activeCategory = document.querySelector('.category-filter.category-badge')?.dataset.category || 'all';
    
    let filteredSports = Object.entries(allSportsData).filter(([key, sport]) => {
        const matchesSearch = sport.name.toLowerCase().includes(searchTerm);
        const matchesCategory = activeCategory === 'all' || 
                               (activeCategory === 'favorites' && favorites.includes(key)) ||
                               sport.category === activeCategory;
        return matchesSearch && matchesCategory;
    });
    
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const sportsToShow = filteredSports.slice(0, endIndex);
    
    if (page === 1) {
        grid.innerHTML = '';
    }
    
    sportsToShow.slice(startIndex).forEach(([key, sport], index) => {
        const card = createSportCard(key, sport, startIndex + index);
        grid.appendChild(card);
    });
    
    // Show/hide no results message
    const noResults = document.getElementById('no-results');
    noResults.style.display = filteredSports.length === 0 ? 'block' : 'none';
    
    // Update load more sentinel visibility
    const sentinel = document.getElementById('load-more-sentinel');
    sentinel.style.display = sportsToShow.length < filteredSports.length ? 'block' : 'none';
}

function createSportCard(key, sport, index) {
    const card = document.createElement('div');
    card.className = 'sport-card rounded-2xl p-4 text-center cursor-pointer relative animated';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const isFavorite = favorites.includes(key);
    const copyCount = copyCounts[key] || 0;
    
    card.innerHTML = `
        <div class="favorite-star ${isFavorite ? 'is-favorite' : ''}" data-sport="${key}">⭐</div>
        ${copyCount > 0 ? `<div class="absolute top-2 left-2 bg-blue-600 text-white rounded-full w-6 h-6 text-xs font-bold copy-counter">${copyCount}</div>` : ''}
        <div class="text-4xl mb-3">${sport.icon}</div>
        <h3 class="font-semibold text-lg">${sport.name}</h3>
        <p class="text-sm text-slate-400 mt-1 capitalize">${sport.category}</p>
    `;
    
    // Add click event for the card
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('favorite-star')) {
            selectSport(key);
        }
    });
    
    // Add favorite star click event
    const favoriteStarElement = card.querySelector('.favorite-star');
    favoriteStarElement.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(key);
    });
    
    return card;
}

function loadMoreSports() {
    if (isLoading) return;
    isLoading = true;
    currentPage++;
    
    setTimeout(() => {
        renderSportsGrid(currentPage);
        isLoading = false;
    }, 300);
}

function selectSport(sportKey) {
    currentSport = sportKey;
    const sport = allSportsData[sportKey];
    
    // Update selected state
    document.querySelectorAll('.sport-card').forEach(card => card.classList.remove('selected'));
    event.currentTarget.classList.add('selected');
    
    // Update prompt display
    document.getElementById('prompt-title').textContent = sport.promptTitle;
    document.getElementById('prompt-category').textContent = sport.category.charAt(0).toUpperCase() + sport.category.slice(1);
    document.getElementById('prompt-text').value = sport.prompt;
    
    // Update sport icon in specific match options
    document.getElementById('sport-icon').textContent = sport.icon;
    
    // Show specific match options for applicable sports
    const specificOptions = document.getElementById('specific-match-options');
    const applicableSports = ['football', 'basketball', 'tennis', 'boxing', 'mma', 'cricket', 'volleyball'];
    specificOptions.style.display = applicableSports.includes(sportKey) ? 'block' : 'none';
    
    // Show prompt container with animation
    const container = document.getElementById('prompt-container');
    container.classList.remove('prompt-hidden');
    container.classList.add('prompt-visible');
    
    // Show inline tools
    document.getElementById('tools-inline').style.display = 'flex';
    
    // Scroll to prompt
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function closePrompt() {
    const container = document.getElementById('prompt-container');
    container.classList.remove('prompt-visible');
    container.classList.add('prompt-hidden');
    
    // Hide inline tools
    document.getElementById('tools-inline').style.display = 'none';
    
    // Clear selected state
    document.querySelectorAll('.sport-card').forEach(card => card.classList.remove('selected'));
    currentSport = null;
}

async function handleCopyPrompt() {
    if (!currentSport) return;
    
    const copyButton = document.getElementById('copy-button');
    const copyText = document.getElementById('copy-text');
    const feedback = document.getElementById('copy-feedback');
    
    // Show loading state
    copyButton.disabled = true;
    copyText.textContent = 'Analyzing...';
    
    try {
        // Get the current prompt text (with any modifications)
        let promptText = document.getElementById('prompt-text').value;
        
        // If API key is available, get AI analysis
        if (apiKey) {
            const aiAnalysis = await getPerplexityAnalysis(promptText);
            if (aiAnalysis) {
                promptText = aiAnalysis;
            }
        }
        
        // Copy to clipboard
        await navigator.clipboard.writeText(promptText);
        
        // Update copy count
        copyCounts[currentSport] = (copyCounts[currentSport] || 0) + 1;
        localStorage.setItem('copyCounts', JSON.stringify(copyCounts));
        
        // Update UI
        updateCopyCounter(currentSport);
        
        // Show success feedback
        feedback.style.opacity = '1';
        copyText.textContent = 'Copied!';
        
        setTimeout(() => {
            feedback.style.opacity = '0';
            copyText.textContent = 'Copy';
            copyButton.disabled = false;
        }, 2000);
        
    } catch (error) {
        console.error('Copy failed:', error);
        copyText.textContent = 'Error';
        setTimeout(() => {
            copyText.textContent = 'Copy';
            copyButton.disabled = false;
        }, 2000);
    }
}

async function getPerplexityAnalysis(prompt) {
    if (!apiKey) return null;
    
    try {
        showLoadingOverlay();
        
        const response = await fetch(PERPLEXITY_CONFIG.apiUrl, {
            method: 'POST',
            headers: {
                ...PERPLEXITY_CONFIG.headers,
                'authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: PERPLEXITY_CONFIG.model,
                messages: [
                    {
                        role: 'system',
                        content: 'Te egy professzionális sportfogadási szakértő vagy. Elemezd a megadott sportesemény fogadási lehetőségeit és adj konkrét, értékes tippeket. Válaszolj magyarul, strukturáltan és részletesen.'
                    },
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                search_mode: 'web'
            })
        });
        
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }
        
        const data = await response.json();
        hideLoadingOverlay();
        
        return data.choices[0]?.message?.content || null;
        
    } catch (error) {
        console.error('Perplexity API Error:', error);
        hideLoadingOverlay();
        showErrorMessage('Failed to get AI analysis. Using original prompt.');
        return null;
    }
}

function showLoadingOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'loading-overlay';
    overlay.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    overlay.innerHTML = `
        <div class="bg-slate-800 rounded-2xl p-8 text-center max-w-md mx-4">
            <div class="loading-spinner mb-4"></div>
            <h3 class="text-xl font-bold text-white mb-2">AI Analysis in Progress</h3>
            <p class="text-slate-300">Getting real-time betting insights...</p>
            <div class="mt-4">
                <div class="progress-bar bg-slate-700 rounded-full h-2">
                    <div class="progress-fill bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full"></div>
                </div>
            </div>
        </div>
    `;
    
    // Add CSS for loading animation
    const style = document.createElement('style');
    style.textContent = `
        .loading-spinner {
            width: 40px;
            height: 40px;
            border: 4px solid #334155;
            border-top: 4px solid #3b82f6;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .progress-fill {
            width: 0%;
            animation: progress 3s ease-in-out infinite;
        }
        
        @keyframes progress {
            0%, 100% { width: 0%; }
            50% { width: 100%; }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(overlay);
}

function hideLoadingOverlay() {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) {
        overlay.remove();
    }
}

function showErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'fixed top-4 right-4 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    errorDiv.textContent = message;
    
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

function updateCopyCounter(sportKey) {
    const cards = document.querySelectorAll('.sport-card');
    cards.forEach(card => {
        const star = card.querySelector('.favorite-star');
        if (star && star.dataset.sport === sportKey) {
            const existingCounter = card.querySelector('.copy-counter');
            const count = copyCounts[sportKey] || 0;
            
            if (count > 0) {
                if (existingCounter) {
                    existingCounter.textContent = count;
                } else {
                    const counter = document.createElement('div');
                    counter.className = 'absolute top-2 left-2 bg-blue-600 text-white rounded-full w-6 h-6 text-xs font-bold copy-counter';
                    counter.textContent = count;
                    card.appendChild(counter);
                }
            } else if (existingCounter) {
                existingCounter.remove();
            }
        }
    });
}

function toggleFavorite(sportKey) {
    const index = favorites.indexOf(sportKey);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(sportKey);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    // Update star appearance
    const star = document.querySelector(`[data-sport="${sportKey}"]`);
    if (star) {
        star.classList.toggle('is-favorite');
    }
    
    // If currently showing favorites, re-render
    const activeCategory = document.querySelector('.category-filter.category-badge')?.dataset.category;
    if (activeCategory === 'favorites') {
        currentPage = 1;
        renderSportsGrid();
    }
}

function handleSearch() {
    currentPage = 1;
    renderSportsGrid();
}

function handleCategoryFilter(event) {
    // Update active category button
    document.querySelectorAll('.category-filter').forEach(btn => {
        btn.classList.remove('category-badge');
        btn.classList.add('bg-slate-700', 'hover:bg-slate-600');
    });
    
    event.target.classList.add('category-badge');
    event.target.classList.remove('bg-slate-700', 'hover:bg-slate-600');
    
    currentPage = 1;
    renderSportsGrid();
}

function openEditModal(sportKey = null) {
    const modal = document.getElementById('edit-modal');
    const title = document.getElementById('modal-title');
    const form = document.getElementById('edit-form');
    
    if (sportKey) {
        // Edit existing sport
        const sport = allSportsData[sportKey];
        title.textContent = 'Edit Prompt';
        document.getElementById('edit-key').value = sportKey;
        document.getElementById('edit-name').value = sport.name;
        document.getElementById('edit-icon').value = sport.icon;
        document.getElementById('edit-category').value = sport.category;
        document.getElementById('edit-prompt-title').value = sport.promptTitle;
        document.getElementById('edit-prompt').value = sport.prompt;
    } else {
        // Add new sport
        title.textContent = 'Add New Prompt';
        form.reset();
        document.getElementById('edit-key').value = '';
    }
    
    modal.classList.add('visible');
}

function closeEditModal() {
    document.getElementById('edit-modal').classList.remove('visible');
}

function handleEditSubmit(event) {
    event.preventDefault();
    
    const key = document.getElementById('edit-key').value || generateKey();
    const name = document.getElementById('edit-name').value;
    const icon = document.getElementById('edit-icon').value;
    const category = document.getElementById('edit-category').value;
    const promptTitle = document.getElementById('edit-prompt-title').value;
    const prompt = document.getElementById('edit-prompt').value;
    
    const sportData = {
        name,
        icon,
        category,
        promptTitle,
        prompt
    };
    
    // Save to custom prompts
    customPrompts[key] = sportData;
    allSportsData[key] = sportData;
    localStorage.setItem('customPrompts', JSON.stringify(customPrompts));
    
    closeEditModal();
    currentPage = 1;
    renderSportsGrid();
    
    // If this was the currently selected sport, update the display
    if (currentSport === key) {
        selectSport(key);
    }
}

function generateKey() {
    return 'custom_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

function exportData() {
    const data = {
        customPrompts,
        favorites,
        copyCounts,
        exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sports-betting-prompts-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            
            if (data.customPrompts) {
                Object.assign(customPrompts, data.customPrompts);
                Object.assign(allSportsData, data.customPrompts);
                localStorage.setItem('customPrompts', JSON.stringify(customPrompts));
            }
            
            if (data.favorites) {
                favorites = [...new Set([...favorites, ...data.favorites])];
                localStorage.setItem('favorites', JSON.stringify(favorites));
            }
            
            if (data.copyCounts) {
                Object.assign(copyCounts, data.copyCounts);
                localStorage.setItem('copyCounts', JSON.stringify(copyCounts));
            }
            
            currentPage = 1;
            renderSportsGrid();
            
            showSuccessMessage('Data imported successfully!');
        } catch (error) {
            showErrorMessage('Invalid file format. Please select a valid JSON file.');
        }
    };
    reader.readAsText(file);
    
    // Reset file input
    event.target.value = '';
}

function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    successDiv.textContent = message;
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.remove();
    }, 3000);
}

function resetToDefault() {
    // Clear all custom data
    customPrompts = {};
    favorites = [];
    copyCounts = {};
    
    // Clear localStorage
    localStorage.removeItem('customPrompts');
    localStorage.removeItem('favorites');
    localStorage.removeItem('copyCounts');
    
    // Reset allSportsData to original
    Object.keys(allSportsData).forEach(key => {
        if (!sportsData[key]) {
            delete allSportsData[key];
        }
    });
    
    // Re-render
    currentPage = 1;
    renderSportsGrid();
    closePrompt();
    
    showSuccessMessage('Reset to default successfully!');
}

function showConfirmDialog(title, message, onConfirm) {
    const modal = document.getElementById('alert-modal');
    const modalTitle = document.getElementById('alert-modal-title');
    const modalMessage = document.getElementById('alert-modal-message');
    const buttonsContainer = document.getElementById('alert-modal-buttons');
    
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    
    buttonsContainer.innerHTML = `
        <button id="confirm-btn" class="px-6 py-2 rounded-lg bg-red-600 hover:bg-red-500 transition">Confirm</button>
        <button id="cancel-btn" class="px-6 py-2 rounded-lg bg-slate-600 hover:bg-slate-500 transition">Cancel</button>
    `;
    
    document.getElementById('confirm-btn').addEventListener('click', () => {
        onConfirm();
        closeAlertModal();
    });
    
    document.getElementById('cancel-btn').addEventListener('click', closeAlertModal);
    
    modal.classList.add('visible');
}

function closeAlertModal() {
    document.getElementById('alert-modal').classList.remove('visible');
}

// Mobile optimizations
function handleMobileOptimizations() {
    if (window.innerWidth <= 640) {
        const addButton = document.getElementById('add-new-prompt-btn');
        addButton.classList.add('fab');
        addButton.innerHTML = '+';
    }
}

// Initialize mobile optimizations
window.addEventListener('resize', handleMobileOptimizations);
handleMobileOptimizations();