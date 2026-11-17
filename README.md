# ShopNext — Code Review Practice Project

## What is this?

This project exists for one purpose: **practicing code review**.

Ariel is a developer who wants to get better at reviewing pull requests the way you would at a real job. The idea is simple:

- Claude builds features and opens a **PR to `stage`** (the main branch)
- Ariel reviews the PR on GitHub — leaves comments, requests changes, approves, asks questions
- Claude reads the feedback and pushes updates to the same branch
- Once approved, the PR gets merged into `stage`
- Then Claude opens the next feature PR, and the cycle repeats

This simulates a real team workflow: feature branch → PR → review → merge.

---

## The Project

An e-commerce store called **ShopNext**, built with:

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS** for styling
- Mock data (no real backend — the focus is on the frontend code and the review process)

---

## Branch Strategy

| Branch | Role |
|---|---|
| `stage` | Main branch — all PRs target this |
| `feat/*` | Feature branches — one per PR |

There is no separate `main`. `stage` is the source of truth.

---

## Progress

### Done
- [x] **PR #1** — Product listing page ([#1](https://github.com/ariepl2023/review-practice/pull/1))
  - Homepage grid with 8 products
  - `ProductCard` component (image, price, rating, stock badge)
  - `CategoryFilter` pill buttons
  - Real-time search by product name

### Up next (planned)
- [ ] Product detail page (`/products/[id]`)
- [ ] Shopping cart (context + sidebar or drawer)
- [ ] Checkout flow
- [ ] Order confirmation page

---

## How to run locally

```bash
cd ~/Desktop/review-practice
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## How to continue in a new session

Tell Claude:
> "Continue the review-practice project. Check the README and open PRs on GitHub, then pick up from where we left off."

Claude will read this file, check what's merged into `stage`, see any open/pending PRs, and continue from there.
