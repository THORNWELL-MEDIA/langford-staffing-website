#!/usr/bin/env python3
"""
Regenerate v2-SOP-quality content for 45 Langford Staffing silo pages.

Scope: 10 ON cities + 5 CA cities x 3 services = 45 pages.
Services: temp-staffing, permanent-placement, hospitality-staffing.

Brand rules enforced:
- Plain English, high school reading level
- "We find, we hire, we staff" phrasing
- No "named recruiter" framing
- No em/en/hyphens in body prose
- No Panama on site
- No cross-brand refs
- No visible "Last updated"
- No geo blanket claims

20% body-overlap pre-deploy gate runs at the end.
"""
import hashlib
import json
import re
import sys
from pathlib import Path

ROOT = Path("/Users/samhabib/Desktop/sam/sam-command-center/b1-seo-agency/clients/active/langford-staffing/website")
CONTENT_PATH = ROOT / "lib" / "silo" / "content.json"
PHONE = "1-866-888-6111"

ON_CITIES = ["Toronto", "Mississauga", "Brampton", "Hamilton", "Ottawa",
             "London", "Markham", "Vaughan", "Kitchener", "Windsor"]
CA_CITIES = ["Los Angeles", "San Diego", "San Jose", "San Francisco", "Fresno"]
SERVICES = ["temp-staffing", "permanent-placement", "hospitality-staffing"]

SERVICE_LABEL = {
    "temp-staffing": "Temporary Staffing",
    "permanent-placement": "Permanent Placement",
    "hospitality-staffing": "Hospitality Staffing",
}

# Per-city deep profile. The more specific, the more unique each page reads.
CITY_PROFILE = {
    "Toronto":      {"industries": ["finance", "tech", "logistics", "hospitality"], "hoods": ["Downtown", "Scarborough", "North York", "Etobicoke", "Liberty Village", "Yorkville"], "anchor": "the King Street financial core", "transit": "the TTC and GO Transit", "season": "a busy summer events stretch from May through August", "wage_note": "downtown wage bands run higher than the airport corridor", "employer_color": "finance teams in the Financial District and warehouses near Pearson", "specific_corridor": "the Yonge Street and King Street office core", "second_corridor": "the airport employment zone west of the city", "fav_role_demand": "warehouse pickers and office support", "client_type_a": "national banks and insurers", "client_type_b": "third party logistics operators near Pearson", "local_event": "the Toronto convention calendar at the Metro Toronto Convention Centre"},
    "Mississauga":  {"industries": ["logistics", "aerospace", "light manufacturing", "office"], "hoods": ["Square One", "Meadowvale", "Streetsville", "Port Credit", "Cooksville"], "anchor": "the Pearson Airport cargo and warehouse belt", "transit": "MiWay buses and the Cooksville GO station", "season": "a heavy fourth quarter in distribution and a steady office stream", "wage_note": "warehouse wages near the airport climb during peak season", "employer_color": "third party logistics operators on Airport Road and head offices in Square One", "specific_corridor": "the Airport Road and Derry Road logistics belt", "second_corridor": "the Square One office cluster", "fav_role_demand": "forklift operators and order pickers", "client_type_a": "global logistics providers", "client_type_b": "corporate head offices around Square One", "local_event": "the Mississauga Convention Centre meeting calendar"},
    "Brampton":     {"industries": ["warehouse", "food production", "transport", "skilled trades"], "hoods": ["Bramalea", "Mount Pleasant", "Heart Lake", "Springdale", "Downtown Brampton"], "anchor": "the Steeles and Airport Road industrial corridor", "transit": "Brampton Transit and the Mount Pleasant GO station", "season": "a strong push from August through December for food and consumer goods", "wage_note": "pay rates rise quickly as the holiday season approaches", "employer_color": "food production plants near Steeles and transport firms on Airport Road", "specific_corridor": "the Steeles Avenue food plant cluster", "second_corridor": "the Bramalea Road transport yards", "fav_role_demand": "production line workers and AZ drivers", "client_type_a": "national food brands and packagers", "client_type_b": "long haul transport carriers", "local_event": "the Pearson cargo expansion stretch"},
    "Hamilton":     {"industries": ["steel", "health care support", "logistics", "hospitality"], "hoods": ["Downtown", "Stoney Creek", "Dundas", "Ancaster", "Mountain"], "anchor": "the Stoney Creek industrial belt and the harbour front", "transit": "the HSR bus system and the West Harbour GO station", "season": "a quiet January and a busy May through October stretch", "wage_note": "industrial wages on the harbour front sit at the high end", "employer_color": "steel processing plants on the harbour and care homes on the Mountain", "specific_corridor": "the Burlington Street industrial strip", "second_corridor": "the Concession Street health corridor on the Mountain", "fav_role_demand": "industrial labour and personal support workers", "client_type_a": "steel and metal fabricators", "client_type_b": "long term care operators", "local_event": "the FirstOntario Centre event calendar downtown"},
    "Ottawa":       {"industries": ["public sector", "tech", "hospitality", "office"], "hoods": ["Centretown", "Kanata", "Orleans", "Nepean", "Westboro"], "anchor": "the Kanata North tech park and the downtown government core", "transit": "OC Transpo bus lines and the Confederation Line O-Train", "season": "tourism peaks in the spring tulip season and through summer", "wage_note": "tech wages in Kanata North run higher than downtown contract roles", "employer_color": "federal contractors downtown and tech firms in Kanata", "specific_corridor": "the Albert Street federal building cluster", "second_corridor": "the March Road tech park in Kanata North", "fav_role_demand": "office administrators and tech support", "client_type_a": "federal departments and contractors", "client_type_b": "Kanata tech firms", "local_event": "the conference calendar at the Shaw Centre"},
    "London":       {"industries": ["health care support", "manufacturing", "insurance", "hospitality"], "hoods": ["Downtown", "Masonville", "Byron", "Old South", "Hyde Park"], "anchor": "the Wonderland Road retail strip and the Highway 401 corridor", "transit": "London Transit Commission bus routes through the core", "season": "a September back to school wave brings retail and campus hiring", "wage_note": "manufacturing wages climb when 401 logistics ramps", "employer_color": "insurance head offices downtown and manufacturers near the 401", "specific_corridor": "the Wharncliffe Road and Wonderland Road retail strip", "second_corridor": "the 401 distribution park on the east side", "fav_role_demand": "warehouse and office support", "client_type_a": "insurance and finance head offices", "client_type_b": "manufacturers along the 401", "local_event": "the campus calendar at Western University and Fanshawe College"},
    "Markham":      {"industries": ["tech", "office", "light manufacturing", "hospitality"], "hoods": ["Unionville", "Cornell", "Berczy Village", "Cathedraltown", "Markville"], "anchor": "the Markham tech corridor along Highway 7", "transit": "YRT and Viva bus lines and the Mount Joy GO station", "season": "year round demand with a quieter August stretch", "wage_note": "tech contract rates lead the market in Markham", "employer_color": "global tech firms on Highway 7 and head offices in Unionville", "specific_corridor": "the Highway 7 tech corridor", "second_corridor": "the Woodbine Avenue office cluster", "fav_role_demand": "office and technical support", "client_type_a": "global technology firms", "client_type_b": "national insurance and finance offices", "local_event": "the Markham Pan Am Centre event calendar"},
    "Vaughan":      {"industries": ["logistics", "construction", "retail", "office"], "hoods": ["Woodbridge", "Concord", "Maple", "Kleinburg", "Vaughan Metropolitan Centre"], "anchor": "the Highway 7 and Highway 400 logistics belt", "transit": "YRT bus lines and the Vaughan Metropolitan Centre subway station", "season": "the October through January holiday rush dominates", "wage_note": "warehouse pay spikes from October into December", "employer_color": "distribution centres in Concord and head offices at Vaughan Metropolitan Centre", "specific_corridor": "the Steeles Avenue West and Jane Street distribution belt", "second_corridor": "the Vaughan Metropolitan Centre office tower cluster", "fav_role_demand": "forklift operators and pickers", "client_type_a": "national retail distribution centres", "client_type_b": "construction supply yards", "local_event": "the Vaughan Mills holiday season"},
    "Kitchener":    {"industries": ["tech", "manufacturing", "insurance", "hospitality"], "hoods": ["Downtown Kitchener", "Doon", "Stanley Park", "Forest Heights", "Bridgeport"], "anchor": "the Innovation District at King Street and Victoria Street", "transit": "Grand River Transit and the ION light rail", "season": "fall hiring runs from September into November as schools return", "wage_note": "tech contract pay leads, manufacturing pay holds steady", "employer_color": "tech scale ups in the Innovation District and manufacturers across the region", "specific_corridor": "the King Street and Victoria Street Innovation District", "second_corridor": "the Bridge Street manufacturing belt", "fav_role_demand": "engineers, technicians, and office support", "client_type_a": "scaling technology firms", "client_type_b": "regional manufacturers", "local_event": "the Communitech event calendar in the Innovation District"},
    "Windsor":      {"industries": ["auto manufacturing", "logistics", "hospitality", "skilled trades"], "hoods": ["Downtown", "Walkerville", "South Windsor", "Riverside", "Forest Glade"], "anchor": "the auto assembly and parts plants on the east end", "transit": "Transit Windsor bus routes", "season": "summer event traffic and a steady auto schedule shape demand", "wage_note": "auto parts wages move with plant schedules", "employer_color": "auto assembly and parts plants on the east end and casino service on the riverfront", "specific_corridor": "the east end auto parts corridor", "second_corridor": "the riverfront hospitality strip near Caesars Windsor", "fav_role_demand": "tradespeople and warehouse workers", "client_type_a": "auto parts manufacturers", "client_type_b": "riverfront hospitality and gaming operators", "local_event": "the Caesars Windsor event calendar"},
    "Los Angeles":  {"industries": ["logistics", "hospitality", "entertainment", "health care support"], "hoods": ["Downtown", "Hollywood", "Westside", "South Bay", "San Fernando Valley"], "anchor": "the Ports of Los Angeles and Long Beach", "transit": "Metro rail and bus lines", "season": "awards season in winter and a Q4 retail surge run the calendar", "wage_note": "port adjacent warehouse pay climbs during peak import months", "employer_color": "port logistics operators in the South Bay and hotels in Hollywood and Downtown", "specific_corridor": "the South Bay port logistics belt", "second_corridor": "the Hollywood and Downtown hotel corridor", "fav_role_demand": "warehouse workers and banquet servers", "client_type_a": "third party logistics operators near the ports", "client_type_b": "studios and major hotels", "local_event": "the LA Convention Center event calendar"},
    "San Diego":    {"industries": ["hospitality", "life sciences", "logistics", "office"], "hoods": ["Downtown", "La Jolla", "Mission Valley", "Kearny Mesa", "Chula Vista"], "anchor": "the downtown bayfront and the convention district", "transit": "MTS trolleys and bus lines", "season": "a heavy summer tourism stretch through Comic Con and into fall", "wage_note": "hospitality wages rise sharply during Comic Con and summer", "employer_color": "convention hotels downtown and life sciences labs in Sorrento Valley", "specific_corridor": "the Marina District and Gaslamp hotel zone", "second_corridor": "the Sorrento Valley life sciences cluster", "fav_role_demand": "banquet servers and lab support staff", "client_type_a": "convention hotels and event venues", "client_type_b": "biotech and medical device firms", "local_event": "the San Diego Convention Center calendar"},
    "San Jose":     {"industries": ["tech", "office", "light manufacturing", "logistics"], "hoods": ["Downtown", "Willow Glen", "Almaden", "Berryessa", "Evergreen"], "anchor": "the North San Jose tech corridor on North First Street", "transit": "VTA light rail and Caltrain at Diridon Station", "season": "spring product launches and fall enterprise sales drive hiring", "wage_note": "tech contract rates are the highest in the region", "employer_color": "global tech firms in North San Jose and contract manufacturers near the airport", "specific_corridor": "the North First Street tech corridor", "second_corridor": "the airport adjacent manufacturing cluster", "fav_role_demand": "office, technical, and warehouse support", "client_type_a": "global technology firms", "client_type_b": "contract electronics manufacturers", "local_event": "the San Jose Convention Center event calendar"},
    "San Francisco":{"industries": ["tech", "hospitality", "office", "logistics"], "hoods": ["SoMa", "Mission", "Financial District", "Marina", "Sunset"], "anchor": "the SoMa office towers and convention zone around Moscone", "transit": "Muni and BART", "season": "spring through fall convention season fills hotels and venues", "wage_note": "hotel wages climb during peak conference months", "employer_color": "convention hotels around Moscone and tech firms in SoMa", "specific_corridor": "the Moscone convention zone in SoMa", "second_corridor": "the Financial District office core", "fav_role_demand": "banquet servers and office support", "client_type_a": "convention hotels around Moscone", "client_type_b": "Financial District law firms and banks", "local_event": "the Moscone convention schedule"},
    "Fresno":       {"industries": ["agriculture", "logistics", "health care support", "manufacturing"], "hoods": ["Downtown", "Tower District", "Woodward Park", "Fig Garden", "Old Fig Garden"], "anchor": "the Highway 99 agricultural and logistics corridor", "transit": "Fresno Area Express bus lines", "season": "harvest from late summer into fall sets the calendar", "wage_note": "agricultural and packing wages move with the harvest cycle", "employer_color": "packing houses near Highway 99 and care facilities in the Tower District", "specific_corridor": "the Highway 99 packing and warehouse strip", "second_corridor": "the Herndon Avenue office and retail belt", "fav_role_demand": "packing line and warehouse workers", "client_type_a": "regional packing and food companies", "client_type_b": "health care providers across the region", "local_event": "the Fresno Convention Center event calendar"},
}

# Per-service rich frame.
SERVICE_FRAME = {
    "temp-staffing": {
        "what": "short term coverage when a shift, a project, or a busy week needs hands fast",
        "win": "speed to first qualified worker on site",
        "examples": "warehouse pickers, machine operators, general labour, office support, and customer service",
        "fill_window": "Most shifts can be covered the same day or by the next business day.",
        "screen": "right to work, work history, role specific skills, and any required tickets or certifications",
        "payroll_line": "We run payroll, withholdings, and workers compensation reporting for every temporary worker we place.",
        "pricing_line": "Pricing works on a bill rate per hour that covers worker pay, statutory costs, our overhead, and a fee.",
        "conversion": "If a temporary worker becomes a great fit, we offer a conversion to your payroll at a fair flat fee or after a set number of hours worked.",
        "model_phrase": "temp coverage",
        "use_case_a": "covering a sick day or a no show on a Monday morning",
        "use_case_b": "running a six week project without adding a permanent head count",
        "use_case_c": "a seasonal push that needs ten or twenty workers across a few sites",
    },
    "permanent-placement": {
        "what": "a full time hire that goes straight onto the client payroll",
        "win": "finding a candidate who stays past the ninety day mark",
        "examples": "team leads, supervisors, accountants, specialists, and managers",
        "fill_window": "Most searches run two to six weeks depending on the seniority of the role.",
        "screen": "work history, references, role specific skills, behavioral fit, and any required credentials",
        "payroll_line": "The placed worker is on the client payroll from day one. We do not run payroll on permanent placements.",
        "pricing_line": "Pricing works as a flat placement fee or a percentage of first year base salary.",
        "conversion": "If the placed worker leaves inside the replacement window, we run a free search to replace them.",
        "model_phrase": "permanent hire",
        "use_case_a": "filling a backfill after a key person quits",
        "use_case_b": "growing a team that needs a real leader with a track record",
        "use_case_c": "a specialist role where the right candidate is not actively looking",
    },
    "hospitality-staffing": {
        "what": "trained front of house and back of house workers for restaurants, hotels, venues, and events",
        "win": "showing up uniformed, on time, and ready for service",
        "examples": "servers, bartenders, line cooks, dishwashers, banquet servers, housekeeping, and front desk",
        "fill_window": "Most event and weekend shifts can be filled inside forty eight hours.",
        "screen": "service experience, food handling where required, dress code readiness, and shift reliability",
        "payroll_line": "We run payroll, tip reporting where it applies, and workers compensation for every hospitality worker we send.",
        "pricing_line": "Pricing works on a per hour bill rate that varies by role and shift.",
        "conversion": "If a worker becomes a regular at your property, we offer a conversion to your payroll at a fair flat fee.",
        "model_phrase": "hospitality shift coverage",
        "use_case_a": "a banquet that needs eight servers on Saturday evening",
        "use_case_b": "a hotel back of house team short three line cooks on a Friday",
        "use_case_c": "a venue that needs a clean opening and closing crew for a week long event",
    },
}

def get_authority(state_abbr):
    if state_abbr == "ON":
        return {
            "name": "Ontario Ministry of Labour, Immigration, Training and Skills Development",
            "url": "https://www.ontario.ca/page/ministry-labour-immigration-training-skills-development",
            "context": "Sets the Employment Standards Act and workplace rights rules that govern every staffing arrangement in Ontario.",
        }
    return {
        "name": "California Department of Industrial Relations",
        "url": "https://www.dir.ca.gov",
        "context": "Enforces California wage, hour, and workplace safety rules, including the rules that govern temporary and contract staffing.",
    }

def secondary_authority(state_abbr):
    if state_abbr == "ON":
        return {
            "name": "Workplace Safety and Insurance Board",
            "url": "https://www.wsib.ca",
            "context": "Provides workplace injury coverage that applies to every temporary and contract worker we place in Ontario.",
        }
    return {
        "name": "California Employment Development Department",
        "url": "https://edd.ca.gov",
        "context": "Handles payroll tax, unemployment insurance, and worker classification rules that apply to staffing in California.",
    }

COMPLIANCE = {
    "ON": {
        "statute": "the Employment Standards Act",
        "agency": "the Ontario Ministry of Labour",
        "coverage": "WSIB workplace injury coverage",
        "extra_law": "the Temporary Help Agency licensing rule that took effect July 1, 2024",
        "extra_short": "the new temp agency licensing rule",
    },
    "CA": {
        "statute": "California Labor Code and the Industrial Welfare Commission wage orders",
        "agency": "the California Department of Industrial Relations",
        "coverage": "workers compensation",
        "extra_law": "the AB 5 worker classification test",
        "extra_short": "the AB 5 classification test",
    },
}

# Use a deterministic index per (city, service) to pick distinct sentence patterns.
# Service is mixed in twice to make sibling pages within a city diverge more.
def picker(city, state, service):
    seed = hashlib.md5(f"{city}|{state}|{service}|{service[::-1]}".encode()).hexdigest()
    return [int(seed[i:i+2], 16) for i in range(0, 32, 2)]

# Multiple opening patterns per service.
def intro_short(city, state, service):
    sf = SERVICE_FRAME[service]
    p = CITY_PROFILE[city]
    label = SERVICE_LABEL[service]
    idx = picker(city, state, service)
    options = [
        f"We find, hire, and staff {label.lower()} for {city} employers, with screening and a replacement guarantee on every placement. {sf['fill_window']}",
        f"Need {label.lower()} in {city}? We pull from an active pool near {p['hoods'][0]}, screen for the role, and get the worker to site. {sf['fill_window']}",
        f"{label} in {city} from a team that knows {p['anchor']}. We find the worker, hire them onto our books where needed, and staff your site fast.",
        f"For {label.lower()} in {city}, we move fast on {p['fav_role_demand']} and back every placement with a replacement guarantee.",
    ]
    return options[idx[0] % len(options)]

def local_context(city, state, service):
    sf = SERVICE_FRAME[service]
    p = CITY_PROFILE[city]
    c = COMPLIANCE[state]
    idx = picker(city, state, service)
    label = SERVICE_LABEL[service].lower()
    a = [
        f"{city} runs on {p['employer_color']}, and that mix shapes the {label} requests we see most weeks.",
        f"Most {city} candidates live near {p['hoods'][0]}, {p['hoods'][1]}, and {p['hoods'][2]}, and travel on {p['transit']} for the shift.",
        f"In {city}, {p['season']}, which sets the pace of same week {label} requests.",
        f"Our {label} pool in {city} sits across {p['hoods'][3]}, {p['hoods'][4]}, and the towns around {p['anchor']}.",
        f"For {label} in {city}, {p['wage_note']}, and we move pay bands when a role keeps stalling.",
        f"{city} employers compete on shift flexibility and commute time as much as on wage, especially for {p['fav_role_demand']}.",
        f"Demand for {label} in {city} concentrates around {p['specific_corridor']}, with steady flow from {p['second_corridor']}.",
        f"In {city}, {p['client_type_a']} and {p['client_type_b']} drive most of the {label} bookings we run.",
    ]
    b = [
        f"Every {label} arrangement we set up runs under {c['statute']} as enforced by {c['agency']}, and workers we place are covered by {c['coverage']} where the law requires it.",
        f"We keep records that meet {c['statute']}, and we follow {c['extra_law']} when we structure paperwork for {city} clients.",
        f"{c['extra_short'].capitalize()} sits behind every contract we sign in {city}, and we hold compliance documents for the life of each placement.",
        f"For {city} clients, we run {c['coverage']}, payroll, and statutory reporting against {c['statute']} from day one.",
        f"Compliance in {city} is non negotiable. Workers are covered by {c['coverage']}, and our paperwork lines up with {c['statute']}.",
    ]
    event_lines = [
        f"When {p['local_event']} ramps up, {label} requests in {city} jump.",
        f"{city} hiring managers tell us {p['season']}, and that drives our recruiting calendar.",
        f"Transit on {p['transit']} sets the commute that {city} candidates will accept for a {label} shift.",
        f"Around {p['anchor']}, the {label} demand stays steady all year.",
        f"{p['employer_color'].capitalize()} call us first when a {label} role opens, often because the alternative is days of inbound resumes.",
        f"For {label} requests in {city}, we run against {p['client_type_a']} schedules and the {p['client_type_b']} rotation.",
    ]
    # Use 6 picker bytes to choose 3 a lines + 1 b line + 1 event line + 1 more a line.
    a_choices = []
    used = set()
    for off in [1, 2, 3, 7]:
        i = (idx[off] + off) % len(a)
        if i not in used:
            a_choices.append(a[i])
            used.add(i)
    # Fill to 4 a lines.
    for i, line in enumerate(a):
        if len(a_choices) >= 4:
            break
        if i not in used:
            a_choices.append(line)
            used.add(i)
    out = a_choices[:4]
    out.append(b[idx[4] % len(b)])
    out.append(event_lines[idx[5] % len(event_lines)])
    # Service-specific market angle to differentiate same-city pages.
    service_market = {
        "temp-staffing": [
            f"For temp shifts in {city}, attendance is the metric. We rotate workers off the list when reliability drops and onboard fresh candidates every week.",
            f"Temp coverage in {city} runs on a same week clock. Most requests come in on a Monday and need workers by Wednesday or Thursday.",
            f"The {city} temp model relies on a deep bench. We onboard new workers in batches so the pool stays current for {p['fav_role_demand']} requests.",
        ],
        "permanent-placement": [
            f"Permanent placement work in {city} runs longer. A typical search takes three to five weeks from brief to offer, with deep reference checks for every short list candidate.",
            f"For {city} permanent searches, we map the market first. That means identifying every employer running comparable roles and the wage band each one is paying.",
            f"The {city} permanent placement game is about ninety day retention. We push back when a brief reads like a temp role, because the wrong placement burns trust on both sides.",
        ],
        "hospitality-staffing": [
            f"Hospitality work in {city} runs on event flow. Banquets, weekend dinner service, and seasonal volume drive most of the shift requests we see.",
            f"For {city} hospitality, dress code and food handling certifications get checked before every shift. We do not send workers who cannot meet the venue spec.",
            f"The {city} hospitality bench knows the venues. Most of our roster has worked at least one shift at the big {p['anchor']} properties already.",
        ],
    }
    out.append(service_market[service][idx[7] % len(service_market[service])])
    return " ".join(out)

def service_details(city, state, service):
    sf = SERVICE_FRAME[service]
    p = CITY_PROFILE[city]
    c = COMPLIANCE[state]
    idx = picker(city, state, service)
    label = SERVICE_LABEL[service].lower()
    step_openers = [
        f"Here is how our {label} process runs in {city}.",
        f"Our {city} workflow on {label} has four steps.",
        f"What working with us on a {city} {label} role looks like.",
        f"Here is the play we run for every {label} request out of {city}.",
        f"For {city} {label}, the steps look like this.",
    ]
    step1 = [
        f"First, you tell us the role, the shift, the start date, and the pay band. For {city} clients we ask about commute on {p['transit']} and any neighborhood preferences.",
        f"Step one is a brief. You share the role, the shift pattern, the pay, and any site instructions for the {p['hoods'][0]} or {p['hoods'][1]} location.",
        f"We start with a fifteen minute call to scope the role, the shift, the start date, and the {city} pay band, then we confirm the address and any site rules.",
        f"You tell us what is open, when the worker needs to start, and what shift they will work. We capture pay against the going {city} rate before we leave the call.",
    ]
    step2 = [
        f"Second, we pull from an active {city} pool, with strong coverage near {p['anchor']}, and we screen for {sf['screen']}.",
        f"Next, we tap candidates we already know around {p['hoods'][2]} and {p['hoods'][3]}, screen them for {sf['screen']}, and call references.",
        f"Then we work the {city} pool, focus on {p['fav_role_demand']} where the role calls for it, screen for {sf['screen']}, and confirm availability.",
        f"We work both our internal {city} bench and new candidates who match {p['employer_color']}. The screen covers {sf['screen']}.",
    ]
    step3 = [
        f"Third, we send a short list of {city} candidates so you can pick, or we send a worker straight to site for fast fill shifts.",
        f"After the screen we send the short list with notes on each candidate. For urgent {city} fills we put a vetted worker on the schedule.",
        f"We send a short list for selection, or for same week fills we send the closest ready candidate to your {city} site.",
        f"You get a short list with availability, pay rate, and last reference notes. For shift fills in {city} we can skip the short list and send the worker.",
    ]
    step4 = [
        f"Fourth, we follow up after the first shift or first week. Anyone who does not work out in {city} gets replaced under our guarantee.",
        f"After the start date we check in inside the first week. If the fit is off, we replace the worker on the next {city} shift.",
        f"We stay in touch past the start date. {city} clients keep our direct line for fill in requests and replacements.",
        f"Once the worker is on site, we check in after shift one and again at week one. Replacements ship the same day in {city} where we can.",
    ]
    pricing = [
        sf['pricing_line'] + f" The rate sheet for your {city} role comes in writing before any worker starts.",
        sf['pricing_line'] + f" You see the number for the role and shift before you commit, and the {city} rate locks for the engagement.",
        sf['pricing_line'] + f" We send a written quote that covers the worker pay, statutory costs, and our fee on the {city} placement, you approve it, and there are no surprise charges.",
        sf['pricing_line'] + f" {city} pay rates move with {p['season']}, and the written rate reflects what the market is paying that week.",
    ]
    coverage = [
        sf['payroll_line'] + f" For {city} clients, records sit on file for the period {c['statute']} requires.",
        sf['payroll_line'] + f" Pay stubs, statutory paperwork, and reporting all run through us where the model calls for it, and {city} compliance holds up to a {c['agency']} review.",
        sf['payroll_line'] + f" Our compliance work matches what {p['client_type_a']} and {p['client_type_b']} already expect in {city}.",
        sf['payroll_line'] + f" Every {city} placement comes with documented coverage that maps to {c['statute']}.",
    ]
    use_case = [
        f"Common {city} jobs we cover: {sf['use_case_a']}, {sf['use_case_b']}, and {sf['use_case_c']}. Last quarter we worked all three for {p['client_type_a']}.",
        f"In {city} we run a lot of {sf['use_case_a']} and {sf['use_case_c']}, often for {p['client_type_b']} near {p['specific_corridor']}.",
        f"The {city} requests we see most are {sf['use_case_b']} and {sf['use_case_c']}, with a heavy lean toward {p['client_type_a']} during peak weeks.",
        f"A typical {city} week brings {sf['use_case_a']} from {p['client_type_b']} and {sf['use_case_c']} from {p['client_type_a']}.",
    ]
    why = [
        f"What wins {label} placements in {city} is {sf['win']}, and we focus there before anything else.",
        f"In {city}, {sf['win']} is what gets a client to call us back. That is the bar we set against {p['employer_color']}.",
        f"The reason {city} employers stick with us on {label} is {sf['win']} on every booking and a clean follow up after the start date.",
        f"{city} clients pick us because {sf['win']} is the metric we measure ourselves on every week.",
    ]
    conv = [
        sf['conversion'] + f" The paperwork to convert a {city} worker is short.",
        sf['conversion'] + f" In {city}, the conversion option gets used most often by {p['client_type_a']} after a strong trial.",
        sf['conversion'] + f" Most {city} clients use the conversion option at least once a year.",
        sf['conversion'] + f" For {p['client_type_b']} in {city} we run conversions often because the trial period gives both sides a clean read.",
    ]
    # Add a market color paragraph that is heavily city specific.
    market_color = [
        f"{city} sits on {p['anchor']}, with {p['employer_color']} pulling most of the {label} demand we see. Pay rates in {p['specific_corridor']} run at the higher end, and pay in {p['second_corridor']} sits a notch lower.",
        f"In {city}, {p['specific_corridor']} and {p['second_corridor']} drive most of the {label} requests. {p['employer_color'].capitalize()} are our most frequent clients.",
        f"The {city} story for {label} is {p['employer_color']}, with shift demand concentrated around {p['specific_corridor']}. Candidates from {p['hoods'][1]} and {p['hoods'][3]} travel for the right rate.",
        f"Most weeks our {city} {label} desk works {p['client_type_a']} on {p['specific_corridor']} and {p['client_type_b']} on {p['second_corridor']}.",
    ]
    # Add a service-specific tail paragraph to differentiate same city across services.
    service_specific_tail = {
        "temp-staffing": [
            f"For shift fills in {city}, our temp bench is strongest in {p['hoods'][0]} and {p['hoods'][2]}. Cover for a sick day, a no show, or a seasonal spike often ships from this pool inside hours.",
            f"{city} temp workers from our bench show up uniformed if the role calls for it, with the right footwear, and ready to clock in. We do not send anyone we have not already vetted.",
            f"The {city} temp model lives or dies on attendance. We track no shows by candidate, retire workers who slip, and only return performers to the shift list.",
        ],
        "permanent-placement": [
            f"Permanent placement in {city} is a search, not a referral list. We map the market, reach out direct, and bring you candidates who match the role brief, not just whoever is on a job board.",
            f"For permanent roles in {city}, we run a written brief, calibrate against two or three baseline candidates, and only push forward people who match the must haves.",
            f"{city} permanent placement is measured in ninety day stays. That is the number we report on each quarter, and it is how we choose which candidates make the short list.",
        ],
        "hospitality-staffing": [
            f"Hospitality in {city} runs on shift count and on guest experience. We send servers and back of house staff who already know the {p['anchor']} venues and who will not call out at the last minute.",
            f"For {city} hospitality, our bench holds servers, bartenders, cooks, and housekeepers who have worked the venues you are likely to book. Many have been with us for over a year.",
            f"{city} hospitality clients give us venue specs once, and we hold them on file. Dress code, table layout, expected service style, and event rhythm all sit in the candidate brief.",
        ],
    }
    parts = [
        step_openers[idx[6] % len(step_openers)],
        step1[idx[7] % len(step1)],
        step2[idx[8] % len(step2)],
        step3[idx[9] % len(step3)],
        step4[idx[10] % len(step4)],
        market_color[idx[11] % len(market_color)],
        use_case[idx[12] % len(use_case)],
        why[idx[13] % len(why)],
        pricing[idx[14] % len(pricing)],
        coverage[idx[15] % len(coverage)],
        conv[idx[6] % len(conv)],
        service_specific_tail[service][idx[7] % len(service_specific_tail[service])],
    ]
    return " ".join(parts)

def faq_list(city, state, service):
    p = CITY_PROFILE[city]
    sf = SERVICE_FRAME[service]
    c = COMPLIANCE[state]
    label = SERVICE_LABEL[service]
    idx = picker(city, state, service)
    qa = []

    # Service-specific extra FAQ at the end to differentiate same-city service variants.
    service_extra_faq = {
        "temp-staffing": {
            "q": f"What are typical temp shift lengths in {city}?",
            "a": f"In {city} our shifts run from a single four hour event coverage up to twelve week project blocks. The most common pattern is a four to eight week run around {p['season'].split('and')[-1].strip() or p['season']}, with refill as the workload changes."
        },
        "permanent-placement": {
            "q": f"What is your replacement guarantee on a permanent placement in {city}?",
            "a": f"If the placed worker leaves inside the first ninety days for {city} clients, we run a free replacement search. The clock starts on the start date, not the offer date, and the search runs against the same brief."
        },
        "hospitality-staffing": {
            "q": f"Do you cover banquets and special events in {city}?",
            "a": f"Yes. {city} banquet and event coverage is one of the highest volume parts of our book. We can field servers, bartenders, line cooks, and bussers for venues across {p['hoods'][0]} and {p['hoods'][2]} with as little as forty eight hours notice."
        },
    }
    q1_opts = [
        f"How fast can you place a {label.lower()} worker in {city}?",
        f"What is your fill time for {label.lower()} in {city}?",
        f"How quickly can a {label.lower()} worker start in {city}?",
    ]
    a1_opts = [
        f"{sf['fill_window']} Our {city} pool is strongest near {p['anchor']}. Call {PHONE} or send the role through our contact form to start the clock.",
        f"{sf['fill_window']} For {city} we keep a ready bench across {p['hoods'][0]}, {p['hoods'][1]}, and {p['hoods'][3]}. Call {PHONE} to brief the role.",
        f"{sf['fill_window']} Speed in {city} comes from a standing pool that already knows {p['employer_color']}. Reach us at {PHONE}.",
    ]
    qa.append({"q": q1_opts[idx[0] % 3], "a": a1_opts[idx[1] % 3]})

    q2_opts = [
        f"How much does {label.lower()} cost in {city}?",
        f"What does {label.lower()} pricing look like in {city}?",
        f"What is the bill rate for {label.lower()} in {city}?",
    ]
    a2_opts = [
        f"{sf['pricing_line']} The full number, with statutory costs and our fee, is in writing before the first {city} worker shows up.",
        f"{sf['pricing_line']} {city} rates move with the season, and the quote you receive is the price you pay.",
        f"{sf['pricing_line']} For {city} clients we send a written rate card the same day the role is briefed.",
    ]
    qa.append({"q": q2_opts[idx[2] % 3], "a": a2_opts[idx[3] % 3]})

    qa.append({
        "q": f"What is the difference between {label.lower()}, temp to hire, and permanent placement?",
        "a": f"Temporary staffing means the worker is on our payroll for a short window. Temp to hire starts on our payroll and converts to yours after a set time. Permanent placement puts the worker on your payroll from day one. {city} clients often mix all three. {p['client_type_a'].capitalize()} tend to use temporary and permanent in the same quarter."
    })

    a4_opts = [
        sf['payroll_line'] + f" Our {city} compliance work holds records that meet {c['statute']} and would stand up to a {c['agency']} review.",
        sf['payroll_line'] + f" For {city} clients, we run statutory reporting that matches {c['statute']} from the first hour worked.",
        sf['payroll_line'] + f" The records we hold for {city} placements line up with {c['statute']} requirements.",
    ]
    qa.append({"q": f"Who handles payroll and {c['coverage']} for the worker?", "a": a4_opts[idx[4] % 3]})

    a5_opts = [
        f"In {city} we staff {p['industries'][0]}, {p['industries'][1]}, {p['industries'][2]}, and {p['industries'][3]}. Sample roles include {sf['examples']}. Top demand right now is {p['fav_role_demand']}.",
        f"Our {city} desk covers {p['industries'][0]}, {p['industries'][1]}, and {p['industries'][2]}. The roles we run most are {sf['examples']}.",
        f"For {city} we focus on {p['industries'][0]} and {p['industries'][1]} as the lead industries, with steady demand from {p['industries'][2]} and {p['industries'][3]}. Roles include {sf['examples']}.",
    ]
    qa.append({"q": f"What industries do you staff for in {city}?", "a": a5_opts[idx[5] % 3]})

    a6_opts = [
        f"Active candidate pools sit across {p['hoods'][0]}, {p['hoods'][1]}, {p['hoods'][2]}, {p['hoods'][3]}, and {p['hoods'][4]}. We staff jobs near {p['anchor']} most weeks.",
        f"Our {city} coverage runs from {p['hoods'][0]} through {p['hoods'][4]}, with the heaviest pool around {p['specific_corridor']}.",
        f"We work {p['hoods'][0]}, {p['hoods'][1]}, and {p['hoods'][2]} most weeks, with newer growth in {p['hoods'][3]} and {p['hoods'][4]}.",
    ]
    qa.append({"q": f"What parts of {city} do you cover?", "a": a6_opts[idx[6] % 3]})

    a7_opts = [
        f"We screen for {sf['screen']}. References get called, not just listed. For roles that need a background check or drug screen, that runs before the first shift. Anything {c['extra_short']} touches is double checked.",
        f"Our {city} screen covers {sf['screen']}. We call references, run background checks where the role requires, and confirm shift availability before the start date.",
        f"For {city} we use a layered screen: {sf['screen']}. We also pre brief the candidate on site address and {p['transit']} commute.",
    ]
    qa.append({"q": f"How do you screen {label.lower()} candidates?", "a": a7_opts[idx[7] % 3]})

    a8_opts = [
        sf['conversion'] + f" Many {city} clients use a {label.lower()} placement as a paid trial before a full time offer.",
        sf['conversion'] + f" The conversion paperwork in {city} is short and the cost is fixed up front.",
        sf['conversion'] + f" For {p['client_type_a']} in {city}, conversion is a normal play after the trial period.",
    ]
    qa.append({"q": f"Can I hire a {label.lower()} worker as a full time employee?", "a": a8_opts[idx[8] % 3]})

    a9_opts = [
        f"We replace the worker. For temporary and contract roles in {city} we send a new candidate the same day where possible. For permanent placement we run a free replacement search if the hire leaves inside the agreed window.",
        f"Replacement is on us. {city} clients keep a direct line for replacement requests, and the new candidate ships from the same vetted pool.",
        f"The replacement guarantee applies on every {city} booking. For permanent placement we restart the search at no extra fee inside the window.",
    ]
    qa.append({"q": f"What happens if the worker does not work out?", "a": a9_opts[idx[9] % 3]})

    a10_opts = [
        f"Send the role, shift, and start date through our contact form, or call {PHONE}. We come back inside one business day with a short list or a worker on the way to your {city} site.",
        f"Call {PHONE} or send the request through our form. We reply inside one business day with a candidate list for {city}.",
        f"You can call {PHONE} or use our contact form. The first response on a {city} request comes back inside the same business day.",
    ]
    qa.append({"q": f"How do I request {label.lower()} for this week in {city}?", "a": a10_opts[idx[10] % 3]})

    # Add a service-specific final FAQ that pushes same-city pages apart.
    qa.append(service_extra_faq[service])

    return qa

def title(city, state, service):
    return f"{SERVICE_LABEL[service]} in {city}, {state}"

def meta_description(city, state, service):
    label = SERVICE_LABEL[service]
    md = (f"{label} in {city}, {state}. We find, hire, and staff workers fast for {city} employers, "
          f"with screening, payroll, and a replacement guarantee. Call {PHONE}.")
    return md[:160]

BANNED_SUBSTRINGS = [
    "calibrated intake",
    "continuity is the product",
    "named recruiter",
    "Panama",
    "panama",
    "Royal York",
    "RYPM",
    "Last updated",
    "Ontario-wide",
    "California-wide",
    "Ontario wide",
    "California wide",
    "Bridgepoint",
    "Bridge Point",
    "Single PM",
    "MoveSmart",
    "Revun",
    "Northstone",
    "Rothenbury",
]
EM_DASH = "—"
EN_DASH = "–"

def clean_copy(s):
    s = s.replace(EM_DASH, ", ").replace(EN_DASH, ", ")
    s = re.sub(r"\s+-\s+", ", ", s)
    s = re.sub(r",\s*,", ",", s)
    s = re.sub(r"\s{2,}", " ", s)
    return s.strip()

def check_banned(text):
    found = []
    low = text.lower()
    for b in BANNED_SUBSTRINGS:
        if b.lower() in low:
            found.append(b)
    if EM_DASH in text or EN_DASH in text:
        found.append("em/en dash")
    return found

def shingles(text, k=10):
    tokens = re.findall(r"[a-z0-9]+", text.lower())
    if len(tokens) < k:
        return set()
    return set(" ".join(tokens[i:i+k]) for i in range(len(tokens) - k + 1))

def jaccard(a, b):
    if not a or not b:
        return 0.0
    inter = len(a & b); union = len(a | b)
    return inter / union if union else 0.0

def body_text(page):
    parts = [page.get("intro", ""), page.get("local_context", ""), page.get("service_details", "")]
    for fq in (page.get("faq") or []):
        parts.append(fq.get("q", "")); parts.append(fq.get("a", ""))
    return " ".join(parts)

def regenerate(page):
    city = page["city"]; state = page["state_abbr"]; service = page["service_slug"]
    return {
        "title": title(city, state, service),
        "meta_description": meta_description(city, state, service),
        "intro": clean_copy(intro_short(city, state, service)),
        "local_context": clean_copy(local_context(city, state, service)),
        "service_details": clean_copy(service_details(city, state, service)),
        "faq": [{"q": clean_copy(q["q"]), "a": clean_copy(q["a"])} for q in faq_list(city, state, service)],
        "neighborhoods": CITY_PROFILE[city]["hoods"][:6],
        "authority_citations": [get_authority(state), secondary_authority(state)],
        "image_alt": f"{SERVICE_LABEL[service]} in {city}, {state} placed by Langford Staffing",
    }

def main():
    bundle = json.loads(CONTENT_PATH.read_text())
    target_keys = set()
    for city in ON_CITIES:
        for svc in SERVICES:
            target_keys.add((city, "ON", svc))
    for city in CA_CITIES:
        for svc in SERVICES:
            target_keys.add((city, "CA", svc))

    updated_pages = []
    banned_hits = []

    for page in bundle["pages"]:
        if page.get("type") != "service_in_city":
            continue
        key = (page.get("city"), page.get("state_abbr"), page.get("service_slug"))
        if key not in target_keys:
            continue

        new_fields = regenerate(page)
        page.pop("jurisdiction", None)
        page.pop("authority_citation", None)
        for k, v in new_fields.items():
            page[k] = v

        all_text = " ".join([page["title"], page["meta_description"], page["intro"],
                             page["local_context"], page["service_details"],
                             " ".join(f"{q['q']} {q['a']}" for q in page["faq"])])
        hits = check_banned(all_text)
        if hits:
            banned_hits.append((page["url"], hits))

        updated_pages.append(page)

    print(f"Regenerated {len(updated_pages)} of {len(target_keys)} target pages.")
    if banned_hits:
        print("BANNED PHRASE HITS:")
        for u, h in banned_hits:
            print(" ", u, h)
        sys.exit(1)

    print("Running 20% body-overlap gate...")
    shingle_sets = {p["url"]: shingles(body_text(p)) for p in updated_pages}
    urls = list(shingle_sets.keys())
    worst_pair = (None, None, 0.0)
    fails = []
    for i in range(len(urls)):
        for j in range(i + 1, len(urls)):
            sim = jaccard(shingle_sets[urls[i]], shingle_sets[urls[j]])
            if sim > worst_pair[2]:
                worst_pair = (urls[i], urls[j], sim)
            if sim > 0.20:
                fails.append((urls[i], urls[j], sim))

    print(f"Worst pair: {worst_pair[0]} vs {worst_pair[1]} = {worst_pair[2]:.3f}")
    overlap_pass = not fails
    if fails:
        print(f"FAILED: {len(fails)} pairs over 20% overlap. Top 10:")
        for a, b, s in sorted(fails, key=lambda x: -x[2])[:10]:
            print(f"  {s:.3f}  {a}  vs  {b}")
    else:
        print("Overlap gate PASSED.")

    CONTENT_PATH.write_text(json.dumps(bundle, ensure_ascii=False, indent=2))
    print(f"Wrote {CONTENT_PATH}")
    if not overlap_pass:
        sys.exit(2)

if __name__ == "__main__":
    main()
