"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchRolesFromApi = fetchRolesFromApi;
exports.getRoleBySlug = getRoleBySlug;
exports.getAllRoleSlugs = getAllRoleSlugs;
exports.groupRolesByCountry = groupRolesByCountry;
function getCompanySlugPrefix(clientName) {
    if (!clientName)
        return 'job';
    var name = clientName.trim();
    var lowerName = name.toLowerCase();
    if (lowerName.includes('movesmart'))
        return 'msr';
    if (lowerName.includes('royal york'))
        return 'rypm';
    if (lowerName.includes('bridgepoint'))
        return 'bm';
    return name.split(/[\s_\-]+/).filter(Boolean).map(function (w) { return w[0].toLowerCase(); }).join('');
}
function fetchRolesFromApi() {
    return __awaiter(this, void 0, void 0, function () {
        var baseUrl, url, res, json, apiJobs, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    baseUrl = process.env.NEXT_PUBLIC_PORTAL_BASE_URL || 'https://portal.revun.com';
                    url = "".concat(baseUrl, "/api/v1/job-postings");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch(url, { next: { revalidate: 60 } })];
                case 2:
                    res = _a.sent();
                    if (!res.ok) {
                        console.error('Failed to fetch roles', res.status);
                        return [2 /*return*/, []];
                    }
                    return [4 /*yield*/, res.json()];
                case 3:
                    json = _a.sent();
                    apiJobs = json.data || [];
                    return [2 /*return*/, apiJobs.map(function (job) {
                            var rawHtml = job.Job_Description || '';
                            var clientName = (job.Client_Name || '').trim();
                            var namesToReplace = [
                                'Movesmart Rentals',
                                'MoveSmart',
                                'Royal York Property Management',
                                'Royal York',
                                'Revun',
                                'Bridgepoint'
                            ];
                            if (clientName && !clientName.toLowerCase().includes('langford')) {
                                namesToReplace.push(clientName);
                            }
                            var uniqueNames = Array.from(new Set(namesToReplace.filter(function (n) { return n && n.length > 3; })))
                                .sort(function (a, b) { return b.length - a.length; });
                            uniqueNames.forEach(function (name) {
                                var escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                                var regex = new RegExp("\\b".concat(escapedName, "\\b"), 'gi');
                                rawHtml = rawHtml.replace(regex, 'Our Client');
                            });
                            // Selectively strip font-size, font-family, and colors to preserve other formatting (like bold/headings)
                            var styleStripRegex = /(font-family|font-size|color|background-color|background|line-height)\s*:[^;]+;?/gi;
                            var cleanStyles = function (html) {
                                var cleanedHtml = html.replace(/style="([^"]*)"/gi, function (match, styles) {
                                    var cleaned = styles.replace(styleStripRegex, '').trim();
                                    return cleaned ? "style=\"".concat(cleaned, "\"") : '';
                                });
                                cleanedHtml = cleanedHtml.replace(/style='([^']*)'/gi, function (match, styles) {
                                    var cleaned = styles.replace(styleStripRegex, '').trim();
                                    return cleaned ? "style='".concat(cleaned, "'") : '';
                                });
                                return cleanedHtml;
                            };
                            rawHtml = cleanStyles(rawHtml);
                            // Strip <font> tags but keep the content inside them
                            rawHtml = rawHtml.replace(/<\/?font[^>]*>/gi, '');
                            // Clean up messy Zoho HTML artifacts (non-breaking spaces, empty trailing br tags)
                            rawHtml = rawHtml.replace(/&nbsp;/gi, ' ');
                            rawHtml = rawHtml.replace(/<br\s*\/?>\s*(?=<\/div>|<\/p>)/gi, '');
                            // 1. Convert standalone bold text to <h3> (handles <div><b>Text</b></div> or <br><b>Text</b><br>)
                            rawHtml = rawHtml.replace(/<(div|p)[^>]*>\s*(?:<b>|<strong>)(.*?)(?:<\/b>|<\/strong>)\s*<\/\1>/gi, '\n<h3>$2</h3>\n');
                            rawHtml = rawHtml.replace(/(?:<br\s*\/?>|\n|^)\s*(?:<b>|<strong>)(.*?)(?:<\/b>|<\/strong>)\s*(?=<br\s*\/?>|\n|$)/gi, '\n<h3>$1</h3>\n');
                            // 2. Convert plain text ending in colon (like "Requirements:") to <h3>
                            rawHtml = rawHtml.replace(/<(div|p)[^>]*>\s*([A-Za-z0-9 &\/,-]+):\s*<\/\1>/gi, '\n<h3>$2</h3>\n');
                            rawHtml = rawHtml.replace(/(?:<br\s*\/?>|\n|^)\s*([A-Za-z0-9 &\/,-]+):\s*(?=<br\s*\/?>|\n|$)/gi, '\n<h3>$1</h3>\n');
                            // 3. Format plain text lists (- item or • item) into HTML <ul><li>
                            rawHtml = rawHtml.replace(/(?:<div[^>]*>|<p[^>]*>|<br\s*\/?>|\n|^)\s*[-•]\s+(.*?)\s*(?:<\/div>|<\/p>|<br\s*\/?>|\n|$)/gi, '\n<li>$1</li>\n');
                            rawHtml = rawHtml.replace(/(?:\n*<li>.*?<\/li>\n*)+/g, function (match) { return "\n<ul>".concat(match, "</ul>\n"); });
                            if (clientName && !clientName.toLowerCase().includes('langford')) {
                                rawHtml += '\n<p>#LI-DNI</p>';
                            }
                            var hidePay = job.Pay_Disclosure === 'Do not disclose pay' ||
                                job.Salary === 'Do not disclose pay';
                            var compensation = hidePay ? '' : job.Salary || '';
                            if (compensation && /\d/.test(compensation)) {
                                // Add commas to numbers 1000 and above
                                compensation = compensation.replace(/\d{4,}/g, function (match) {
                                    return Number(match).toLocaleString('en-US');
                                });
                                compensation = "".concat(compensation);
                            }
                            var isRemote = job.Work_Type == null || String(job.Work_Type).toLowerCase() === 'remote/hybrid';
                            var workTypeSuffix = isRemote ? 'Remote' : 'Hybrid';
                            var locParts = [];
                            if (job.City)
                                locParts.push(job.City);
                            if (job.State)
                                locParts.push(job.State);
                            if (job.Country)
                                locParts.push(job.Country);
                            var locationDisplay = locParts.length > 0
                                ? "".concat(locParts.join(', '), " \u00B7 ").concat(workTypeSuffix)
                                : workTypeSuffix;
                            var prefix = getCompanySlugPrefix(job.Client_Name);
                            var uniqueSlug = "".concat(prefix, "-").concat(job.slug);
                            return {
                                slug: uniqueSlug,
                                title: job.Posting_Title || 'Untitled Role',
                                department: job.Industry || 'Careers',
                                type: job.Job_Type || 'Full time',
                                city: job.City || '',
                                province: job.State || '',
                                country: job.Country || '',
                                locationDisplay: locationDisplay,
                                jobId: job.zoho_id || '',
                                jobOpeningId: (job.Job_Opening_ID || '').replace(/ZR/g, 'LS'),
                                postingStartDate: job.Date_Opened ? job.Date_Opened.split('T')[0] : '',
                                compensation: compensation,
                                summary: '',
                                responsibilities: [],
                                requiredSkills: [],
                                goodToHaveSkills: [],
                                educationAndExperience: [],
                                additionalInfo: null,
                                relocationAssistance: false,
                                htmlDescription: rawHtml,
                                workType: isRemote ? 'remote' : 'hybrid',
                                category: job.Role_Category || 'Other',
                            };
                        })];
                case 4:
                    error_1 = _a.sent();
                    console.error('Failed to fetch roles from API', error_1);
                    return [2 /*return*/, []];
                case 5: return [2 /*return*/];
            }
        });
    });
}
/** Find a role by slug. Returns undefined if not found. */
function getRoleBySlug(slug) {
    return __awaiter(this, void 0, void 0, function () {
        var roles;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchRolesFromApi()];
                case 1:
                    roles = _a.sent();
                    return [2 /*return*/, roles.find(function (r) { return r.slug === slug; })];
            }
        });
    });
}
/** All slugs — used by generateStaticParams on the dynamic route. */
function getAllRoleSlugs() {
    return __awaiter(this, void 0, void 0, function () {
        var roles;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchRolesFromApi()];
                case 1:
                    roles = _a.sent();
                    return [2 /*return*/, roles.map(function (r) { return r.slug; })];
            }
        });
    });
}
function groupRolesByCountry(roles) {
    var countryOrder = [];
    var countryMap = new Map();
    for (var _i = 0, roles_1 = roles; _i < roles_1.length; _i++) {
        var role = roles_1[_i];
        var countryKey = role.country || 'Other';
        if (!countryMap.has(countryKey)) {
            countryOrder.push(countryKey);
            countryMap.set(countryKey, {
                regionOrder: [],
                regionMap: new Map(),
            });
        }
        var country = countryMap.get(countryKey);
        var regionKey = role.province || 'Other';
        if (!country.regionMap.has(regionKey)) {
            country.regionOrder.push(regionKey);
            country.regionMap.set(regionKey, {
                cityOrder: [],
                cityMap: new Map(),
            });
        }
        var region = country.regionMap.get(regionKey);
        var cityKey = role.city || 'Remote';
        if (!region.cityMap.has(cityKey)) {
            region.cityOrder.push(cityKey);
            region.cityMap.set(cityKey, []);
        }
        region.cityMap.get(cityKey).push(role);
    }
    // Sort countries alphabetically
    countryOrder.sort(function (a, b) { return a.localeCompare(b); });
    return countryOrder.map(function (countryKey) {
        var country = countryMap.get(countryKey);
        return {
            country: countryKey,
            regions: country.regionOrder.map(function (regionKey) {
                var region = country.regionMap.get(regionKey);
                return {
                    region: regionKey,
                    cities: region.cityOrder.map(function (cityKey) { return ({
                        city: cityKey,
                        roles: region.cityMap.get(cityKey),
                    }); }),
                };
            }),
        };
    });
}
