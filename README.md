# Playwright E2E Automation Framework

End-to-end test automation framework built with **Playwright + TypeScript**.

The project demonstrates clean architecture, Page Object Model, custom fixtures, and CI integration.

---

## Stack

- Playwright
- TypeScript
- Node.js
- GitHub Actions

---

## Architecture

- **Tests** contain business logic and assertions
- **Page Objects** encapsulate UI interactions
- **Fixtures** handle setup and navigation
- **Test data** separated from implementation

Configuration includes:

- Multi-browser execution (Chromium, Firefox)
- Parallel locally, single worker + retries in CI
- HTML reporting
- Trace, video, and screenshots on failure
- Configurable `baseURL`

---

## Local Execution

Install dependencies:

```bash
npm install
npx playwright install
```

Run tests:

```bash
npm run all:tests
```

Smoke tests only:

```bash
npm run smoke
```

Open report:

```bash
npm run report
```

---

## CI

Tests run automatically on:

- Push to `main`
- Pull requests

They can also be triggered manually from:
**GitHub → Actions → Run workflow**

HTML report is uploaded as a workflow artifact.

---

## Future Improvements

- API test coverage
- Docker execution
- Advanced reporting
- Environment management
