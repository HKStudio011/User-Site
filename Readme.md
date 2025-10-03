# Setup Tailwindcc

```
npm install tailwindcss @tailwindcss/cli --save-dev
npx tailwindcss -i ./Styles/tailwind.css -o ./wwwroot/css/tailwind.css --watch
```

# Deploy action

```
name: Deploy Blazor WASM to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup .NET
        uses: actions/setup-dotnet@v4
        with:
          dotnet-version: '8.0.x'

      - name: Publish
        run: |
          dotnet restore
          dotnet publish -c Release -p:UseAppHost=false -p:StaticWebAssetBasePath=/REPO_NAME
          PUBLISH_DIR=$(find . -path "*/bin/Release/*/publish/wwwroot" -type d | head -n 1)
          echo "Publish dir: $PUBLISH_DIR"
          mkdir -p ./_site
          cp -r "$PUBLISH_DIR/"* ./_site/

      - name: Add .nojekyll and 404.html
        run: |
          touch ./_site/.nojekyll
          cp ./_site/index.html ./_site/404.html

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./_site

      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
```
