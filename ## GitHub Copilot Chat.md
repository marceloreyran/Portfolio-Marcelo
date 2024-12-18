## GitHub Copilot Chat

- Extension Version: 0.22.2 (prod)
- VS Code: vscode/1.95.2
- OS: Mac

## Network

User Settings:
```json
  "github.copilot.advanced": {
    "debug.useElectronFetcher": true,
    "debug.useNodeFetcher": false
  }
```

Connecting to https://api.github.com:
- DNS ipv4 Lookup: 140.82.113.5 (99 ms)
- DNS ipv6 Lookup: ::ffff:140.82.113.5 (62 ms)
- Electron Fetcher (configured): HTTP 200 (296 ms)
- Node Fetcher: HTTP 200 (250 ms)
- Helix Fetcher: HTTP 200 (299 ms)

Connecting to https://api.individual.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 140.82.113.22 (176 ms)
- DNS ipv6 Lookup: ::ffff:140.82.113.22 (3 ms)
- Electron Fetcher (configured): HTTP 200 (235 ms)
- Node Fetcher: HTTP 200 (216 ms)
- Helix Fetcher: HTTP 200 (290 ms)

## Documentation github copilot
In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).