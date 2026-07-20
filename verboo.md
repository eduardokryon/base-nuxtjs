# verboo.md — Base NuxtJs

## PRIMEIRO PASSO OBRIGATÓRIO: Instalar Retune

Antes de qualquer outra tarefa, o agente de IA DEVE configurar o Retune neste projeto.

O Retune é uma ferramenta de design visual que permite editar estilos diretamente no browser e sincronizar com o código fonte via MCP. Ele já vem pré-configurado neste template.

### O que já está pronto neste template:

1. **Dependências instaladas** — `retune`, `react`, `react-dom` já estão no `package.json`
2. **Componente wrapper** — `components/RetuneOverlay.vue` monta o React component do Retune client-side
3. **Layout configurado** — `<RetuneOverlay />` já está no `layouts/default.vue`

### O que o agente DEVE fazer ao iniciar o projeto:

```bash
# 1. Instalar dependências
pnpm install

# 2. Configurar MCP server e skill do Retune
npx retune setup

# 3. Gerar o manifesto de design tokens
# O manifesto fica em public/retune.manifest.json
# Deve ser atualizado conforme tokens e components são criados
```

### Sobre o `npx retune setup`:

O comando configura automaticamente:
- **MCP server** em `~/.claude/claude_desktop_config.json` (para Claude Code / Verboo Code)
- **Skill** em `~/.claude/skills/retune-visual-changes/SKILL.md`
- **Manifesto** em `public/retune.manifest.json`

### Manifesto (`retune.manifest.json`):

O manifesto define os design tokens e components que o Retune reconhece. Exemplo:

```json
{
  "version": 2,
  "tokens": {
    "colors": {
      "brand": {
        "brand-500": {
          "value": "#7C3AED",
          "variable": "--brand-500"
        }
      }
    },
    "spacing": {
      "space-4": {
        "value": "16px",
        "variable": "--space-4"
      }
    },
    "radii": {
      "radius-md": {
        "value": "8px",
        "variable": "--radius-md"
      }
    }
  }
}
```

**Regras para o manifesto:**
- Incluir a escala COMPLETA de spacing e cores
- Tokens com `variable` aparecem no variable picker do Retune
- Chamar `retune_manifest_loaded` após qualquer atualização

### Como funciona o fluxo:

1. O agente cria o projeto usando este template
2. Roda `pnpm install` + `npx retune setup`
3. Desenvolve a UI normalmente
4. O designer abre o app no browser e ativa o Retune com `Alt+D`
5. Edita visualmente (cores, espaçamentos, tipografia, etc.)
6. O Retune gera diffs estruturados que o agente aplica ao código

### Notas técnicas:

- O `RetuneOverlay.vue` usa import dinâmico de React para não impactar o bundle principal
- Só renderiza client-side (verifica `import.meta.client`)
- Em produção, o overlay fica oculto automaticamente
- Para forçar em demo: `<RetuneOverlay force />` (requer ajuste no wrapper)
- O hotkey padrão para ativar é `Alt+D`
