# Anchor

A focused UI case study that demonstrates improvements to sidebar behavior inspired by issues observed on Headspace.com.

## Overview

This project was created to document sidebar UX and interaction problems, then demonstrate practical fixes in a clean implementation.

## Problem Context

The original motivation for this project came from real-world sidebar issues noticed while using Headspace.com on devices lower than 1024px.

## Problems Identified

(overflow, hidden content, non-intuitive elements, accessibility issues, etc)

| ID | Problem | User Impact | Severity |
| --- | --- | --- | --- |
| P1 | _Describe the issue_ | _What goes wrong for the user?_ | High / Medium / Low |
| P2 | _Describe the issue_ | _What goes wrong for the user?_ | High / Medium / Low |
| P3 | Inconsistent Styling | The burger menu icon is square despite all other page elements being rounded and sidebar icons being circular | High / Medium / Low |
| P4 | Non-intuitive Elements | Cannot clearly tell the buttons are clickable | High / Medium / Low |

## Implemented Fixes

Use this section to explain exactly how each problem was solved.

| Problem ID | What I Changed | Why This Fix Works | Tradeoffs / Notes |
| --- | --- | --- | --- |
| P1 | _Implementation summary_ | _Reasoning and expected outcome_ | _Any limitations or follow-up_ |
| P2 | _Implementation summary_ | _Reasoning and expected outcome_ | _Any limitations or follow-up_ |
| P3 | Consistent Styling | fixed x/y menu padding to match navbar better, | 
| P4 | Intuitive UX/UI Design |  | 

## Before vs After

Document the visible difference introduced by your solution.

- **Before:** _What behavior/layout was broken?_
- **After:** _What is improved now?_
- **How to verify:** _Steps to reproduce and confirm the fix._

## Key UX Goals

- Improve sidebar clarity and navigation flow.
- Reduce layout instability and interaction friction.
- Ensure behavior is consistent across desktop and mobile.

## What I Kept And Why

- Headspace most likely chose rounded borders intentionally. Squares are aggressive and rigid, circles are relaxing and flexible. 
- I am assuming the cursor was left as default intentially for non-routing buttons vs the routing buttons so kept that as well.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Project Structure

```text
app/                 # App Router entry and pages
components/layout/   # Layout-level components (e.g., navbar/sidebar)
components/ui/       # Reusable UI primitives
data/                # Static content data (e.g., nav links)
styles/              # Theme and shared style definitions
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Start production build

```bash
npm run start
```

## Future Improvements

- Add accessibility audit notes (keyboard/focus/screen reader).
- Add interaction/performance metrics.
- Add screenshot diffs for each problem/fix pair.

## License

Add your preferred license here.
