#!/usr/bin/env python3
"""
Generate Langford editorial imagery via Imagen 4.

Spec: documentary, B&W or muted-color dominant, no faces toward camera, no logos,
no UI, photorealistic, executive briefing aesthetic.

Outputs to /public/img/editorial/{key}.jpg
"""
import json
import os
import sys
import time
from pathlib import Path

from google import genai
from google.genai import types

KEY = json.load(open('/Users/samhabib/.sam-config/credentials/google-ai-studio.json'))['api_key']
OUT = Path('/Users/samhabib/sam/b1-seo-agency/clients/active/langford-staffing/website/public/img/editorial')
OUT.mkdir(parents=True, exist_ok=True)

NEGATIVE_GUARD = (
    " Strict requirements: no faces toward camera, no readable text, no logos, "
    "no signage with words, no 3D render look, no illustration, no cartoon, "
    "no oversaturated colors. Editorial photojournalism only."
)

# (key, prompt, aspect_ratio)
JOBS = [
    # ABOUT
    ("about-hero",
     "Documentary photograph, 35mm lens, black and white, late afternoon, exterior of a downtown office building with classic architectural detail, no people, no logos, photorealistic, editorial restraint, executive briefing aesthetic.",
     "16:9"),

    # SERVICES INDEX
    ("services-hero",
     "Documentary photograph, 50mm lens, muted color, professional in conservative business attire shot from three-quarter back angle no face toward camera, reviewing notes on a printed brief in a modern conference room, soft natural light, photorealistic.",
     "16:9"),

    # SERVICES SLUGS
    ("service-permanent-placement",
     "Documentary photograph, black and white, professional at desk in glass-walled office reviewing a printed CV, three-quarter back angle, no face toward camera, soft window light, photorealistic, editorial restraint.",
     "16:9"),
    ("service-executive-search",
     "Documentary photograph, black and white, executive at large desk in glass-walled corner office reviewing a leather portfolio, three-quarter back angle, no face toward camera, late afternoon window light, photorealistic.",
     "16:9"),
    ("service-contract-to-hire",
     "Documentary photograph, hands signing a contract on a wooden conference table, fountain pen, soft natural light, no faces, photorealistic, editorial restraint.",
     "16:9"),
    ("service-temporary-staffing",
     "Documentary photograph, muted color, large open warehouse interior with workers in safety vests photographed from three-quarter back angles, no faces toward camera, photorealistic.",
     "16:9"),
    ("service-volume-hiring",
     "Documentary photograph, muted color, large open warehouse or distribution facility with multiple workers in safety vests, three-quarter back angles only, no faces toward camera, soft industrial light, photorealistic.",
     "16:9"),
    ("service-specialty-search",
     "Documentary photograph, black and white, professional in white lab coat or specialty uniform reviewing technical documents at a workbench, three-quarter back angle, no face toward camera, photorealistic.",
     "16:9"),

    # INDUSTRIES (used inline within services/locations/[city] pages and elsewhere)
    ("industries-hero",
     "Documentary photograph, black and white, executive boardroom with long conference table and large windows, late afternoon light, no people, photorealistic, restrained editorial.",
     "16:9"),
    ("industry-hospitality",
     "Documentary photograph, muted color, hotel front desk lobby interior with marble counter, soft warm light, no faces, photorealistic.",
     "16:9"),
    ("industry-logistics",
     "Documentary photograph, muted color, warehouse aisle with palletized goods, a worker visible from behind in PPE and safety vest, no face toward camera, photorealistic.",
     "16:9"),
    ("industry-healthcare",
     "Documentary photograph, muted color, clinical healthcare office interior with white coats and scrubs visible at a counter, no faces toward camera, photorealistic.",
     "16:9"),
    ("industry-manufacturing",
     "Documentary photograph, muted color, real factory floor interior with assembly equipment and a worker in helmet shot from behind, photorealistic, editorial restraint.",
     "16:9"),
    ("industry-property-services",
     "Documentary photograph, muted color, maintenance worker in uniform in a residential building hallway, three-quarter back angle, no face toward camera, soft natural light, photorealistic.",
     "16:9"),
    ("industry-professional-services",
     "Documentary photograph, muted color, open-concept modern office with two professionals mid-conversation shot from three-quarter back angles, no faces toward camera, photorealistic.",
     "16:9"),

    # EMPLOYERS / CANDIDATES (used as accent slabs on services/positions)
    ("employers-hero",
     "Documentary photograph, conference table with a printed candidate brief, two coffee cups, hands visible at the edges, soft natural window light, photorealistic, editorial restraint.",
     "16:9"),
    ("candidates-hero",
     "Documentary photograph, muted color, professional in business attire shot from three-quarter side back angle no face toward camera, leaving a glass-walled office building, golden hour, photorealistic.",
     "16:9"),

    # POSITIONS
    ("positions-hero",
     "Documentary photograph, black and white, hands holding an open notebook with handwritten notes on a desk, fountain pen visible, soft window light, restrained editorial, photorealistic.",
     "16:9"),

    # CAREERS
    ("careers-hero",
     "Documentary photograph, black and white, modern office hallway with bookshelves and natural light, no people, no readable text, photorealistic, executive briefing tone.",
     "16:9"),

    # INSIGHTS INDEX
    ("insights-hero",
     "Documentary photograph, black and white, stack of business journals or research papers on a wooden desk with reading glasses, no people, photorealistic, restrained editorial.",
     "16:9"),

    # INSIGHTS ARTICLES (3)
    ("insight-operations-grade",
     "Documentary photograph, black and white, top-down view of an open notebook with handwritten meeting notes, fountain pen, coffee cup at the edge, soft window light, photorealistic.",
     "16:9"),
    ("insight-property-services",
     "Documentary photograph, muted color, maintenance worker in uniform walking down a residential building hallway, three-quarter back angle, no face toward camera, photorealistic.",
     "16:9"),
    ("insight-day-of-need",
     "Documentary photograph, muted color, distribution facility with palletized goods at peak season, worker in safety vest visible from behind, photorealistic.",
     "16:9"),

    # LOCATIONS INDEX
    ("locations-hero",
     "Documentary photograph, black and white, North American downtown skyline at dusk with classic architectural detail, no logos, no readable text, photorealistic, editorial restraint.",
     "16:9"),

    # LOCATIONS CITIES — B&W editorial city scenes
    ("city-toronto",
     "Documentary photograph, black and white, Toronto downtown architectural detail with the CN Tower in the distance, no logos, no readable text, photorealistic, executive briefing tone.",
     "4:3"),
    ("city-new-york",
     "Documentary photograph, black and white, midtown Manhattan classic architectural detail looking up at limestone facade, no logos, no readable text, photorealistic.",
     "4:3"),
    ("city-vancouver",
     "Documentary photograph, black and white, Vancouver waterfront architectural detail with mountains in distance, no logos, photorealistic.",
     "4:3"),
    ("city-boston",
     "Documentary photograph, black and white, Boston Back Bay brownstone architectural detail, no logos, photorealistic, editorial restraint.",
     "4:3"),
    ("city-miami",
     "Documentary photograph, black and white, Miami art deco architectural detail building facade, no logos, no readable text, photorealistic.",
     "4:3"),
    ("city-atlanta",
     "Documentary photograph, black and white, Atlanta downtown architectural detail tall buildings at dusk, no logos, photorealistic.",
     "4:3"),
    ("city-chicago",
     "Documentary photograph, black and white, Chicago classic stone facade architectural detail looking up, no logos, photorealistic.",
     "4:3"),
    ("city-dallas",
     "Documentary photograph, black and white, Dallas downtown architectural detail with classic stone and glass, no logos, photorealistic.",
     "4:3"),
    ("city-los-angeles",
     "Documentary photograph, black and white, Los Angeles downtown architectural detail Art Deco building facade, no logos, photorealistic.",
     "4:3"),
    ("city-phoenix",
     "Documentary photograph, black and white, Phoenix downtown architectural detail at dusk with palm tree silhouettes, no logos, photorealistic.",
     "4:3"),
    ("city-montreal",
     "Documentary photograph, black and white, Old Montreal cobblestone street architectural detail, no logos, no readable text, photorealistic.",
     "4:3"),
    ("city-calgary",
     "Documentary photograph, black and white, Calgary downtown architectural detail with mountains in distance, no logos, photorealistic.",
     "4:3"),
    ("city-mississauga",
     "Documentary photograph, black and white, modern suburban Toronto-area office park architectural detail, no logos, photorealistic.",
     "4:3"),
    ("city-edmonton",
     "Documentary photograph, black and white, Edmonton downtown architectural detail at winter dusk, no logos, photorealistic.",
     "4:3"),
    ("city-ottawa",
     "Documentary photograph, black and white, Ottawa Parliament-area heritage stone architectural detail, no logos, no readable text, photorealistic.",
     "4:3"),
    ("city-halifax",
     "Documentary photograph, black and white, Halifax waterfront architectural detail with maritime warehouses, no logos, photorealistic.",
     "4:3"),
    ("city-winnipeg",
     "Documentary photograph, black and white, Winnipeg Exchange District heritage warehouse architectural detail, no logos, photorealistic.",
     "4:3"),
    ("city-quebec-city",
     "Documentary photograph, black and white, Old Quebec City stone architectural detail with cobblestone street, no logos, no readable text, photorealistic.",
     "4:3"),

    # CONTACT
    ("contact-hero",
     "Documentary photograph, black and white, modern reception area with a single desk and minimalist signage no readable text, soft natural light, no people, photorealistic, restrained editorial.",
     "16:9"),
]


def already_exists(key: str) -> bool:
    return (OUT / f"{key}.jpg").exists() and (OUT / f"{key}.jpg").stat().st_size > 50_000


MODEL_ORDER = [
    'imagen-4.0-generate-001',
    'imagen-4.0-fast-generate-001',
    'imagen-4.0-ultra-generate-001',
]


def main():
    client = genai.Client(api_key=KEY)
    n_done = 0
    n_skip = 0
    n_fail = 0
    log = OUT / "_gen.log"
    # Track which models hit daily quota — skip them on subsequent jobs.
    daily_exhausted = set()
    with open(log, "a") as lf:
        lf.write(f"\n--- run {time.strftime('%Y-%m-%d %H:%M:%S')} ---\n")
        for key, prompt, ar in JOBS:
            if already_exists(key):
                n_skip += 1
                lf.write(f"skip  {key}\n")
                lf.flush()
                continue
            full = prompt + NEGATIVE_GUARD
            ok = False
            for model in MODEL_ORDER:
                if model in daily_exhausted:
                    continue
                attempt = 0
                while attempt < 4 and not ok:
                    attempt += 1
                    try:
                        out = client.models.generate_images(
                            model=model,
                            prompt=full,
                            config=types.GenerateImagesConfig(
                                number_of_images=1,
                                aspect_ratio=ar,
                            ),
                        )
                        img = out.generated_images[0].image
                        b = img.image_bytes
                        if not b or len(b) < 50_000:
                            raise RuntimeError(f"image too small {len(b) if b else 0}")
                        (OUT / f"{key}.jpg").write_bytes(b)
                        n_done += 1
                        lf.write(f"done  {key}  {len(b)} bytes  ar={ar}  model={model}  attempt={attempt}\n")
                        lf.flush()
                        print(f"done {key} ({len(b)} bytes) model={model}", flush=True)
                        ok = True
                    except Exception as e:
                        msg = str(e)[:300]
                        is_rate = '429' in msg or 'RESOURCE_EXHAUSTED' in msg
                        is_daily = 'per_day' in msg or 'predict_requests_per_model_per_day' in msg
                        lf.write(f"err   {key}  model={model}  attempt={attempt}  {msg}\n")
                        lf.flush()
                        print(f"err  {key} model={model} attempt={attempt}: rate={is_rate} daily={is_daily}", flush=True)
                        if is_daily:
                            daily_exhausted.add(model)
                            break  # try next model
                        if is_rate:
                            time.sleep(70)
                        else:
                            time.sleep(6 * attempt)
                if ok:
                    break
            if not ok:
                n_fail += 1
            time.sleep(4)
        lf.write(f"summary done={n_done} skip={n_skip} fail={n_fail} exhausted={daily_exhausted}\n")
        lf.write(f"summary done={n_done} skip={n_skip} fail={n_fail}\n")
    print(f"summary done={n_done} skip={n_skip} fail={n_fail}")


if __name__ == "__main__":
    main()
