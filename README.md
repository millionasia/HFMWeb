# HFM Website Redesign

賀民企業有限公司網站改版專案。此專案以 Nuxt 3 作為網站產生器，搭配 Tailwind CSS 建立 RWD 企業形象網站與產品頁面。

目前資料先 Mock 在 `data/millionasia.js` 的 `MillionAsia` 類別中，暫時不連接 Agile Core。

## Tech Stack

- Nuxt 3
- Tailwind CSS
- pnpm / Corepack
- Static HTML export for Tomcat

## Local Development

第一次執行請先安裝相依套件：

```bash
corepack pnpm install
```

啟動本機開發環境：

```bash
corepack pnpm dev
```

預設本機網址：

```text
http://127.0.0.1:3001
```

## Production Build

正式環境目前以 Tomcat 提供靜態網站檔案，不需要在正式主機上執行 Nuxt server 或 Node.js runtime。

輸出靜態網站：

```bash
corepack pnpm generate
```

產生結果會輸出到 `dist/`。正式部署時，請將 `dist/` 內的檔案放到 Tomcat 對應的 webapp 目錄。

如果網站部署在 Tomcat 子路徑，例如：

```text
https://example.com/hfm/
```

請在產生靜態檔前指定 `NUXT_APP_BASE_URL`：

```powershell
$env:NUXT_APP_BASE_URL='/hfm/'
corepack pnpm generate
Remove-Item Env:NUXT_APP_BASE_URL
```

然後將 `dist/` 內容部署到：

```text
tomcat/webapps/hfm/
```

注意：不要直接用 `file://` 開啟 `dist/index.html` 當作正式測試，因為圖片、CSS、JS 會受到網站路徑影響。請使用 Tomcat 或靜態網站伺服器測試。

## Environment Export Scripts

專案提供兩支 PowerShell script，讓測試環境與正式環境可以輸出到不同資料夾。

測試環境預設輸出到 `dist_staging/`，Base URL 預設為 `/hfm-staging/`：

```powershell
.\scripts\generate-staging.ps1
```

也可以透過 pnpm 執行：

```powershell
corepack pnpm generate:staging
```

正式環境預設輸出到 `dist/`，Base URL 預設為 `/`：

```powershell
.\scripts\generate-production.ps1
```

也可以透過 pnpm 執行：

```powershell
corepack pnpm generate:production
```

如果正式環境不是掛在根目錄，而是掛在 Tomcat 子路徑，例如 `/hfm/`，請這樣指定：

```powershell
.\scripts\generate-production.ps1 -BaseUrl "/hfm/"
```

如果測試環境路徑不同，也可以指定：

```powershell
.\scripts\generate-staging.ps1 -BaseUrl "/hfm-test/" -OutputDir "dist_staging"
```

重點是：不同環境若有不同網址路徑，必須分別 generate，不能只改資料夾名稱。因為 HTML 內的圖片、CSS、JS 與頁面連結會依照 `NUXT_APP_BASE_URL` 被寫入不同路徑。

## Build Check

若只要檢查 Nuxt build 是否成功，可執行：

```bash
corepack pnpm build
```

## Data Source

目前網站資料來源：

```text
data/millionasia.js
```

後續若要串接 Agile Core，需再規劃 API、資料欄位、產品分類與多語內容同步方式。
