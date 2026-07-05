# Agent Notes

## Jekyll build verification

Do not spend time trying to make the Windows local Jekyll build work in this repository unless the user explicitly asks for that.

Known local issue: `bundle exec jekyll build` on this machine has repeatedly failed before completing because of Ruby/Jekyll/Liquid autoload/load-order errors, including missing constants or tags such as `Jekyll::Filters::URLFilters`, `Liquid::BlockBody::Continue`, and standard Liquid tags. These failures are environment/toolchain problems, not necessarily site-content errors.

Preferred verification for future Codex work:

- Use static checks locally: `git status`, `rg` for moved paths and `{% link %}` references, front matter inspection, and targeted file diffs.
- Rely on GitHub Actions for the real Jekyll build and htmlproofer validation.
- If a build result is required, inspect the `Site Check` workflow for branch/PR builds instead of debugging the local Windows Jekyll environment.

