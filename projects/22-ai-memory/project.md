# AI Memory System

**Subtitle:** Persistent semantic memory for AI coding agents
**Category:** Python / Tooling
**Tags:** Python, MCP, sentence-transformers, Flask, CLI, SSE
**Path:** [https://github.com/dgimbialo/ai_memory_system](https://github.com/dgimbialo/ai_memory_system)
**Button:** Go to GitHub
**Platform:** Python 3 (Windows, cross-IDE)

## Purpose

A self-contained local memory engine that gives AI coding agents long-term project memory. AI agents start every chat with a blank slate and often break solutions built in earlier sessions. This system records decisions, bug fixes and features (with cause, fix and links between them), detects contradictions between past and present entries, and feeds that knowledge back into every new agent session automatically. One installation serves all projects, each with isolated storage. It is exposed three ways: an MCP server, a command-line tool, and a web dashboard.

## Key features

- Universal MCP integration: one server wires project memory into Claude Code, Cursor, VS Code and Visual Studio
- Semantic search: vector search over past entries with sentence-transformers, so recall is by meaning, not exact words
- Conflict detection and resolution: finds contradictory or near-duplicate entries and offers supersede / merge / dismiss with an audit trail
- Confidence model: time-based decay with confirm / reject, plus revert detection to demote unstable knowledge
- Semantic deduplication: detects and merges near-duplicate entries by similarity threshold
- Dependency graph: depends_on / required_by links with cycle detection and suggested links
- Auto-tagging and per-file summaries regenerated on every save
- Markdown wiki: auto-rendered with Obsidian-style wikilinks, grouped by type, file and status
- Web dashboard: local Flask UI with charts, a vis.js dependency graph, settings, an operations panel, EN/UK i18n and an SSE live-log of every command
- Per-project isolated JSON storage with atomic writes and automatic backups

## Tech Stack

| Component | Technology |
|---|---|
| Language | Python 3 |
| Integration | Model Context Protocol (MCP) server |
| Interfaces | CLI (argparse), Flask web dashboard, MCP |
| Semantic search | sentence-transformers (vector embeddings) |
| Storage | Per-project JSON files (append-first, atomic writes) |
| Dashboard | Flask, vis.js, Server-Sent Events (SSE) |
| Testing | pytest |

## Media

### Photos
- projects/22-ai-memory/foto/AI_Foto_1.png
- projects/22-ai-memory/foto/AI_Foto_2.png
- projects/22-ai-memory/foto/AI_Foto_3.png
- projects/22-ai-memory/foto/AI_Foto_4.png
- projects/22-ai-memory/foto/AI_Foto_5.png
- projects/22-ai-memory/foto/AI_Foto_6.png

### Videos

## Notes

- Local tool: one installation serves all projects, each isolated under data/projects/<slug>/
