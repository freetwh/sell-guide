#!/usr/bin/env bash
set -euo pipefail

echo "Cross-border Emotional Commerce Site Skill"
echo "Copy this folder into .agents/skills/ for Codex or zip it for Claude custom Skills."
find . -maxdepth 3 -type f | sort
