# Introduction

Prototype for finding out what causes a mui key warning to occur inside a remote application in a module federation environment.

Preconditions

- node v20.x
- pnpm v8.x
- vite v5.x
- typescript v5.x
- react v18.x

## Getting Started

1. Clone Repo

   ```Bash
   git clone https://github.com/qsoo/mui_key_error_test.git
   ```

2. Install dependencies

   ```Bash
   pnpm i
   ```

3. Build remote apps

   ```Bash
   pnpm build:remotes
   ```

4. Preview remote apps

   ```Bash
   pnpm preview:remotes
   ```

5. Run host app

   ```Bash
   pnpm dev:hosts
   ```

## Test Result

| Remote's option | host's deploy mode |                 |
| --------------- | :----------------: | :-------------: |
|                 |        dev         | prod(+ preview) |
| default         |         O          |        X        |
| shared MUI      |         O          |        X        |
