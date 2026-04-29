# Contributing

## Commit Pattern
Use Conventional Commits.

Required format:

`<type>(optional-scope): short description`

Allowed types:
- `feat`: new feature
- `fix`: bug fix
- `refactor`: refactor without behavior change
- `chore`: internal tasks (config, deps)
- `docs`: documentation
- `test`: tests
- `perf`: performance improvement

Rules:
- Use imperative verb (for example: `add`, `fix`, `remove`).
- Keep the first line up to 72 characters.
- Be specific (avoid generic messages like `update stuff`).
- One commit per logical change.
- Do not mix refactor and feature in the same commit.

Examples:
- `feat(auth): add JWT token validation`
- `fix(whatsapp): handle missing message payload`
- `refactor(calendar): simplify event creation flow`

## Pull Request Pattern
PR title must follow Conventional Commits.

PR description must include:

### Objetivo
Clearly explain what was done.

### Contexto
Explain why this change is needed.

### Mudanças principais
- Objective list of what changed.

### Como testar
1. Step-by-step validation.

### Impacto
- Does this affect other parts of the system?
- Breaking change? (`sim`/`não`)

### Checklist
- [ ] Código testado localmente
- [ ] Sem erros/lint warnings
- [ ] Logs adicionados (se necessário)
- [ ] Não quebrou funcionalidades existentes

## Local Validation
Before opening a PR, run:

```bash
# Python checks
.venv/bin/ruff check src tests
.venv/bin/pytest -q

# Commit message check example
./node_modules/.bin/commitlint --from HEAD~1 --to HEAD
```
