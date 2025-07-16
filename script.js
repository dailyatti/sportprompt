// Sports Betting Prompt Library - Enhanced with Perplexity AI Integration
// All original functionality preserved with new sports and AI features

// Default sports data with original + 10 new sports
const defaultSportsData = {
    // Original Traditional Sports
    football: {
        name: "Football",
        icon: "⚽",
        category: "traditional",
        promptTitle: "Football Betting Analysis",
        prompt: `You are a professional football betting analyst with deep expertise in match analysis, team performance, and betting markets. Please provide a comprehensive betting analysis for the upcoming match including:

1. **Team Form Analysis**
   - Recent performance (last 5-10 matches)
   - Home vs away form comparison
   - Goal scoring and defensive statistics

2. **Head-to-Head Record**
   - Historical matchups between teams
   - Recent encounters and patterns
   - Home advantage factors

3. **Key Player Analysis**
   - Injury reports and suspensions
   - Key player form and impact
   - Tactical matchups

4. **Betting Market Analysis**
   - Value bets identification
   - Over/Under goals analysis
   - Both teams to score probability
   - Correct score predictions

5. **Risk Assessment**
   - Confidence level for each bet
   - Bankroll management recommendations
   - Alternative betting options

Please format your analysis professionally with clear reasoning for each recommendation and include probability percentages where applicable.`,
        copyCount: 0,
        isFavorite: false
    },
    
    basketball: {
        name: "Basketball",
        icon: "🏀",
        category: "traditional",
        promptTitle: "Basketball Betting Strategy",
        prompt: `As an expert basketball betting analyst, provide a detailed analysis for the upcoming game focusing on:

1. **Team Performance Metrics**
   - Offensive and defensive ratings
   - Pace of play analysis
   - Recent form and momentum

2. **Player Impact Analysis**
   - Star player performance and matchups
   - Injury reports and lineup changes
   - Bench depth comparison

3. **Statistical Trends**
   - Points per game averages
   - Shooting percentages and efficiency
   - Rebounding and turnover statistics

4. **Betting Opportunities**
   - Point spread analysis
   - Total points over/under
   - Player prop bets
   - Quarter/half betting strategies

5. **Advanced Analytics**
   - Expected possession value
   - Clutch performance metrics
   - Home court advantage impact

Provide specific betting recommendations with confidence levels and suggested stake sizes based on bankroll management principles.`,
        copyCount: 0,
        isFavorite: false
    },

    tennis: {
        name: "Tennis",
        icon: "🎾",
        category: "traditional",
        promptTitle: "Tennis Match Analysis",
        prompt: `You are a professional tennis betting expert. Analyze the upcoming match with focus on:

1. **Player Form & Fitness**
   - Recent tournament results
   - Physical condition and injury status
   - Playing surface preferences

2. **Head-to-Head Analysis**
   - Historical matchup record
   - Surface-specific performance
   - Recent encounters analysis

3. **Playing Style Matchup**
   - Serve and return statistics
   - Baseline vs net play tendencies
   - Mental toughness in crucial moments

4. **Betting Market Evaluation**
   - Match winner odds analysis
   - Set betting opportunities
   - Game handicap markets
   - Over/under total games

5. **Weather & Conditions**
   - Court surface impact
   - Weather conditions effect
   - Tournament pressure factors

Provide clear betting recommendations with risk assessment and bankroll allocation suggestions.`,
        copyCount: 0,
        isFavorite: false
    },

    baseball: {
        name: "Baseball",
        icon: "⚾",
        category: "traditional",
        promptTitle: "Baseball Betting Analysis",
        prompt: `As a professional baseball betting analyst, provide comprehensive analysis including:

1. **Pitching Matchup Analysis**
   - Starting pitcher statistics and form
   - Bullpen strength and usage
   - Pitcher vs batter historical data

2. **Team Offensive Analysis**
   - Batting averages and on-base percentages
   - Power hitting capabilities
   - Performance against specific pitch types

3. **Situational Factors**
   - Home field advantage
   - Weather conditions impact
   - Day vs night game performance

4. **Betting Market Opportunities**
   - Moneyline value assessment
   - Run line analysis
   - Total runs over/under
   - First 5 innings betting

5. **Advanced Metrics**
   - WHIP and ERA+ analysis
   - Defensive efficiency ratings
   - Clutch performance statistics

Include specific betting recommendations with confidence ratings and suggested unit allocation.`,
        copyCount: 0,
        isFavorite: false
    },

    hockey: {
        name: "Hockey",
        icon: "🏒",
        category: "traditional",
        promptTitle: "Hockey Betting Strategy",
        prompt: `You are an expert hockey betting analyst. Provide detailed analysis covering:

1. **Team Performance Analysis**
   - Goals for/against averages
   - Power play and penalty kill efficiency
   - Recent form and momentum

2. **Goaltending Analysis**
   - Starting goalie performance
   - Save percentage and goals against average
   - Performance in back-to-back games

3. **Matchup Factors**
   - Head-to-head record
   - Playing style compatibility
   - Home ice advantage

4. **Betting Market Assessment**
   - Puck line analysis
   - Total goals over/under
   - Period betting opportunities
   - Player prop markets

5. **Special Considerations**
   - Injury reports impact
   - Travel and rest factors
   - Playoff implications

Provide specific betting recommendations with risk levels and bankroll management advice.`,
        copyCount: 0,
        isFavorite: false
    },

    // New Sports Added
    leagueoflegends: {
        name: "League of Legends",
        icon: "🎮",
        category: "esports",
        promptTitle: "LoL Esports Betting Analysis",
        prompt: `As a professional League of Legends esports betting analyst, provide comprehensive match analysis including:

1. **Team Performance Analysis**
   - Recent tournament results and form
   - Win rate on current patch
   - Map-specific performance statistics
   - Team composition preferences

2. **Player Individual Analysis**
   - Key player performance metrics (KDA, CS/min, damage)
   - Champion pool depth and meta adaptation
   - Clutch performance in high-pressure situations
   - Recent roster changes impact

3. **Strategic Analysis**
   - Draft phase tendencies and priorities
   - Early game vs late game strengths
   - Objective control (Dragon, Baron, Towers)
   - Team fighting coordination

4. **Meta and Patch Analysis**
   - Current patch impact on team strategies
   - Champion tier list and ban priorities
   - Item build optimization trends
   - Professional scene adaptation speed

5. **Betting Market Opportunities**
   - Match winner odds evaluation
   - Map handicap betting
   - Total maps over/under
   - First blood/tower/dragon markets
   - Player performance props

6. **Tournament Context**
   - Stakes and pressure factors
   - Head-to-head historical performance
   - Regional strength comparisons
   - Playoff implications

Provide specific betting recommendations with confidence levels, risk assessment, and bankroll allocation suggestions based on esports betting principles.`,
        copyCount: 0,
        isFavorite: false
    },

    csgo: {
        name: "CS:GO/CS2",
        icon: "🔫",
        category: "esports",
        promptTitle: "CS:GO/CS2 Betting Strategy",
        prompt: `You are an expert CS:GO/CS2 esports betting analyst. Provide detailed match analysis covering:

1. **Team Tactical Analysis**
   - Map pool strengths and weaknesses
   - Strategic approach (aggressive vs defensive)
   - Anti-stratting capabilities
   - Recent tactical innovations

2. **Individual Player Performance**
   - Aim and mechanical skill consistency
   - Clutch round performance statistics
   - Role effectiveness (entry fragger, support, AWPer)
   - Recent form and confidence levels

3. **Map-Specific Analysis**
   - Win rates on specific maps
   - Side preferences (T-side vs CT-side)
   - Economic management on different maps
   - Pistol round success rates

4. **Meta and Equipment Analysis**
   - Weapon preference and effectiveness
   - Utility usage optimization
   - Economic strategies and force-buy tendencies
   - Adaptation to game updates

5. **Betting Market Evaluation**
   - Match winner assessment
   - Map handicap opportunities
   - Total rounds over/under
   - Pistol round winners
   - Player performance props (kills, ADR)

6. **Tournament and Pressure Factors**
   - LAN vs online performance differences
   - Experience in high-stakes matches
   - Team chemistry and communication
   - Recent roster stability

Include specific betting recommendations with risk analysis and suggested stake allocation for optimal bankroll management.`,
        copyCount: 0,
        isFavorite: false
    },

    formula1: {
        name: "Formula 1",
        icon: "🏎️",
        category: "motor",
        promptTitle: "Formula 1 Betting Analysis",
        prompt: `As a professional Formula 1 betting expert, provide comprehensive race analysis including:

1. **Driver Performance Analysis**
   - Current season form and points standing
   - Track-specific historical performance
   - Qualifying vs race day performance
   - Wet weather driving capabilities

2. **Team and Car Analysis**
   - Constructor championship position
   - Car performance on different track types
   - Recent technical developments and upgrades
   - Reliability and mechanical issues history

3. **Track-Specific Factors**
   - Circuit characteristics and layout
   - Historical race patterns and statistics
   - Overtaking opportunities and difficulty
   - Tire strategy implications

4. **Weather and Conditions**
   - Weather forecast impact on strategy
   - Temperature effects on tire performance
   - Rain probability and driver wet-weather skills
   - Track surface and grip levels

5. **Betting Market Opportunities**
   - Race winner odds analysis
   - Podium finish probabilities
   - Head-to-head driver matchups
   - Fastest lap betting
   - Constructor points markets
   - Safety car and DNF props

6. **Strategic Considerations**
   - Pit stop strategy predictions
   - Tire compound selection impact
   - Grid position advantages
   - Championship implications and team orders

Provide specific betting recommendations with confidence ratings and bankroll management advice for F1 betting success.`,
        copyCount: 0,
        isFavorite: false
    },

    mma: {
        name: "MMA/UFC",
        icon: "🥊",
        category: "traditional",
        promptTitle: "MMA/UFC Fight Analysis",
        prompt: `You are a professional MMA/UFC betting analyst. Provide comprehensive fight analysis including:

1. **Fighter Skill Analysis**
   - Striking technique and power
   - Grappling and ground game proficiency
   - Cardio and endurance levels
   - Fight IQ and adaptability

2. **Physical and Athletic Comparison**
   - Reach and height advantages
   - Weight cutting and physical condition
   - Age and career longevity factors
   - Injury history and recovery

3. **Fighting Style Matchup**
   - Striker vs grappler dynamics
   - Orthodox vs southpaw considerations
   - Pressure fighting vs counter-striking
   - Cage control and positioning

4. **Recent Form and Momentum**
   - Win/loss streak analysis
   - Quality of recent opponents
   - Performance in last 3-5 fights
   - Training camp and preparation reports

5. **Betting Market Assessment**
   - Moneyline value evaluation
   - Method of victory props
   - Round betting opportunities
   - Over/under total rounds
   - Performance bonuses potential

6. **Psychological and Intangible Factors**
   - Mental toughness and pressure handling
   - Crowd and venue impact
   - Motivation and career stakes
   - Historical performance in similar situations

Include specific betting recommendations with risk assessment and suggested unit allocation based on MMA betting principles.`,
        copyCount: 0,
        isFavorite: false
    },

    politics: {
        name: "Politics",
        icon: "🗳️",
        category: "logic",
        promptTitle: "Political Betting Analysis",
        prompt: `As a professional political betting analyst, provide comprehensive analysis for upcoming elections or political events:

1. **Polling Data Analysis**
   - Current polling averages and trends
   - Polling methodology and reliability assessment
   - Margin of error considerations
   - Historical polling accuracy for this region/election type

2. **Electoral Dynamics**
   - Voter turnout predictions and demographics
   - Swing state/constituency analysis
   - Electoral college or parliamentary seat projections
   - Key demographic group preferences

3. **Campaign Performance Evaluation**
   - Fundraising and campaign spending analysis
   - Media coverage and public appearances
   - Debate performance impact
   - Ground game and organization strength

4. **Economic and Social Factors**
   - Economic indicators impact on voting
   - Current events and their political implications
   - Approval ratings and incumbent advantage/disadvantage
   - Issue-based voting patterns

5. **Betting Market Opportunities**
   - Election winner odds assessment
   - Margin of victory betting
   - Swing state/constituency specific bets
   - Referendum outcome predictions
   - Political party performance markets

6. **Risk Factors and Considerations**
   - Polling error historical patterns
   - Late-deciding voter behavior
   - External events impact potential
   - Regulatory and legal considerations

7. **Historical Context**
   - Previous election results and patterns
   - Incumbent performance historically
   - Regional voting behavior trends
   - Seasonal and timing factors

Provide specific betting recommendations with confidence levels and risk management strategies for political betting markets.`,
        copyCount: 0,
        isFavorite: false
    },

    cricket: {
        name: "Cricket",
        icon: "🏏",
        category: "traditional",
        promptTitle: "Cricket Betting Analysis",
        prompt: `You are a professional cricket betting expert. Provide detailed match analysis covering:

1. **Team Form and Performance**
   - Recent series and match results
   - Batting and bowling averages
   - Home vs away performance records
   - Format-specific strengths (Test/ODI/T20)

2. **Player Analysis**
   - Key batsmen form and technique
   - Bowling attack effectiveness
   - All-rounder contributions
   - Captain and leadership impact

3. **Pitch and Conditions Analysis**
   - Pitch type and expected behavior
   - Weather conditions and impact
   - Ground dimensions and boundaries
   - Historical scoring patterns at venue

4. **Head-to-Head Record**
   - Historical matchup results
   - Performance at specific venues
   - Recent encounters analysis
   - Psychological advantages

5. **Betting Market Opportunities**
   - Match winner odds evaluation
   - Total runs over/under
   - Top batsman/bowler markets
   - Method of dismissal props
   - Session betting opportunities

6. **Strategic Considerations**
   - Toss impact and decision factors
   - Team composition and selection
   - Powerplay and death over strategies
   - DLS method implications (if applicable)

Include specific betting recommendations with confidence ratings and bankroll management advice for cricket betting success.`,
        copyCount: 0,
        isFavorite: false
    },

    golf: {
        name: "Golf",
        icon: "⛳",
        category: "precision",
        promptTitle: "Golf Tournament Betting",
        prompt: `As a professional golf betting analyst, provide comprehensive tournament analysis including:

1. **Player Form Analysis**
   - Recent tournament results and finishes
   - Scoring averages and consistency
   - Cut-making percentage
   - Performance under pressure

2. **Course-Specific Performance**
   - Historical performance at venue
   - Course setup and layout suitability
   - Driving accuracy vs distance requirements
   - Putting and short game demands

3. **Statistical Analysis**
   - Strokes gained metrics (tee-to-green, putting)
   - Greens in regulation percentage
   - Scrambling and recovery statistics
   - Performance in different weather conditions

4. **Field Strength Assessment**
   - Tournament field quality and depth
   - World ranking considerations
   - Player motivation and season goals
   - Injury reports and physical condition

5. **Betting Market Opportunities**
   - Outright winner value assessment
   - Top 5/10/20 finish markets
   - Head-to-head matchup betting
   - First round leader props
   - Cut line and missed cut betting

6. **External Factors**
   - Weather forecast and wind conditions
   - Course conditions and setup changes
   - Time zone and travel considerations
   - Tournament prestige and prize money

Provide specific betting recommendations with confidence levels and suggested stake allocation for optimal golf betting strategy.`,
        copyCount: 0,
        isFavorite: false
    },

    volleyball: {
        name: "Volleyball",
        icon: "🏐",
        category: "traditional",
        promptTitle: "Volleyball Match Analysis",
        prompt: `You are an expert volleyball betting analyst. Provide comprehensive match analysis covering:

1. **Team Performance Metrics**
   - Attack and block efficiency percentages
   - Serve and reception statistics
   - Recent match results and form
   - Set win/loss ratios

2. **Player Impact Analysis**
   - Key attackers and their effectiveness
   - Setter performance and distribution
   - Libero defensive contributions
   - Bench depth and rotation impact

3. **Tactical Analysis**
   - Offensive system preferences (6-2, 5-1, 4-2)
   - Defensive formations and strategies
   - Substitution patterns and timing
   - Timeout usage effectiveness

4. **Head-to-Head Comparison**
   - Historical matchup results
   - Performance in similar competitions
   - Home court advantage factors
   - Recent encounters analysis

5. **Betting Market Assessment**
   - Match winner odds evaluation
   - Set handicap opportunities
   - Total sets over/under
   - First set winner markets
   - Player performance props

6. **Physical and Mental Factors**
   - Team fitness and endurance levels
   - Injury reports and player availability
   - Pressure handling in crucial moments
   - Crowd support and venue atmosphere

Include specific betting recommendations with risk assessment and bankroll management strategies for volleyball betting.`,
        copyCount: 0,
        isFavorite: false
    },

    darts: {
        name: "Darts",
        icon: "🎯",
        category: "precision",
        promptTitle: "Darts Match Betting Analysis",
        prompt: `As a professional darts betting expert, provide detailed match analysis including:

1. **Player Performance Statistics**
   - Three-dart average and consistency
   - Checkout percentage and finishing ability
   - 180s per leg frequency
   - Recent tournament form and results

2. **Head-to-Head Analysis**
   - Historical matchup record
   - Performance in similar formats
   - Psychological advantages and rivalries
   - Recent encounters and outcomes

3. **Format-Specific Analysis**
   - Performance in current tournament format
   - Leg/set length adaptation
   - Best-of format vs first-to format
   - Stage experience and pressure handling

4. **Technical Analysis**
   - Scoring consistency and accuracy
   - Double hitting percentage
   - Break of throw frequency
   - Performance on different board setups

5. **Betting Market Opportunities**
   - Match winner odds assessment
   - Handicap betting evaluation
   - Total legs/sets over/under
   - Highest checkout markets
   - 180s and 9-dart finish props

6. **Mental and Physical Factors**
   - Current confidence levels
   - Physical fitness and stamina
   - Crowd interaction and atmosphere impact
   - Travel and preparation factors

7. **Tournament Context**
   - Prize money and ranking implications
   - Path to final considerations
   - Previous round performance impact
   - Venue familiarity and comfort

Provide specific betting recommendations with confidence ratings and suggested stake sizes for optimal darts betting strategy.`,
        copyCount: 0,
        isFavorite: false
    }
};

// Perplexity API configuration
const PERPLEXITY_CONFIG = {
    apiUrl: 'https://api.perplexity.ai/chat/completions',
    model: 'sonar-pro',
    // Note: In production, API key should be stored securely
    // For demo purposes, user needs to add their own API key
    apiKey: localStorage.getItem('perplexity_api_key') || 'YOUR_API_KEY_HERE'
};

// Global variables
let sportsData = { ...defaultSportsData };
let currentSport = null;
let currentFilter = 'all';
let isLightTheme = false;
let loadedSportsCount = 12;
const sportsPerLoad = 12;

// DOM elements
const searchInput = document.getElementById('search-input');
const sportsGrid = document.getElementById('sports-grid');
const promptContainer = document.getElementById('prompt-container');
const promptTitle = document.getElementById('prompt-title');
const promptCategory = document.getElementById('prompt-category');
const promptText = document.getElementById('prompt-text');
const copyButton = document.getElementById('copy-button');
const copyText = document.getElementById('copy-text');
const copyFeedback = document.getElementById('copy-feedback');
const closePromptButton = document.getElementById('close-prompt-button');
const noResults = document.getElementById('no-results');
const loadMoreSentinel = document.getElementById('load-more-sentinel');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadSportsData();
    renderSports();
    setupEventListeners();
    setupIntersectionObserver();
    setupPerplexityApiKey();
});

// Load sports data from localStorage or use defaults
function loadSportsData() {
    const saved = localStorage.getItem('sportsData');
    if (saved) {
        try {
            const parsedData = JSON.parse(saved);
            sportsData = { ...defaultSportsData, ...parsedData };
        } catch (e) {
            console.error('Error loading saved data:', e);
            sportsData = { ...defaultSportsData };
        }
    }
}

// Save sports data to localStorage
function saveSportsData() {
    try {
        localStorage.setItem('sportsData', JSON.stringify(sportsData));
    } catch (e) {
        console.error('Error saving data:', e);
        showMessage('Error saving data to local storage', 'error');
    }
}

// Setup Perplexity API key
function setupPerplexityApiKey() {
    if (!localStorage.getItem('perplexity_api_key') || localStorage.getItem('perplexity_api_key') === 'YOUR_API_KEY_HERE') {
        const apiKey = prompt('Please enter your Perplexity API key to enable AI analysis:');
        if (apiKey && apiKey.trim()) {
            localStorage.setItem('perplexity_api_key', apiKey.trim());
            PERPLEXITY_CONFIG.apiKey = apiKey.trim();
        }
    } else {
        PERPLEXITY_CONFIG.apiKey = localStorage.getItem('perplexity_api_key');
    }
}

// Perplexity API integration
async function analyzeWithPerplexity(prompt, sportName, specificMatch = '', specificDate = '') {
    if (!PERPLEXITY_CONFIG.apiKey || PERPLEXITY_CONFIG.apiKey === 'YOUR_API_KEY_HERE') {
        showMessage('Please configure your Perplexity API key first', 'error');
        return null;
    }

    const loadingOverlay = createLoadingOverlay();
    document.body.appendChild(loadingOverlay);

    try {
        let enhancedPrompt = prompt;
        
        // Add specific match and date if provided
        if (specificMatch) {
            enhancedPrompt += `\n\nSpecific Match: ${specificMatch}`;
        }
        if (specificDate) {
            enhancedPrompt += `\n\nAnalysis Date: ${specificDate}`;
        }

        enhancedPrompt += `\n\nPlease provide current, up-to-date analysis with the latest information available. Format the response as professional betting tips with clear recommendations.`;

        const response = await fetch(PERPLEXITY_CONFIG.apiUrl, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'authorization': `Bearer ${PERPLEXITY_CONFIG.apiKey}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                model: PERPLEXITY_CONFIG.model,
                messages: [
                    {
                        role: "system",
                        content: `You are a professional sports betting expert specializing in ${sportName}. Provide detailed, current analysis with specific betting recommendations based on the latest available information.`
                    },
                    {
                        role: "user",
                        content: enhancedPrompt
                    }
                ],
                search_mode: "web"
            })
        });

        if (!response.ok) {
            throw new Error(`API request failed: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        
        if (data.choices && data.choices[0] && data.choices[0].message) {
            return data.choices[0].message.content;
        } else {
            throw new Error('Invalid response format from API');
        }

    } catch (error) {
        console.error('Perplexity API Error:', error);
        showMessage(`AI Analysis Error: ${error.message}`, 'error');
        return null;
    } finally {
        document.body.removeChild(loadingOverlay);
    }
}

// Create loading overlay with professional animation
function createLoadingOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'loading-overlay';
    overlay.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    overlay.style.backdropFilter = 'blur(8px)';
    
    overlay.innerHTML = `
        <div class="bg-slate-800 rounded-2xl p-8 max-w-md w-full mx-4 text-center">
            <div class="loading-spinner mb-4"></div>
            <h3 class="text-xl font-bold text-white mb-2">AI Analysis in Progress</h3>
            <p class="text-slate-300 mb-4">Analyzing current data with Perplexity AI...</p>
            <div class="progress-bar bg-slate-700 rounded-full h-2 overflow-hidden">
                <div class="progress-fill bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full"></div>
            </div>
            <p class="text-sm text-slate-400 mt-3">This may take a few moments</p>
        </div>
    `;
    
    return overlay;
}

// Render sports grid
function renderSports() {
    const filteredSports = getFilteredSports();
    const sportsToShow = filteredSports.slice(0, loadedSportsCount);
    
    sportsGrid.innerHTML = '';
    
    if (sportsToShow.length === 0) {
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    sportsToShow.forEach((sport, index) => {
        const sportCard = createSportCard(sport);
        sportCard.style.animationDelay = `${index * 0.1}s`;
        sportCard.classList.add('animated');
        sportsGrid.appendChild(sportCard);
    });
    
    // Show/hide load more sentinel
    if (filteredSports.length > loadedSportsCount) {
        loadMoreSentinel.style.display = 'block';
    } else {
        loadMoreSentinel.style.display = 'none';
    }
}

// Create sport card element
function createSportCard(sport) {
    const card = document.createElement('div');
    card.className = `sport-card relative p-4 rounded-2xl cursor-pointer text-center transition-all duration-500 hover:scale-105 ${currentSport === sport.key ? 'selected' : ''}`;
    
    // Copy counter
    const copyCountDisplay = sport.copyCount > 0 ? 
        `<div class="copy-counter absolute top-2 left-2 bg-blue-600 text-white text-xs rounded-full px-2 py-1 font-bold">${sport.copyCount}</div>` : '';
    
    card.innerHTML = `
        ${copyCountDisplay}
        <div class="favorite-star ${sport.isFavorite ? 'is-favorite' : ''}" data-sport="${sport.key}">⭐</div>
        <div class="text-4xl mb-3">${sport.icon}</div>
        <h3 class="font-semibold text-lg mb-1">${sport.name}</h3>
        <p class="text-sm opacity-75 capitalize">${sport.category}</p>
    `;
    
    card.addEventListener('click', () => showPrompt(sport.key));
    
    // Favorite star click handler
    const favoriteStarElement = card.querySelector('.favorite-star');
    favoriteStarElement.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(sport.key);
    });
    
    return card;
}

// Get filtered sports based on current filter and search
function getFilteredSports() {
    const searchTerm = searchInput.value.toLowerCase();
    
    return Object.entries(sportsData)
        .map(([key, sport]) => ({ key, ...sport }))
        .filter(sport => {
            const matchesSearch = sport.name.toLowerCase().includes(searchTerm) ||
                                sport.category.toLowerCase().includes(searchTerm);
            
            if (currentFilter === 'all') return matchesSearch;
            if (currentFilter === 'favorites') return matchesSearch && sport.isFavorite;
            return matchesSearch && sport.category === currentFilter;
        })
        .sort((a, b) => {
            // Sort favorites first, then by name
            if (a.isFavorite && !b.isFavorite) return -1;
            if (!a.isFavorite && b.isFavorite) return 1;
            return a.name.localeCompare(b.name);
        });
}

// Show prompt for selected sport
async function showPrompt(sportKey) {
    const sport = sportsData[sportKey];
    if (!sport) return;
    
    currentSport = sportKey;
    
    // Update UI
    promptTitle.textContent = sport.promptTitle;
    promptCategory.textContent = sport.category.charAt(0).toUpperCase() + sport.category.slice(1);
    
    // Handle specific match and date options
    const specificMatchOptions = document.getElementById('specific-match-options');
    const sportIcon = document.getElementById('sport-icon');
    
    if (specificMatchOptions && sportIcon) {
        specificMatchOptions.classList.remove('hidden');
        sportIcon.textContent = sport.icon;
    }
    
    // Set initial prompt text
    let displayPrompt = sport.prompt;
    
    // Check for specific match and date
    const specificMatchCheckbox = document.getElementById('specific-match-checkbox');
    const specificDateCheckbox = document.getElementById('specific-date-checkbox');
    const specificMatchInput = document.getElementById('specific-match-input');
    const specificDateInput = document.getElementById('specific-date-input');
    
    let specificMatch = '';
    let specificDate = '';
    
    if (specificMatchCheckbox && specificMatchCheckbox.checked && specificMatchInput) {
        specificMatch = specificMatchInput.value;
        if (specificMatch) {
            displayPrompt += `\n\nSpecific Match: ${specificMatch}`;
        }
    }
    
    if (specificDateCheckbox && specificDateCheckbox.checked && specificDateInput) {
        specificDate = specificDateInput.value;
        if (specificDate) {
            displayPrompt += `\n\nAnalysis Date: ${specificDate}`;
        }
    }
    
    promptText.value = displayPrompt;
    
    // Show prompt container
    promptContainer.classList.remove('prompt-hidden');
    promptContainer.classList.add('prompt-visible');
    promptContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Update selected card
    document.querySelectorAll('.sport-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    const selectedCard = document.querySelector(`[data-sport="${sportKey}"]`)?.closest('.sport-card');
    if (selectedCard) {
        selectedCard.classList.add('selected');
    }
    
    // Reset copy button
    copyText.textContent = 'Copy';
    copyButton.classList.remove('bg-green-600', 'hover:bg-green-700');
    copyButton.classList.add('bg-gradient-to-r', 'from-blue-600', 'to-purple-600', 'hover:from-blue-700', 'hover:to-purple-700');
    
    // Show inline tools
    const toolsInline = document.getElementById('tools-inline');
    if (toolsInline) {
        toolsInline.style.display = 'flex';
    }
    
    // Trigger AI analysis if API key is configured
    if (PERPLEXITY_CONFIG.apiKey && PERPLEXITY_CONFIG.apiKey !== 'YOUR_API_KEY_HERE') {
        const aiAnalysis = await analyzeWithPerplexity(sport.prompt, sport.name, specificMatch, specificDate);
        if (aiAnalysis) {
            const enhancedPrompt = `${displayPrompt}\n\n--- AI ANALYSIS ---\n${aiAnalysis}`;
            promptText.value = enhancedPrompt;
        }
    }
}

// Copy prompt to clipboard
async function copyPrompt() {
    try {
        await navigator.clipboard.writeText(promptText.value);
        
        // Update copy count
        if (currentSport && sportsData[currentSport]) {
            sportsData[currentSport].copyCount = (sportsData[currentSport].copyCount || 0) + 1;
            saveSportsData();
            renderSports(); // Re-render to update copy counter
        }
        
        // Update button appearance
        copyText.textContent = 'Copied!';
        copyButton.classList.remove('bg-gradient-to-r', 'from-blue-600', 'to-purple-600', 'hover:from-blue-700', 'hover:to-purple-700');
        copyButton.classList.add('bg-green-600', 'hover:bg-green-700');
        
        // Show feedback
        copyFeedback.style.opacity = '1';
        
        setTimeout(() => {
            copyText.textContent = 'Copy';
            copyButton.classList.remove('bg-green-600', 'hover:bg-green-700');
            copyButton.classList.add('bg-gradient-to-r', 'from-blue-600', 'to-purple-600', 'hover:from-blue-700', 'hover:to-purple-700');
            copyFeedback.style.opacity = '0';
        }, 2000);
        
    } catch (err) {
        console.error('Failed to copy:', err);
        showMessage('Failed to copy to clipboard', 'error');
    }
}

// Toggle favorite status
function toggleFavorite(sportKey) {
    if (sportsData[sportKey]) {
        sportsData[sportKey].isFavorite = !sportsData[sportKey].isFavorite;
        saveSportsData();
        renderSports();
    }
}

// Show message notification
function showMessage(message, type = 'success') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `fixed top-4 right-4 p-4 rounded-lg text-white font-semibold z-50 ${
        type === 'success' ? 'bg-green-600' : 'bg-red-600'
    }`;
    messageDiv.textContent = message;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        document.body.removeChild(messageDiv);
    }, 3000);
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', debounce(() => {
        loadedSportsCount = sportsPerLoad;
        renderSports();
    }, 300));
    
    // Category filters
    document.querySelectorAll('.category-filter').forEach(button => {
        button.addEventListener('click', () => {
            currentFilter = button.dataset.category;
            loadedSportsCount = sportsPerLoad;
            
            // Update active filter button
            document.querySelectorAll('.category-filter').forEach(btn => {
                btn.classList.remove('category-badge');
                btn.classList.add('bg-slate-700', 'hover:bg-slate-600');
            });
            
            button.classList.add('category-badge');
            button.classList.remove('bg-slate-700', 'hover:bg-slate-600');
            
            renderSports();
        });
    });
    
    // Copy button
    copyButton.addEventListener('click', copyPrompt);
    
    // Close prompt button
    closePromptButton.addEventListener('click', () => {
        promptContainer.classList.remove('prompt-visible');
        promptContainer.classList.add('prompt-hidden');
        currentSport = null;
        
        // Remove selected state from all cards
        document.querySelectorAll('.sport-card').forEach(card => {
            card.classList.remove('selected');
        });
    });
    
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    themeToggle.addEventListener('click', () => {
        isLightTheme = !isLightTheme;
        document.body.classList.toggle('light-theme', isLightTheme);
        themeIcon.textContent = isLightTheme ? '☀️' : '🌙';
        localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
    });
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        isLightTheme = true;
        document.body.classList.add('light-theme');
        themeIcon.textContent = '☀️';
    }
    
    // Edit button
    const editButton = document.getElementById('edit-button');
    editButton.addEventListener('click', () => {
        if (currentSport) {
            openEditModal(currentSport);
        }
    });
    
    // Add new prompt button
    const addNewPromptBtn = document.getElementById('add-new-prompt-btn');
    addNewPromptBtn.addEventListener('click', () => {
        openEditModal();
    });
    
    // Modal functionality
    setupModalEventListeners();
    
    // Tools functionality
    setupToolsEventListeners();
    
    // Effectiveness slider
    setupEffectivenessSlider();
    
    // Specific match and date options
    setupSpecificOptions();
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closePromptButton.click();
            closeModal();
        }
        if (e.ctrlKey && e.key === 'c' && currentSport) {
            copyPrompt();
        }
    });
}

// Setup effectiveness slider
function setupEffectivenessSlider() {
    const slider = document.getElementById('effectiveness-slider');
    const valueDisplay = document.getElementById('effectiveness-value');
    
    if (slider && valueDisplay) {
        slider.addEventListener('input', (e) => {
            valueDisplay.textContent = `${e.target.value}%`;
        });
    }
}

// Setup specific match and date options
function setupSpecificOptions() {
    const specificMatchCheckbox = document.getElementById('specific-match-checkbox');
    const specificDateCheckbox = document.getElementById('specific-date-checkbox');
    const matchInputContainer = document.getElementById('match-input-container');
    const dateInputContainer = document.getElementById('date-input-container');
    
    if (specificMatchCheckbox && matchInputContainer) {
        specificMatchCheckbox.addEventListener('change', (e) => {
            matchInputContainer.classList.toggle('hidden', !e.target.checked);
        });
    }
    
    if (specificDateCheckbox && dateInputContainer) {
        specificDateCheckbox.addEventListener('change', (e) => {
            dateInputContainer.classList.toggle('hidden', !e.target.checked);
        });
    }
}

// Setup modal event listeners
function setupModalEventListeners() {
    const editModal = document.getElementById('edit-modal');
    const editForm = document.getElementById('edit-form');
    const cancelEditBtn = document.getElementById('cancel-edit-btn');
    const alertModal = document.getElementById('alert-modal');
    
    // Edit form submission
    editForm.addEventListener('submit', (e) => {
        e.preventDefault();
        saveEditedSport();
    });
    
    // Cancel edit
    cancelEditBtn.addEventListener('click', closeModal);
    
    // Close modal on overlay click
    editModal.addEventListener('click', (e) => {
        if (e.target === editModal) {
            closeModal();
        }
    });
    
    alertModal.addEventListener('click', (e) => {
        if (e.target === alertModal) {
            closeAlertModal();
        }
    });
}

// Setup tools event listeners
function setupToolsEventListeners() {
    // Export functionality
    const exportBtn = document.getElementById('export-btn');
    const exportBtnInline = document.getElementById('export-btn-inline');
    
    [exportBtn, exportBtnInline].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', exportData);
        }
    });
    
    // Import functionality
    const importInput = document.getElementById('import-input');
    const importInputInline = document.getElementById('import-input-inline');
    
    [importInput, importInputInline].forEach(input => {
        if (input) {
            input.addEventListener('change', importData);
        }
    });
    
    // Reset functionality
    const resetBtn = document.getElementById('reset-btn');
    const resetBtnInline = document.getElementById('reset-btn-inline');
    
    [resetBtn, resetBtnInline].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                showConfirmDialog(
                    'Reset to Default',
                    'Are you sure you want to reset all prompts to default? This will delete all custom prompts and modifications.',
                    resetToDefault
                );
            });
        }
    });
}

// Open edit modal
function openEditModal(sportKey = null) {
    const modal = document.getElementById('edit-modal');
    const modalTitle = document.getElementById('modal-title');
    const editKey = document.getElementById('edit-key');
    const editName = document.getElementById('edit-name');
    const editIcon = document.getElementById('edit-icon');
    const editCategory = document.getElementById('edit-category');
    const editPromptTitle = document.getElementById('edit-prompt-title');
    const editPrompt = document.getElementById('edit-prompt');
    
    if (sportKey && sportsData[sportKey]) {
        // Edit existing sport
        const sport = sportsData[sportKey];
        modalTitle.textContent = 'Edit Prompt';
        editKey.value = sportKey;
        editName.value = sport.name;
        editIcon.value = sport.icon;
        editCategory.value = sport.category;
        editPromptTitle.value = sport.promptTitle;
        editPrompt.value = sport.prompt;
    } else {
        // Add new sport
        modalTitle.textContent = 'Add New Prompt';
        editKey.value = '';
        editName.value = '';
        editIcon.value = '';
        editCategory.value = 'traditional';
        editPromptTitle.value = '';
        editPrompt.value = '';
    }
    
    modal.classList.add('visible');
    editName.focus();
}

// Close modal
function closeModal() {
    const modal = document.getElementById('edit-modal');
    modal.classList.remove('visible');
}

// Save edited sport
function saveEditedSport() {
    const editKey = document.getElementById('edit-key').value;
    const editName = document.getElementById('edit-name').value.trim();
    const editIcon = document.getElementById('edit-icon').value.trim();
    const editCategory = document.getElementById('edit-category').value;
    const editPromptTitle = document.getElementById('edit-prompt-title').value.trim();
    const editPrompt = document.getElementById('edit-prompt').value.trim();
    
    if (!editName || !editIcon || !editPromptTitle || !editPrompt) {
        showMessage('Please fill in all required fields', 'error');
        return;
    }
    
    const sportKey = editKey || editName.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Check if key already exists (for new sports)
    if (!editKey && sportsData[sportKey]) {
        showMessage('A sport with this name already exists', 'error');
        return;
    }
    
    sportsData[sportKey] = {
        name: editName,
        icon: editIcon,
        category: editCategory,
        promptTitle: editPromptTitle,
        prompt: editPrompt,
        copyCount: sportsData[sportKey]?.copyCount || 0,
        isFavorite: sportsData[sportKey]?.isFavorite || false
    };
    
    saveSportsData();
    renderSports();
    closeModal();
    
    showMessage(editKey ? 'Prompt updated successfully' : 'New prompt added successfully');
}

// Export data
function exportData() {
    const dataToExport = {
        sportsData: sportsData,
        exportDate: new Date().toISOString(),
        version: '1.0'
    };
    
    const blob = new Blob([JSON.stringify(dataToExport, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sports-betting-prompts-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showMessage('Data exported successfully');
}

// Import data
function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const importedData = JSON.parse(e.target.result);
            
            if (importedData.sportsData) {
                sportsData = { ...defaultSportsData, ...importedData.sportsData };
                saveSportsData();
                renderSports();
                showMessage('Data imported successfully');
            } else {
                showMessage('Invalid file format', 'error');
            }
        } catch (error) {
            console.error('Import error:', error);
            showMessage('Error importing file', 'error');
        }
    };
    
    reader.readAsText(file);
    event.target.value = ''; // Reset file input
}

// Reset to default
function resetToDefault() {
    sportsData = { ...defaultSportsData };
    saveSportsData();
    renderSports();
    closeAlertModal();
    showMessage('Reset to default prompts successfully');
}

// Show confirmation dialog
function showConfirmDialog(title, message, onConfirm) {
    const alertModal = document.getElementById('alert-modal');
    const alertTitle = document.getElementById('alert-modal-title');
    const alertMessage = document.getElementById('alert-modal-message');
    const alertButtons = document.getElementById('alert-modal-buttons');
    
    alertTitle.textContent = title;
    alertMessage.textContent = message;
    
    alertButtons.innerHTML = `
        <button onclick="closeAlertModal()" class="px-6 py-2 rounded-lg bg-slate-600 hover:bg-slate-500 transition">Cancel</button>
        <button onclick="confirmAction()" class="px-6 py-2 rounded-lg bg-red-600 hover:bg-red-500 transition">Confirm</button>
    `;
    
    // Store the confirm action globally
    window.confirmAction = () => {
        onConfirm();
        closeAlertModal();
    };
    
    alertModal.classList.add('visible');
}

// Close alert modal
function closeAlertModal() {
    const alertModal = document.getElementById('alert-modal');
    alertModal.classList.remove('visible');
}

// Make closeAlertModal globally accessible
window.closeAlertModal = closeAlertModal;

// Setup intersection observer for infinite scroll
function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadMoreSports();
            }
        });
    }, {
        rootMargin: '100px'
    });
    
    observer.observe(loadMoreSentinel);
}

// Load more sports
function loadMoreSports() {
    const filteredSports = getFilteredSports();
    if (loadedSportsCount < filteredSports.length) {
        loadedSportsCount += sportsPerLoad;
        renderSports();
    }
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Mobile optimizations
function setupMobileOptimizations() {
    const addNewBtn = document.getElementById('add-new-prompt-btn');
    
    // Convert to FAB on mobile
    function updateAddButtonStyle() {
        if (window.innerWidth <= 640) {
            addNewBtn.classList.add('fab');
            addNewBtn.innerHTML = '+';
        } else {
            addNewBtn.classList.remove('fab');
            addNewBtn.innerHTML = 'Add New Prompt';
        }
    }
    
    updateAddButtonStyle();
    window.addEventListener('resize', updateAddButtonStyle);
}

// Initialize mobile optimizations
document.addEventListener('DOMContentLoaded', setupMobileOptimizations);

// Service Worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Performance monitoring
function trackPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        });
    }
}

trackPerformance();

// Error handling
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
    showMessage('An unexpected error occurred', 'error');
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    showMessage('An unexpected error occurred', 'error');
});

// Analytics placeholder
function trackEvent(eventName, eventData) {
    // Placeholder for analytics tracking
    console.log('Event tracked:', eventName, eventData);
}

// Track user interactions
document.addEventListener('click', (e) => {
    if (e.target.matches('.sport-card')) {
        trackEvent('sport_selected', { sport: e.target.textContent });
    }
    if (e.target.matches('#copy-button')) {
        trackEvent('prompt_copied', { sport: currentSport });
    }
});