document.addEventListener('DOMContentLoaded', () => {

    // --- CONSTANTS & CONFIG ---
    const defaultSportsData = {
        football: { name: "Football", icon: '⚽', category: 'traditional', title: "Professional Football Analysis Prompt", prompt: "Find today's football matches from all leagues (Premier League, La Liga, Serie A, Bundesliga, Ligue 1, MLS, Copa Libertadores, Championship, etc.), and also check sports betting sites for odds. Look at the opinions of other tipsters as well — only provide tips for matches happening today with odds exceeding 1.90. Think through your answer carefully and provide detailed reasoning. Give both single and combo tips. Think like a professional sports betting expert who has been living off this for 20 years and specializes in football. Examine every factor from team form to weather and missing players. Analyze the teams' xG/xGA (Expected Goals) and xPTS (Expected Points) metrics, npxG (non-penalty xG) values, Big Chances Created/Conceded statistics, possession %, PPDA (passes per defensive action), progressive pass & carry numbers, deep completions, set piece efficiency, pressing intensity zones, defensive line height, and field tilt ratio. Pay attention to international cup matches, friendly games, and qualification matches as well. Consider which could be the best value bet with at least a 50% probability. Remember: you are a professional expert whose attention covers everything, even things that bookmakers might miss. Justify your answers well, and at the end, write them down in a proper tip format. It is very important to review multiple groups and comments, especially those discussing betting value and where multiple people see a value bet — for example, a missing key player or other factors that escape the bookies' attention. The bottom line: write the tips in tip format at the end." },
        basketball: { name: "Basketball", icon: '🏀', category: 'traditional', title: "Strategic Basketball Analysis Prompt", prompt: "Think like a professional basketball analyst with 15+ years of experience following international and domestic leagues. Find today's basketball games with minimum odds of 1.90 from all available leagues (NBA, EuroLeague, National championships). Analyze in detail the teams' offensive/defensive ratings, pace factor, rebounding percentages, and form over the last 10 games. Pay close attention to key players' injuries, the effect of back-to-back games, and home/away form differences. Research basketball forums, Reddit NBA/EuroLeague subreddits, Twitter posts from basketball experts, and review insider information - such as load management decisions, rookie vs veteran matchups, or last-minute player absences. Look for value bets where the true probability is estimated to be at least 55%. Focus on player props (points, rebounds, assists), team totals, quarter/half betting, and spread markets. Pay special attention to revenge game factors, playoff positioning motivation, and clutch time statistics. At the end, provide specific single and combo tips with clear justification." },
        tennis: { name: "Tennis", icon: '🎾', category: 'traditional', title: "Professional Tennis Analysis Prompt", prompt: "Act as a tennis expert and value betting specialist with 20 years of experience. Find today's tennis matches with minimum odds of 1.90 from all major tournaments (ATP, WTA, Challenger, ITF). Analyze in detail the players' surface preference (clay/grass/hard), head-to-head record, recent form, and serve/return stats from the last 5 matches. Research tennis forums (TennisWorld, MTF), social media posts, and TennisTV comments for hidden information like minor injuries, coaching changes, personal issues, or travel fatigue. Pay special attention to the effect of weather conditions, jet lag, tournament progression, and playing style matchups (baseliner vs serve & volley). Look for value bets where the bookmaker's odds do not accurately reflect the true chances - with an estimated probability of at least 52%. Focus on match winner, set betting, total games, first set winner, and player performance markets. Analyze break point conversion rates, tiebreak records, and performance in pressure situations. At the end, provide structured single and accumulator tips with detailed reasoning." },
        american_football: { name: "American Football", icon: '🏈', category: 'traditional', title: "NFL Strategic Analysis Prompt", prompt: "Be an NFL insider analyst with 20+ years of experience who knows every statistical and motivational factor. Examine this weekend's NFL slate with minimum odds of 1.90. Dive deep into the teams' advanced metrics: DVOA (offense/defense/special teams), EPA per play, red zone efficiency, third-down conversion rates, turnover differential, and time of possession trends. Research NFL Twitter/X beat reporters, team subreddits, injury reports, and weather forecasts. Look for insider information: motivational edges (revenge games, contract years, coaching hot seats), line movement analysis, sharp vs public money, and Vegas insider tips. Pay special attention to playoff implications, divisional rivalry dynamics, prime time performance history, and rest advantages (bye weeks, short weeks). Look for value bets with a 55%+ estimated probability in spread, totals, player props (passing/rushing/receiving yards, TDs), team props, and live betting scenarios. Analyze coaching tendencies, game script probabilities, and in-game adjustment capabilities. At the end, provide strategic tips in single and parlay form with specific reasoning." },
        baseball: { name: "Baseball", icon: '⚾', category: 'traditional', title: "MLB Sabermetrics Analysis Prompt", prompt: "Think like a sabermetrics guru and MLB value betting specialist with 25+ years of experience. Find today's MLB games with minimum odds of 1.90. Dive into the starting pitchers' advanced stats: ERA vs FIP vs xFIP, WHIP, K/9, BB/9, HR/9, and ballpark-adjusted numbers. Analyze the teams' offensive metrics: wOBA, OPS+, ISO, BABIP, and recent hot/cold streaks. Examine bullpen depth, usage patterns, and closer availability. Research baseball forums (BaseballThinkFactory, Fangraphs comments), beat writers' Twitter feeds, and fantasy baseball communities for information like minor injuries, family issues, contract negotiations, or clubhouse chemistry. Pay special attention to weather impact (wind direction/speed, temperature, humidity), ballpark factors, umpire strike zone tendencies, and platoon advantages. Look for value bets with an estimated probability of at least 53% in moneyline, run line, totals, first 5 innings, and player props (hits, HRs, RBIs, strikeouts) markets. Analyze recent offensive trends, pitcher fatigue, and late-inning management. At the end, provide data-driven tips in single and parlay form with supporting sabermetric analysis." },
        ice_hockey: { name: "Ice Hockey", icon: '🏒', category: 'traditional', title: "NHL In-Depth Analysis Prompt", prompt: "Act as an NHL analytics expert and professional bettor with 18+ years of experience. Find today's ice hockey games with minimum odds of 1.90. Analyze the teams' advanced hockey metrics: Corsi For %, Fenwick %, PDO, expected goals for/against, high-danger scoring chances, and faceoff win percentages. Examine goaltender performance: save percentage, goals against average, quality start percentage, and back-to-back fatigue. Research hockey insider Twitter accounts, team beat reporters' articles, r/hockey discussions, and HockeyDB for information like goalie injuries, line combination changes, healthy scratches, or locker room issues. Pay attention to the impact of the travel schedule, back-to-back games, power play/penalty kill efficiency, and late-season motivation factors (playoff race, draft positioning). Look for value bets with a probability of at least 54% in puck line, totals, period betting, player props (goals, assists, shots, saves), and team props markets. Analyze coaching systems (offensive/defensive schemes), special teams success, and clutch performance metrics. At the end, provide strategic hockey tips in single and accumulator form with advanced analytics support." },
        golf: { name: "Golf", icon: '⛳', category: 'precision', title: "PGA Tour Advanced Analytics & Course Strategy Analysis Prompt", prompt: "Be a PGA Tour insider and golf betting expert with 22+ years of experience. Examine this weekend's tournament field with odds of 1.90+. Dive into the players' comprehensive strokes gained analysis: SG: Off-the-Tee (driving distance/accuracy balance), SG: Approach (proximity to hole by distance ranges), SG: Around-the-Green (scrambling artistry), SG: Putting (surface-specific make percentages), SG: Total trajectory analysis. Research golf analytics communities (DataGolf deep dives, Golf Channel metrics, PGA Tour ShotLink database), player equipment changes (club/ball switches impact), caddie insights (course management philosophies), and weather forecast models (wind speed/direction by hole) for information like swing coach changes (technical modifications timeline), injury recovery progression (medical withdrawal history), personal life stability factors (family events, sponsorship pressures), course history dominance patterns, or pre-tournament practice round intensity. Pay special attention to course-specific requirements (driving distance importance vs accuracy premium courses, approach shot dispersion patterns, green complex severity ratings), historical scoring conditions analysis (winning score trends, cut line projections), recent form weighted metrics (last 3/5/10 events performance curves), pressure performance indicators (Sunday back-nine scoring averages, major championship experience), and seasonal form cycles (West Coast/Florida swing specialists). Look for value bets with at least 52% probability in: outright winner (overlay identification), each-way value spots (top-5/10/20 place terms), head-to-head matchups (course fit advantages), first-round leader (aggressive vs conservative starts), make/miss cut markets (consistency metrics), 3-ball/2-ball betting (daily matchups), nationality/region group betting, tournament matchbet combinations, and live in-play opportunities (momentum shifts). Analyze the playing style vs course design matrix (bombers vs plotters success rates), putting surface adaptation speeds (Bermuda vs Bentgrass vs Poa Annua), weather window advantages (morning vs afternoon wave draw bias), mental game resilience indicators (comeback history, front-runner stability), and tournament position pressure handling (first-time winner probability vs veteran closing skills). At the end, provide a comprehensive tournament betting strategy in the form of single selections and a portfolio approach, supported by a strokes gained deep dive, course history weighting, current form trajectory analysis, and psychological pressure performance prediction." },
        boxing: { name: "Boxing", icon: '🥊', category: 'traditional', title: "Professional Boxing Combat Analysis Prompt", prompt: "Think like a combat sports analyst and boxing betting specialist with 20+ years of experience. Find upcoming boxing matches with minimum odds of 1.90 from all weight classes. Analyze the boxers' fighting style, technical skills (jab accuracy, power punching, defense, footwork), reach/height advantages, and knockout power statistics. Research boxing forums (BoxingScene, Boxing News), ESPN boxing sections, and fighter social media accounts for information like training camp quality, sparring partner selection, weight cut difficulties, personal motivations, or family issues. Pay special attention to the age factor, the effect of ring rust (layoff time), venue/crowd advantages, referee/judging tendencies, and stylistic matchup implications. Look for value bets with a probability of at least 55% in method of victory (KO/TKO/Decision), round betting, fight duration over/under, and fighter performance props markets. Analyze punch output/accuracy statistics, chin durability, cardio conditioning, and mental warfare aspects. At the end, provide technical boxing analysis tips in single and combination bets form with supporting fight breakdown reasoning." },
        mma: { name: "MMA/UFC", icon: '🥋', category: 'traditional', title: "UFC/MMA Complex Combat Analysis Prompt", prompt: "Act as an MMA technical analyst and UFC betting insider with 15+ years of experience. Examine the upcoming UFC card with minimum odds of 1.90. Dive into the fighters' grappling credentials, striking accuracy/defense metrics, takedown offense/defense percentages, submission attempt rates, and cardio/conditioning levels. Research MMA forums (r/MMA, Sherdog, MMA Underground), UFC social media, and fighter interviews for information like training camp changes, injury recoveries, weight cut struggles, personal motivation, or gym conflicts. Pay attention to the octagon experience differential, fighting style evolution, reach/height matchup advantages, and referee assignment impact. Look for value bets with a probability of at least 53% in method of victory, round betting, fight duration, performance bonuses, and fighter-specific prop betting markets. Analyze stylistic matchup implications (striker vs grappler vs well-rounded), fight IQ levels, cage generalship, and mental toughness under pressure. At the end, provide technical MMA breakdown tips in single and parlay form with supporting martial arts analysis and physical attribute comparisons." },
        volleyball: { name: "Volleyball", icon: '🏐', category: 'traditional', title: "Strategic Volleyball Team Analysis Prompt", prompt: "Be an international volleyball expert and value betting specialist with 16+ years of experience. Find today's matches with minimum odds of 1.90 from various leagues (CEV Champions League, national championships, international tournaments). Analyze the teams' technical statistics: attack efficiency %, block effectiveness, serve receive quality, setting distribution patterns, and defensive systems effectiveness. Research volleyball communities (VolleyTalk forums), team social media updates, and coach interviews for information like key player injuries, team chemistry issues, travel fatigue, or tactical adjustments. Pay attention to the impact of home-court advantage, playing surface differences (floor type, net height consistency), referee assignment tendencies, and rotation strategy effectiveness. Look for value bets with a probability of at least 52% in set betting, total points over/under, handicap spreads, first set winners, and individual player performance props markets. Analyze tactical system matchups (6-2 vs 5-1 offense), substitution patterns, timeout usage strategy, and pressure performance in crucial sets. At the end, provide strategic volleyball tips in single and combination form with supporting team dynamics analysis and tactical approach evaluation." },
        handball: { name: "Handball", icon: '🤾', category: 'traditional', title: "Tactical Handball In-Depth Analysis Prompt", prompt: "Think like a European handball tactical analyst and betting expert with 18+ years of experience. Examine today's matches with minimum odds of 1.90 (EHF Champions League, EHF Cup, national leagues). Analyze the teams' offensive systems (positional attack vs fast break), defensive formations (6-0, 5+1, 4+2), goalkeeper save percentages from different angles, and penalty conversion rates. Research handball forums (Handball-Planet), EHF official communications, and team websites for information like suspension lists, international duty fatigue, coaching philosophy changes, or arena atmosphere impact. Pay special attention to referee assignments (strict vs lenient), player rotation policies, European cup vs domestic league priority, and historical head-to-head tactical battles. Look for value bets with a probability of at least 53% in handicap betting, total goals over/under, half-time/full-time results, individual player scoring props, and team tactical success metrics markets. Analyze the goalkeeper duel impact, fast break conversion efficiency, exploitation of man-up situations, and pressure performance in the final minutes. At the end, provide strategic handball tips in single and accumulator form with supporting tactical matchup analysis and team form assessment." },
        rugby: { name: "Rugby", icon: '🏉', category: 'traditional', title: "Comprehensive Rugby Union/League Analysis Prompt", prompt: "Act as a rugby expert analyst and international rugby betting specialist with 20+ years of experience. Find upcoming matches with minimum odds of 1.90 (Six Nations, Rugby Championship, Premiership, Super Rugby). Dive into the teams' forward pack vs backline balance analysis, scrum dominance statistics, lineout success rates, ruck efficiency metrics, and territory/possession control patterns. Research rugby forums (The Rugby Forum), official union websites, and rugby journalism Twitter feeds for information like international player availability, injury return timelines, weather impact on game plans, or coaching tactical innovations. Pay special attention to set-piece reliability, kicking game accuracy (territory vs points), referee interpretation tendencies, and specifics of home ground advantages. Look for value bets with a probability of at least 54% in handicap betting, total points over/under, first try scorer, disciplinary points (cards/penalties), and team performance metrics markets. Analyze forward dominance implications, breakdown contest effectiveness, territorial advantage strategies, and bench impact in the final quarter. At the end, provide strategic rugby tips in single and multiple bets form with supporting pack vs backline analysis and set-piece battle assessment." },
        cricket: { name: "Cricket", icon: '🏏', category: 'traditional', title: "Complex Format-Specific Cricket Analysis Prompt", prompt: "Be a cricket technical analyst and international cricket betting guru with 25+ years of experience in all formats. Examine upcoming matches with minimum odds of 1.90 (Test, ODI, T20I, domestic competitions). Analyze the team's batting depth, bowling attack variety (pace vs spin balance), fielding standards, and format-specific tactical approaches. Research cricket communities (CricketWeb, ESPNCricinfo forums), player social media, and cricket journalism for information like pitch preparation details, weather forecast implications, team selection dilemmas, or player form cycles. Pay special attention to pitch conditions evolution (day 1 vs day 4 characteristics), the importance of the toss decision, DLS method implications, and venue-specific historical patterns. Look for value bets with a probability of at least 52% in match winners, top batsman/bowler markets, innings totals, method of dismissal props, session betting, and individual player performance metrics markets. Analyze bowling matchup advantages, batting order strategy, captaincy tactical decisions, and pressure performance in crucial phases. At the end, provide format-appropriate cricket tips in single and combination form with supporting pitch analysis and playing conditions assessment." },
        athletics: { name: "Athletics", icon: '🏃', category: 'traditional', title: "Advanced Athletics Performance Analytics Analysis Prompt", prompt: "Think like a track and field biomechanics expert and athletics betting specialist with 20+ years of experience. Find upcoming events with 1.90+ odds (Diamond League, World Championships, Continental Tour Gold, Olympic qualifiers, National Championships). Dive into athletes' comprehensive performance analysis: seasonal progression curves (SB/PB ratios), wind-adjusted performances (+2.0m/s conversions), altitude-adjusted times, reaction time consistency (sprint events), split analysis patterns (100m: 10m segments, 400m: 100m splits), stride frequency/length optimization trends. Research athletics communities (LetsRun.com deep threads, Track & Field News forums, World Athletics statistical database), athlete social media training logs, coach interview insights (training philosophy reveals), and biomechanics research papers for information like training block periodization (base/speed/taper phases), injury comeback progression curves, equipment technology advantages (super spikes aerodynamic benefits), psychological preparation methods (visualization techniques), competition schedule optimization, or altitude training camp effects (2-3 weeks post-return peak window). Pay special attention to venue-specific factors (track surface: Mondo vs Rekortan, lane draw advantages, stadium wind patterns), weather optimization windows (temperature 16-23°C, humidity <60%, tailwind legality), head-to-head psychological dynamics (pacers vs kickers, false start pressure), major championship performance history (clutch gene analysis), and seasonal peak timing patterns (double peak possibility). Look for value bets with at least 52% probability in: event winners (consider recent form trajectory), head-to-head matchups (psychological edges), performance line betting (over/under times/distances), podium finish probabilities, national record assault conditions, meet record vulnerability analysis, and relay team composition optimization. Analyze tactical race execution patterns (sit-and-kick vs front-running success rates), technical event consistency under pressure (field events: 6 attempts strategy), sprint event reaction time advantages (0.100 vs 0.150 impact), middle-distance pacing strategies (negative vs even splits), and championship rounds progression (heats/semis/finals energy management). At the end, provide performance-focused athletics tips for single events and championship progression, supported by biomechanical efficiency analysis, training periodization assessment, venue-specific optimization, and historical clutch performance evaluation." },
        swimming: { name: "Swimming", icon: '🏊', category: 'water', title: "Advanced Swimming Hydrodynamics & Performance Analysis Prompt", prompt: "Act as a swimming biomechanics expert and aquatic sports betting specialist with 18+ years of experience. Examine upcoming swimming competitions with 1.90+ odds (World Championships, Olympic Trials, ISL matches, Mare Nostrum series, national championships). Dive into swimmers' comprehensive performance metrics: stroke rate/distance per stroke optimization (DPS vs SR trade-offs), underwater dolphin kick efficiency (15m split analysis), turn execution speed (in/out splits), energy system contribution analysis (aerobic vs anaerobic threshold pacing), lactate tolerance indicators, and race pace modeling (PB projection algorithms). Research swimming communities (SwimSwam deep analytics, Swimming World Magazine forums, FINA database), athlete Strava training logs, coach methodology interviews (periodization philosophies), and sports science research papers for information like taper protocol effectiveness (3-week vs 2-week models), altitude training adaptation curves (2-4 weeks post-return benefits), equipment technology advantages (tech suit compression zones, goggle hydrodynamics), pool design impact (gutter systems, lane rope tension), pre-race activation protocols, or psychological visualization techniques. Pay special attention to venue-specific factors (pool depth: fast vs slow pools, water temperature 25-28°C optimal range, lane assignments: center lanes advantage, timing system sensitivity), competition schedule optimization (prelims/semis/finals energy management, multiple event spacing), relay exchange precision (0.03s margins), stroke-specific technical evolution (freestyle: straight arm vs high elbow recovery), and seasonal periodization phases (base/race pace/taper). Look for value bets with at least 51% probability in: event winners (consider recent time drops), head-to-head matchups (psychological history), time prediction markets (season best probability), relay team optimization (leg order strategy), world/continental record vulnerability (conditions alignment), junior-to-senior transition success rates, and ISL team scoring projections. Analyze race execution patterns (split differential analysis, backend speed reserves), stroke count consistency under fatigue, breathing pattern optimization (2-3-2 vs bilateral), championship meet pressure performance (finals time drops), and technical efficiency maintenance (stroke mechanics degradation). At the end, provide hydrodynamics-focused swimming tips for single events and multi-event programs, supported by lactate curve analysis, biomechanical efficiency metrics, competition psychology patterns, and historical performance progression modeling." },
        water_polo: { name: "Water Polo", icon: '🤽', category: 'water', title: "Tactical Water Polo Team Dynamics Analysis Prompt", prompt: "Be a water polo tactical expert and betting specialist with 15+ years of experience. Find today's matches with minimum odds of 1.90 (Champions League, Euro Cup, national championships). Dive into the teams' offensive systems analysis (center forward vs perimeter shooting), defensive pressure schemes, goalkeeper save percentage vs shooting angles statistics, and man-up/man-down conversion efficiency. Research water polo communities (WaterPoloWorld forums), team social media updates, and coach tactical interviews for information like key player conditioning status, tactical system adaptations, referee assignment tendencies, or pool dimension advantages. Pay special attention to physical conditioning levels (4th quarter stamina), exclusion foul management, counter-attack conversion rates, and European vs domestic league tactical differences. Look for value bets with a probability of at least 53% in handicap betting, total goals over/under, quarter-by-quarter scoring patterns, individual player scoring props, and penalty shootout scenarios markets. Analyze the significance of the goalkeeper duel, set-piece execution efficiency, swimming speed advantages, and mid-game tactical adaptation capabilities. At the end, provide strategic water polo tips in single and accumulator form with supporting team tactical analysis and player conditioning assessment." },
        cycling: { name: "Cycling", icon: '🚴', category: 'traditional', title: "Multi-Discipline Strategic Cycling Analysis Prompt", prompt: "Think like a professional cycling analyst and Grand Tour betting expert with 22+ years of experience. Find upcoming races with minimum odds of 1.90 (Grand Tours, Monuments, World Tour events). Analyze the riders' climbing power-to-weight ratios, time trial aerodynamic efficiency, sprint positioning skills, and the quality of team tactical support. Research cycling forums (CyclingNews, PelotonCafe), pro team social media, and DS tactical interviews for information like equipment advantages, altitude training camps, team leadership dynamics, or stage-specific preparation strategies. Pay special attention to stage profile analysis (gradient percentages, wind exposure, technical descents), weather forecast implications, historical performance patterns at venues, and Grand Tour vs one-day race specialization factors. Look for value bets with a probability of at least 52% in stage winners, overall classification positions, points/mountain jersey competitions, team classification battles, and breakaway success probability markets. Analyze team tactical dynamics, the influence of peloton politics, pacing strategy variations, and recovery management between stages. At the end, provide strategic cycling tips in single and stage-by-stage accumulator form with supporting terrain analysis and rider specialization assessment." },
        table_tennis: { name: "Table Tennis", icon: '🏓', category: 'precision', title: "Technical Precision Table Tennis Analysis Prompt", prompt: "Act as a table tennis technical analyst and international ping pong betting specialist with 16+ years of experience. Examine upcoming tournaments with minimum odds of 1.90 (ITTF World Tour, European Championships, national leagues). Dive into the players' technical style analysis (offensive topspin vs defensive chopping vs all-round), equipment specifications (rubber/blade combinations), serve variety effectiveness, and return game adaptation capabilities. Research table tennis forums (TableTennisDaily, ITTF forums), player equipment choice updates, and coaching philosophy interviews for information like technique modifications, mental preparation methods, playing surface adaptation strategies, or injury management approaches. Pay special attention to rubber technology advantages, playing hall conditions (lighting, air circulation), the mental demands of the tournament format, and differences in Asian vs European tactical philosophies. Look for value bets with a probability of at least 51% in match winners, set betting handicaps, total games over/under, service game dominance, and tournament progression probability markets. Analyze style matchup implications (speed vs spin vs placement), rally length preferences, pressure point execution, and adaptation speeds to equipment rules. At the end, provide technical table tennis tips in single and tournament progression form with supporting equipment analysis and playing style compatibility assessment." },
        badminton: { name: "Badminton", icon: '🏸', category: 'precision', title: "Technical Court Dynamics Badminton Analysis Prompt", prompt: "Be a badminton performance analyst and BWF tournament betting expert with 14+ years of experience. Find upcoming events with minimum odds of 1.90 (BWF World Tour, Thomas/Uber Cup, national championships). Analyze the players' court coverage efficiency, the balance of smash power vs placement accuracy, net play finesse techniques, and endurance performance curves at different match lengths. Research badminton communities (BadmintonCentral forums), BWF official communications, and Asian badminton media for information like string tension optimization, shuttle speed preferences, coaching tactical innovations, or altitude/humidity adaptation strategies. Pay special attention to playing style evolution (attack vs defense vs deception), doubles partnership chemistry, venue-specific court conditions, and tournament scheduling fatigue management. Look for value bets with a probability of at least 50% in match winners, game betting spreads, total points over/under, handicap game advantages, and doubles team coordination effectiveness markets. Analyze tactical game development patterns, shot selection decision-making, court positioning advantages, and mental resilience under extended rallies. At the end, provide technical badminton tips in single and tournament bracket form with supporting court positioning analysis and shot selection evaluation." },
        darts: { name: "Darts", icon: '🎯', category: 'precision', title: "Darts PDC World Championship Psychology Analysis Prompt", prompt: "Act as a darts psychology expert and PDC World Championship betting specialist with 20+ years of experience. Find upcoming tournaments with 1.90+ odds (PDC World Championship, Premier League, World Matchplay, UK Open, European Tour events, Players Championship). Dive into players' statistical precision analysis (180s frequency under pressure, checkout percentage consistency, first 9 dart average trends, doubles accuracy), mental game resilience assessment (pressure point execution, comeback psychology, stage fright management), stage experience confidence evaluation (TV table vs floor performance differential), and venue-specific adaptation capabilities. Research darts communities (DartsNutz forums, r/Darts discussions), player social media psychological insights, Sky Sports darts expert analysis (Wayne Mardle, John Part commentary insights), and PDC official content for information like practice routine intensity changes, family support system stability, crowd favorite psychological advantages, venue acoustics adaptation strategies, walk-on music psychological impact assessment, or personal motivation factors (financial pressures, ranking implications). Pay special attention to format adaptation psychological skills (sets vs legs vs first-to formats), oche position comfort zone consistency, stage lighting adaptation speed, crowd noise management capabilities, alcohol consumption policy mental effects (if applicable), and historical venue performance pattern analysis. Look for value bets with at least 53% probability in: match winners (consider head-to-head psychology), handicap betting scenarios, highest checkout achieved markets, 180s hit count over/under, tournament outright winner odds, match duration predictions, and live betting momentum identification (psychological shift moments). Analyze head-to-head psychological warfare advantages, comeback mental resilience under deficit pressure, finishing consistency trends under television scrutiny, crowd interaction psychological management skills, equipment malfunction pressure response, and the balance of stage experience vs natural talent. At the end, provide strategic darts tips in match/session/tournament form, supported by mental game resilience analysis, statistical consistency evaluation, stage psychology assessment, and historical pressure performance prediction." },
        snooker: { name: "Snooker", icon: '🎱', category: 'precision', title: "Snooker Crucible Psychology & Technical Mastery Analysis Prompt", prompt: "Think like a snooker Crucible Theatre expert and World Championship betting specialist with 25+ years of experience. Find upcoming tournaments with 1.90+ odds (Crucible World Championship, UK Championship, Masters Triple Crown, ranking events: Players Championship, Tour Championship). Dive into players' technical precision analysis (potting percentage under pressure, century break conversion rates, break-building consistency curves), tactical battle intelligence (safety shot placement precision, tactical foul execution, position play mastery), psychological pressure response patterns (Crucible vs other venues performance differential), and long-format endurance management (best-of-35 frames mental stamina, session-by-session energy distribution). Research snooker communities (The Snooker Forum, SnookerHQ discussions, World Snooker Tour official content), BBC/Eurosport expert analysis (Dennis Taylor, John Virgo, Ken Doherty insights), player autobiography revelations, and coaching methodology interviews for information like cue maintenance rituals (tip hardness preferences, chalk application methods), practice table conditions adaptation strategies, psychological coaching techniques (sports psychology integration), equipment sponsorship pressure effects, personal life stability factors impacting performance, or venue-specific preparation methods. Pay special attention to Crucible Theatre atmosphere pressure adaptation (crowd noise, TV table pressure, one-table setup psychology), table conditions evolution response (cloth speed changes during tournament, cushion responsiveness variations, lighting adjustment impacts), session timing psychology (morning vs afternoon vs evening sessions performance patterns), best-of format mental endurance (short vs long format adaptation), referee assignment influences (strict vs lenient officiating impact), and historical venue performance patterns. Look for value bets with at least 54% probability in: match winners (consider head-to-head records), handicap frame betting (comeback specialists vs front-runners), highest break achieved markets, century break count over/under, session score predictions (session specialists), total frames over/under, tournament outright winner odds, and live betting momentum opportunities (session break psychology). Analyze tactical battle evolution dynamics, comeback psychological resilience from deficit positions, pressure clearance execution under television scrutiny, referee/crowd psychological influence management, equipment malfunction pressure response, and venue-specific historical performance consistency. At the end, provide strategic snooker tips in match/session/tournament form, supported by Crucible psychology analysis, technical precision assessment, historical performance pattern evaluation, and mental resilience prediction." },
        horse_racing: { name: "Horse Racing", icon: '🏇', category: 'traditional', title: "Comprehensive Horse Racing Form Analysis Prompt", prompt: "Be a thoroughbred racing expert and professional handicapper with 25+ years of experience. Find today's horse racing events with minimum odds of 1.90 (flat racing, jump racing, various distances). Dive into the horses' form analysis (recent performance ratings, class levels, distance preferences), jockey statistics (course/distance strike rates, trainer partnerships), trainer patterns (seasonal peaks, first-time equipment), and breeding/pedigree implications for specific race conditions. Research racing forums (Racing Post forums), stable social media updates, and bloodstock agent insights for information like stable confidence indicators, work rider reports, veterinary treatments, or ownership pressure factors. Pay special attention to going conditions preferences (firm/good/soft/heavy), draw bias implications, pace scenario analysis, and seasonal progression patterns. Look for value bets with a probability of at least 54% in win betting, each-way value spots, exacta/trifecta combinations, place betting overlays, and ante-post tournament winners markets. Analyze pace mapping scenarios, class relief/rise implications, jockey booking significance, and disconnects between market confidence and insider knowledge. At the end, provide professional racing tips in win/place/show form with supporting form study analysis and market evaluation reasoning." },
        motor_general: { name: "Motorsport", icon: '🏁', category: 'motor', title: "Universal Motorsport Technical Analysis Prompt", prompt: "Think like a motorsport technical analyst and racing betting specialist with 20+ years of experience across all categories. Examine upcoming racing events with minimum odds of 1.90 (Formula series, touring cars, endurance racing). Dive into the drivers' qualifying vs race pace analysis, team technical development curves, mechanical reliability statistics, and circuit-specific setup advantages. Research motorsport forums (Autosport forums), paddock insider reports, and technical regulation interpretation discussions for information like setup philosophy changes, driver confidence levels, team internal dynamics, or technical directive implications. Pay special attention to the impact of the weather forecast, tire compound strategy implications, fuel consumption optimization, and safety car probability scenarios. Look for value bets with a probability of at least 53% in race winners, podium position betting, fastest lap achievers, mechanical DNF probabilities, and constructor championship points markets. Analyze the compatibility of track characteristics with car/driver strengths, overtaking opportunity zones, strategic decision-making under pressure, and championship implications motivation factors. At the end, provide comprehensive motorsport tips in single and combination race form with supporting technical analysis and strategic racing evaluation." },
        formula1: { name: "Formula 1", icon: '🏎️', category: 'motor', title: "Advanced Formula 1 Technical Analysis Prompt", prompt: "Act as an F1 technical insider and Grand Prix betting specialist with 22+ years of experience. Examine the upcoming race weekend with minimum odds of 1.90 for every session. Analyze the power unit performance curves, aerodynamic efficiency vs drag balance, tire degradation simulation data, and DRS/ERS deployment strategy effectiveness. Research F1 technical forums (F1Technical, Reddit F1), paddock journalist insider reports, and team principal strategic communications for information like regulation interpretation advantages, development token allocation strategies, driver psychological preparation methods, or grid penalty implications. Pay special attention to track evolution effects, weather window exploitation opportunities, fuel load optimization vs grid position trade-offs, and championship mathematics pressure scenarios. Look for value bets with a probability of at least 54% in race winners, podium position combinations, fastest lap achievements, safety car period probabilities, constructor points maximization, and driver championship swing implications markets. Analyze strategic team dynamics, pit stop execution consistency, tire compound selection philosophy, and pressure performance under title fight conditions. At the end, provide strategic F1 weekend tips in qualifying/sprint/race form with supporting advanced technical regulation analysis and team development trajectory assessment." },
        csgo: { name: "CS2", icon: '🔫', category: 'esports', title: "Counter-Strike 2 Advanced Tactical Meta Analysis Prompt", prompt: "Act as a Counter-Strike 2 professional scene expert and tactical betting specialist with 15+ years of CS experience (1.6/Source/GO/CS2 evolution). Find upcoming tier-1 matches with 1.90+ odds (BLAST Premier, ESL Pro League, PGL Majors, IEM tournaments). Dive into teams' Source 2 engine adaptation, exploitation of new smoke mechanics (dynamic smoke interactions), sub-tick system impact analysis, updated map pool mastery (Mirage rework, Ancient, Anubis), and MR12 format tactical adjustments. Research CS2 communities (r/GlobalOffensive, HLTV.org forums), pro player streaming tactical breakdowns, analyst desk discussions (thorin, spunj analysis), and insider Twitter/X accounts for information like roster chemistry post-CS2 transition, bootcamp adaptation intensity, anti-strat development in the new meta, coaching system updates, or player role flexibility evolution. Pay special attention to Source 2 engine performance advantages (higher FPS, better hit registration), new grenade physics exploitation, updated economy meta implications, premier mode vs Faceit experience translation, and LAN venue adaptation with new hardware/software. Look for value bets with at least 54% probability in: match winners, map-specific predictions (consider map reworks), round handicap scenarios, pistol round outcomes (improved pistol meta), individual player ratings (HLTV 2.0+), tournament advancement probabilities, and live betting opportunities (momentum shifts). Analyze the pace of tactical innovation in CS2, clutch situation decision-making evolution, economy management optimization, anti-strat preparation effectiveness post-meta changes, and crowd pressure adaptation with Source 2 audio improvements. At the end, provide strategic CS2 tips in match/map/tournament form, supported by Source 2 meta understanding, tactical evolution assessment, and individual player adaptation analysis." },
        lol: { name: "League of Legends", icon: '⚔️', category: 'esports', title: "LoL Worlds Meta Strategic Deep-Dive Analysis Prompt", prompt: "Act as a League of Legends Worlds meta expert and LCS/LEC/LCK/LPL betting specialist with 12+ years of experience. Find upcoming tier-1 matches with 1.90+ odds (Worlds Championship, MSI, regional finals: LCS/LEC/LCK/LPL/PCS). Dive into teams' draft phase innovation (flex picks mastery, ban priority evolution, red/blue side advantages), macro execution precision analysis (objective timing windows, map state transitions, vision control patterns), individual player champion ocean depth (pocket picks, meta slaves vs innovators), and coaching strategic preparation methodology. Research LoL esports communities (r/leagueoflegends, LoL Esports subreddit, Inven Global discussions), pro player streaming insights (Doublelift, Sneaky, LS patch analysis), coaching content (Reapered, Grabbz philosophy), and Asian LoL media (Inven KR, Weibo gaming discussions) for information like scrim leak insights, champion mastery development timelines, psychological coaching methods, patch adaptation strategies (micro vs macro meta shifts), or international tournament preparation philosophies. Pay special attention to current patch power spikes (item rework implications, champion rework integration), regional meta clash scenarios (LCK macro vs LPL aggro vs LEC scaling vs LCS chaos), Bo1 vs Bo5 format adaptation psychology (draft flexibility under pressure), international stage adaptation (jet lag, crowd pressure, translation barriers), and Worlds meta evolution (group stage vs knockout stage tactical evolution). Look for value bets with at least 54% probability in: match winners, game duration over/under (fast meta vs scaling meta), first objective achievements (FB/FT/FD/FH/FB dragons), individual player performance props (KDA, CS@15, damage %), draft phase predictions (first pick/ban priorities), series score predictions, tournament bracket advancement probabilities, and live betting momentum identification. Analyze teamfight coordination execution, late-game decision-making under pressure, early-game snowball potential vs scaling insurance, champion comfort zones vs meta enforcement, and coaching adaptation speed mid-series. At the end, provide strategic LoL tips in match/series/tournament form, supported by current meta mastery evaluation, regional strength assessment, and psychological resilience prediction." },
        dota2: { name: "Dota 2", icon: '🛡️', category: 'esports', title: "Dota 2 The International Strategic Mastery Analysis Prompt", prompt: "Be a Dota 2 The International strategic expert and DPC circuit betting specialist with 14+ years of experience (all TI meta evolutions). Find upcoming tier-1 tournaments with 1.90+ odds (The International, ESL Pro Tour, DreamLeague, regional DPC divisions, BetBoom Dacha). Dive into teams' drafting philosophy evolution (pos1-5 role flexibility, hero comfort zones vs meta enforcement), strategic innovation depth (macro timing windows, objective prioritization sequences), individual player peak performance cycles (mechanical ceiling, decision-making under pressure), captain calling precision (shot-calling clarity, adaptation speed), and coaching preparation methodology (scrimmage analysis, opponent-specific strategies). Research Dota 2 communities (r/DotA2, Liquipedia match discussions, GosuGamers analysis), professional scene insights (player interviews, team documentaries), analyst content (Jenkins, BSJ, Purge patch breakdowns), and CIS/SEA/China Dota media for information like internal team dynamics, practice schedule intensity vs burnout management, psychological preparation methods (sports psychologists), patch adaptation strategies (major vs minor patch implications), team chemistry development timelines, or roster stability vs experimentation balance. Pay special attention to current patch power meta implications (carry/support/offlane tier shifts, item build optimization), regional playstyle philosophy clashes (CIS aggression vs EU calculated vs SEA chaotic vs CN methodical), LAN tournament adaptation psychology (TI pressure vs regional events), format-specific preparation (Bo1 group stage vs Bo3 playoffs vs Bo5 grand finals), and prize pool pressure psychological management. Look for value bets with at least 55% probability in: series winners, game duration predictions (fast push vs late game), draft phase bet opportunities (first pick/ban priorities, hero combinations), first blood/tower/roshan achievements, individual player performance props (GPM, XPM, KDA targets), map control progression, tournament bracket advancement probabilities, and live betting momentum identification (comeback potential vs throw susceptibility). Analyze drafting phase execution mastery, teamfight coordination precision, late-game decision-making under ultimate pressure, high-ground siege/defense capabilities, strategic adaptation flexibility mid-series, and mental resilience during elimination scenarios. At the end, provide strategic Dota 2 tips in series/tournament/TI form, supported by comprehensive meta mastery evaluation, team strategic depth assessment, psychological resilience prediction, and historical performance pattern analysis." },
        valorant: { name: "Valorant", icon: '🎯', category: 'esports', title: "Valorant VCT Professional Meta Analysis Prompt", prompt: "Think like a Valorant Champions Tour expert analyst and VCT betting specialist with 6+ years of experience. Find upcoming VCT tier-1 matches with 1.90+ odds (VCT Masters, Champions, regional VCT leagues, Game Changers). Dive into teams' agent composition meta-evolution (Gekko, Harbor, Fade integration), role flexibility analysis (IGL vs flex player capabilities), individual mechanical ceiling tracking (ACS, ADR, K/D trends), and tactical execution precision metrics (site take success %, retake efficiency, rotation timing optimization). Research Valorant communities (r/VALORANT, VLR.gg match discussions, Plat Chat podcast analysis), pro player streaming tactical insights (TenZ, Shroud, FNS tactical breakdowns), and VCT official content for information like agent ban/pick priority shifts, coaching staff tactical philosophy updates, psychological preparation methods (LAN vs online adaptation), bootcamp preparation intensity reports, or roster synergy development timelines. Pay special attention to patch meta implications (agent buffs/nerfs impact), map-specific agent compositions (Bind/Split/Ascent/Icebox/Breeze/Fracture/Pearl/Lotus/Sunset optimal comps), regional tactical philosophy differences (NA aggressive vs EMEA methodical vs PACIFIC explosive), VCT format adaptation (Swiss vs double-elimination bracket psychology), and international LAN stage pressure management. Look for value bets with at least 53% probability in: match winners, map-specific predictions (consider team map pools), round handicap scenarios, pistol round outcomes (crucial for momentum), spike plant/defuse props, individual player performance metrics (ACS, ADR targets), tournament bracket advancement probabilities, and live betting momentum shifts. Analyze tactical counter-stratting effectiveness, clutch performance consistency under pressure, agent ability coordination timing, anti-strat preparation depth, and mid-round adaptation capabilities. At the end, provide strategic Valorant VCT tips in match/map/series form, supported by agent meta mastery analysis, tactical innovation assessment, and individual player peak performance prediction." },
        virtual_sports: { name: "V-Sport", icon: '🎮', category: 'virtual', title: "⚠️ WARNING - NO PROMPT EXISTS FOR THIS", prompt: "NO PROMPT EXISTS FOR THIS!\n\nVirtual sports are purely random number generator-based games of chance.\nThere is no analysis, no patterns, no tips.\n\nThese events are computer simulations where all outcomes are determined by algorithms.\nThe displayed 'forms' and 'statistics' are just decorative elements.\n\n🔴 DO NOT LOOK FOR STRATEGIES!\n🔴 DO NOT LOOK FOR PATTERNS!\n🔴 DO NOT EXPECT PROFESSIONAL TIPS!\n\nVirtual sports = digital gambling\nPlay for fun, with small stakes only!\n\nIF YOU ARE LOOKING FOR REAL SPORTS BETTING PROMPTS,\nCHOOSE ANOTHER SPORT FROM THE LIST!", special: "warning" },
        motogp: { name: "MotoGP", icon: '🏍️', category: 'motor', title: "MotoGP Race Weekend Strategic Analysis Prompt", prompt: "Act as a MotoGP paddock insider and motorsport betting expert with 15+ years of experience. Analyze the upcoming Grand Prix's free practices, qualifying, and race. Examine the riders' tire management styles (Michelin compound wear curves), engine packages (V4 vs Inline-4 power units), aerodynamic developments (downwash effects), and electronics settings (traction/engine brake maps). Research paddock press, team radio leaks, and rider interviews for information like arm pump injuries, new chassis spec tests, or wet setup efficiency. Pay attention to the track characteristics (aggressive braking zones vs long corners), tire temperature windows, weather fronts, and slipstream effects. Look for value bets with at least a 54% estimated probability in race winner, podium, top 6, fastest lap, and head-to-head markets. At the end, provide single and combined tips with detailed reasoning." },
        nascar: { name: "NASCAR", icon: '🚗', category: 'motor', title: "NASCAR Cup Series Advanced Oval Strategy Prompt", prompt: "Think like a NASCAR crew chief and simulation analyst with 20 years of experience. Examine the weekend's track (short track, intermediate, superspeedway, or road course) from an aerodynamic and mechanical grip perspective. Analyze the drivers' average green-flag position, long-run vs short-run speed, pit stop cycle strategies, and fuel consumption models. Research spotter chat leaks, team radio clips, and garage insider reports for setup philosophies (camber, spoiler angle), and engine power package developments from FIA/Hendrick. Pay attention to tire wall wear (Goodyear set limit), stage break points, and the expected number of cautions. Look for value bets with 53%+ probability in race winner, top 3/5/10 finishes, group matchups, laps led >/<, and first manufacturer markets. Provide data-driven tips supported by simulation outputs." },
        fifa_esports: { name: "FIFA Esports", icon: '🎮', category: 'esports', title: "FIFA Esports Meta & Form Analysis Prompt", prompt: "Act as a FIFA Global Series analyst and e-football betting expert. Analyze the current patch meta (exploit moves, driven passes, defensive nerfs), players' form (Weekend League 20-0 percentage, LAN results), and squad-building tendencies (lengthy vs explosive build, chemistry styles). Research Twitter clips, Discord scrim results, and the Top 100 leaderboard for hidden hot streaks. Pay attention to connection distribution, regional ping differences, and LAN stress. Look for value bets with a 55% estimated probability in BO2/BO3 match winner, market-specific goal/handicap, and over/under times. Provide specific tips, including a game plan breakdown and mental factors." },
        nba2k: { name: "NBA 2K League", icon: '🎮', category: 'esports', title: "NBA 2K League Advanced Tactical & Usage Rate Analysis Prompt", prompt: "Act as an NBA 2K League GM and analytics expert with 8+ years of experience. Analyze teams' archetype distribution (PG Shot-Creator vs Playmaker, SG 2-Way Sharpshooter vs Lock, PF Glass-Cleaner vs Stretch), pick-and-roll coverage schemes (switch vs hedge vs ice), and clutch time execution patterns (iso vs team play). Dive into advanced statistics: Offensive/Defensive Rating per lineup, Usage Rate distribution, Turnover Percentage, Transition Points per game, and True Shooting Percentage per archetype. Research VOD analysis (a ballchasing.com equivalent for NBA 2K), scrim leaks (Pace factor, shooting percentage trends), team chemistry trackers, and Reddit/GameBattles insider information on roster synergy and practice intensity. Pay attention to patch-specific meta changes: 3PT green window size (Contest vs Open), steals/blocks buff/nerf impact, badge system rework effects (Hot Zone Hunter vs Limitless Range efficiency), and MyCAREER build meta evolution. Analyze LAN venue setup impact (input lag compensation, monitor refresh rate), match stamina management (concentration drop-off in Q4), team communication quality (IGL shotcalling vs committee approach), and inter-conference latency advantages. Look for value bets with at least 54% probability in: match winners (consider head-to-head archetype matchups), quarter/half handicap scenarios, combined points over/under (pace-adjusted), individual player performance props (points, rebounds, assists per archetype), MVP probability markets, tournament outright advancement, first-quarter leadership, and live betting momentum opportunities (comeback potential assessment). At the end, provide strategic NBA 2K League tips with comprehensive lineup analysis, usage rate optimization, patch adaptation assessment, and team chemistry evaluation support." },
        rocket_league: { name: "Rocket League", icon: '🚀', category: 'esports', title: "Rocket League RLCS Strategy & Momentum Prompt", prompt: "Think like an RLCS analyst and mechanics expert. Analyze teams' kickoff strategies (cheat vs wait), boost management, double-commit rate, and solo-play capability. Research ballchasing.com stats (possession, shots/goal), scrim rumors, and Twitter clips for the exploitation of new mechanics (reset-chains, double flip). Pay attention to regional ping differences and LAN-related nervousness. Look for value bets with 53%+ probability in series winner, exact score, total goals O/U, and first goal markets. Provide strategic tips supported by replay analysis." },
        winter_sports: { name: "Winter Sports", icon: '❄️', category: 'winter', title: "Comprehensive Multi-Discipline Winter Sports Analysis Prompt", prompt: "Act as a multi-discipline winter sports expert who has been analyzing World Cups, Olympics, and World Championships in all winter sports for 20+ years. ALPINE SKIING: Analyze course profiles (gradient %, gate count, icy vs soft sections), differences between downhill, slalom, giant slalom, and super-G, and skiers' specialization in downhill vs technical events. SKI JUMPING: Examine the hill's K-point, wind conditions (headwind vs tailwind impact), jumpers' flight style (V-style optimization), and landing performance. SNOWBOARDING: Halfpipe scoring criteria (amplitude, variety, execution), slopestyle course setup, parallel giant slalom head-to-head battle analysis. FIGURE SKATING: Technical elements scoring (quads vs triples difficulty), balance of artistic impression vs technical merit, short program vs free skate specialization. SPEED SKATING: Distance specialization analysis (sprint 500m vs middle 1500m vs long 5000m/10000m), altitude training advantages, ice surface conditions (indoor vs outdoor tracks). Research FIS/ISU/IBU databases, wax team reports, and coach interviews on equipment optimization (ski wax temperature profiles, skate blade sharpening, snowboard edge tuning). Pay attention to venue-specific factors (altitude 1000m+ advantages, wind patterns, snow quality analysis), seasonal peak timing patterns, and injury comeback progressions. Look for value bets with at least 52% probability in: event winners, podium predictions, head-to-head matchups, performance over/under targets (jump distance, skating times, scoring points), season-long crystal globe winners, and Olympic medal predictions. Provide sport-specific strategic analysis supported by equipment optimization, weather impact assessment, and athlete specialization advantages." },
        chess: { name: "Chess", icon: '♟️', category: 'logic', title: "World Chess Championship & Rapid/Blitz Analysis Prompt", prompt: "Act as a FIDE-rated chess betting expert and chess.com/lichess analytics expert with 12+ years of experience. Analyze the current form of top grandmasters: Elo-rating progression curves, opening repertoire changes, endgame technique precision, and time pressure performance patterns. Research ChessBase databases, chess.com tournament stats, Twitch chess streams (Hikaru, Magnus insights), and FIDE rating reports for information like recent tournament results, opening preparation depth, blunder rate analysis, or physical stamina under time pressure. Pay special attention to format-specific performance (Classical vs Rapid vs Blitz adaptability), opening novelty surprises, psychological pressure handling, and tournament schedule fatigue management. Look for value bets with a probability of at least 55% in match winners, exact game count, first decisive game, tournament advancement odds, and performance rating over/under markets. Analyze head-to-head historical results, opening choice psychology, endgame specialization advantages, and clutch performance under elimination pressure. At the end, provide strategic chess betting tips with comprehensive player analysis, opening theory assessment, and psychological resilience evaluation support." },
        politics: { name: "Politics", icon: '🗳️', category: 'logic', title: "Political Election & Referendum Betting Analysis Prompt", prompt: "Act as a political analyst and election betting specialist with 15+ years of experience covering global elections, referendums, and political events. Find upcoming political betting markets with minimum odds of 1.90 (presidential elections, parliamentary elections, gubernatorial races, mayoral contests, referendums, leadership contests, impeachment proceedings). Analyze comprehensive polling data aggregation (weighted averages, margin of error considerations, pollster reliability ratings), demographic voting pattern analysis (age, education, income, geographic breakdowns), historical electoral precedent studies, and campaign momentum indicators (fundraising reports, rally attendance, social media engagement metrics). Research political forums (PoliticalBetting.com, FiveThirtyEight discussions), insider political journalism (Politico, The Hill, local political reporters), campaign finance databases, and social media sentiment analysis tools for information like late-breaking scandals, endorsement impacts, ground game organization effectiveness, voter registration drives, early voting patterns, or campaign strategy pivots. Pay special attention to electoral system mechanics (Electoral College vs popular vote, proportional representation vs first-past-the-post, runoff requirements), voter turnout modeling (enthusiasm gaps, weather impact, holiday effects), swing state/constituency dynamics, debate performance impact assessment, and October surprise probability scenarios. Look for value bets with at least 54% probability in: election winners (consider polling trajectory vs betting odds discrepancies), margin of victory predictions, swing state outcomes, ballot measure results, party control scenarios (House/Senate/governorships), leadership contest outcomes, and referendum pass/fail probabilities. Analyze campaign resource allocation efficiency, media coverage sentiment analysis, opposition research vulnerability assessment, coalition building effectiveness, and historical precedent pattern matching for similar electoral contexts. At the end, provide strategic political betting tips in single and combination form, supported by comprehensive polling analysis, demographic modeling, historical precedent evaluation, and campaign dynamics assessment." }
    };

    const PREFERRED_ORDER = ['football', 'basketball', 'tennis', 'ice_hockey'];
    const categoryNames = { 'traditional': 'Traditional', 'esports': 'E-Sports', 'motor': 'Motorsport', 'virtual': 'Virtual', 'water': 'Water', 'precision': 'Precision', 'winter': 'Winter', 'logic': 'Logic' };
    const sportAliases = {
        'football': ['football', 'soccer'],
        'basketball': ['basketball', 'b-ball'],
        'tennis': ['tennis'],
        'ice_hockey': ['ice hockey', 'hockey', 'nhl'],
        'american_football': ['american football', 'nfl', 'gridiron'],
        'baseball': ['baseball', 'mlb'],
        'golf': ['golf', 'pga'],
        'boxing': ['boxing', 'box'],
        'mma': ['mma', 'ufc', 'mixed martial arts'],
        'volleyball': ['volleyball', 'volley'],
        'handball': ['handball'],
        'rugby': ['rugby'],
        'cricket': ['cricket'],
        'athletics': ['athletics', 'track and field', 'track'],
        'swimming': ['swimming', 'swim'],
        'water_polo': ['water polo'],
        'cycling': ['cycling', 'bike', 'bicycle'],
        'table_tennis': ['table tennis', 'ping pong'],
        'badminton': ['badminton'],
        'darts': ['darts'],
        'snooker': ['snooker', 'billiards'],
        'horse_racing': ['horse racing', 'racing'],
        'motor_general': ['motorsport', 'motor racing', 'auto racing'],
        'formula1': ['formula 1', 'f1', 'formula one'],
        'csgo': ['cs2', 'csgo', 'cs:go', 'counter-strike'],
        'lol': ['lol', 'league of legends', 'league'],
        'dota2': ['dota', 'dota2', 'dota 2'],
        'valorant': ['valorant', 'val'],
        'virtual_sports': ['v-sport', 'vsport', 'virtual'],
        'motogp': ['motogp', 'gp motor'],
        'nascar': ['nascar', 'stock car'],
        'fifa_esports': ['fifa', 'fifa esports', 'ea sports fc'],
        'nba2k': ['nba2k', 'nba 2k', '2k league'],
        'rocket_league': ['rocket league', 'rlcs'],
        'winter_sports': ['winter sports', 'skiing', 'biathlon', 'alpine skiing', 'ski jumping', 'snowboarding', 'figure skating', 'speed skating'],
        'chess': ['chess'],
        'politics': ['politics', 'election', 'referendum', 'political']
    };
    
    const MOBILE_LAZY_LOAD_COUNT = 4;

    // --- STATE ---
    let appData = {};
    let favorites = [];
    let selectedSportCard = null;
    let currentFilter = 'all';
    let currentlySelectedKey = null;
    let mobileVisibleCount = MOBILE_LAZY_LOAD_COUNT;
    let mobileObserver = null;
    let copyCounters = {};
    let perplexityApiKey = localStorage.getItem('perplexityApiKey') || '';

    // --- DOM ELEMENTS ---
    const elements = {
        body: document.body,
        sportsGrid: document.getElementById('sports-grid'),
        promptContainer: document.getElementById('prompt-container'),
        promptTitle: document.getElementById('prompt-title'),
        promptCategory: document.getElementById('prompt-category'),
        promptText: document.getElementById('prompt-text'),
        copyButton: document.getElementById('copy-button'),
        copyFeedback: document.getElementById('copy-feedback'),
        copyTextSpan: document.getElementById('copy-text'),
        searchInput: document.getElementById('search-input'),
        categoryFilters: document.querySelectorAll('.category-filter'),
        closePromptButton: document.getElementById('close-prompt-button'),
        noResultsMessage: document.getElementById('no-results'),
        pageTop: document.getElementById('page-top'),
        editButton: document.getElementById('edit-button'),
        addNewPromptBtn: document.getElementById('add-new-prompt-btn'),
        // Edit Modal
        editModal: document.getElementById('edit-modal'),
        modalTitle: document.getElementById('modal-title'),
        editForm: document.getElementById('edit-form'),
        editKey: document.getElementById('edit-key'),
        editName: document.getElementById('edit-name'),
        editIcon: document.getElementById('edit-icon'),
        editCategory: document.getElementById('edit-category'),
        editPromptTitle: document.getElementById('edit-prompt-title'),
        editPrompt: document.getElementById('edit-prompt'),
        cancelEditBtn: document.getElementById('cancel-edit-btn'),
        // Alert Modal
        alertModal: document.getElementById('alert-modal'),
        alertModalTitle: document.getElementById('alert-modal-title'),
        alertModalMessage: document.getElementById('alert-modal-message'),
        alertModalButtons: document.getElementById('alert-modal-buttons'),
        // Tools
        toolsSection: document.getElementById('tools-section'),
        toolsInline: document.getElementById('tools-inline'),
        exportBtn: document.getElementById('export-btn'),
        importInput: document.getElementById('import-input'),
        resetBtn: document.getElementById('reset-btn'),
        exportBtnInline: document.getElementById('export-btn-inline'),
        importInputInline: document.getElementById('import-input-inline'),
        resetBtnInline: document.getElementById('reset-btn-inline'),
        // Theme
        themeToggle: document.getElementById('theme-toggle'),
        themeIcon: document.getElementById('theme-icon'),
        // Lazy Load
        loadMoreSentinel: document.getElementById('load-more-sentinel')
    };
    
    // --- PERPLEXITY API INTEGRATION ---
    const showLoadingOverlay = () => {
        const overlay = document.createElement('div');
        overlay.id = 'loading-overlay';
        overlay.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        overlay.innerHTML = `
            <div class="bg-slate-800 rounded-2xl p-8 max-w-md mx-4 text-center">
                <div class="loading-spinner mb-4"></div>
                <h3 class="text-xl font-bold text-white mb-2">AI Analysis in Progress</h3>
                <p class="text-slate-300 mb-4">Analyzing with Perplexity Sonar Pro...</p>
                <div class="progress-bar bg-slate-700 rounded-full h-2 mb-2">
                    <div class="progress-fill bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full"></div>
                </div>
                <p class="text-slate-400 text-sm">Getting the latest sports insights</p>
            </div>
        `;
        document.body.appendChild(overlay);
        
        // Animate progress bar
        const progressFill = overlay.querySelector('.progress-fill');
        let progress = 0;
        const progressInterval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress > 90) progress = 90;
            progressFill.style.width = progress + '%';
        }, 200);
        
        return { overlay, progressInterval };
    };

    const hideLoadingOverlay = (overlay, progressInterval) => {
        if (progressInterval) clearInterval(progressInterval);
        if (overlay) {
            overlay.style.opacity = '0';
            setTimeout(() => overlay.remove(), 300);
        }
    };

    const callPerplexityAPI = async (prompt) => {
        if (!perplexityApiKey) {
            throw new Error('Perplexity API key not configured');
        }

        const response = await fetch('https://api.perplexity.ai/chat/completions', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'authorization': `Bearer ${perplexityApiKey}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                model: 'sonar-pro',
                messages: [
                    {
                        role: 'system',
                        content: 'You are a professional sports betting expert with 20+ years of experience. Provide detailed, actionable betting analysis based on the latest information available.'
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
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    };

    const showApiKeyModal = () => {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay visible';
        modal.innerHTML = `
            <div class="modal-content">
                <h3 class="text-2xl font-bold mb-6 text-white">Configure Perplexity API</h3>
                <p class="text-slate-300 mb-4">To use AI-enhanced analysis, please enter your Perplexity API key:</p>
                <input type="password" id="api-key-input" placeholder="Enter your Perplexity API key..." 
                       class="api-key-input w-full mb-4" value="${perplexityApiKey}">
                <p class="text-slate-400 text-sm mb-6">
                    Get your API key from <a href="https://www.perplexity.ai/settings/api" target="_blank" class="text-blue-400 hover:text-blue-300">Perplexity AI Settings</a>
                </p>
                <div class="flex justify-end gap-4">
                    <button id="api-cancel-btn" class="px-6 py-2 rounded-lg bg-slate-600 hover:bg-slate-500 transition">Cancel</button>
                    <button id="api-save-btn" class="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition">Save & Continue</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        const apiKeyInput = modal.querySelector('#api-key-input');
        const saveBtn = modal.querySelector('#api-save-btn');
        const cancelBtn = modal.querySelector('#api-cancel-btn');
        
        apiKeyInput.focus();
        
        const cleanup = () => modal.remove();
        
        saveBtn.onclick = () => {
            const key = apiKeyInput.value.trim();
            if (key) {
                perplexityApiKey = key;
                localStorage.setItem('perplexityApiKey', key);
                cleanup();
                handleCopyPrompt(); // Retry the copy with AI
            }
        };
        
        cancelBtn.onclick = cleanup;
        modal.onclick = (e) => e.target === modal && cleanup();
        
        apiKeyInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') saveBtn.click();
        });
    };

    const showNotification = (message, type = 'success') => {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 px-6 py-3 rounded-lg text-white font-semibold z-50 notification-${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    };
    
    // --- DATA HANDLING (LOCALSTORAGE) ---
    const loadData = () => {
        const storedData = JSON.parse(localStorage.getItem('customSportsData')) || {};
        const storedFavorites = JSON.parse(localStorage.getItem('sportsFavorites')) || [];
        const storedCounters = JSON.parse(localStorage.getItem('copyCounters')) || {};
        appData = { ...JSON.parse(JSON.stringify(defaultSportsData)), ...storedData };
        favorites = storedFavorites;
        copyCounters = storedCounters;
    };

    const saveData = () => {
        const customData = {};
        Object.keys(appData).forEach(key => {
            if (!defaultSportsData[key] || JSON.stringify(defaultSportsData[key]) !== JSON.stringify(appData[key])) {
                customData[key] = appData[key];
            }
        });
        localStorage.setItem('customSportsData', JSON.stringify(customData));
    };
    
    const saveFavorites = () => localStorage.setItem('sportsFavorites', JSON.stringify(favorites));
    const saveCounters = () => localStorage.setItem('copyCounters', JSON.stringify(copyCounters));

    // --- UI RENDERING ---
    const isMobile = () => window.innerWidth <= 768;

    const renderSportsCards = (isInitial = false) => {
        const searchTerm = elements.searchInput.value.toLowerCase().trim();
        
        const filteredKeys = Object.keys(appData).filter(key => {
            const sport = appData[key];
            let matchesSearch = sport.name.toLowerCase().includes(searchTerm) || (sportAliases[key] && sportAliases[key].some(alias => alias.toLowerCase().includes(searchTerm)));
            if (currentFilter === 'all') return matchesSearch;
            if (currentFilter === 'favorites') return matchesSearch && favorites.includes(key);
            return matchesSearch && sport.category === currentFilter;
        });

        const sortedKeys = filteredKeys.sort((a, b) => {
            const aIndex = PREFERRED_ORDER.indexOf(a);
            const bIndex = PREFERRED_ORDER.indexOf(b);
            if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
            if (aIndex !== -1) return -1;
            if (bIndex !== -1) return 1;
            return appData[a].name.localeCompare(appData[b].name);
        });
        
        elements.sportsGrid.innerHTML = '';
        
        const keysToShow = isMobile() ? sortedKeys.slice(0, mobileVisibleCount) : sortedKeys;

        if (keysToShow.length === 0) {
            elements.noResultsMessage.style.display = 'block';
            elements.sportsGrid.style.display = 'none';
        } else {
            elements.noResultsMessage.style.display = 'none';
            elements.sportsGrid.style.display = 'grid';
            keysToShow.forEach(key => {
                const card = createSportCard(key, appData[key], isInitial);
                elements.sportsGrid.appendChild(card);
            });
        }
    };

    const createSportCard = (key, sport, animate) => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'sport-card p-4 lg:p-6 rounded-2xl cursor-pointer text-center flex flex-col items-center justify-center aspect-square relative';
        card.dataset.sport = key;
        if (animate) {
            card.classList.add('animated');
            setTimeout(() => card.classList.remove('animated'), 600);
        }

        const isFav = favorites.includes(key);
        const copyCount = copyCounters[key] || 0;
        
        card.innerHTML = `
            <span class="favorite-star ${isFav ? 'is-favorite' : ''}" data-key="${key}" aria-label="Add to Favorites">⭐</span>
            ${copyCount > 0 ? `<div class="copy-counter absolute top-2 left-2 bg-blue-600 text-white text-xs rounded-full px-2 py-1 font-bold">${copyCount}</div>` : ''}
            <div class="text-2xl lg:text-3xl mb-2" aria-hidden="true">${sport.icon}</div>
            <h3 class="text-xs lg:text-sm font-semibold text-slate-200 leading-tight">${sport.name}</h3>
            <span class="text-xs text-slate-400 mt-1 capitalize leading-tight">${categoryNames[sport.category] || sport.category}</span>
        `;
        
        card.querySelector('.favorite-star').addEventListener('click', (e) => {
            e.stopPropagation();
            handleToggleFavorite(key);
        });
        
        card.addEventListener('click', () => handleSelectSport(key, card));
        return card;
    };
    
    // --- MODALS & DIALOGS ---
    const showModal = (modalElement) => modalElement.classList.add('visible');
    const closeModal = (modalElement) => modalElement.classList.remove('visible');
    
    const showAlert = (message) => {
        elements.alertModalTitle.textContent = "Operation Successful";
        elements.alertModalMessage.textContent = message;
        elements.alertModalButtons.innerHTML = `<button id="alert-ok-btn" class="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition">OK</button>`;
        showModal(elements.alertModal);
        document.getElementById('alert-ok-btn').onclick = () => {
            closeModal(elements.alertModal);
            location.reload();
        };
    };
    
    const showConfirmation = (message, onConfirm) => {
        elements.alertModalTitle.textContent = "Confirmation";
        elements.alertModalMessage.textContent = message;
        elements.alertModalButtons.innerHTML = `
            <button id="confirm-cancel-btn" class="px-6 py-2 rounded-lg bg-slate-600 hover:bg-slate-500 transition">Cancel</button>
            <button id="confirm-ok-btn" class="px-6 py-2 rounded-lg bg-red-600 hover:bg-red-500 transition">Confirm</button>
        `;
        showModal(elements.alertModal);
        document.getElementById('confirm-ok-btn').onclick = () => {
            closeModal(elements.alertModal);
            onConfirm();
        };
        document.getElementById('confirm-cancel-btn').onclick = () => closeModal(elements.alertModal);
    };

    // --- EVENT HANDLERS ---
    const handleSelectSport = (key, cardElement) => {
        currentlySelectedKey = key;
        const sport = appData[key];
        
        if (selectedSportCard) selectedSportCard.classList.remove('selected');
        cardElement.classList.add('selected');
        selectedSportCard = cardElement;
        
        elements.promptTitle.textContent = sport.title;
        elements.promptCategory.textContent = categoryNames[sport.category] || sport.category;
        elements.promptText.value = sport.prompt;
        elements.promptText.readOnly = true;
        elements.editButton.textContent = "Edit";
        
        // Special styling for virtual sports warning
        if (sport.special === "warning") {
            elements.promptText.classList.add("warning");
            elements.promptText.style.color = "#ef4444";
            elements.promptText.style.fontWeight = "bold";
            elements.promptText.style.fontSize = "16px";
            elements.promptText.style.textAlign = "center";
            elements.promptText.style.backgroundColor = "#fef2f2";
            elements.promptText.style.border = "2px solid #ef4444";
            elements.editButton.style.display = "none";
        } else {
            elements.promptText.classList.remove("warning");
            elements.promptText.style.color = "";
            elements.promptText.style.fontWeight = "";
            elements.promptText.style.fontSize = "";
            elements.promptText.style.textAlign = "";
            elements.promptText.style.backgroundColor = "";
            elements.promptText.style.border = "";
            elements.editButton.style.display = "";
        }
        
        showPromptContainer();
    };

    const showPromptContainer = () => {
        elements.promptContainer.classList.remove('prompt-hidden');
        elements.promptContainer.classList.add('prompt-visible');
        elements.toolsInline.style.display = 'flex';
        elements.toolsSection.style.display = 'none';
        
        // Improved scrolling: scroll to the bottom of the prompt container
        setTimeout(() => {
            const containerRect = elements.promptContainer.getBoundingClientRect();
            const containerBottom = containerRect.bottom + window.pageYOffset;
            const viewportHeight = window.innerHeight;
            
            // Calculate scroll position to show the full container
            const targetScroll = containerBottom - viewportHeight + 50; // 50px padding
            
            window.scrollTo({ 
                top: Math.max(0, targetScroll), 
                behavior: 'smooth' 
            });
        }, 100);
    };

    const closePromptContainer = () => {
        if (selectedSportCard) selectedSportCard.classList.remove('selected');
        selectedSportCard = null;
        currentlySelectedKey = null;
        elements.promptContainer.classList.remove('prompt-visible');
        elements.promptContainer.classList.add('prompt-hidden');
        elements.toolsInline.style.display = 'none';
        elements.toolsSection.style.display = 'block';
        
        // Reset prompt text styling
        elements.promptText.classList.remove("warning", "ai-enhanced");
        elements.promptText.style.color = "";
        elements.promptText.style.fontWeight = "";
        elements.promptText.style.fontSize = "";
        elements.promptText.style.textAlign = "";
        elements.promptText.style.backgroundColor = "";
        elements.promptText.style.border = "";
        elements.editButton.style.display = "";
        
        elements.pageTop.scrollIntoView({ behavior: 'smooth' });
    };

    const handleCopyPrompt = async () => {
        if (!elements.promptText.value) return;
        
        let finalPrompt = elements.promptText.value;
        
        // Check if user wants AI enhancement and has API key
        if (perplexityApiKey && currentlySelectedKey && appData[currentlySelectedKey].special !== "warning") {
            const { overlay, progressInterval } = showLoadingOverlay();
            
            try {
                const aiAnalysis = await callPerplexityAPI(finalPrompt);
                finalPrompt = `${finalPrompt}\n\n--- AI ENHANCED ANALYSIS ---\n${aiAnalysis}`;
                
                elements.promptText.value = finalPrompt;
                elements.promptText.classList.add('ai-enhanced');
                
                showNotification('AI analysis added to prompt!', 'success');
            } catch (error) {
                console.error('Perplexity API Error:', error);
                showNotification('AI analysis failed, using original prompt', 'error');
            } finally {
                hideLoadingOverlay(overlay, progressInterval);
            }
        } else if (!perplexityApiKey && currentlySelectedKey && appData[currentlySelectedKey].special !== "warning") {
            // Show API key modal for first-time users
            showApiKeyModal();
            return;
        }
        
        // Copy to clipboard
        try {
            await navigator.clipboard.writeText(finalPrompt);
            
            // Update copy counter
            if (currentlySelectedKey) {
                copyCounters[currentlySelectedKey] = (copyCounters[currentlySelectedKey] || 0) + 1;
                saveCounters();
                renderSportsCards(); // Re-render to show updated counter
            }
            
            elements.copyFeedback.style.opacity = '1';
            elements.copyTextSpan.textContent = "Copied!";
            setTimeout(() => {
                elements.copyFeedback.style.opacity = '0';
                elements.copyTextSpan.textContent = "Copy";
            }, 2000);
        } catch (err) {
            console.error('Error copying to clipboard: ', err);
            showNotification('Failed to copy to clipboard', 'error');
        }
    };
    
    const handleToggleFavorite = (key) => {
        const index = favorites.indexOf(key);
        if (index > -1) favorites.splice(index, 1);
        else favorites.push(key);
        saveFavorites();
        renderSportsCards();
        if (currentFilter === 'favorites' && !favorites.includes(currentlySelectedKey)) {
            if (!elements.promptContainer.classList.contains('prompt-hidden')) {
                closePromptContainer();
            }
        }
    };

    const handleEditFormSubmit = (e) => {
        e.preventDefault();
        const key = elements.editKey.value;
        appData[key] = {
            name: elements.editName.value,
            icon: elements.editIcon.value,
            category: elements.editCategory.value,
            title: elements.editPromptTitle.value,
            prompt: elements.editPrompt.value
        };
        saveData();
        renderSportsCards();
        closeModal(elements.editModal);
        if (currentlySelectedKey === key) {
            const cardElement = document.querySelector(`[data-sport="${key}"]`);
            if(cardElement) handleSelectSport(key, cardElement);
        }
    };

    const handleExport = () => {
        const exportData = {
            customSportsData: JSON.parse(localStorage.getItem('customSportsData') || '{}'),
            sportsFavorites: JSON.parse(localStorage.getItem('sportsFavorites') || '[]'),
            copyCounters: JSON.parse(localStorage.getItem('copyCounters') || '{}')
        };
        const blob = new Blob([JSON.stringify(exportData, null, 2)], {type: 'application/json'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `sport-prompts-${new Date().toISOString().slice(0,10)}.json`;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 100);
    };
    
    const handleImport = (input) => {
        const file = input.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (evt) => {
            try {
                const imported = JSON.parse(evt.target.result);
                if (imported.customSportsData) localStorage.setItem('customSportsData', JSON.stringify(imported.customSportsData));
                if (imported.sportsFavorites) localStorage.setItem('sportsFavorites', JSON.stringify(imported.sportsFavorites));
                if (imported.copyCounters) localStorage.setItem('copyCounters', JSON.stringify(imported.copyCounters));
                showAlert('Import successful! The page will now reload.');
            } catch (err) {
                showConfirmation('An error occurred during import. The JSON file may be invalid or corrupted.', () => {});
            }
        };
        reader.readAsText(file);
    };

    const handleReset = () => {
        showConfirmation('Are you sure you want to reset to default? All custom prompts, favorites, and copy counters will be deleted!', () => {
            localStorage.removeItem('customSportsData');
            localStorage.removeItem('sportsFavorites');
            localStorage.removeItem('copyCounters');
            showAlert('Reset successful! The page will now reload.');
        });
    };

    // --- THEME HANDLING ---
    const setTheme = (mode) => {
        elements.body.classList.toggle('light-theme', mode === 'light');
        elements.themeIcon.textContent = mode === 'light' ? '☀️' : '🌙';
        localStorage.setItem('theme', mode);
    };

    // --- LAZY LOAD FOR MOBILE ---
    const setupMobileLazyLoad = () => {
        if (mobileObserver) mobileObserver.disconnect();
        if (isMobile()) {
            mobileObserver = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting) {
                    mobileVisibleCount += MOBILE_LAZY_LOAD_COUNT;
                    renderSportsCards();
                }
            }, { rootMargin: "200px" });
            mobileObserver.observe(elements.loadMoreSentinel);
        }
    };

    // --- INITIALIZATION ---
    const init = () => {
        // Load data and initial theme
        loadData();
        setTheme(localStorage.getItem('theme') || 'dark');
        
        // Set up event listeners
        elements.searchInput.addEventListener('input', () => {
            mobileVisibleCount = MOBILE_LAZY_LOAD_COUNT;
            renderSportsCards();
        });

        elements.categoryFilters.forEach(filter => {
            filter.addEventListener('click', () => {
                elements.categoryFilters.forEach(f => {
                    f.classList.remove('category-badge');
                    f.classList.add('bg-slate-700', 'hover:bg-slate-600');
                });
                filter.classList.add('category-badge');
                filter.classList.remove('bg-slate-700', 'hover:bg-slate-600');
                currentFilter = filter.dataset.category;
                mobileVisibleCount = MOBILE_LAZY_LOAD_COUNT;
                renderSportsCards();
            });
        });

        elements.copyButton.addEventListener('click', handleCopyPrompt);
        elements.closePromptButton.addEventListener('click', closePromptContainer);
        
        elements.editButton.addEventListener('click', () => {
            if (currentlySelectedKey) {
                elements.editForm.reset();
                const sport = appData[currentlySelectedKey];
                elements.modalTitle.textContent = "Edit Prompt";
                elements.editKey.value = currentlySelectedKey;
                elements.editName.value = sport.name;
                elements.editIcon.value = sport.icon;
                elements.editCategory.value = sport.category;
                elements.editPromptTitle.value = sport.title;
                elements.editPrompt.value = sport.prompt;
                showModal(elements.editModal);
            }
        });
        
        elements.addNewPromptBtn.addEventListener('click', () => {
            elements.editForm.reset();
            elements.modalTitle.textContent = "Add New Prompt";
            elements.editKey.value = `custom_${Date.now()}`;
            showModal(elements.editModal);
        });
        
        elements.editForm.addEventListener('submit', handleEditFormSubmit);
        elements.cancelEditBtn.addEventListener('click', () => closeModal(elements.editModal));
        elements.editModal.addEventListener('click', (e) => e.target === elements.editModal && closeModal(elements.editModal));
        elements.alertModal.addEventListener('click', (e) => e.target === elements.alertModal && closeModal(elements.alertModal));
        
        elements.themeToggle.addEventListener('click', () => setTheme(elements.body.classList.contains('light-theme') ? 'dark' : 'light'));
        
        // Export/Import/Reset button event listeners
        elements.exportBtn.addEventListener('click', handleExport);
        elements.importInput.addEventListener('change', () => handleImport(elements.importInput));
        elements.resetBtn.addEventListener('click', handleReset);
        elements.exportBtnInline.addEventListener('click', handleExport);
        elements.importInputInline.addEventListener('change', () => handleImport(elements.importInputInline));
        elements.resetBtnInline.addEventListener('click', handleReset);
        
        // Initial render
        renderSportsCards(true);
        setupMobileLazyLoad();
        
        // Window resize handling for mobile lazy load
        window.addEventListener('resize', setupMobileLazyLoad);
    };

    // Start the application
    init();
});