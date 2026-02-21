import { version, displayName, description } from "../package.json"

export const getManifest = () => ({
  "{{chrome}}.manifest_version": 3,
  "{{firefox}}.manifest_version": 2,
  name: displayName,
  version,
  description,
  icons: {
    "16": "assets/icon16.png",
    "32": "assets/icon32.png",
    "48": "assets/icon48.png",
    "128": "assets/icon128.png",
  },
  permissions: ["tabs", "bookmarks", "storage"],
  chrome_url_overrides: {
    newtab: "startpage/startpage.html",
  },
  options_ui: {
    page: "options/options.html",
    browser_style: false,
  },
  browser_specific_settings: {
    gecko: {
      id: "{8a7f2c1e-9d4b-4e6a-b3f0-c5d8e2a1b4f7}",
      strict_min_version: "140.0",
      data_collection_permissions: {
        required: ["none"],
      },
    },
    gecko_android: {
      strict_min_version: "142.0",
    },
  },
})
