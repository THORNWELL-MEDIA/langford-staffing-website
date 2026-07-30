import { type ReactNode } from 'react'

export interface Role {
  /** Unique URL identifier (lowercase + dashes, no spaces). */
  slug: string
  /** Display title, e.g. "Senior Leasing Agent". */
  title: string
  /** Free-form department / team label shown under the title in the hero. */
  department: string
  /** Employment type. "Full-time" | "Part-time" | "Contract" | "Internship" */
  type: string
  /** Work Type for display e.g. "Remote", "Hybrid", "On-site" */
  workTypeDisplay: string
  /** Raw work type string from Work_Type */
  workType: string
  /** Job_Type string from API used for apply form condition */
  jobType: string
  /** City the role is based in. Use "Remote" for fully remote roles. */
  city: string
  /** Province (Canada) or state (US). */
  province: string
  /** Country. */
  country: string
  /** Display location string used in the hero. */
  locationDisplay: string
  /** Job opening ID. */
  jobId: string
  /** Job opening ID for display. */
  jobOpeningId: string
  /** Location ID from job API */
  locId?: string | number
  /** ISO date — YYYY-MM-DD. Shown in the hero. */
  postingStartDate: string
  /** Display string — e.g. "$55,000 to $75,000 base". */
  compensation: string
  /** Job description summary — short paragraph in the body. */
  summary: string
  /** Bullet list — Key Responsibilities section. */
  responsibilities: string[]
  /** Bullet list — Required Skills section. */
  requiredSkills: string[]
  /** Bullet list — Good to have Skills (optional). */
  goodToHaveSkills: string[]
  /** Bullet list — Education and Experience. */
  educationAndExperience: string[]
  /** Free-form short paragraph — Additional Information block. */
  additionalInfo: string | null
  /** Whether relocation assistance is provided. */
  relocationAssistance: boolean
  /** HTML description from API. */
  htmlDescription?: string
  /** Job Category for filtering (string or array of strings). */
  category: string | string[]
  /** Industry (string or array of strings). */
  industry?: string | string[]
}

interface ApiJob {
  Job_Description?: string
  Pay_Disclosure?: string
  Salary?: string
  Work_Type?: string | null
  City?: string
  State?: string
  Country?: string
  slug: string
  Posting_Title?: string
  Industry?: string | string[]
  Job_Type?: string
  zoho_id?: string
  Date_Opened?: string
  Role_Category?: string | string[]
  Job_Category?: string | string[]
  Job_Opening_ID?: string
  Client_Name?: string
  location_id?: string | number
  location_Id?: string | number
}

function getCompanySlugPrefix(clientName?: string): string {
  if (!clientName) return 'job'
  const name = clientName.trim()
  const lowerName = name.toLowerCase()

  if (lowerName.includes('movesmart')) return 'msr'
  if (lowerName.includes('royal york')) return 'rypm'
  if (lowerName.includes('bridgepoint')) return 'bm'

  return name.split(/[\s_\-]+/).filter(Boolean).map(w => w[0].toLowerCase()).join('')
}

export async function fetchRolesFromApi(): Promise<Role[]> {
  const baseUrl = process.env.NEXT_PUBLIC_PORTAL_BASE_URL || 'https://phpstack-1217932-6516253.cloudwaysapps.com'
  const url = `${baseUrl}/api/v1/job-postings`
  try {
    const res = await fetch(url, { cache: 'no-store' })
    if (!res.ok) {
      console.error('Failed to fetch roles', res.status)
      return []
    }
    const json = await res.json()
    const apiJobs = json.data || []
    return apiJobs.map((job: ApiJob) => {
      let rawHtml = job.Job_Description || ''

      const clientName = (job.Client_Name || '').trim()
      const namesToReplace = [
        'Movesmart Rentals',
        'MoveSmart',
        'Royal York Property Management',
        'Royal York',
        'Revun',
        'Bridgepoint'
      ]
      
      if (clientName && !clientName.toLowerCase().includes('langford')) {
        namesToReplace.push(clientName)
      }

      const uniqueNames = Array.from(new Set(namesToReplace.filter(n => n && n.length > 3)))
        .sort((a, b) => b.length - a.length)

      uniqueNames.forEach(name => {
        const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        const regex = new RegExp(`\\b${escapedName}\\b`, 'gi')
        rawHtml = rawHtml.replace(regex, 'Our Client')
      })

      // Selectively strip font-size, font-family, and colors to preserve other formatting (like bold/headings)
      const styleStripRegex = /(font-family|font-size|color|background-color|background|line-height)\s*:[^;]+;?/gi

      const cleanStyles = (html: string) => {
        let cleanedHtml = html.replace(/style="([^"]*)"/gi, (match, styles) => {
          const cleaned = styles.replace(styleStripRegex, '').trim()
          return cleaned ? `style="${cleaned}"` : ''
        })
        cleanedHtml = cleanedHtml.replace(/style='([^']*)'/gi, (match, styles) => {
          const cleaned = styles.replace(styleStripRegex, '').trim()
          return cleaned ? `style='${cleaned}'` : ''
        })
        return cleanedHtml
      }

      rawHtml = cleanStyles(rawHtml)

      // Strip <font> tags but keep the content inside them
      rawHtml = rawHtml.replace(/<\/?font[^>]*>/gi, '')

      // Strip any paragraph or div whose text content is empty / whitespace
      rawHtml = rawHtml.replace(/<(p|div)[^>]*>(.*?)(?:<\/p>|<\/div>)/gi, (fullMatch, tag, inner) => {
        const text = inner.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim()
        if (text.length === 0) {
          return ''
        }
        return fullMatch
      })
      rawHtml = rawHtml.replace(/(?:<br\s*\/?>\s*){2,}/gi, '<br>')

      // 1. Convert standalone bold section titles (in paragraphs or break lines) to <h3>
      const isHeadingText = (text: string) => {
        return text.length >= 2 && text.length <= 50 && !text.endsWith('.') && !/^[-•\d]/i.test(text) && !/\d+\s*(gb|mbps|ram|years)/i.test(text)
      }

      rawHtml = rawHtml.replace(/<(div|p)[^>]*>(.*?)(?:<\/div>|<\/p>)/gi, (fullMatch, tag, inner) => {
        const cleanText = inner.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim()
        if ((inner.includes('<b>') || inner.includes('<strong>')) && isHeadingText(cleanText)) {
          return `\n<h3>${cleanText}</h3>\n`
        }
        return fullMatch
      })

      rawHtml = rawHtml.replace(/(?:<br\s*\/?>|\n|^)\s*(?:<b>|<strong>)\s*([^<]{2,50}?)\s*(?:<\/b>|<\/strong>)\s*(?=<br\s*\/?>|\n|$)/gi, (match, headingText) => {
        const cleanText = headingText.replace(/&nbsp;/g, ' ').trim()
        if (isHeadingText(cleanText)) {
          return `\n<h3>${cleanText}</h3>\n`
        }
        return match
      })

      // 3. Format plain text lists (- item or • item) into HTML <ul><li>
      rawHtml = rawHtml.replace(/(?:<div[^>]*>|<p[^>]*>|<br\s*\/?>|\n|^)\s*[-•]\s+(.*?)\s*(?:<\/div>|<\/p>|<br\s*\/?>|\n|$)/gi, '\n<li>$1</li>\n')
      rawHtml = rawHtml.replace(/(?:\n*<li>.*?<\/li>\n*)+/g, (match) => `\n<ul>${match}</ul>\n`)

      if (clientName && !clientName.toLowerCase().includes('langford')) {
        rawHtml += '\n<p>#LI-DNI</p>'
      }

      const hidePay =
        job.Pay_Disclosure === 'Do not disclose pay' ||
        job.Salary === 'Do not disclose pay'
      let compensation = hidePay ? '' : job.Salary || ''
      if (compensation && /\d/.test(compensation)) {
        // Add commas to numbers 1000 and above
        compensation = compensation.replace(/\d{4,}/g, (match) => {
          return Number(match).toLocaleString('en-US')
        })

        compensation = `${compensation}`
      }

      const workTypeRaw = job.Work_Type ? String(job.Work_Type).trim() : ''
      const jobTypeRaw = job.Job_Type ? String(job.Job_Type).trim() : ''

      const employmentTypeDisplay = workTypeRaw || 'Full-Time'
      const workArrangementDisplay = jobTypeRaw || 'Remote'

      const locParts = []
      if (job.City) locParts.push(job.City)
      if (job.State) locParts.push(job.State)
      if (job.Country) locParts.push(job.Country)

      const locationDisplay = locParts.length > 0
        ? `${locParts.join(', ')} · ${workArrangementDisplay}`
        : workArrangementDisplay

      const prefix = getCompanySlugPrefix(job.Client_Name)
      const uniqueSlug = `${prefix}-${job.slug}`

      const industryVal = job.Industry || 'Careers'
      const departmentDisplay = Array.isArray(industryVal) ? industryVal.join(', ') : industryVal

      return {
        slug: uniqueSlug,
        title: job.Posting_Title || 'Untitled Role',
        department: departmentDisplay,
        type: employmentTypeDisplay,
        workTypeDisplay: workArrangementDisplay,
        workType: workArrangementDisplay,
        jobType: employmentTypeDisplay,
        city: job.City || '',
        province: job.State || '',
        country: job.Country || '',
        locationDisplay,
        jobId: job.zoho_id || '',
        jobOpeningId: (job.Job_Opening_ID || '').replace(/ZR/g, 'LS'),
        locId: job.location_id ?? job.location_Id ?? '',
        postingStartDate: job.Date_Opened ? job.Date_Opened.split('T')[0] : '',
        compensation,
        summary: '',
        responsibilities: [],
        requiredSkills: [],
        goodToHaveSkills: [],
        educationAndExperience: [],
        additionalInfo: null,
        relocationAssistance: false,
        htmlDescription: rawHtml,
        category: job.Role_Category || job.Job_Category || 'Other',
        industry: job.Industry || '',
      }
    })
  } catch (error) {
    console.error('Failed to fetch roles from API', error)
    return []
  }
}

/** Find a role by slug. Returns undefined if not found. */
export async function getRoleBySlug(slug: string): Promise<Role | undefined> {
  const roles = await fetchRolesFromApi()
  return roles.find((r) => r.slug === slug)
}

/** All slugs — used by generateStaticParams on the dynamic route. */
export async function getAllRoleSlugs(): Promise<string[]> {
  const roles = await fetchRolesFromApi()
  return roles.map((r) => r.slug)
}

export interface CityGroup {
  city: string
  roles: Role[]
}

export interface RegionGroup {
  region: string
  cities: CityGroup[]
}

export interface CountryGroup {
  country: string
  regions: RegionGroup[]
}

export function groupRolesByCountry(roles: Role[]): CountryGroup[] {
  const countryOrder: string[] = []
  const countryMap = new Map<
    string,
    { regionOrder: string[]; regionMap: Map<string, { cityOrder: string[]; cityMap: Map<string, Role[]> }> }
  >()

  for (const role of roles) {
    const countryKey = role.country || 'Other'
    if (!countryMap.has(countryKey)) {
      countryOrder.push(countryKey)
      countryMap.set(countryKey, {
        regionOrder: [],
        regionMap: new Map(),
      })
    }
    const country = countryMap.get(countryKey)!

    const regionKey = role.province || 'Other'
    if (!country.regionMap.has(regionKey)) {
      country.regionOrder.push(regionKey)
      country.regionMap.set(regionKey, {
        cityOrder: [],
        cityMap: new Map(),
      })
    }
    const region = country.regionMap.get(regionKey)!

    const cityKey = role.city || 'Remote'
    if (!region.cityMap.has(cityKey)) {
      region.cityOrder.push(cityKey)
      region.cityMap.set(cityKey, [])
    }
    region.cityMap.get(cityKey)!.push(role)
  }

  // Sort countries alphabetically
  countryOrder.sort((a, b) => a.localeCompare(b))

  return countryOrder.map((countryKey) => {
    const country = countryMap.get(countryKey)!
    return {
      country: countryKey,
      regions: country.regionOrder.map((regionKey) => {
        const region = country.regionMap.get(regionKey)!
        return {
          region: regionKey,
          cities: region.cityOrder.map((cityKey) => ({
            city: cityKey,
            roles: region.cityMap.get(cityKey)!,
          })),
        }
      }),
    }
  })
}
